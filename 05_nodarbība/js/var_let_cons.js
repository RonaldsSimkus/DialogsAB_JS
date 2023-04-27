{
    console.log("izdruka no bloka, mainīgā a vērtība - " + a);
    {
      console.log("izdruka apakšbloka, mainīgā a vērtība - " + a);
    }
  }

  {
    var a = 10;
    console.log("izdruka no bloka, mainīgā a vērtība - " + a);
    {
      a = a * a;
      console.log("izdruka apakšbloka, mainīgā a vērtība - " + a);
    }
  }

  {
    let b = 10;
    console.log("izdruka no bloka (pirms), mainīgā b vērtība - " + b);
    {
      const b = 30;
      console.log("izdruka apakšbloka, mainīgā a vērtība - " + b);
    }
    console.log("izdruka no bloka (pēc), mainīgā b vērtība - " + b);
  }
