'use strict';

// 1. Получите ссылку на .scrollCheck
let scrollCheck = ;

/**
 * Инициализация. При открытии страницы вставляем несколько постов
 * на страницу 
 */
function init() {
    // 4. Если условие истинно, то вызывайте insertPosts и рекурсивно вызывайте
    // init.
    if (window.innerHeight === document.body.offsetHeight) {
        
    }
}
init();

document.addEventListener('scroll', function(event) {
    if (scrollCheck.getBoundingClientRect().top <= window.innerHeight) {
        // 5. Если условие истинно вызывайте insertPosts.
        
    }
});

/**
 * Функция вставляет несколько постов на страницу.
 */
function insertPosts() {
    // 3. в postsMarkup вам надо будет в цикле дописывать с помощью конкатенации
    // разметку, возвращаемую getPostMarkup.
    // 3.1 в getPostMarkup в качестве аргумента передавайте счетчик цикла
    let postsMarkup = '';
    
    // 3.2 Перед scrollCheck вставьте записанную в postsMarkup разметку
    
}

/**
 * Функция возвращает html-разметку для одного поста, который будет
 * вставляться на страницу.
 * @param {number} counter число, для того, чтобы прибавить его ко времени unix.
 * @returns {string} html-разметка одного поста
 */
function getPostMarkup(counter) {
    /* 2. Сделайте, чтобы в num записывалось текущее время unix (https://mzl.la/3iMz2Jr)
    плюс counter
    */
    let num =  + counter;
    return `<div class="post">
        <img src="https://picsum.photos/200/300?random=${num}">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente suscipit aut? Veniam perspiciatis esse nesciunt ipsum numquam harum velit cumque libero provident voluptatibus iste, alias minus mollitia magni beatae dolor sunt accusantium quidem ipsa exercitationem repellendus reiciendis eaque? Iusto veritatis harum illo tenetur quam explicabo temporibus eum odit, reprehenderit unde maxime sequi incidunt atque beatae accusamus vero officiis dignissimos quasi libero ex ducimus labore asperiores iure. Unde id pariatur eius! Reiciendis similique aperiam quo consequuntur explicabo, enim, reprehenderit aspernatur, vel magni dolor voluptatem maiores quis quam odit deserunt eaque nemo autem optio? Reprehenderit cupiditate nisi nostrum exercitationem adipisci, repudiandae odio ab temporibus dolores, sunt repellat inventore ad fugiat praesentium debitis ipsam deleniti eius eligendi, nobis delectus doloremque mollitia? Quisquam sapiente similique officia officiis laudantium deserunt accusantium alias perspiciatis dolore illum. Rem blanditiis, optio exercitationem ipsam hic laudantium accusamus officiis iste sequi totam ullam, quam sunt eos a commodi modi excepturi! Ex earum deserunt possimus hic inventore sint impedit numquam veritatis harum tempore aut, velit quae maxime aliquid optio consequuntur quam dignissimos explicabo nam fugit temporibus iste aspernatur quisquam. In fugiat aut qui eaque? Aliquam consectetur minus ipsum numquam. Rerum illum illo sit repellat expedita doloribus excepturi nobis nihil! Ratione asperiores reprehenderit velit natus, sunt est, non suscipit impedit culpa dolore molestiae commodi. Dolorem reprehenderit eius, hic similique vel ullam eum eveniet asperiores aspernatur dicta neque nostrum nam quo! Dolorum fugit nobis id cum laborum magnam. Qui dolor, consectetur provident et ea quae dolore necessitatibus assumenda beatae hic odit molestias saepe mollitia! Suscipit quae molestias iure at laboriosam, similique necessitatibus ipsam dolores perspiciatis! Soluta atque vero at, sit fugiat vitae nulla sapiente accusantium, quas maxime nesciunt tempora sed reprehenderit ut. Illum, tenetur ipsam corporis reiciendis similique harum sequi quas voluptate tempore, perferendis dolore, suscipit est incidunt expedita rerum quo. Consectetur ab placeat libero tempora. Beatae soluta nihil dolore? Laboriosam itaque iste hic modi, natus adipisci totam porro voluptatibus asperiores amet consequatur quidem quasi maxime repellat error delectus sapiente. Repellendus, totam, illo rerum non enim assumenda corporis fuga molestias quibusdam recusandae a amet accusantium at, velit adipisci quas mollitia eligendi alias est voluptatum temporibus beatae molestiae? Dolores pariatur quisquam excepturi hic dignissimos illum voluptas, asperiores deserunt quos a quod culpa autem nemo veniam molestiae maiores fuga provident quam quibusdam tenetur repellat necessitatibus deleniti. Earum itaque similique magni suscipit voluptatum, soluta voluptate ratione quis vero nesciunt pariatur perferendis, odit quaerat, doloribus quia.
    </div>`;
}