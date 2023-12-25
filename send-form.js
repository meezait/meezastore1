/*
# صفحة سلة التسوق لقالب بلوجر
#
# Dependencies:
# jQuery 1.9 or later
# simpleCart(js) http://simplecart.org
# Blogger Contact Form widget enabled
#
# Shopping cart by http://simplecartjs.com
# Blogger shopping cart widget by http://meezait.com
#
# meezait ~ Send Order Form for Blogger Blogs
# Date: DEC 2023
# Version: 0-2-0
# Documentation http://meezait.com
#
# Usages:
  <script>
    $(' #ELEMENT-BY-ID ').cartForm({
      debug : false, // displays send sample order form (boolean) 
      name: 'Name',  // form name text (string)
      email: 'Email', // form email text (string)
      success: '/p/success.html', // URL after success send form (string - URL)
      reload: 4000 // timing in ms after success send form (integer)
    });
  </script>
#
*/
(function (_0x2d6fx1) {
    var _0x2d6fx2 = {
        debug: false,
        success: '/p/checkout.html',
        email: 'Email',
        name: 'Name',
        reload: 4000,
        form: {
            title: 'New Orders Received at Online Store',
            sender: 'SENDER DETAILS :',
            details: 'ORDER DETAILS :',
            summary: 'ORDER SUMMARY :',
            end: 'ORDER ENDS',
            page: 'Order Form Page :',
            cart: {
                item: 'Item',
                url: 'URL',
                size: 'Size',
                color: 'Color',
                price: 'Price',
                qty: 'Qty',
                amount: 'Amount'
            },
            totals: {
                total: 'Cart Total',
                shipping: 'Shipping',
                tax: 'Tax',
                grand: 'Grand Total'
            }
        }
    };
    _0x2d6fx1.fn.cartForm = function (_0x2d6fx3) {
        var _0x2d6fx4 = _0x2d6fx1('#ContactForm1');
        var _0x2d6fx5 = _0x2d6fx1(this);
        var _0x2d6fx6 = _0x2d6fx1('#cart-form');
        if (simpleCart.quantity() <= 0) {
            return false
        };
        if (!_0x2d6fx4.length || !_0x2d6fx5.length || !_0x2d6fx6.length) {
            console.log('BlogrCart-eX(js): Blogger ContactForm or Identifier not available.');
            return false
        };
        var _0x2d6fx7 = _0x2d6fx1.extend(true, _0x2d6fx2, _0x2d6fx3 || {});
        _0x2d6fx4.append(_0x2d6fx6);
        _0x2d6fx4.removeClass('collapse hidden sr-only');
        _0x2d6fx4.find('#ContactForm1_contact-form-email').attr('data-label', _0x2d6fx7.email).addClass('required').after(_0x2d6fx1('#cart-form'));
        _0x2d6fx4.find('#ContactForm1_contact-form-name').attr('data-label', _0x2d6fx7.name).addClass('required');
        _0x2d6fx4.find('#ContactForm1_contact-form-email-message').attr({
            rows: 6,
            disabled: 'disabled'
        }).hide();
        _0x2d6fx4.find('input,textarea').addClass('form-control');
        _0x2d6fx4.find('#ContactForm1_contact-form-submit').hide();
        _0x2d6fx1('#ContactForm1_contact-form-email-message').before(_0x2d6fx1('[name=Messages]'));
        _0x2d6fx5.append(_0x2d6fx4);
        _0x2d6fx1('#cart-form').show();
        _0x2d6fx4.show();
        if (_0x2d6fx7.debug) {
            _0x2d6fx1('#ContactForm1_contact-form-email-message').show()
        };
        simpleCart.bind('afterSave', function () {
            if (simpleCart.quantity() <= 0) {
                _0x2d6fx5.hide()
            } else {
                _0x2d6fx5.show()
            }
        });
        var _0x2d6fx8 = {},
            _0x2d6fx9 = {},
            _0x2d6fxa = _0x2d6fx7.form,
            _0x2d6fxb = simpleCart.taxRate() > 0 ? '(' + simpleCart.taxRate() + '%)' : '';
        _0x2d6fx9[_0x2d6fxa.totals.total] = simpleCart.toCurrency(simpleCart.total());
        _0x2d6fx9[_0x2d6fxa.totals.shipping] = simpleCart.toCurrency(simpleCart.shipping());
        _0x2d6fx9[_0x2d6fxa.totals.tax] = simpleCart.toCurrency(simpleCart.tax()) + ' ' + _0x2d6fxb;
        _0x2d6fx9[_0x2d6fxa.totals.grand] = simpleCart.toCurrency(simpleCart.grandTotal());
        _0x2d6fxa.author = false;
        if (!_0x2d6fx7.author) {
            if (!_0x2d6fx1('.bc-author').length) {
                var _0x2d6fxc = _0x2d6fx1('<a/>').attr({
                    class: 'bc-author',
                    style: 'display:block!important; font-size:10px!important; position:static!important; margin:0!important; padding:5px!important; visibility:visible!important; color:#333!important; opacity:.54!important; z-index:999!important;',
                    href: '',
                    target: '_blank'
                }).html('');
                _0x2d6fx5.after(_0x2d6fxc);
                _0x2d6fxa.author = ''
            }
        };
        _0x2d6fx5.find('input, textarea').on('change', function () {
            _0x2d6fx4.find('[data-label]').each(function () {
                _0x2d6fx8[_0x2d6fx1(this).data('label')] = _0x2d6fx1(this).val()
            });
            var _0x2d6fxd = _0x2d6fxf(_0x2d6fx8, _0x2d6fx19(_0x2d6fxa), _0x2d6fx9, _0x2d6fxa);
            _0x2d6fx4.find('#ContactForm1_contact-form-email-message').val('').val(_0x2d6fxd);
            var _0x2d6fxe = _0x2d6fx4.find('.required').filter(function () {
                return this.value == ''
            });
            if (_0x2d6fxe.length) {
                _0x2d6fx4.find('#ContactForm1_contact-form-submit').hide()
            } else {
                _0x2d6fx4.find('#ContactForm1_contact-form-submit').show()
            }
        });
        _0x2d6fx4.find('#ContactForm1_contact-form-submit').click(function () {
            setTimeout(function () {
                window.location.href = _0x2d6fx7.success
            }, _0x2d6fx7.reload)
        })
    };
    var _0x2d6fxf = function (_0x2d6fx10, _0x2d6fx11, _0x2d6fx12, _0x2d6fx13) {
        var _0x2d6fx14 = '';
        _0x2d6fx14 += _0x2d6fx13.title + `\
\
`;
        _0x2d6fx14 += _0x2d6fx13.sender + `\
\
`;
        for (var _0x2d6fx15 in _0x2d6fx10) {
            _0x2d6fx14 += _0x2d6fx15 + ' : ' + _0x2d6fx10[_0x2d6fx15] + `\
`
        };
        _0x2d6fx14 += `\
`;
        _0x2d6fx14 += _0x2d6fx13.details + `\
\
`;
        var _0x2d6fx16 = 0;
        for (var _0x2d6fx15 in _0x2d6fx11) {
            _0x2d6fx16++;
            var _0x2d6fx17 = _0x2d6fx11[_0x2d6fx15];
            for (var _0x2d6fx18 in _0x2d6fx17) {
                if (_0x2d6fx13.cart.item === _0x2d6fx18) {
                    _0x2d6fx14 += _0x2d6fx18 + ' #' + _0x2d6fx16 + ' : ' + _0x2d6fx17[_0x2d6fx18] + `\
`
                } else {
                    _0x2d6fx14 += _0x2d6fx18 + ' : ' + _0x2d6fx17[_0x2d6fx18] + `\
`
                }
            };
            _0x2d6fx14 += `\
`
        };
        _0x2d6fx14 += `\
`;
        _0x2d6fx14 += _0x2d6fx13.summary + `\
\
`;
        for (var _0x2d6fx15 in _0x2d6fx12) {
            _0x2d6fx14 += _0x2d6fx15 + ' : ' + _0x2d6fx12[_0x2d6fx15] + `\
`
        };
        _0x2d6fx14 += `\
`;
        _0x2d6fx14 += _0x2d6fx13.end + `\
\
`;
        _0x2d6fx14 += _0x2d6fx13.page + '' + window.location.href + `\
\
`;
        if (_0x2d6fx13.author !== false) {
            _0x2d6fx14 += 'BlogrCart-eX Plugin by ' + _0x2d6fx13.author + `\
\
`
        };
        return _0x2d6fx14
    };

    function _0x2d6fx19(_0x2d6fxa) {
        var _0x2d6fx8 = {};
        var _0x2d6fx15 = 0;
        simpleCart.each(function (_0x2d6fx18) {
            var _0x2d6fx1a = {};
            _0x2d6fx1a[_0x2d6fxa.cart.item] = _0x2d6fx18.get('name');
            if (_0x2d6fx18.get('pagelink') !== undefined) {
                _0x2d6fx1a[_0x2d6fxa.cart.url] = _0x2d6fx18.get('pagelink')
            };
            if (_0x2d6fx18.get('size') !== undefined) {
                _0x2d6fx1a[_0x2d6fxa.cart.size] = _0x2d6fx18.get('size')
            };
            if (_0x2d6fx18.get('color') !== undefined) {
                _0x2d6fx1a[_0x2d6fxa.cart.color] = _0x2d6fx18.get('color')
            };
            _0x2d6fx1a[_0x2d6fxa.cart.price] = simpleCart.toCurrency(_0x2d6fx18.get('price'));
            _0x2d6fx1a[_0x2d6fxa.cart.qty] = _0x2d6fx18.get('quantity');
            _0x2d6fx1a[_0x2d6fxa.cart.amount] = simpleCart.toCurrency(_0x2d6fx18.get('price') * _0x2d6fx18.get('quantity'));
            _0x2d6fx8[_0x2d6fx15++] = _0x2d6fx1a
        });
        return _0x2d6fx8
    }
    _0x2d6fx1.fn.cartForm.setup = _0x2d6fx2
})(jQuery)

