const input = document.querySelectorAll('.custom-input input, .custom-input textarea');
input.forEach(item => {
    item.oninput = () => {
        let inputValue = item.value;
        inputValue.length > 0 ? item.classList.add('focus') : item.classList.remove('focus')
    };
})

const checkbox = document.querySelectorAll("[type='checkbox'], [type='radio']");
checkbox.forEach(item => {
    item.closest('.custom-input').classList.add('checked-box')
})


const typePassword = document.querySelectorAll('[type="password"]');

typePassword.forEach(password => {

    const id = password.getAttribute('id')
    const link = document.createElement('a');
    link.href = "#" + id;
    link.className = 'show';
    link.title = 'show';


    password.before(link);

    link.addEventListener("click", (e) => {
        e.preventDefault()
        if (password.type === "password") {
            password.type = "text";
            link.classList.add('hide')
            link.classList.remove('show');
            link.title = 'hide';
        } else {
            password.type = "password";
            link.classList.add('show');
            link.classList.remove('hide');
            link.title = 'show';
        }
    })
})


const inputDropdown = document.querySelectorAll('.dropdown-input')



inputDropdown.forEach(input => {
    const inputWrapp = input.closest('.custom-input');
    const inputLabel = inputWrapp.querySelector('label');
    const inputWrappOptions = inputWrapp.querySelectorAll('.dropdown-input-values__item');
    const inputThis = inputWrapp.querySelector('.dropdown-input');

    inputWrapp.classList.add('close-dropdown')

    if (input.hasAttribute('value')) {
        input.classList.add('focus')
    }


    input.addEventListener('click', () => {



        inputWrapp.classList.toggle('active-dropdown');
        inputThis.classList.toggle('focus');
        inputWrappOptions.forEach(item => {
            item.addEventListener('click', () => {
                const itemValue = item.textContent
                console.log(itemValue);
                inputThis.setAttribute("value", itemValue);
                inputThis.classList.add('focus')

                inputWrapp.classList.remove('active-dropdown')

                inputLabel.style.transitionProperty = "top";
            })
        })


    })
})
 

if (document.querySelector('.docks-box')) {
    const docksBox = document.querySelectorAll('.docks-box')
    docksBox.forEach(item => {
        const input = item.querySelectorAll('.custom-input');
        
        if (input.length === 2) {
            item.classList.add('two-col');
        } else {
            null
        }
    })
}

if(document.querySelector('[type="radio"]')){
    const radioBtn = document.querySelectorAll('[type="radio"]');
    radioBtn.forEach(radio => {
        radio.closest('.component').classList.add('radiobuttons-box')
    })
}

 


if (document.querySelector('#drop-zone')) {


    const dropZone = document.getElementById("drop-zone");
    const fileInput = document.getElementById('file-input')
    // Функция для обработки события Drag & Drop
    function handleDrop(e) {
        e.preventDefault();
        dropZone.classList.remove("hover");

        const files = e.dataTransfer.files;
        if (files.length) {
            document.getElementById("file-input").files = files;
            updateThumbnail(files[0]);
        }
    }

    // Функция для обработки события перетаскивания над зоной
    function handleDragOver(e) {
        e.preventDefault();
        dropZone.classList.add("hover");
    }

    // Функция для обработки события выхода за пределы зоны Drag & Drop
    function handleDragLeave() {
        dropZone.classList.remove("hover");
    }

    // Функция для обновления отображения загруженного файла
    function updateThumbnail(file) {
        const thumbnail = document.createElement("div");
        thumbnail.innerHTML = file.name;
        document.getElementById("drop-zone").appendChild(thumbnail);
    }

    // Обработчики событий
    dropZone.addEventListener("dragover", handleDragOver);
    dropZone.addEventListener("dragleave", handleDragLeave);
    dropZone.addEventListener("drop", handleDrop);

    // Обработчик события выбора файла через input[type="file"]
    document.getElementById("file-input").addEventListener("change", function() {
        updateThumbnail(this.files[0]);
    });

    dropZone.addEventListener('click', () => {
        fileInput.click();
    });
}



