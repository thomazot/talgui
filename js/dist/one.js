(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _zot = _interopRequireDefault(require("../zot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tema:     Neon
 * Versão:   1.0
 * Update:   05/2016
 */
;

(function ($) {
  $.fn.neonTheme = function (options) {
    var neon = $.extend({}, $.fn.neonTheme.custom, options);
    /**
     * dropFrom()
     */

    if (neon.default_dropFrom !== false) {
      var drops = ['.mywish', '.mycart', '.myaccount', '.categories:not(.categories--carrossel) .li--0', '.search__filter'];
      $j(document).ready(function (e) {
        drop_from(drops);
      });
      $j(window).on('resizeStop', function (e) {
        drop_from(drops);
      }).on('scrollStop', function (e) {
        drop_from(drops);
      });
    }

    if (neon.dropFrom !== false) {
      $j(document).ready(function (e) {
        drop_from(neon.dropFrom);
      });
      $j(window).on('resizeStop', function (e) {
        drop_from(neon.dropFrom);
      }).on('scrollStop', function (e) {
        drop_from(neon.dropFrom);
      });
    }
    /**
     * fix_IE_SVGs()
     */


    if (neon.fix_IE_SVGs !== false) {
      $j(document).ready(function (e) {
        fix_IE_SVGs();
      });
      $j(window).on('resizeStop', function (e) {
        fix_IE_SVGs();
      });
    }
    /**
     * default_categories_justify()
     */


    if (neon.default_categories_justify !== false) {
      $j(document).ready(function (e) {
        default_categories_justify();
      });
      $j(window).on('resizeStop', function (e) {
        default_categories_justify();
      });
    }
    /**
     * default_categories_mini()
     */


    if (neon.default_categories_mini !== false) {
      $j(document).ready(function (e) {
        default_categories_mini();
      });
    }
    /**
     * default_carrossel_produtos()
     */


    if (neon.default_carrossel_produtos !== false) {
      $j(document).ready(function (e) {
        default_carrossel_produtos();
      });
    }
    /**
     * fix_zoomHeader()
     */


    if (neon.fix_zoomHeader !== false) {
      $j(document).ready(function (e) {
        fix_zoomHeader();
      });
    }
    /**
     * addSVG() - defaults
     */


    if (neon.default_SVGs !== false) {
      var truck = {
        'img-truck': {
          selector: '.frete__title',
          mode: 'append'
        }
      };
      var svgs = {
        'img-truck': {
          selector: '.addresses-primary ol li:last-child h3, .order-info-box .shipping-address h2',
          mode: 'prepend'
        },
        'img-os-new': {
          selector: '.order-status.state-new, .order-status.state-pending_payment, .order-status.state-payment_review'
        },
        'img-os-ok': {
          selector: '.order-status.state-processing'
        },
        'img-os-sent': {
          selector: '.order-status.state-complete'
        },
        'img-os-hold': {
          selector: '.order-status.state-holded'
        },
        'img-os-cancel': {
          selector: '.order-status.state-closed, .order-status.state-canceled'
        },
        'img-bill': {
          selector: '.addresses-primary ol li:first-child h3, .order-info-box .billing-address h2',
          mode: 'prepend'
        },
        'img-track': {
          selector: '.order-items *:not(.order-links) a[onclick*=track]',
          mode: 'prepend'
        },
        'img-facebook': {
          selector: '.socialconnect__facebook a, .socialaccount__facebook a'
        },
        'img-twitter': {
          selector: '.socialconnect__twitter a, .socialaccount__twitter a'
        },
        'img-googleplus': {
          selector: '.socialconnect__google a, .socialaccount__google a'
        },
        'img-linkedin': {
          selector: '.socialconnect__linkedin a, .socialaccount__linkedin a'
        },
        'i-grid': {
          selector: '.toolbar .view-mode .grid',
          mode: 'html'
        },
        'i-list': {
          selector: '.toolbar .view-mode .list',
          mode: 'html'
        }
      };
      $j(document).ready(function () {
        addSVG(svgs);
        addSVG(truck);
      });
    }

    if (neon.addSVG !== false) {
      $j(document).ready(function () {
        addSVG(neon.addSVG);
      });
    }
    /**
     * default_categories_carrossel()
     */


    if (neon.default_categories_carrossel !== false) {
      $j(document).ready(function (e) {
        default_categories_carrossel();
      });
    }
    /**
     * default_carrossel_brands()
     */


    if (neon.default_carrossel_brands !== false) {
      $j(document).ready(function (e) {
        default_carrossel_brands();
      });
    }
    /**
     * default_carrossel_jointsales()
     */


    if (neon.default_carrossel_jointsales !== false) {
      $j(document).ready(function (e) {
        default_carrossel_jointsales();
      });
    }
    /**
     * fix_category_description()
     */


    if (neon.fix_category_description !== false) {
      $j(document).ready(function (e) {
        fix_category_description();
      });
    }
    /**
     * default_tabs()
     */


    if (neon.default_tabs !== false) {
      $j(document).ready(function (e) {
        default_tabs();
      });
    }
    /**
     * fix_address_phone()
     */


    if (neon.fix_address_phone !== false) {
      $j(document).ready(function (e) {
        fix_address_phone();
      });
    }
    /**
     * fix_catalog_flexbox()
     */


    if (neon.fix_catalog_flexbox !== false) {
      $j(document).ready(function (e) {
        fix_catalog_flexbox();
      });
    }
    /**
     * orderStatus()
     */
    //if(neon.orderStatus !== false){


    $j(document).ready(function (e) {
      orderStatus();
    }); //}

    /**
     * m_categories()
     */

    if (neon.m_categories !== false) {
      $j(document) // observer para abrir e fechar o menu
      .on('click', '.categories__show', function () {
        var menu = $j('#' + $j(this).attr('data-menu'));
        menu.addClass('on');
        lockBody(true);
      }).on('click', '.categories__hide', function () {
        var menu = $j('#' + $j(this).attr('data-menu'));
        menu.removeClass('on');
        lockBody(false);
      });
    }
    /**
     * m_search()
     */


    if (neon.m_search !== false) {
      $j(document) // observers para abrir e fechar a busca
      .on('click', '.header .search__button', function (e) {
        if ($j(this).closest('.search').find('.search__hide').length == 0) {
          // se não tiver sido criado o botão de fechar
          $j(this).closest('.search').find('.search__input').after('<div class="search__hide btn btn--close"><span>Fechar</span></div>');
        }

        if (is568() && !$j(this).closest('.search').hasClass('on')) {
          // se a tela for <= que 568px e for a primeira vez que ele é clicado
          $j(this).closest('.search').addClass('on').find('.search__input').focus();
          return false;
        } // se não for a primeira vez, ele não interrompe a ação e deixa o form ser enviado

      }).on('click', '.search__hide', function () {
        $j(this).closest('.search').removeClass('on');
        $j(this).remove();
      }).ready(function () {
        m_search();
      });
      $j(window).on('resizeStop', function () {
        m_search();
      });
    }
    /**
     * m_filters()
     */


    if (neon.m_filters !== false) {
      $j(window) // observer para ocultar o botão de filtro ao rolar sobre o .footer-container
      .scroll(function (e) {
        if (is992() && $j('.filters').length) {
          var scrolled = $j(window).scrollTop() + $j(window).height(),
              limit = $j('.footer-container').offset().top - parseInt($j('.filters > .title').css('bottom'));

          if (scrolled >= limit) {
            $j('.filters > .title').addClass('scrolled');
          } else {
            $j('.filters > .title').removeClass('scrolled');
          }
        }
      }).on('resizeStop', function () {
        m_filters();
      });
      $j(document) // observer para mostrar e ocultar os filtros
      .on('click', '.filters > .title', function (e) {
        if (is992()) {
          if ($j(this).closest('.filters').hasClass('on')) {
            $j(this).closest('.filters').removeClass('on');
            hideHeader(false);
            lockBody(false);
          } else {
            $j(this).closest('.filters').addClass('on');
            hideHeader(true);
            lockBody(true);

            if ($j('.header .search').hasClass('on')) {
              $j('.header .search').removeClass('on');
              $j('.header .search__hide').remove();
            }
          }

          e.preventDefault();
        }
      }).ready(function () {
        m_filters();
      });
    }
    /**
     * m_myaccount()
     */


    if (neon.m_myaccount !== false) {
      $j(document).on('click', '.myaccount__header', function (e) {
        if (is992()) {
          $j(this).parent().addClass('on');
          hideHeader(true);
          lockBody(true);

          if ($j(this).parent().find('.myaccount__hide').length == 0) {
            $j(this).parent().find('.myaccount__content').prepend('<div class="myaccount__hide btn btn--back"><span>Fechar</span></div>');
          }

          e.preventDefault();
          return false;
        }
      }).on('click', '.myaccount__hide', function () {
        $j(this).closest('.myaccount').removeClass('on');
        hideHeader(false);
        lockBody(false);
      }).ready(function () {
        m_myaccount();
      });
      $j(window).on('resizeStop', function () {
        m_myaccount();
      });
    }
    /**
     * m_mycart()
     */


    if (neon.m_mycart !== false) {
      $j(document).on('click', '.mycart__header', function () {
        if (is992()) {
          $j(this).parent().addClass('on');
          hideHeader(true);
          lockBody(true);

          if ($j(this).parent().find('.mycart__hide').length == 0) {
            $j(this).parent().find('.mycart__content').prepend('<div class="mycart__hide btn btn--back"><span>Fechar</span></div>');
          }

          return false;
        }
      }).on('click', '.mycart__hide', function () {
        $j(this).closest('.mycart').removeClass('on');
        hideHeader(false);
        lockBody(false);
      }).ready(function () {
        m_mycart();
      });
      $j(window).on('resizeStop', function () {
        m_mycart();
      });
    }
    /**
     * m_parcelamento()
     */


    if (neon.m_parcelamento !== false) {
      $j(document).on('click', '.parcelamento .title', function () {
        if (is992()) {
          $j(this).parent().addClass('on');
          hideHeader(true);
          lockBody(true);

          if ($j(this).next('ul').find('.parcelamento__hide').length == 0) {
            $j(this).next('ul').prepend('<div class="btn btn--back parcelamento__hide"><span>Fechar</span></div>');
          }
        }
      }).on('click', '.parcelamento__hide', function () {
        if (is992()) {
          $j(this).closest('.parcelamento').removeClass('on');
          hideHeader(false);
          lockBody(false);
        }
      }).ready(function () {
        m_parcelamento();
      });
      $j(window).on('resizeStop', function () {
        m_parcelamento();
      });
    }
    /**
     * m_frete()
     */


    if (neon.m_frete !== false) {
      $j(document).on('click', '.frete__title', function () {
        if (is992()) {
          setTimeout(function () {
            if ($j(this).closest('.frete').hasClass('frete--open')) {
              hideHeader(false);
              lockBody(false);
            } else {
              hideHeader(true);
              lockBody(true);

              if ($j('.frete__hide').length == 0) {
                $j('.frete__content').prepend('<div class="frete__hide btn btn--back"><span>Fechar</span></div>');
              }
            }
          }, 100);
        }
      }).on('click', '.frete__hide', function () {
        $j(this).closest('.frete').removeClass('frete--open');
        hideHeader(false);
        lockBody(false);
      }).ready(function () {
        m_frete();
      });
      $j(window).on('resizeStop', function () {
        m_frete();
      });
    }
    /**
     * m_produto()
     */


    if (neon.m_produto !== false) {
      $j(document).on('click', '.related__title, .recommended__title, .whosaw__title, .jointsales__title, .upsell__title, .reviews__title', function () {
        if (is568()) {
          if ($j(this).parent().hasClass('on')) {
            $j(this).parent().removeClass('on');
            hideHeader(false);
            lockBody(false);
          } else {
            $j(this).parent().addClass('on');
            hideHeader(true);
            lockBody(true);
          }
        }
      }).on('click', '.related__hide, .recommended__hide, .whosaw__hide, .jointsales__hide, .upsell__hide, .reviews__hide', function () {
        $j(this).parent().parent().removeClass('on');
        hideHeader(false);
        lockBody(false);
      }).ready(function () {
        m_produto();
      });
      $j(window).on('resizeStop', function () {
        m_produto();
      });
    }
    /**
     * m_tabs()
     */


    if (neon.m_tabs !== false) {
      $j(document).on('click', '.tabs__tab', function () {
        if (is568()) {
          if ($j(this).next('dd').hasClass('open')) {
            $j(this).next('dd').removeClass('open');
            hideHeader(false);
            lockBody(false);
          } else {
            $j(this).next('dd').addClass('open');
            hideHeader(true);
            lockBody(true);

            if ($j(this).next('dd').find('.tabs__hide').length == 0) {
              $j(this).next('dd').prepend('<div class="tabs__hide btn btn--back"><span>Fechar</span></div>');
            }
          }
        }
      }).on('click', '.tabs__hide', function () {
        $j(this).parent().removeClass('open');
        hideHeader(false);
        lockBody(false);
      }).ready(function () {
        m_tabs();
      });
      $j(window).on('resizeStop', function () {
        m_tabs();
      });
    }
    /**
     * m_painelCliente()
     */


    if (neon.m_painelCliente !== false) {
      $j(document).on('click', '.block-account .block-title', function () {
        if (is992()) {
          if ($j('.block-account').hasClass('on')) {
            $j('.block-account').removeClass('on');
            hideHeader(false);
            lockBody(false);
          } else {
            $j('.block-account').addClass('on');
            hideHeader(true);
            lockBody(true);
          }
        }
      }).ready(function () {
        m_painelCliente();
      });
      $j(window).on('resizeStop', function () {
        m_painelCliente();
      });
    }
  };

  $.fn.neonTheme.custom = {
    // defaults
    default_categories_justify: true,
    default_categories_mini: true,
    default_categories_carrossel: true,
    default_carrossel_produtos: true,
    default_carrossel_jointsales: true,
    default_carrossel_brands: true,
    default_dropFrom: true,
    default_SVGs: true,
    default_tabs: true,
    // fixes
    fix_IE_SVGs: true,
    fix_zoomHeader: true,
    fix_address_phone: true,
    fix_category_description: true,
    fix_catalog_flexbox: true,
    // responsive
    m_categories: true,
    m_search: true,
    m_filters: true,
    m_myaccount: true,
    m_mycart: true,
    m_parcelamento: true,
    m_frete: true,
    m_produto: true,
    m_tabs: true,
    m_painelCliente: true,
    // funcionalidades
    dropFrom: false,
    // [array]
    addSVG: false // {svg: { options }}

  };
})(jQuery);
/**
 * Adiciona classes para posicionar dropdowns
 * @param dropdowns
 */


window.drop_from = function drop_from(dropdowns) {
  var h_middle = $j(window).width() / 2,
      v_middle = $j(window).height() / 2;
  $j.each(dropdowns, function (i, el) {
    var drop = $j('' + el);

    if (drop.length) {
      drop.each(function (i, drop) {
        var top = $j(drop).offset().top - $j(window).scrollTop(),
            left = $j(drop).offset().left - $j(window).scrollLeft();

        if (left > h_middle) {
          $j(drop).addClass('drop--right').removeClass('drop--left');
        } else {
          $j(drop).addClass('drop--left').removeClass('drop--right');
        }

        if (top > v_middle) {
          $j(drop).addClass('drop--bottom').removeClass('drop--top');
        } else {
          $j(drop).addClass('drop--top').removeClass('drop--bottom');
        }
      });
    }
  });
};
/**
 * Arruma o width dos SVGs de pagtos, envios e redes sociais para o IE
 */


window.fix_IE_SVGs = function fix_IE_SVGs() {
  var SVGs = $j('.pays__svg, .ships__svg, .socials__svg');

  if (SVGs.length) {
    SVGs.each(function (i, el) {
      var svg_class = $j(el).attr('class').replace(/light|dark|onecolor|pays__svg|\s/g, '');
      var svgHTML = $j(el).parent().html();
      var regex = /viewBox\=[\"\'](.*?)[\"\']/g;
      var viewbox = regex.exec(svgHTML);

      if (typeof viewbox != "undefined" && viewbox) {
        viewbox = viewbox[1].split(' ');
        var h = $j(el).height();
        var boxWidth = viewbox[2];
        var boxHeight = viewbox[3];
        var newWidth = boxWidth * h / boxHeight;
        newWidth = newWidth.toFixed(3);

        if ($j(el).parent().find('style').length) {
          $j(el).parent().find('style').remove();
        }

        $j(el).after('<style>svg.pays__svg.' + svg_class + '{ width: ' + newWidth + 'px }</style>');
      }
    });
  }
};
/**
 * Menu de Categorias - Modo Justify
 */


window.default_categories_justify = function default_categories_justify() {
  var menu = $j('.categories--justify');

  if (menu.length) {
    menu.each(function (i, menu) {
      var limit = $j('> .ul--0', menu).width(),
          menu_id = $j(menu).attr('id'),
          width = 0;
      $j('> .ul--0 > .li--0', menu).removeClass('removed').each(function (i, el) {
        width += $j(el).width();

        if (width > limit) {
          $j('#' + menu_id + ' > .ul--0 > .li--0').slice(i).addClass('removed');
          return false;
        }
      });
    });
  }
};
/**
 * Menu de Categorias - Modo Mini
 */


window.default_categories_mini = function default_categories_mini() {
  // menu mini
  $j('.categories__header, .categories__close').click(function () {
    if ($j('.categories__content').hasClass('open')) {
      $j('.categories__content').first().removeClass('open');
      lockBody(false);
    } else {
      $j('.categories__content').first().addClass('open');
      lockBody(true);
    }
  });

  if ($j('.categories__content').length && $j('body > .categories__content').length == 0) {
    $j('body').append('.categories__content');
    $j('.categories__content .ul--0').append('<li class="li--0 li--fix" /><li class="li--0 li--fix" /><li class="li--0 li--fix" /><li class="li--0 li--fix" /><li class="li--0 li--fix" />');
  }
};
/**
 * Menu de Categorias - Modo Carrossel
 */


window.default_categories_carrossel = function default_categories_carrossel() {
  var menu = $j('.categories--carrossel');

  if (menu.find('.li--0').length > 0) {
    menu.find('.ul--0').owlCarousel({
      navigation: true,
      navigationText: ['?', '?'],
      pagination: false,
      afterInit: function afterInit() {
        menu.addClass('loaded');
      }
    });
  }
};
/**
 * Ativa o carrossel na Coleção de Produtos
 */


window.default_carrossel_produtos = function default_carrossel_produtos() {
  var carrossel = $j('.carrossel .products__list');

  if (carrossel.length) {
    carrossel.each(function (i, el) {
      if ($j(el).parent().hasClass('categories__products')) {
        // se for um carrossel em um menu
        $j(el).owlCarousel({
          singleItem: true,
          itemScaleUp: true,
          autoPlay: 3000,
          stopOnHover: true,
          navigation: false,
          beforeMove: function beforeMove() {
            if (typeof $j.fn.lazyload != "undefined") {
              $j(el).find('img').lazyload();
            }
          }
        });
      } else {
        // se for em uma listagem normal
        $j(el).owlCarousel({
          navigation: true,
          navigationText: ['?', '?'],
          items: 4,
          itemsCustom: [[0, 1], [568, 2], [768, 3], [1024, 4], [1270, 4]],
          beforeMove: function beforeMove() {
            if (typeof $j.fn.lazyload != "undefined") {
              $j(el).find('img').lazyload();
            }
          }
        });
      }
    });
  }
};
/**
 * Arruma o hover do Zoom x Header
 */


window.fix_zoomHeader = function fix_zoomHeader() {
  $j('.header-container').hover(function () {
    if ($j('.zoomContainer').length) {
      $j('.zoomContainer').hide();
    }
  }, function () {
    if ($j('.zoomContainer').length) {
      $j('.zoomContainer').show();
    }
  });
};
/**
 * Adiciona SVGs do sprite no DOM
 * @param elements
 */


window.addSVG = function addSVG(svgs) {
  $j.each(svgs, function (svg, opt) {
    var svg = svg,
        selector = $j(opt.selector);

    if ($j('#' + svg).length) {
      if (selector.length > 0 && selector.find('.' + svg).length == 0) {
        var mode = typeof opt.mode != 'undefined' ? opt.mode : 'append',
            ratio = typeof opt.ratio != 'undefined' ? opt.ratio : true,
            aspect = '';

        if (ratio === false) {
          aspect = ' preserveAspectRatio="none"';
        }

        var ready_svg = '<svg class="ico ' + svg + '"' + aspect + '><use xlink:href="#' + svg + '" /></svg>';
        selector.each(function (i, el) {
          if (mode === 'prepend') {
            $j(el).prepend(ready_svg);
          } else if (mode === 'html') {
            $j(el).html(ready_svg);
          } else {
            $j(el).append(ready_svg);
          }
        });
      }
    } else {
      console.error('Interface - o SVG sprite #' + svg + ' não existe.');
    }
  });
};
/**
 * Ativa o carrossel na listagem de marcas
 */


window.default_carrossel_brands = function default_carrossel_brands() {
  var marcas = $j('.brands--carrossel .brands__list');

  if (marcas.length) {
    marcas.each(function (i, el) {
      $j(el).owlCarousel({
        itemsScaleUp: true,
        navigation: true,
        navigationText: ['?', '?'],
        pagination: false
      });
    });
  }
};
/**
 * Ativa o Carrossel do @compre-junto
 */


window.default_carrossel_jointsales = function default_carrossel_jointsales() {
  var jointsales = $j('.jointsales__items');

  if (jointsales.length) {
    jointsales.each(function (i, el) {
      $j(el).owlCarousel({
        singleItem: true,
        itemScaleUp: true,
        navigation: true,
        navigationText: ['?', '?'],
        autoHeight: true,
        beforeMove: function beforeMove() {
          if (typeof $j.fn.lazyload != "undefined") {
            $j(el).find('img').lazyload();
          }
        }
      });
    });
  }
};
/**
 * Troca a descrição da categoria de lugar
 */


window.fix_category_description = function fix_category_description() {
  // category description
  if ($j('.category-description').length > 0 && $j('.toolbar').length > 0) {
    $j('.toolbar').first().after($j('.category-description'));
    $j('.category-description').show();
  }
};
/**
 * Ativa o componente .tabs{}
 */


window.default_tabs = function default_tabs() {
  // tabs
  var tabs = $j('.tabs');

  if (tabs.length > 0) {
    tabs.find('.tabs__tab').first().addClass('on');
    tabs.find('.tabs__content').first().addClass('on');
    tabs.on('click', '.tabs__tab', function () {
      if (!$j(this).hasClass('on')) {
        tabs.find('.tabs__tab, .tabs__content').removeClass('on');
        $j(this).addClass('on');
        $j(this).next('.tabs__content').addClass('on');
      }
    });
  }
};
/**
 * Adiciona um ícone de telefone aos endereços
 */


window.fix_address_phone = function fix_address_phone() {
  // address phone
  var address = $j('address');

  if (address.length > 0) {
    address.each(function (i, el) {
      var html = $j(el).html(),
          ico = '<svg class="ico" viewBox="0 0 16 16"><path d="M3.7,10.2c1,2.1,2.1,3.4,3.5,4.5c2.4,1.9,3.8,1.3,5.1,0.7c1.9-0.9,1.5-1.5,0.6-3.4 c-0.9-1.9-1.3-2.5-3.2-1.6c-1.9,0.9-1.2,2.2-1.2,2.2L4.9,5.1c0,0,0.7,1.2,2.6,0.3C9.4,4.5,9.1,3.9,8.2,2C7.4,0.1,7.1-0.5,5.2,0.4 C3.9,1,2.5,1.7,2.4,4.8C2.4,6.6,2.7,8.1,3.7,10.2z"/></svg>';
      html = html.replace('T:', ico);
      html = html.replace('F:', ico);
      $j(el).html(html);
    });
  }
};
/**
 * Adiciona elementos à listagem para corrigir o flex
 */


window.fix_catalog_flexbox = function fix_catalog_flexbox() {
  // products flex-fix
  var products = $j('.products__list:not(.carrossel)');
  products.each(function (i, el) {
    $j(el).append('<li class="flex-fix li--0 products__item" /><li class="flex-fix li--0 products__item" /><li class="flex-fix li--0 products__item" /><li class="flex-fix li--0 products__item" /><li class="flex-fix li--0 products__item" />');
  });
};
/**
 * Adiciona um strong ao título do status de pedido
 */


window.orderStatus = function orderStatus() {
  //status title
  var status = $j('.order-status');

  if (status.length > 0) {
    status.each(function (i, el) {
      var text = $j(el).find('span').text();
      text = '<strong>' + text.replace(/\.|\!/g, '.</strong>');
      $j(el).find('span').html(text);
    });
  }
};
/**
 * Responsive ifs
 */


window.isMobile = function isMobile() {
  return $j('body').hasClass('mobile');
};

window.is992 = function is992() {
  return $j(window).width() <= 992;
};

window.is768 = function is768() {
  return $j(window).width() <= 768;
};

window.is568 = function is568() {
  return $j(window).width() <= 568;
};

window.is468 = function is468() {
  return $j(window).width() <= 468;
};
/**
 * Oculta o .header-container
 * @param status
 */


window.hideHeader = function hideHeader(status) {
  if (status) {
    $j('.header-container').animate({
      top: '-' + $j('.header-container').outerHeight() + 'px'
    }, 200);
  } else {
    $j('.header-container').animate({
      top: '0px'
    }, 200);
  }

  return false;
};
/**
 * Trava a rolagem do <body>
 * @param status
 */


window.lockBody = function lockBody(status) {
  if (status) {
    $j('body').css('overflow', 'hidden');
  } else {
    $j('body').css('overflow', 'visible');
  }

  return false;
};
/**
 * Responsivo .categories
 */


window.m_categories = function m_categories(breakpoint) {
  if ($j(window).width() > breakpoint) {
    // reseta ao passar do breakpoint
    default_categories_carrossel();
    default_categories_justify();
    lockBody(false);
    $j('.categories').removeClass('on');
  }
};
/**
 * Responsivo .search
 */


window.m_search = function m_search() {
  if (!is568()) {
    $j('.header .search').removeClass('on');
  }
};
/**
 * Responsivo .filters
 */


window.m_filters = function m_filters() {
  if (!is992()) {
    $j('.filters').removeClass('on');
    hideHeader(false);
    lockBody(false);
  }
};
/**
 * Responsivo .myaccount
 */


window.m_myaccount = function m_myaccount() {
  if (!is992()) {
    $j('.myaccount').removeClass('on');
    hideHeader(false);
    lockBody(false);
  }
};
/**
 * Responsivo .mycart
 */


window.m_mycart = function m_mycart() {
  if (!is992()) {
    $j('.mycart').removeClass('on');
    hideHeader(false);
    lockBody(false);
  }
};
/**
 * Responsivo - Produto @parcelamento
 */


window.m_parcelamento = function m_parcelamento() {
  if (!is992()) {
    $j('.parcelamento').removeClass('on');
    hideHeader(false);
    lockBody(false);
  }
};
/**
 * Responsivo - Produto @simulador-frete
 */


window.m_frete = function m_frete() {
  if (!is992()) {
    $j('.frete').removeClass('frete--open');
    hideHeader(false);
    lockBody(false);
  }
};
/**
 * Responsivo - Produto
 * @relacionados
 * @recomendados
 * @quemviu
 * @compre-junto
 * @vendas-acima
 */


window.m_produto = function m_produto() {
  if (!is568()) {
    $j('.related, .recommended, .whosaw, .jointsales, .upsell, .reviews').removeClass('on');
    hideHeader(false);
    lockBody(false);
  }
};
/**
 * Responsivo - .tabs
 */


window.m_tabs = function m_tabs() {
  if (!is568()) {
    $j('.tabs__content').removeClass('open');
    hideHeader(false);
    lockBody(false);
  }
};
/**
 * Responsivo - Menu Painel do Cliente
 */


window.m_painelCliente = function m_painelCliente() {
  if (!is992()) {
    $j('.block-account').removeClass('on');
    hideHeader(false);
    lockBody(false);
  }
};
/* end of custom content */

/**
 * JavaScript Editável
 * Tema:     Neon
 * Arquivo:  editable.js
 *
 * Use este arquivo para ativar ou desativar as funções do JS do tema.
 *
 * Este JS controla apenas elementos visuais e elementos relativos ao layout responsivo,
 * desátivar todas as funções não impedirá o funcionamento do site, porém
 * exigirá que o CSS de alguns elementos seja revisto.
 *
 * jQuery       $j
 * Prototype:   $
 */


$j.fn.neonTheme.custom = {
  /**
   * Opções Padrões do Tema
   * Estas opções podem apenas ser ligadas ou desligadas.
   * ! Cuidado ao desativar estar opções pois elas podem comprometer o funcionamento do tema.
   * ! Desative apenas se você souber o que está fazendo.
   */
  default_categories_justify: true,
  // modo justify da inserção de Menu de Categorias
  default_categories_mini: true,
  // modo mini da inserção de Menu de Categorias
  default_categories_carrossel: true,
  // modo carrossel da inserção de Menu de Categorias
  default_carrossel_produtos: true,
  // carrossel padrão das Coleções de Produtos
  default_carrossel_jointsales: true,
  // carrossel dos produtos do Compre Junto @compre-junto
  default_carrossel_brands: true,
  // modo carrossel da listagem de marcas
  default_dropFrom: true,
  // ativa o dropFrom para as inserções: Lista de Desejos, Meu Carrinho, Minha Conta, Menu de Categories e Busca com Filtros
  default_SVGs: true,
  // insere os ícones padrões do SVG sprite
  default_tabs: true,
  // ativa o componente .tabs do tema

  /* - Fixes */
  fix_IE_SVGs: true,
  // corrige as dimensões de SVGs inline no IE
  fix_zoomHeader: true,
  // corrige o z-index do .header e do zoom dos produtos no :hover de cada um
  fix_address_phone: true,
  // corrige a exibição do ícone de telefone nas listagens de endereços
  fix_category_description: true,
  // troca a posição padrão da descrição da categoria
  fix_catalog_flexbox: true,
  // adiciona elementos para arrumar o flexbox do catálogo

  /* - Responsivo */
  m_categories: true,
  // ativa o responsivo do Menu de Categorias
  m_search: true,
  // ativa o responsivo da Busca
  m_filters: true,
  // ativa o responsivo dos Filtros do Catálogo
  m_myaccount: true,
  // ativa o responsivo da Minha Conta
  m_mycart: true,
  // ativa o responsivo do Meu Carrinho
  m_parcelamento: true,
  // ativa o responsivo do parcelamento na página de produto
  m_frete: true,
  // ativa o responsivo do cálculo de frete na página do produto
  m_produto: true,
  // ativa o responsivo de cada bloco da página de produto
  m_tabs: true,
  // ativa o responsivo do componente .tabs do tema
  m_painelCliente: true,
  // ativa o responsivo do Menu do Painel de Cliente

  /**
   * Funcionalidades do Tema
   */
  dropFrom: false,
  addSVG: {
    'img-truck': {
      selector: '.frete .frete__content .input-box label',
      mode: 'prepend',
      ratio: false
    }
  }
};
/**
 * Responsive ifs
 *
 * isMobile()     Retorna true se acessado via mobile
 * is992()        Retorna true se a tela for menor que 992px
 * is768()        Retorna true se a tela for menor que 768px
 * is568()        Retorna true se a tela for menor que 568px
 * is468()        Retorna true se a tela for menor que 468px
 */

/**
 * dropFrom: [array]
 *
 * Verifica o posicionamento dos elementos passados e adiciona classes
 * indicando à partir de onde é ideal abrir um dropbox.
 * Classes adicionadas:
 * drop--left | drop--right
 * drop--top  | drop--bottom
 */

/*
addSVG: {'svg':{ options }} - Adiciona SVGs de um sprite no DOM
Para cada SVG adicionado, adicione um objeto com os parametros:

{
'id-svg':
string  obrigatório
ID do <symbol> no seu SVG sprite, ex.: 'ico-busca'

{
selector: '.header .meu_btn, .footer .meu_box'
string  obrigatório
Seletor CSS do(s) elemento(s) onde inserir o SVG

mode: 'append / prepend / html'
string  opcional    (default: append)
Modo de inserir o SVG, você pode optar por:
'append'    - modo padrão - adiciona o <svg> no fim do elemento
'prepend'   - adiciona o <svg> no início do elemento
'html'      - sobrescreve todo o conteúdo do elemento pelo <svg>

ratio: true / false
opcional    default: true
Mantém ou não o ratio do SVG
Adicionando ou não o parâmetro: preserveAspectRatio="none"
}
}
*/

/* end of editable */

/**
 * JavaScript Geral
 * Arquivo:	general.js
 *
 * Use este editor para criar o seu Javascript
 * Este arquivo Ã© o Ãºltimo arquivo .js chamado
 *
 * jQuery       $j
 * Prototype:   $
 *
 * document.on() safe events:
 * 'resizeStop'
 * 'scrollStop'
 * 'ajaxComplete'
 */
// $j(document)
// 	.ready(function () {
// 		// document.ready
// 	})
// 	.on('resizeStop', function (e) {
// 		// Safe window.resize
// 		// Dispara apÃ³s o Ãºltimo movimento de resize parar no navegador.
// 	})
// 	.on('scrollStop', function (e) {
// 		// Safe window.scroll
// 		// Dispara apÃ³s o Ãºltimo movimento de scroll parar no navegador.
// 	})
// 	.on('ajaxComplete', function (resp) {
// 		// Safe ajax completed
// 		// Dispara apÃ³s completar com sucesso qualquer requisiÃ§Ã£o Ajax, e trÃ¡s a resposta do Ajax.
// 	});

(0, _zot.default)();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNjc3OWExNmMuanMiXSwibmFtZXMiOlsiJCIsImZuIiwibmVvblRoZW1lIiwib3B0aW9ucyIsIm5lb24iLCJleHRlbmQiLCJjdXN0b20iLCJkZWZhdWx0X2Ryb3BGcm9tIiwiZHJvcHMiLCIkaiIsImRvY3VtZW50IiwicmVhZHkiLCJlIiwiZHJvcF9mcm9tIiwid2luZG93Iiwib24iLCJkcm9wRnJvbSIsImZpeF9JRV9TVkdzIiwiZGVmYXVsdF9jYXRlZ29yaWVzX2p1c3RpZnkiLCJkZWZhdWx0X2NhdGVnb3JpZXNfbWluaSIsImRlZmF1bHRfY2Fycm9zc2VsX3Byb2R1dG9zIiwiZml4X3pvb21IZWFkZXIiLCJkZWZhdWx0X1NWR3MiLCJ0cnVjayIsInNlbGVjdG9yIiwibW9kZSIsInN2Z3MiLCJhZGRTVkciLCJkZWZhdWx0X2NhdGVnb3JpZXNfY2Fycm9zc2VsIiwiZGVmYXVsdF9jYXJyb3NzZWxfYnJhbmRzIiwiZGVmYXVsdF9jYXJyb3NzZWxfam9pbnRzYWxlcyIsImZpeF9jYXRlZ29yeV9kZXNjcmlwdGlvbiIsImRlZmF1bHRfdGFicyIsImZpeF9hZGRyZXNzX3Bob25lIiwiZml4X2NhdGFsb2dfZmxleGJveCIsIm9yZGVyU3RhdHVzIiwibV9jYXRlZ29yaWVzIiwibWVudSIsImF0dHIiLCJhZGRDbGFzcyIsImxvY2tCb2R5IiwicmVtb3ZlQ2xhc3MiLCJtX3NlYXJjaCIsImNsb3Nlc3QiLCJmaW5kIiwibGVuZ3RoIiwiYWZ0ZXIiLCJpczU2OCIsImhhc0NsYXNzIiwiZm9jdXMiLCJyZW1vdmUiLCJtX2ZpbHRlcnMiLCJzY3JvbGwiLCJpczk5MiIsInNjcm9sbGVkIiwic2Nyb2xsVG9wIiwiaGVpZ2h0IiwibGltaXQiLCJvZmZzZXQiLCJ0b3AiLCJwYXJzZUludCIsImNzcyIsImhpZGVIZWFkZXIiLCJwcmV2ZW50RGVmYXVsdCIsIm1fbXlhY2NvdW50IiwicGFyZW50IiwicHJlcGVuZCIsIm1fbXljYXJ0IiwibV9wYXJjZWxhbWVudG8iLCJuZXh0IiwibV9mcmV0ZSIsInNldFRpbWVvdXQiLCJtX3Byb2R1dG8iLCJtX3RhYnMiLCJtX3BhaW5lbENsaWVudGUiLCJqUXVlcnkiLCJkcm9wZG93bnMiLCJoX21pZGRsZSIsIndpZHRoIiwidl9taWRkbGUiLCJlYWNoIiwiaSIsImVsIiwiZHJvcCIsImxlZnQiLCJzY3JvbGxMZWZ0IiwiU1ZHcyIsInN2Z19jbGFzcyIsInJlcGxhY2UiLCJzdmdIVE1MIiwiaHRtbCIsInJlZ2V4Iiwidmlld2JveCIsImV4ZWMiLCJzcGxpdCIsImgiLCJib3hXaWR0aCIsImJveEhlaWdodCIsIm5ld1dpZHRoIiwidG9GaXhlZCIsIm1lbnVfaWQiLCJzbGljZSIsImNsaWNrIiwiZmlyc3QiLCJhcHBlbmQiLCJvd2xDYXJvdXNlbCIsIm5hdmlnYXRpb24iLCJuYXZpZ2F0aW9uVGV4dCIsInBhZ2luYXRpb24iLCJhZnRlckluaXQiLCJjYXJyb3NzZWwiLCJzaW5nbGVJdGVtIiwiaXRlbVNjYWxlVXAiLCJhdXRvUGxheSIsInN0b3BPbkhvdmVyIiwiYmVmb3JlTW92ZSIsImxhenlsb2FkIiwiaXRlbXMiLCJpdGVtc0N1c3RvbSIsImhvdmVyIiwiaGlkZSIsInNob3ciLCJzdmciLCJvcHQiLCJyYXRpbyIsImFzcGVjdCIsInJlYWR5X3N2ZyIsImNvbnNvbGUiLCJlcnJvciIsIm1hcmNhcyIsIml0ZW1zU2NhbGVVcCIsImpvaW50c2FsZXMiLCJhdXRvSGVpZ2h0IiwidGFicyIsImFkZHJlc3MiLCJpY28iLCJwcm9kdWN0cyIsInN0YXR1cyIsInRleHQiLCJpc01vYmlsZSIsImlzNzY4IiwiaXM0NjgiLCJhbmltYXRlIiwib3V0ZXJIZWlnaHQiLCJicmVha3BvaW50Il0sIm1hcHBpbmdzIjoiOztBQTB2Q0E7Ozs7QUExdkNBOzs7OztBQU1BOztBQUNDLFdBQVVBLENBQVYsRUFBYTtBQUViQSxFQUFBQSxDQUFDLENBQUNDLEVBQUYsQ0FBS0MsU0FBTCxHQUFpQixVQUFVQyxPQUFWLEVBQW1CO0FBRW5DLFFBQU1DLElBQUksR0FB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QUNmRSxFQUFBQSxTQUFTLEVBQUUsSUE5QmE7QUE4QlA7QUFDakJDLEVBQUFBLE1BQU0sRUFBRSxJQS9CZ0I7QUErQlY7QUFDZEMsRUFBQUEsZUFBZSxFQUFFLElBaENPO0FBZ0NEOztBQUN2Qjs7O0FBR0ExRCxFQUFBQSxRQUFRLEVBQUUsS0FwQ2M7QUFxQ3hCVyxFQUFBQSxNQUFNLEVBQUU7QUFDUCxpQkFBYTtBQUNaSCxNQUFBQSxRQUFRLEVBQUUseUNBREU7QUFFWkMsTUFBQUEsSUFBSSxFQUFFLFNBRk07QUFHWm1HLE1BQUFBLEtBQUssRUFBRTtBQUhLO0FBRE47QUFyQ2dCLENBQXpCO0FBK0NBOzs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGVtYTogICAgIE5lb25cbiAqIFZlcnPDo286ICAgMS4wXG4gKiBVcGRhdGU6ICAgMDUvMjAxNlxuICovXG5cbjtcbihmdW5jdGlvbiAoJCkge1xuXG5cdCQuZm4ubmVvblRoZW1lID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuXHRcdGNvbnN0IG5lb24gPSAkLmV4dGVuZCh7fSwgJC5mbi5uZW9uVGhlbWUuY3VzdG9tLCBvcHRpb25zKTtcblxuXHRcdC8qKlxuXHRcdCAqIGRyb3BGcm9tKClcblx0XHQgKi9cblx0XHRpZiAobmVvbi5kZWZhdWx0X2Ryb3BGcm9tICE9PSBmYWxzZSkge1xuXHRcdFx0dmFyIGRyb3BzID0gWycubXl3aXNoJywgJy5teWNhcnQnLCAnLm15YWNjb3VudCcsICcuY2F0ZWdvcmllczpub3QoLmNhdGVnb3JpZXMtLWNhcnJvc3NlbCkgLmxpLS0wJywgJy5zZWFyY2hfX2ZpbHRlciddO1xuXHRcdFx0JGooZG9jdW1lbnQpXG5cdFx0XHRcdC5yZWFkeShmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdGRyb3BfZnJvbShkcm9wcylcblx0XHRcdFx0fSk7XG5cdFx0XHQkaih3aW5kb3cpXG5cdFx0XHRcdC5vbigncmVzaXplU3RvcCcsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0ZHJvcF9mcm9tKGRyb3BzKVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQub24oJ3Njcm9sbFN0b3AnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdGRyb3BfZnJvbShkcm9wcylcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHRcdGlmIChuZW9uLmRyb3BGcm9tICE9PSBmYWxzZSkge1xuXHRcdFx0JGooZG9jdW1lbnQpXG5cdFx0XHRcdC5yZWFkeShmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdGRyb3BfZnJvbShuZW9uLmRyb3BGcm9tKVxuXHRcdFx0XHR9KTtcblx0XHRcdCRqKHdpbmRvdylcblx0XHRcdFx0Lm9uKCdyZXNpemVTdG9wJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRkcm9wX2Zyb20obmVvbi5kcm9wRnJvbSlcblx0XHRcdFx0fSlcblx0XHRcdFx0Lm9uKCdzY3JvbGxTdG9wJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRkcm9wX2Zyb20obmVvbi5kcm9wRnJvbSlcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogZml4X0lFX1NWR3MoKVxuXHRcdCAqL1xuXHRcdGlmIChuZW9uLmZpeF9JRV9TVkdzICE9PSBmYWxzZSkge1xuXHRcdFx0JGooZG9jdW1lbnQpXG5cdFx0XHRcdC5yZWFkeShmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdGZpeF9JRV9TVkdzKClcblx0XHRcdFx0fSk7XG5cdFx0XHQkaih3aW5kb3cpXG5cdFx0XHRcdC5vbigncmVzaXplU3RvcCcsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0Zml4X0lFX1NWR3MoKVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBkZWZhdWx0X2NhdGVnb3JpZXNfanVzdGlmeSgpXG5cdFx0ICovXG5cdFx0aWYgKG5lb24uZGVmYXVsdF9jYXRlZ29yaWVzX2p1c3RpZnkgIT09IGZhbHNlKSB7XG5cdFx0XHQkaihkb2N1bWVudClcblx0XHRcdFx0LnJlYWR5KGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0ZGVmYXVsdF9jYXRlZ29yaWVzX2p1c3RpZnkoKVxuXHRcdFx0XHR9KTtcblx0XHRcdCRqKHdpbmRvdylcblx0XHRcdFx0Lm9uKCdyZXNpemVTdG9wJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRkZWZhdWx0X2NhdGVnb3JpZXNfanVzdGlmeSgpXG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIGRlZmF1bHRfY2F0ZWdvcmllc19taW5pKClcblx0XHQgKi9cblx0XHRpZiAobmVvbi5kZWZhdWx0X2NhdGVnb3JpZXNfbWluaSAhPT0gZmFsc2UpIHtcblx0XHRcdCRqKGRvY3VtZW50KVxuXHRcdFx0XHQucmVhZHkoZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRkZWZhdWx0X2NhdGVnb3JpZXNfbWluaSgpXG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIGRlZmF1bHRfY2Fycm9zc2VsX3Byb2R1dG9zKClcblx0XHQgKi9cblx0XHRpZiAobmVvbi5kZWZhdWx0X2NhcnJvc3NlbF9wcm9kdXRvcyAhPT0gZmFsc2UpIHtcblx0XHRcdCRqKGRvY3VtZW50KVxuXHRcdFx0XHQucmVhZHkoZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRkZWZhdWx0X2NhcnJvc3NlbF9wcm9kdXRvcygpXG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIGZpeF96b29tSGVhZGVyKClcblx0XHQgKi9cblx0XHRpZiAobmVvbi5maXhfem9vbUhlYWRlciAhPT0gZmFsc2UpIHtcblx0XHRcdCRqKGRvY3VtZW50KVxuXHRcdFx0XHQucmVhZHkoZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRmaXhfem9vbUhlYWRlcigpXG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIGFkZFNWRygpIC0gZGVmYXVsdHNcblx0XHQgKi9cblx0XHRpZiAobmVvbi5kZWZhdWx0X1NWR3MgIT09IGZhbHNlKSB7XG5cdFx0XHR2YXIgdHJ1Y2sgPSB7XG5cdFx0XHRcdCdpbWctdHJ1Y2snOiB7XG5cdFx0XHRcdFx0c2VsZWN0b3I6ICcuZnJldGVfX3RpdGxlJyxcblx0XHRcdFx0XHRtb2RlOiAnYXBwZW5kJ1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0dmFyIHN2Z3MgPSB7XG5cdFx0XHRcdCdpbWctdHJ1Y2snOiB7XG5cdFx0XHRcdFx0c2VsZWN0b3I6ICcuYWRkcmVzc2VzLXByaW1hcnkgb2wgbGk6bGFzdC1jaGlsZCBoMywgLm9yZGVyLWluZm8tYm94IC5zaGlwcGluZy1hZGRyZXNzIGgyJyxcblx0XHRcdFx0XHRtb2RlOiAncHJlcGVuZCdcblx0XHRcdFx0fSxcblx0XHRcdFx0J2ltZy1vcy1uZXcnOiB7XG5cdFx0XHRcdFx0c2VsZWN0b3I6ICcub3JkZXItc3RhdHVzLnN0YXRlLW5ldywgLm9yZGVyLXN0YXR1cy5zdGF0ZS1wZW5kaW5nX3BheW1lbnQsIC5vcmRlci1zdGF0dXMuc3RhdGUtcGF5bWVudF9yZXZpZXcnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdpbWctb3Mtb2snOiB7XG5cdFx0XHRcdFx0c2VsZWN0b3I6ICcub3JkZXItc3RhdHVzLnN0YXRlLXByb2Nlc3NpbmcnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdpbWctb3Mtc2VudCc6IHtcblx0XHRcdFx0XHRzZWxlY3RvcjogJy5vcmRlci1zdGF0dXMuc3RhdGUtY29tcGxldGUnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdpbWctb3MtaG9sZCc6IHtcblx0XHRcdFx0XHRzZWxlY3RvcjogJy5vcmRlci1zdGF0dXMuc3RhdGUtaG9sZGVkJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQnaW1nLW9zLWNhbmNlbCc6IHtcblx0XHRcdFx0XHRzZWxlY3RvcjogJy5vcmRlci1zdGF0dXMuc3RhdGUtY2xvc2VkLCAub3JkZXItc3RhdHVzLnN0YXRlLWNhbmNlbGVkJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQnaW1nLWJpbGwnOiB7XG5cdFx0XHRcdFx0c2VsZWN0b3I6ICcuYWRkcmVzc2VzLXByaW1hcnkgb2wgbGk6Zmlyc3QtY2hpbGQgaDMsIC5vcmRlci1pbmZvLWJveCAuYmlsbGluZy1hZGRyZXNzIGgyJyxcblx0XHRcdFx0XHRtb2RlOiAncHJlcGVuZCdcblx0XHRcdFx0fSxcblx0XHRcdFx0J2ltZy10cmFjayc6IHtcblx0XHRcdFx0XHRzZWxlY3RvcjogJy5vcmRlci1pdGVtcyAqOm5vdCgub3JkZXItbGlua3MpIGFbb25jbGljayo9dHJhY2tdJyxcblx0XHRcdFx0XHRtb2RlOiAncHJlcGVuZCdcblx0XHRcdFx0fSxcblx0XHRcdFx0J2ltZy1mYWNlYm9vayc6IHtcblx0XHRcdFx0XHRzZWxlY3RvcjogJy5zb2NpYWxjb25uZWN0X19mYWNlYm9vayBhLCAuc29jaWFsYWNjb3VudF9fZmFjZWJvb2sgYSdcblx0XHRcdFx0fSxcblx0XHRcdFx0J2ltZy10d2l0dGVyJzoge1xuXHRcdFx0XHRcdHNlbGVjdG9yOiAnLnNvY2lhbGNvbm5lY3RfX3R3aXR0ZXIgYSwgLnNvY2lhbGFjY291bnRfX3R3aXR0ZXIgYSdcblx0XHRcdFx0fSxcblx0XHRcdFx0J2ltZy1nb29nbGVwbHVzJzoge1xuXHRcdFx0XHRcdHNlbGVjdG9yOiAnLnNvY2lhbGNvbm5lY3RfX2dvb2dsZSBhLCAuc29jaWFsYWNjb3VudF9fZ29vZ2xlIGEnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdpbWctbGlua2VkaW4nOiB7XG5cdFx0XHRcdFx0c2VsZWN0b3I6ICcuc29jaWFsY29ubmVjdF9fbGlua2VkaW4gYSwgLnNvY2lhbGFjY291bnRfX2xpbmtlZGluIGEnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdpLWdyaWQnOiB7XG5cdFx0XHRcdFx0c2VsZWN0b3I6ICcudG9vbGJhciAudmlldy1tb2RlIC5ncmlkJyxcblx0XHRcdFx0XHRtb2RlOiAnaHRtbCdcblx0XHRcdFx0fSxcblx0XHRcdFx0J2ktbGlzdCc6IHtcblx0XHRcdFx0XHRzZWxlY3RvcjogJy50b29sYmFyIC52aWV3LW1vZGUgLmxpc3QnLFxuXHRcdFx0XHRcdG1vZGU6ICdodG1sJ1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0JGooZG9jdW1lbnQpXG5cdFx0XHRcdC5yZWFkeShmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0YWRkU1ZHKHN2Z3MpO1xuXHRcdFx0XHRcdGFkZFNWRyh0cnVjayk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAobmVvbi5hZGRTVkcgIT09IGZhbHNlKSB7XG5cdFx0XHQkaihkb2N1bWVudClcblx0XHRcdFx0LnJlYWR5KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRhZGRTVkcobmVvbi5hZGRTVkcpXG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIGRlZmF1bHRfY2F0ZWdvcmllc19jYXJyb3NzZWwoKVxuXHRcdCAqL1xuXHRcdGlmIChuZW9uLmRlZmF1bHRfY2F0ZWdvcmllc19jYXJyb3NzZWwgIT09IGZhbHNlKSB7XG5cdFx0XHQkaihkb2N1bWVudClcblx0XHRcdFx0LnJlYWR5KGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0ZGVmYXVsdF9jYXRlZ29yaWVzX2NhcnJvc3NlbCgpXG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIGRlZmF1bHRfY2Fycm9zc2VsX2JyYW5kcygpXG5cdFx0ICovXG5cdFx0aWYgKG5lb24uZGVmYXVsdF9jYXJyb3NzZWxfYnJhbmRzICE9PSBmYWxzZSkge1xuXHRcdFx0JGooZG9jdW1lbnQpXG5cdFx0XHRcdC5yZWFkeShmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdGRlZmF1bHRfY2Fycm9zc2VsX2JyYW5kcygpXG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIGRlZmF1bHRfY2Fycm9zc2VsX2pvaW50c2FsZXMoKVxuXHRcdCAqL1xuXHRcdGlmIChuZW9uLmRlZmF1bHRfY2Fycm9zc2VsX2pvaW50c2FsZXMgIT09IGZhbHNlKSB7XG5cdFx0XHQkaihkb2N1bWVudClcblx0XHRcdFx0LnJlYWR5KGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0ZGVmYXVsdF9jYXJyb3NzZWxfam9pbnRzYWxlcygpXG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIGZpeF9jYXRlZ29yeV9kZXNjcmlwdGlvbigpXG5cdFx0ICovXG5cdFx0aWYgKG5lb24uZml4X2NhdGVnb3J5X2Rlc2NyaXB0aW9uICE9PSBmYWxzZSkge1xuXHRcdFx0JGooZG9jdW1lbnQpXG5cdFx0XHRcdC5yZWFkeShmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdGZpeF9jYXRlZ29yeV9kZXNjcmlwdGlvbigpXG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIGRlZmF1bHRfdGFicygpXG5cdFx0ICovXG5cdFx0aWYgKG5lb24uZGVmYXVsdF90YWJzICE9PSBmYWxzZSkge1xuXHRcdFx0JGooZG9jdW1lbnQpXG5cdFx0XHRcdC5yZWFkeShmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdGRlZmF1bHRfdGFicygpXG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIGZpeF9hZGRyZXNzX3Bob25lKClcblx0XHQgKi9cblx0XHRpZiAobmVvbi5maXhfYWRkcmVzc19waG9uZSAhPT0gZmFsc2UpIHtcblx0XHRcdCRqKGRvY3VtZW50KVxuXHRcdFx0XHQucmVhZHkoZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRmaXhfYWRkcmVzc19waG9uZSgpXG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIGZpeF9jYXRhbG9nX2ZsZXhib3goKVxuXHRcdCAqL1xuXHRcdGlmIChuZW9uLmZpeF9jYXRhbG9nX2ZsZXhib3ggIT09IGZhbHNlKSB7XG5cdFx0XHQkaihkb2N1bWVudClcblx0XHRcdFx0LnJlYWR5KGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0Zml4X2NhdGFsb2dfZmxleGJveCgpXG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIG9yZGVyU3RhdHVzKClcblx0XHQgKi9cblx0XHQvL2lmKG5lb24ub3JkZXJTdGF0dXMgIT09IGZhbHNlKXtcblx0XHQkaihkb2N1bWVudClcblx0XHRcdC5yZWFkeShmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRvcmRlclN0YXR1cygpXG5cdFx0XHR9KTtcblx0XHQvL31cblxuXHRcdC8qKlxuXHRcdCAqIG1fY2F0ZWdvcmllcygpXG5cdFx0ICovXG5cdFx0aWYgKG5lb24ubV9jYXRlZ29yaWVzICE9PSBmYWxzZSkge1xuXHRcdFx0JGooZG9jdW1lbnQpXG5cdFx0XHRcdC8vIG9ic2VydmVyIHBhcmEgYWJyaXIgZSBmZWNoYXIgbyBtZW51XG5cdFx0XHRcdC5vbignY2xpY2snLCAnLmNhdGVnb3JpZXNfX3Nob3cnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dmFyIG1lbnUgPSAkaignIycgKyAkaih0aGlzKS5hdHRyKCdkYXRhLW1lbnUnKSk7XG5cdFx0XHRcdFx0bWVudS5hZGRDbGFzcygnb24nKTtcblx0XHRcdFx0XHRsb2NrQm9keSh0cnVlKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0Lm9uKCdjbGljaycsICcuY2F0ZWdvcmllc19faGlkZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR2YXIgbWVudSA9ICRqKCcjJyArICRqKHRoaXMpLmF0dHIoJ2RhdGEtbWVudScpKTtcblx0XHRcdFx0XHRtZW51LnJlbW92ZUNsYXNzKCdvbicpO1xuXHRcdFx0XHRcdGxvY2tCb2R5KGZhbHNlKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogbV9zZWFyY2goKVxuXHRcdCAqL1xuXHRcdGlmIChuZW9uLm1fc2VhcmNoICE9PSBmYWxzZSkge1xuXHRcdFx0JGooZG9jdW1lbnQpXG5cdFx0XHRcdC8vIG9ic2VydmVycyBwYXJhIGFicmlyIGUgZmVjaGFyIGEgYnVzY2Fcblx0XHRcdFx0Lm9uKCdjbGljaycsICcuaGVhZGVyIC5zZWFyY2hfX2J1dHRvbicsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0aWYgKCRqKHRoaXMpLmNsb3Nlc3QoJy5zZWFyY2gnKS5maW5kKCcuc2VhcmNoX19oaWRlJykubGVuZ3RoID09IDApIHtcblx0XHRcdFx0XHRcdC8vIHNlIG7Do28gdGl2ZXIgc2lkbyBjcmlhZG8gbyBib3TDo28gZGUgZmVjaGFyXG5cdFx0XHRcdFx0XHQkaih0aGlzKS5jbG9zZXN0KCcuc2VhcmNoJykuZmluZCgnLnNlYXJjaF9faW5wdXQnKS5hZnRlcignPGRpdiBjbGFzcz1cInNlYXJjaF9faGlkZSBidG4gYnRuLS1jbG9zZVwiPjxzcGFuPkZlY2hhcjwvc3Bhbj48L2Rpdj4nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGlzNTY4KCkgJiYgISRqKHRoaXMpLmNsb3Nlc3QoJy5zZWFyY2gnKS5oYXNDbGFzcygnb24nKSkge1xuXHRcdFx0XHRcdFx0Ly8gc2UgYSB0ZWxhIGZvciA8PSBxdWUgNTY4cHggZSBmb3IgYSBwcmltZWlyYSB2ZXogcXVlIGVsZSDDqSBjbGljYWRvXG5cdFx0XHRcdFx0XHQkaih0aGlzKS5jbG9zZXN0KCcuc2VhcmNoJykuYWRkQ2xhc3MoJ29uJykuZmluZCgnLnNlYXJjaF9faW5wdXQnKS5mb2N1cygpXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fSAvLyBzZSBuw6NvIGZvciBhIHByaW1laXJhIHZleiwgZWxlIG7Do28gaW50ZXJyb21wZSBhIGHDp8OjbyBlIGRlaXhhIG8gZm9ybSBzZXIgZW52aWFkb1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQub24oJ2NsaWNrJywgJy5zZWFyY2hfX2hpZGUnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0JGoodGhpcykuY2xvc2VzdCgnLnNlYXJjaCcpLnJlbW92ZUNsYXNzKCdvbicpO1xuXHRcdFx0XHRcdCRqKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQucmVhZHkoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdG1fc2VhcmNoKClcblx0XHRcdFx0fSk7XG5cdFx0XHQkaih3aW5kb3cpXG5cdFx0XHRcdC5vbigncmVzaXplU3RvcCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRtX3NlYXJjaCgpXG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIG1fZmlsdGVycygpXG5cdFx0ICovXG5cdFx0aWYgKG5lb24ubV9maWx0ZXJzICE9PSBmYWxzZSkge1xuXHRcdFx0JGood2luZG93KVxuXHRcdFx0XHQvLyBvYnNlcnZlciBwYXJhIG9jdWx0YXIgbyBib3TDo28gZGUgZmlsdHJvIGFvIHJvbGFyIHNvYnJlIG8gLmZvb3Rlci1jb250YWluZXJcblx0XHRcdFx0LnNjcm9sbChmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdGlmIChpczk5MigpICYmICRqKCcuZmlsdGVycycpLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0dmFyIHNjcm9sbGVkID0gJGood2luZG93KS5zY3JvbGxUb3AoKSArICRqKHdpbmRvdykuaGVpZ2h0KCksXG5cdFx0XHRcdFx0XHRcdGxpbWl0ID0gJGooJy5mb290ZXItY29udGFpbmVyJykub2Zmc2V0KCkudG9wIC0gcGFyc2VJbnQoJGooJy5maWx0ZXJzID4gLnRpdGxlJykuY3NzKCdib3R0b20nKSk7XG5cblx0XHRcdFx0XHRcdGlmIChzY3JvbGxlZCA+PSBsaW1pdCkge1xuXHRcdFx0XHRcdFx0XHQkaignLmZpbHRlcnMgPiAudGl0bGUnKS5hZGRDbGFzcygnc2Nyb2xsZWQnKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdCRqKCcuZmlsdGVycyA+IC50aXRsZScpLnJlbW92ZUNsYXNzKCdzY3JvbGxlZCcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0Lm9uKCdyZXNpemVTdG9wJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdG1fZmlsdGVycygpXG5cdFx0XHRcdH0pO1xuXHRcdFx0JGooZG9jdW1lbnQpXG5cdFx0XHRcdC8vIG9ic2VydmVyIHBhcmEgbW9zdHJhciBlIG9jdWx0YXIgb3MgZmlsdHJvc1xuXHRcdFx0XHQub24oJ2NsaWNrJywgJy5maWx0ZXJzID4gLnRpdGxlJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRpZiAoaXM5OTIoKSkge1xuXHRcdFx0XHRcdFx0aWYgKCRqKHRoaXMpLmNsb3Nlc3QoJy5maWx0ZXJzJykuaGFzQ2xhc3MoJ29uJykpIHtcblx0XHRcdFx0XHRcdFx0JGoodGhpcykuY2xvc2VzdCgnLmZpbHRlcnMnKS5yZW1vdmVDbGFzcygnb24nKTtcblx0XHRcdFx0XHRcdFx0aGlkZUhlYWRlcihmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdGxvY2tCb2R5KGZhbHNlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdCRqKHRoaXMpLmNsb3Nlc3QoJy5maWx0ZXJzJykuYWRkQ2xhc3MoJ29uJyk7XG5cdFx0XHRcdFx0XHRcdGhpZGVIZWFkZXIodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdGxvY2tCb2R5KHRydWUpO1xuXG5cdFx0XHRcdFx0XHRcdGlmICgkaignLmhlYWRlciAuc2VhcmNoJykuaGFzQ2xhc3MoJ29uJykpIHtcblx0XHRcdFx0XHRcdFx0XHQkaignLmhlYWRlciAuc2VhcmNoJykucmVtb3ZlQ2xhc3MoJ29uJyk7XG5cdFx0XHRcdFx0XHRcdFx0JGooJy5oZWFkZXIgLnNlYXJjaF9faGlkZScpLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQucmVhZHkoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdG1fZmlsdGVycygpXG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIG1fbXlhY2NvdW50KClcblx0XHQgKi9cblx0XHRpZiAobmVvbi5tX215YWNjb3VudCAhPT0gZmFsc2UpIHtcblx0XHRcdCRqKGRvY3VtZW50KVxuXHRcdFx0XHQub24oJ2NsaWNrJywgJy5teWFjY291bnRfX2hlYWRlcicsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0aWYgKGlzOTkyKCkpIHtcblx0XHRcdFx0XHRcdCRqKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdvbicpO1xuXHRcdFx0XHRcdFx0aGlkZUhlYWRlcih0cnVlKTtcblx0XHRcdFx0XHRcdGxvY2tCb2R5KHRydWUpO1xuXG5cdFx0XHRcdFx0XHRpZiAoJGoodGhpcykucGFyZW50KCkuZmluZCgnLm15YWNjb3VudF9faGlkZScpLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdCRqKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5teWFjY291bnRfX2NvbnRlbnQnKS5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwibXlhY2NvdW50X19oaWRlIGJ0biBidG4tLWJhY2tcIj48c3Bhbj5GZWNoYXI8L3NwYW4+PC9kaXY+Jyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignY2xpY2snLCAnLm15YWNjb3VudF9faGlkZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQkaih0aGlzKS5jbG9zZXN0KCcubXlhY2NvdW50JykucmVtb3ZlQ2xhc3MoJ29uJyk7XG5cdFx0XHRcdFx0aGlkZUhlYWRlcihmYWxzZSk7XG5cdFx0XHRcdFx0bG9ja0JvZHkoZmFsc2UpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQucmVhZHkoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdG1fbXlhY2NvdW50KClcblx0XHRcdFx0fSk7XG5cdFx0XHQkaih3aW5kb3cpLm9uKCdyZXNpemVTdG9wJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRtX215YWNjb3VudCgpXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBtX215Y2FydCgpXG5cdFx0ICovXG5cdFx0aWYgKG5lb24ubV9teWNhcnQgIT09IGZhbHNlKSB7XG5cdFx0XHQkaihkb2N1bWVudClcblx0XHRcdFx0Lm9uKCdjbGljaycsICcubXljYXJ0X19oZWFkZXInLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0aWYgKGlzOTkyKCkpIHtcblx0XHRcdFx0XHRcdCRqKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdvbicpO1xuXHRcdFx0XHRcdFx0aGlkZUhlYWRlcih0cnVlKTtcblx0XHRcdFx0XHRcdGxvY2tCb2R5KHRydWUpO1xuXG5cdFx0XHRcdFx0XHRpZiAoJGoodGhpcykucGFyZW50KCkuZmluZCgnLm15Y2FydF9faGlkZScpLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdCRqKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5teWNhcnRfX2NvbnRlbnQnKS5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwibXljYXJ0X19oaWRlIGJ0biBidG4tLWJhY2tcIj48c3Bhbj5GZWNoYXI8L3NwYW4+PC9kaXY+Jyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignY2xpY2snLCAnLm15Y2FydF9faGlkZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQkaih0aGlzKS5jbG9zZXN0KCcubXljYXJ0JykucmVtb3ZlQ2xhc3MoJ29uJyk7XG5cdFx0XHRcdFx0aGlkZUhlYWRlcihmYWxzZSk7XG5cdFx0XHRcdFx0bG9ja0JvZHkoZmFsc2UpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQucmVhZHkoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdG1fbXljYXJ0KClcblx0XHRcdFx0fSk7XG5cdFx0XHQkaih3aW5kb3cpLm9uKCdyZXNpemVTdG9wJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRtX215Y2FydCgpXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBtX3BhcmNlbGFtZW50bygpXG5cdFx0ICovXG5cdFx0aWYgKG5lb24ubV9wYXJjZWxhbWVudG8gIT09IGZhbHNlKSB7XG5cdFx0XHQkaihkb2N1bWVudClcblx0XHRcdFx0Lm9uKCdjbGljaycsICcucGFyY2VsYW1lbnRvIC50aXRsZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRpZiAoaXM5OTIoKSkge1xuXHRcdFx0XHRcdFx0JGoodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ29uJyk7XG5cdFx0XHRcdFx0XHRoaWRlSGVhZGVyKHRydWUpO1xuXHRcdFx0XHRcdFx0bG9ja0JvZHkodHJ1ZSk7XG5cblx0XHRcdFx0XHRcdGlmICgkaih0aGlzKS5uZXh0KCd1bCcpLmZpbmQoJy5wYXJjZWxhbWVudG9fX2hpZGUnKS5sZW5ndGggPT0gMCkge1xuXHRcdFx0XHRcdFx0XHQkaih0aGlzKS5uZXh0KCd1bCcpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJidG4gYnRuLS1iYWNrIHBhcmNlbGFtZW50b19faGlkZVwiPjxzcGFuPkZlY2hhcjwvc3Bhbj48L2Rpdj4nKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignY2xpY2snLCAnLnBhcmNlbGFtZW50b19faGlkZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRpZiAoaXM5OTIoKSkge1xuXHRcdFx0XHRcdFx0JGoodGhpcykuY2xvc2VzdCgnLnBhcmNlbGFtZW50bycpLnJlbW92ZUNsYXNzKCdvbicpO1xuXHRcdFx0XHRcdFx0aGlkZUhlYWRlcihmYWxzZSk7XG5cdFx0XHRcdFx0XHRsb2NrQm9keShmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQucmVhZHkoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdG1fcGFyY2VsYW1lbnRvKClcblx0XHRcdFx0fSk7XG5cdFx0XHQkaih3aW5kb3cpLm9uKCdyZXNpemVTdG9wJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRtX3BhcmNlbGFtZW50bygpXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBtX2ZyZXRlKClcblx0XHQgKi9cblx0XHRpZiAobmVvbi5tX2ZyZXRlICE9PSBmYWxzZSkge1xuXHRcdFx0JGooZG9jdW1lbnQpXG5cdFx0XHRcdC5vbignY2xpY2snLCAnLmZyZXRlX190aXRsZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRpZiAoaXM5OTIoKSkge1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdGlmICgkaih0aGlzKS5jbG9zZXN0KCcuZnJldGUnKS5oYXNDbGFzcygnZnJldGUtLW9wZW4nKSkge1xuXHRcdFx0XHRcdFx0XHRcdGhpZGVIZWFkZXIoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdGxvY2tCb2R5KGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRoaWRlSGVhZGVyKHRydWUpO1xuXHRcdFx0XHRcdFx0XHRcdGxvY2tCb2R5KHRydWUpO1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCRqKCcuZnJldGVfX2hpZGUnKS5sZW5ndGggPT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0JGooJy5mcmV0ZV9fY29udGVudCcpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJmcmV0ZV9faGlkZSBidG4gYnRuLS1iYWNrXCI+PHNwYW4+RmVjaGFyPC9zcGFuPjwvZGl2PicpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSwgMTAwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignY2xpY2snLCAnLmZyZXRlX19oaWRlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdCRqKHRoaXMpLmNsb3Nlc3QoJy5mcmV0ZScpLnJlbW92ZUNsYXNzKCdmcmV0ZS0tb3BlbicpO1xuXHRcdFx0XHRcdGhpZGVIZWFkZXIoZmFsc2UpO1xuXHRcdFx0XHRcdGxvY2tCb2R5KGZhbHNlKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LnJlYWR5KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRtX2ZyZXRlKClcblx0XHRcdFx0fSk7XG5cdFx0XHQkaih3aW5kb3cpLm9uKCdyZXNpemVTdG9wJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRtX2ZyZXRlKClcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIG1fcHJvZHV0bygpXG5cdFx0ICovXG5cdFx0aWYgKG5lb24ubV9wcm9kdXRvICE9PSBmYWxzZSkge1xuXHRcdFx0JGooZG9jdW1lbnQpXG5cdFx0XHRcdC5vbignY2xpY2snLFxuXHRcdFx0XHRcdCcucmVsYXRlZF9fdGl0bGUsIC5yZWNvbW1lbmRlZF9fdGl0bGUsIC53aG9zYXdfX3RpdGxlLCAuam9pbnRzYWxlc19fdGl0bGUsIC51cHNlbGxfX3RpdGxlLCAucmV2aWV3c19fdGl0bGUnLFxuXHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChpczU2OCgpKSB7XG5cdFx0XHRcdFx0XHRcdGlmICgkaih0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygnb24nKSkge1xuXHRcdFx0XHRcdFx0XHRcdCRqKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdvbicpO1xuXHRcdFx0XHRcdFx0XHRcdGhpZGVIZWFkZXIoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdGxvY2tCb2R5KGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHQkaih0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnb24nKTtcblx0XHRcdFx0XHRcdFx0XHRoaWRlSGVhZGVyKHRydWUpO1xuXHRcdFx0XHRcdFx0XHRcdGxvY2tCb2R5KHRydWUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0Lm9uKCdjbGljaycsXG5cdFx0XHRcdFx0Jy5yZWxhdGVkX19oaWRlLCAucmVjb21tZW5kZWRfX2hpZGUsIC53aG9zYXdfX2hpZGUsIC5qb2ludHNhbGVzX19oaWRlLCAudXBzZWxsX19oaWRlLCAucmV2aWV3c19faGlkZScsXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0JGoodGhpcykucGFyZW50KCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ29uJyk7XG5cdFx0XHRcdFx0XHRoaWRlSGVhZGVyKGZhbHNlKTtcblx0XHRcdFx0XHRcdGxvY2tCb2R5KGZhbHNlKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQucmVhZHkoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdG1fcHJvZHV0bygpXG5cdFx0XHRcdH0pO1xuXHRcdFx0JGood2luZG93KS5vbigncmVzaXplU3RvcCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0bV9wcm9kdXRvKClcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIG1fdGFicygpXG5cdFx0ICovXG5cdFx0aWYgKG5lb24ubV90YWJzICE9PSBmYWxzZSkge1xuXHRcdFx0JGooZG9jdW1lbnQpXG5cdFx0XHRcdC5vbignY2xpY2snLCAnLnRhYnNfX3RhYicsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRpZiAoaXM1NjgoKSkge1xuXHRcdFx0XHRcdFx0aWYgKCRqKHRoaXMpLm5leHQoJ2RkJykuaGFzQ2xhc3MoJ29wZW4nKSkge1xuXHRcdFx0XHRcdFx0XHQkaih0aGlzKS5uZXh0KCdkZCcpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG5cdFx0XHRcdFx0XHRcdGhpZGVIZWFkZXIoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRsb2NrQm9keShmYWxzZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQkaih0aGlzKS5uZXh0KCdkZCcpLmFkZENsYXNzKCdvcGVuJyk7XG5cdFx0XHRcdFx0XHRcdGhpZGVIZWFkZXIodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdGxvY2tCb2R5KHRydWUpO1xuXG5cdFx0XHRcdFx0XHRcdGlmICgkaih0aGlzKS5uZXh0KCdkZCcpLmZpbmQoJy50YWJzX19oaWRlJykubGVuZ3RoID09IDApIHtcblx0XHRcdFx0XHRcdFx0XHQkaih0aGlzKS5uZXh0KCdkZCcpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJ0YWJzX19oaWRlIGJ0biBidG4tLWJhY2tcIj48c3Bhbj5GZWNoYXI8L3NwYW4+PC9kaXY+Jyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignY2xpY2snLCAnLnRhYnNfX2hpZGUnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0JGoodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblx0XHRcdFx0XHRoaWRlSGVhZGVyKGZhbHNlKTtcblx0XHRcdFx0XHRsb2NrQm9keShmYWxzZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5yZWFkeShmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0bV90YWJzKClcblx0XHRcdFx0fSk7XG5cdFx0XHQkaih3aW5kb3cpLm9uKCdyZXNpemVTdG9wJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRtX3RhYnMoKVxuXHRcdFx0fSk7XG5cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBtX3BhaW5lbENsaWVudGUoKVxuXHRcdCAqL1xuXHRcdGlmIChuZW9uLm1fcGFpbmVsQ2xpZW50ZSAhPT0gZmFsc2UpIHtcblx0XHRcdCRqKGRvY3VtZW50KVxuXHRcdFx0XHQub24oJ2NsaWNrJywgJy5ibG9jay1hY2NvdW50IC5ibG9jay10aXRsZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRpZiAoaXM5OTIoKSkge1xuXHRcdFx0XHRcdFx0aWYgKCRqKCcuYmxvY2stYWNjb3VudCcpLmhhc0NsYXNzKCdvbicpKSB7XG5cdFx0XHRcdFx0XHRcdCRqKCcuYmxvY2stYWNjb3VudCcpLnJlbW92ZUNsYXNzKCdvbicpO1xuXHRcdFx0XHRcdFx0XHRoaWRlSGVhZGVyKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0bG9ja0JvZHkoZmFsc2UpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0JGooJy5ibG9jay1hY2NvdW50JykuYWRkQ2xhc3MoJ29uJyk7XG5cdFx0XHRcdFx0XHRcdGhpZGVIZWFkZXIodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdGxvY2tCb2R5KHRydWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LnJlYWR5KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRtX3BhaW5lbENsaWVudGUoKVxuXHRcdFx0XHR9KTtcblx0XHRcdCRqKHdpbmRvdykub24oJ3Jlc2l6ZVN0b3AnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdG1fcGFpbmVsQ2xpZW50ZSgpXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0fTtcblxuXHQkLmZuLm5lb25UaGVtZS5jdXN0b20gPSB7XG5cdFx0Ly8gZGVmYXVsdHNcblx0XHRkZWZhdWx0X2NhdGVnb3JpZXNfanVzdGlmeTogdHJ1ZSxcblx0XHRkZWZhdWx0X2NhdGVnb3JpZXNfbWluaTogdHJ1ZSxcblx0XHRkZWZhdWx0X2NhdGVnb3JpZXNfY2Fycm9zc2VsOiB0cnVlLFxuXHRcdGRlZmF1bHRfY2Fycm9zc2VsX3Byb2R1dG9zOiB0cnVlLFxuXHRcdGRlZmF1bHRfY2Fycm9zc2VsX2pvaW50c2FsZXM6IHRydWUsXG5cdFx0ZGVmYXVsdF9jYXJyb3NzZWxfYnJhbmRzOiB0cnVlLFxuXHRcdGRlZmF1bHRfZHJvcEZyb206IHRydWUsXG5cdFx0ZGVmYXVsdF9TVkdzOiB0cnVlLFxuXHRcdGRlZmF1bHRfdGFiczogdHJ1ZSxcblx0XHQvLyBmaXhlc1xuXHRcdGZpeF9JRV9TVkdzOiB0cnVlLFxuXHRcdGZpeF96b29tSGVhZGVyOiB0cnVlLFxuXHRcdGZpeF9hZGRyZXNzX3Bob25lOiB0cnVlLFxuXHRcdGZpeF9jYXRlZ29yeV9kZXNjcmlwdGlvbjogdHJ1ZSxcblx0XHRmaXhfY2F0YWxvZ19mbGV4Ym94OiB0cnVlLFxuXHRcdC8vIHJlc3BvbnNpdmVcblx0XHRtX2NhdGVnb3JpZXM6IHRydWUsXG5cdFx0bV9zZWFyY2g6IHRydWUsXG5cdFx0bV9maWx0ZXJzOiB0cnVlLFxuXHRcdG1fbXlhY2NvdW50OiB0cnVlLFxuXHRcdG1fbXljYXJ0OiB0cnVlLFxuXHRcdG1fcGFyY2VsYW1lbnRvOiB0cnVlLFxuXHRcdG1fZnJldGU6IHRydWUsXG5cdFx0bV9wcm9kdXRvOiB0cnVlLFxuXHRcdG1fdGFiczogdHJ1ZSxcblx0XHRtX3BhaW5lbENsaWVudGU6IHRydWUsXG5cdFx0Ly8gZnVuY2lvbmFsaWRhZGVzXG5cdFx0ZHJvcEZyb206IGZhbHNlLCAvLyBbYXJyYXldXG5cdFx0YWRkU1ZHOiBmYWxzZSAvLyB7c3ZnOiB7IG9wdGlvbnMgfX1cblx0fTtcblxufShqUXVlcnkpKTtcblxuLyoqXG4gKiBBZGljaW9uYSBjbGFzc2VzIHBhcmEgcG9zaWNpb25hciBkcm9wZG93bnNcbiAqIEBwYXJhbSBkcm9wZG93bnNcbiAqL1xud2luZG93LmRyb3BfZnJvbSA9IGZ1bmN0aW9uIGRyb3BfZnJvbShkcm9wZG93bnMpIHtcblxuXHR2YXIgaF9taWRkbGUgPSAkaih3aW5kb3cpLndpZHRoKCkgLyAyLFxuXHRcdHZfbWlkZGxlID0gJGood2luZG93KS5oZWlnaHQoKSAvIDI7XG5cblx0JGouZWFjaChkcm9wZG93bnMsIGZ1bmN0aW9uIChpLCBlbCkge1xuXHRcdHZhciBkcm9wID0gJGooJycgKyBlbCk7XG5cdFx0aWYgKGRyb3AubGVuZ3RoKSB7XG5cdFx0XHRkcm9wLmVhY2goZnVuY3Rpb24gKGksIGRyb3ApIHtcblxuXHRcdFx0XHR2YXIgdG9wID0gJGooZHJvcCkub2Zmc2V0KCkudG9wIC0gJGood2luZG93KS5zY3JvbGxUb3AoKSxcblx0XHRcdFx0XHRsZWZ0ID0gJGooZHJvcCkub2Zmc2V0KCkubGVmdCAtICRqKHdpbmRvdykuc2Nyb2xsTGVmdCgpO1xuXG5cdFx0XHRcdGlmIChsZWZ0ID4gaF9taWRkbGUpIHtcblx0XHRcdFx0XHQkaihkcm9wKS5hZGRDbGFzcygnZHJvcC0tcmlnaHQnKS5yZW1vdmVDbGFzcygnZHJvcC0tbGVmdCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRqKGRyb3ApLmFkZENsYXNzKCdkcm9wLS1sZWZ0JykucmVtb3ZlQ2xhc3MoJ2Ryb3AtLXJpZ2h0Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodG9wID4gdl9taWRkbGUpIHtcblx0XHRcdFx0XHQkaihkcm9wKS5hZGRDbGFzcygnZHJvcC0tYm90dG9tJykucmVtb3ZlQ2xhc3MoJ2Ryb3AtLXRvcCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRqKGRyb3ApLmFkZENsYXNzKCdkcm9wLS10b3AnKS5yZW1vdmVDbGFzcygnZHJvcC0tYm90dG9tJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcblxufVxuXG4vKipcbiAqIEFycnVtYSBvIHdpZHRoIGRvcyBTVkdzIGRlIHBhZ3RvcywgZW52aW9zIGUgcmVkZXMgc29jaWFpcyBwYXJhIG8gSUVcbiAqL1xud2luZG93LmZpeF9JRV9TVkdzID0gZnVuY3Rpb24gZml4X0lFX1NWR3MoKSB7XG5cdHZhciBTVkdzID0gJGooJy5wYXlzX19zdmcsIC5zaGlwc19fc3ZnLCAuc29jaWFsc19fc3ZnJyk7XG5cdGlmIChTVkdzLmxlbmd0aCkge1xuXHRcdFNWR3MuZWFjaChmdW5jdGlvbiAoaSwgZWwpIHtcblxuXHRcdFx0dmFyIHN2Z19jbGFzcyA9ICRqKGVsKS5hdHRyKCdjbGFzcycpLnJlcGxhY2UoL2xpZ2h0fGRhcmt8b25lY29sb3J8cGF5c19fc3ZnfFxccy9nLCAnJyk7XG5cdFx0XHR2YXIgc3ZnSFRNTCA9ICRqKGVsKS5wYXJlbnQoKS5odG1sKCk7XG5cdFx0XHR2YXIgcmVnZXggPSAvdmlld0JveFxcPVtcXFwiXFwnXSguKj8pW1xcXCJcXCddL2c7XG5cdFx0XHR2YXIgdmlld2JveCA9IHJlZ2V4LmV4ZWMoc3ZnSFRNTCk7XG5cblx0XHRcdGlmICh0eXBlb2Ygdmlld2JveCAhPSBcInVuZGVmaW5lZFwiICYmIHZpZXdib3gpIHtcblx0XHRcdFx0dmlld2JveCA9IHZpZXdib3hbMV0uc3BsaXQoJyAnKTtcblxuXHRcdFx0XHR2YXIgaCA9ICRqKGVsKS5oZWlnaHQoKTtcblx0XHRcdFx0dmFyIGJveFdpZHRoID0gdmlld2JveFsyXTtcblx0XHRcdFx0dmFyIGJveEhlaWdodCA9IHZpZXdib3hbM107XG5cdFx0XHRcdHZhciBuZXdXaWR0aCA9IChib3hXaWR0aCAqIGgpIC8gYm94SGVpZ2h0O1xuXG5cdFx0XHRcdG5ld1dpZHRoID0gbmV3V2lkdGgudG9GaXhlZCgzKTtcblxuXHRcdFx0XHRpZiAoJGooZWwpLnBhcmVudCgpLmZpbmQoJ3N0eWxlJykubGVuZ3RoKSB7XG5cdFx0XHRcdFx0JGooZWwpLnBhcmVudCgpLmZpbmQoJ3N0eWxlJykucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JGooZWwpLmFmdGVyKCc8c3R5bGU+c3ZnLnBheXNfX3N2Zy4nICsgc3ZnX2NsYXNzICsgJ3sgd2lkdGg6ICcgKyBuZXdXaWR0aCArICdweCB9PC9zdHlsZT4nKTtcblx0XHRcdH1cblxuXHRcdH0pO1xuXHR9XG59XG5cbi8qKlxuICogTWVudSBkZSBDYXRlZ29yaWFzIC0gTW9kbyBKdXN0aWZ5XG4gKi9cbndpbmRvdy5kZWZhdWx0X2NhdGVnb3JpZXNfanVzdGlmeSA9IGZ1bmN0aW9uIGRlZmF1bHRfY2F0ZWdvcmllc19qdXN0aWZ5KCkge1xuXHR2YXIgbWVudSA9ICRqKCcuY2F0ZWdvcmllcy0tanVzdGlmeScpO1xuXHRpZiAobWVudS5sZW5ndGgpIHtcblx0XHRtZW51LmVhY2goZnVuY3Rpb24gKGksIG1lbnUpIHtcblxuXHRcdFx0dmFyIGxpbWl0ID0gJGooJz4gLnVsLS0wJywgbWVudSkud2lkdGgoKSxcblx0XHRcdFx0bWVudV9pZCA9ICRqKG1lbnUpLmF0dHIoJ2lkJyksXG5cdFx0XHRcdHdpZHRoID0gMDtcblxuXHRcdFx0JGooJz4gLnVsLS0wID4gLmxpLS0wJywgbWVudSkucmVtb3ZlQ2xhc3MoJ3JlbW92ZWQnKS5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xuXHRcdFx0XHR3aWR0aCArPSAkaihlbCkud2lkdGgoKTtcblxuXHRcdFx0XHRpZiAod2lkdGggPiBsaW1pdCkge1xuXHRcdFx0XHRcdCRqKCcjJyArIG1lbnVfaWQgKyAnID4gLnVsLS0wID4gLmxpLS0wJykuc2xpY2UoaSkuYWRkQ2xhc3MoJ3JlbW92ZWQnKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBNZW51IGRlIENhdGVnb3JpYXMgLSBNb2RvIE1pbmlcbiAqL1xud2luZG93LmRlZmF1bHRfY2F0ZWdvcmllc19taW5pID0gZnVuY3Rpb24gZGVmYXVsdF9jYXRlZ29yaWVzX21pbmkoKSB7XG5cdC8vIG1lbnUgbWluaVxuXHQkaignLmNhdGVnb3JpZXNfX2hlYWRlciwgLmNhdGVnb3JpZXNfX2Nsb3NlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuXHRcdGlmICgkaignLmNhdGVnb3JpZXNfX2NvbnRlbnQnKS5oYXNDbGFzcygnb3BlbicpKSB7XG5cdFx0XHQkaignLmNhdGVnb3JpZXNfX2NvbnRlbnQnKS5maXJzdCgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG5cdFx0XHRsb2NrQm9keShmYWxzZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRqKCcuY2F0ZWdvcmllc19fY29udGVudCcpLmZpcnN0KCkuYWRkQ2xhc3MoJ29wZW4nKTtcblx0XHRcdGxvY2tCb2R5KHRydWUpO1xuXHRcdH1cblx0fSk7XG5cdGlmICgkaignLmNhdGVnb3JpZXNfX2NvbnRlbnQnKS5sZW5ndGggJiYgJGooJ2JvZHkgPiAuY2F0ZWdvcmllc19fY29udGVudCcpLmxlbmd0aCA9PSAwKSB7XG5cdFx0JGooJ2JvZHknKS5hcHBlbmQoJy5jYXRlZ29yaWVzX19jb250ZW50Jyk7XG5cdFx0JGooJy5jYXRlZ29yaWVzX19jb250ZW50IC51bC0tMCcpLmFwcGVuZCgnPGxpIGNsYXNzPVwibGktLTAgbGktLWZpeFwiIC8+PGxpIGNsYXNzPVwibGktLTAgbGktLWZpeFwiIC8+PGxpIGNsYXNzPVwibGktLTAgbGktLWZpeFwiIC8+PGxpIGNsYXNzPVwibGktLTAgbGktLWZpeFwiIC8+PGxpIGNsYXNzPVwibGktLTAgbGktLWZpeFwiIC8+Jyk7XG5cdH1cbn1cblxuLyoqXG4gKiBNZW51IGRlIENhdGVnb3JpYXMgLSBNb2RvIENhcnJvc3NlbFxuICovXG53aW5kb3cuZGVmYXVsdF9jYXRlZ29yaWVzX2NhcnJvc3NlbCA9IGZ1bmN0aW9uIGRlZmF1bHRfY2F0ZWdvcmllc19jYXJyb3NzZWwoKSB7XG5cdHZhciBtZW51ID0gJGooJy5jYXRlZ29yaWVzLS1jYXJyb3NzZWwnKTtcblxuXHRpZiAobWVudS5maW5kKCcubGktLTAnKS5sZW5ndGggPiAwKSB7XG5cdFx0bWVudS5maW5kKCcudWwtLTAnKS5vd2xDYXJvdXNlbCh7XG5cdFx0XHRuYXZpZ2F0aW9uOiB0cnVlLFxuXHRcdFx0bmF2aWdhdGlvblRleHQ6IFsnPycsICc/J10sXG5cdFx0XHRwYWdpbmF0aW9uOiBmYWxzZSxcblx0XHRcdGFmdGVySW5pdDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRtZW51LmFkZENsYXNzKCdsb2FkZWQnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG4vKipcbiAqIEF0aXZhIG8gY2Fycm9zc2VsIG5hIENvbGXDp8OjbyBkZSBQcm9kdXRvc1xuICovXG53aW5kb3cuZGVmYXVsdF9jYXJyb3NzZWxfcHJvZHV0b3MgPSBmdW5jdGlvbiBkZWZhdWx0X2NhcnJvc3NlbF9wcm9kdXRvcygpIHtcblx0dmFyIGNhcnJvc3NlbCA9ICRqKCcuY2Fycm9zc2VsIC5wcm9kdWN0c19fbGlzdCcpO1xuXHRpZiAoY2Fycm9zc2VsLmxlbmd0aCkge1xuXHRcdGNhcnJvc3NlbC5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xuXHRcdFx0aWYgKCRqKGVsKS5wYXJlbnQoKS5oYXNDbGFzcygnY2F0ZWdvcmllc19fcHJvZHVjdHMnKSkge1xuXHRcdFx0XHQvLyBzZSBmb3IgdW0gY2Fycm9zc2VsIGVtIHVtIG1lbnVcblxuXHRcdFx0XHQkaihlbCkub3dsQ2Fyb3VzZWwoe1xuXHRcdFx0XHRcdHNpbmdsZUl0ZW06IHRydWUsXG5cdFx0XHRcdFx0aXRlbVNjYWxlVXA6IHRydWUsXG5cdFx0XHRcdFx0YXV0b1BsYXk6IDMwMDAsXG5cdFx0XHRcdFx0c3RvcE9uSG92ZXI6IHRydWUsXG5cdFx0XHRcdFx0bmF2aWdhdGlvbjogZmFsc2UsXG5cdFx0XHRcdFx0YmVmb3JlTW92ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiAkai5mbi5sYXp5bG9hZCAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0XHRcdCRqKGVsKS5maW5kKCdpbWcnKS5sYXp5bG9hZCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBzZSBmb3IgZW0gdW1hIGxpc3RhZ2VtIG5vcm1hbFxuXG5cdFx0XHRcdCRqKGVsKS5vd2xDYXJvdXNlbCh7XG5cdFx0XHRcdFx0bmF2aWdhdGlvbjogdHJ1ZSxcblx0XHRcdFx0XHRuYXZpZ2F0aW9uVGV4dDogWyc/JywgJz8nXSxcblx0XHRcdFx0XHRpdGVtczogNCxcblx0XHRcdFx0XHRpdGVtc0N1c3RvbTogW1xuXHRcdFx0XHRcdFx0WzAsIDFdLFxuXHRcdFx0XHRcdFx0WzU2OCwgMl0sXG5cdFx0XHRcdFx0XHRbNzY4LCAzXSxcblx0XHRcdFx0XHRcdFsxMDI0LCA0XSxcblx0XHRcdFx0XHRcdFsxMjcwLCA0XVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0YmVmb3JlTW92ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiAkai5mbi5sYXp5bG9hZCAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0XHRcdCRqKGVsKS5maW5kKCdpbWcnKS5sYXp5bG9hZCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHR9KTtcblx0fVxufVxuXG4vKipcbiAqIEFycnVtYSBvIGhvdmVyIGRvIFpvb20geCBIZWFkZXJcbiAqL1xud2luZG93LmZpeF96b29tSGVhZGVyID0gZnVuY3Rpb24gZml4X3pvb21IZWFkZXIoKSB7XG5cdCRqKCcuaGVhZGVyLWNvbnRhaW5lcicpLmhvdmVyKGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoJGooJy56b29tQ29udGFpbmVyJykubGVuZ3RoKSB7XG5cdFx0XHQkaignLnpvb21Db250YWluZXInKS5oaWRlKCk7XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCRqKCcuem9vbUNvbnRhaW5lcicpLmxlbmd0aCkge1xuXHRcdFx0JGooJy56b29tQ29udGFpbmVyJykuc2hvdygpO1xuXHRcdH1cblx0fSk7XG59XG5cbi8qKlxuICogQWRpY2lvbmEgU1ZHcyBkbyBzcHJpdGUgbm8gRE9NXG4gKiBAcGFyYW0gZWxlbWVudHNcbiAqL1xud2luZG93LmFkZFNWRyA9IGZ1bmN0aW9uIGFkZFNWRyhzdmdzKSB7XG5cdCRqLmVhY2goc3ZncywgZnVuY3Rpb24gKHN2Zywgb3B0KSB7XG5cdFx0dmFyIHN2ZyA9IHN2Zyxcblx0XHRcdHNlbGVjdG9yID0gJGoob3B0LnNlbGVjdG9yKTtcblxuXHRcdGlmICgkaignIycgKyBzdmcpLmxlbmd0aCkge1xuXHRcdFx0aWYgKHNlbGVjdG9yLmxlbmd0aCA+IDAgJiYgc2VsZWN0b3IuZmluZCgnLicgKyBzdmcpLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdHZhciBtb2RlID0gKHR5cGVvZiBvcHQubW9kZSAhPSAndW5kZWZpbmVkJykgPyBvcHQubW9kZSA6ICdhcHBlbmQnLFxuXHRcdFx0XHRcdHJhdGlvID0gKHR5cGVvZiBvcHQucmF0aW8gIT0gJ3VuZGVmaW5lZCcpID8gb3B0LnJhdGlvIDogdHJ1ZSxcblx0XHRcdFx0XHRhc3BlY3QgPSAnJztcblxuXHRcdFx0XHRpZiAocmF0aW8gPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0YXNwZWN0ID0gJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciByZWFkeV9zdmcgPSAnPHN2ZyBjbGFzcz1cImljbyAnICsgc3ZnICsgJ1wiJyArIGFzcGVjdCArICc+PHVzZSB4bGluazpocmVmPVwiIycgKyBzdmcgKyAnXCIgLz48L3N2Zz4nO1xuXG5cdFx0XHRcdHNlbGVjdG9yLmVhY2goZnVuY3Rpb24gKGksIGVsKSB7XG5cdFx0XHRcdFx0aWYgKG1vZGUgPT09ICdwcmVwZW5kJykge1xuXHRcdFx0XHRcdFx0JGooZWwpLnByZXBlbmQocmVhZHlfc3ZnKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKG1vZGUgPT09ICdodG1sJykge1xuXHRcdFx0XHRcdFx0JGooZWwpLmh0bWwocmVhZHlfc3ZnKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0JGooZWwpLmFwcGVuZChyZWFkeV9zdmcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ0ludGVyZmFjZSAtIG8gU1ZHIHNwcml0ZSAjJyArIHN2ZyArICcgbsOjbyBleGlzdGUuJyk7XG5cdFx0fVxuXHR9KTtcbn1cblxuLyoqXG4gKiBBdGl2YSBvIGNhcnJvc3NlbCBuYSBsaXN0YWdlbSBkZSBtYXJjYXNcbiAqL1xud2luZG93LmRlZmF1bHRfY2Fycm9zc2VsX2JyYW5kcyA9IGZ1bmN0aW9uIGRlZmF1bHRfY2Fycm9zc2VsX2JyYW5kcygpIHtcblx0dmFyIG1hcmNhcyA9ICRqKCcuYnJhbmRzLS1jYXJyb3NzZWwgLmJyYW5kc19fbGlzdCcpO1xuXG5cdGlmIChtYXJjYXMubGVuZ3RoKSB7XG5cdFx0bWFyY2FzLmVhY2goZnVuY3Rpb24gKGksIGVsKSB7XG5cdFx0XHQkaihlbCkub3dsQ2Fyb3VzZWwoe1xuXHRcdFx0XHRpdGVtc1NjYWxlVXA6IHRydWUsXG5cdFx0XHRcdG5hdmlnYXRpb246IHRydWUsXG5cdFx0XHRcdG5hdmlnYXRpb25UZXh0OiBbJz8nLCAnPyddLFxuXHRcdFx0XHRwYWdpbmF0aW9uOiBmYWxzZVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBBdGl2YSBvIENhcnJvc3NlbCBkbyBAY29tcHJlLWp1bnRvXG4gKi9cbndpbmRvdy5kZWZhdWx0X2NhcnJvc3NlbF9qb2ludHNhbGVzID0gZnVuY3Rpb24gZGVmYXVsdF9jYXJyb3NzZWxfam9pbnRzYWxlcygpIHtcblx0dmFyIGpvaW50c2FsZXMgPSAkaignLmpvaW50c2FsZXNfX2l0ZW1zJyk7XG5cblx0aWYgKGpvaW50c2FsZXMubGVuZ3RoKSB7XG5cdFx0am9pbnRzYWxlcy5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xuXHRcdFx0JGooZWwpLm93bENhcm91c2VsKHtcblx0XHRcdFx0c2luZ2xlSXRlbTogdHJ1ZSxcblx0XHRcdFx0aXRlbVNjYWxlVXA6IHRydWUsXG5cdFx0XHRcdG5hdmlnYXRpb246IHRydWUsXG5cdFx0XHRcdG5hdmlnYXRpb25UZXh0OiBbJz8nLCAnPyddLFxuXHRcdFx0XHRhdXRvSGVpZ2h0OiB0cnVlLFxuXHRcdFx0XHRiZWZvcmVNb3ZlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiAkai5mbi5sYXp5bG9hZCAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0XHQkaihlbCkuZmluZCgnaW1nJykubGF6eWxvYWQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG5cbi8qKlxuICogVHJvY2EgYSBkZXNjcmnDp8OjbyBkYSBjYXRlZ29yaWEgZGUgbHVnYXJcbiAqL1xud2luZG93LmZpeF9jYXRlZ29yeV9kZXNjcmlwdGlvbiA9IGZ1bmN0aW9uIGZpeF9jYXRlZ29yeV9kZXNjcmlwdGlvbigpIHtcblx0Ly8gY2F0ZWdvcnkgZGVzY3JpcHRpb25cblx0aWYgKCRqKCcuY2F0ZWdvcnktZGVzY3JpcHRpb24nKS5sZW5ndGggPiAwICYmICRqKCcudG9vbGJhcicpLmxlbmd0aCA+IDApIHtcblx0XHQkaignLnRvb2xiYXInKS5maXJzdCgpLmFmdGVyKCRqKCcuY2F0ZWdvcnktZGVzY3JpcHRpb24nKSk7XG5cdFx0JGooJy5jYXRlZ29yeS1kZXNjcmlwdGlvbicpLnNob3coKTtcblx0fVxufVxuXG4vKipcbiAqIEF0aXZhIG8gY29tcG9uZW50ZSAudGFic3t9XG4gKi9cbndpbmRvdy5kZWZhdWx0X3RhYnMgPSBmdW5jdGlvbiBkZWZhdWx0X3RhYnMoKSB7XG5cdC8vIHRhYnNcblx0dmFyIHRhYnMgPSAkaignLnRhYnMnKTtcblx0aWYgKHRhYnMubGVuZ3RoID4gMCkge1xuXHRcdHRhYnMuZmluZCgnLnRhYnNfX3RhYicpLmZpcnN0KCkuYWRkQ2xhc3MoJ29uJyk7XG5cdFx0dGFicy5maW5kKCcudGFic19fY29udGVudCcpLmZpcnN0KCkuYWRkQ2xhc3MoJ29uJyk7XG5cblx0XHR0YWJzLm9uKCdjbGljaycsICcudGFic19fdGFiJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKCEkaih0aGlzKS5oYXNDbGFzcygnb24nKSkge1xuXHRcdFx0XHR0YWJzLmZpbmQoJy50YWJzX190YWIsIC50YWJzX19jb250ZW50JykucmVtb3ZlQ2xhc3MoJ29uJyk7XG5cblx0XHRcdFx0JGoodGhpcykuYWRkQ2xhc3MoJ29uJyk7XG5cdFx0XHRcdCRqKHRoaXMpLm5leHQoJy50YWJzX19jb250ZW50JykuYWRkQ2xhc3MoJ29uJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBBZGljaW9uYSB1bSDDrWNvbmUgZGUgdGVsZWZvbmUgYW9zIGVuZGVyZcOnb3NcbiAqL1xud2luZG93LmZpeF9hZGRyZXNzX3Bob25lID0gZnVuY3Rpb24gZml4X2FkZHJlc3NfcGhvbmUoKSB7XG5cdC8vIGFkZHJlc3MgcGhvbmVcblx0dmFyIGFkZHJlc3MgPSAkaignYWRkcmVzcycpO1xuXHRpZiAoYWRkcmVzcy5sZW5ndGggPiAwKSB7XG5cdFx0YWRkcmVzcy5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xuXHRcdFx0dmFyIGh0bWwgPSAkaihlbCkuaHRtbCgpLFxuXHRcdFx0XHRpY28gPSAnPHN2ZyBjbGFzcz1cImljb1wiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48cGF0aCBkPVwiTTMuNywxMC4yYzEsMi4xLDIuMSwzLjQsMy41LDQuNWMyLjQsMS45LDMuOCwxLjMsNS4xLDAuN2MxLjktMC45LDEuNS0xLjUsMC42LTMuNCBjLTAuOS0xLjktMS4zLTIuNS0zLjItMS42Yy0xLjksMC45LTEuMiwyLjItMS4yLDIuMkw0LjksNS4xYzAsMCwwLjcsMS4yLDIuNiwwLjNDOS40LDQuNSw5LjEsMy45LDguMiwyQzcuNCwwLjEsNy4xLTAuNSw1LjIsMC40IEMzLjksMSwyLjUsMS43LDIuNCw0LjhDMi40LDYuNiwyLjcsOC4xLDMuNywxMC4yelwiLz48L3N2Zz4nO1xuXHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgnVDonLCBpY28pO1xuXHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgnRjonLCBpY28pO1xuXHRcdFx0JGooZWwpLmh0bWwoaHRtbCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBBZGljaW9uYSBlbGVtZW50b3Mgw6AgbGlzdGFnZW0gcGFyYSBjb3JyaWdpciBvIGZsZXhcbiAqL1xud2luZG93LmZpeF9jYXRhbG9nX2ZsZXhib3ggPSBmdW5jdGlvbiBmaXhfY2F0YWxvZ19mbGV4Ym94KCkge1xuXHQvLyBwcm9kdWN0cyBmbGV4LWZpeFxuXHR2YXIgcHJvZHVjdHMgPSAkaignLnByb2R1Y3RzX19saXN0Om5vdCguY2Fycm9zc2VsKScpO1xuXHRwcm9kdWN0cy5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xuXHRcdCRqKGVsKS5hcHBlbmQoJzxsaSBjbGFzcz1cImZsZXgtZml4IGxpLS0wIHByb2R1Y3RzX19pdGVtXCIgLz48bGkgY2xhc3M9XCJmbGV4LWZpeCBsaS0tMCBwcm9kdWN0c19faXRlbVwiIC8+PGxpIGNsYXNzPVwiZmxleC1maXggbGktLTAgcHJvZHVjdHNfX2l0ZW1cIiAvPjxsaSBjbGFzcz1cImZsZXgtZml4IGxpLS0wIHByb2R1Y3RzX19pdGVtXCIgLz48bGkgY2xhc3M9XCJmbGV4LWZpeCBsaS0tMCBwcm9kdWN0c19faXRlbVwiIC8+Jyk7XG5cdH0pO1xufVxuXG4vKipcbiAqIEFkaWNpb25hIHVtIHN0cm9uZyBhbyB0w610dWxvIGRvIHN0YXR1cyBkZSBwZWRpZG9cbiAqL1xud2luZG93Lm9yZGVyU3RhdHVzID0gZnVuY3Rpb24gb3JkZXJTdGF0dXMoKSB7XG5cdC8vc3RhdHVzIHRpdGxlXG5cdHZhciBzdGF0dXMgPSAkaignLm9yZGVyLXN0YXR1cycpO1xuXHRpZiAoc3RhdHVzLmxlbmd0aCA+IDApIHtcblx0XHRzdGF0dXMuZWFjaChmdW5jdGlvbiAoaSwgZWwpIHtcblx0XHRcdHZhciB0ZXh0ID0gJGooZWwpLmZpbmQoJ3NwYW4nKS50ZXh0KCk7XG5cdFx0XHR0ZXh0ID0gJzxzdHJvbmc+JyArIHRleHQucmVwbGFjZSgvXFwufFxcIS9nLCAnLjwvc3Ryb25nPicpO1xuXHRcdFx0JGooZWwpLmZpbmQoJ3NwYW4nKS5odG1sKHRleHQpO1xuXHRcdH0pO1xuXHR9XG59XG5cbi8qKlxuICogUmVzcG9uc2l2ZSBpZnNcbiAqL1xud2luZG93LmlzTW9iaWxlID0gZnVuY3Rpb24gaXNNb2JpbGUoKSB7XG5cdHJldHVybiAoJGooJ2JvZHknKS5oYXNDbGFzcygnbW9iaWxlJykpXG59XG5cbndpbmRvdy5pczk5MiA9IGZ1bmN0aW9uIGlzOTkyKCkge1xuXHRyZXR1cm4gKCRqKHdpbmRvdykud2lkdGgoKSA8PSA5OTIpXG59XG5cbndpbmRvdy5pczc2OCA9IGZ1bmN0aW9uIGlzNzY4KCkge1xuXHRyZXR1cm4gKCRqKHdpbmRvdykud2lkdGgoKSA8PSA3NjgpXG59XG5cbndpbmRvdy5pczU2OCA9IGZ1bmN0aW9uIGlzNTY4KCkge1xuXHRyZXR1cm4gKCRqKHdpbmRvdykud2lkdGgoKSA8PSA1NjgpXG59XG5cbndpbmRvdy5pczQ2OCA9IGZ1bmN0aW9uIGlzNDY4KCkge1xuXHRyZXR1cm4gKCRqKHdpbmRvdykud2lkdGgoKSA8PSA0NjgpXG59XG5cbi8qKlxuICogT2N1bHRhIG8gLmhlYWRlci1jb250YWluZXJcbiAqIEBwYXJhbSBzdGF0dXNcbiAqL1xud2luZG93LmhpZGVIZWFkZXIgPSBmdW5jdGlvbiBoaWRlSGVhZGVyKHN0YXR1cykge1xuXHRpZiAoc3RhdHVzKSB7XG5cdFx0JGooJy5oZWFkZXItY29udGFpbmVyJykuYW5pbWF0ZSh7XG5cdFx0XHR0b3A6ICctJyArICRqKCcuaGVhZGVyLWNvbnRhaW5lcicpLm91dGVySGVpZ2h0KCkgKyAncHgnXG5cdFx0fSwgMjAwKTtcblx0fSBlbHNlIHtcblx0XHQkaignLmhlYWRlci1jb250YWluZXInKS5hbmltYXRlKHtcblx0XHRcdHRvcDogJzBweCdcblx0XHR9LCAyMDApO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBUcmF2YSBhIHJvbGFnZW0gZG8gPGJvZHk+XG4gKiBAcGFyYW0gc3RhdHVzXG4gKi9cbndpbmRvdy5sb2NrQm9keSA9IGZ1bmN0aW9uIGxvY2tCb2R5KHN0YXR1cykge1xuXHRpZiAoc3RhdHVzKSB7XG5cdFx0JGooJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuXHR9IGVsc2Uge1xuXHRcdCRqKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICd2aXNpYmxlJyk7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFJlc3BvbnNpdm8gLmNhdGVnb3JpZXNcbiAqL1xud2luZG93Lm1fY2F0ZWdvcmllcyA9IGZ1bmN0aW9uIG1fY2F0ZWdvcmllcyhicmVha3BvaW50KSB7XG5cdGlmICgkaih3aW5kb3cpLndpZHRoKCkgPiBicmVha3BvaW50KSB7XG5cdFx0Ly8gcmVzZXRhIGFvIHBhc3NhciBkbyBicmVha3BvaW50XG5cblx0XHRkZWZhdWx0X2NhdGVnb3JpZXNfY2Fycm9zc2VsKCk7XG5cdFx0ZGVmYXVsdF9jYXRlZ29yaWVzX2p1c3RpZnkoKTtcblx0XHRsb2NrQm9keShmYWxzZSk7XG5cdFx0JGooJy5jYXRlZ29yaWVzJykucmVtb3ZlQ2xhc3MoJ29uJyk7XG5cdH1cbn1cbi8qKlxuICogUmVzcG9uc2l2byAuc2VhcmNoXG4gKi9cbndpbmRvdy5tX3NlYXJjaCA9IGZ1bmN0aW9uIG1fc2VhcmNoKCkge1xuXHRpZiAoIWlzNTY4KCkpIHtcblx0XHQkaignLmhlYWRlciAuc2VhcmNoJykucmVtb3ZlQ2xhc3MoJ29uJyk7XG5cdH1cbn1cblxuLyoqXG4gKiBSZXNwb25zaXZvIC5maWx0ZXJzXG4gKi9cbndpbmRvdy5tX2ZpbHRlcnMgPSBmdW5jdGlvbiBtX2ZpbHRlcnMoKSB7XG5cdGlmICghaXM5OTIoKSkge1xuXHRcdCRqKCcuZmlsdGVycycpLnJlbW92ZUNsYXNzKCdvbicpO1xuXHRcdGhpZGVIZWFkZXIoZmFsc2UpO1xuXHRcdGxvY2tCb2R5KGZhbHNlKTtcblx0fVxufVxuXG4vKipcbiAqIFJlc3BvbnNpdm8gLm15YWNjb3VudFxuICovXG53aW5kb3cubV9teWFjY291bnQgPSBmdW5jdGlvbiBtX215YWNjb3VudCgpIHtcblx0aWYgKCFpczk5MigpKSB7XG5cdFx0JGooJy5teWFjY291bnQnKS5yZW1vdmVDbGFzcygnb24nKTtcblx0XHRoaWRlSGVhZGVyKGZhbHNlKTtcblx0XHRsb2NrQm9keShmYWxzZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBSZXNwb25zaXZvIC5teWNhcnRcbiAqL1xud2luZG93Lm1fbXljYXJ0ID0gZnVuY3Rpb24gbV9teWNhcnQoKSB7XG5cdGlmICghaXM5OTIoKSkge1xuXHRcdCRqKCcubXljYXJ0JykucmVtb3ZlQ2xhc3MoJ29uJyk7XG5cdFx0aGlkZUhlYWRlcihmYWxzZSk7XG5cdFx0bG9ja0JvZHkoZmFsc2UpO1xuXHR9XG59XG5cbi8qKlxuICogUmVzcG9uc2l2byAtIFByb2R1dG8gQHBhcmNlbGFtZW50b1xuICovXG53aW5kb3cubV9wYXJjZWxhbWVudG8gPSBmdW5jdGlvbiBtX3BhcmNlbGFtZW50bygpIHtcblx0aWYgKCFpczk5MigpKSB7XG5cdFx0JGooJy5wYXJjZWxhbWVudG8nKS5yZW1vdmVDbGFzcygnb24nKTtcblx0XHRoaWRlSGVhZGVyKGZhbHNlKTtcblx0XHRsb2NrQm9keShmYWxzZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBSZXNwb25zaXZvIC0gUHJvZHV0byBAc2ltdWxhZG9yLWZyZXRlXG4gKi9cbndpbmRvdy5tX2ZyZXRlID0gZnVuY3Rpb24gbV9mcmV0ZSgpIHtcblx0aWYgKCFpczk5MigpKSB7XG5cdFx0JGooJy5mcmV0ZScpLnJlbW92ZUNsYXNzKCdmcmV0ZS0tb3BlbicpO1xuXHRcdGhpZGVIZWFkZXIoZmFsc2UpO1xuXHRcdGxvY2tCb2R5KGZhbHNlKTtcblx0fVxufVxuXG4vKipcbiAqIFJlc3BvbnNpdm8gLSBQcm9kdXRvXG4gKiBAcmVsYWNpb25hZG9zXG4gKiBAcmVjb21lbmRhZG9zXG4gKiBAcXVlbXZpdVxuICogQGNvbXByZS1qdW50b1xuICogQHZlbmRhcy1hY2ltYVxuICovXG53aW5kb3cubV9wcm9kdXRvID0gZnVuY3Rpb24gbV9wcm9kdXRvKCkge1xuXHRpZiAoIWlzNTY4KCkpIHtcblx0XHQkaignLnJlbGF0ZWQsIC5yZWNvbW1lbmRlZCwgLndob3NhdywgLmpvaW50c2FsZXMsIC51cHNlbGwsIC5yZXZpZXdzJykucmVtb3ZlQ2xhc3MoJ29uJyk7XG5cdFx0aGlkZUhlYWRlcihmYWxzZSk7XG5cdFx0bG9ja0JvZHkoZmFsc2UpO1xuXHR9XG59XG5cbi8qKlxuICogUmVzcG9uc2l2byAtIC50YWJzXG4gKi9cbndpbmRvdy5tX3RhYnMgPSBmdW5jdGlvbiBtX3RhYnMoKSB7XG5cdGlmICghaXM1NjgoKSkge1xuXHRcdCRqKCcudGFic19fY29udGVudCcpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG5cdFx0aGlkZUhlYWRlcihmYWxzZSk7XG5cdFx0bG9ja0JvZHkoZmFsc2UpO1xuXHR9XG59XG5cbi8qKlxuICogUmVzcG9uc2l2byAtIE1lbnUgUGFpbmVsIGRvIENsaWVudGVcbiAqL1xud2luZG93Lm1fcGFpbmVsQ2xpZW50ZSA9IGZ1bmN0aW9uIG1fcGFpbmVsQ2xpZW50ZSgpIHtcblx0aWYgKCFpczk5MigpKSB7XG5cdFx0JGooJy5ibG9jay1hY2NvdW50JykucmVtb3ZlQ2xhc3MoJ29uJyk7XG5cdFx0aGlkZUhlYWRlcihmYWxzZSk7XG5cdFx0bG9ja0JvZHkoZmFsc2UpO1xuXHR9XG59XG4vKiBlbmQgb2YgY3VzdG9tIGNvbnRlbnQgKi9cblxuLyoqXG4gKiBKYXZhU2NyaXB0IEVkaXTDoXZlbFxuICogVGVtYTogICAgIE5lb25cbiAqIEFycXVpdm86ICBlZGl0YWJsZS5qc1xuICpcbiAqIFVzZSBlc3RlIGFycXVpdm8gcGFyYSBhdGl2YXIgb3UgZGVzYXRpdmFyIGFzIGZ1bsOnw7VlcyBkbyBKUyBkbyB0ZW1hLlxuICpcbiAqIEVzdGUgSlMgY29udHJvbGEgYXBlbmFzIGVsZW1lbnRvcyB2aXN1YWlzIGUgZWxlbWVudG9zIHJlbGF0aXZvcyBhbyBsYXlvdXQgcmVzcG9uc2l2byxcbiAqIGRlc8OhdGl2YXIgdG9kYXMgYXMgZnVuw6fDtWVzIG7Do28gaW1wZWRpcsOhIG8gZnVuY2lvbmFtZW50byBkbyBzaXRlLCBwb3LDqW1cbiAqIGV4aWdpcsOhIHF1ZSBvIENTUyBkZSBhbGd1bnMgZWxlbWVudG9zIHNlamEgcmV2aXN0by5cbiAqXG4gKiBqUXVlcnkgICAgICAgJGpcbiAqIFByb3RvdHlwZTogICAkXG4gKi9cblxuJGouZm4ubmVvblRoZW1lLmN1c3RvbSA9IHtcblx0LyoqXG5cdCAqIE9ww6fDtWVzIFBhZHLDtWVzIGRvIFRlbWFcblx0ICogRXN0YXMgb3DDp8O1ZXMgcG9kZW0gYXBlbmFzIHNlciBsaWdhZGFzIG91IGRlc2xpZ2FkYXMuXG5cdCAqICEgQ3VpZGFkbyBhbyBkZXNhdGl2YXIgZXN0YXIgb3DDp8O1ZXMgcG9pcyBlbGFzIHBvZGVtIGNvbXByb21ldGVyIG8gZnVuY2lvbmFtZW50byBkbyB0ZW1hLlxuXHQgKiAhIERlc2F0aXZlIGFwZW5hcyBzZSB2b2PDqiBzb3ViZXIgbyBxdWUgZXN0w6EgZmF6ZW5kby5cblx0ICovXG5cdGRlZmF1bHRfY2F0ZWdvcmllc19qdXN0aWZ5OiB0cnVlLCAvLyBtb2RvIGp1c3RpZnkgZGEgaW5zZXLDp8OjbyBkZSBNZW51IGRlIENhdGVnb3JpYXNcblx0ZGVmYXVsdF9jYXRlZ29yaWVzX21pbmk6IHRydWUsIC8vIG1vZG8gbWluaSBkYSBpbnNlcsOnw6NvIGRlIE1lbnUgZGUgQ2F0ZWdvcmlhc1xuXHRkZWZhdWx0X2NhdGVnb3JpZXNfY2Fycm9zc2VsOiB0cnVlLCAvLyBtb2RvIGNhcnJvc3NlbCBkYSBpbnNlcsOnw6NvIGRlIE1lbnUgZGUgQ2F0ZWdvcmlhc1xuXHRkZWZhdWx0X2NhcnJvc3NlbF9wcm9kdXRvczogdHJ1ZSwgLy8gY2Fycm9zc2VsIHBhZHLDo28gZGFzIENvbGXDp8O1ZXMgZGUgUHJvZHV0b3Ncblx0ZGVmYXVsdF9jYXJyb3NzZWxfam9pbnRzYWxlczogdHJ1ZSwgLy8gY2Fycm9zc2VsIGRvcyBwcm9kdXRvcyBkbyBDb21wcmUgSnVudG8gQGNvbXByZS1qdW50b1xuXHRkZWZhdWx0X2NhcnJvc3NlbF9icmFuZHM6IHRydWUsIC8vIG1vZG8gY2Fycm9zc2VsIGRhIGxpc3RhZ2VtIGRlIG1hcmNhc1xuXHRkZWZhdWx0X2Ryb3BGcm9tOiB0cnVlLCAvLyBhdGl2YSBvIGRyb3BGcm9tIHBhcmEgYXMgaW5zZXLDp8O1ZXM6IExpc3RhIGRlIERlc2Vqb3MsIE1ldSBDYXJyaW5obywgTWluaGEgQ29udGEsIE1lbnUgZGUgQ2F0ZWdvcmllcyBlIEJ1c2NhIGNvbSBGaWx0cm9zXG5cdGRlZmF1bHRfU1ZHczogdHJ1ZSwgLy8gaW5zZXJlIG9zIMOtY29uZXMgcGFkcsO1ZXMgZG8gU1ZHIHNwcml0ZVxuXHRkZWZhdWx0X3RhYnM6IHRydWUsIC8vIGF0aXZhIG8gY29tcG9uZW50ZSAudGFicyBkbyB0ZW1hXG5cdC8qIC0gRml4ZXMgKi9cblx0Zml4X0lFX1NWR3M6IHRydWUsIC8vIGNvcnJpZ2UgYXMgZGltZW5zw7VlcyBkZSBTVkdzIGlubGluZSBubyBJRVxuXHRmaXhfem9vbUhlYWRlcjogdHJ1ZSwgLy8gY29ycmlnZSBvIHotaW5kZXggZG8gLmhlYWRlciBlIGRvIHpvb20gZG9zIHByb2R1dG9zIG5vIDpob3ZlciBkZSBjYWRhIHVtXG5cdGZpeF9hZGRyZXNzX3Bob25lOiB0cnVlLCAvLyBjb3JyaWdlIGEgZXhpYmnDp8OjbyBkbyDDrWNvbmUgZGUgdGVsZWZvbmUgbmFzIGxpc3RhZ2VucyBkZSBlbmRlcmXDp29zXG5cdGZpeF9jYXRlZ29yeV9kZXNjcmlwdGlvbjogdHJ1ZSwgLy8gdHJvY2EgYSBwb3Npw6fDo28gcGFkcsOjbyBkYSBkZXNjcmnDp8OjbyBkYSBjYXRlZ29yaWFcblx0Zml4X2NhdGFsb2dfZmxleGJveDogdHJ1ZSwgLy8gYWRpY2lvbmEgZWxlbWVudG9zIHBhcmEgYXJydW1hciBvIGZsZXhib3ggZG8gY2F0w6Fsb2dvXG5cdC8qIC0gUmVzcG9uc2l2byAqL1xuXHRtX2NhdGVnb3JpZXM6IHRydWUsIC8vIGF0aXZhIG8gcmVzcG9uc2l2byBkbyBNZW51IGRlIENhdGVnb3JpYXNcblx0bV9zZWFyY2g6IHRydWUsIC8vIGF0aXZhIG8gcmVzcG9uc2l2byBkYSBCdXNjYVxuXHRtX2ZpbHRlcnM6IHRydWUsIC8vIGF0aXZhIG8gcmVzcG9uc2l2byBkb3MgRmlsdHJvcyBkbyBDYXTDoWxvZ29cblx0bV9teWFjY291bnQ6IHRydWUsIC8vIGF0aXZhIG8gcmVzcG9uc2l2byBkYSBNaW5oYSBDb250YVxuXHRtX215Y2FydDogdHJ1ZSwgLy8gYXRpdmEgbyByZXNwb25zaXZvIGRvIE1ldSBDYXJyaW5ob1xuXHRtX3BhcmNlbGFtZW50bzogdHJ1ZSwgLy8gYXRpdmEgbyByZXNwb25zaXZvIGRvIHBhcmNlbGFtZW50byBuYSBww6FnaW5hIGRlIHByb2R1dG9cblx0bV9mcmV0ZTogdHJ1ZSwgLy8gYXRpdmEgbyByZXNwb25zaXZvIGRvIGPDoWxjdWxvIGRlIGZyZXRlIG5hIHDDoWdpbmEgZG8gcHJvZHV0b1xuXHRtX3Byb2R1dG86IHRydWUsIC8vIGF0aXZhIG8gcmVzcG9uc2l2byBkZSBjYWRhIGJsb2NvIGRhIHDDoWdpbmEgZGUgcHJvZHV0b1xuXHRtX3RhYnM6IHRydWUsIC8vIGF0aXZhIG8gcmVzcG9uc2l2byBkbyBjb21wb25lbnRlIC50YWJzIGRvIHRlbWFcblx0bV9wYWluZWxDbGllbnRlOiB0cnVlLCAvLyBhdGl2YSBvIHJlc3BvbnNpdm8gZG8gTWVudSBkbyBQYWluZWwgZGUgQ2xpZW50ZVxuXHQvKipcblx0ICogRnVuY2lvbmFsaWRhZGVzIGRvIFRlbWFcblx0ICovXG5cdGRyb3BGcm9tOiBmYWxzZSxcblx0YWRkU1ZHOiB7XG5cdFx0J2ltZy10cnVjayc6IHtcblx0XHRcdHNlbGVjdG9yOiAnLmZyZXRlIC5mcmV0ZV9fY29udGVudCAuaW5wdXQtYm94IGxhYmVsJyxcblx0XHRcdG1vZGU6ICdwcmVwZW5kJyxcblx0XHRcdHJhdGlvOiBmYWxzZVxuXHRcdH1cblx0fVxuXG59O1xuXG4vKipcbiAqIFJlc3BvbnNpdmUgaWZzXG4gKlxuICogaXNNb2JpbGUoKSAgICAgUmV0b3JuYSB0cnVlIHNlIGFjZXNzYWRvIHZpYSBtb2JpbGVcbiAqIGlzOTkyKCkgICAgICAgIFJldG9ybmEgdHJ1ZSBzZSBhIHRlbGEgZm9yIG1lbm9yIHF1ZSA5OTJweFxuICogaXM3NjgoKSAgICAgICAgUmV0b3JuYSB0cnVlIHNlIGEgdGVsYSBmb3IgbWVub3IgcXVlIDc2OHB4XG4gKiBpczU2OCgpICAgICAgICBSZXRvcm5hIHRydWUgc2UgYSB0ZWxhIGZvciBtZW5vciBxdWUgNTY4cHhcbiAqIGlzNDY4KCkgICAgICAgIFJldG9ybmEgdHJ1ZSBzZSBhIHRlbGEgZm9yIG1lbm9yIHF1ZSA0NjhweFxuICovXG5cbi8qKlxuICogZHJvcEZyb206IFthcnJheV1cbiAqXG4gKiBWZXJpZmljYSBvIHBvc2ljaW9uYW1lbnRvIGRvcyBlbGVtZW50b3MgcGFzc2Fkb3MgZSBhZGljaW9uYSBjbGFzc2VzXG4gKiBpbmRpY2FuZG8gw6AgcGFydGlyIGRlIG9uZGUgw6kgaWRlYWwgYWJyaXIgdW0gZHJvcGJveC5cbiAqIENsYXNzZXMgYWRpY2lvbmFkYXM6XG4gKiBkcm9wLS1sZWZ0IHwgZHJvcC0tcmlnaHRcbiAqIGRyb3AtLXRvcCAgfCBkcm9wLS1ib3R0b21cbiAqL1xuXG4vKlxuYWRkU1ZHOiB7J3N2Zyc6eyBvcHRpb25zIH19IC0gQWRpY2lvbmEgU1ZHcyBkZSB1bSBzcHJpdGUgbm8gRE9NXG5QYXJhIGNhZGEgU1ZHIGFkaWNpb25hZG8sIGFkaWNpb25lIHVtIG9iamV0byBjb20gb3MgcGFyYW1ldHJvczpcblxue1xuJ2lkLXN2Zyc6XG5zdHJpbmcgIG9icmlnYXTDs3Jpb1xuSUQgZG8gPHN5bWJvbD4gbm8gc2V1IFNWRyBzcHJpdGUsIGV4LjogJ2ljby1idXNjYSdcblxue1xuc2VsZWN0b3I6ICcuaGVhZGVyIC5tZXVfYnRuLCAuZm9vdGVyIC5tZXVfYm94J1xuc3RyaW5nICBvYnJpZ2F0w7NyaW9cblNlbGV0b3IgQ1NTIGRvKHMpIGVsZW1lbnRvKHMpIG9uZGUgaW5zZXJpciBvIFNWR1xuXG5tb2RlOiAnYXBwZW5kIC8gcHJlcGVuZCAvIGh0bWwnXG5zdHJpbmcgIG9wY2lvbmFsICAgIChkZWZhdWx0OiBhcHBlbmQpXG5Nb2RvIGRlIGluc2VyaXIgbyBTVkcsIHZvY8OqIHBvZGUgb3B0YXIgcG9yOlxuJ2FwcGVuZCcgICAgLSBtb2RvIHBhZHLDo28gLSBhZGljaW9uYSBvIDxzdmc+IG5vIGZpbSBkbyBlbGVtZW50b1xuJ3ByZXBlbmQnICAgLSBhZGljaW9uYSBvIDxzdmc+IG5vIGluw61jaW8gZG8gZWxlbWVudG9cbidodG1sJyAgICAgIC0gc29icmVzY3JldmUgdG9kbyBvIGNvbnRlw7pkbyBkbyBlbGVtZW50byBwZWxvIDxzdmc+XG5cbnJhdGlvOiB0cnVlIC8gZmFsc2Vcbm9wY2lvbmFsICAgIGRlZmF1bHQ6IHRydWVcbk1hbnTDqW0gb3UgbsOjbyBvIHJhdGlvIGRvIFNWR1xuQWRpY2lvbmFuZG8gb3UgbsOjbyBvIHBhcsOibWV0cm86IHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcbn1cbn1cbiovXG4vKiBlbmQgb2YgZWRpdGFibGUgKi9cblxuLyoqXG4gKiBKYXZhU2NyaXB0IEdlcmFsXG4gKiBBcnF1aXZvOlx0Z2VuZXJhbC5qc1xuICpcbiAqIFVzZSBlc3RlIGVkaXRvciBwYXJhIGNyaWFyIG8gc2V1IEphdmFzY3JpcHRcbiAqIEVzdGUgYXJxdWl2byDDg8KpIG8gw4PCumx0aW1vIGFycXVpdm8gLmpzIGNoYW1hZG9cbiAqXG4gKiBqUXVlcnkgICAgICAgJGpcbiAqIFByb3RvdHlwZTogICAkXG4gKlxuICogZG9jdW1lbnQub24oKSBzYWZlIGV2ZW50czpcbiAqICdyZXNpemVTdG9wJ1xuICogJ3Njcm9sbFN0b3AnXG4gKiAnYWpheENvbXBsZXRlJ1xuICovXG5cbi8vICRqKGRvY3VtZW50KVxuLy8gXHQucmVhZHkoZnVuY3Rpb24gKCkge1xuLy8gXHRcdC8vIGRvY3VtZW50LnJlYWR5XG4vLyBcdH0pXG4vLyBcdC5vbigncmVzaXplU3RvcCcsIGZ1bmN0aW9uIChlKSB7XG4vLyBcdFx0Ly8gU2FmZSB3aW5kb3cucmVzaXplXG4vLyBcdFx0Ly8gRGlzcGFyYSBhcMODwrNzIG8gw4PCumx0aW1vIG1vdmltZW50byBkZSByZXNpemUgcGFyYXIgbm8gbmF2ZWdhZG9yLlxuLy8gXHR9KVxuLy8gXHQub24oJ3Njcm9sbFN0b3AnLCBmdW5jdGlvbiAoZSkge1xuLy8gXHRcdC8vIFNhZmUgd2luZG93LnNjcm9sbFxuLy8gXHRcdC8vIERpc3BhcmEgYXDDg8KzcyBvIMODwrpsdGltbyBtb3ZpbWVudG8gZGUgc2Nyb2xsIHBhcmFyIG5vIG5hdmVnYWRvci5cbi8vIFx0fSlcbi8vIFx0Lm9uKCdhamF4Q29tcGxldGUnLCBmdW5jdGlvbiAocmVzcCkge1xuLy8gXHRcdC8vIFNhZmUgYWpheCBjb21wbGV0ZWRcbi8vIFx0XHQvLyBEaXNwYXJhIGFww4PCs3MgY29tcGxldGFyIGNvbSBzdWNlc3NvIHF1YWxxdWVyIHJlcXVpc2nDg8Knw4PCo28gQWpheCwgZSB0csODwqFzIGEgcmVzcG9zdGEgZG8gQWpheC5cbi8vIFx0fSk7XG5cbmltcG9ydCB6b3QgZnJvbSAnLi4vem90Jztcblxuem90KCk7XG4iXX0=
},{"../zot":6}],2:[function(require,module,exports){
// Generated by CoffeeScript 1.9.3
(function() {
  var Instafeed;

  Instafeed = (function() {
    function Instafeed(params, context) {
      var option, value;
      this.options = {
        target: 'instafeed',
        get: 'popular',
        resolution: 'thumbnail',
        sortBy: 'none',
        links: true,
        mock: false,
        useHttp: false
      };
      if (typeof params === 'object') {
        for (option in params) {
          value = params[option];
          this.options[option] = value;
        }
      }
      this.context = context != null ? context : this;
      this.unique = this._genKey();
    }

    Instafeed.prototype.hasNext = function() {
      return typeof this.context.nextUrl === 'string' && this.context.nextUrl.length > 0;
    };

    Instafeed.prototype.next = function() {
      if (!this.hasNext()) {
        return false;
      }
      return this.run(this.context.nextUrl);
    };

    Instafeed.prototype.run = function(url) {
      var header, instanceName, script;
      if (typeof this.options.clientId !== 'string') {
        if (typeof this.options.accessToken !== 'string') {
          throw new Error("Missing clientId or accessToken.");
        }
      }
      if (typeof this.options.accessToken !== 'string') {
        if (typeof this.options.clientId !== 'string') {
          throw new Error("Missing clientId or accessToken.");
        }
      }
      if ((this.options.before != null) && typeof this.options.before === 'function') {
        this.options.before.call(this);
      }
      if (typeof document !== "undefined" && document !== null) {
        script = document.createElement('script');
        script.id = 'instafeed-fetcher';
        script.src = url || this._buildUrl();
        header = document.getElementsByTagName('head');
        header[0].appendChild(script);
        instanceName = "instafeedCache" + this.unique;
        window[instanceName] = new Instafeed(this.options, this);
        window[instanceName].unique = this.unique;
      }
      return true;
    };

    Instafeed.prototype.parse = function(response) {
      var anchor, childNodeCount, childNodeIndex, childNodesArr, e, eMsg, fragment, header, htmlString, httpProtocol, i, image, imageObj, imageString, imageUrl, images, img, imgHeight, imgOrient, imgUrl, imgWidth, instanceName, j, k, len, len1, len2, node, parsedLimit, reverse, sortSettings, targetEl, tmpEl;
      if (typeof response !== 'object') {
        if ((this.options.error != null) && typeof this.options.error === 'function') {
          this.options.error.call(this, 'Invalid JSON data');
          return false;
        } else {
          throw new Error('Invalid JSON response');
        }
      }
      if (response.meta.code !== 200) {
        if ((this.options.error != null) && typeof this.options.error === 'function') {
          this.options.error.call(this, response.meta.error_message);
          return false;
        } else {
          throw new Error("Error from Instagram: " + response.meta.error_message);
        }
      }
      if (response.data.length === 0) {
        if ((this.options.error != null) && typeof this.options.error === 'function') {
          this.options.error.call(this, 'No images were returned from Instagram');
          return false;
        } else {
          throw new Error('No images were returned from Instagram');
        }
      }
      if ((this.options.success != null) && typeof this.options.success === 'function') {
        this.options.success.call(this, response);
      }
      this.context.nextUrl = '';
      if (response.pagination != null) {
        this.context.nextUrl = response.pagination.next_url;
      }
      if (this.options.sortBy !== 'none') {
        if (this.options.sortBy === 'random') {
          sortSettings = ['', 'random'];
        } else {
          sortSettings = this.options.sortBy.split('-');
        }
        reverse = sortSettings[0] === 'least' ? true : false;
        switch (sortSettings[1]) {
          case 'random':
            response.data.sort(function() {
              return 0.5 - Math.random();
            });
            break;
          case 'recent':
            response.data = this._sortBy(response.data, 'created_time', reverse);
            break;
          case 'liked':
            response.data = this._sortBy(response.data, 'likes.count', reverse);
            break;
          case 'commented':
            response.data = this._sortBy(response.data, 'comments.count', reverse);
            break;
          default:
            throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.");
        }
      }
      if ((typeof document !== "undefined" && document !== null) && this.options.mock === false) {
        images = response.data;
        parsedLimit = parseInt(this.options.limit, 10);
        if ((this.options.limit != null) && images.length > parsedLimit) {
          images = images.slice(0, parsedLimit);
        }
        fragment = document.createDocumentFragment();
        if ((this.options.filter != null) && typeof this.options.filter === 'function') {
          images = this._filter(images, this.options.filter);
        }
        if ((this.options.template != null) && typeof this.options.template === 'string') {
          htmlString = '';
          imageString = '';
          imgUrl = '';
          tmpEl = document.createElement('div');
          for (i = 0, len = images.length; i < len; i++) {
            image = images[i];
            imageObj = image.images[this.options.resolution];
            if (typeof imageObj !== 'object') {
              eMsg = "No image found for resolution: " + this.options.resolution + ".";
              throw new Error(eMsg);
            }
            imgWidth = imageObj.width;
            imgHeight = imageObj.height;
            imgOrient = "square";
            if (imgWidth > imgHeight) {
              imgOrient = "landscape";
            }
            if (imgWidth < imgHeight) {
              imgOrient = "portrait";
            }
            imageUrl = imageObj.url;
            httpProtocol = window.location.protocol.indexOf("http") >= 0;
            if (httpProtocol && !this.options.useHttp) {
              imageUrl = imageUrl.replace(/https?:\/\//, '//');
            }
            imageString = this._makeTemplate(this.options.template, {
              model: image,
              id: image.id,
              link: image.link,
              type: image.type,
              image: imageUrl,
              width: imgWidth,
              height: imgHeight,
              orientation: imgOrient,
              caption: this._getObjectProperty(image, 'caption.text'),
              likes: image.likes.count,
              comments: image.comments.count,
              location: this._getObjectProperty(image, 'location.name')
            });
            htmlString += imageString;
          }
          tmpEl.innerHTML = htmlString;
          childNodesArr = [];
          childNodeIndex = 0;
          childNodeCount = tmpEl.childNodes.length;
          while (childNodeIndex < childNodeCount) {
            childNodesArr.push(tmpEl.childNodes[childNodeIndex]);
            childNodeIndex += 1;
          }
          for (j = 0, len1 = childNodesArr.length; j < len1; j++) {
            node = childNodesArr[j];
            fragment.appendChild(node);
          }
        } else {
          for (k = 0, len2 = images.length; k < len2; k++) {
            image = images[k];
            img = document.createElement('img');
            imageObj = image.images[this.options.resolution];
            if (typeof imageObj !== 'object') {
              eMsg = "No image found for resolution: " + this.options.resolution + ".";
              throw new Error(eMsg);
            }
            imageUrl = imageObj.url;
            httpProtocol = window.location.protocol.indexOf("http") >= 0;
            if (httpProtocol && !this.options.useHttp) {
              imageUrl = imageUrl.replace(/https?:\/\//, '//');
            }
            img.src = imageUrl;
            if (this.options.links === true) {
              anchor = document.createElement('a');
              anchor.href = image.link;
              anchor.appendChild(img);
              fragment.appendChild(anchor);
            } else {
              fragment.appendChild(img);
            }
          }
        }
        targetEl = this.options.target;
        if (typeof targetEl === 'string') {
          targetEl = document.getElementById(targetEl);
        }
        if (targetEl == null) {
          eMsg = "No element with id=\"" + this.options.target + "\" on page.";
          throw new Error(eMsg);
        }
        targetEl.appendChild(fragment);
        header = document.getElementsByTagName('head')[0];
        header.removeChild(document.getElementById('instafeed-fetcher'));
        instanceName = "instafeedCache" + this.unique;
        window[instanceName] = void 0;
        try {
          delete window[instanceName];
        } catch (_error) {
          e = _error;
        }
      }
      if ((this.options.after != null) && typeof this.options.after === 'function') {
        this.options.after.call(this);
      }
      return true;
    };

    Instafeed.prototype._buildUrl = function() {
      var base, endpoint, final;
      base = "https://api.instagram.com/v1";
      switch (this.options.get) {
        case "popular":
          endpoint = "media/popular";
          break;
        case "tagged":
          if (!this.options.tagName) {
            throw new Error("No tag name specified. Use the 'tagName' option.");
          }
          endpoint = "tags/" + this.options.tagName + "/media/recent";
          break;
        case "location":
          if (!this.options.locationId) {
            throw new Error("No location specified. Use the 'locationId' option.");
          }
          endpoint = "locations/" + this.options.locationId + "/media/recent";
          break;
        case "user":
          if (!this.options.userId) {
            throw new Error("No user specified. Use the 'userId' option.");
          }
          endpoint = "users/" + this.options.userId + "/media/recent";
          break;
        default:
          throw new Error("Invalid option for get: '" + this.options.get + "'.");
      }
      final = base + "/" + endpoint;
      if (this.options.accessToken != null) {
        final += "?access_token=" + this.options.accessToken;
      } else {
        final += "?client_id=" + this.options.clientId;
      }
      if (this.options.limit != null) {
        final += "&count=" + this.options.limit;
      }
      final += "&callback=instafeedCache" + this.unique + ".parse";
      return final;
    };

    Instafeed.prototype._genKey = function() {
      var S4;
      S4 = function() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      };
      return "" + (S4()) + (S4()) + (S4()) + (S4());
    };

    Instafeed.prototype._makeTemplate = function(template, data) {
      var output, pattern, ref, varName, varValue;
      pattern = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/;
      output = template;
      while (pattern.test(output)) {
        varName = output.match(pattern)[1];
        varValue = (ref = this._getObjectProperty(data, varName)) != null ? ref : '';
        output = output.replace(pattern, function() {
          return "" + varValue;
        });
      }
      return output;
    };

    Instafeed.prototype._getObjectProperty = function(object, property) {
      var piece, pieces;
      property = property.replace(/\[(\w+)\]/g, '.$1');
      pieces = property.split('.');
      while (pieces.length) {
        piece = pieces.shift();
        if ((object != null) && piece in object) {
          object = object[piece];
        } else {
          return null;
        }
      }
      return object;
    };

    Instafeed.prototype._sortBy = function(data, property, reverse) {
      var sorter;
      sorter = function(a, b) {
        var valueA, valueB;
        valueA = this._getObjectProperty(a, property);
        valueB = this._getObjectProperty(b, property);
        if (reverse) {
          if (valueA > valueB) {
            return 1;
          } else {
            return -1;
          }
        }
        if (valueA < valueB) {
          return 1;
        } else {
          return -1;
        }
      };
      data.sort(sorter.bind(this));
      return data;
    };

    Instafeed.prototype._filter = function(images, filter) {
      var filteredImages, fn, i, image, len;
      filteredImages = [];
      fn = function(image) {
        if (filter(image)) {
          return filteredImages.push(image);
        }
      };
      for (i = 0, len = images.length; i < len; i++) {
        image = images[i];
        fn(image);
      }
      return filteredImages;
    };

    return Instafeed;

  })();

  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define([], factory);
    } else if (typeof module === 'object' && module.exports) {
      return module.exports = factory();
    } else {
      return root.Instafeed = factory();
    }
  })(this, function() {
    return Instafeed;
  });

}).call(this);

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  jQuery(document).ready(function ($) {
    if (is992) {
      $('.categories .parent').click(function (evt) {
        if (evt.target.classList.contains('parent')) {
          $(evt.target).toggleClass('on').find('> ul').slideToggle();
        }
      });
    }
  });
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiaXM5OTIiLCJjbGljayIsImV2dCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlQ2xhc3MiLCJmaW5kIiwic2xpZGVUb2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7ZUFBZSxvQkFBTTtBQUNwQkEsRUFBQUEsTUFBTSxDQUFDQyxRQUFELENBQU4sQ0FBaUJDLEtBQWpCLENBQXVCLFVBQUNDLENBQUQsRUFBTztBQUM3QixRQUFJQyxLQUFKLEVBQVc7QUFDVkQsTUFBQUEsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJFLEtBQXpCLENBQStCLFVBQUNDLEdBQUQsRUFBUztBQUN2QyxZQUFJQSxHQUFHLENBQUNDLE1BQUosQ0FBV0MsU0FBWCxDQUFxQkMsUUFBckIsQ0FBOEIsUUFBOUIsQ0FBSixFQUE2QztBQUM1Q04sVUFBQUEsQ0FBQyxDQUFDRyxHQUFHLENBQUNDLE1BQUwsQ0FBRCxDQUNFRyxXQURGLENBQ2MsSUFEZCxFQUVFQyxJQUZGLENBRU8sTUFGUCxFQUdFQyxXQUhGO0FBS0E7QUFDRCxPQVJEO0FBU0E7QUFDRCxHQVpEO0FBYUEsQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0alF1ZXJ5KGRvY3VtZW50KS5yZWFkeSgoJCkgPT4ge1xuXHRcdGlmIChpczk5Mikge1xuXHRcdFx0JCgnLmNhdGVnb3JpZXMgLnBhcmVudCcpLmNsaWNrKChldnQpID0+IHtcblx0XHRcdFx0aWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYXJlbnQnKSkge1xuXHRcdFx0XHRcdCQoZXZ0LnRhcmdldClcblx0XHRcdFx0XHRcdC50b2dnbGVDbGFzcygnb24nKVxuXHRcdFx0XHRcdFx0LmZpbmQoJz4gdWwnKVxuXHRcdFx0XHRcdFx0LnNsaWRlVG9nZ2xlKClcblxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblx0fSk7XG59XG4iXX0=
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  jQuery(document).ready(function ($) {
    $('.filters__name').on('click', function () {
      $(this).closest('.filters__filter').toggleClass('off');
    });
  });
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwib24iLCJjbG9zZXN0IiwidG9nZ2xlQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7ZUFBZSxvQkFBTTtBQUNwQkEsRUFBQUEsTUFBTSxDQUFDQyxRQUFELENBQU4sQ0FBaUJDLEtBQWpCLENBQXVCLFVBQUNDLENBQUQsRUFBTztBQUM3QkEsSUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JDLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFlBQVk7QUFDM0NELE1BQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUUsT0FBUixDQUFnQixrQkFBaEIsRUFBb0NDLFdBQXBDLENBQWdELEtBQWhEO0FBQ0EsS0FGRDtBQUdBLEdBSkQ7QUFLQSxDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KCgkKSA9PiB7XG5cdFx0JCgnLmZpbHRlcnNfX25hbWUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHQkKHRoaXMpLmNsb3Nlc3QoJy5maWx0ZXJzX19maWx0ZXInKS50b2dnbGVDbGFzcygnb2ZmJylcblx0XHR9KVxuXHR9KTtcbn1cbiJdfQ==
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function scrollTop() {
  var currentScrolling = 0;
  $j(window).scroll(function () {
    var body = $j('body');
    var scrollTop = $j(window).scrollTop();
    var heightHeader = $j('.header-container').outerHeight();
    if (scrollTop > 0) body.addClass('scrolling');else body.removeClass('scrolling');

    if (scrollTop > heightHeader) {
      if (scrollTop > currentScrolling) {
        body.addClass('scrolling--down').removeClass('scrolling--up');
      } else {
        body.addClass('scrolling--up').removeClass('scrolling--down');
      }

      currentScrolling = scrollTop;
    } else {
      body.removeClass('scrolling--up').removeClass('scrolling--down');
    }
  });
}

var _default = scrollTop;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInNjcm9sbFRvcCIsImN1cnJlbnRTY3JvbGxpbmciLCIkaiIsIndpbmRvdyIsInNjcm9sbCIsImJvZHkiLCJoZWlnaHRIZWFkZXIiLCJvdXRlckhlaWdodCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxTQUFTQSxTQUFULEdBQXFCO0FBQ3BCLE1BQUlDLGdCQUFnQixHQUFHLENBQXZCO0FBRUFDLEVBQUFBLEVBQUUsQ0FBQ0MsTUFBRCxDQUFGLENBQVdDLE1BQVgsQ0FBa0IsWUFBWTtBQUU3QixRQUFJQyxJQUFJLEdBQUdILEVBQUUsQ0FBQyxNQUFELENBQWI7QUFDQSxRQUFJRixTQUFTLEdBQUdFLEVBQUUsQ0FBQ0MsTUFBRCxDQUFGLENBQVdILFNBQVgsRUFBaEI7QUFDQSxRQUFJTSxZQUFZLEdBQUdKLEVBQUUsQ0FBQyxtQkFBRCxDQUFGLENBQXdCSyxXQUF4QixFQUFuQjtBQUVBLFFBQUlQLFNBQVMsR0FBRyxDQUFoQixFQUFtQkssSUFBSSxDQUFDRyxRQUFMLENBQWMsV0FBZCxFQUFuQixLQUNLSCxJQUFJLENBQUNJLFdBQUwsQ0FBaUIsV0FBakI7O0FBR0wsUUFBSVQsU0FBUyxHQUFHTSxZQUFoQixFQUE4QjtBQUM3QixVQUFJTixTQUFTLEdBQUdDLGdCQUFoQixFQUFrQztBQUNqQ0ksUUFBQUEsSUFBSSxDQUNGRyxRQURGLENBQ1csaUJBRFgsRUFFRUMsV0FGRixDQUVjLGVBRmQ7QUFHQSxPQUpELE1BSU87QUFDTkosUUFBQUEsSUFBSSxDQUNGRyxRQURGLENBQ1csZUFEWCxFQUVFQyxXQUZGLENBRWMsaUJBRmQ7QUFHQTs7QUFDRFIsTUFBQUEsZ0JBQWdCLEdBQUdELFNBQW5CO0FBQ0EsS0FYRCxNQVdPO0FBQ05LLE1BQUFBLElBQUksQ0FDRkksV0FERixDQUNjLGVBRGQsRUFFRUEsV0FGRixDQUVjLGlCQUZkO0FBR0E7QUFDRCxHQTFCRDtBQTJCQTs7ZUFFY1QsUyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNjcm9sbFRvcCgpIHtcblx0dmFyIGN1cnJlbnRTY3JvbGxpbmcgPSAwO1xuXG5cdCRqKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcblxuXHRcdHZhciBib2R5ID0gJGooJ2JvZHknKTtcblx0XHR2YXIgc2Nyb2xsVG9wID0gJGood2luZG93KS5zY3JvbGxUb3AoKTtcblx0XHR2YXIgaGVpZ2h0SGVhZGVyID0gJGooJy5oZWFkZXItY29udGFpbmVyJykub3V0ZXJIZWlnaHQoKTtcblxuXHRcdGlmIChzY3JvbGxUb3AgPiAwKSBib2R5LmFkZENsYXNzKCdzY3JvbGxpbmcnKTtcblx0XHRlbHNlIGJvZHkucmVtb3ZlQ2xhc3MoJ3Njcm9sbGluZycpO1xuXG5cblx0XHRpZiAoc2Nyb2xsVG9wID4gaGVpZ2h0SGVhZGVyKSB7XG5cdFx0XHRpZiAoc2Nyb2xsVG9wID4gY3VycmVudFNjcm9sbGluZykge1xuXHRcdFx0XHRib2R5XG5cdFx0XHRcdFx0LmFkZENsYXNzKCdzY3JvbGxpbmctLWRvd24nKVxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnc2Nyb2xsaW5nLS11cCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ym9keVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnc2Nyb2xsaW5nLS11cCcpXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdzY3JvbGxpbmctLWRvd24nKTtcblx0XHRcdH1cblx0XHRcdGN1cnJlbnRTY3JvbGxpbmcgPSBzY3JvbGxUb3A7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJvZHlcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdzY3JvbGxpbmctLXVwJylcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdzY3JvbGxpbmctLWRvd24nKTtcblx0XHR9XG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzY3JvbGxUb3A7XG4iXX0=
},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _categories = _interopRequireDefault(require("./components/categories"));

var _scrollTop = _interopRequireDefault(require("./components/scrollTop"));

var _filters = _interopRequireDefault(require("./components/filters"));

var _product = _interopRequireDefault(require("./pages/product"));

var _instafeed = _interopRequireDefault(require("../node_modules/instafeed.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  (0, _categories.default)();
  (0, _scrollTop.default)();
  (0, _filters.default)();
  (0, _product.default)();
  document.addEventListener("DOMContentLoaded", function () {
    var instaFeed = document.querySelector('#instafeed');

    if (instaFeed) {
      var userFeed = new _instafeed.default({
        get: 'user',
        userId: '348435505',
        limit: 6,
        accessToken: '348435505.1677ed0.814409af39734968865cc79183af3424',
        template: '<a href="{{link}}" class="instagram__link"><img src="{{image}}" class="instagram__img" /></a>',
        resolution: 'low_resolution'
      });
      userFeed.run();
    }
  });
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluc3RhRmVlZCIsInF1ZXJ5U2VsZWN0b3IiLCJ1c2VyRmVlZCIsIkluc3RhZmVlZCIsImdldCIsInVzZXJJZCIsImxpbWl0IiwiYWNjZXNzVG9rZW4iLCJ0ZW1wbGF0ZSIsInJlc29sdXRpb24iLCJydW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztlQUVlLG9CQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDekQsUUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbEI7O0FBQ0EsUUFBSUQsU0FBSixFQUFlO0FBQ2QsVUFBTUUsUUFBUSxHQUFHLElBQUlDLGtCQUFKLENBQWM7QUFDOUJDLFFBQUFBLEdBQUcsRUFBRSxNQUR5QjtBQUU5QkMsUUFBQUEsTUFBTSxFQUFFLFdBRnNCO0FBRzlCQyxRQUFBQSxLQUFLLEVBQUUsQ0FIdUI7QUFJOUJDLFFBQUFBLFdBQVcsRUFBRSxvREFKaUI7QUFLOUJDLFFBQUFBLFFBQVEsRUFBRSwrRkFMb0I7QUFNOUJDLFFBQUFBLFVBQVUsRUFBRTtBQU5rQixPQUFkLENBQWpCO0FBUUFQLE1BQUFBLFFBQVEsQ0FBQ1EsR0FBVDtBQUNBO0FBQ0QsR0FiRDtBQWNBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2F0ZWdvcmllcyBmcm9tICcuL2NvbXBvbmVudHMvY2F0ZWdvcmllcyc7XG5pbXBvcnQgU2Nyb2xsVG9wIGZyb20gJy4vY29tcG9uZW50cy9zY3JvbGxUb3AnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL2NvbXBvbmVudHMvZmlsdGVycyc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL3BhZ2VzL3Byb2R1Y3QnXG5pbXBvcnQgSW5zdGFmZWVkIGZyb20gJy4uL25vZGVfbW9kdWxlcy9pbnN0YWZlZWQuanMnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Q2F0ZWdvcmllcygpO1xuXHRTY3JvbGxUb3AoKTtcblx0RmlsdGVyKCk7XG5cdFByb2R1Y3QoKTtcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgaW5zdGFGZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luc3RhZmVlZCcpXG5cdFx0aWYgKGluc3RhRmVlZCkge1xuXHRcdFx0Y29uc3QgdXNlckZlZWQgPSBuZXcgSW5zdGFmZWVkKHtcblx0XHRcdFx0Z2V0OiAndXNlcicsXG5cdFx0XHRcdHVzZXJJZDogJzM0ODQzNTUwNScsXG5cdFx0XHRcdGxpbWl0OiA2LFxuXHRcdFx0XHRhY2Nlc3NUb2tlbjogJzM0ODQzNTUwNS4xNjc3ZWQwLjgxNDQwOWFmMzk3MzQ5Njg4NjVjYzc5MTgzYWYzNDI0Jyxcblx0XHRcdFx0dGVtcGxhdGU6ICc8YSBocmVmPVwie3tsaW5rfX1cIiBjbGFzcz1cImluc3RhZ3JhbV9fbGlua1wiPjxpbWcgc3JjPVwie3tpbWFnZX19XCIgY2xhc3M9XCJpbnN0YWdyYW1fX2ltZ1wiIC8+PC9hPicsXG5cdFx0XHRcdHJlc29sdXRpb246ICdsb3dfcmVzb2x1dGlvbidcblx0XHRcdH0pO1xuXHRcdFx0dXNlckZlZWQucnVuKCk7XG5cdFx0fVxuXHR9KTtcbn1cbiJdfQ==
},{"../node_modules/instafeed.js":2,"./components/categories":3,"./components/filters":4,"./components/scrollTop":5,"./pages/product":7}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  jQuery(document).ready(function ($) {
    $('.jointsales__items').each(function () {
      var names = [];
      $('.jointsales__action').prepend($('.jointsales__totals'));
      $('.jointsales__currentin .title').each(function () {
        names.push($(this).clone().text());
      });
      $('.jointsales__item .title').each(function () {
        names.push($(this).clone().text());
      });
      $('.jointsales__totals').prepend("<div class=\"names\">".concat(names.join(' + '), "</div>"));
    });
  });
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiZWFjaCIsIm5hbWVzIiwicHJlcGVuZCIsInB1c2giLCJjbG9uZSIsInRleHQiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O2VBQWUsb0JBQU07QUFDcEJBLEVBQUFBLE1BQU0sQ0FBQ0MsUUFBRCxDQUFOLENBQWlCQyxLQUFqQixDQUF1QixVQUFDQyxDQUFELEVBQU87QUFFN0JBLElBQUFBLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCQyxJQUF4QixDQUE2QixZQUFZO0FBQ3hDLFVBQU1DLEtBQUssR0FBRyxFQUFkO0FBQ0FGLE1BQUFBLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCRyxPQUF6QixDQUFpQ0gsQ0FBQyxDQUFDLHFCQUFELENBQWxDO0FBQ0FBLE1BQUFBLENBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DQyxJQUFuQyxDQUF3QyxZQUFZO0FBQ25EQyxRQUFBQSxLQUFLLENBQUNFLElBQU4sQ0FBV0osQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxLQUFSLEdBQWdCQyxJQUFoQixFQUFYO0FBQ0EsT0FGRDtBQUdBTixNQUFBQSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QkMsSUFBOUIsQ0FBbUMsWUFBWTtBQUM5Q0MsUUFBQUEsS0FBSyxDQUFDRSxJQUFOLENBQVdKLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUssS0FBUixHQUFnQkMsSUFBaEIsRUFBWDtBQUNBLE9BRkQ7QUFJQU4sTUFBQUEsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJHLE9BQXpCLGdDQUF3REQsS0FBSyxDQUFDSyxJQUFOLENBQVcsS0FBWCxDQUF4RDtBQUNBLEtBWEQ7QUFhQSxHQWZEO0FBZ0JBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGpRdWVyeShkb2N1bWVudCkucmVhZHkoKCQpID0+IHtcblxuXHRcdCQoJy5qb2ludHNhbGVzX19pdGVtcycpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgbmFtZXMgPSBbXTtcblx0XHRcdCQoJy5qb2ludHNhbGVzX19hY3Rpb24nKS5wcmVwZW5kKCQoJy5qb2ludHNhbGVzX190b3RhbHMnKSlcblx0XHRcdCQoJy5qb2ludHNhbGVzX19jdXJyZW50aW4gLnRpdGxlJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdG5hbWVzLnB1c2goJCh0aGlzKS5jbG9uZSgpLnRleHQoKSk7XG5cdFx0XHR9KVxuXHRcdFx0JCgnLmpvaW50c2FsZXNfX2l0ZW0gLnRpdGxlJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdG5hbWVzLnB1c2goJCh0aGlzKS5jbG9uZSgpLnRleHQoKSk7XG5cdFx0XHR9KVxuXG5cdFx0XHQkKCcuam9pbnRzYWxlc19fdG90YWxzJykucHJlcGVuZChgPGRpdiBjbGFzcz1cIm5hbWVzXCI+JHsgbmFtZXMuam9pbignICsgJykgfTwvZGl2PmApXG5cdFx0fSlcblxuXHR9KVxufVxuIl19
},{}]},{},[1])