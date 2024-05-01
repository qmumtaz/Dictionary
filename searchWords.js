export default (searchedWord) => fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`).then((results) => {
   console.log("results +++++++++> ",results);
    return results.json()
})
