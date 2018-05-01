import $ from 'jquery';
import vue from 'vue';



let content_event = '<div class="cv__content__event"';


let birth_text = '<h2>Born on 23rd September</h2><p>After a long journey I finished my school career with the bayrischen Abitur. 3.1 is not a very good finish, but it counts as the hardest Abitur in Germany.</p>';
let birth_id = ' id="birth"';
let birth = content_event + birth_id + '>' + birth_text + '</div>';

let school_start_id = 'id="school-start"';
let school_start_text = '<h2>Einschulung Untergermaringen</h2><p>After a long journey I finished my school career with the bayrischen Abitur.3.1 is not a very good finish, but it counts as the hardest Abitur in Germany.</p>';
let school_start = content_event + school_start_id + '>' + school_start_text + '</div>';


let y1996 = $('#1996');
let y2002 = $('#2002');



class CV {
  constructor() {
    let counter = 0;
    console.log('All' + counter);
    y1996.click(function () {
      if (counter == 0) {
        $('.cv__content__container').append(birth);
      } else{
        $('.cv__content__event').remove();
        $('.cv__content__container').append(birth);
        return counter = 0;
      }
      //Sidebar
      $(this).addClass('is-active');
      y2002.removeClass('is-active');
      //Content
      counter++;
      console.log('1996 ' + counter);

    });
    y2002.click(function () {
      if (counter == 0) {
        $('.cv__content__container').append(school_start);
      } else{
        $('.cv__content__event').remove();
        $('.cv__content__container').append(school_start);
        return counter = 0;
      }

      //Sidebar
      $(this).toggleClass('is-active');
      y1996.removeClass('is-active');

      //Content
      counter++;
      console.log('2002 ' + counter);
    });
    
  }
}




export default CV;




            // <div class="cv__content__event" id="gym-start">
            //       <h2>Einschulung Gymnasium Marktoberdorf</h2>
            //       <p>After a long journey I finished my school career with the bayrischen Abitur.
            //         3.1 is not a very good finish, but it counts as the hardest Abitur in Germany.</p>
            // </div>
            // <div class="cv__content__event" id="abitur">
            //   <h2>Abitur</h2>
            //   <p>I-Finance is an Insurance Agency with focus on non provision based insurances.
            //     The were founded in 2013 and are very young. Working with them was a lot of fun
            //     and I learned much about Marketing in a StartUp or designig a website.</p>
            //   </div>
            // <div class="cv__content__event" id="uni-start">
            //   <h2>Abitur</h2>
            //     <p>I-Finance is an Insurance Agency with focus on non provision based insurances.
            //       The were founded in 2013 and are very young. Working with them was a lot of fun
            //       and I learned much about Marketing in a StartUp or designig a website.</p>
            // </div>
            // <div class="cv__content__event" id="ifinance">
            //   <h2>Praktikum I-Finance August 1st</h2>
            //   <p>I-Finance is an Insurance Agency with focus on non provision based insurances.
            //     The were founded in 2013 and are very young. Working with them was a lot of fun
            //     and I learned much about Marketing in a StartUp or designig a website.</p>
            // </div>
