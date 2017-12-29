headline_title_array = ["LEADERSHIP & TEAM FOCUS", "PROJECT MANAGEMENT", "VENDOR RELATIONS"];
headline_text_array = ["The heart and soul of a business is its people". "Personal and team development is always the cornerstone of a successful project.", "Capable of managing multiple areas of responsibility without sacrificing outcomes and seeing the big picture without missing any details.", "Making all the moving parts work together and establish clear channels of communication to ensure success."];

window.onload = function () {

  current_position_in_headline_array = 0;
  setInterval(changeHeadlineInfo, 5000);

  function changeHeadlineInfo() {
    // Guard against a mismatched array length which can result in unwanted pairings
    if (headline_text_array.length == headline_title_array.length) {
      var number_of_items = headline_text_array.length;

      // Use jQuery to select the element to fade out and then fade in with new text
      $("#headline-title").text(function(){
        $(this).fadeOut(1500, function (){
            $(this).text(headline_title_array[current_position_in_headline_array]).fadeIn(1000);
        });
      });

      $("#headline-text").text(function(){
        $(this).fadeOut(1500, function (){
          $(this).text(headline_text_array[current_position_in_headline_array]).fadeIn(1000);
        });
      });

      current_position_in_headline_array++;

      if (current_position_in_headline_array >= number_of_items) {
        current_position_in_headline_array = 0;
      }
    }
  }
}
