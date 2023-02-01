npm run lint
rm -rf ./dist
./node_modules/typescript/bin/tsc
find ./dist -name "*.js" -type f -delete
NODE_ENV=production ts-node ./esbuild/build.ts