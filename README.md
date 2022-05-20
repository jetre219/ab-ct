# Abbeal Coding Challenge

This is the algorithmic coding challenge

## Prerequisite steps

In order to run this code you need to have these tools installed

- `node` -> I personnaly use version `16.13.2` from the `.nvmrc`. I recommand using `nvm` to keep
the pace with the node versions of this project, but it is not required. As long as you have node installed

- `yarn` -> Dependencies are installed using yarn and scripts are run using it as well.

Once you have the tools installed simply run `yarn install` to install the dependencies and
refer to the Available scripts section to see what can be done in this project.

## Available scripts

### yarn test

Running `yarn test` will execute all test from the `resolveObjects` functions. It includes the test
given in the challenge and also a few tests I've added as I was resolving the algorithmic problem
in order to make sure that everything was executing fine.

### yarn lint

Running `yarn lint` will lint the code. As I was coding this challenge, it was very tedious to keep
a perfect code syntax, so I decided to add a basic `eslint` check in order to make sure that my code
is well formatted.