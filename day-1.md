# Practice with cURL

In this exercise, you will use the terminal to get data from a server. We will use the terminal command `curl` and save the data to files in your repo. The WARMUPs will teach you how to access the data and the EXERCISEs will teach you how to save data to a file.

## Downloads

First, make sure you have the tools you need installed.

1. Install cURL if you haven't already done so...

Windows [install](https://winstall.app/apps/cURL.cURL)

Mac [install](https://formulae.brew.sh/formula/curl)

2. Install jq

Windows [install](https://winstall.app/apps/jqlang.jq)

Mac [install](https://formulae.brew.sh/formula/jq)

3. (optional) Install lolcatjs

Mac/Win [intall](https://www.npmjs.com/package/lolcatjs)

## Warmups

Use Chrome to download Pikachu's data. (Pikachu's ID is 25.)

    https://pokeapi.co/api/v2/pokemon/25

Use `curl` to download Pikachu's data. Type this into the terminal.

    curl https://pokeapi.co/api/v2/pokemon/25

Use `curl` to download Charmander's data. Type this into the terminal.

    https://pokeapi.co/api/v2/pokemon/4

## Practice with the redirect operator >

The > operator is the redirect operator in the SHELL. It redirects the output of a command to a file. For example, if you want to save Pikachu's data, you can use it.

EXAMPLE:

Use `curl` to download Pikachu's data and save it to a file.

   curl https://pokeapi.co/api/v2/pokemon/25 > pika.json

Use `ls` to examine that you have created a file called pika.json. Open the file in VSCode to see that it has downloaded.

TODO: Now try it yourself. Try to download Charmander's data to a file. (Charmander's ID is 4.)

Try this with three more Pokemon.

## Practice with the pipe operator |

The pipe operator allows you to filter your output through another program. For example, the `jq` program can pretty-print your JSON.

EXAMPLE: 

Use curl and jq to view Pikachu's data.

    curl https://pokeapi.co/api/v2/pokemon/25 | jq

TODO: Try this for Charmander and three other Pokemon.

BONUS: Try piping the data through lolcatjs after jq.

    curl https://pokeapi.co/api/v2/pokemon/25 | jq | lolcatjs

## Practice with pipe and redirect

Now that you know how to pipe your data to `jq`, you can add a redirect step at the end to save the pretty-printed JSON to a file.

EXAMPLE: 

Save a pretty-printed Pikachu to a file.

    curl https://pokeapi.co/api/v2/pokemon/25 | jq > pika-pretty.json

TODO: Try this with charmander and three other random pokemon.

## Extension

Go to Public APIs and find an API that interests you, or choose one at random. [link](https://public-api-lists.github.io/public-api-lists/)

Download a few and save them to a file.

## Bonus

Use `mkdir` to create a directory for your output. Then redirect your output to a file in that directory.

Example:

    mkdir poke-data
    curl https://pokeapi.co/api/v2/pokemon/25 > poke-data/pika.json 
    curl https://pokeapi.co/api/v2/pokemon/4 > poke-data/charmander.json 