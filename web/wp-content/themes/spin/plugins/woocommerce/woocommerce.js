/* global jQuery, SPIN_STORAGE */

jQuery(document).on('action.ready_spin', function() {

    "use strict";

    var $window = jQuery(window),
        $document = jQuery(document),
        $body = jQuery('body');

    var $list_products_infinite,
        $list_products_infinite_link,
        $list_products,
        _list_products_height;

    // Update links after the new post added
    $document.on('action.new_post_added', update_jquery_links);
    $document.on('action.got_ajax_response', update_jquery_links);
    $document.on('action.init_hidden_elements', update_jquery_links);
    var first_run = true;

    function update_jquery_links(e) {
        if (first_run && e && e.namespace == 'init_hidden_elements') {
            first_run = false;
            return;
        }
        $list_products_infinite = jQuery('.woocommerce-links-infinite');
        $list_products_infinite_link = $list_products_infinite.find('>a');
        $list_products = jQuery('.list_products > .products').eq(0);
        _list_products_height = $list_products.length > 0 ? $list_products.height() : 0;
    }
    update_jquery_links();

    $document.on('action.resize_spin', function() {
        _list_products_height = $list_products.length > 0 ? $list_products.height() : 0;
    });


    // Change display mode
    //--------------------------------
    jQuery('.woocommerce,.woocommerce-page').on('click', '.spin_shop_mode_buttons a', function(e) {
        var $self = jQuery(this),
            mode = $self.hasClass('woocommerce_thumbs') ? 'thumbs' : 'list';
        spin_set_cookie('spin_shop_mode', mode, 365 * 24 * 60 * 60 * 1000); // 1 year
        $self.siblings('input').val(mode).parents('form').get(0).submit();
        e.preventDefault();
        return false;
    });


    // Add buttons to quantity
    //--------------------------------
    var woocomerce_inc_dec = '<span class="q_inc"></span><span class="q_dec"></span>';

    // On first run
    spin_woocommerce_add_inc_dec();

    // After the cart is updated
    jQuery(document.body).on('updated_wc_div woosq_loaded', function() {
        spin_woocommerce_add_inc_dec();
    });

    // After products loaded by AJAX - timeout need to wait for fadeOut on old posts
    $document.on('action.new_post_added action.got_ajax_response qv_loader_stop', function() {
        setTimeout(function() {
            spin_woocommerce_add_inc_dec();
        }, 500);
    });

    // After variations are changed
    $document.on('action.init_hidden_elements', function(e, container) {
        spin_woocommerce_add_inc_dec();
        container.find('.variations_form.cart:not(.quantity_inited)')
            .addClass('quantity_inited')
            .on('wc_variation_form check_variations', function() {
                setTimeout(function() {
                    spin_woocommerce_add_inc_dec();
                }, 100);
            });
    });


    // Add buttons inc/dec
    function spin_woocommerce_add_inc_dec() {
        jQuery('.woocommerce div.quantity:not(.inited),.woocommerce-page div.quantity:not(.inited),.variations_form.cart div.quantity:not(.inited)').each(function() {
            var $self = jQuery(this).addClass('inited');
            // If quantity is not hidden - add Inc/Dec buttons. If quantity is hidden - a total number of product is 1 and buttons are not needed.
            if ($self.find('>input[name="quantity"][type="hidden"]').length === 0) {
                if ($self.find('>.q_inc').length === 0) {
                    $self.append(woocomerce_inc_dec);
                }
                $self
                    .on('click', '>span', function(e) {
                        spin_woocomerce_inc_dec_click(jQuery(this));
                        e.preventDefault();
                        return false;
                    });
            } else {
                $self.addClass('hidden last_item_in_stock');
            }
        });
    }

    // Inc/Dec quantity on buttons inc/dec
    function spin_woocomerce_inc_dec_click(button) {
        var f = button.siblings('input');
        if (button.hasClass('q_inc')) {
            f.val((f.val() === '' ? 0 : parseInt(f.val(), 10)) + 1).trigger('change');
        } else {
            f.val(Math.max(0, (f.val() === '' ? 0 : parseInt(f.val(), 10)) - 1)).trigger('change');
        }
    }


    // Decorate YITH Compare & Add to wishlist
    //----------------------------------------------

    // On the single product page
    //----------------------------

    // Move 'Compare' before 'Wishlist' and convert 'Wishlist' to the button (if 'Compare' is a button)
    var wishlist = jQuery('.woocommerce .product .summary .yith-wcwl-add-to-wishlist').eq(0),
        compare = jQuery('.woocommerce .product .summary .compare').eq(0);
    if (wishlist.length > 0 && compare.length > 0) {
        compare.insertBefore(wishlist);
        if (compare.hasClass('button')) {
            // Add class 'button' to the link (if the link 'Compare' have same class)
            wishlist.find('.add_to_wishlist').addClass('button');
            // Restore class 'button' after any AJAX request
            $document.on('ajaxComplete', function(e) {
                setTimeout(function() {
                    jQuery('.woocommerce .product .summary .yith-wcwl-add-to-wishlist .add_to_wishlist').eq(0).toggleClass('button', true);
                }, 10);
            });
        }
    }

    // Remove class 'button' from links 'Compare' and 'Add to Wishlist' in the 'Related products' on the single product page
    jQuery('.single-product ul.products li.product .post_data .yith_buttons_wrap a').removeClass('button');

    // Remove class 'button' from links 'Quick view' on the product archive page
    jQuery('ul.products li.product .post_data .yith-wcqv-button').removeClass('button');
    $document.on('action.new_post_added action.got_ajax_response', function() {
        jQuery('ul.products li.product .post_data .yith-wcqv-button').removeClass('button');
    });

    // On the products list (if 'Add to wishlist' placed before image)
    //----------------------------------------------------------------
    $document.on('action.init_hidden_elements', function(e, container) {

        jQuery('ul.products li.product:not(.wishlist_decorated)').each(function() {

            var $product = jQuery(this).addClass('wishlist_decorated'),
                $yith_buttons_wrap = $product.find('.yith_buttons_wrap').eq(0);

            if ($yith_buttons_wrap.length > 0) {
                // Move 'Wishlist' and 'Quick View' to the '.yith_buttons_wrap' after the 'Compare'
                $product.find('.yith-wcwl-add-to-wishlist,.yith-wcqv-button,.woosq-btn,.compare').each(function() {
                    var $self = jQuery(this).removeClass('button');
                    if (!$self.parent().hasClass('yith_buttons_wrap')) {
                        $yith_buttons_wrap.append($self);
                    }
                });

                if ($product.hasClass('add-to-wishlist-before_image')) {

                    // Wrap inner text in the links 'Compare' and 'Add to Wishlist' to the span
                    $yith_buttons_wrap.find('a').wrapInner('<span class="tooltip"></span>');

                    // Wrap inner text in the link 'Compare' after click
                    $yith_buttons_wrap.find('.compare').on('click', function(e) {
                        var bt = jQuery(this),
                            atts = 10;
                        setTimeout(trx_addons_add_tooltip_to_compare, 500);

                        function trx_addons_add_tooltip_to_compare() {
                            if (bt.hasClass('added') && bt.find('.tooltip').length === 0) {
                                bt.wrapInner('<span class="tooltip"></span>');
                            } else if (atts-- > 0) {
                                setTimeout(trx_addons_add_tooltip_to_compare, 500);
                            }
                        }
                    });

                    // Wrap inner text in the link 'Add to Wishlist' after click
                    $yith_buttons_wrap.find('.add_to_wishlist').on('click', function(e) {
                        var atts = 30;
                        setTimeout(trx_addons_add_tooltip_to_wishlist, 250);

                        function trx_addons_add_tooltip_to_wishlist() {
                            var bt = $yith_buttons_wrap.find('.yith-wcwl-add-to-wishlist a');
                            if (bt.find('.tooltip').length === 0) {
                                bt.wrapInner('<span class="tooltip"></span>');
                            } else if (atts-- > 0) {
                                setTimeout(trx_addons_add_tooltip_to_wishlist, 250);
                            }
                        }
                    });

                    // Change spinner image in the 'Add to Wishlist'
                    var img = $yith_buttons_wrap.find('.yith-wcwl-add-button > img');
                    if (img.length > 0) {
                        img.each(function() {
                            var $self = jQuery(this),
                                src = $self.attr('src');
                            if (src != undefined && src.indexOf('wpspin_light') > 0) {
                                $self.attr('src', src.replace('wpspin_light', 'ajax-loader'));
                            }
                        });
                    }
                }
            }

        });

        // 'Load more' and 'Infinite scroll' on the products page
        jQuery('.woocommerce-load-more:not(.woocommerce-load-more-inited)')
            .addClass('woocommerce-load-more-inited')
            .on('click', function(e) {

                e.preventDefault();

                var more = jQuery(this);
                if (more.data('load_more_link_busy')) {
                    return false;
                }

                var page = Number(more.data('page')),
                    max_page = Number(more.data('max-page'));
                if (page >= max_page) {
                    more.parent().addClass('all_items_loaded').hide();
                    return false;
                }

                more.data('load_more_link_busy', true)
                    .parent().addClass('loading');

                var link = more.parent().next('.woocommerce-pagination').find('.next').attr('href').replace(/\/page\/[0-9]+/, '/page/' + (page + 1));
                var products = more.parent().prev('.products');

                jQuery.get(link).done(
                    function(response) {
                        // Get inline styles and add to the page styles
                        spin_import_inline_styles(response);
                        // Get tags 'link' from response and add its to the 'head'
                        spin_import_tags_link(response);
                        // Get new posts and append to the .products
                        var posts_container = jQuery(response).find('.list_products > .products');
                        if (posts_container.length === 0) {
                            posts_container = jQuery(response).find('ul.products');
                        }
                        if (posts_container.length > 0) {
                            products.append(posts_container.find('> li'));
                            more.data('page', page + 1).parent().removeClass('loading');
                            // Trigger actions to init new elements
                            SPIN_STORAGE['init_all_mediaelements'] = true;
                            $document
                                .trigger('action.new_post_added', [products])
                                .trigger('action.init_hidden_elements', [products]);
                        }
                        if (page + 1 >= max_page) {
                            more.parent().addClass('all_items_loaded').hide();
                        }
                        more.data('load_more_link_busy', false);
                        // Fire 'window.scroll' after clearing busy state
                        $window.trigger('scroll');

                        $document.trigger('action.got_ajax_response', {
                            action: 'woocommerce_ajax_get_posts',
                            result: response,
                            products: products
                        });
                    }
                );

                return false;

            });

    });

    // Infinite scroll on the products page
    $document.on('action.scroll_spin', function(e) {
        if ($list_products_infinite.length === 0 || $list_products_infinite_link.length === 0 || $list_products_infinite_link.data('load_more_link_busy')) {
            return;
        }
        if ($list_products.length > 0 && $list_products.offset().top + _list_products_height < spin_window_scroll_top() + spin_window_height() * 1.5) {
            $list_products_infinite_link.trigger('click');
        }
    });


    // Wrap new select (created dynamically) with .select_container
    //-------------------------------------------------------------------------
    jQuery('select#calc_shipping_country:not(.inited)')
        .addClass('inited')
        .on('change', function() {
            setTimeout(
                function() {
                    var state = jQuery('select#calc_shipping_state');
                    if (state.length == 1 && !state.parent().hasClass('select_container')) {
                        state.wrap('<div class="select_container"></div>');
                    }
                }, 10
            );
        });
    jQuery(document.body).on('wc_fragments_refreshed wc_fragments_loaded updated_shipping_method update_checkout', function() {
        jQuery('div.cart_totals select').each(function() {
            var $self = jQuery(this);
            if (!$self.parent().hasClass('select_container')) {
                $self.wrap('<div class="select_container"></div>');
            }
        });
    });


    // Add hover classes to the buttons created dynamically
    //-------------------------------------------------------------------------
    jQuery(document.body).on('wc_fragments_refreshed wc_fragments_loaded update_checkout update_cart added_to_cart removed_from_cart', function() {
        $document.trigger('action.init_hidden_elements', [$body]);
    });


    // Update cart
    //-------------------------------------------------------------------------
    var table_cart = jQuery('table.cart');

    jQuery(document.body).on('updated_wc_div', function() {

        spin_create_observer('update_woocommerce_cart', table_cart.parents('form').eq(0), function(mutationsList) {
            for (var mutation of mutationsList) {
                if (mutation.type == 'childList' || mutation.type == 'subtree') {
                    spin_remove_observer('update_woocommerce_cart');
                    table_cart = jQuery('table.cart');
                    spin_woocommerce_update_cart('update');
                    break;
                }
            }
        });


        if (table_cart.length > 0) {
            spin_woocommerce_update_cart('update');
        }
    });

    // Generate 'scroll' event after the cart is filled
    jQuery(document.body).on('wc_fragment_refresh', function() {
        $window.trigger('scroll');
    });

    // Check device and update cart if need
    if (table_cart.length > 0) {
        spin_woocommerce_update_cart('init');
    }

    // Resize action
    $window.on('resize', function() {
        if (table_cart.length > 0) {
            spin_woocommerce_update_cart('resize');
        }
    });

    // Update cart display
    function spin_woocommerce_update_cart(status) {
        setTimeout(
            function() {
                var w = window.innerWidth;
                if (w == undefined) {
                    w = spin_window_width() + (spin_window_height() < $document.height() || spin_window_scroll_top() > 0 ? 16 : 0);
                }

                var tbl = table_cart;

                if (w < SPIN_STORAGE['mobile_layout_width']) {
                    var $mobile_cell = tbl.find('.mobile_cell');
                    if (status == 'resize' && $mobile_cell.length > 0) {
                        return;
                    } else {
                        if (tbl.length > 0) {
                            if ($mobile_cell.length === 0) {
                                tbl.find('thead tr .product-quantity, thead tr .product-subtotal, thead tr .product-thumbnail').hide();
                                if (tbl.hasClass('wishlist_table')) {
                                    tbl.find('thead tr .product-remove, thead tr .product-stock-status').hide();
                                    tbl.find('tfoot tr td').each(function() {
                                        var $self = jQuery(this);
                                        $self.data('colspan', $self.attr('colspan')).attr('colspan', 3);
                                    });
                                }
                            }
                            tbl.find('.cart_item,[id*="yith-wcwl-row-"]').each(function() {
                                var $self = jQuery(this);
                                if ($self.find('>.mobile_cell').length == 0) {
                                    $self.prepend('<td class="mobile_cell" colspan="3"><table width="100%"><tr class="first_row"></tr><tr class="second_row"></tr></table></td>');
                                    $self.find('.first_row').append($self.find('.product-thumbnail, .product-name, .product-price'));
                                    $self.find('.second_row').append($self.find('.product-remove, .product-quantity, .product-subtotal, .product-stock-status, .product-add-to-cart'));
                                }
                            });
                            if (!tbl.hasClass('inited')) {
                                tbl.addClass('inited');
                            }
                        }
                    }
                }

                if (w >= SPIN_STORAGE['mobile_layout_width'] && status == 'resize' && jQuery('table.cart .mobile_cell').length > 0) {
                    if (tbl.length > 0) {
                        tbl.find('thead tr .product-quantity, thead tr .product-subtotal, thead tr .product-thumbnail').show();
                        if (tbl.hasClass('wishlist_table')) {
                            tbl.find('thead tr .product-remove, thead tr .product-stock-status').show();
                            tbl.find('tfoot tr td').each(function() {
                                var $self = jQuery(this);
                                $self.attr('colspan', $self.data('colspan'));
                            });
                        }
                        tbl.find('.cart_item,[id*="yith-wcwl-row-"]').each(function() {
                            var $self = jQuery(this);
                            $self.find('.first_row td, .second_row td').prependTo($self);
                            $self.find('.product-remove').prependTo($self);
                            $self.find('td.mobile_cell').remove();
                        });
                    }
                }

            }, 10
        );
    }

});