function timelineChanged() {
  var timelinePosition = document.getElementById("timeline").value;

  
  /////////////////////////////////////////////////////////
  //                                                     //
  // Change the value for each index of the arrays below //
  //                                                     //
  /////////////////////////////////////////////////////////
  
  
   var timelineDate = [
    "1917-1939",
    "1943-1966",
    "1957-1966",
    "1966-2019",
    "Today",
    "Today",
  ];
  
  var timelineHeadlines = [
    "Asbestos in Western Australia",
    "Wittenoom: A Mining Town",
    "Mounting Health Concerns",
    "Shutting Down Mining: The Ghost Town of Wittenoom",
    "Deadly Outcomes",
    "Environmental Concerns",
  ];

  var timelineImages = [
    "https://github.com/rachelstowers/rachelstowers.MCO-102-website/blob/main/1-blue_asbestos.jpg?raw=true",
    "https://cdn.glitch.com/39045d83-3b3c-48a5-b8fe-817b8c9e978b%2F2-wittenoom_gorge_mine.jpg?v=1587081790865",
    "https://cdn.glitch.com/39045d83-3b3c-48a5-b8fe-817b8c9e978b%2F3-medicine.jpg?v=1588102691273",
    "https://cdn.glitch.com/39045d83-3b3c-48a5-b8fe-817b8c9e978b%2F4-wittenoom-ghosttown.jpg?v=1588102754126",
    "https://cdn.glitch.com/39045d83-3b3c-48a5-b8fe-817b8c9e978b%2F5-asbestos-wittenoom-sign.jpg?v=1588102854104",
    "https://cdn.glitch.com/39045d83-3b3c-48a5-b8fe-817b8c9e978b%2F6-asbestos_tailings_wittenoom_gorge.jpg?v=1588102905325",
  ];
  
  var timelineText = [
    "The discovery of blue asbestos (Crocidolite) in Western Australia was recorded in 1917 by the Western Australian Mines Department (Bennett, n.d.). In 1939, Lang Hancock and his partner, Peter Wright, established an asbestos crushing plant in Wittenoom (Asbestos Diseases Society of Australia, 2018).",
    "As reported by the Asbestos Diseases Society of Australia (2018), the Colonial Sugar Company (CSR) purchased Hancock and Wright's mill and leases in 1943. Mining began at Wittenoom Gorge in April of that year. There were approximately 20,000 people living in Wittenoom during the CSR's blue asbestos mining and milling operations. Around 7,000 residents were employees at the Wittenoom mill and mines.",
    "According to the Asbestos Diseases Society of Australia (2018), in 1962, Dr. Jim McNulty AO, the visiting chest physician and mines medical officer at the Wittenoom mine, diagnosed a worker with mesothelioma–the first case in Australia. He reported the case to the CSR, making the company aware that continuing to operate the mine without proper dust suppression would pose a major health hazard for mine and mill workers. Regardless of several other warnings from health care providers and mine inspectors, the CSR proceeded with mine and mill operations in Wittenoom without implementing appropriate dust suppression procedures.",
    "On December 31, 1966, the CSR closed its Wittenoom mining and milling operations because of a decline in profits and decrease in asbestos prices (Asbestos Diseases Society of Australia, 2018). In 1978, the Western Australia government began phasing out government services to the town due to the health risk of asbestos fibers (Government of Western Australia, 2019). Residents were encouraged to leave the area. In 2006, Wittenoom was removed from official maps and road signs (Mao, 2018). The town was formally de-gazetted in June 2007 (Government of Western Australia, 2019). As of December 2019, Mario Hartmann, a remote weatherman, was the last resident remaining (White, 2019).",
    "The blue asbestos mining and milling operations that took place in Wittenoom, Western Australia had far-reaching effects on town and state residents. Asbestos-related diseases devastated the town of Wittenoom, causing death and long-term illness for miners and residents. The Asbestos Diseases Society of Australia (2018) reported that over 2000 Wittenoom residents have died from asbestos diseases. Furthermore, Western Australia has the highest rate of malignant mesothelioma in the world, a disease with is largely caused by asbestos exposure (Selby, 2020).",
    "The blue asbestos from mining in Wittenoom has had devastating environmental outcomes. Decades after operations closed, mining waste still remains at the abandoned sites. Mounds of asbestos tailings in Wittenoom Gorge contaminate the land and watershed in surrounding areas (Australian Associated Press, 2019; Government of Western Australia, 2019).",
  ];

  if ( timelinePosition == "0" ) {
    setTimelineDate( timelineDate[0] );
    setTimelineHeadline( timelineHeadlines[0] );
    setTimelineImage( timelineImages[0] );
    setTimelineText( timelineText[0] );
  }
   if ( timelinePosition == "1" ) {
    setTimelineDate( timelineDate[1] );
    setTimelineHeadline( timelineHeadlines[1] );
    setTimelineImage( timelineImages[1] );
    setTimelineText( timelineText[1] );
  }
  
   if ( timelinePosition == "2" ) {
    setTimelineDate( timelineDate[2] );
    setTimelineHeadline( timelineHeadlines[2] );
    setTimelineImage( timelineImages[2] );
    setTimelineText( timelineText[2] );
  }
  
  if ( timelinePosition == "3" ) {
    setTimelineDate( timelineDate[3] );
    setTimelineHeadline( timelineHeadlines[3] );
    setTimelineImage( timelineImages[3] );
    setTimelineText( timelineText[3] );
  }
  
  if ( timelinePosition == "4" ) {
    setTimelineDate( timelineDate[4] );
    setTimelineHeadline( timelineHeadlines[4] );
    setTimelineImage( timelineImages[4] );
    setTimelineText( timelineText[4] );
  }
  
  if ( timelinePosition == "5" ) {
    setTimelineDate( timelineDate[5] );
    setTimelineHeadline( timelineHeadlines[5] );
    setTimelineImage( timelineImages[5] );
    setTimelineText( timelineText[5] );
  }
  
  if ( timelinePosition == "6" ) {
    setTimelineDate( timelineDate[6] );
    setTimelineHeadline( timelineHeadlines[6] );
    setTimelineImage( timelineImages[6] );
    setTimelineText( timelineText[6] );
  }

  
  //Copy the above if statement to generate 
  //at least four total positions of the timeline.
  
  //Hint: You'll want to change the index from 0!
  //Remember, the index of an array starts at 0!

}










/////////////////////////////////
//                             //
// Do not alter the code below //
//                             //
/////////////////////////////////





function setTimelineHeadline( headline ) {
  document.getElementById("headline").innerHTML = headline;
}

function setTimelineDate( date ) {
  document.getElementById("date").innerHTML = date; 
}

function setTimelineImage( image ) {
  document.getElementById("image").src = image;   
}

function setTimelineText( text ) {
  document.getElementById("text").innerHTML = text; 
}

var modified = document.lastModified
