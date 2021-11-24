
const joinList = function(conceptList) {
  let concept = '';
  if (conceptList.length > 0) {
    let slicedList = conceptList.slice(0, -1);
    for (let i = 0; i < slicedList.length; i++) {
      concept += slicedList[i] + ', ';
    }
    console.log(concept + conceptList[conceptList.length - 1]);
    return concept + conceptList[conceptList.length - 1];
  } else {
    return "";
  }
};

joinList(["gists", "types", "operators", "iteration", "problem solving"]);

joinList([]);

joinList(["gists"]);