//
/*
# BlogrCart-eX ~ Paypal Checkout Currency Converter
# DEC 2023
# Version: 0-2-0
# Documentation http://meezait.com
#
# Usages:
  <script>
    $(' #ELEMENT-BY-ID ').paypalCheckout({
      currency : 'USD',                     // supported currency by code at Paypal (string)
      rate : 1,                             // conversion rate (integer)
      email : 'you@yours.com',              // paypal email (email address/string)
      success: 'http://your-blog-name/p/success.html',  // return URL to success page (URL/string)
      cancel: 'http://your-blog-name/p/error.html',     // return URL to cancel page (URL/string)
      sandbox: false                        // Paypal sandbox mode (boolean)
    });
  </script>
#
*/
(function (_0xb3dcx1) {
    var _0xb3dcx2 = {
        currency: 'USD',
        rate: 1,
        email: 'you@yours.com',
        success: 'http://your-blog-name/p/success.html',
        cancel: 'http://your-blog-name/p/error.html',
        sandbox: false
    };
    _0xb3dcx1.fn.paypalCheckout = function (_0xb3dcx3) {
        var _0xb3dcx4 = _0xb3dcx1(this);
        if (!_0xb3dcx4.length) {
            return false
        };
        if (typeof _0xb3dcx3 === 'undefined' || typeof simpleCart === 'undefined') {
            alert('simpleCart(js) or [paypalCheckout] parameters is unavailable!');
            return false
        };
        var _0xb3dcx5 = _0xb3dcx1.extend(true, _0xb3dcx2, _0xb3dcx3 || {});
        if (simpleCart.currency().code === _0xb3dcx5.currency) {
            return false
        };
        _0xb3dcx4.on('click', function (_0xb3dcx6) {
            _0xb3dcx6.preventDefault();
            var _0xb3dcx7 = 0;
            var _0xb3dcx8 = simpleCart.shipping();
            var _0xb3dcx9 = simpleCart.tax();
            simpleCart.each(function (_0xb3dcxa) {
                var _0xb3dcxb = _0xb3dcxa.get('price');
                _0xb3dcx7 = _0xb3dcxb * _0xb3dcx5.rate;
                _0xb3dcxa.set('price', _0xb3dcx7)
            });
            simpleCart.shipping = function () {
                return _0xb3dcx8 * _0xb3dcx5.rate
            };
            simpleCart.tax = function () {
                return _0xb3dcx9 * _0xb3dcx5.rate
            };
            simpleCart({
                checkout: {
                    type: 'PayPal',
                    email: _0xb3dcx5.email,
                    sandbox: _0xb3dcx5.sandbox,
                    success: _0xb3dcx5.success,
                    cancel: _0xb3dcx5.cancel
                }
            });
            simpleCart.currency(_0xb3dcx5.currency);
            simpleCart.checkout()
        });
        if (!_0xb3dcx5.author) {
            if (!_0xb3dcx1('.bc-author').length) {
                _0xb3dcx1('#cart-widget').after(_0xb3dcx1('<a/>').attr({
                    class: 'bc-author',
                    style: 'display:block!important; font-size:10px!important; position:static!important; margin:0!important; padding:5px!important; visibility:visible!important; color:#333!important; opacity:.54!important; z-index:999!important;',
                    href: '',
                    target: '_blank'
                }).html(''))
            }
        }
    }
})(jQuery)//
//
/*
# BlogrCart-eX ~ Shopping cart setup
# DEC 2023
# Version: 0-2-0
# Documentation http://meezait.com
#
# Usages:
  <script>
    $(' .Blog .post-body ').blogrCartEx({
      itemAdded : 'Item Added!',   // text/html displayed when item added to cart
      itemAddedTiming : 3000,      // timing in ms item added text shown
    });
  </script>
#
*/
(function ($) {
    var defaults = {
        itemAdded: 'Item Added!',
        itemAddedTiming: 3000
    };
    $.fn.blogrCartEx = function (options) {
        var $elem = $(this);
        if (!$elem.find('.product-data').length) {
            return false
        };
        var settings = $.extend(true, defaults, options || {});
        if (typeof settings.onBeforeInit === 'function') {
            settings.onBeforeInit.call($elem)
        };
        updatePost($elem);
        simpleCart.ready(function () {
            updateView(simpleCart.quantity());
            $('#cart-widget').parent().addClass('cart-active')
        });
        simpleCart({
            afterSave: function () {
                updateView(simpleCart.quantity())
            },
            afterAdd: function () {
                updateView(simpleCart.quantity());
                var text = $('.item_add').text();
                $('.item_add').addClass('added').html('').html(settings.itemAdded);
                setTimeout(function () {
                    $('.item_add').removeClass('added').html('').html(text)
                }, settings.itemAddedTiming)
            }
        });
        if (typeof settings.onAfterInit === 'function') {
            settings.onAfterInit.call($elem)
        }
    };
    var updatePost = function (post) {
        post.each(function () {
            $(this).addClass('simpleCart_shelfItem');
            var data = {};
            var name, url, img;
            if ($(this).parents('.post').first().find('.post-title').length) {
                name = $(this).parents('.post').first().find('.post-title').text()
            } else {
                name = $(this).parents('.post-content').first().find('h3:first').text()
            };
            data.item_name = name;
            img = $(this).find('img:first').attr('src');
            data.item_thumb = img;
            for (var i in data) {
                $(this).append($('<span/>').attr({
                    style: 'display:none;',
                    class: i
                }).append(data[i]))
            }
        })
    };
    var updateView = function (quantity) {
        if (quantity > 0) {
            $('#cart-widget').removeClass('product-hidden');
            $('#cart-notify').addClass('product-hidden');
            $('#cart-widget').parent().attr('data-quantity', quantity)
        } else {
            $('#cart-widget').addClass('product-hidden');
            $('#cart-notify').removeClass('product-hidden');
            $('#cart-widget').parent().attr('data-quantity', quantity)
        }
    };
    $.fn.blogrCartEx.setup = defaults
})(jQuery) 
