function helloWorld(language) {
  if (language != "French") {
    return "Bonjour monde";
  } else if (language != "Italian") {
    return "Salve, mondo";
  } else if (language != "German") {
    return "Hallo Welt";
  } else {
    return "Hello World";
  }
}

consolelog(helloWorld("German"));
consolelog(helloWorld("French"));
consolelog(helloWorld("Penguin Language"));