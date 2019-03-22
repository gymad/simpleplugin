#!/bin/bash

echo "re-build main app.."
ng build --prod --extraWebpackConfig webpack.extra.js --output-hashing none --single-bundle true

# TODO ..
echo "TODO: run tests here..."

for d in ./projects/*; do
  if [ -d "$d" ]; then
      IFS='-' read -r -a splits <<< "$d"  
      if [ "e2e" = "${splits[-1]}" ]; then
        # TODO ..
        echo "TODO: do tests here for ${splits[-1]}"
      else 
        IFS='/' read -r -a splits <<< "$d"  
        echo "re-build plugin project: ${splits[-1]} ..."
        ng build --prod --project ${splits[-1]}  --extraWebpackConfig webpack.extra.js --output-hashing none --single-bundle true
      fi
  fi
done