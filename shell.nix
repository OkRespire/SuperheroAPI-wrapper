{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShell {
  name = "superhero-api-wrapper";

  buildInputs = with pkgs; [
    nodejs_24
    yarn
    typescript
    nodePackages.ts-node
  ];
}
