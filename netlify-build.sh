#!/bin/bash

# Cria uma cópia do arquivo App.netlify.tsx como App.tsx
cp -f client/src/App.netlify.tsx client/src/App.tsx

# Executa o build da aplicação
npm run build

# Copia o arquivo _redirects para a pasta de saída
cp -f _redirects dist/public/