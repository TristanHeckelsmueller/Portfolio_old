import $ from 'jquery';
import vue from 'vue';



let content_event = '<div class="cv__content__event"';


let birth_text = '<h2>Born on 23rd September</h2><p>After a long journey I finished my school career with the bayrischen Abitur. 3.1 is not a very good finish, but it counts as the hardest Abitur in Germany.</p>';
let birth_id = ' id="birth"';
let birth = content_event + birth_id + '>' + birth_text + '</div>';

let school_start_id = 'id="school-start"';
let school_start_text = '<h2>Einschulung Untergermaringen</h2><p>After a long journey I finished my school career with the bayrischen Abitur.3.1 is not a very good finish, but it counts as the hardest Abitur in Germany.</p>';
let school_start = content_event + school_start_id + '>' + school_start_text + '</div>';



console.log(birth);

let counter = 0;
class CV {
  constructor() {
    $('#1996').click(function () {
      $(this).toggleClass('is-active');
      counter++;
      console.log(counter);
      if (counter <= 1) {
        $('.cv__content__container').append(birth);
      } else{
        $('.cv__content__event').remove();
          return counter = 0;
      }
    });
    $('#2002').click(function () {
      $(this).toggleClass('is-active');
      counter++;
      console.log(counter);
      if (counter <= 1) {
        $('.cv__content__container').append(school_start);
      } else{
        $('.cv__content__event').remove();
        $('.cv__content__container').append(school_start);
        return counter = 0;
      }
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