jQuery(document).ready(function($) {
    const $window = $(window);
    const $header = $('header');

    function adopFirstscreen() {

        if ((window.matchMedia('(max-width: 1024px)').matches) && $('.form-exchange').length) {
            $('.form-exchange').closest(".banner").find($('.banner-subtitle, .banner-title')).appendTo('.banner-col-right');
        } else {
            null
        }
    }
    adopFirstscreen()


    $window.scroll(onScroll);

    function onScroll() {
        if ($window.scrollTop()) {
            $header.addClass('header-fixed');
            $('body').css('padding-top', $header.outerHeight())
        } else {
            $header.removeClass('header-fixed');
            $('body').css('padding-top', "0")
        }
    }

    function adopFirstscreenSlider() {
        if ((window.matchMedia('(max-width: 1024px)').matches)) {
            $('.first-screen-slider').on('afterChange', function(event, slick, currentSlide) {
                var slideHeight = slick.$slides.eq(currentSlide).find($('.banner')).outerHeight();
                slick.$slider.css('height', slideHeight + 'px');
            });

            var firstScreenHeight = $('.slick-current').find($('.banner')).height() - 56;
            $('.slick-slider').css('height', firstScreenHeight);

        } else {
            null
        }
    }


    if ($('.first-screen-slider').length) {
        $('.first-screen-slider').slick({
            dots: true,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            fade: true,
            speed: 500,
            infinite: true,
            cssEase: 'ease-in-out',

            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        // autoHeight: true,
                        dots: false,
                    }
                },

            ]
        })

        adopFirstscreenSlider()
    }
    if ($('.slider-review').length) {
        $('.slider-review').slick({
            dots: false,
            arrows: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            fade: true,
            speed: 500,
            infinite: true,
            cssEase: 'ease-in-out',
            appendArrows: '.slider-review__nav',
        })
    }




    if ($("[type='tel']").length) {
        $("[type='tel']").mask('+38(000)-00-00-000');
        $("[type='tel']").addClass('focus')
    }

    if ($('.date').length) {
        $('.date').mask('00/00/0000');
    }

    if ($('main.home').length) {
       $('header').addClass('home-page');
    }


    if ($('select').length) {
        $('select').wrap("<div class='select-wrap'></div>");
        $('select').niceSelect();
        $('.nice-select .list').addClass('scroll');
    }

    if ($('main.home').length) {
        $("header").addClass('before-transparent')
    }

    if ($('.exchange-aplication').length) {
        $('.exchange-info').addClass('has-commission')
    }

    $(".menu-item-has-children, .country-now").append(
        `<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3L7 9L13 3" stroke="#8E938C" stroke-width="2"/>
        </svg>
        `);




    $(".menu-item-has-children svg").click(function() {

        $(this).parent().toggleClass("open-menu");
        $(this).parent().siblings().removeClass("open-menu");

        if ($(document).width() < 1024) {
            $(this).siblings(".sub-menu").slideToggle();
        }
    });
    $(".country-now").click(function() {
        $(this).closest('.country').toggleClass("open-menu");
        $('.menu-item-has-children').removeClass('open-menu')
    });




    $(document).click(function(e) {
        if (!$(e.target).hasClass("open-menu") &&
            $(e.target).parents(".open-menu").length === 0) {
            $(".menu-item-has-children").removeClass('open-menu');
        }
        if (!$(e.target).hasClass("open-dropdown") &&
            $(e.target).parents(".lang-dropdown").length === 0) {
            $(".lang-dropdown").removeClass('open-dropdown');
        }
        if (!$(e.target).hasClass("open-dropdown") &&
            $(e.target).parents(".lang-dropdown").length === 0) {
            $(".lang-dropdown").removeClass('open-dropdown');
        }
        if (!$(e.target).hasClass("open-dropdown") &&
            $(e.target).parents(".country").length === 0) {
            $(".country").removeClass('open-menu');
        }
    });


    $('.accordion').on('click', '.accordion-control', function() {
        $(this).toggleClass('active').next('.accordion-panel').not(':animated').slideToggle();
    });



    function selectIcons() {

        const selects = document.querySelectorAll('select');
        selects.forEach(item => {


            const attrArr = []


            const optionsList = item.querySelectorAll('option')
            const selectWrapp = item.closest('.select-wrap')
            const customSelect = selectWrapp.querySelectorAll('.nice-select li')


            optionsList.forEach(option => {
                const optionsDataIcon = option.getAttribute('data-icon')
                attrArr.push(optionsDataIcon)
            })

            for (var i = 0; i < customSelect.length; i++) {
                customSelect[i].setAttribute('style', 'background-image: url(' + attrArr[i] + ');');

            }

            customSelect.forEach(list => {
                list.addEventListener('click', () => {
                    const current = list.closest('.nice-select').querySelector('.current')
                    const checkItem = list.getAttribute('style')
                    current.setAttribute('style', checkItem)
                })
            })

            const selectTitle = selectWrapp.querySelector('.current')
            const selectedItem = selectWrapp.querySelector('.selected')
            const pathIcon = selectedItem.getAttribute('style')

            selectTitle.setAttribute('style', pathIcon)
        })
    }
    selectIcons();


    const mediaQuery = window.matchMedia('(min-width: 1025px)')
    // Check if the media query is true
    if (mediaQuery.matches) {
        $('.testimonials').each(function() {
            $(this).find('.comment:nth-child(even)').addClass('even')
            var even = $(this).find('.even')
            var secondCol = $(this).find('.second')
            even.appendTo(secondCol);
        });
    }






});