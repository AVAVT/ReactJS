# Practice - English Dictionary

## 1. Create search bar UI

Refer to the video for expected design

## 2. Typeahead

Each time user type into the search input, send an ajax `GET` request to `/typeahead` to find word suggestion. To react to user input, use the `input` event: 

```javascript
$("#search").on('input', (e) => { 
  $.ajax({
    method: "get",
    url: "/typeahead",
    data: { search: /* search input here */ }
  })
  ...
})
```

Server return data is in this format:

```javascript
{
  search: "search input sent to server",
  result: [ "array", "of", "string", "containing", "suitable", "words" ]
}
```

Display word hints in a list below the search input.

NOTE: For this task, you will need to find a way to account for request latency while searching for typeahead. Make sure that you only display suggestion for user's current input.

## 3. Showing dictionary lookup result

User can submit the search form by:

- pressing enter in the input
- clicking the Go button
- clicking on a word in the hint list

Send an ajax `GET` request to `/lookup` with the search value. This api expect the same data as `/typeahead`, but return the definition instead:

```javascript
{
  search: "search input sent to server",
  result: "definition of the lookup word"
}
```

Note: don't forget to prevent the form from actually submitting before sending ajax request.