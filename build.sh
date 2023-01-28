npm run lint
rm -rf ./dist
./node_modules/typescript/bin/tsc
find ./dist -name "*.js" -type f -delete
ENVIRONMENT=production ts-node ./esbuild/build.ts