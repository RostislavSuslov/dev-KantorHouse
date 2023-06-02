<?php
$page_id = get_option( 'page_on_front' );

$book = get_field( 'book', $page_id );

if ( ! empty( $book ) ) :
?>
 <section class="book">
    <div class="container">
        <div class="template-title">
            <h2>
                ще не обміняв?
            </h2>
            <h4>
                не зволікай та забронюй суму онлайн за найвигіднішим курсом
            </h4>
        </div>
        <a href="tel:+48883160023" class="btn btn-info">забронювати</a>
        <div class="book-img">
            <img src="assets/img/book-img.png" alt="book">
        </div>
    </div>
</section>

<?php
endif;