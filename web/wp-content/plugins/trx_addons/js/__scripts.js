/* ATTENTION! This file was generated automatically! Don't change it!!!
----------------------------------------------------------------------- */
(function() {
    "use strict";
    var $window = jQuery(window),
        $document = jQuery(document),
        $html_dom = document.querySelector('html'),
        $adminbar = jQuery('#wpadminbar'),
        $body = jQuery('body');
    window.dcl === undefined && (window.dcl = function(s) {
        console.log(s);
    });
    window.dcs === undefined && (window.dcs = function() {
        console.trace();
    });
    window.dcts === undefined && (window.dcts = function(name) {
        console.time(name ? name : 'timer');
    });
    window.dctl === undefined && (window.dctl = function(name) {
        console.timeLog(name ? name : 'timer');
    });
    window.dcte === undefined && (window.dcte = function(name) {
        console.timeEnd(name ? name : 'timer');
    });
    window.trx_addons_get_cookie = function(name) {
        var defa = arguments[1] !== undefined ? arguments[1] : null;
        var start = document.cookie.indexOf(name + '=');
        var len = start + name.length + 1;
        if ((!start) && (name != document.cookie.substring(0, name.length))) {
            return defa;
        }
        if (start == -1) {
            return defa;
        }
        var end = document.cookie.indexOf(';', len);
        if (end == -1) {
            end = document.cookie.length;
        }
        return decodeURIComponent(document.cookie.substring(len, end));
    };
    window.trx_addons_set_cookie = function(name, value) {
        var expires = arguments[2] !== undefined ? arguments[2] : 0;
        var path = arguments[3] !== undefined ? arguments[3] : '/';
        var domain = arguments[4] !== undefined ? arguments[4] : '';
        var secure = arguments[5] !== undefined ? arguments[5] : '';
        var samesite = arguments[6] !== undefined ? arguments[6] : 'strict';
        var today = new Date();
        today.setTime(today.getTime());
        var expires_date = new Date(today.getTime() + (expires * 1));
        document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + (expires ? ';expires=' + expires_date.toGMTString() : '') + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '') + (samesite ? ';samesite=' + samesite : '');
    };
    window.trx_addons_del_cookie = function(name) {
        var path = arguments[1] !== undefined ? arguments[1] : '/';
        var domain = arguments[2] !== undefined ? arguments[2] : '';
        var secure = arguments[3] !== undefined ? arguments[3] : '';
        var samesite = arguments[4] !== undefined ? arguments[4] : 'strict';
        if (trx_addons_get_cookie(name)) {
            document.cookie = encodeURIComponent(name) + '=' + ';expires=Thu, 01-Jan-1970 00:00:01 GMT' + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '') + (samesite ? ';samesite=' + samesite : '');
        }
    };
    window.trx_addons_is_local_storage_exists = function() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    };
    window.trx_addons_get_storage = function(name) {
        var defa = arguments[1] !== undefined ? arguments[1] : null;
        var val = null;
        if (trx_addons_is_local_storage_exists()) {
            val = window['localStorage'].getItem(name);
            if (val === null) val = defa;
        } else {
            val = trx_addons_get_cookie(name, defa);
        }
        return val;
    };
    window.trx_addons_set_storage = function(name, value) {
        if (trx_addons_is_local_storage_exists()) window['localStorage'].setItem(name, value);
        else trx_addons_set_cookie(name, value, 365 * 24 * 60 * 60 * 1000);
    };
    window.trx_addons_del_storage = function(name) {
        if (trx_addons_is_local_storage_exists()) window['localStorage'].removeItem(name);
        else trx_addons_del_cookie(name);
    };
    window.trx_addons_clear_storage = function() {
        if (trx_addons_is_local_storage_exists()) window['localStorage'].clear();
    };
    window.trx_addons_copy_to_clipboard = function(str, strip_tags) {
        var selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
        if (typeof str == 'object' && str.length) {
            str = str.is('textarea') ? str.val() : str.html();
        }
        if (strip_tags) {
            str = str.replace(/<[^>]+>/g, '');
        }
        var el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        if (selected) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }
    };
    window.trx_addons_clear_listbox = function(box) {
        for (var i = box.options.length - 1; i >= 0; i--) box.options[i] = null;
    };
    window.trx_addons_add_listbox_item = function(box, val, text) {
        var item = new Option();
        item.value = val;
        item.text = text;
        box.options.add(item);
    };
    window.trx_addons_del_listbox_item_by_value = function(box, val) {
        for (var i = 0; i < box.options.length; i++) {
            if (box.options[i].value == val) {
                box.options[i] = null;
                break;
            }
        }
    };
    window.trx_addons_del_listbox_item_by_text = function(box, txt) {
        for (var i = 0; i < box.options.length; i++) {
            if (box.options[i].text == txt) {
                box.options[i] = null;
                break;
            }
        }
    };
    window.trx_addons_find_listbox_item_by_value = function(box, val) {
        var idx = -1;
        for (var i = 0; i < box.options.length; i++) {
            if (box.options[i].value == val) {
                idx = i;
                break;
            }
        }
        return idx;
    };
    window.trx_addons_find_listbox_item_by_text = function(box, txt) {
        var idx = -1;
        for (var i = 0; i < box.options.length; i++) {
            if (box.options[i].text == txt) {
                idx = i;
                break;
            }
        }
        return idx;
    };
    window.trx_addons_select_listbox_item_by_value = function(box, val) {
        for (var i = 0; i < box.options.length; i++) {
            box.options[i].selected = (val == box.options[i].value);
        }
    };
    window.trx_addons_select_listbox_item_by_text = function(box, txt) {
        for (var i = 0; i < box.options.length; i++) {
            box.options[i].selected = (txt == box.options[i].text);
        }
    };
    window.trx_addons_get_listbox_values = function(box) {
        var delim = arguments[1] ? arguments[1] : ',';
        var str = '';
        for (var i = 0; i < box.options.length; i++) {
            str += (str ? delim : '') + box.options[i].value;
        }
        return str;
    };
    window.trx_addons_get_listbox_texts = function(box) {
        var delim = arguments[1] ? arguments[1] : ',';
        var str = '';
        for (var i = 0; i < box.options.length; i++) {
            str += (str ? delim : '') + box.options[i].text;
        }
        return str;
    };
    window.trx_addons_sort_listbox = function(box) {
        var temp_opts = new Array();
        var temp = new Option();
        for (var i = 0; i < box.options.length; i++) {
            temp_opts[i] = box.options[i].clone();
        }
        for (var x = 0; x < temp_opts.length - 1; x++) {
            for (var y = (x + 1); y < temp_opts.length; y++) {
                if (temp_opts[x].text > temp_opts[y].text) {
                    temp = temp_opts[x];
                    temp_opts[x] = temp_opts[y];
                    temp_opts[y] = temp;
                }
            }
        }
        for (i = 0; i < box.options.length; i++) {
            box.options[i] = temp_opts[i].clone();
        }
    };
    window.trx_addons_get_listbox_selected_index = function(box) {
        for (var i = 0; i < box.options.length; i++) {
            if (box.options[i].selected) {
                return i;
            }
        }
        return -1;
    };
    window.trx_addons_get_listbox_selected_value = function(box) {
        for (var i = 0; i < box.options.length; i++) {
            if (box.options[i].selected) {
                return box.options[i].value;
            }
        }
        return null;
    };
    window.trx_addons_get_listbox_selected_text = function(box) {
        for (var i = 0; i < box.options.length; i++) {
            if (box.options[i].selected) {
                return box.options[i].text;
            }
        }
        return null;
    };
    window.trx_addons_get_listbox_selected_option = function(box) {
        for (var i = 0; i < box.options.length; i++) {
            if (box.options[i].selected) {
                return box.options[i];
            }
        }
        return null;
    };
    window.trx_addons_get_radio_value = function(radioGroupObj) {
        for (var i = 0; i < radioGroupObj.length; i++) {
            if (radioGroupObj[i].checked) {
                return radioGroupObj[i].value;
            }
        }
        return null;
    };
    window.trx_addons_set_radio_checked_by_num = function(radioGroupObj, num) {
        for (var i = 0; i < radioGroupObj.length; i++) {
            if (radioGroupObj[i].checked && i != num) {
                radioGroupObj[i].checked = false;
            } else if (i == num) {
                radioGroupObj[i].checked = true;
            }
        }
    };
    window.trx_addons_set_radio_checked_by_value = function(radioGroupObj, val) {
        for (var i = 0; i < radioGroupObj.length; i++) {
            if (radioGroupObj[i].checked && radioGroupObj[i].value != val) {
                radioGroupObj[i].checked = false;
            } else if (radioGroupObj[i].value == val) {
                radioGroupObj[i].checked = true;
            }
        }
    };
    window.trx_addons_form_validate = function(form, opt) {
        if (typeof(opt.error_message_show) == 'undefined') opt.error_message_show = true;
        if (typeof(opt.error_message_time) == 'undefined') opt.error_message_time = 5000;
        if (typeof(opt.error_message_class) == 'undefined') opt.error_message_class = 'trx_addons_message_box_error';
        if (typeof(opt.success_message_class) == 'undefined') opt.success_message_class = 'trx_addons_message_box_success';
        if (typeof(opt.error_message_text) == 'undefined') opt.error_message_text = 'Incorrect data in the fields!';
        if (typeof(opt.error_fields_class) == 'undefined') opt.error_fields_class = 'trx_addons_field_error';
        if (typeof(opt.exit_after_first_error) == 'undefined') opt.exit_after_first_error = false;
        var error_msg = '';
        form.find(":input").each(function() {
            if (error_msg !== '' && opt.exit_after_first_error) return;
            for (var i = 0; i < opt.rules.length; i++) {
                if (jQuery(this).attr("name") == opt.rules[i].field) {
                    var val = jQuery(this).val();
                    var error = false;
                    if (typeof(opt.rules[i].min_length) == 'object') {
                        if (opt.rules[i].min_length.value > 0 && val.length < opt.rules[i].min_length.value) {
                            if (error_msg === '') jQuery(this).get(0).focus();
                            error_msg += '<p class="trx_addons_error_item">' + (typeof(opt.rules[i].min_length.message) != 'undefined' ? opt.rules[i].min_length.message : opt.error_message_text) + '</p>';
                            error = true;
                        }
                    }
                    if ((!error || !opt.exit_after_first_error) && typeof(opt.rules[i].max_length) == 'object') {
                        if (opt.rules[i].max_length.value > 0 && val.length > opt.rules[i].max_length.value) {
                            if (error_msg === '') jQuery(this).get(0).focus();
                            error_msg += '<p class="trx_addons_error_item">' + (typeof(opt.rules[i].max_length.message) != 'undefined' ? opt.rules[i].max_length.message : opt.error_message_text) + '</p>';
                            error = true;
                        }
                    }
                    if ((!error || !opt.exit_after_first_error) && typeof(opt.rules[i].mask) == 'object') {
                        if (opt.rules[i].mask.value !== '') {
                            var regexp = new RegExp(opt.rules[i].mask.value);
                            if (!regexp.test(val)) {
                                if (error_msg === '') jQuery(this).get(0).focus();
                                error_msg += '<p class="trx_addons_error_item">' + (typeof(opt.rules[i].mask.message) != 'undefined' ? opt.rules[i].mask.message : opt.error_message_text) + '</p>';
                                error = true;
                            }
                        }
                    }
                    if ((!error || !opt.exit_after_first_error) && typeof(opt.rules[i].state) == 'object') {
                        if (opt.rules[i].state.value == 'checked' && !jQuery(this).get(0).checked) {
                            if (error_msg === '') jQuery(this).get(0).focus();
                            error_msg += '<p class="trx_addons_error_item">' + (typeof(opt.rules[i].state.message) != 'undefined' ? opt.rules[i].state.message : opt.error_message_text) + '</p>';
                            error = true;
                        }
                    }
                    if ((!error || !opt.exit_after_first_error) && typeof(opt.rules[i].equal_to) == 'object') {
                        if (opt.rules[i].equal_to.value !== '' && val != jQuery(jQuery(this).get(0).form[opt.rules[i].equal_to.value]).val()) {
                            if (error_msg === '') jQuery(this).get(0).focus();
                            error_msg += '<p class="trx_addons_error_item">' + (typeof(opt.rules[i].equal_to.message) != 'undefined' ? opt.rules[i].equal_to.message : opt.error_message_text) + '</p>';
                            error = true;
                        }
                    }
                    if (opt.error_fields_class !== '') jQuery(this).toggleClass(opt.error_fields_class, error);
                }
            }
        });
        if (error_msg !== '' && opt.error_message_show) {
            var error_message_box = form.find(".trx_addons_message_box");
            if (error_message_box.length === 0) error_message_box = form.parent().find(".trx_addons_message_box");
            if (error_message_box.length === 0) {
                form.append('<div class="trx_addons_message_box"></div>');
                error_message_box = form.find(".trx_addons_message_box");
            } else error_message_box.removeClass(opt.success_message_class);
            if (opt.error_message_class) error_message_box.addClass(opt.error_message_class);
            error_message_box.html(error_msg).fadeIn();
            setTimeout(function() {
                error_message_box.fadeOut();
            }, opt.error_message_time);
        }
        return error_msg !== '';
    };

    function trx_addons_compare_lists(list1, list2) {
        var result = list1.length == list2.length;
        if (result) {
            for (var i in list1) {
                if (!list2.hasOwnProperty(i) || list1[i] != list2[i]) {
                    result = false;
                    break;
                }
            }
        }
        return result;
    }
    var _trx_addons_refresh_list_cache = {};
    window.trx_addons_refresh_list = function(parent_type, parent_val, list_fld, list_lbl, list_not_selected, elementor_obj) {
        if (list_not_selected === undefined) {
            list_not_selected = list_fld.data('not-selected') === true || list_fld.parents('.vc_edit-form-tab').length > 0 || list_fld.parents('#elementor-controls').length > 0 || list_fld.parents('[class*="widget_field_type_"]').length > 0 || list_fld.parents('.widget-liquid-right').length > 0 || list_fld.parents('.widgets-holder-wrap').length > 0 || list_fld.parents('.customize-control-widget_form').length > 0;
        }
        var list_val = elementor_obj && list_fld.data('setting') ? elementor_obj.model.getSetting(list_fld.data('setting')) : list_fld.val();
        list_val = ',' + list_val + ',';
        if (list_lbl.find('.trx_addons_refresh').length === 0) {
            list_lbl.append('<span class="trx_addons_refresh trx_addons_icon-spin3 animate-spin"></span>');
        }
        if (parent_val) {
            var cache_key = (typeof parent_val == 'object' ? JSON.stringify(parent_val) : parent_val) + '_' + parent_type;
            if (_trx_addons_refresh_list_cache[cache_key] !== undefined) {
                trx_addons_refresh_field_items(_trx_addons_refresh_list_cache[cache_key]);
            } else {
                var data = {
                    action: 'trx_addons_refresh_list',
                    nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
                    parent_type: parent_type,
                    parent_value: parent_val,
                    list_not_selected: list_not_selected
                };
                jQuery.post(TRX_ADDONS_STORAGE['ajax_url'], data, function(response) {
                    var rez = {};
                    try {
                        rez = JSON.parse(response);
                    } catch (e) {
                        rez = {
                            error: TRX_ADDONS_STORAGE['msg_ajax_error']
                        };
                        console.log(response);
                    }
                    if (rez.error === '') {
                        _trx_addons_refresh_list_cache[cache_key] = rez.data;
                        trx_addons_refresh_field_items(rez.data);
                    }
                });
            }
        } else {
            var args = [];
            if (list_not_selected) {
                var list_type = list_fld.prop('tagName').toLowerCase();
                if (list_type == 'select') {
                    var opt = list_fld.find('option').eq(0);
                    if (opt.length > 0) {
                        args[0] = {
                            key: opt.val(),
                            value: opt.text()
                        };
                    }
                }
            }
            trx_addons_refresh_field_items(args);
        }

        function trx_addons_refresh_field_items(data) {
            var list = {};
            var opt_list = '';
            var list_type = list_fld.prop('tagName').toLowerCase();
            var list_name = list_type == 'select' ? (list_fld.attr('name') ? list_fld.attr('name') : list_fld.data('setting')) : list_fld.data('field_name');
            if (data.length === 0) {
                data = [{
                    key: 0,
                    value: ''
                }];
            }
            for (var i in data) {
                if (list_type != 'select' && data[i]['key'] == 0) {
                    continue;
                }
                list[data[i]['key']] = data[i]['value'];
                opt_list += list_type == 'select' ? '<option class="' + data[i]['key'] + '"' + ' value="' + data[i]['key'] + '"' + (list_val.indexOf(',' + ('' + data[i]['key']).trim() + ',') >= 0 || list_val.indexOf(',' + ('' + data[i]['key']).trim() + ' ,') >= 0 ? ' selected="selected"' : '') + '>' + data[i]['value'] + '</option>' : '<label><input type="checkbox"' + ' value="' + data[i]['key'] + '"' + ' name="' + list_name + '"' + '>' + data[i]['value'] + '</label>';
            }
            list_fld.html(opt_list);
            if (list_type == 'select' && list_fld.find('option:selected').length === 0 && list_fld.find('option').length > 0) {
                list_fld.find('option').get(0).selected = true;
            }
            var need_refresh = true;
            if (elementor_obj) {
                need_refresh = !trx_addons_compare_lists(elementor_obj.view.container.controls[list_name].options, list);
                if (need_refresh) {
                    elementor_obj.view.container.controls[list_name].options = list;
                }
            }
            list_lbl.find('span.trx_addons_refresh').remove();
            if (list_fld.data('select2')) {
                setTimeout(function() {
                    list_fld.parent().find('input.select2-search__field[placeholder]').removeAttr('placeholder');
                }, 1);
            }
            if (need_refresh) {
                list_fld.trigger('change');
            } else {
                list_fld.trigger('change.trx_addons_refresh_list');
            }
        }
        return false;
    };
    var _window_width = $window.width(),
        _window_height = $window.height(),
        _window_scroll_top = $window.scrollTop(),
        _window_scroll_left = $window.scrollLeft();
    $window.on('resize', function() {
        _window_width = $window.width();
        _window_height = $window.height();
        _window_scroll_top = $window.scrollTop();
        _window_scroll_left = $window.scrollLeft();
    });
    $window.on('scroll', function() {
        _window_scroll_top = $window.scrollTop();
        _window_scroll_left = $window.scrollLeft();
    });
    window.trx_addons_window_width = function(val) {
        if (val) _window_width = val;
        return _window_width;
    };
    window.trx_addons_window_height = function(val) {
        if (val) _window_height = val;
        return _window_height;
    };
    window.trx_addons_window_scroll_top = function() {
        return _window_scroll_top;
    };
    window.trx_addons_window_scroll_left = function() {
        return _window_scroll_left;
    };
    var _document_height;
    var _document_height_first_run = true;
    var _update_document_height = function(e) {
        if (_document_height_first_run && e && e.namespace == 'init_hidden_elements') {
            _document_height_first_run = false;
            return;
        }
        _document_height = $document.height();
    };
    $document.ready(_update_document_height);
    $document.on('action.init_hidden_elements action.got_ajax_response', _update_document_height);
    $window.on('resize', _update_document_height);
    window.trx_addons_document_height = function() {
        return _document_height;
    };
    var _adminbar_height = 0;
    var _update_adminbar_height = function() {
        _adminbar_height = trx_addons_adminbar_height_calc();
    };
    $document.ready(_update_adminbar_height);
    $window.on('resize', _update_adminbar_height);
    window.trx_addons_adminbar_height_calc = function() {
        return trx_addons_apply_filters('trx_addons_filter_adminbar_height', $adminbar.length === 0 || $adminbar.css('display') == 'none' || $adminbar.css('position') == 'absolute' ? 0 : $adminbar.height());
    };
    window.trx_addons_adminbar_height = function() {
        return _adminbar_height;
    };
    var $fixed_rows = false,
        _fixed_rows_height = 0;
    var _update_fixed_rows = function() {
        if ($fixed_rows === false) {
            $fixed_rows = jQuery('.sc_layouts_row_fixed');
        }
        _fixed_rows_height = trx_addons_fixed_rows_height_calc();
        $html_dom.style.setProperty('--fixed-rows-height', (_fixed_rows_height + trx_addons_adminbar_height()) + 'px');
    };
    $document.ready(_update_fixed_rows);
    $document.on('action.ready_trx_addons action.sc_layouts_row_fixed_on action.sc_layouts_row_fixed_off', _update_fixed_rows);
    $window.on('resize', _update_fixed_rows);
    window.trx_addons_fixed_rows_height_calc = function() {
        var oft = 0;
        if ($fixed_rows.length > 0) {
            var $fixed_on = $fixed_rows.filter('.sc_layouts_row_fixed_on');
            if ($fixed_on.length > 0 && !$body.hasClass('hide_fixed_rows')) {
                $fixed_on.each(function() {
                    var $row = jQuery(this);
                    if ($row.css('position') == 'fixed') {
                        oft += $row.outerHeight();
                    }
                });
            }
        }
        return trx_addons_apply_filters('trx_addons_filter_fixed_rows_height', oft);
    };
    window.trx_addons_fixed_rows_height = function() {
        var with_admin_bar = arguments.length > 0 ? arguments[0] : true,
            with_fixed_rows = arguments.length > 1 ? arguments[1] : true;
        return (with_admin_bar ? trx_addons_adminbar_height() : 0) + (with_fixed_rows ? _fixed_rows_height : 0);
    };
    window.trx_addons_document_animate_to_busy = false;
    window.trx_addons_document_animate_to = function(id, callback) {
        var split_animation = true;
        var oft = !isNaN(id) ? Number(id) : 0,
            oft2 = -1;
        var obj = null;
        if (isNaN(id)) {
            if (typeof id == 'object') {
                if (id.length > 0) {
                    obj = id;
                } else {
                    return;
                }
            } else {
                if (id.substring(0, 1) != '#' && id.substring(0, 1) != '.') {
                    id = '#' + id;
                }
                obj = jQuery(id).eq(0);
                if (obj.length === 0) {
                    return;
                }
            }
            oft = split_animation ? obj.offset().top : Math.max(0, obj.offset().top - trx_addons_fixed_rows_height());
            if (split_animation) {
                oft2 = Math.max(0, oft - trx_addons_fixed_rows_height());
            }
        }
        var speed = Math.min(1000, Math.max(300, Math.round(Math.abs((oft2 < 0 ? oft : oft2) - jQuery(window).scrollTop()) / jQuery(window).height() * 300)));
        window.trx_addons_document_animate_to_busy = true;
        if (oft2 >= 0) {
            setTimeout(function() {
                if (isNaN(id)) oft = obj.offset().top;
                oft2 = Math.max(0, oft - trx_addons_fixed_rows_height());
                jQuery('body,html').stop(true).animate({
                    scrollTop: oft2
                }, Math.floor(speed / 2), 'linear', function() {
                    _window_scroll_top = $window.scrollTop();
                    window.trx_addons_document_animate_to_busy = false;
                    if (callback) callback(id, speed);
                });
            }, Math.floor(speed / 2));
        } else {
            oft2 = oft;
        }
        if (speed > 0) {
            jQuery('body,html').stop(true).animate({
                scrollTop: oft2
            }, speed, 'linear', function() {
                _window_scroll_top = $window.scrollTop();
                window.trx_addons_document_animate_to_busy = false;
                if (callback) callback(id, speed);
            });
        } else {
            jQuery('body,html').stop(true).scrollTop(oft2);
            _window_scroll_top = $window.scrollTop();
            window.trx_addons_document_animate_to_busy = false;
            if (callback) callback(id, speed);
        }
    };
    window.trx_addons_request_animation_frame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
    };
    window.trx_addons_document_set_location = function(curLoc, state) {
        if (history.pushState === undefined || navigator.userAgent.match(/MSIE\s[6-9]/i) !== null) {
            return;
        }
        try {
            history.pushState(state ? state : {
                url: curLoc
            }, null, curLoc);
            return;
        } catch (e) {}
        location.href = curLoc;
    };
    window.trx_addons_add_to_url = function(loc, prm) {
        var ignore_empty = arguments[2] !== undefined ? arguments[2] : true,
            q = loc.split('?'),
            attr = q.length > 1 ? trx_addons_parse_query_string(q[1]) : {},
            i = 0;
        for (var p in prm) {
            attr[p] = prm[p];
        }
        loc = q[0] + '?';
        i = 0;
        for (p in attr) {
            if (ignore_empty && attr[p] === '') continue;
            loc += (i++ > 0 ? '&' : '') + encodeURIComponent(p) + '=' + encodeURIComponent(attr[p]);
        }
        return loc;
    };
    window.trx_addons_add_extra_args_to_links = function(args, cont) {
        if (!cont) cont = $body;
        cont.find('a').each(function() {
            var link = jQuery(this),
                href = link.attr('href');
            if (href && href != '#' && !trx_addons_is_local_link(href)) {
                var loc = window.location.href,
                    page_valid = true;
                for (var i = 0; i < args.length; i++) {
                    page_valid = true;
                    if (args[i].page) {
                        page_valid = false;
                        if (typeof args[i].page == 'object') {
                            for (var pg in args[i].page) {
                                page_valid = loc.indexOf(args[i].page[pg]) >= 0;
                                if (page_valid) break;
                            }
                        } else {
                            page_valid = loc.indexOf(args[i].page) >= 0;
                        }
                    }
                    if (page_valid && (!args[i].mask || href.indexOf(args[i].mask) >= 0)) {
                        href = typeof args[i].link != 'undefined' ? args[i].link : trx_addons_add_to_url(href, args[i].args);
                    }
                }
                link.attr('href', href);
            }
        });
    };
    window.trx_addons_get_value_gp = function(prm) {
        var urlParams = new URLSearchParams(window.location.search),
            value = urlParams.get(prm);
        return decodeURIComponent(value ? value : '');
    };
    window.trx_addons_parse_query_string = function(qs) {
        var query = {},
            pairs = (qs.indexOf('?') >= 0 ? qs.substring(qs.indexOf('?') + 1) : qs).split('&'),
            pair = [];
        for (var i = 0; i < pairs.length; i++) {
            pair = pairs[i].split('=');
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
        return query;
    };
    window.trx_addons_is_local_link = function(url) {
        var rez = url !== undefined;
        if (rez) {
            var url_pos = url.indexOf('#');
            if (url_pos === 0 && url.length == 1) {
                rez = false;
            } else {
                if (url_pos < 0) url_pos = url.length;
                var loc = window.location.href;
                var loc_pos = loc.indexOf('#');
                if (loc_pos > 0) loc = loc.substring(0, loc_pos);
                rez = url_pos === 0;
                if (!rez) rez = loc == url.substring(0, url_pos);
            }
        }
        return rez;
    };
    window.trx_addons_is_url = function(url) {
        return url.indexOf('//') === 0 || url.indexOf('://') > 0;
    };
    window.trx_addons_get_embed_from_url = function(url, autoplay, mute, loop) {
        if (autoplay === undefined) {
            autoplay = true;
        }
        if (mute === undefined) {
            mute = true;
        }
        if (loop === undefined) {
            loop = true;
        }
        var embed = '';
        if (url.indexOf('.mp4') > 0 || trx_addons_is_local_link(url)) {
            embed = '<video class="trx_addons_video_video" playsinline disablepictureinpicture' + (autoplay ? ' autoplay="autoplay"' : '') + (loop ? ' loop="loop"' : '') + (mute ? ' muted="muted"' : '') + '>' + '<source src="' + url + '" type="video/mp4" />' + '</video>';
        } else {
            url = url.replace('/watch?v=', '/embed/').replace('/youtu.be/', '/www.youtube.com/embed/').replace('/vimeo.com/', '/player.vimeo.com/video/').replace('/dai.ly/', '/dailymotion.com/embed/video/').replace('/dailymotion.com/video/', '/dailymotion.com/embed/video/');
            if (autoplay) {
                url += (url.indexOf('?') > 0 ? '&' : '?') + 'autoplay=1';
            }
            if (mute) {
                url += (url.indexOf('?') > 0 ? '&' : '?') + 'muted=1';
            }
            embed = '<iframe src="' + url + '" border="0" width="1280" height="720"' + (autoplay ? ' allow="autoplay"' : '') + '></iframe>';
        }
        return embed;
    };
    window.trx_addons_set_autoplay = function(container, value) {
        if (value === undefined) {
            value = 1;
        }
        container.find('.video_frame > iframe, iframe').each(function() {
            if (value) {
                jQuery(this).attr('allow', 'autoplay');
            }
            var src = jQuery(this).data('src');
            if (src) {
                jQuery(this).attr('src', src);
            } else {
                src = jQuery(this).attr('src');
                if (src === undefined) {
                    src = '';
                }
                if (src.indexOf('youtube') >= 0 || src.indexOf('vimeo') >= 0) {
                    jQuery(this).attr('src', trx_addons_add_to_url(src, {
                        'autoplay': value
                    }));
                }
            }
        });
    };
    window.trx_addons_insert_video_iframe = function($cont, iframe_html) {
        if ($cont.length === 0) {
            return;
        }
        if (trx_addons_browser_is_ios() && iframe_html.indexOf('youtu') > 0 && iframe_html.indexOf('autoplay=1') > 0 && typeof YT != 'undefined') {
            var id = 'trx_addons_yt_player_' + Math.floor(Math.random() * 100000);
            $cont.html(iframe_html.replace(/<iframe[\s]+[\s\S]+<\/iframe>/, '<div class="trx_addons_yt_player" id="' + id + '"></div>'));
            var src = iframe_html.split('?');
            var video_id = src[0].substring(src[0].indexOf('/embed/') + 7);
            var player = new YT.Player(id, {
                videoId: video_id,
                suggestedQuality: 'hd720',
                playerVars: {
                    autoplay: 1,
                    autohide: 0,
                    modestbranding: 1,
                    rel: 0,
                    showinfo: 0,
                    controls: 1,
                    disablekb: 1,
                    enablejsapi: 1,
                    iv_load_policy: 3,
                    playsinline: 1,
                    loop: 0
                },
                events: {
                    'onReady': function onReady(e) {
                        player.playVideo();
                    }
                }
            });
        } else {
            $cont.html(iframe_html);
        }
    };
    window.trx_addons_browser_is_support = function(prop, value) {
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        var el = document.createElement('a');
        var style = el.style;
        if (prop.slice(-1) != ':') {
            prop += ':';
        }
        style.cssText = prop + prefixes.join(value + ';' + prop).slice(0, -prop.length);
        return style.position.indexOf(value) !== -1;
    };
    window.trx_addons_browser_is_support_css_sticky = function() {
        return trx_addons_browser_is_support('position', 'sticky');
    };
    window.trx_addons_browser_is_touch = function() {
        return 'ontouchstart' in document.documentElement;
    };
    window.trx_addons_browser_is_pointer_events = function() {
        return !!window.PointerEvent && ('maxTouchPoints' in window.navigator) && window.navigator.maxTouchPoints >= 0;
    };
    window.trx_addons_browser_is_mobile = function() {
        var check = false;
        (function(a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                check = true;
            }
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };
    window.trx_addons_browser_is_ios = function() {
        return navigator.userAgent.match(/iPad|iPhone|iPod/i) !== null ? true : false;
    };
    window.trx_addons_browser_is_iphone = function() {
        return navigator.userAgent.match(/iPhone/i) !== null ? true : false;
    };
    window.trx_addons_browser_is_ipad = function() {
        return navigator.userAgent.match(/iPad/i) !== null ? true : false;
    };
    window.trx_addons_browser_is_ipod = function() {
        return navigator.userAgent.match(/iPod/i) !== null ? true : false;
    };
    window.trx_addons_is_retina = function() {
        var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)';
        return (window.devicePixelRatio > 1) || (window.matchMedia && window.matchMedia(mediaQuery).matches);
    };
    window.trx_addons_browser_classes = function() {
        var userAgent = navigator.userAgent,
            matchUserAgent = function(ua) {
                return userAgent.indexOf(ua) >= 0;
            },
            classes = {
                'mobile': trx_addons_browser_is_mobile(),
                'mac': matchUserAgent('Macintosh'),
                'ios': trx_addons_browser_is_ios(),
                'iphone': trx_addons_browser_is_iphone() || trx_addons_browser_is_ipad() || trx_addons_browser_is_ipod(),
                'touch': trx_addons_browser_is_touch(),
                'retina': trx_addons_is_retina(),
                'firefox': matchUserAgent('Firefox'),
                'opera': !!window.opr && !!opr.addons || !!window.opera || matchUserAgent(' OPR/'),
                'safari': /^((?!chrome|android).)*safari/i.test(userAgent) || /constructor/i.test(window.HTMLElement) || (p => {
                    return '[object SafariRemoteNotification]' === p.toString();
                })(!window.safari || typeof safari !== 'undefined' && safari.pushNotification),
                'ie': /Trident|MSIE/.test(userAgent) && (false || !!document.documentMode),
                'blink': matchUserAgent('Chrome') && !!window.CSS,
                'webkit': matchUserAgent('AppleWebKit')
            };
        classes['edge'] = !classes['ie'] && !!window.StyleMedia || matchUserAgent('Edg');
        classes['chrome'] = !!window.chrome && matchUserAgent('Chrome') && !classes['edge'] && !classes['opera'];
        classes['applewebkit'] = matchUserAgent('AppleWebKit') && !classes['blink'];
        classes['gecko'] = matchUserAgent('Gecko') && classes['firefox'];
        return classes;
    };
    window.trx_addons_get_file_name = function(path) {
        path = path.replace(/\\/g, '/');
        if (path.indexOf('?') > 0) {
            path = path.substr(0, path.indexOf('?'));
        }
        var pos = path.lastIndexOf('/');
        if (pos >= 0) path = path.substr(pos + 1);
        return path;
    };
    window.trx_addons_get_file_ext = function(path) {
        if (path.indexOf('?') > 0) {
            path = path.substr(0, path.indexOf('?'));
        }
        var pos = path.lastIndexOf('.');
        path = pos >= 0 ? path.substr(pos + 1) : '';
        return path;
    };
    window.trx_addons_get_basename = function(path) {
        return trx_addons_get_file_name(path).replace('.' + trx_addons_get_file_ext(path), '');
    };
    window.trx_addons_is_images_loaded = function(cont) {
        var complete = true;
        cont.find('img').each(function() {
            if (!complete) {
                return;
            }
            var img = jQuery(this).get(0);
            if (typeof img.complete == 'boolean') {
                complete = img.complete;
            } else if (typeof img.naturalWidth == 'number' && typeof img.naturalHeight == 'number') {
                complete = !(img.naturalWidth == 0 && img.naturalHeight == 0);
            }
        });
        return complete;
    };
    window.trx_addons_when_images_loaded = function(cont, callback, max_delay) {
        if (max_delay === undefined) {
            max_delay = 3000;
        }
        if (max_delay <= 0 || trx_addons_is_images_loaded(cont)) {
            callback(cont);
        } else {
            setTimeout(function() {
                trx_addons_when_images_loaded(cont, callback, max_delay - 200);
            }, 200);
        }
    };
    window.trx_addons_fetch_url = function(url, callback) {
        if (typeof window.fetch == 'function') {
            fetch(url).then(function(response) {
                return response.ok ? response.text() : '';
            }).then(function(data) {
                if (callback) {
                    callback(data);
                }
            });
        } else {
            jQuery.get(url).done(function(response) {
                if (typeof response == 'object' && typeof response.childElementCount != 'undefined' && response.childElementCount > 0 && typeof response.children != 'undefined' && typeof response.children[0] != 'undefined') {
                    response = response.children[0].outerHTML;
                }
                if (callback) {
                    callback(response);
                }
            }).fail(function() {
                if (callback) {
                    callback('');
                }
            });
        }
    };
    var inline_svg = [];
    window.trx_addons_get_inline_svg = function(svg_url, view) {
        var html = '';
        for (var i = 0; i < inline_svg.length; i++) {
            if (inline_svg[i].url == svg_url) {
                html = inline_svg[i].html;
                break;
            }
        }
        if (html === '') {
            trx_addons_fetch_url(svg_url, function(html) {
                if (html) {
                    inline_svg.push({
                        url: svg_url,
                        html: html
                    });
                }
                if (view) {
                    view.render(html);
                }
            });
        } else if (view) {
            view.render(html);
        }
        return html;
    };
    if (!window.get_inline_svg) {
        window.get_inline_svg = window.trx_addons_get_inline_svg;
    }
    window.trx_addons_round_number = function(num) {
        var precision = arguments[1] !== undefined ? arguments[1] : 0;
        var p = Math.pow(10, precision);
        return Math.round(num * p) / p;
    };
    Number.prototype.formatMoney = function(c, d, t) {
        var n = this,
            c = c == undefined ? 2 : (isNaN(c = Math.abs(c)) ? 2 : c),
            d = d == undefined ? "." : d,
            t = t == undefined ? "," : t,
            s = n < 0 ? "-" : "",
            i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
            j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substring(0, j) + t : "") + i.substring(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };
    window.trx_addons_random = function(a, b) {
        return Math.floor(Math.random() * (b - a)) + a;
    };
    window.trx_addons_proper = function(str) {
        return str.replace(/(\b\w)/gi, function(m) {
            return m.toUpperCase();
        });
    };
    window.trx_addons_replicate = function(str, num) {
        var rez = '';
        for (var i = 0; i < num; i++) {
            rez += str;
        }
        return rez;
    };
    window.trx_addons_split = function(str, delimiter) {
        var rez = [],
            quotes = false,
            pos = 0;
        for (var i = 0; i < str.length; i++) {
            if (str[i] == delimiter && !quotes) {
                rez.push(str.substring(pos, i));
                pos = i + 1;
            } else if (str[i] == '"') {
                quotes = !quotes;
            }
        }
        rez.push(str.substring(pos, i));
        return rez;
    };
    window.trx_addons_parse_atts = function(str, delimiter) {
        var obj = {};
        if (!delimiter) {
            delimiter = ' ';
        }
        if (str !== undefined) {
            if (delimiter == '&') {
                str = str.replace(/&amp;/g, '&');
            }
            var pairs = trx_addons_split(str, delimiter);
            for (var i in pairs) {
                if (pairs[i].indexOf('=') != -1) {
                    var pair = pairs[i].split('=');
                    obj[pair[0]] = ('' + pair[1]).slice(0, 1) == '"' && ('' + pair[1]).slice(-1) == '"' || ('' + pair[1]).slice(0, 1) == "'" && ('' + pair[1]).slice(-1) == "'" ? pair[1].slice(1, -1) : pair[1];
                }
            }
        }
        return obj;
    };
    window.trx_addons_prepare_macros = function(str) {
        if (!str || typeof str != 'string') {
            return str;
        }
        if (str.indexOf('[') >= 0 && str.indexOf(']') >= 0) {
            str = str.replace(/([\[])([\[\]\S]+?)[\s]+([^\[\]]+)?([\]])/g, function(match, p1, p2, p3, p4) {
                var allowed_css = trx_addons_apply_filters('trx_addons_filter_prepare_macros_allowed_css', {
                        'valign': 'vertical-align',
                        'color': 'color',
                        'bgcolor': 'background-color',
                        'bdcolor': 'border-color',
                        'border': 'border-width',
                        'radius': 'border-radius',
                        'padding': 'padding',
                        'margin': 'margin'
                    }, 'common'),
                    image_css = trx_addons_apply_filters('trx_addons_filter_prepare_macros_allowed_css', {
                        'size': {
                            'rule': 'max-height',
                            'default': '1em'
                        },
                    }, 'image'),
                    icon_css = trx_addons_apply_filters('trx_addons_filter_prepare_macros_allowed_css', {
                        'size': {
                            'rule': 'font-size',
                            'default': '1em'
                        },
                    }, 'icon'),
                    atts = false;
                if (p2 == 'image') {
                    atts = p3 ? trx_addons_parse_atts(p3) : {};
                    if (!atts['url']) {
                        atts['url'] = TRX_ADDONS_STORAGE['no_image'];
                        var get_url_by_size = function(data, thumb_size) {
                            var url = '';
                            for (var i in data['media_details']['sizes']) {
                                if (('' + i).indexOf(thumb_size) >= 0) {
                                    url = data['media_details']['sizes'][i]['source_url'];
                                    break;
                                }
                            }
                            return url;
                        };
                        if (atts['id']) {
                            if (TRX_ADDONS_STORAGE['fetch_images'] === undefined) {
                                TRX_ADDONS_STORAGE['fetch_images'] = {};
                            }
                            if (!TRX_ADDONS_STORAGE['fetch_images'][atts['id']]) {
                                jQuery.get(TRX_ADDONS_STORAGE['rest_url'] + 'wp/v2/media/' + atts['id'] + '/', function(response) {
                                    if (response && response['media_details'] && response['media_details']['sizes']) {
                                        TRX_ADDONS_STORAGE['fetch_images'][atts['id']] = response;
                                    }
                                });
                            } else {
                                atts['url'] = get_url_by_size(TRX_ADDONS_STORAGE['fetch_images'][atts['id']], atts['thumb'] ? '-' + atts['thumb'] : 'full');
                            }
                        }
                    }
                    return atts['url'] ? '<img src="' + atts['url'] + '"' + (atts['id'] ? ' id="trx_addons_image_' + atts['id'] + '"' : '') + (atts['alt'] ? ' alt="' + atts['alt'] + '"' : '') + ' style="' + trx_addons_get_css_from_atts(atts, trx_addons_object_merge(allowed_css, image_css)) + (atts['css'] ? atts['css'] : '') + '"' + '>' : '';
                } else if (p2 == 'icon') {
                    atts = p3 ? trx_addons_parse_atts(p3) : {};
                    if (atts['name'] && atts['name'].slice(0, 5) != 'icon-') {
                        atts['name'] = 'icon-' + atts['name'];
                    }
                    return atts['name'] ? '<span class="' + atts['name'] + '"' + ' style="' + trx_addons_get_css_from_atts(atts, trx_addons_object_merge(allowed_css, icon_css)) + (atts['css'] ? atts['css'] : '') + '"' + '></span>' : '';
                } else if (p2.slice(0, 1) != '&') {
                    return p1 + p2 + p4;
                } else {
                    return match;
                }
            });
        }
        return str.replace(/\{\{/g, "<i>").replace(/\}\}/g, "</i>").replace(/\(\(/g, "<b>").replace(/\)\)/g, "</b>").replace(/\|\|/g, "<br>").replace(/(\^(\d+))/g, "<sup>$2</sup>");
    };
    window.trx_addons_remove_macros = function(str) {
        return str.replace(/[^\[]([\[][^\[\]]+[\]])[^\]]/g, "").replace(/\{\{/g, "").replace(/\}\}/g, "").replace(/\(\(/g, "").replace(/\)\)/g, "").replace(/\|\|/g, "");
    };
    window.trx_addons_parse_codes = function(text, tag_start, tag_end) {
        if (tag_start === undefined) tag_start = '{{';
        if (tag_end === undefined) tag_end = '}}';
        var r1 = new RegExp(tag_start, 'g');
        var r2 = new RegExp(tag_end, 'g');
        return text.replace(r1, '<').replace(r2, '>');
    };
    window.trx_addons_is_on = function(prm) {
        return prm > 0 || ['true', 'on', 'yes', 'show'].indexOf(('' + prm).toLowerCase()) >= 0;
    };
    window.trx_addons_is_off = function(prm) {
        return prm === undefined || prm === '' || prm === 0 || ['false', 'off', 'no', 'none', 'hide'].indexOf(('' + prm).toLowerCase()) >= 0;
    };
    window.trx_addons_is_inherit = function(prm) {
        return ['inherit'].indexOf(('' + prm).toLowerCase()) >= 0;
    };
    window.trx_addons_is_empty = function(prm) {
        return prm === undefined || prm === '' || prm === 0 || prm === false || (typeof prm == 'object' && Object.keys(prm).length === 0);
    };
    window.trx_addons_get_class_by_prefix = function(classes, prefix) {
        var rez = '';
        if (classes) {
            classes = classes.split(' ');
            for (var i = 0; i < classes.length; i++) {
                if (classes[i].indexOf(prefix) >= 0) {
                    rez = classes[i].replace(/[\s]+/g, '');
                    break;
                }
            }
        }
        return rez;
    };
    window.trx_addons_chg_class_by_prefix = function(classes, prefix, new_value) {
        var chg = false;
        if (!classes) classes = '';
        classes = classes.replace(/[\s]+/g, ' ').split(' ');
        new_value = new_value.replace(/[\s]+/g, '');
        if (typeof prefix == 'string') {
            prefix = [prefix];
        }
        for (var i = 0; i < classes.length; i++) {
            for (var j = 0; j < prefix.length; j++) {
                if (classes[i].indexOf(prefix[j]) >= 0) {
                    classes[i] = new_value;
                    chg = true;
                    break;
                }
            }
            if (chg) break;
        }
        if (!chg && new_value) {
            if (classes.length == 1 && classes[0] === '') classes[0] = new_value;
            else classes.push(new_value);
        }
        return classes.join(' ').replace(/[\s]{2,}/g, ' ');
    };
    window.trx_addons_get_icon_class = function(classes) {
        if (!classes) classes = '';
        return trx_addons_get_class_by_prefix(classes, 'icon-');
    };
    window.trx_addons_chg_icon_class = function(classes, icon, prefix) {
        var chg = false,
            icon_parts = icon.split('-');
        if (prefix === undefined) {
            prefix = ['none', 'icon-', 'image-'];
        }
        prefix.push(icon_parts[0] + '-');
        if (!classes) classes = '';
        classes = classes.split(' ');
        for (var i = 0; i < classes.length; i++) {
            for (var j = 0; j < prefix.length; j++) {
                if (classes[i].indexOf(prefix[j]) >= 0) {
                    classes[i] = ['none', 'image-none'].indexOf(icon) != -1 ? '' : icon;
                    chg = true;
                    break;
                }
            }
            if (chg) break;
        }
        if (!chg && ['none', 'image-none'].indexOf(icon) == -1) {
            if (classes.length == 1 && classes[0] === '') {
                classes[0] = icon;
            } else {
                classes.push(icon);
            }
        }
        return classes.join(' ');
    };
    window.trx_addons_get_column_class = function(num, all, all_tablet, all_mobile) {
        var column_class_tpl = TRX_ADDONS_STORAGE['column_class_template'];
        var column_class = column_class_tpl.replace('$1', num).replace('$2', all);
        if (all_tablet) {
            column_class += ' ' + column_class_tpl.replace('$1', num).replace('$2', all_tablet) + '-tablet';
        }
        if (all_mobile) {
            column_class += ' ' + column_class_tpl.replace('$1', num).replace('$2', all_mobile) + '-mobile';
        }
        return column_class;
    };
    window.trx_addons_get_responsive_classes = function(prefix, atts, param, default_value) {
        var list = [];
        if (atts[param]) {
            list.push(prefix + atts[param]);
        } else if (default_value) {
            list.push(prefix + default_value);
        }
        if (TRX_ADDONS_STORAGE['elementor_breakpoints']) {
            for (var bp_name in TRX_ADDONS_STORAGE['elementor_breakpoints']) {
                if (atts[param + '_' + bp_name]) {
                    list.push(prefix + atts[param + '_' + bp_name] + '_' + bp_name);
                }
            }
        }
        list = trx_addons_apply_filters('trx_addons_filter_responsive_classes', list, prefix, atts, param);
        return list.length ? list.join(' ') : '';
    };
    window.trx_addons_get_responsive_breakpoint = function() {
        var rez = 'desktop',
            ww = trx_addons_window_width();
        if (TRX_ADDONS_STORAGE['elementor_breakpoints']) {
            for (var bp_name in TRX_ADDONS_STORAGE['elementor_breakpoints']) {
                if (TRX_ADDONS_STORAGE['elementor_breakpoints'][bp_name] < ww) {
                    break;
                }
                rez = bp_name;
            }
        }
        return rez;
    };
    window.trx_addons_wrap_words = function(txt, before, after) {
        var rez = '',
            ch = '',
            in_tag = false,
            in_word = false;
        for (var i = 0; i < txt.length; i++) {
            ch = txt.substring(i, i + 1);
            if (ch == '<') {
                in_tag = true;
                if (in_word) {
                    rez += after;
                    in_word = false;
                }
            }
            if (!in_tag) {
                if (ch == ' ') {
                    if (in_word) {
                        rez += after;
                        in_word = false;
                    }
                } else {
                    if (!in_word) {
                        rez += before;
                        in_word = true;
                    }
                }
            }
            rez += ch;
            if (!in_tag && in_word && i == txt.length - 1) {
                rez += after;
            }
            if (in_tag && ch == '>') {
                in_tag = false;
            }
        }
        return rez;
    };
    window.trx_addons_wrap_chars = function(txt, before, after, before_word, after_word) {
        var rez = '',
            ch = '',
            in_tag = false,
            in_word = false;
        if (before_word === undefined) before_word = '';
        if (after_word === undefined) after_word = '';
        for (var i = 0; i < txt.length; i++) {
            ch = txt.substring(i, i + 1);
            if (ch == '<') {
                in_tag = true;
                if (in_word) {
                    rez += after_word;
                    in_word = false;
                }
            }
            if (before_word && after_word && !in_tag) {
                if (ch == ' ') {
                    if (in_word) {
                        rez += after_word;
                        in_word = false;
                    }
                } else {
                    if (!in_word) {
                        rez += before_word;
                        in_word = true;
                    }
                }
            }
            rez += in_tag ? ch : before + (ch == ' ' ? '&nbsp;' : ch) + after;
            if (!in_tag && in_word && i == txt.length - 1) {
                rez += after_word;
            }
            if (in_tag && ch == '>') {
                in_tag = false;
            }
        }
        return rez;
    };
    window.trx_addons_clear_tags = function(str) {
        return str.replace(/<\/?[^>]+>/g, '');
    };
    window.trx_addons_esc_html = function(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    };
    window.trx_addons_hex2rgb = function(hex) {
        hex = hex.indexOf('#') > -1 ? hex.substring(1) : hex;
        if (hex.length == 3) {
            hex = hex.slice(0, 1).repeat(2) + hex.slice(1, 2).repeat(2) + hex.slice(2, 3).repeat(2);
        }
        var num = parseInt(hex, 16);
        if (hex.length > 6) {
            return {
                r: (num >> 24) + 256,
                g: (num & 0x00FF0000) >> 16,
                b: (num & 0x0000FF00) >> 8,
                a: (num & 0x000000FF)
            };
        } else {
            return {
                r: num >> 16,
                g: (num & 0x00FF00) >> 8,
                b: (num & 0x0000FF)
            };
        }
    };
    window.trx_addons_hex2rgba = function(hex, alpha) {
        var rgb = trx_addons_hex2rgb(hex);
        return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + alpha + ')';
    };
    window.trx_addons_rgb2hex = function(color) {
        var aRGB;
        color = color.replace(/\s/g, "").toLowerCase();
        if (color == 'rgba(0,0,0,0)' || color == 'rgba(0%,0%,0%,0%)') {
            color = 'transparent';
        }
        if (color.indexOf('rgba(') == 0) aRGB = color.match(/^rgba\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?)\)$/i);
        else aRGB = color.match(/^rgb\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?)\)$/i);
        if (aRGB) {
            color = '';
            for (var i = 1; i <= 3; i++) color += Math.round((aRGB[i][aRGB[i].length - 1] == "%" ? 2.55 : 1) * parseInt(aRGB[i])).toString(16).replace(/^(.)$/, '0$1');
        } else {
            color = color.replace(/^#?([\da-f])([\da-f])([\da-f])$/i, '$1$1$2$2$3$3');
        }
        return (color.substr(0, 1) != '#' ? '#' : '') + color;
    };
    window.trx_addons_components2hex = function(r, g, b, a) {
        return '#' + Number(r).toString(16).toUpperCase().replace(/^(.)$/, '0$1') + Number(g).toString(16).toUpperCase().replace(/^(.)$/, '0$1') + Number(b).toString(16).toUpperCase().replace(/^(.)$/, '0$1') + (a || a === 0 ? Number(a).toString(16).toUpperCase().replace(/^(.)$/, '0$1') : '');
    };
    window.trx_addons_rgb2components = function(color) {
        color = trx_addons_rgb2hex(color);
        var matches = color.match(/^#?([\dabcdef]{2})([\dabcdef]{2})([\dabcdef]{2})$/i);
        if (!matches) return false;
        for (var i = 1, rgb = new Array(3); i <= 3; i++) {
            rgb[i - 1] = parseInt(matches[i], 16);
        }
        return rgb;
    };
    window.trx_addons_hex2hsb = function(hex) {
        var h = arguments[1] !== undefined ? arguments[1] : 0;
        var s = arguments[2] !== undefined ? arguments[2] : 0;
        var b = arguments[3] !== undefined ? arguments[3] : 0;
        var hsb = trx_addons_rgb2hsb(trx_addons_hex2rgb(hex));
        hsb.h = Math.min(359, Math.max(0, hsb.h + h));
        hsb.s = Math.min(100, Math.max(0, hsb.s + s));
        hsb.b = Math.min(100, Math.max(0, hsb.b + b));
        return hsb;
    };
    window.trx_addons_hsb2hex = function(hsb) {
        var rgb = trx_addons_hsb2rgb(hsb);
        return trx_addons_components2hex(rgb.r, rgb.g, rgb.b);
    };
    window.trx_addons_rgb2hsb = function(rgb) {
        var hsb = {};
        hsb.b = Math.max(Math.max(rgb.r, rgb.g), rgb.b);
        hsb.s = (hsb.b <= 0) ? 0 : Math.round(100 * (hsb.b - Math.min(Math.min(rgb.r, rgb.g), rgb.b)) / hsb.b);
        hsb.b = Math.round((hsb.b / 255) * 100);
        if ((rgb.r == rgb.g) && (rgb.g == rgb.b)) hsb.h = 0;
        else if (rgb.r >= rgb.g && rgb.g >= rgb.b) hsb.h = 60 * (rgb.g - rgb.b) / (rgb.r - rgb.b);
        else if (rgb.g >= rgb.r && rgb.r >= rgb.b) hsb.h = 60 + 60 * (rgb.g - rgb.r) / (rgb.g - rgb.b);
        else if (rgb.g >= rgb.b && rgb.b >= rgb.r) hsb.h = 120 + 60 * (rgb.b - rgb.r) / (rgb.g - rgb.r);
        else if (rgb.b >= rgb.g && rgb.g >= rgb.r) hsb.h = 180 + 60 * (rgb.b - rgb.g) / (rgb.b - rgb.r);
        else if (rgb.b >= rgb.r && rgb.r >= rgb.g) hsb.h = 240 + 60 * (rgb.r - rgb.g) / (rgb.b - rgb.g);
        else if (rgb.r >= rgb.b && rgb.b >= rgb.g) hsb.h = 300 + 60 * (rgb.r - rgb.b) / (rgb.r - rgb.g);
        else hsb.h = 0;
        hsb.h = Math.round(hsb.h);
        return hsb;
    };
    window.trx_addons_hsb2rgb = function(hsb) {
        var rgb = {};
        var h = Math.round(hsb.h);
        var s = Math.round(hsb.s * 255 / 100);
        var v = Math.round(hsb.b * 255 / 100);
        if (s == 0) {
            rgb.r = rgb.g = rgb.b = v;
        } else {
            var t1 = v;
            var t2 = (255 - s) * v / 255;
            var t3 = (t1 - t2) * (h % 60) / 60;
            if (h == 360) h = 0;
            if (h < 60) {
                rgb.r = t1;
                rgb.b = t2;
                rgb.g = t2 + t3;
            } else if (h < 120) {
                rgb.g = t1;
                rgb.b = t2;
                rgb.r = t1 - t3;
            } else if (h < 180) {
                rgb.g = t1;
                rgb.r = t2;
                rgb.b = t2 + t3;
            } else if (h < 240) {
                rgb.b = t1;
                rgb.r = t2;
                rgb.g = t1 - t3;
            } else if (h < 300) {
                rgb.b = t1;
                rgb.g = t2;
                rgb.r = t2 + t3;
            } else if (h < 360) {
                rgb.r = t1;
                rgb.g = t2;
                rgb.b = t1 - t3;
            } else {
                rgb.r = 0;
                rgb.g = 0;
                rgb.b = 0;
            }
        }
        return {
            r: Math.round(rgb.r),
            g: Math.round(rgb.g),
            b: Math.round(rgb.b)
        };
    };
    window.trx_addons_color_picker = function() {
        var id = arguments[0] !== undefined ? arguments[0] : "iColorPicker" + Math.round(Math.random() * 1000);
        var colors = arguments[1] !== undefined ? arguments[1] : '#f00,#ff0,#0f0,#0ff,#00f,#f0f,#fff,#ebebeb,#e1e1e1,#d7d7d7,#cccccc,#c2c2c2,#b7b7b7,#acacac,#a0a0a0,#959595,' + '#ee1d24,#fff100,#00a650,#00aeef,#2f3192,#ed008c,#898989,#7d7d7d,#707070,#626262,#555,#464646,#363636,#262626,#111,#000,' + '#f7977a,#fbad82,#fdc68c,#fff799,#c6df9c,#a4d49d,#81ca9d,#7bcdc9,#6ccff7,#7ca6d8,#8293ca,#8881be,#a286bd,#bc8cbf,#f49bc1,#f5999d,' + '#f16c4d,#f68e54,#fbaf5a,#fff467,#acd372,#7dc473,#39b778,#16bcb4,#00bff3,#438ccb,#5573b7,#5e5ca7,#855fa8,#a763a9,#ef6ea8,#f16d7e,' + '#ee1d24,#f16522,#f7941d,#fff100,#8fc63d,#37b44a,#00a650,#00a99e,#00aeef,#0072bc,#0054a5,#2f3192,#652c91,#91278f,#ed008c,#ee105a,' + '#9d0a0f,#a1410d,#a36209,#aba000,#588528,#197b30,#007236,#00736a,#0076a4,#004a80,#003370,#1d1363,#450e61,#62055f,#9e005c,#9d0039,' + '#790000,#7b3000,#7c4900,#827a00,#3e6617,#045f20,#005824,#005951,#005b7e,#003562,#002056,#0c004b,#30004a,#4b0048,#7a0045,#7a0026';
        var colorsList = colors.split(',');
        var tbl = '<table class="colorPickerTable"><thead>';
        for (var i = 0; i < colorsList.length; i++) {
            if (i % 16 == 0) tbl += (i > 0 ? '</tr>' : '') + '<tr>';
            tbl += '<td style="background-color:' + colorsList[i] + '">&nbsp;</td>';
        }
        tbl += '</tr></thead><tbody>' + '<tr style="height:60px;">' + '<td colspan="8" id="' + id + '_colorPreview" style="vertical-align:middle;text-align:center;border:1px solid #000;background:#fff;">' + '<input style="width:55px;color:#000;border:1px solid rgb(0, 0, 0);padding:5px;background-color:#fff;font:11px Arial, Helvetica, sans-serif;" maxlength="7" />' + '<a href="#" id="' + id + '_moreColors" class="iColorPicker_moreColors"></a>' + '</td>' + '<td colspan="8" id="' + id + '_colorOriginal" style="vertical-align:middle;text-align:center;border:1px solid #000;background:#fff;">' + '<input style="width:55px;color:#000;border:1px solid rgb(0, 0, 0);padding:5px;background-color:#fff;font:11px Arial, Helvetica, sans-serif;" readonly="readonly" />' + '</td>' + '</tr></tbody></table>';
        jQuery(document.createElement("div")).attr("id", id).css('display', 'none').html(tbl).appendTo("body").addClass("iColorPickerTable").on('mouseover', 'thead td', function() {
            var aaa = trx_addons_rgb2hex(jQuery(this).css('background-color'));
            jQuery('#' + id + '_colorPreview').css('background', aaa);
            jQuery('#' + id + '_colorPreview input').val(aaa);
        }).on('keypress', '#' + id + '_colorPreview input', function(key) {
            var aaa = jQuery(this).val();
            if (key.which === 13 && (aaa.length === 4 || aaa.length === 7)) {
                var fld = jQuery('#' + id).data('field');
                var func = jQuery('#' + id).data('func');
                if (func != null && func != 'undefined') {
                    func(fld, aaa);
                } else {
                    fld.val(aaa).css('backgroundColor', aaa).trigger('change');
                }
                jQuery('#' + id + '_Bg').fadeOut(500);
                jQuery('#' + id).fadeOut(500);
                key.preventDefault();
                return false;
            }
        }).on('change', '#' + id + '_colorPreview input', function(key) {
            var aaa = jQuery(this).val();
            if (aaa.substr(0, 1) === '#' && (aaa.length === 4 || aaa.length === 7)) {
                jQuery('#' + id + '_colorPreview').css('background', aaa);
            }
        }).on('click', 'thead td', function(e) {
            var fld = jQuery('#' + id).data('field');
            var func = jQuery('#' + id).data('func');
            var aaa = trx_addons_rgb2hex(jQuery(this).css('background-color'));
            if (func != null && func != 'undefined') {
                func(fld, aaa);
            } else {
                fld.val(aaa).css('backgroundColor', aaa).trigger('change');
            }
            jQuery('#' + id + '_Bg').fadeOut(500);
            jQuery('#' + id).fadeOut(500);
            e.preventDefault();
            return false;
        }).on('click', 'tbody .iColorPicker_moreColors', function(e) {
            var thead = jQuery(this).parents('table').find('thead');
            var out = '';
            if (thead.hasClass('more_colors')) {
                for (var i = 0; i < colorsList.length; i++) {
                    if (i % 16 == 0) out += (i > 0 ? '</tr>' : '') + '<tr>';
                    out += '<td style="background-color:' + colorsList[i] + '">&nbsp;</td>';
                }
                thead.removeClass('more_colors').empty().html(out + '</tr>');
                jQuery('#' + id + '_colorPreview').attr('colspan', 8);
                jQuery('#' + id + '_colorOriginal').attr('colspan', 8);
            } else {
                var rgb = [0, 0, 0],
                    i = 0,
                    j = -1;
                while (rgb[0] < 0xF || rgb[1] < 0xF || rgb[2] < 0xF) {
                    if (i % 18 == 0) out += (i > 0 ? '</tr>' : '') + '<tr>';
                    i++;
                    out += '<td style="background-color:' + trx_addons_components2hex(rgb[0] * 16 + rgb[0], rgb[1] * 16 + rgb[1], rgb[2] * 16 + rgb[2]) + '">&nbsp;</td>';
                    rgb[2] += 3;
                    if (rgb[2] > 0xF) {
                        rgb[1] += 3;
                        if (rgb[1] > (j === 0 ? 6 : 0xF)) {
                            rgb[0] += 3;
                            if (rgb[0] > 0xF) {
                                if (j === 0) {
                                    j = 1;
                                    rgb[0] = 0;
                                    rgb[1] = 9;
                                    rgb[2] = 0;
                                } else {
                                    break;
                                }
                            } else {
                                rgb[1] = (j < 1 ? 0 : 9);
                                rgb[2] = 0;
                            }
                        } else {
                            rgb[2] = 0;
                        }
                    }
                }
                thead.addClass('more_colors').empty().html(out + '<td style="background-color:#ffffff" colspan="8">&nbsp;</td></tr>');
                jQuery('#' + id + '_colorPreview').attr('colspan', 9);
                jQuery('#' + id + '_colorOriginal').attr('colspan', 9);
            }
            jQuery('#' + id + ' table.colorPickerTable thead td').css({
                'width': '12px',
                'height': '14px',
                'border': '1px solid #000',
                'cursor': 'pointer'
            });
            e.preventDefault();
            return false;
        });
        jQuery(document.createElement("div")).attr("id", id + "_Bg").on('click', function(e) {
            jQuery("#" + id + "_Bg").fadeOut(500);
            jQuery("#" + id).fadeOut(500);
            e.preventDefault();
            return false;
        }).appendTo("body");
        jQuery('#' + id + ' table.colorPickerTable thead td').css({
            'width': '12px',
            'height': '14px',
            'border': '1px solid #000',
            'cursor': 'pointer'
        });
        jQuery('#' + id + ' table.colorPickerTable').css({
            'border-collapse': 'collapse'
        });
        jQuery('#' + id).css({
            'border': '1px solid #ccc',
            'background': '#333',
            'padding': '5px',
            'color': '#fff'
        });
        jQuery('#' + id + '_colorPreview').css({
            'height': '50px'
        });
        return id;
    };
    window.trx_addons_color_picker_show = function(id, fld, func) {
        if (id === null || id === '') {
            id = jQuery('.iColorPickerTable').attr('id');
        }
        var eICP = fld.offset();
        var w = jQuery('#' + id).width();
        var h = jQuery('#' + id).height();
        var l = eICP.left + w < jQuery(window).width() - 10 ? eICP.left : jQuery(window).width() - 10 - w;
        var t = eICP.top + fld.outerHeight() + h < jQuery(document).scrollTop() + jQuery(window).height() - 10 ? eICP.top + fld.outerHeight() : eICP.top - h - 13;
        jQuery("#" + id).data({
            field: fld,
            func: func
        }).css({
            'top': t + "px",
            'left': l + "px",
            'position': 'absolute',
            'z-index': 999999
        }).fadeIn(500);
        jQuery("#" + id + "_Bg").css({
            'position': 'fixed',
            'z-index': 999998,
            'top': 0,
            'left': 0,
            'width': '100%',
            'height': '100%'
        }).fadeIn(500);
        var def = fld.val().substr(0, 1) == '#' ? fld.val() : trx_addons_rgb2hex(fld.css('backgroundColor'));
        jQuery('#' + id + '_colorPreview input,#' + id + '_colorOriginal input').val(def);
        jQuery('#' + id + '_colorPreview,#' + id + '_colorOriginal').css('background', def);
    };
    window.trx_addons_googlemap_loaded = function() {};
    window.trx_addons_prepare_css_value = function(val) {
        if (val !== '' && val != 'inherit') {
            var parts = ('' + val).split(' ');
            for (var i = 0; i < parts.length; i++) {
                if (parts[i] === '') {
                    continue;
                }
                var ed = ('' + parts[i]).slice(-1);
                if ('0' <= ed && ed <= '9') {
                    parts[i] += 'px';
                }
            }
            val = parts.join(' ');
        }
        return val;
    };
    window.trx_addons_units2px = function(val, block, dir) {
        var value = parseFloat(val);
        var unit = ('' + val).replace(('' + value), '').toLowerCase();
        if (unit) {
            if (unit == 'vw') {
                value = Math.round(value * trx_addons_window_width() / 100);
            } else if (unit == 'vh') {
                value = Math.round(value * trx_addons_window_height() / 100);
            } else if (unit == '%' && block && block.length) {
                value = Math.round(value * (dir == 'x' ? block.eq(0).outerWidth() : block.eq(0).outerHeight()) / 100);
            } else if (unit == 'em' && block && block.length) {
                value = parseFloat(getComputedStyle(block.get(0))['fontSize']) * value;
            } else if (unit == 'rem') {
                value = parseFloat(getComputedStyle($body.get(0))['fontSize']) * value;
            }
        }
        return value;
    };
    window.trx_addons_get_css_from_atts = function(atts, allowed) {
        var css = '',
            rule = '',
            atts_with_units = trx_addons_apply_filters('trx_addons_filter_atts_with_units', ['margin', 'padding', 'border-radius', 'border-width', 'font-size', 'line-height', 'letter-spacing', 'width', 'height', 'top', 'right', 'bottom', 'left']);
        for (var k in allowed) {
            if (allowed[k] && (atts.hasOwnProperty(k) || typeof allowed[k] == 'object' && allowed[k].hasOwnProperty('default'))) {
                rule = typeof allowed[k] == 'object' ? allowed[k]['rule'] : allowed[k];
                if (typeof allowed[k] == 'object') {
                    css += rule + ':' + (atts[k] ? (atts_with_units.indexOf(rule) >= 0 ? trx_addons_prepare_css_value(atts[k]) : atts[k]) : (atts_with_units.indexOf(rule) >= 0 ? trx_addons_prepare_css_value(allowed[k]['default']) : allowed[k]['default'])) + ';';
                } else {
                    css += rule + ':' + (atts_with_units.indexOf(rule) >= 0 ? trx_addons_prepare_css_value(atts[k]) : atts[k]) + ';';
                }
            }
        }
        return css;
    };
    window.trx_addons_get_object_property = function(obj, property, defa) {
        var rez = defa === undefined ? false : defa,
            props = property.split('.'),
            cur = obj;
        if (typeof cur == 'object') {
            for (var i = 0; i < props.length; i++) {
                if (cur.hasOwnProperty(props[i])) {
                    cur = cur[props[i]];
                    if (i == props.length - 1) {
                        rez = cur;
                    }
                } else {
                    break;
                }
            }
        }
        return rez;
    };
    window.trx_addons_object_clone = function(obj) {
        var copy;
        if (null === obj || "object" != typeof obj) {
            return obj;
        }
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }
        if (obj instanceof Array) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = trx_addons_object_clone(obj[i]);
            }
            return copy;
        }
        if (obj instanceof Object) {
            copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) {
                    copy[attr] = trx_addons_object_clone(obj[attr]);
                }
            }
            return copy;
        }
        return obj;
    };
    window.trx_addons_object_merge = function(o1, o2) {
        for (var i = 1; i < arguments.length; i++) {
            if (arguments[i]) {
                for (var prop in arguments[i]) {
                    if (arguments[i].hasOwnProperty(prop)) {
                        o1[prop] = arguments[i][prop];
                    }
                }
            }
        }
        return o1;
    };
    window.trx_addons_is_object = function(o) {
        return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
    };
    window.trx_addons_object_extend = function() {
        var args = [],
            total = arguments.length;
        while (total--) {
            args[total] = arguments[total];
        }
        var to = Object(args[0]);
        for (var i = 1; i < args.length; i++) {
            var nextSource = args[i];
            if (nextSource !== undefined && nextSource !== null) {
                var keysArray = Object.keys(Object(nextSource));
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        if (trx_addons_is_object(to[nextKey]) && trx_addons_is_object(nextSource[nextKey])) {
                            trx_addons_object_extend(to[nextKey], nextSource[nextKey]);
                        } else if (!trx_addons_is_object(to[nextKey]) && trx_addons_is_object(nextSource[nextKey])) {
                            to[nextKey] = {};
                            trx_addons_object_extend(to[nextKey], nextSource[nextKey]);
                        } else {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
        }
        return to;
    };
    window.trx_addons_array_merge = function(a1, a2) {
        if (a2) {
            for (var i in a2) {
                a1[i] = a2[i];
            }
        }
        return a1;
    };
    window.trx_addons_array_first_key = function(arr) {
        var rez = null;
        for (var i in arr) {
            rez = i;
            break;
        }
        return rez;
    };
    window.trx_addons_array_first_value = function(arr) {
        var rez = null;
        for (var i in arr) {
            rez = arr[i];
            break;
        }
        return rez;
    };
    window.trx_addons_get_class = function(obj) {
        if (obj instanceof Object && !(obj instanceof Array) && !(obj instanceof Function) && obj.constructor) {
            var arr = obj.constructor.toString().match(/function\s*(\w+)/);
            if (arr && arr.length == 2) return arr[1];
        }
        return false;
    };
    window.trx_addons_serialize = function(mixed_val) {
        var obj_to_array = arguments.length == 1 || argument[1] === true;
        switch (typeof(mixed_val)) {
            case "number":
                if (isNaN(mixed_val) || !isFinite(mixed_val)) return false;
                else return (Math.floor(mixed_val) == mixed_val ? "i" : "d") + ":" + mixed_val + ";";
            case "string":
                return "s:" + mixed_val.length + ":\"" + mixed_val + "\";";
            case "boolean":
                return "b:" + (mixed_val ? "1" : "0") + ";";
            case "object":
                if (mixed_val == null) return "N;";
                else if (mixed_val instanceof Array) {
                    var idxobj = {
                        idx: -1
                    };
                    var map = [];
                    for (var i = 0; i < mixed_val.length; i++) {
                        idxobj.idx++;
                        var ser = trx_addons_serialize(mixed_val[i]);
                        if (ser) map.push(trx_addons_serialize(idxobj.idx) + ser);
                    }
                    return "a:" + mixed_val.length + ":{" + map.join("") + "}";
                } else {
                    var class_name = trx_addons_get_class(mixed_val);
                    if (class_name == undefined) return false;
                    var props = new Array();
                    for (var prop in mixed_val) {
                        var ser = trx_addons_serialize(mixed_val[prop]);
                        if (ser) props.push(trx_addons_serialize(prop) + ser);
                    }
                    if (obj_to_array) return "a:" + props.length + ":{" + props.join("") + "}";
                    else return "O:" + class_name.length + ":\"" + class_name + "\":" + props.length + ":{" + props.join("") + "}";
                }
            case "undefined":
                return "N;";
        }
        return false;
    };
    (function($) {
        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            a256 = '',
            r64 = [256],
            r256 = [256],
            i = 0;
        var UTF8 = {
            encode: function(strUni) {
                var strUtf = strUni.replace(/[\u0080-\u07ff]/g, function(c) {
                    var cc = c.charCodeAt(0);
                    return String.fromCharCode(0xc0 | cc >> 6, 0x80 | cc & 0x3f);
                }).replace(/[\u0800-\uffff]/g, function(c) {
                    var cc = c.charCodeAt(0);
                    return String.fromCharCode(0xe0 | cc >> 12, 0x80 | cc >> 6 & 0x3F, 0x80 | cc & 0x3f);
                });
                return strUtf;
            },
            decode: function(strUtf) {
                var strUni = strUtf.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function(c) {
                    var cc = ((c.charCodeAt(0) & 0x0f) << 12) | ((c.charCodeAt(1) & 0x3f) << 6) | (c.charCodeAt(2) & 0x3f);
                    return String.fromCharCode(cc);
                }).replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function(c) {
                    var cc = (c.charCodeAt(0) & 0x1f) << 6 | c.charCodeAt(1) & 0x3f;
                    return String.fromCharCode(cc);
                });
                return strUni;
            }
        };
        while (i < 256) {
            var c = String.fromCharCode(i);
            a256 += c;
            r256[i] = i;
            r64[i] = b64.indexOf(c);
            ++i;
        }

        function code(s, discard, alpha, beta, w1, w2) {
            s = String(s);
            var buffer = 0,
                i = 0,
                length = s.length,
                result = '',
                bitsInBuffer = 0;
            while (i < length) {
                var c = s.charCodeAt(i);
                c = c < 256 ? alpha[c] : -1;
                buffer = (buffer << w1) + c;
                bitsInBuffer += w1;
                while (bitsInBuffer >= w2) {
                    bitsInBuffer -= w2;
                    var tmp = buffer >> bitsInBuffer;
                    result += beta.charAt(tmp);
                    buffer ^= tmp << bitsInBuffer;
                }++i;
            }
            if (!discard && bitsInBuffer > 0) {
                result += beta.charAt(buffer << (w2 - bitsInBuffer));
            }
            return result;
        }
        var Plugin = $.trx_addons_encoder = function(dir, input, encode) {
            return input ? Plugin[dir](input, encode) : dir ? null : this;
        };
        Plugin.btoa = Plugin.encode = function(plain, utf8encode) {
            plain = Plugin.raw === false || Plugin.utf8encode || utf8encode ? UTF8.encode(plain) : plain;
            plain = code(plain, false, r256, b64, 8, 6);
            return plain + '===='.slice((plain.length % 4) || 4);
        };
        Plugin.atob = Plugin.decode = function(coded, utf8decode) {
            coded = String(coded).split('=');
            var i = coded.length;
            do {
                --i;
                coded[i] = code(coded[i], true, r64, a256, 6, 8);
            } while (i > 0);
            coded = coded.join('');
            return Plugin.raw === false || Plugin.utf8decode || utf8decode ? UTF8.decode(coded) : coded;
        };
    }(jQuery));
    window.trx_addons_debounce = function(func, wait, first_call) {
        var timeout;
        if (first_call === undefined) {
            first_call = true;
        }
        return function() {
            var context = this,
                args = arguments;
            var later = function later() {
                timeout = null;
                func.apply(context, args);
            };
            var callNow = !timeout && first_call;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) {
                func.apply(context, args);
            }
        };
    };
    window.trx_addons_throttle = function(func, wait, debounce) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            var throttler = function() {
                timeout = null;
                func.apply(context, args);
            };
            if (debounce) clearTimeout(timeout);
            if (debounce || !timeout) timeout = setTimeout(throttler, wait);
        };
    };
    window.trx_addons_lerp = function(start, end, amt) {
        return (1 - amt) * start + amt * end;
    };
    window.trx_addons_tween_value = function(args) {
        if (args.start == args.end) {
            return null;
        }
        if (!args.time) {
            args.time = 1;
        }
        var t = {
            value: args.start
        };
        if (typeof TweenMax != 'undefined') {
            return TweenMax.to(t, args.time, {
                overwrite: true,
                value: args.end,
                ease: args.ease ? args.ease : Power2.easeOut,
                onUpdate: function() {
                    args.callbacks.onUpdate(t.value);
                },
                onComplete: function() {
                    if (args.callbacks.onComplete) {
                        args.callbacks.onComplete();
                    }
                }
            });
        } else {
            var amount = 0.1;
            var interval = Math.min(args.time * 1000 / 20, Math.max(1, Math.round(args.time * 1000 / (Math.abs(args.end - args.start) / amount))));
            return setInterval(function() {
                t.value = trx_addons_lerp(t.value, args.end, amount);
                args.callbacks.onUpdate(t.value);
                if (Math.abs(t.value - args.end) < 0.0001) {
                    t.value = args.end;
                    args.callbacks.onUpdate(t.value);
                    if (args.callbacks.onComplete) {
                        args.callbacks.onComplete();
                    }
                }
            }, interval);
        }
    };
    window.trx_addons_tween_stop = function(handler) {
        if (typeof TweenMax != 'undefined') {
            if (handler) handler.kill();
        } else {
            if (handler) clearTimeout(handler);
        }
    };
    (function($) {
        if (typeof $.easing['easeInSine'] != 'undefined') return;
        var baseEasings = {};
        $.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(i, name) {
            baseEasings[name] = function(p) {
                return Math.pow(p, i + 2);
            };
        });
        $.extend(baseEasings, {
            Sine: function(p) {
                return 1 - Math.cos(p * Math.PI / 2);
            },
            Circ: function(p) {
                return 1 - Math.sqrt(1 - p * p);
            },
            Elastic: function(p) {
                return p === 0 || p === 1 ? p : -Math.pow(2, 8 * (p - 1)) * Math.sin(((p - 1) * 80 - 7.5) * Math.PI / 15);
            },
            Back: function(p) {
                return p * p * (3 * p - 2);
            },
            Bounce: function(p) {
                var pow2, bounce = 4;
                while (p < ((pow2 = Math.pow(2, --bounce)) - 1) / 11) {}
                return 1 / Math.pow(4, 3 - bounce) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - p, 2);
            }
        });
        $.each(baseEasings, function(name, easeIn) {
            $.easing["easeIn" + name] = easeIn;
            $.easing["easeOut" + name] = function(p) {
                return 1 - easeIn(1 - p);
            };
            $.easing["easeInOut" + name] = function(p) {
                return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn(p * -2 + 2) / 2;
            };
        });
    })(jQuery);
    window.trx_addons_transition_end = function() {
        var e = document.createElement("transitionDetector"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                transition: "transitionend"
            },
            r = "transitionend";
        for (var n in t) {
            if (undefined !== e.style[n]) {
                r = t[n];
                break;
            }
        }
        return r;
    };
    window.trx_addons_animation_end = function() {
        var e = document.createElement("animationDetector"),
            t = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd"
            },
            r = "animationend";
        for (var n in t) {
            if (undefined !== e.style[n]) {
                r = t[n];
                break;
            }
        }
        return r;
    };
    var support = {
            transitions: window.Modernizr ? Modernizr.csstransitions : false,
            animations: window.Modernizr ? Modernizr.cssanimations : false
        },
        trans_end_event_names = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        trans_end_event_name = window.Modernizr ? trans_end_event_names[Modernizr.prefixed('transition')] : trx_addons_transition_end(),
        anima_end_event_names = {
            'WebkitAnimation': 'webkitAnimationEnd',
            'MozAnimation': 'animationend',
            'OAnimation': 'oAnimationEnd',
            'msAnimation': 'MSAnimationEnd',
            'animation': 'animationend'
        },
        anima_end_event_name = window.Modernizr ? anima_end_event_names[Modernizr.prefixed('animation')] : trx_addons_animation_end();
    window.trx_addons_on_end_transition = function(el, callback, timeout) {
        var on_end_callback = function(e) {
            if (support.transitions) {
                if (e.target != this) {
                    return;
                }
                this.removeEventListener(trans_end_event_name, on_end_callback);
            }
            if (callback && typeof callback === 'function') {
                callback.call(this);
            }
        };
        if (support.transitions) {
            el.addEventListener(trans_end_event_name, on_end_callback, false);
        } else {
            setTimeout(function() {
                if (callback && typeof callback === 'function') {
                    callback.call(this);
                }
            }, timeout || 0);
        }
    };
    window.trx_addons_on_end_animation = function(el, callback, timeout) {
        var on_end_callback = function(e) {
            if (support.animations) {
                if (e.target != this) {
                    return;
                }
                this.removeEventListener(anima_end_event_name, on_end_callback);
            }
            if (callback && typeof callback === 'function') {
                callback.call(this);
            }
        };
        if (support.animations) {
            el.addEventListener(anima_end_event_name, on_end_callback, false);
        } else {
            setTimeout(function() {
                if (callback && typeof callback === 'function') {
                    callback.call(this);
                }
            }, timeout || 0);
        }
    };
    var trx_addons_observers = {};
    window.trx_addons_create_observer = function(id, obj, callback, args) {
        if (typeof window.MutationObserver !== 'undefined' && obj && obj.length) {
            if (typeof trx_addons_observers[id] == 'undefined') {
                var defa = {
                    attributes: false,
                    childList: true,
                    subtree: true
                };
                if (args) {
                    defa = trx_addons_object_merge(defa, args);
                }
                trx_addons_observers[id] = {
                    observer: new MutationObserver(callback),
                    obj: obj.get(0)
                };
                trx_addons_observers[id].observer.observe(trx_addons_observers[id].obj, defa);
            }
            return true;
        }
        return false;
    };
    window.trx_addons_remove_observer = function(id) {
        if (typeof window.MutationObserver !== 'undefined') {
            if (typeof trx_addons_observers[id] !== 'undefined') {
                trx_addons_observers[id].observer.disconnect();
                delete trx_addons_observers[id];
            }
            return true;
        }
        return false;
    };
    window.trx_addons_check_mutations = function(mutations, selector, action) {
        var rez = false;
        if (typeof mutations != 'object' || !mutations.hasOwnProperty('length') || !mutations.length) {
            return rez;
        }
        var nodes = false;
        for (var i = 0; i < mutations.length; i++) {
            nodes = action == 'add' ? mutations[i].addedNodes : mutations[i].removedNodes;
            for (var n = 0; n < nodes.length; n++) {
                var $node = jQuery(nodes[n]);
                if (selector.charAt(0) == '.' && $node.hasClass(selector.slice(1)) || selector.charAt(0) == '#' && $node.attr('id') == selector.slice(1)) {
                    rez = true;
                    break;
                }
            }
            if (rez) break;
        }
        return rez;
    };
    var trx_addons_sticky_observers = {};
    window.trx_addons_sticky_observer_create = function(id, obj, callback, args) {
        if (typeof window.IntersectionObserver !== 'undefined' && obj && obj.length) {
            if (typeof trx_addons_sticky_observers[id] == 'undefined') {
                var defa = {
                    root: null,
                    rootMargin: (1 + trx_addons_fixed_rows_height()) + 'px 0px 0px 0px',
                    threshold: 1
                };
                if (args) {
                    defa = trx_addons_object_merge(defa, args);
                }
                trx_addons_sticky_observers[id] = {
                    observer: new IntersectionObserver(function(entries) {
                        entries.forEach(function(entry) {
                            var is_sticky = entry.isIntersecting && entry.intersectionRatio >= 1;
                            jQuery(entry.target).toggleClass('trx_addons_is_sticky', is_sticky);
                            if (callback && typeof callback === 'function') {
                                callback(entry, is_sticky);
                            }
                        });
                    }, defa),
                    obj: obj.get(0)
                };
                trx_addons_sticky_observers[id].observer.observe(trx_addons_sticky_observers[id].obj);
            }
            return true;
        }
        return false;
    };
    window.trx_addons_sticky_observer_remove = function(id) {
        if (typeof window.IntersectionObserver !== 'undefined') {
            if (typeof trx_addons_sticky_observers[id] !== 'undefined') {
                trx_addons_sticky_observers[id].observer.disconnect();
                delete trx_addons_sticky_observers[id];
            }
            return true;
        }
        return false;
    };
    var filters = {};
    var allow_wp_filters = true;
    window.trx_addons_add_filter = function(filter, callback, priority) {
        if (priority === undefined) priority = 10;
        if (allow_wp_filters && typeof wp != 'undefined' && typeof wp.hooks != 'undefined' && typeof wp.hooks.addFilter != 'undefined') {
            wp.hooks.addFilter(filter, 'trx_addons', callback, priority);
        } else {
            if (!filters[filter]) filters[filter] = {};
            if (!filters[filter][priority]) filters[filter][priority] = [];
            filters[filter][priority].push(callback);
        }
    };
    window.trx_addons_apply_filters = function(filter, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        if (allow_wp_filters && typeof wp != 'undefined' && typeof wp.hooks != 'undefined' && typeof wp.hooks.applyFilters != 'undefined') {
            arg1 = wp.hooks.applyFilters(filter, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
        } else if (typeof filters[filter] == 'object') {
            var keys = Object.keys(filters[filter]).sort();
            for (var i = 0; i < keys.length; i++) {
                for (var j = 0; j < filters[filter][keys[i]].length; j++) {
                    if (typeof filters[filter][keys[i]][j] == 'function') {
                        arg1 = filters[filter][keys[i]][j](arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
                    }
                }
            }
        }
        return arg1;
    };
    window.trx_addons_add_action = function(action, callback, priority) {
        if (allow_wp_filters && typeof wp != 'undefined' && typeof wp.hooks != 'undefined' && typeof wp.hooks.addAction != 'undefined') {
            wp.hooks.addAction(action, 'trx_addons', callback, priority == undefined ? 10 : priority);
        } else {
            trx_addons_add_filter(action, callback, priority);
        }
    };
    window.trx_addons_do_action = function(action, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        if (allow_wp_filters && typeof wp != 'undefined' && typeof wp.hooks != 'undefined' && typeof wp.hooks.doAction != 'undefined') {
            wp.hooks.doAction(action, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
        } else {
            trx_addons_apply_filters(action, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
        }
    };
})();
(function() {
    "use strict";
    jQuery(document).ready(function() {
        var ready_busy = true;
        var vc_init_counter = 0;
        var parallax_controller = null;
        var requestAnimationFrame = trx_addons_request_animation_frame();
        var $window = jQuery(window),
            $document = jQuery(document),
            $html = jQuery('html'),
            $body = jQuery('body');
        var $page_preloader = jQuery('#page_preloader'),
            $scroll_to_top = jQuery('.trx_addons_scroll_to_top'),
            $scroll_progress = $scroll_to_top.find('.trx_addons_scroll_progress');
        var _video_sticky_fade = true;
        var $show_on_scroll, $banner_placeholder, $animated_elements, $animated_hover, $video_sticky, $fixed_columns, $stack_sections, $parallax_wrap, $video_tags, $iframe_tags, $video_autoplay, $video_autoplay_yt, $video_hovers_yt = false;
        var classes = trx_addons_browser_classes();
        for (var ua in classes) {
            if ($body.hasClass('ua_' + ua)) {
                if (!classes[ua]) {
                    $body.removeClass('ua_' + ua);
                }
            } else if (classes[ua]) {
                $body.addClass('ua_' + ua);
            }
        }
        $document.on('action.got_ajax_response', update_jquery_links);
        $document.on('action.init_hidden_elements', update_jquery_links);
        var first_run = true;

        function update_jquery_links(e) {
            if (first_run && e && e.namespace == 'init_hidden_elements') {
                first_run = false;
                return;
            }
            $show_on_scroll = jQuery('.trx_addons_show_on_scroll');
            $banner_placeholder = jQuery('.trx_addons_banner_placeholder');
            $animated_elements = jQuery('[data-post-animation^="animated"]:not(.animated)');
            $animated_hover = jQuery('[data-hover-animation^="animated"]:not(.animated)');
            $video_sticky = jQuery('.trx_addons_video_sticky');
            $fixed_columns = jQuery('.sc_column_fixed');
            $stack_sections = jQuery('.sc_stack_section_on:not(.elementor-element-edit-mode)');
            if ($stack_sections.length > 0) {
                $body.addClass('sc_stack_section_present ' + (window.trx_addons_browser_is_ios() ? 'ua_ios' : 'ua_not_ios'));
            }
            $parallax_wrap = jQuery('.sc_parallax_wrap');
            $video_tags = jQuery('video');
            $iframe_tags = jQuery('iframe');
            if (trx_addons_browser_is_ios()) {
                $video_hovers_yt = jQuery('.video_hover[data-video*="youtu"],.post_video_hover[data-video*="youtu"],.trx_addons_video_list_controller_item[data-video*="youtu"]');
                if ($video_hovers_yt.length > 0) {
                    embedYoutubeAPI();
                }
            }
            trx_addons_find_video_autoplay();
        }
        update_jquery_links();

        function trx_addons_find_video_autoplay() {
            $video_autoplay = jQuery('.with_video_autoplay');
            $video_autoplay_yt = $video_autoplay.find('iframe[src*="youtu"]');
        }
        window.trx_addons_show_preloader = function() {
            if ($page_preloader.length > 0 && (!jQuery.browser || !jQuery.browser.safari) && !$body.hasClass('ua_safari')) {
                $page_preloader.data('done', false);
                $document.trigger('action.page_preloader', [$page_preloader]);
                if (!$page_preloader.data('done')) {
                    $page_preloader.css({
                        display: 'block',
                        opacity: 0
                    }).animate({
                        opacity: $page_preloader.data('opacity')
                    }, 300);
                    setTimeout(trx_addons_hide_preloader, 5000);
                }
            }
        };
        window.trx_addons_hide_preloader = function() {
            if ($page_preloader.length > 0) {
                $page_preloader.data('done', false);
                $document.trigger('action.page_preloader_hide', [$page_preloader]);
                if (!$page_preloader.data('done') && $page_preloader.css('opacity') > 0) {
                    $page_preloader.animate({
                        opacity: 0
                    }, 800, function() {
                        jQuery(this).css({
                            display: 'none'
                        });
                    });
                }
            }
        };
        if ($page_preloader.length > 0) {
            $page_preloader.data('opacity', $page_preloader.css('opacity'));
            $window.on('beforeunload', function(e) {
                if (typeof e.srcElement == 'undefined' || typeof e.srcElement.activeElement == 'undefined' || typeof e.srcElement.activeElement.href == 'undefined' || e.srcElement.activeElement.href.indexOf('//') === 0 || e.srcElement.activeElement.href.indexOf('http:') === 0 || e.srcElement.activeElement.href.indexOf('https:') === 0) {
                    trx_addons_show_preloader();
                }
            });
            $document.on('action.before_new_page_content', function(e, $link, show) {
                if (show || show === undefined) {
                    trx_addons_show_preloader();
                }
            });
            $document.on('action.after_new_page_content', function(e, $link) {
                trx_addons_hide_preloader();
            });
            $document.on('click', 'a', function() {
                var href = jQuery(this).attr('href');
                if (href !== undefined && href.indexOf('//') !== 0 && href.indexOf('http:') !== 0 && href.indexOf('https:') !== 0) {
                    setTimeout(function() {
                        if ($page_preloader.css('display') == 'block') {
                            $page_preloader.css({
                                display: 'none',
                                opacity: 0
                            });
                        }
                    }, 1);
                }
            });
        }
        $document.on('action.init_trx_addons', function() {
            $document.on('keyup', function(e) {
                if (e.keyCode === 27) {
                    jQuery('.sc_layouts_panel_opened').each(function() {
                        trx_addons_close_panel(jQuery(this));
                    });
                }
            });
        });
        trx_addons_intersection_observer_init();
        trx_addons_init_actions();

        function trx_addons_init_actions() {
            if (typeof TRX_ADDONS_STORAGE == 'undefined') {
                window.TRX_ADDONS_STORAGE = {
                    'vc_edit_mode': false,
                    'popup_engine': 'magnific'
                };
            }
            if (TRX_ADDONS_STORAGE['vc_edit_mode'] && jQuery('.vc_empty-placeholder').length === 0 && vc_init_counter++ < 30) {
                setTimeout(trx_addons_init_actions, 200);
                return;
            }
            $document.trigger('action.before_init_trx_addons');
            trx_addons_hide_preloader();
            var msg = jQuery('.trx_addons_message_box_system'),
                msg_delay = 5000;
            if (msg.length > 0) {
                setTimeout(function() {
                    msg.fadeIn().delay(msg_delay).fadeOut();
                }, 1000);
                var login = jQuery('.trx_addons_login_link');
                if (msg.hasClass('trx_addons_message_box_error') && login.length > 0) {
                    setTimeout(function() {
                        login.trigger('click');
                    }, 2000 + msg_delay);
                }
            }
            if (typeof TRX_ADDONS_STORAGE['animate_to_hash'] == 'undefined' && !$body.hasClass('single-product')) {
                TRX_ADDONS_STORAGE['animate_to_hash'] = true;
                setTimeout(function() {
                    var $mc4form = false;
                    if (window.mc4wp_forms_config && window.mc4wp_forms_config.submitted_form && window.mc4wp_forms_config.submitted_form.element_id) {
                        trx_addons_document_animate_to(window.mc4wp_forms_config.submitted_form.element_id);
                    } else if (TRX_ADDONS_STORAGE['animate_to_mc4wp_form_submitted'] && ($mc4form = jQuery('.mc4wp-form-submitted')).length) {
                        trx_addons_document_animate_to($mc4form);
                    } else if (location.hash !== '' && location.hash != '#' && location.hash.indexOf('/') == -1) {
                        var obj = jQuery(location.hash);
                        if (obj.length > 0) {
                            var off = obj.offset().top;
                            if (!isNaN(off) && ((trx_addons_fixed_rows_height() > 0 && off - trx_addons_window_scroll_top() < trx_addons_fixed_rows_height() + 60) || trx_addons_window_scroll_top() === 0)) {
                                trx_addons_document_animate_to(off - trx_addons_fixed_rows_height() - 60);
                            }
                        }
                    }
                }, 600);
            }
            trx_addons_set_cookie('trx_addons_is_retina', trx_addons_is_retina() ? 1 : 0);
            $document.on('action.switch_to_mobile_layout', function() {
                jQuery('[data-hover-animation^="animated"]').each(function() {
                    var $self = jQuery(this);
                    var animation = $self.data('hover-animation');
                    var animation_out = $self.data('animation-out');
                    if (animation_out === undefined) animation_out = "none";
                    $self.removeClass(animation + ' ' + animation_out);
                });
            });
            trx_addons_ready_actions();
            $document.trigger('action.before_ready_trx_addons');
            $document.trigger('action.ready_trx_addons');
            $document.trigger('action.after_ready_trx_addons');
            $document.on('action.init_hidden_elements', function(e, cont) {
                trx_addons_ready_actions(e, cont);
                $window.trigger('scroll');
            });
            var vc_js = false;
            $document.on('vc_js', function() {
                if (!vc_js) {
                    vc_js = true;
                    trx_addons_add_handlers();
                }
            });
            setTimeout(function() {
                if (!vc_js) {
                    trx_addons_add_handlers();
                }
            }, 1);

            function trx_addons_add_handlers() {
                trx_addons_resize_actions();
                $window.on('resize', function() {
                    trx_addons_resize_actions();
                });

                function trx_addons_scroll_start(force) {
                    if (requestAnimationFrame && !force) {
                        if (!TRX_ADDONS_STORAGE['scroll_busy']) {
                            TRX_ADDONS_STORAGE['scroll_busy'] = true;
                            requestAnimationFrame(trx_addons_scroll_actions);
                        }
                    } else {
                        TRX_ADDONS_STORAGE['scroll_busy'] = true;
                        trx_addons_scroll_actions();
                    }
                }
                trx_addons_scroll_start();
                $window.on('scroll', function() {
                    trx_addons_scroll_start();
                });
                if (TRX_ADDONS_STORAGE['smooth_scroll'] > 0 && typeof TweenMax != 'undefined') {
                    var $scroll_target = $window;
                    var scroll_time = trx_addons_apply_filters('trx_addons_filter_smooth_scroll_time', 0.8);
                    var scroll_distance = trx_addons_apply_filters('trx_addons_filter_smooth_scroll_distance', 400);
                    var ie_mobile = -1 !== navigator.userAgent.indexOf("IEMobile"),
                        is_mobile = trx_addons_browser_is_mobile() || $body.hasClass('ua_mobile');
                    var scroll_busy = false;
                    var scroll_coef = trx_addons_apply_filters('trx_addons_filter_smooth_scroll_coef', {
                        start: 0.2,
                        multi: 1.5,
                        max: 1.5,
                        value: 0.2
                    });
                    var scroll_delta = 0;
                    var scroll_tween = null;
                    var clear_scroll_busy = trx_addons_throttle(function() {
                        scroll_busy = false;
                        if (scroll_tween) {
                            scroll_tween.kill();
                            scroll_tween = false;
                        }
                    }, scroll_time * 1000 + 10, true);
                    window.smooth_scroll_listener = function(event) {
                        if (trx_addons_window_width() < 768) {
                            return;
                        }
                        if (!scroll_busy) {
                            var depth = 8;
                            var $target = jQuery(event.target);
                            $scroll_target = $window;
                            while (depth-- >= 0) {
                                if (['scroll', 'auto'].indexOf($target.css('overflow-y')) >= 0) {
                                    $scroll_target = $target;
                                    break;
                                }
                                $target = $target.parents('div,section,nav,ul').eq(0);
                            }
                        }
                        if ($scroll_target != $window) {
                            scroll_busy = true;
                            setTimeout(function() {
                                scroll_busy = false;
                            }, scroll_time + 10);
                            return;
                        }
                        event.preventDefault();
                        var delta = event.wheelDelta / 120 || -event.detail / 3;
                        if (trx_addons_browser_is_ios()) delta = Math.max(-1, Math.min(1, delta));
                        scroll_coef.value = scroll_busy && scroll_delta * delta > 0 ? Math.min(scroll_coef.max, scroll_coef.value * scroll_coef.multi) : scroll_coef.start;
                        scroll_delta = delta;
                        var scroll_top = $scroll_target.scrollTop();
                        var scroll_to = scroll_top - parseInt(delta * scroll_coef.value * scroll_distance, 10);
                        scroll_busy = true;
                        if (scroll_tween) {
                            scroll_tween.kill();
                        }
                        scroll_tween = TweenMax.to($scroll_target, scroll_time, {
                            onStart: function() {
                                scroll_busy = true;
                                clear_scroll_busy();
                                trx_addons_do_action('trx_addons_action_smooth_scroll_start', this, $scroll_target, scroll_to, scroll_time);
                            },
                            onInterrupt: function() {
                                scroll_busy = false;
                                scroll_tween = null;
                                trx_addons_do_action('trx_addons_action_smooth_scroll_interrupt', this, $scroll_target, scroll_to, scroll_time);
                            },
                            onComplete: function() {
                                scroll_busy = false;
                                scroll_tween = null;
                                trx_addons_do_action('trx_addons_action_smooth_scroll_complete', this, $scroll_target, scroll_to, scroll_time);
                            },
                            onUpdate: function() {
                                trx_addons_do_action('trx_addons_action_smooth_scroll_update', this, $scroll_target, scroll_to, scroll_time);
                            },
                            scrollTo: {
                                y: scroll_to,
                                autoKill: true
                            },
                            ease: trx_addons_apply_filters('trx_addons_filter_smooth_scroll_ease', Power1.easeOut),
                            overwrite: true,
                            tween_value: 100
                        });
                    };
                    window.smooth_scroll_disable = function() {
                        if (typeof smooth_scroll_listener !== 'undefined') {
                            window.removeEventListener('mousewheel', smooth_scroll_listener, {
                                passive: false
                            });
                            window.removeEventListener('DOMMouseScroll', smooth_scroll_listener, {
                                passive: false
                            });
                        }
                    };
                    window.smooth_scroll_enable = function() {
                        if (typeof smooth_scroll_listener !== 'undefined') {
                            window.addEventListener('mousewheel', smooth_scroll_listener, {
                                passive: false
                            });
                            window.addEventListener('DOMMouseScroll', smooth_scroll_listener, {
                                passive: false
                            });
                        }
                    };
                    if (!ie_mobile && !$html.hasClass('touch')) {
                        smooth_scroll_enable();
                    }
                }
                typeof window.wpb_prepare_tab_content == "function" && typeof window.wpb_prepare_tab_content_old == "undefined" && (window.wpb_prepare_tab_content_old = window.wpb_prepare_tab_content) && (window.wpb_prepare_tab_content = function(e, ui) {
                    if (typeof ui.newPanel !== 'undefined' && ui.newPanel.length > 0) {
                        $document.trigger('action.init_hidden_elements', [ui.newPanel]);
                    } else if (typeof ui.panel !== 'undefined' && ui.panel.length > 0) {
                        $document.trigger('action.init_hidden_elements', [ui.panel]);
                    }
                    window.wpb_prepare_tab_content_old(e, ui);
                });
                typeof window.vc_accordionActivate == "function" && typeof window.vc_accordionActivate_old == "undefined" && (window.vc_accordionActivate_old = window.vc_accordionActivate) && (window.vc_accordionActivate = function(e, ui) {
                    if (typeof ui.newPanel !== 'undefined' && ui.newPanel.length > 0) {
                        $document.trigger('action.init_hidden_elements', [ui.newPanel]);
                    } else if (typeof ui.panel !== 'undefined' && ui.panel.length > 0) {
                        $document.trigger('action.init_hidden_elements', [ui.panel]);
                    }
                    window.vc_accordionActivate_old(e, ui);
                });
            }
            $document.trigger('action.init_trx_addons');
            $document.trigger('action.after_init_trx_addons');
        }

        function trx_addons_ready_actions(e, container) {
            if (container === undefined) container = $body;
            if (TRX_ADDONS_STORAGE['animate_inner_links'] > 0 && !container.hasClass('animate_to_inited')) {
                container.addClass('animate_to_inited').on('click', 'a', function(e) {
                    var link_obj = jQuery(this);
                    var link_parent = link_obj.parent();
                    if (link_parent.parent().hasClass('trx_addons_tabs_titles') || link_obj.hasClass('trx_addons_panel_link') || link_obj.hasClass('trx_addons_popup_link') || link_parent.hasClass('vc_tta-tab') || link_obj.hasClass('vc_pagination-trigger') || link_obj.hasClass('ui-tabs-anchor') || link_parent.hasClass('vc_tta-panel-title') || link_parent.hasClass('wpb_accordion_header') || link_parent.parents('.wc-tabs').length > 0 || link_parent.hasClass('elementor-tab-title') || link_parent.parents('ul[class*="tabs"]').length > 0) {
                        return true;
                    }
                    var href = link_obj.attr('href');
                    if (!href || href == '#') return true;
                    if (trx_addons_is_local_link(href)) {
                        var pos = href.indexOf('#'),
                            offset = 0;
                        if (pos >= 0) {
                            href = href.substr(pos);
                            if (jQuery(href).length > 0) {
                                if ($body.hasClass('menu_mobile_opened')) {
                                    $body.removeClass('menu_mobile_opened');
                                }
                                $document.trigger('action.trx_addons_inner_links_click', [link_obj, e]);
                                trx_addons_document_animate_to(href);
                                e.preventDefault();
                                return false;
                            }
                        }
                    }
                });
            }
            if (TRX_ADDONS_STORAGE['add_target_blank'] > 0) {
                jQuery('a').filter(function() {
                    return this.hostname && this.hostname !== location.hostname && this.pathname && ['.png', '.jpg', '.gif'].indexOf(this.pathname.slice(-4)) < 0;
                }).each(function() {
                    var link = jQuery(this),
                        rel = link.attr('rel');
                    if (link.attr('target') != '_blank') {
                        link.attr('target', '_blank');
                    }
                    if (!rel || rel.indexOf('nofollow') == -1) {
                        link.attr('rel', (rel ? rel + ' ' : '') + 'nofollow');
                    }
                });
            }
            jQuery('figcaption').each(function() {
                var $self = jQuery(this);
                if ($self.text() === '') {
                    $self.hide();
                }
            });
            if (jQuery.ui && jQuery.ui.tabs) {
                var $tabs = container.find('.trx_addons_tabs:not(.inited)');
                if ($tabs.length > 0) {
                    $tabs.each(function() {
                        var $self = jQuery(this);
                        var init = $self.data('active');
                        if (isNaN(init)) {
                            init = 0;
                            var active = $self.find('> ul > li[data-active="true"]').eq(0);
                            if (active.length > 0) {
                                init = active.index();
                                if (isNaN(init) || init < 0) init = 0;
                            }
                        } else {
                            init = Math.max(0, init);
                        }
                        var disabled = [];
                        $self.find('> ul > li[data-disabled="true"]').each(function() {
                            disabled.push(jQuery(this).index());
                        });
                        $self.addClass('inited').tabs({
                            active: init,
                            disabled: disabled,
                            show: {
                                effect: 'fadeIn',
                                duration: 300
                            },
                            hide: {
                                effect: 'fadeOut',
                                duration: 300
                            },
                            create: function(event, ui) {
                                if (ui.panel.length > 0 && !ready_busy) {
                                    $document.trigger('action.create_tab', [ui.panel]);
                                    $document.trigger('action.init_hidden_elements', [ui.panel]);
                                }
                            },
                            activate: function(event, ui) {
                                if (ui.oldPanel.length > 0 && !ready_busy) {
                                    $document.trigger('action.deactivate_tab', [ui.oldPanel]);
                                }
                                if (ui.newPanel.length > 0 && !ready_busy) {
                                    $document.trigger('action.activate_tab', [ui.newPanel]);
                                    $document.trigger('action.init_hidden_elements', [ui.newPanel]);
                                    $window.trigger('resize');
                                }
                            }
                        });
                    });
                }
            }
            if (jQuery.ui && jQuery.ui.accordion) {
                var $accordion = container.find('.trx_addons_accordion:not(.inited)');
                if ($accordion.length > 0) {
                    $accordion.each(function() {
                        var accordion = jQuery(this);
                        var headers = accordion.data('headers') || 'h5';
                        var height_style = accordion.data('height-style') || 'content';
                        var collapsible = accordion.data('collapsible') || false;
                        var init = accordion.data('active');
                        var active = false;
                        if (isNaN(init)) {
                            init = 0;
                            active = accordion.find(headers + '[data-active="true"]').eq(0);
                            if (active.length > 0) {
                                while (!active.parent().hasClass('trx_addons_accordion')) {
                                    active = active.parent();
                                }
                                init = active.index();
                                if (isNaN(init) || init < 0) init = 0;
                            }
                        } else {
                            init = Math.max(0, init);
                        }
                        accordion.addClass('inited').accordion({
                            active: init,
                            collapsible: collapsible,
                            header: headers,
                            heightStyle: height_style,
                            create: function(event, ui) {
                                if (ui.panel.length > 0 && !ready_busy) {
                                    $document.trigger('action.create_accordion', [ui.panel]);
                                    $document.trigger('action.init_hidden_elements', [ui.panel]);
                                } else if (active !== false && active.length > 0) {
                                    active.find('>' + headers).trigger('click');
                                }
                            },
                            activate: function(event, ui) {
                                if (ui.oldPanel.length > 0 && !ready_busy) {
                                    $document.trigger('action.deactivate_accordion', [ui.oldPanel]);
                                }
                                if (ui.newPanel.length > 0 && !ready_busy) {
                                    $document.trigger('action.activate_accordion', [ui.newPanel]);
                                    $document.trigger('action.init_hidden_elements', [ui.newPanel]);
                                    $window.trigger('resize');
                                }
                            }
                        });
                    });
                }
            }
            var cp = container.find('.trx_addons_color_selector:not(.inited)'),
                cp_created = false;
            if (cp.length > 0) {
                cp.addClass('inited').each(function() {
                    var $self = jQuery(this);
                    if ($self.hasClass('iColorPicker')) {
                        if (!cp_created) {
                            trx_addons_color_picker();
                            cp_created = true;
                        }
                        trx_addons_change_field_colors($self);
                        $self.on('focus', function(e) {
                            trx_addons_color_picker_show(null, jQuery(this), function(fld, clr) {
                                fld.val(clr).trigger('change');
                                trx_addons_change_field_colors(fld);
                            });
                        }).on('change', function(e) {
                            trx_addons_change_field_colors(jQuery(this));
                        });
                    } else if (typeof jQuery.fn.wpColorPicker != 'undefined') {
                        $self.wpColorPicker({
                            change: function(e, ui) {
                                jQuery(e.target).val(ui.color).trigger('change');
                            },
                            clear: function(e) {
                                jQuery(e.target).prev().trigger('change');
                            }
                        });
                    }
                });
            }

            function trx_addons_change_field_colors(fld) {
                var clr = fld.val(),
                    hsb = trx_addons_hex2hsb(clr);
                fld.css({
                    'backgroundColor': clr,
                    'color': hsb['b'] < 70 ? '#fff' : '#000'
                });
            }
            if (jQuery.ui && jQuery.ui.slider) {
                var $range_slider = container.find('.trx_addons_range_slider:not(.inited)');
                if ($range_slider.length > 0) {
                    $range_slider.each(function() {
                        var range_slider = jQuery(this);
                        var linked_field = range_slider.data('linked_field');
                        if (linked_field === undefined) linked_field = range_slider.prev('input[type="hidden"]');
                        else linked_field = jQuery('#' + linked_field);
                        if (linked_field.length == 0) return;
                        var range_slider_cur = range_slider.find('> .trx_addons_range_slider_label_cur');
                        var range_slider_min = range_slider.find('> .trx_addons_range_slider_label_min');
                        var range_slider_max = range_slider.find('> .trx_addons_range_slider_label_max');
                        var range_slider_type = range_slider.data('range');
                        if (range_slider_type === undefined) range_slider_type = 'min';
                        var values = linked_field.val().split(',');
                        var minimum = range_slider.data('min');
                        if (minimum === undefined) minimum = 0;
                        var maximum = range_slider.data('max');
                        if (maximum === undefined) maximum = 0;
                        var step = range_slider.data('step');
                        if (step === undefined) step = 1;
                        var init_obj = {
                            range: range_slider_type,
                            min: minimum,
                            max: maximum,
                            step: step,
                            slide: function(event, ui) {
                                trx_addons_range_slider_update_current_values_position(ui, range_slider_type === 'min' ? [ui.value] : ui.values);
                            },
                            change: function(event, ui) {
                                trx_addons_range_slider_update_current_values_position(ui, range_slider_type === 'min' ? [ui.value] : ui.values);
                            },
                            create: function(event, ui) {
                                trx_addons_range_slider_update_current_values_position(ui, values);
                            }
                        };
                        if (range_slider_type === true) {
                            init_obj.values = values;
                        } else {
                            init_obj.value = values[0];
                        }
                        range_slider.addClass('inited').slider(init_obj);

                        function trx_addons_range_slider_update_current_values_position(ui, cur_values) {
                            linked_field.val(cur_values.join(',')).trigger('change');
                            for (var i = 0; i < cur_values.length; i++) {
                                range_slider_cur.eq(i).html(cur_values[i]).css('left', Math.max(0, Math.min(100, (cur_values[i] - minimum) * 100 / (maximum - minimum))) + '%');
                                if (range_slider_type !== 'min' && range_slider_cur.eq(i).css('display') == 'none') {
                                    if (i == 0) {
                                        range_slider_min.html(cur_values[i]);
                                    } else {
                                        range_slider_max.html(cur_values[i]);
                                    }
                                }
                            }
                        }
                    });
                }
            }
            if (jQuery.fn && jQuery.fn.select2) {
                container.find('.trx_addons_select2:not(.inited)').addClass('inited').select2();
            }
            var $play_on_hover = container.find('.trx_addons_video_hover:not(.inited)');
            var touchstart_just_fired = false;
            if ($play_on_hover.length > 0) {
                $play_on_hover.addClass('inited').on('mouseenter touchstart', function(e) {
                    var $self = jQuery(this);
                    if (!$self.hasClass('trx_addons_video_hover_play') && (e.type != 'touchstart' || !touchstart_just_fired)) {
                        $self.data('trx-addons-user-actions', 1).removeClass('trx_addons_video_hover_pause').addClass('trx_addons_video_hover_play').find('video').get(0).play();
                        touchstart_just_fired = true;
                        setTimeout(function() {
                            touchstart_just_fired = false;
                        }, 300);
                    }
                }).on('mouseleave touchstart', function(e) {
                    var $self = jQuery(this);
                    if ($self.hasClass('trx_addons_video_hover_play') && (e.type != 'touchstart' || !touchstart_just_fired)) {
                        $self.data('trx-addons-user-actions', 1).removeClass('trx_addons_video_hover_play').addClass('trx_addons_video_hover_pause').find('video').get(0).pause();
                        $self.find('.trx_addons_video_subtitle_text').one(typeof window.trx_addons_transition_end != 'undefined' ? trx_addons_transition_end() : 'transitionend', function() {
                            $self.removeClass('trx_addons_video_hover_pause');
                        });
                        touchstart_just_fired = true;
                        setTimeout(function() {
                            touchstart_just_fired = false;
                        }, 300);
                    }
                });
                var $play_on_hover_autoplay = $play_on_hover.find('video[data-autoplay="1"]');
                if ($play_on_hover_autoplay.length > 0) {
                    trx_addons_intersection_observer_add($play_on_hover_autoplay, function(item, enter) {
                        if (item.data('trx-addons-user-actions')) {
                            trx_addons_intersection_observer_remove(item);
                        } else if (enter) {
                            item.addClass('trx_addons_video_hover_play').get(0).play();
                        } else {
                            item.removeClass('trx_addons_video_hover_play').get(0).pause();
                        }
                    });
                }
            }
            var $video_hover = container.find('.trx_addons_video_player.with_cover .video_hover:not(.inited)');
            if ($video_hover.length > 0) {
                $video_hover.addClass('inited').on('click', function(e) {
                    var $self = jQuery(this);
                    if ($self.hasClass('trx_addons_popup_link')) {
                        return true;
                    }
                    trx_addons_insert_video_iframe($self.parents('.trx_addons_video_player').eq(0).addClass('video_play').find('.video_embed'), $self.data('video'));
                    var slider = $self.parents('.slider_swiper').eq(0);
                    if (slider.length > 0) {
                        var id = slider.attr('id');
                        if (typeof TRX_ADDONS_STORAGE['swipers'][id].autoplay != 'undefined') {
                            TRX_ADDONS_STORAGE['swipers'][id].autoplay.stop();
                            id = slider.data('controller');
                            if (id && TRX_ADDONS_STORAGE['swipers'][id + '_swiper']) {
                                TRX_ADDONS_STORAGE['swipers'][id + '_swiper'].autoplay.stop();
                            }
                        }
                    } else {
                        $self.fadeOut();
                    }
                    e.preventDefault();
                    $document.trigger('action.init_hidden_elements', [$self.parents('.trx_addons_video_player').eq(0)]);
                    $window.trigger('resize');
                    return false;
                }).parents('.trx_addons_video_player').on('click', function(e) {
                    var $self = jQuery(this);
                    if (!$self.hasClass('video_play')) {
                        jQuery(this).find('.video_hover').trigger('click');
                        e.preventDefault();
                        return false;
                    }
                });
            }
            var $video_controller = container.find('.trx_addons_video_list_controller_wrap:not(.inited)');
            if ($video_controller.length > 0) {
                $video_controller.addClass('inited').on('click', '.trx_addons_video_list_controller_item > a[href="#"]', function(e) {
                    e.preventDefault();
                    var item = jQuery(this).parent(),
                        video = item.data('video'),
                        title = item.data('title'),
                        video_wrap = item.parents('.trx_addons_video_list').find('.trx_addons_video_list_video_wrap .trx_addons_video_player').parent();
                    if (!item.hasClass('trx_addons_video_list_controller_item_active') && video && video_wrap.length == 1) {
                        item.parent().find('.trx_addons_video_list_controller_item_active').removeClass('trx_addons_video_list_controller_item_active');
                        item.addClass('trx_addons_video_list_controller_item_active');
                        var autoplay = video_wrap.find('.with_video_autoplay');
                        if (autoplay.length) {
                            autoplay.removeClass('with_video_autoplay video_autoplay_inited video_autoplay_started').find('video_frame_controls').remove();
                            trx_addons_intersection_observer_remove(autoplay);
                            trx_addons_find_video_autoplay();
                        }
                        video_wrap.fadeTo(300, 0, function() {
                            video_wrap.height(video_wrap.height());
                            trx_addons_insert_video_iframe(video_wrap, video);
                            if (title) {
                                video_wrap.append(title);
                            }
                            video_wrap.find('video').removeAttr('width').removeAttr('height');
                            $document.trigger('action.init_hidden_elements', [video_wrap]);
                            $window.trigger('resize');
                            video_wrap.height('auto');
                        }).fadeTo(300, 1, function() {
                            if (item.data('autoplay') > 0 && video_wrap.find('.trx_addons_video_player .video_hover').length > 0) {
                                video_wrap.find('.trx_addons_video_player .video_hover').eq(0).trigger('click');
                            }
                        });
                    }
                    return false;
                });
                setTimeout(function() {
                    $video_controller.find('[data-video]').each(function() {
                        var video = jQuery(this).data('video');
                        if (video) {
                            var img = jQuery('img', video);
                            if (img.length) {
                                var obj = new Image();
                                obj.src = img.attr('src');
                            }
                        }
                    });
                }, trx_addons_apply_filters('trx_addons_filter_video_controller_preload_images_timeout', 0));
            }
            $video_sticky.each(function() {
                var video = jQuery(this);
                video.find('.trx_addons_video_sticky_close:not(.inited)').addClass('inited').on('click', function(e) {
                    e.preventDefault();
                    jQuery(this).hide();
                    trx_addons_intersection_observer_remove(video);
                    if (_video_sticky_fade) {
                        video.addClass('trx_addons_video_sticky_on_fade').stop().animate({
                            opacity: 0
                        }, 300, function() {
                            video.parents('.post_featured').removeClass('with_video_sticky_on');
                            video.height('auto').removeClass('trx_addons_video_sticky trx_addons_video_sticky_on trx_addons_video_sticky_on_fade').stop().animate({
                                'opacity': 1
                            }, 500);
                            $video_sticky = jQuery('.trx_addons_video_sticky');
                            $window.trigger('resize');
                        });
                    } else {
                        video.parents('.post_featured').removeClass('with_video_sticky_on');
                        video.height('auto').removeClass('trx_addons_video_sticky trx_addons_video_sticky_on');
                        $video_sticky = jQuery('.trx_addons_video_sticky');
                        $window.trigger('resize');
                    }
                    return false;
                });
                trx_addons_intersection_observer_add(video, function(item, enter, entry) {
                    var video = item,
                        video_top = video.offset().top,
                        video_height = video.height();
                    if (!enter) {
                        if ((typeof entry != 'object' || entry.boundingClientRect.top < 0) && !video.hasClass('trx_addons_video_sticky_on')) {
                            if (video.find('.video_frame').html().trim().length > 30) {
                                video.parents('.post_featured').addClass('with_video_sticky_on');
                                if (_video_sticky_fade) {
                                    video.height(video_height).css('opacity', 0).addClass('trx_addons_video_sticky_on').stop().animate({
                                        opacity: 1
                                    }, 500);
                                } else {
                                    video.height(video_height).addClass('trx_addons_video_sticky_on');
                                }
                            }
                        }
                    } else {
                        if (video.hasClass('trx_addons_video_sticky_on') && !video.hasClass('trx_addons_video_sticky_on_fade')) {
                            if (_video_sticky_fade) {
                                video.addClass('trx_addons_video_sticky_on_fade').stop().animate({
                                    opacity: 0
                                }, 300, function() {
                                    video.parents('.post_featured').removeClass('with_video_sticky_on');
                                    video.height('auto').removeClass('trx_addons_video_sticky_on trx_addons_video_sticky_on_fade').stop().animate({
                                        'opacity': 1
                                    }, 500);
                                    $window.trigger('resize');
                                });
                            } else {
                                video.parents('.post_featured').removeClass('with_video_sticky_on');
                                video.height('auto').removeClass('trx_addons_video_sticky_on');
                                $window.trigger('resize');
                            }
                        }
                    }
                });
            });
            $video_autoplay.each(function() {
                var $self = jQuery(this);
                if ($self.find('iframe[src*="youtu"]').length === 0) {
                    $self.find('.video_frame').addClass('video_frame_visible');
                }
            });
            if (TRX_ADDONS_STORAGE['popup_engine'] == 'pretty') {
                container.find(trx_addons_apply_filters('pretty-init-images', 'a[href$="jpg"]:not(.inited):not([target="_blank"]):not([download])' + ',a[href$="jpeg"]:not(.inited):not([target="_blank"]):not([download])' + ',a[href$="png"]:not(.inited):not([target="_blank"]):not([download])' + ',a[href$="gif"]:not(.inited):not([target="_blank"]):not([download])')).each(function() {
                    var $self = jQuery(this);
                    if (!$self.parent().hasClass('woocommerce-product-gallery__image')) {
                        $self.attr('rel', 'prettyPhoto[slideshow]');
                    }
                });
                var images = container.find(trx_addons_apply_filters('pretty-init-images-selector', 'a[rel*="prettyPhoto"]' + ':not(.inited)' + ':not(.esgbox)' + ':not(.fancybox)' + ':not([target="_blank"])' + ':not([data-rel*="pretty"])' + ':not([rel*="magnific"])' + ':not([data-rel*="magnific"])' + ':not([data-elementor-lightbox-slideshow])' + ':not([data-elementor-open-lightbox="yes"])' + ':not([data-elementor-open-lightbox="default"])')).addClass('inited');
                if (images.length > 0) {
                    try {
                        images.prettyPhoto(trx_addons_apply_filters('pretty-init-images-params', {
                            social_tools: '',
                            theme: 'facebook',
                            deeplinking: false
                        }));
                    } catch (e) {}
                }
            } else if (TRX_ADDONS_STORAGE['popup_engine'] == 'magnific' && typeof jQuery.fn.magnificPopup != 'undefined') {
                container.find(trx_addons_apply_filters('mfp-init-images', 'a[href$="jpg"]:not(.inited):not([target="_blank"]):not([download])' + ',a[href$="jpeg"]:not(.inited):not([target="_blank"]):not([download])' + ',a[href$="png"]:not(.inited):not([target="_blank"]):not([download])' + ',a[href$="gif"]:not(.inited):not([target="_blank"]):not([download])')).each(function() {
                    var $self = jQuery(this);
                    if (trx_addons_apply_filters('mfp-init-images-allow', $self.closest('.cq-dagallery').length === 0 && $self.closest('.woocommerce-product-gallery__image').length === 0 && !$self.hasClass('prettyphoto') && !$self.hasClass('esgbox'), $self)) {
                        $self.attr('rel', 'magnific');
                    }
                });
                var images = container.find(trx_addons_apply_filters('mfp-init-images-selector', 'a[rel*="magnific"]' + ':not(.inited)' + ':not(.esgbox)' + ':not(.fancybox)' + ':not([target="_blank"])' + ':not([download])' + ':not(.prettyphoto)' + ':not([rel*="pretty"])' + ':not([data-rel*="pretty"])' + ':not([data-elementor-lightbox-slideshow])' + ':not([data-elementor-open-lightbox="yes"])' + ':not([data-elementor-open-lightbox="default"])')).addClass('inited');
                if (images.length > 0) {
                    setTimeout(function() {
                        images.off('click.prettyphoto');
                    }, 100);
                    try {
                        images.magnificPopup(trx_addons_apply_filters('mfp-init-images-params', {
                            type: 'image',
                            mainClass: 'mfp-img-mobile',
                            closeOnContentClick: true,
                            closeBtnInside: true,
                            fixedContentPos: true,
                            midClick: true,
                            preloader: true,
                            tLoading: TRX_ADDONS_STORAGE['msg_magnific_loading'],
                            tClose: TRX_ADDONS_STORAGE['msg_magnific_close'],
                            closeMarkup: '<button title="%title%" aria-label="%title%" type="button" class="mfp-close"><span class="mfp-close-icon">&#215;</span></button>',
                            gallery: {
                                enabled: true
                            },
                            image: {
                                tError: TRX_ADDONS_STORAGE['msg_magnific_error'],
                                verticalFit: true,
                                titleSrc: function(item) {
                                    var title = '',
                                        $el = typeof item.el != 'undefined' ? jQuery(item.el) : null;
                                    if ($el && $el.length > 0) {
                                        var $next = $el.next();
                                        if ($next.length > 0 && $next.get(0).tagName == 'FIGCAPTION') {
                                            title = $next.text();
                                        } else if ($el.attr('title')) {
                                            title = $el.attr('title');
                                        } else {
                                            var $img = $el.find('img');
                                            if ($img.length > 0) {
                                                title = $img.attr('alt');
                                                if (!title) {
                                                    title = $img.data('caption');
                                                }
                                            }
                                        }
                                    }
                                    return title;
                                }
                            },
                            zoom: {
                                enabled: true,
                                duration: 300,
                                easing: 'ease-in-out',
                                opener: function(openerElement) {
                                    if (!openerElement.is('img')) {
                                        if (openerElement.parents('.trx_addons_hover').find('img').length > 0) openerElement = openerElement.parents('.trx_addons_hover').find('img');
                                        else if (openerElement.find('img').length > 0) openerElement = openerElement.find('img');
                                        else if (openerElement.siblings('img').length > 0) openerElement = openerElement.siblings('img');
                                        else if (openerElement.parent().parent().find('img').length > 0) openerElement = openerElement.parent().parent().find('img');
                                    }
                                    return openerElement;
                                }
                            },
                            callbacks: {
                                beforeClose: function() {
                                    jQuery('.mfp-figure figcaption').hide();
                                    jQuery('.mfp-figure .mfp-arrow').hide();
                                }
                            }
                        }));
                    } catch (e) {}
                }
                var on_leaving_site = [],
                    in_page_edit_mode = $body.hasClass('elementor-editor-active') || $body.hasClass('wp-admin') || $body.hasClass('block-editor-page');
                container.find('.sc_layouts_popup:not(.inited),.sc_layouts_panel:not(.inited)').each(function() {
                    var $self = jQuery(this),
                        id = $self.attr('id'),
                        show = false;
                    if (!id) return;
                    var is_panel = $self.hasClass('sc_layouts_panel'),
                        link = jQuery('a[href="#' + id + '"],' + (is_panel ? '.trx_addons_panel_link[data-panel-id="' + id + '"]' : '.trx_addons_popup_link[data-popup-id="' + id + '"]'));
                    if (link.length === 0) {
                        $body.append('<a href="#' + id + '" class="trx_addons_hidden"></a>');
                        link = jQuery('a[href="#' + id + '"]');
                    }
                    if ($self.hasClass('sc_layouts_show_on_page_load')) {
                        show = true;
                    } else if ($self.hasClass('sc_layouts_show_on_page_load_once') && trx_addons_get_cookie('trx_addons_show_on_page_load_once_' + id) != '1') {
                        trx_addons_set_cookie('trx_addons_show_on_page_load_once_' + id, '1');
                        show = true;
                    } else if ($self.hasClass('sc_layouts_show_on_page_close') && trx_addons_get_cookie('trx_addons_show_on_page_close_' + id) != '1') {
                        on_leaving_site.push({
                            link: link,
                            id: id
                        });
                    }
                    if (show) {
                        if (!in_page_edit_mode) {
                            setTimeout(function() {
                                link.trigger('click');
                            }, $self.data('delay') > 0 ? $self.data('delay') * 1000 : 0);
                        }
                    }
                    link.addClass(is_panel ? 'trx_addons_panel_link' : 'trx_addons_popup_link').data('panel', $self);
                    $self.addClass('inited').on('click', '.sc_layouts_panel_close', function(e) {
                        trx_addons_close_panel($self);
                        e.preventDefault();
                        return false;
                    });
                });
                if (on_leaving_site.length > 0 && !in_page_edit_mode) {
                    var showed = false;
                    $window.on('mousemove', function(e) {
                        if (showed) return;
                        var y = typeof e.clientY != 'undefined' ? e.clientY : 999;
                        if (y < trx_addons_adminbar_height() + 15) {
                            showed = true;
                            on_leaving_site.forEach(function(item) {
                                item.link.trigger('click');
                                trx_addons_set_cookie('trx_addons_show_on_page_close_' + item.id, '1');
                            });
                        }
                    });
                }
                container.find(trx_addons_apply_filters('mfp-init-popup-selector', ".trx_addons_popup_link:not(.popup_inited)")).addClass('popup_inited').magnificPopup(trx_addons_apply_filters('mfp-init-popup-params', {
                    type: 'inline',
                    focus: 'input',
                    removalDelay: trx_addons_apply_filters('trx_addons_filter_close_popup_timeout', 0),
                    tLoading: TRX_ADDONS_STORAGE['msg_magnific_loading'],
                    tClose: TRX_ADDONS_STORAGE['msg_magnific_close'],
                    closeBtnInside: true,
                    closeMarkup: '<button title="%title%" aria-label="%title%" type="button" class="mfp-close"><span class="mfp-close-icon">&#215;</span></button>',
                    callbacks: {
                        beforeAppend: function() {
                            var $mfp = this;
                            $document.trigger('action.prepare_popup_elements', [$mfp.content, $mfp]);
                        },
                        beforeOpen: function() {
                            var $mfp = this;
                            $document.trigger('action.open_popup_elements', [$mfp.content]);
                            var wrap_animation_in = mfp_get_animation($mfp, 'wrap', 'open'),
                                bg_animation_in = mfp_get_animation($mfp, 'bg', 'open');
                            if (bg_animation_in) {
                                $mfp.bgOverlay.addClass(bg_animation_in);
                            }
                            if (wrap_animation_in) {
                                $mfp.wrap.addClass(wrap_animation_in);
                            }
                        },
                        open: function() {
                            trx_addons_prepare_popup_content(this.content, true);
                        },
                        beforeClose: function() {
                            var $mfp = this;
                            $document.trigger('action.close_popup_elements', [$mfp.content]);
                            var wrap_animation_in = mfp_get_animation($mfp, 'wrap', 'open'),
                                bg_animation_in = mfp_get_animation($mfp, 'bg', 'open'),
                                wrap_animation_out = mfp_get_animation($mfp, 'wrap', 'close'),
                                bg_animation_out = mfp_get_animation($mfp, 'bg', 'close'),
                                delay = wrap_animation_out ? trx_addons_apply_filters('mfp-init-popup-animations-duration', wrap_animation_out.indexOf('faster') != -1 ? 300 : (wrap_animation_out.indexOf('fast') != -1 ? 500 : (wrap_animation_out.indexOf('normal') != -1 ? 800 : (wrap_animation_out.indexOf('slow') != -1 ? 2000 : (wrap_animation_out.indexOf('slower') != -1 ? 3000 : 1000)))), wrap_animation_out) : 0;
                            $mfp.st.removalDelay += delay;
                            if (bg_animation_out) {
                                setTimeout(function() {
                                    $mfp.bgOverlay.removeClass(bg_animation_in).addClass(bg_animation_out);
                                }, $mfp.st.removalDelay - delay);
                            }
                            if (wrap_animation_out) {
                                setTimeout(function() {
                                    $mfp.wrap.removeClass(wrap_animation_in).addClass(wrap_animation_out);
                                }, $mfp.st.removalDelay - delay);
                            }
                        },
                        close: function() {
                            var $mfp = this;
                            trx_addons_close_panel($mfp.content);
                        },
                        resize: function() {
                            var $mfp = this;
                            trx_addons_resize_actions(jQuery($mfp.content));
                        }
                    }
                }));
                var mfp_get_animation = function(mfp, item, event, defa) {
                    var defaults = trx_addons_apply_filters('mfp-init-popup-animations', {
                        'wrap_open': 'fadeIn animated fast',
                        'wrap_close': 'fadeOut animated fast',
                        'bg_open': 'fadeIn animated fast',
                        'bg_close': 'fadeOut animated fast'
                    });
                    return mfp.st.el.attr('data-popup-' + item + '-' + event + '-animation') ? mfp.st.el.attr('data-popup-' + item + '-' + event + '-animation') : trx_addons_apply_filters('mfp-init-popup-' + item + '-' + event + '-animation', defa ? defa : defaults[item + '_' + event]);
                };
                container.find(trx_addons_apply_filters('init-panel-selector', ".trx_addons_panel_link:not(.panel_inited)")).addClass('panel_inited').on('click', function(e) {
                    var panel = jQuery(this).data('panel');
                    if (!panel.hasClass('sc_layouts_panel_opened')) {
                        $document.trigger('action.prepare_popup_elements', [panel]);
                        trx_addons_prepare_popup_content(panel, true);
                        panel.addClass('sc_layouts_panel_opened');
                        $document.trigger('action.opened_popup_elements', [panel]);
                        if (panel.prev().hasClass('sc_layouts_panel_hide_content')) panel.prev().addClass('sc_layouts_panel_opened');
                        $body.addClass('sc_layouts_panel_opened sc_layouts_panel_opened_' + panel.data('panel-position'));
                        var panel_class = panel.data('panel-class');
                        if (panel_class) {
                            $body.addClass(panel_class + '_opened');
                        }
                    } else {
                        trx_addons_close_panel(panel);
                    }
                    e.preventDefault();
                    return false;
                });
                container.find('.sc_layouts_panel_hide_content:not(.inited)').addClass('inited').on('click', function(e) {
                    trx_addons_close_panel(jQuery(this).next());
                    e.preventDefault();
                    return false;
                });
                window.trx_addons_close_panel = function(panel) {
                    if (panel.hasClass('sc_layouts_panel')) {
                        $document.trigger('action.close_popup_elements', [panel]);
                    }
                    setTimeout(function() {
                        panel.removeClass('sc_layouts_panel_opened');
                        if (panel.prev().hasClass('sc_layouts_panel_hide_content')) {
                            panel.prev().removeClass('sc_layouts_panel_opened');
                        }
                        $body.removeClass('sc_layouts_panel_opened sc_layouts_panel_opened_left sc_layouts_panel_opened_right sc_layouts_panel_opened_top sc_layouts_panel_opened_bottom');
                        var panel_class = panel.data('panel-class');
                        if (panel_class) {
                            $body.removeClass(panel_class + '_opened');
                        }
                        if (panel.data('popup-content') !== undefined) {
                            setTimeout(function() {
                                panel.empty();
                            }, 500);
                        }
                    }, trx_addons_apply_filters('trx_addons_filter_close_panel_timeout', panel.hasClass('sc_layouts_panel') && panel.data('animation-delay') !== undefined ? panel.data('animation-delay') : 0, panel));
                };
                window.trx_addons_prepare_popup_content = function(container, autoplay) {
                    var wrapper = jQuery(container);
                    if (wrapper.data('popup-content') === undefined) {
                        var iframe = wrapper.find('iframe');
                        if (wrapper.find('audio').length || wrapper.find('video').length || (iframe.length && ((iframe.data('src') && iframe.data('src').search(/(youtu|vimeo|daily|facebook)/i) > 0) || (iframe.attr('src') && iframe.attr('src').search(/(youtu|vimeo|daily|facebook)/i) > 0)))) {
                            wrapper.data('popup-content', wrapper.html());
                        }
                    } else {
                        wrapper.html(wrapper.data('popup-content'));
                        wrapper.find('.inited').removeClass('inited');
                    }
                    wrapper.find('[data-src]').each(function() {
                        jQuery(this).attr('src', jQuery(this).data('src'));
                    });
                    $document.trigger('action.init_hidden_elements', [wrapper]);
                    $document.trigger('action.init_popup_elements', [wrapper]);
                    if (autoplay) trx_addons_set_autoplay(wrapper);
                    var frame = wrapper.find('.esg-grid');
                    if (frame.length > 0) {
                        var wrappers = [".esg-tc.eec", ".esg-lc.eec", ".esg-rc.eec", ".esg-cc.eec", ".esg-bc.eec"];
                        for (var i = 0; i < wrappers.length; i++) {
                            frame.find(wrappers[i] + '>' + wrappers[i]).unwrap();
                        }
                    }
                    $window.trigger('resize');
                };
            }
            if (TRX_ADDONS_STORAGE['ajax_views'] && !TRX_ADDONS_STORAGE['post_views_counter_inited']) {
                TRX_ADDONS_STORAGE['post_views_counter_inited'] = true;
                $document.on('action.ready_trx_addons', function() {
                    setTimeout(function() {
                        jQuery.post(TRX_ADDONS_STORAGE['ajax_url'], {
                            action: 'post_counter',
                            nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
                            post_id: TRX_ADDONS_STORAGE['post_id'],
                            views: 1
                        }).done(function(response) {
                            var rez = {};
                            try {
                                rez = JSON.parse(response);
                            } catch (e) {
                                rez = {
                                    error: TRX_ADDONS_STORAGE['ajax_error']
                                };
                                console.log(response);
                            }
                            if (rez.error === '') {
                                jQuery('.post_meta_single .post_meta_views .post_meta_number,.sc_layouts_title_meta .post_meta_views .post_meta_number').html(rez.counter);
                            }
                            $document.trigger('action.got_ajax_response', {
                                action: 'post_counter',
                                result: rez
                            });
                        });
                    }, 10);
                });
            }
            var $likes = container.find('a.post_meta_likes:not(.inited),a.comment_counters_likes:not(.inited)');
            if ($likes.length > 0) {
                var likes_busy = false;
                $likes.addClass('inited').on('click', function(e) {
                    if (!likes_busy) {
                        likes_busy = true;
                        var button = jQuery(this);
                        var inc = button.hasClass('enabled') ? 1 : -1;
                        var post_id = button.hasClass('post_meta_likes') ? button.data('postid') : button.data('commentid');
                        var cookie_likes = trx_addons_get_cookie(button.hasClass('post_meta_likes') ? 'trx_addons_likes' : 'trx_addons_comment_likes');
                        if (cookie_likes === undefined || cookie_likes === null) cookie_likes = '';
                        jQuery.post(TRX_ADDONS_STORAGE['ajax_url'], {
                            action: button.hasClass('post_meta_likes') ? 'post_counter' : 'comment_counter',
                            nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
                            post_id: post_id,
                            likes: inc
                        }).done(function(response) {
                            var rez = {};
                            try {
                                rez = JSON.parse(response);
                            } catch (e) {
                                rez = {
                                    error: TRX_ADDONS_STORAGE['msg_ajax_error']
                                };
                                console.log(response);
                            }
                            if (rez.error === '') {
                                var counter = rez.counter;
                                if (inc == 1) {
                                    var title = button.data('title-dislike');
                                    button.removeClass('enabled trx_addons_icon-heart-empty').addClass('disabled trx_addons_icon-heart');
                                    cookie_likes += (cookie_likes.substr(-1) != ',' ? ',' : '') + post_id + ',';
                                } else {
                                    var title = button.data('title-like');
                                    button.removeClass('disabled trx_addons_icon-heart').addClass('enabled trx_addons_icon-heart-empty');
                                    cookie_likes = cookie_likes.replace(',' + post_id + ',', ',');
                                }
                                button.data('likes', counter).attr('title', title).find(button.hasClass('post_meta_likes') ? '.post_meta_number' : '.comment_counters_number').html(counter);
                                trx_addons_set_cookie(button.hasClass('post_meta_likes') ? 'trx_addons_likes' : 'trx_addons_comment_likes', cookie_likes, 365 * 24 * 60 * 60 * 1000);
                            } else {
                                alert(TRX_ADDONS_STORAGE['msg_error_like']);
                            }
                            likes_busy = false;
                            $document.trigger('action.got_ajax_response', {
                                action: button.hasClass('post_meta_likes') ? 'post_counter' : 'comment_counter',
                                result: rez
                            });
                        });
                    }
                    e.preventDefault();
                    return false;
                });
            }
            var $emotions = container.find('.trx_addons_emotions:not(.inited)');
            if ($emotions.length > 0) {
                var emotions_busy = false;
                $emotions.addClass('inited').on('click', '.trx_addons_emotions_item', function(e) {
                    if (!emotions_busy) {
                        emotions_busy = true;
                        var button = jQuery(this);
                        var button_active = button.parent().find('.trx_addons_emotions_active');
                        var post_id = button.data('postid');
                        jQuery.post(TRX_ADDONS_STORAGE['ajax_url'], {
                            action: 'post_counter',
                            nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
                            post_id: post_id,
                            emotion_inc: button.data('slug'),
                            emotion_dec: button_active.length > 0 ? button_active.data('slug') : '',
                        }).done(function(response) {
                            var rez = {};
                            try {
                                rez = JSON.parse(response);
                            } catch (e) {
                                rez = {
                                    error: TRX_ADDONS_STORAGE['msg_ajax_error']
                                };
                                console.log(response);
                            }
                            if (rez.error === '') {
                                var cookie_likes = trx_addons_get_cookie('trx_addons_emotions'),
                                    cookie_likes_new = ',';
                                if (cookie_likes) {
                                    cookie_likes = cookie_likes.split(',');
                                    for (var i = 0; i < cookie_likes.length; i++) {
                                        if (cookie_likes[i] === '') continue;
                                        var tmp = cookie_likes[i].split('=');
                                        if (tmp[0] != post_id) cookie_likes_new += cookie_likes[i] + ',';
                                    }
                                }
                                cookie_likes = cookie_likes_new;
                                if (button_active.length > 0) {
                                    button_active.removeClass('trx_addons_emotions_active');
                                }
                                if (button_active.length == 0 || button.data('slug') != button_active.data('slug')) {
                                    button.addClass('trx_addons_emotions_active');
                                    cookie_likes += (cookie_likes.substr(-1) != ',' ? ',' : '') + post_id + '=' + button.data('slug') + ',';
                                }
                                for (var i in rez.counter) {
                                    button.parent().find('[data-slug="' + i + '"] .trx_addons_emotions_item_number').html(rez.counter[i]);
                                }
                                trx_addons_set_cookie('trx_addons_emotions', cookie_likes, 365 * 24 * 60 * 60 * 1000);
                            } else {
                                alert(TRX_ADDONS_STORAGE['msg_error_like']);
                            }
                            emotions_busy = false;
                            $document.trigger('action.got_ajax_response', {
                                action: 'post_counter',
                                result: rez
                            });
                        });
                    }
                    e.preventDefault();
                    return false;
                });
            }
            var $share_caption = container.find('.socials_share .socials_caption:not(.inited)');
            if ($share_caption.length > 0) {
                $share_caption.each(function() {
                    jQuery(this).addClass('inited').on('click', function(e) {
                        jQuery(this).siblings('.social_items').slideToggle();
                        e.preventDefault();
                        return false;
                    });
                });
            }
            var $share_items = container.find('.socials_share .social_items:not(.inited)');
            if ($share_items.length > 0) {
                $share_items.each(function() {
                    jQuery(this).addClass('inited').on('click', '.social_item_popup', function(e) {
                        var url = jQuery(this).data('link');
                        window.open(url, '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=480, height=400, toolbar=0, status=0');
                        e.preventDefault();
                        return false;
                    }).on('click', '.social_item[data-copy-link-url]', function(e) {
                        var $self = jQuery(this),
                            url = $self.data('copy-link-url');
                        if (url != '') {
                            trx_addons_copy_to_clipboard(url);
                            var msg = $self.data('message') ? $self.data('message') : TRX_ADDONS_STORAGE['msg_copied'];
                            if (msg) {
                                $self.attr('data-tooltip-text', msg);
                                setTimeout(function() {
                                    $self.removeAttr('data-tooltip-text');
                                }, 3000);
                            }
                        }
                        e.preventDefault();
                        return false;
                    });
                });
            }
            $banner_placeholder.each(function() {
                var item = jQuery(this);
                if (item.data('banner-show') == 'permanent') {
                    if (!item.hasClass('inited')) {
                        item.addClass('inited');
                        setTimeout(function() {
                            item.after(item.data('banner'));
                            var banner = item.next();
                            item.remove();
                            if (banner.hasClass('banner_hidden')) {
                                trx_addons_when_images_loaded(banner, function() {
                                    banner.slideDown();
                                });
                            }
                        }, item.data('banner-delay') ? item.data('banner-delay') : 0);
                    }
                } else if (item.data('banner-show') == 'scroll') {
                    trx_addons_intersection_observer_add(item, function(item, enter) {
                        if (!item.hasClass('inited') && enter) {
                            item.addClass('inited');
                            trx_addons_intersection_observer_remove(item);
                            setTimeout(function() {
                                item.after(item.data('banner'));
                                var banner = item.next();
                                item.remove();
                                if (banner.hasClass('banner_hidden')) {
                                    trx_addons_when_images_loaded(banner, function() {
                                        banner.slideDown();
                                    });
                                }
                            }, item.data('banner-delay') ? item.data('banner-delay') : 0);
                        }
                    });
                }
            });
            container.find('.widget ul > li').each(function() {
                var $self = jQuery(this);
                if ($self.find('ul').length > 0) {
                    $self.addClass('has_children');
                }
            });
            container.find('.widget_archive a:not(.inited)').each(function() {
                var $self = jQuery(this).addClass('inited');
                var val = $self.html().split(' ');
                if (val.length > 1) {
                    val[val.length - 1] = '<span>' + val[val.length - 1] + '</span>';
                    $self.html(val.join(' '));
                }
            });
            jQuery('.sc_layouts_menu_nav:not(.inited_cache)').each(function() {
                var $self = jQuery(this).addClass('inited_cache');
                if ($self.find('.current-menu-item').length == 0 || $body.hasClass('blog_template')) {
                    if (TRX_ADDONS_STORAGE['menu_cache'] === undefined) TRX_ADDONS_STORAGE['menu_cache'] = [];
                    var id = $self.attr('id');
                    if (id === undefined) {
                        id = ('sc_layouts_menu_nav_' + Math.random()).replace('.', '');
                        $self.attr('id', id);
                    }
                    TRX_ADDONS_STORAGE['menu_cache'].push('#' + id);
                }
            });
            if (TRX_ADDONS_STORAGE['menu_cache'] && TRX_ADDONS_STORAGE['menu_cache'].length > 0) {
                var href = window.location.href;
                if (href.slice(-1) == '/') {
                    href = href.slice(0, -1);
                }
                var href2 = href.indexOf('#') == -1 && href.indexOf('?') == -1 ? href + '/' : '';
                for (var i = 0; i < TRX_ADDONS_STORAGE['menu_cache'].length; i++) {
                    var menu = jQuery(TRX_ADDONS_STORAGE['menu_cache'][i] + ':not(.prepared)');
                    if (menu.length === 0) {
                        continue;
                    }
                    menu.addClass('prepared');
                    menu.find('li').removeClass('current-menu-ancestor current-menu-parent current-menu-item current_page_item');
                    menu.find('a[href="' + href + '"]' + (href2 ? ',a[href="' + href2 + '"]' : '')).each(function(idx) {
                        var li = jQuery(this).parent();
                        li.addClass('current-menu-item');
                        if (li.hasClass('menu-item-object-page')) {
                            li.addClass('current_page_item');
                        }
                        li = li.parents('li');
                        for (var j = 0; j < li.length; j++) {
                            li.addClass('current-menu-ancestor' + (j == 0 ? ' current-menu-parent' : ''));
                        }
                    });
                }
            }
            jQuery("form:not([data-inited-validation])").attr('data-inited-validation', 1).on('change', 'input,select,textarea', function() {
                var $self = jQuery(this),
                    $wrap = $self.parents('.error_field');
                if ($self.val() !== '') {
                    if ($self.hasClass('error_field')) {
                        $self.removeClass('error_field');
                    } else if ($wrap.length > 0) {
                        $wrap.removeClass('error_field');
                    }
                }
            });
            jQuery("form#commentform:not(.inited_validation)").addClass('inited_validation').on('submit', function(e) {
                var rez = trx_addons_comments_validate(jQuery(this));
                if (!rez) {
                    e.preventDefault();
                }
                return rez;
            });

            function trx_addons_comments_validate(form) {
                form.find('input').removeClass('error_field');
                var comments_args = {
                    error_message_text: TRX_ADDONS_STORAGE['msg_validation_error'],
                    error_message_show: true,
                    error_message_time: 4000,
                    error_message_class: 'trx_addons_message_box trx_addons_message_box_error',
                    error_fields_class: 'error_field',
                    exit_after_first_error: false,
                    rules: [{
                        field: 'comment',
                        min_length: {
                            value: 1,
                            message: TRX_ADDONS_STORAGE['msg_text_empty']
                        }
                    }]
                };
                if (form.find('.comments_author input[aria-required="true"]').length > 0) {
                    comments_args.rules.push({
                        field: 'author',
                        min_length: {
                            value: 1,
                            message: TRX_ADDONS_STORAGE['msg_name_empty']
                        },
                        max_length: {
                            value: 60,
                            message: TRX_ADDONS_STORAGE['msg_name_long']
                        }
                    });
                }
                if (form.find('.comments_email input[aria-required="true"]').length > 0) {
                    comments_args.rules.push({
                        field: 'email',
                        min_length: {
                            value: 1,
                            message: TRX_ADDONS_STORAGE['msg_email_empty']
                        },
                        max_length: {
                            value: 60,
                            message: TRX_ADDONS_STORAGE['msg_email_long']
                        },
                        mask: {
                            value: TRX_ADDONS_STORAGE['email_mask'],
                            message: TRX_ADDONS_STORAGE['msg_email_not_valid']
                        }
                    });
                }
                var error = trx_addons_form_validate(form, comments_args);
                return !error;
            }
            if ($show_on_scroll.length > 0) {
                trx_addons_intersection_observer_add($show_on_scroll);
            }
            if (TRX_ADDONS_STORAGE['disable_animation_on_mobile'] && $body.hasClass('ua_mobile')) {
                jQuery('[data-post-animation^="animated"]').removeAttr('data-post-animation');
                jQuery('[data-hover-animation^="animated"]').removeAttr('data-hover-animation');
                $animated_elements = jQuery('[data-post-animation^="animated"]:not(.animated)');
                $animated_hover = jQuery('[data-hover-animation^="animated"]:not(.animated)');
            }
            if ($animated_elements.length > 0) {
                trx_addons_intersection_observer_add($animated_elements, function(item, enter) {
                    if (!item.hasClass('inited_animation') && enter) {
                        item.addClass('inited_animation');
                        trx_addons_intersection_observer_remove(item);
                        var animation = item.data('post-animation');
                        if (!animation) animation = item.data('animation');
                        setTimeout(function() {
                            item.addClass(animation);
                            item.removeAttr('data-post-animation');
                            $animated_elements = jQuery('[data-post-animation^="animated"]:not(.animated)');
                            $document.trigger('action.start_item_animation', [item]);
                        }, 100 * trx_addons_random(0, 10));
                    }
                });
            }
            container.find('[data-hover-animation^="animated"]').closest('.elementor-column,.post_layout_custom').each(function() {
                var $self = jQuery(this);
                if ($self.hasClass('hover-animation-inited')) return;
                $self.addClass('hover-animation-inited').hover(function(e) {
                    jQuery(this).find('[data-hover-animation^="animated"]').each(function() {
                        var obj = jQuery(this);
                        var animation = obj.data('hover-animation');
                        var animation_in = obj.data('animation-in');
                        if (animation_in == undefined) animation_in = "none";
                        var animation_in_delay = obj.data('animation-in-delay');
                        if (animation_in_delay == undefined) animation_in_delay = 0;
                        var animation_out = obj.data('animation-out');
                        if (animation_out == undefined) animation_out = "none";
                        if (animation_in != 'none') {
                            setTimeout(function() {
                                obj.removeClass(animation + ' ' + animation_out);
                                obj.addClass(animation + ' ' + animation_in);
                            }, animation_in_delay);
                        }
                    });
                }, function(e) {
                    jQuery(this).find('[data-hover-animation^="animated"]').each(function() {
                        var obj = jQuery(this);
                        var animation = obj.data('hover-animation');
                        var animation_in = obj.data('animation-in');
                        if (animation_in == undefined) animation_in = "none";
                        var animation_out = obj.data('animation-out');
                        if (animation_out == undefined) animation_out = "none";
                        var animation_out_delay = obj.data('animation-out-delay');
                        if (animation_out_delay == undefined) animation_out_delay = 0;
                        if (animation_out != 'none') {
                            setTimeout(function() {
                                obj.removeClass(animation + ' ' + animation_in);
                                obj.addClass(animation + ' ' + animation_out);
                            }, animation_out_delay);
                        }
                    });
                });
            });
            if (typeof ScrollMagic != 'undefined') {
                if (parallax_controller === null) {
                    parallax_controller = new ScrollMagic.Controller({
                        globalSceneOptions: {
                            triggerHook: "onEnter",
                            duration: "200%"
                        }
                    });
                }
                $parallax_wrap.each(function() {
                    var $self = jQuery(this),
                        id = $self.attr('id'),
                        speed = $self.data('parallax') ? Number($self.data('parallax')) : 0;
                    if (speed !== 0 && !$self.hasClass('parallax_inited')) {
                        $self.addClass('parallax_inited');
                        if (!id) {
                            id = 'sc_parallax_wrap_' + ('' + Math.random()).replace('.', '');
                            $self.attr('id', id);
                        }
                        var selector = '#' + id + ($self.find('> .wp-caption').length > 0 ? '>.wp-caption' : '') + '>img';
                        new ScrollMagic.Scene({
                            triggerElement: '#' + id
                        }).setTween(selector, {
                            y: speed + "%",
                            ease: Linear.easeNone
                        }).addTo(parallax_controller);
                    }
                });
            }
            if (!$scroll_to_top.hasClass('inited')) {
                $scroll_to_top.addClass('inited').on('click', function(e) {
                    jQuery('html,body').animate({
                        scrollTop: 0
                    }, 'slow');
                    e.preventDefault();
                    return false;
                });
                if ($scroll_progress.length) {
                    $document.on('action.scroll_trx_addons', function() {
                        var prc = trx_addons_document_height() > trx_addons_window_height() ? Math.min(100, Math.max(0, trx_addons_window_scroll_top() / (trx_addons_document_height() - trx_addons_window_height()) * 100)) : 100;
                        if ($scroll_progress.hasClass('trx_addons_scroll_progress_type_vertical')) {
                            $scroll_progress.height(prc + '%');
                        } else if ($scroll_progress.hasClass('trx_addons_scroll_progress_type_horizontal')) {
                            $scroll_progress.width(prc + '%');
                        } else if ($scroll_progress.hasClass('trx_addons_scroll_progress_type_box') || $scroll_progress.hasClass('trx_addons_scroll_progress_type_round')) {
                            var $bar = $scroll_progress.find('.trx_addons_scroll_progress_bar');
                            if ($bar.length === 0) {
                                $scroll_progress.append('<svg viewBox="0 0 50 50">' + ($scroll_progress.hasClass('trx_addons_scroll_progress_type_round') ? '<circle class="trx_addons_scroll_progress_bar" cx="25" cy="25" r="22"></circle>' : '<rect class="trx_addons_scroll_progress_bar" x="3" y="3" width="44" height="44"></rect>') + '</svg>');
                                $bar = $scroll_progress.find('.trx_addons_scroll_progress_bar');
                            }
                            var bar_max = parseFloat($bar.css('stroke-dasharray'));
                            $bar.css('stroke-dashoffset', '' + Math.min(1, 1 - prc / 100) * bar_max);
                        }
                    });
                }
            }
        }

        function trx_addons_intersection_observer_init() {
            if (typeof TRX_ADDONS_STORAGE == 'undefined') return;
            if (typeof IntersectionObserver != 'undefined') {
                if (typeof TRX_ADDONS_STORAGE['intersection_observer'] == 'undefined') {
                    TRX_ADDONS_STORAGE['intersection_observer'] = new IntersectionObserver(function(entries) {
                        entries.forEach(function(entry) {
                            trx_addons_intersection_observer_in_out(jQuery(entry.target), entry.isIntersecting || entry.intersectionRatio > 0 ? 'in' : 'out', entry);
                        });
                    }, {
                        root: null,
                        rootMargin: '0px',
                        threshold: 0
                    });
                }
            } else {
                $window.on('scroll', function() {
                    if (typeof TRX_ADDONS_STORAGE['intersection_observer_items'] != 'undefined') {
                        for (var i in TRX_ADDONS_STORAGE['intersection_observer_items']) {
                            if (!TRX_ADDONS_STORAGE['intersection_observer_items'][i] || TRX_ADDONS_STORAGE['intersection_observer_items'][i].length === 0) {
                                continue;
                            }
                            var item = TRX_ADDONS_STORAGE['intersection_observer_items'][i],
                                item_top = item.offset().top,
                                item_height = item.height();
                            trx_addons_intersection_observer_in_out(item, item_top + item_height > trx_addons_window_scroll_top() && item_top < trx_addons_window_scroll_top() + trx_addons_window_height() ? 'in' : 'out');
                        }
                    }
                });
            }
            window.trx_addons_intersection_observer_in_out = function(item, state, entry) {
                var callback = '';
                if (state == 'in') {
                    if (!item.hasClass('trx_addons_in_viewport')) {
                        item.addClass('trx_addons_in_viewport');
                        callback = item.data('trx-addons-intersection-callback');
                        if (callback) {
                            callback(item, true, entry);
                        }
                    }
                } else {
                    if (item.hasClass('trx_addons_in_viewport')) {
                        item.removeClass('trx_addons_in_viewport');
                        callback = item.data('trx-addons-intersection-callback');
                        if (callback) {
                            callback(item, false, entry);
                        }
                    }
                }
            };
            window.trx_addons_intersection_observer_add = function(items, callback) {
                items.each(function() {
                    var $self = jQuery(this),
                        id = $self.attr('id');
                    if (!$self.hasClass('trx_addons_intersection_inited')) {
                        if (!id) {
                            id = 'io-' + ('' + Math.random()).replace('.', '');
                            $self.attr('id', id);
                        }
                        $self.addClass('trx_addons_intersection_inited');
                        if (callback) {
                            $self.data('trx-addons-intersection-callback', callback);
                        }
                        if (typeof TRX_ADDONS_STORAGE['intersection_observer_items'] == 'undefined') {
                            TRX_ADDONS_STORAGE['intersection_observer_items'] = {};
                        }
                        TRX_ADDONS_STORAGE['intersection_observer_items'][id] = $self;
                        if (typeof TRX_ADDONS_STORAGE['intersection_observer'] !== 'undefined') {
                            TRX_ADDONS_STORAGE['intersection_observer'].observe($self.get(0));
                        }
                    }
                });
            };
            window.trx_addons_intersection_observer_remove = function(items) {
                items.each(function() {
                    var $self = jQuery(this),
                        id = $self.attr('id');
                    if ($self.hasClass('trx_addons_intersection_inited')) {
                        $self.removeClass('trx_addons_intersection_inited');
                        delete TRX_ADDONS_STORAGE['intersection_observer_items'][id];
                        if (typeof TRX_ADDONS_STORAGE['intersection_observer'] !== 'undefined') {
                            TRX_ADDONS_STORAGE['intersection_observer'].unobserve($self.get(0));
                        }
                    }
                });
            };
        }
        window.trx_addons_scroll_actions = function() {
            if (trx_addons_window_scroll_top() > 0) {
                if (!$body.hasClass('trx_addons_page_scrolled')) {
                    $body.addClass('trx_addons_page_scrolled');
                }
            } else if ($body.hasClass('trx_addons_page_scrolled')) {
                $body.removeClass('trx_addons_page_scrolled');
            }
            if ($scroll_to_top.length > 0) {
                if (trx_addons_window_scroll_top() > 100) {
                    if (!$scroll_to_top.hasClass('show')) {
                        $scroll_to_top.addClass('show');
                        $body.addClass('trx_addons_scroll_to_top_show');
                    }
                } else {
                    if ($scroll_to_top.hasClass('show')) {
                        $scroll_to_top.removeClass('show');
                        $body.removeClass('trx_addons_scroll_to_top_show');
                    }
                }
            }
            if (['top', 'bottom', 'fixed'].indexOf(TRX_ADDONS_STORAGE['scroll_progress']) >= 0) {
                trx_addons_show_scroll_progress();
            }
            $show_on_scroll.each(function() {
                var item = jQuery(this);
                if (item.hasClass('trx_addons_in_viewport')) {
                    if (item.offset().top < trx_addons_window_scroll_top() + trx_addons_window_height() * 0.75) {
                        item.removeClass('trx_addons_show_on_scroll').addClass('trx_addons_showed_on_scroll');
                        trx_addons_intersection_observer_remove(item);
                        $show_on_scroll = jQuery('.trx_addons_show_on_scroll');
                    }
                }
            });
            $document.trigger('action.before_scroll_trx_addons');
            $document.trigger('action.scroll_trx_addons');
            $document.trigger('action.after_scroll_trx_addons');
            TRX_ADDONS_STORAGE['scroll_busy'] = false;
        };

        function trx_addons_show_scroll_progress() {
            if (TRX_ADDONS_STORAGE['scroll_progress_status'] == undefined) {
                $body.append('<div class="scroll_progress_wrap scroll_progress_' + TRX_ADDONS_STORAGE['scroll_progress'] + '"><span class="scroll_progress_status"></span></div>');
                TRX_ADDONS_STORAGE['scroll_progress_status'] = jQuery('.scroll_progress_wrap .scroll_progress_status');
                trx_addons_get_scroll_posts();
                TRX_ADDONS_STORAGE['scroll_progress_status'].on('click', function(e) {
                    var prc = e.pageX / jQuery(this).parent().width();
                    if (TRX_ADDONS_STORAGE['scroll_posts'] != undefined && TRX_ADDONS_STORAGE['scroll_posts'].length > 0) {
                        var cur_post = trx_addons_detect_current_scroll_post(),
                            pt = cur_post.data('post-top'),
                            ph = cur_post.data('post-height');
                        trx_addons_document_animate_to(Math.round(ph * prc + pt - wh / 2));
                    } else {
                        trx_addons_document_animate_to(Math.round((trx_addons_document_height() - trx_addons_window_height()) * prc));
                    }
                    e.preventDefault();
                    return false;
                });
            }
            var st = trx_addons_window_scroll_top(),
                wh = trx_addons_window_height(),
                new_width = '0%';
            if (TRX_ADDONS_STORAGE['scroll_posts'] !== undefined && TRX_ADDONS_STORAGE['scroll_posts'].length > 0) {
                var cur_post = trx_addons_detect_current_scroll_post(),
                    pt = cur_post.data('post-top'),
                    ph = cur_post.data('post-height');
                new_width = (st < 10 ? 0 : Math.min(100, Math.round((st + wh / 2 - pt) * 100 / ph))) + '%';
                TRX_ADDONS_STORAGE['scroll_progress_status'].width(new_width);
            } else {
                new_width = Math.min(100, Math.round(st * 100 / (trx_addons_document_height() - wh))) + '%';
                TRX_ADDONS_STORAGE['scroll_progress_status'].width(new_width);
            }
        }

        function trx_addons_detect_current_scroll_post() {
            var cur_post = false;
            TRX_ADDONS_STORAGE['scroll_posts'].each(function() {
                var post = jQuery(this),
                    st = trx_addons_window_scroll_top(),
                    wh = trx_addons_window_height(),
                    pt = post.data('post-top'),
                    ph = post.data('post-height');
                if (pt < st + wh / 2) {
                    cur_post = post;
                }
            });
            if (!cur_post) {
                cur_post = TRX_ADDONS_STORAGE['scroll_posts'].eq(TRX_ADDONS_STORAGE['scroll_posts'].length - 1);
            }
            return cur_post;
        }
        $document.on('action.new_post_added', trx_addons_get_scroll_posts);

        function trx_addons_get_scroll_posts() {
            TRX_ADDONS_STORAGE['scroll_posts'] = (TRX_ADDONS_STORAGE['scroll_posts'] !== undefined && TRX_ADDONS_STORAGE['scroll_posts'].length > 0) || jQuery('.nav-links-single-scroll').length > 0 ? jQuery('.post_item_single') : false;
            trx_addons_get_scroll_posts_dimensions();
        }
        $document.on('action.resize_trx_addons', trx_addons_get_scroll_posts_dimensions);

        function trx_addons_get_scroll_posts_dimensions() {
            if (TRX_ADDONS_STORAGE['scroll_posts'] !== undefined && TRX_ADDONS_STORAGE['scroll_posts'].length > 0) {
                TRX_ADDONS_STORAGE['scroll_posts'].each(function() {
                    var post = jQuery(this);
                    post.data('post-height', post.height()).data('post-top', post.offset().top);
                });
            }
        }
        if (!$body.hasClass('fixed_blocks_sticky')) {
            $document.on('action.resize_trx_addons', trx_addons_fix_column);
            $document.on('action.scroll_trx_addons', trx_addons_fix_column);
            var trx_addons_fix_column = function(e, cont) {
                if ($fixed_columns.length === 0) {
                    return;
                }
                var force = e.namespace == 'resize_trx_addons';
                $fixed_columns.each(function() {
                    var col = jQuery(this),
                        row = col.parent();
                    if (col.attr('class').indexOf('vc_col-lg-') != -1 || col.attr('class').indexOf('vc_col-md-') != -1) {
                        return;
                    } else if (trx_addons_window_width() < TRX_ADDONS_STORAGE['mobile_breakpoint_fixedcolumns_off']) {
                        var old_style = col.data('old_style');
                        if (old_style !== undefined) {
                            col.attr('style', old_style).removeAttr('data-old_style');
                        }
                    } else {
                        var col_height = col.outerHeight();
                        var row_height = row.outerHeight();
                        var row_top = row.offset().top;
                        if (col_height < row_height && trx_addons_window_scroll_top() + trx_addons_fixed_rows_height() > row_top) {
                            var col_init = {
                                'position': 'undefined',
                                'top': 'auto',
                                'bottom': 'auto'
                            };
                            if (typeof TRX_ADDONS_STORAGE['scroll_offset_last'] == 'undefined') {
                                TRX_ADDONS_STORAGE['col_top_last'] = row_top;
                                TRX_ADDONS_STORAGE['scroll_offset_last'] = trx_addons_window_scroll_top();
                                TRX_ADDONS_STORAGE['scroll_dir_last'] = 1;
                            }
                            var scroll_dir = trx_addons_window_scroll_top() - TRX_ADDONS_STORAGE['scroll_offset_last'];
                            scroll_dir = scroll_dir == 0 ? TRX_ADDONS_STORAGE['scroll_dir_last'] : (scroll_dir > 0 ? 1 : -1);
                            var col_big = col_height + 30 >= trx_addons_window_height() - trx_addons_fixed_rows_height(),
                                col_top = col.offset().top;
                            if (col_top < 0) {
                                col_top = TRX_ADDONS_STORAGE['col_top_last'];
                            }
                            if (col_big) {
                                if (scroll_dir != TRX_ADDONS_STORAGE['scroll_dir_last'] && col.css('position') == 'fixed') {
                                    col_init.top = col_top - row_top;
                                    col_init.position = 'absolute';
                                } else if (scroll_dir > 0) {
                                    if (trx_addons_window_scroll_top() + trx_addons_window_height() >= row_top + row_height + 30) {
                                        col_init.bottom = 0;
                                        col_init.position = 'absolute';
                                    } else if (trx_addons_window_scroll_top() + trx_addons_window_height() >= (col.css('position') == 'absolute' ? col_top : row_top) + col_height + 30) {
                                        col_init.bottom = 30;
                                        col_init.position = 'fixed';
                                    }
                                } else {
                                    if (trx_addons_window_scroll_top() + trx_addons_fixed_rows_height() <= col_top) {
                                        col_init.top = trx_addons_fixed_rows_height();
                                        col_init.position = 'fixed';
                                    }
                                }
                            } else {
                                if (trx_addons_window_scroll_top() + trx_addons_fixed_rows_height() >= row_top + row_height - col_height) {
                                    col_init.bottom = 0;
                                    col_init.position = 'absolute';
                                } else {
                                    col_init.top = trx_addons_fixed_rows_height();
                                    col_init.position = 'fixed';
                                }
                            }
                            if (force && col_init.position == 'undefined' && col.css('position') == 'absolute') {
                                col_init.position = 'absolute';
                                if (col.css('top') != 'auto') {
                                    col_init.top = col.css('top');
                                } else {
                                    col_init.bottom = col.css('bottom');
                                }
                            }
                            if (col_init.position != 'undefined') {
                                var style = col.attr('style');
                                if (!style) style = '';
                                if (!col.prev().hasClass('sc_column_fixed_placeholder')) {
                                    col.css(col_init);
                                    TRX_ADDONS_STORAGE['scroll_dir_last'] = 0;
                                    col.before('<div class="sc_column_fixed_placeholder ' + col.attr('class').replace('sc_column_fixed', '') + '"' + (col.data('col') ? ' data-col="' + col.data('col') + '"' : '') + '></div>');
                                }
                                col_init.left = col_init.position == 'fixed' ? col.prev().offset().left : col.prev().position().left;
                                col_init.width = col.prev().width() + parseFloat(col.prev().css('paddingLeft')) + parseFloat(col.prev().css('paddingRight'));
                                if (force || col.css('position') != col_init.position || TRX_ADDONS_STORAGE['scroll_dir_last'] != scroll_dir || col.width() != col_init.width) {
                                    if (col.data('old_style') === undefined) {
                                        col.attr('data-old_style', style);
                                    }
                                    col.css(col_init);
                                }
                            }
                            TRX_ADDONS_STORAGE['col_top_last'] = col_top;
                            TRX_ADDONS_STORAGE['scroll_offset_last'] = trx_addons_window_scroll_top();
                            TRX_ADDONS_STORAGE['scroll_dir_last'] = scroll_dir;
                        } else {
                            var old_style = col.data('old_style');
                            if (old_style !== undefined) {
                                col.attr('style', old_style).removeAttr('data-old_style');
                                if (col.prev().hasClass('sc_column_fixed_placeholder')) {
                                    col.prev().remove();
                                }
                            }
                        }
                    }
                });
            };
        }
        $document.on('action.resize_trx_addons', trx_addons_stack_section);
        $document.on('action.scroll_trx_addons', trx_addons_stack_section);

        function trx_addons_stack_section(e, cont) {
            if ($stack_sections.length === 0) return;
            var force = e.namespace == 'resize_trx_addons',
                wso = trx_addons_window_scroll_top() + trx_addons_fixed_rows_height();
            $stack_sections.each(function(idx) {
                var row = jQuery(this),
                    row_holder = false,
                    row_height = 0,
                    row_top = 0,
                    use_sticky = $body.hasClass('fixed_blocks_sticky') && row.hasClass('sc_stack_section_effect_slide');
                if (trx_addons_window_width() < TRX_ADDONS_STORAGE['mobile_breakpoint_stacksections_off']) {
                    if (row.hasClass('sc_stack_section_fixed')) {
                        row.removeClass('sc_stack_section_fixed').prev().remove();
                        if (!use_sticky) row.css({
                            top: row.data('old-top')
                        });
                    }
                } else {
                    if (row.hasClass('sc_stack_section_fixed')) {
                        row_holder = row.prev();
                        row_height = use_sticky ? row.outerHeight() : row_holder.outerHeight();
                        row_top = row_holder.offset().top;
                        if (row_top > wso) {
                            row.removeClass('sc_stack_section_fixed');
                            if (!use_sticky) {
                                row.css({
                                    top: row.data('old-top')
                                });
                            }
                            if (row.hasClass('sc_stack_section_effect_fade')) {
                                row.css({
                                    'opacity': 0
                                });
                            }
                            row_holder.remove();
                        } else {
                            if (force) {
                                row_height = row.outerHeight();
                                if (!use_sticky) {
                                    row_holder.height(row_height);
                                    row.css({
                                        top: trx_addons_fixed_rows_height() + 'px !important'
                                    });
                                }
                            }
                            if (row.hasClass('sc_stack_section_effect_fade')) {
                                if (wso - row_top <= row_height) {
                                    row.css({
                                        'opacity': Math.max(0, Math.min(1, (wso - row_top) / row_height))
                                    });
                                } else {
                                    row.css({
                                        'opacity': 1
                                    });
                                }
                            }
                        }
                    } else {
                        row_top = row.offset().top;
                        if (row_top <= wso) {
                            if (!use_sticky) {
                                row_height = row.outerHeight();
                                row.data('old-top', row.css('top')).css({
                                    top: trx_addons_fixed_rows_height() + 'px'
                                });
                            }
                            row.before('<div class="sc_stack_section_placeholder"' + (!use_sticky ? ' style="height:' + row_height + 'px;"' : '') + '></div>').addClass('sc_stack_section_fixed');
                        }
                    }
                }
            });
        }

        function trx_addons_stack_section_zoom() {
            $stack_sections.each(function() {
                var targetElement = jQuery(this),
                    zoom = targetElement.hasClass('sc_stack_section_zoom_on'),
                    transparency = targetElement.hasClass('sc_stack_section_transparency_on');
                if (!zoom && !transparency) {
                    return;
                }
                var triggerElement = targetElement.next();
                if (!triggerElement.length || (triggerElement.hasClass('sc_stack_section_on') && !triggerElement.hasClass('sc_stack_section_effect_slide'))) {
                    return;
                }
                if (!TRX_ADDONS_STORAGE['GSAP_Plugin_ScrollTrigger']) {
                    TRX_ADDONS_STORAGE['GSAP_Plugin_ScrollTrigger'] = true;
                    gsap.registerPlugin(ScrollTrigger);
                }
                var timeline = triggerElement.data('stack-section-timeline') ? triggerElement.data('stack-section-timeline') : null;
                if (timeline) {
                    timeline.kill();
                }
                timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: triggerElement,
                        start: "top 75%",
                        end: "top top",
                        scrub: 1
                    }
                });
                var duration = 1,
                    from = {
                        duration: duration
                    },
                    to = {
                        duration: duration
                    };
                if (zoom) {
                    from.scale = "1";
                    to.scale = "0.8";
                }
                if (transparency) {
                    from.opacity = "1";
                    to.opacity = "0";
                }
                timeline.fromTo(targetElement, from, to);
                triggerElement.data('stack-section-timeline', timeline);
            });
        }
        if ($stack_sections.length && window.gsap) {
            trx_addons_stack_section_zoom();
            $document.on('action.resize_trx_addons', trx_addons_stack_section_zoom);
        }
        window.trx_addons_resize_actions = function(cont) {
            if (trx_addons_browser_is_touch()) {
                if (!$body.hasClass('ua_touch')) {
                    $body.addClass('ua_touch');
                }
            } else {
                if ($body.hasClass('ua_touch')) {
                    $body.removeClass('ua_touch');
                }
            }
            if (cont === undefined) cont = $body;
            $document.trigger('action.before_resize_trx_addons', [cont]);
            $document.trigger('action.resize_trx_addons', [cont]);
            $document.trigger('action.after_resize_trx_addons', [cont]);
        };
        $document.on('action.resize_trx_addons', trx_addons_resize_video);

        function trx_addons_resize_video(e, cont) {
            if ($video_tags.length > 0) {
                $video_tags.each(function() {
                    var $self = jQuery(this),
                        classes = $self.attr('class');
                    if ((!TRX_ADDONS_STORAGE['resize_tag_video'] && $self.parents('.mejs-mediaelement').length === 0) || $self.hasClass('trx_addons_noresize') || classes.indexOf('_resize') > 0 || classes.indexOf('_noresize') > 0 || $self.parents('div:hidden,section:hidden,article:hidden').length > 0) {
                        return;
                    }
                    var video = $self.addClass('trx_addons_resize').eq(0);
                    var ratio = (video.data('ratio') !== undefined ? video.data('ratio').split(':') : [16, 9]);
                    ratio = ratio.length != 2 || ratio[0] == 0 || ratio[1] == 0 ? 16 / 9 : ratio[0] / ratio[1];
                    var mejs_cont = video.parents('.mejs-video').eq(0);
                    var mfp_cont = video.parents('.mfp-content').eq(0);
                    var w_attr = video.data('width');
                    var h_attr = video.data('height');
                    if (!w_attr || !h_attr) {
                        w_attr = video.attr('width');
                        h_attr = video.attr('height');
                        if ((!w_attr || !h_attr) && mejs_cont.length > 0) {
                            w_attr = Math.ceil(mejs_cont.width());
                            h_attr = Math.ceil(mejs_cont.height());
                        }
                        if (!w_attr || !h_attr) return;
                        video.data({
                            'width': w_attr,
                            'height': h_attr
                        });
                    }
                    var percent = ('' + w_attr).substr(-1) == '%';
                    w_attr = parseInt(w_attr, 10);
                    h_attr = parseInt(h_attr, 10);
                    var w_real = Math.ceil(mejs_cont.length > 0 ? Math.min(percent ? 10000 : w_attr, mejs_cont.parents('div,article').eq(0).width()) : Math.min(percent ? 10000 : w_attr, video.parents('div,article').eq(0).width()));
                    if (mfp_cont.length > 0) {
                        w_real = Math.max(Math.ceil(mfp_cont.width()), w_real);
                    }
                    var h_real = Math.ceil(percent ? w_real / ratio : w_real / w_attr * h_attr);
                    if (parseInt(video.attr('data-last-width'), 10) == w_real) {
                        return;
                    }
                    if (percent) {
                        video.height(h_real);
                    } else if (video.parents('.wp-video-playlist').length > 0) {
                        if (mejs_cont.length === 0) {
                            video.attr({
                                'width': w_real,
                                'height': h_real
                            });
                        }
                    } else {
                        video.attr({
                            'width': w_real,
                            'height': h_real
                        }).css({
                            'width': w_real + 'px',
                            'height': h_real + 'px'
                        });
                        if (mejs_cont.length > 0) {
                            trx_addons_set_mejs_player_dimensions(video, w_real, h_real);
                        }
                    }
                    video.attr('data-last-width', w_real);
                });
            }
            if (TRX_ADDONS_STORAGE['resize_tag_iframe'] && $iframe_tags.length > 0) {
                $iframe_tags.each(function() {
                    var $self = jQuery(this);
                    if ($self.addClass('trx_addons_resize').parents('div:hidden,section:hidden,article:hidden').length > 0 || $self.hasClass('trx_addons_noresize') || $self.parent().is('rs-bgvideo') || $self.parents('rs-slide').length > 0) {
                        return;
                    }
                    var iframe = $self.eq(0),
                        iframe_src = iframe.attr('src') ? iframe.attr('src') : iframe.data('src');
                    if (iframe_src === undefined || iframe_src.indexOf('soundcloud') > 0) return;
                    var w_attr = iframe.attr('width');
                    var h_attr = iframe.attr('height');
                    if (!w_attr || !h_attr || w_attr <= trx_addons_apply_filters('trx_addons_filter_noresize_iframe_width', 325)) {
                        return;
                    }
                    var ratio = iframe.data('ratio') !== undefined ? iframe.data('ratio').split(':') : (iframe.parent().data('ratio') !== undefined ? iframe.parent().data('ratio').split(':') : (iframe.find('[data-ratio]').length > 0 ? iframe.find('[data-ratio]').data('ratio').split(':') : [w_attr, h_attr]));
                    ratio = ratio.length != 2 || ratio[0] === 0 || ratio[1] === 0 ? 16 / 9 : ratio[0] / ratio[1];
                    var percent = ('' + w_attr).slice(-1) == '%';
                    w_attr = parseInt(w_attr, 10);
                    h_attr = parseInt(h_attr, 10);
                    var par = iframe.parents('div,section').eq(0),
                        contains = iframe.data('contains-in-parent') == '1' || iframe.hasClass('contains-in-parent'),
                        nostretch = iframe.data('no-stretch-to-parent') == '1' || iframe.hasClass('no-stretch-to-parent'),
                        pw = Math.ceil(par.width()),
                        ph = Math.ceil(par.height()),
                        w_real = nostretch ? Math.min(w_attr, pw) : pw,
                        h_real = Math.ceil(percent ? w_real / ratio : w_real / w_attr * h_attr);
                    if (contains && par.css('position') == 'absolute' && h_real > ph) {
                        h_real = ph;
                        w_real = Math.ceil(percent ? h_real * ratio : h_real * w_attr / h_attr);
                    }
                    if (parseInt(iframe.attr('data-last-width'), 10) == w_real) return;
                    iframe.css({
                        'width': w_real + 'px',
                        'height': h_real + 'px'
                    });
                    iframe.attr('data-last-width', w_real);
                });
            }
        }

        function trx_addons_set_mejs_player_dimensions(video, w, h) {
            if (mejs) {
                for (var pl in mejs.players) {
                    if (mejs.players[pl].media.src == video.attr('src')) {
                        if (mejs.players[pl].media.setVideoSize) {
                            mejs.players[pl].media.setVideoSize(w, h);
                        } else if (mejs.players[pl].media.setSize) {
                            mejs.players[pl].media.setSize(w, h);
                        }
                        mejs.players[pl].setPlayerSize(w, h);
                        mejs.players[pl].setControlsSize();
                    }
                }
            }
        }
        var initAPI = false;
        var initEvents = false;
        var process = false;
        var players = [];
        var attrs = [];
        var oldAPI = window.onYouTubeIframeAPIReady;
        var YTdeferred = jQuery.Deferred();
        jQuery.fn.isInViewport = function() {
            var $self = jQuery(this);
            var $panel = $self.data('sc-panel-thumb');
            if (!$panel) {
                $panel = $self.parents('.sc_panel_thumb');
                $self.data('sc-panel-thumb', $panel);
            }
            var rez = trx_addons_apply_filters('trx_addons_filter_element_in_viewport', $panel.length === 0 || $panel.hasClass('sc_panel_thumb_active'), $self);
            if (rez) {
                var elementTop = $self.offset().top;
                var elementBottom = elementTop + $self.outerHeight();
                var viewportTop = trx_addons_window_scroll_top();
                var viewportBottom = viewportTop + trx_addons_window_height();
                rez = elementTop >= viewportTop && elementTop <= viewportBottom || elementBottom >= viewportTop && elementBottom <= viewportBottom;
            }
            return rez;
        };

        function embedYoutubeAPI() {
            if (!initAPI) {
                var tag = document.createElement('script');
                tag.src = 'https://www.youtube.com/iframe_api';
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                initAPI = true;
            }
        }
        window.onYouTubePlayerAPIReady = function() {
            if (oldAPI && typeof oldAPI == 'function') oldAPI();
            YTdeferred.resolve(window.YT);
        };

        function initYoutubePlayer() {
            if (process) return;
            process = true;
            if ($video_autoplay_yt.length) {
                embedYoutubeAPI();
            }
            if (!initAPI) {
                process = false;
                return;
            }
            if (typeof YTdeferred != 'undefined') {
                YTdeferred.done(function(YT) {
                    $video_autoplay_yt.each(function() {
                        var $self = jQuery(this);
                        if ($self.parents('.sc_layouts_submenu:not(.layouts_inited):not(:visible)').length) return;
                        var $frame = $self.parents('.video_frame').eq(0),
                            $wrap = $self.parents('.with_video_autoplay').eq(0),
                            $sticky = $self.parents('.trx_addons_video_sticky_inner').eq(0),
                            isInit = $wrap.hasClass('video_autoplay_inited'),
                            isInView = $wrap.isInViewport(),
                            id = !isInit ? Math.random().toString(36).substr(2, 9) : $wrap.attr('data-uid');
                        if (!isInit) {
                            $self.attr('id', id);
                            $wrap.addClass('video_autoplay_inited').attr('data-uid', id);
                            var videoID = $wrap.data('video-id');
                            if (!videoID) {
                                var src = ($self.data('src') ? $self.data('src') : $self.attr('src')).split('?');
                                videoID = src[0].substring(src[0].indexOf('/embed/') + 7);
                                $wrap.data('video-id', videoID);
                            }
                            if (!videoID) return;
                            $frame.append('<span class="video_frame_overlay"></span>' + '<span class="video_frame_controls">' + '<a class="video_frame_control_stop video_frame_link" href="https://youtube.com/watch?v=' + videoID + '" target="_blank"></a>' + '<span class="video_frame_control_volume video_frame_control_volume_mute"></span>' + '<span class="video_frame_control_state video_frame_control_state_' + ($self.attr('allow') && $self.attr('allow').indexOf('autoplay') >= 0 ? 'pause' : 'play') + '"></span>' + '</span>');
                            trx_addons_intersection_observer_add($wrap, function(item, enter) {
                                initYoutubePlayer();
                            });
                            $frame.find('.video_frame_control_state').on('click', function() {
                                var $self = jQuery(this);
                                $self.toggleClass('video_frame_control_state_play video_frame_control_state_pause');
                                if ($self.hasClass('video_frame_control_state_play')) {
                                    $self.removeClass('video_frame_control_state_upause');
                                    if (typeof players[id].playVideo == 'function') players[id].playVideo();
                                } else {
                                    $self.addClass('video_frame_control_state_upause');
                                    if (typeof players[id].pauseVideo == 'function') players[id].pauseVideo();
                                }
                            });
                            $frame.find('.video_frame_control_stop').on('click', function() {
                                var $self = jQuery(this);
                                $self.siblings('.video_frame_control_state').removeClass('video_frame_control_state_play').addClass('video_frame_control_state_pause');
                                $self.addClass('video_frame_control_state_upause');
                                if (typeof players[id].pauseVideo == 'function') players[id].pauseVideo();
                            });
                            $frame.find('.video_frame_control_volume').on('click', function() {
                                var $self = jQuery(this);
                                $self.toggleClass('video_frame_control_volume_mute video_frame_control_volume_unmute');
                                if ($self.hasClass('video_frame_control_volume_unmute')) {
                                    if (typeof players[id].unMute == 'function') players[id].unMute();
                                } else {
                                    if (typeof players[id].mute == 'function') players[id].mute();
                                }
                            });
                            attrs[id] = {
                                'videoId': videoID,
                                'startSeconds': $self.data('video-start') || trx_addons_apply_filters('trx_addons_filter_youtube_autoplay_start_seconds', -1),
                                'suggestedQuality': 'hd720'
                            };
                            if ($self.data('video-end')) {
                                attrs[id]['endSeconds'] = $self.data('video-end');
                            }
                            players[id] = new YT.Player(this, {
                                playerVars: {
                                    autoplay: 0,
                                    autohide: 1,
                                    modestbranding: 1,
                                    rel: 0,
                                    showinfo: 0,
                                    controls: 0,
                                    disablekb: 1,
                                    enablejsapi: 1,
                                    iv_load_policy: 3,
                                    playsinline: 1,
                                    loop: 1
                                },
                                events: {
                                    'onReady': function onReady(e) {
                                        players[id].mute();
                                    },
                                    'onStateChange': function onStateChange(e) {
                                        if (e.data === 1) {
                                            $wrap.addClass('video_autoplay_started');
                                        } else if (e.data === 0) {
                                            if (attrs[id].startSeconds >= 0) {
                                                players[id].seekTo(attrs[id].startSeconds);
                                            }
                                        }
                                    }
                                }
                            });
                            $frame.data('video-player', players[id]);
                        }
                        if (isInit && isInView && !$frame.hasClass('.video_frame_visible')) {
                            setTimeout(function() {
                                $frame.fadeTo(500, 1.0, function() {
                                    $frame.addClass('video_frame_visible');
                                });
                            }, trx_addons_apply_filters('trx_addons_filter_video_frame_timeout', 0));
                        }
                        var control = $wrap.find('.video_frame_control_state');
                        if (isInit && typeof players[id].playVideo == 'function' && !control.hasClass('video_frame_control_state_upause') && $sticky.length === 0) {
                            if (isInView && control.hasClass('video_frame_control_state_pause')) {
                                control.removeClass('video_frame_control_state_pause').addClass('video_frame_control_state_play');
                                players[id].playVideo();
                            }
                            if (!isInView && control.hasClass('video_frame_control_state_play')) {
                                control.removeClass('video_frame_control_state_play').addClass('video_frame_control_state_pause');
                                players[id].pauseVideo();
                            }
                        }
                    });
                });
            }
            process = false;
        }
        initYoutubePlayer();
        if (!initEvents) {
            initEvents = true;
            $document.on('action.init_hidden_elements action.got_ajax_response action.after_show_submenu action.after_hide_submenu', trx_addons_debounce(function(e) {
                initYoutubePlayer();
            }, 50));
            $document.on('action.start_item_animation', function() {
                setTimeout(function() {
                    initYoutubePlayer();
                }, 10);
            });
        }
        ready_busy = false;
    });
    window.trx_addons_draw_arc_on_canvas = function(item, value) {
        var canvas = item.find('canvas');
        if (canvas.length === 0) return;
        var digits = canvas.next();
        var brd = parseInt(digits.css('border-top-width'), 10);
        var w = Math.ceil(digits.width() + 2 * brd);
        var needRepaint = false;
        if (canvas.attr('width') != w) {
            needRepaint = true;
            canvas.attr({
                'width': w,
                'height': w
            });
        }
        if (item.data('old-value') == value && !needRepaint) return;
        item.data('old-value', value);
        var percent = value * 100 / canvas.data('max-value');
        var angle = 360 * percent / 100;
        var Ar = angle * Math.PI / 180;
        var canvas_dom = canvas.get(0);
        var context = canvas_dom.getContext('2d');
        var r = (w - brd) / 2;
        var cx = w / 2;
        var cy = w / 2;
        context.beginPath();
        context.clearRect(0, 0, w, w);
        context.arc(cx, cy, r, 0, Ar, false);
        context.imageSmoothingEnabled = true;
        context.lineWidth = brd;
        context.strokeStyle = canvas.data('color');
        context.stroke();
    };
})();
jQuery(document).on('action.ready_trx_addons', function() {
    "use strict";
    jQuery('form.trx_addons_popup_form_login:not(.inited)').addClass('inited').on('submit', function(e) {
        var rez = trx_addons_login_validate(jQuery(this));
        if (!rez) {
            e.preventDefault();
        }
        return rez;
    });
    jQuery('form.trx_addons_popup_form_register:not(.inited)').addClass('inited').on('submit', function(e) {
        var rez = trx_addons_registration_validate(jQuery(this));
        if (!rez) {
            e.preventDefault();
        }
        return rez;
    });

    function trx_addons_login_validate(form) {
        form.find('input').removeClass('trx_addons_field_error');
        var error = trx_addons_form_validate(form, {
            error_message_time: 4000,
            exit_after_first_error: true,
            rules: [{
                field: "log",
                min_length: {
                    value: 1,
                    message: TRX_ADDONS_STORAGE['msg_login_empty']
                },
                max_length: {
                    value: 60,
                    message: TRX_ADDONS_STORAGE['msg_login_long']
                }
            }, {
                field: "pwd",
                min_length: {
                    value: 1,
                    message: TRX_ADDONS_STORAGE['msg_password_empty']
                },
                max_length: {
                    value: 60,
                    message: TRX_ADDONS_STORAGE['msg_password_long']
                }
            }]
        });
        if (TRX_ADDONS_STORAGE['login_via_ajax'] && !error) {
            trx_addons_login_ajax_loading(form, true);
            jQuery.post(TRX_ADDONS_STORAGE['ajax_url'], {
                action: 'trx_addons_login_user',
                nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
                redirect_to: form.find('input[name="redirect_to"]').length == 1 ? form.find('input[name="redirect_to"]').val() : '',
                remember: form.find('input[name="rememberme"]').val(),
                user_log: form.find('input[name="log"]').val(),
                user_pwd: form.find('input[name="pwd"]').val()
            }).done(function(response) {
                trx_addons_login_ajax_loading(form, false);
                var rez = {};
                try {
                    rez = JSON.parse(response);
                } catch (e) {
                    rez = {
                        error: TRX_ADDONS_STORAGE['msg_ajax_error']
                    };
                    console.log(response);
                }
                var result = form.find(".trx_addons_message_box").removeClass("trx_addons_message_box_error").removeClass("trx_addons_message_box_success"),
                    result_timeout = 3000;
                if (rez.error === '') {
                    result.addClass("trx_addons_message_box_success").html(TRX_ADDONS_STORAGE['msg_login_success']);
                    setTimeout(function() {
                        if (rez.redirect_to !== '') {
                            location.href = trx_addons_add_to_url(rez.redirect_to.indexOf('action=confirm_email') != -1 ? rez.redirect_to.substr(0, rez.redirect_to.indexOf('?')) : rez.redirect_to, {
                                rnd: ('' + Math.random()).replace('.', '')
                            });
                        } else {
                            location.href = trx_addons_add_to_url(location.href.indexOf('action=confirm_email') != -1 ? TRX_ADDONS_STORAGE['site_url'] : location.href, {
                                rnd: ('' + Math.random()).replace('.', '')
                            });
                        }
                    }, result_timeout);
                } else {
                    result.addClass("trx_addons_message_box_error").html(TRX_ADDONS_STORAGE['msg_login_error'] + (rez.error !== undefined ? '<br>' + rez.error : ''));
                }
                result.fadeIn().delay(result_timeout).fadeOut();
                jQuery(document).trigger(' action.got_ajax_response', {
                    action: 'trx_addons_login_user',
                    result: rez
                });
            });
        }
        return !TRX_ADDONS_STORAGE['login_via_ajax'] && !error;
    }

    function trx_addons_registration_validate(form) {
        form.find('input').removeClass('trx_addons_field_error');
        var error = trx_addons_form_validate(form, {
            error_message_time: 4000,
            exit_after_first_error: true,
            rules: [{
                field: "agree",
                state: {
                    value: 'checked',
                    message: TRX_ADDONS_STORAGE['msg_not_agree']
                },
            }, {
                field: "log",
                min_length: {
                    value: 1,
                    message: TRX_ADDONS_STORAGE['msg_login_empty']
                },
                max_length: {
                    value: 60,
                    message: TRX_ADDONS_STORAGE['msg_login_long']
                }
            }, {
                field: "email",
                min_length: {
                    value: 7,
                    message: TRX_ADDONS_STORAGE['msg_email_not_valid']
                },
                max_length: {
                    value: 60,
                    message: TRX_ADDONS_STORAGE['msg_email_long']
                },
                mask: {
                    value: TRX_ADDONS_STORAGE['email_mask'],
                    message: TRX_ADDONS_STORAGE['msg_email_not_valid']
                }
            }, {
                field: "pwd",
                min_length: {
                    value: 4,
                    message: TRX_ADDONS_STORAGE['msg_password_empty']
                },
                max_length: {
                    value: 60,
                    message: TRX_ADDONS_STORAGE['msg_password_long']
                }
            }, {
                field: "pwd2",
                equal_to: {
                    value: 'pwd',
                    message: TRX_ADDONS_STORAGE['msg_password_not_equal']
                }
            }]
        });
        if (!error) {
            trx_addons_login_ajax_loading(form, true);
            jQuery.post(TRX_ADDONS_STORAGE['ajax_url'], {
                action: 'trx_addons_registration_user',
                nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
                redirect_to: form.find('input[name="redirect_to"]').length == 1 ? form.find('input[name="redirect_to"]').val() : '',
                user_name: form.find('input[name="log"]').val(),
                user_email: form.find('input[name="email"]').val(),
                user_pwd: form.find('input[name="pwd"]').val()
            }).done(function(response) {
                trx_addons_login_ajax_loading(form, false);
                var rez = {};
                try {
                    rez = JSON.parse(response);
                } catch (e) {
                    rez = {
                        error: TRX_ADDONS_STORAGE['msg_ajax_error']
                    };
                    console.log(response);
                }
                var result = form.find(".trx_addons_message_box").removeClass("trx_addons_message_box_error").removeClass("trx_addons_message_box_success"),
                    result_timeout = 3000;
                if (rez.error === '') {
                    result.addClass("trx_addons_message_box_success").html(TRX_ADDONS_STORAGE['msg_registration_success']);
                    if (!TRX_ADDONS_STORAGE['double_opt_in_registration']) {
                        setTimeout(function() {
                            if (rez.redirect_to !== '' && trx_addons_apply_filters('trx_addons_filter_redirect_after_user_registration', false, rez.redirect_to)) {
                                location.href = rez.redirect_to;
                            } else {
                                jQuery('#trx_addons_login_popup .trx_addons_tabs_title_login > a').trigger('click');
                            }
                        }, result_timeout);
                    } else {
                        result_timeout = 5000;
                        setTimeout(function() {
                            jQuery('#trx_addons_login_popup .mfp-close').trigger('click');
                        }, result_timeout);
                    }
                } else {
                    result.addClass("trx_addons_message_box_error").html(TRX_ADDONS_STORAGE['msg_registration_error'] + (rez.error !== undefined ? '<br>' + rez.error : ''));
                }
                result.fadeIn().delay(result_timeout).fadeOut();
                jQuery(document).trigger('action.got_ajax_response', {
                    action: 'trx_addons_registration_user',
                    result: rez
                });
            });
        }
        return false;
    }

    function trx_addons_login_ajax_loading(form, on) {
        var $popup = form.parents(".trx_addons_popup");
        var $loading = $popup.find(".trx_addons_loading");
        if ($loading.length == 0) {
            $popup.append('<div class="trx_addons_loading"></div>');
            $loading = $popup.find(" > .trx_addons_loading");
        }
        if (on) {
            $loading.fadeIn();
        } else {
            $loading.fadeOut();
        }
    }
});
jQuery(document).ready(function() {
    "use strict";
    var $window = jQuery(window),
        $document = jQuery(document),
        $body = jQuery('body');
    var $equal_height, $pagination_infinite, $infinite_posts, $typed_entry;
    $document.on('action.init_hidden_elements', update_jquery_links);
    $document.on('action.got_ajax_response', update_jquery_links);
    var first_run = true;

    function update_jquery_links(e) {
        if (first_run && e && e.namespace == 'init_hidden_elements') {
            first_run = false;
            return;
        }
        $equal_height = jQuery('[data-equal-height],.trx_addons_equal_height');
        $pagination_infinite = jQuery('.sc_item_pagination_infinite');
        $infinite_posts = $pagination_infinite.siblings('.sc_item_posts_container');
        $typed_entry = jQuery('.sc_typed_entry');
    }
    update_jquery_links();
    if (typeof TRX_ADDONS_STORAGE != 'undefined') {
        TRX_ADDONS_STORAGE['pagination_busy'] = false;
    }
    $document.on('action.init_hidden_elements', function() {
        var last_link = false,
            last_link_timer = null;
        jQuery('.sc_item_filters_tabs_open_on_hover:not(.inited)').addClass('inited').on('mouseenter', 'a', function(e) {
            last_link = jQuery(this);
            if (last_link_timer !== null) {
                clearTimeout(last_link_timer);
            }
            last_link_timer = setTimeout(function() {
                last_link.trigger('click');
                last_link_timer = null;
            }, 300);
        });
        var popup_html = {};

        function trx_addons_save_popup_html($obj, restore) {
            $obj.each(function(idx) {
                var id = $obj.eq(idx).attr('id');
                if (!id) {
                    $id = 'sc_popup_' + ('' + Math.random()).replace('.', '');
                    $obj.eq(idx).attr('id', id);
                }
                if (!popup_html.hasOwnProperty(id)) {
                    popup_html[id] = $obj.eq(idx).html();
                } else if (restore) {
                    $obj.eq(idx).html(popup_html[id]);
                }
            });
        }
        jQuery('.sc_item_filters:not(.inited),.sc_item_pagination:not(.inited)').addClass('inited').each(function() {
            var $self = jQuery(this);
            if ($self.hasClass('sc_item_filters')) {
                trx_addons_save_popup_html($self.parent().find('.sc_layouts_popup'));
            }
        }).on('click', 'a', function(e) {
            var link = jQuery(this);
            if (!link.hasClass('active') && !TRX_ADDONS_STORAGE['pagination_busy']) {
                var link_wrap = link.parents('.sc_item_filters,.sc_item_pagination'),
                    load_more = link_wrap.hasClass('sc_item_pagination_load_more'),
                    sc = link_wrap.parent(),
                    set_min_height = trx_addons_apply_filters('trx_addons_filter_set_min_height_on_switch_tabs', true, sc),
                    posts = sc.find('.sc_item_posts_container,.sc_item_slider'),
                    pagination_wrap = sc.find('.sc_item_pagination');
                if (link_wrap.hasClass('sc_item_filters')) {
                    var link_active = link_wrap.find('a.active');
                    if (!link_active.data('posts')) {
                        link_active.data('posts', posts.html());
                    }
                    link_active.data('pagination', pagination_wrap.length > 0 ? pagination_wrap.clone() : false);
                }
                if (link_wrap.hasClass('sc_item_filters') && link.data('posts') !== undefined) {
                    if (set_min_height) {
                        sc.data('min-height', sc.css('min-height')).css('min-height', sc.height());
                    }
                    link_active.removeClass('active').parent().removeClass('sc_item_filters_tabs_active');
                    link.addClass('active').parent().addClass('sc_item_filters_tabs_active');
                    if (pagination_wrap.length > 0) {
                        pagination_wrap.fadeOut();
                    }
                    posts.animate({
                        opacity: 0
                    }, 200, function() {
                        $document.trigger('action.before_remove_content', [sc]);
                        trx_addons_replace_posts(posts, link.data('posts'));
                        trx_addons_replace_pagination(pagination_wrap, link.data('pagination'), posts);
                        $document.trigger('action.after_add_content', [sc]);
                        posts.find('.inited').removeClass('inited');
                        posts.find('.popup_inited').removeClass('popup_inited');
                        posts.find('.swiper-container-initialized').removeClass('swiper-container-initialized');
                        pagination_wrap.find('.inited').removeClass('inited');
                        $document.trigger('action.init_hidden_elements', [sc]);
                        $window.trigger('resize');
                        setTimeout(function() {
                            posts.animate({
                                opacity: 1
                            }, 200, function() {
                                if (sc.data('min-height') && set_min_height) {
                                    sc.css('min-height', sc.data('min-height'));
                                }
                            });
                        }, 400);
                    });
                } else {
                    if (load_more) {
                        var page = Number(link.data('page'));
                        var max_page = Number(link.data('max-page'));
                        if (page > max_page) {
                            pagination_wrap.addClass('all_items_loaded').hide();
                            return false;
                        }
                        link_wrap.addClass('loading');
                    } else {
                        posts.append('<div class="trx_addons_loading"></div>');
                    }
                    TRX_ADDONS_STORAGE['pagination_busy'] = true;
                    jQuery.post(TRX_ADDONS_STORAGE['ajax_url'], {
                        action: 'trx_addons_item_pagination',
                        nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
                        params: pagination_wrap.length > 0 ? pagination_wrap.data('params') : link_wrap.data('params'),
                        page: link.parents('.sc_item_filters').length > 0 ? 1 : link.data('page'),
                        filters_active: link.parents('.sc_item_filters').length > 0 ? link.data('tab') : (link_wrap.siblings('.sc_item_filters').find('a.active').length > 0 ? link_wrap.siblings('.sc_item_filters').find('a.active').data('tab') : 'all')
                    }).done(function(response) {
                        var rez = {};
                        if (response === '' || response === 0) {
                            rez = {
                                error: TRX_ADDONS_STORAGE['msg_ajax_error']
                            };
                        } else {
                            try {
                                rez = JSON.parse(response);
                            } catch (e) {
                                rez = {
                                    error: TRX_ADDONS_STORAGE['msg_ajax_error']
                                };
                                console.log(response);
                            }
                        }
                        if (rez.error === '') {
                            if (rez.css !== '') {
                                var selector = 'trx_addons-inline-styles-inline-css',
                                    inline_css = jQuery('#' + selector);
                                if (inline_css.length === 0) jQuery('body').append('<style id="' + selector + '" type="text/css">' + rez.css + '</style>');
                                else inline_css.append(rez.css);
                            }
                            if (load_more) {
                                posts.removeClass('columns_in_single_row');
                                if (posts.find('[class*="_tabs_list_item"]').length > 0) {
                                    posts.find('[class*="_tabs_list_item"]').parent().append(jQuery(rez.data).find('.sc_item_posts_container [class*="_tabs_list_item"]').parent().html());
                                    posts.find('[class$="_tabs_content"]').append(jQuery(rez.data).find('.sc_item_posts_container [class$="_tabs_content"]').html());
                                    posts.find('[class*="_tabs_list_item_active"]').each(function(idx) {
                                        if (idx > 0) {
                                            var classes = jQuery(this).attr('class').split(' '),
                                                found = false;
                                            for (var i = 0; i < classes.length; i++) {
                                                if (classes[i].indexOf('_tabs_list_item_active') > 0) {
                                                    classes[i] = '';
                                                    found = true;
                                                    break;
                                                }
                                            }
                                            if (found) jQuery(this).attr('class', classes.join(' '));
                                        }
                                    });
                                    posts.find('[class$="_tabs_content"] [class*="_item_active"]').each(function(idx) {
                                        if (idx > 0) {
                                            var classes = jQuery(this).attr('class').split(' '),
                                                found = false;
                                            for (var i = 0; i < classes.length; i++) {
                                                if (classes[i].indexOf('_item_active') > 0) {
                                                    classes[i] = '';
                                                    found = true;
                                                    break;
                                                }
                                            }
                                            if (found) jQuery(this).attr('class', classes.join(' '));
                                        }
                                    });
                                } else {
                                    if (posts.hasClass('masonry_wrap')) {
                                        var items = jQuery(rez.data).find('.sc_item_posts_container .masonry_item');
                                        if (items.length > 0) {
                                            items.addClass('just_loaded_items hidden');
                                            posts.append(items);
                                            var just_loaded_items = posts.find('.just_loaded_items');
                                            trx_addons_when_images_loaded(just_loaded_items, function() {
                                                just_loaded_items.removeClass('hidden');
                                                posts.masonry('appended', items).masonry();
                                            });
                                            setTimeout(function() {
                                                just_loaded_items.removeClass('just_loaded_items hidden');
                                            }, 1000);
                                        }
                                    } else {
                                        posts.append(jQuery(rez.data).find('.sc_item_posts_container').html());
                                    }
                                }
                                trx_addons_save_popup_html(posts.find('.sc_layouts_popup'));
                                $document.trigger('action.after_add_content', [posts]);
                                $document.trigger('action.init_hidden_elements', [posts]);
                                $window.trigger('resize');
                                link.data('page', Number(link.data('page')) + 1);
                                if (link.data('page') > link.data('max-page')) {
                                    pagination_wrap.addClass('all_items_loaded').fadeOut();
                                }
                                if (pagination_wrap.length > 0) {
                                    var new_params = jQuery(rez.data).find('.sc_item_pagination').data('params');
                                    if (new_params) {
                                        pagination_wrap.data('params', new_params);
                                    }
                                }
                            } else {
                                if (set_min_height) {
                                    sc.data('min-height', sc.css('min-height')).css('min-height', sc.height());
                                }
                                if (link_wrap.hasClass('sc_item_filters')) {
                                    link_active.removeClass('active').parent().removeClass('sc_item_filters_tabs_active');
                                    link.addClass('active').parent().addClass('sc_item_filters_tabs_active');
                                } else {
                                    if (pagination_wrap.length > 0) {
                                        pagination_wrap.fadeOut();
                                    }
                                }
                                posts.animate({
                                    opacity: 0
                                }, 200, function() {
                                    var items = jQuery(rez.data).find('.sc_item_posts_container,.sc_item_slider');
                                    if (items.find('[class*="trx_addons_column-"]').length > 0) {
                                        if (!posts.hasClass('trx_addons_columns_wrap')) {
                                            posts.addClass('trx_addons_columns_wrap');
                                        }
                                    } else {
                                        posts.removeClass('trx_addons_columns_wrap');
                                    }
                                    if (items.find('[class*="column-"]').length > 0) {
                                        if (!posts.hasClass('columns_wrap')) {
                                            posts.addClass('columns_wrap');
                                        }
                                    } else {
                                        posts.removeClass('columns_wrap');
                                    }
                                    $document.trigger('action.before_remove_content', [sc]);
                                    trx_addons_replace_posts(posts, items.html());
                                    trx_addons_replace_pagination(pagination_wrap, jQuery(rez.data).find('.sc_item_pagination'), posts);
                                    $document.trigger('action.after_add_content', [sc]);
                                    $document.trigger('action.init_hidden_elements', [sc]);
                                    $window.trigger('resize');
                                    setTimeout(function() {
                                        posts.animate({
                                            opacity: 1
                                        }, 200, function() {
                                            if (sc.data('min-height') && set_min_height) {
                                                sc.css('min-height', sc.data('min-height'));
                                                $window.trigger('resize');
                                                $window.trigger('scroll');
                                            }
                                        });
                                    }, 400);
                                });
                            }
                            posts.find('.trx_addons_loading').fadeOut(function() {
                                jQuery(this).remove();
                            });
                        } else {
                            alert(rez.error);
                            posts.find('.trx_addons_loading').remove();
                        }
                        if (load_more) pagination_wrap.removeClass('loading');
                        TRX_ADDONS_STORAGE['pagination_busy'] = false;
                        $document.trigger('action.got_ajax_response', {
                            action: 'trx_addons_item_pagination',
                            result: rez
                        });
                    });
                }
            }
            e.preventDefault();
            return false;
        });

        function trx_addons_replace_posts(posts, posts_new) {
            if (posts.hasClass('masonry_wrap')) {
                var items = posts.find('.masonry_item');
                posts.masonry('remove', items);
                posts.html(posts_new);
                posts.find('.inited').removeClass('inited');
                posts.find('.popup_inited').removeClass('popup_inited');
                posts.find('.swiper-container-initialized').removeClass('swiper-container-initialized');
                items = posts.find('.masonry_item');
                if (items.length > 0) {
                    posts.masonry('appended', items).masonry();
                }
            } else {
                posts.html(posts_new);
                if (posts.find('>.slider_container').length > 0) {
                    posts.removeClass('trx_addons_columns_wrap columns_wrap');
                } else if (posts.find('>[class*="trx_addons_column-"]').length > 0) {
                    posts.toggleClass('trx_addons_columns_wrap', true);
                } else if (posts.find('>[class*="column-"]').length > 0) {
                    posts.toggleClass('columns_wrap', true);
                }
            }
            trx_addons_save_popup_html(posts.find('.sc_layouts_popup'), true);
        }

        function trx_addons_replace_pagination(pagination_wrap, pagination_new, posts) {
            if (pagination_new.length > 0) {
                pagination_new.addClass('trx_addons_invisible');
                if (pagination_wrap.length > 0) {
                    pagination_wrap.after(pagination_new).next().removeClass('inited').end().remove();
                } else {
                    posts.after(pagination_new).next().removeClass('inited');
                }
                setTimeout(function() {
                    pagination_new.fadeIn().removeClass('trx_addons_invisible');
                }, 400);
            } else {
                if (pagination_wrap.length > 0) {
                    pagination_wrap.remove();
                }
            }
        }
        jQuery('.sc_post_details_popup:not(.inited)').addClass('inited').on('click', 'a', function(e) {
            trx_addons_show_post_details(jQuery(this).parents('[data-post_id]'), true);
            e.preventDefault();
            return false;
        });
        if (jQuery('.sc_post_details_popup.inited').length > 0) {
            jQuery('body:not(.sc_post_details_popup_inited)').addClass('sc_post_details_popup_inited').on('click', '#trx_addons_post_details_popup_overlay, .trx_addons_post_details_popup_close', function(e) {
                jQuery('#trx_addons_post_details_popup').fadeOut();
                jQuery('#trx_addons_post_details_popup_overlay').fadeOut();
            }).on('click', '.trx_addons_post_details_popup_prev,.trx_addons_post_details_popup_next', function(e) {
                var popup = jQuery('#trx_addons_post_details_popup');
                var post_item = popup.data('post_item');
                if (!post_item || post_item.length === 0) return;
                var posts_items = post_item.parents('.sc_item_columns,.sc_item_slider').find('[data-post_id]');
                var cur_idx = -1;
                posts_items.each(function(idx) {
                    if (jQuery(this).data('post_id') == post_item.data('post_id')) cur_idx = idx;
                });
                if (cur_idx == -1) return;
                post_item = jQuery(this).hasClass('trx_addons_post_details_popup_prev') ? (cur_idx > 0 ? posts_items.eq(cur_idx - 1) : false) : (cur_idx < posts_items.length - 1 ? posts_items.eq(cur_idx + 1) : false);
                if (!post_item || post_item.length === 0) return;
                popup.fadeOut();
                trx_addons_show_post_details(post_item, false);
            });
        }

        function trx_addons_show_post_details(post_item, show_overlay) {
            jQuery.post(TRX_ADDONS_STORAGE['ajax_url'], {
                action: 'trx_addons_post_details_in_popup',
                nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
                post_id: post_item.data('post_id'),
                post_type: post_item.data('post_type')
            }).done(function(response) {
                var rez = {};
                if (response === '' || response === 0) {
                    rez = {
                        error: TRX_ADDONS_STORAGE['msg_ajax_error']
                    };
                } else {
                    try {
                        rez = JSON.parse(response);
                    } catch (e) {
                        rez = {
                            error: TRX_ADDONS_STORAGE['msg_ajax_error']
                        };
                        console.log(response);
                    }
                }
                var msg = rez.error === '' ? rez.data : rez.error;
                var popup = jQuery('#trx_addons_post_details_popup');
                var overlay = jQuery('#trx_addons_post_details_popup_overlay');
                if (popup.length === 0) {
                    jQuery('body').append('<div id="trx_addons_post_details_popup_overlay"></div>' + '<div id="trx_addons_post_details_popup">' + '<div class="trx_addons_post_details_content"></div>' + '<span class="trx_addons_post_details_popup_close trx_addons_icon-cancel"></span>' + '<span class="trx_addons_post_details_popup_prev trx_addons_icon-left"></span>' + '<span class="trx_addons_post_details_popup_next trx_addons_icon-right"></span>' + '</div>');
                    popup = jQuery('#trx_addons_post_details_popup');
                    overlay = jQuery('#trx_addons_post_details_popup_overlay');
                }
                popup.data('post_item', post_item).find('.trx_addons_post_details_content').html(msg);
                var handle, $head = jQuery('head');
                if (rez.error === '') {
                    if (rez['css']) {
                        for (handle in rez['css']) {
                            if (jQuery('#' + handle + '-css').length === 0) {
                                if (rez['css'][handle].hasOwnProperty('url')) {
                                    $head.append('<link id="' + handle + '-css"' + ' type="text/css"' + ' property="stylesheet"' + ' rel="stylesheet"' + ' href="' + rez['css'][handle]['url'] + '"' + ' media="all">');
                                } else if (rez['css'][handle].hasOwnProperty('code')) {
                                    $head.append('<style id="' + handle + '-css" media="all">' + rez['css'][handle]['code'] + '</style>');
                                }
                            }
                        }
                    }
                    if (rez['js']) {
                        for (handle in rez['js']) {
                            if (jQuery('#' + handle + '-js').length === 0) {
                                if (rez['js'][handle].hasOwnProperty('url')) {
                                    $body.append('<script id="' + handle + '-js"' + ' type="text/javascript"' + ' src="' + rez['js'][handle]['url'] + '"' + '></script>');
                                } else if (rez['js'][handle].hasOwnProperty('code')) {
                                    $body.append('<script id="' + handle + '-js" type="text/javascript">' + rez['js'][handle]['code'] + '</script>');
                                }
                            }
                        }
                    }
                }
                if (show_overlay) overlay.fadeIn();
                popup.fadeIn(function() {
                    if (Event) {
                        document.dispatchEvent(new Event('DOMContentLoaded'));
                    }
                    $document.trigger('action.init_hidden_elements', [popup]);
                });
                $document.trigger('action.got_ajax_response', {
                    action: 'trx_addons_post_details_in_popup',
                    result: rez
                });
            });
        }
        jQuery('.sc_blogger_panel .sc_blogger_item:not(.switch_panel_inited),.sc_services_panel .sc_services_item:not(.switch_panel_inited)').addClass('switch_panel_inited').on('mouseenter', function() {
            var $self = jQuery(this),
                num = $self.data('item-number'),
                $posts = $self.parents('.sc_item_posts_container'),
                $old_panel = $posts.find('.sc_panel_thumb_active').removeClass('sc_panel_thumb_active'),
                $new_panel = $posts.find('.sc_panel_thumb[data-thumb-number="' + num + '"]').addClass('sc_panel_thumb_active');
            $document.trigger('action.init_hidden_elements', [$new_panel]);
        });
        jQuery('.sc_cover:not(.inited)').each(function() {
            var $self = jQuery(this).addClass('inited');
            if ($self.parents('.elementor-editor-active').length) {
                return;
            }
            var $wrap = $self.parent().hasClass('elementor-widget-container') ? $self.parents('.elementor-widget').eq(0) : $self,
                wrap_z = $wrap.hasClass('elementor-widget') && $wrap.css('z-index') > 0 ? $wrap.css('z-index') : '',
                place = $self.data('place'),
                $placeholder = false;
            if (wrap_z > 0) {
                $self.css('z-index', wrap_z);
            }
            if (place == 'p1') {
                if (!$wrap.hasClass('sc_cover')) {
                    $placeholder = $wrap.parent();
                }
            } else if (place == 'p2') {
                $placeholder = $wrap.parent().parent();
            } else if (place == 'p3') {
                $placeholder = $wrap.parent().parent().parent();
            } else if (place == 'row') {
                $placeholder = $wrap.parents(trx_addons_apply_filters('trx_addons_filter_section_selectors', '.wp-block-columns,.elementor-section')).eq(0);
            } else if (place == 'column') {
                $placeholder = $wrap.parents(trx_addons_apply_filters('trx_addons_filter_column_selectors', '.wp-block-column,.elementor-column')).eq(0);
            }
            if ($placeholder && $placeholder.length) {
                if ($placeholder.css('position') == 'static') {
                    $placeholder.addClass('sc_cover_link_wrap');
                }
                $self.prependTo($placeholder.addClass('sc_cover_link_present'));
            } else {
                $placeholder = $wrap.parent().addClass('sc_cover_link_present');
                if ($placeholder.css('position') == 'static') {
                    $placeholder.addClass('sc_cover_link_wrap');
                }
            }
        });
    });
    $document.on('action.resize_trx_addons', function() {
        if ($infinite_posts.length > 0) {
            $infinite_posts.each(function(idx) {
                var $self = $infinite_posts.eq(idx);
                $self.data({
                    'offset-top': $self.offset().top,
                    'height': $self.height()
                });
            });
        }
    });
    $document.on('action.scroll_trx_addons', function(e) {
        if (TRX_ADDONS_STORAGE['pagebuilder_preview_mode'] || $pagination_infinite.length === 0) {
            return;
        }
        var done = false;
        $pagination_infinite.each(function(idx) {
            if (done) return;
            var $self = $pagination_infinite.eq(idx);
            if ($self.hasClass('all_items_loaded')) return;
            var posts = $infinite_posts.eq(idx);
            if (posts.data('offset-top') + posts.data('height') < trx_addons_window_scroll_top() + trx_addons_window_height() * 1.5) {
                $self.find('a').trigger('click');
                done = true;
            }
        });
    });
    $document.on('action.scroll_trx_addons', function() {
        if ($typed_entry.length === 0) {
            return;
        }
        var wt = trx_addons_window_scroll_top(),
            wh = trx_addons_window_height();
        $typed_entry.each(function(idx) {
            var obj = $typed_entry.eq(idx);
            if (obj.hasClass('sc_typed_inited')) return;
            var ot = obj.offset().top,
                oh = obj.height();
            if (wt <= ot + oh && wt + wh >= ot + oh) {
                obj.addClass('sc_typed_inited').typed({
                    contentType: "html",
                    strings: obj.data('strings'),
                    loop: obj.data('loop') == 1,
                    showCursor: obj.data('cursor') == 1,
                    cursorChar: obj.data('cursor-char') != undefined ? obj.data('cursor-char') : '|',
                    typeSpeed: obj.data('speed') > 0 ? (11 - Math.max(1, Math.min(10, obj.data('speed')))) * 10 : 50,
                    backDelay: obj.data('delay') > 0 ? Math.max(0, Math.min(10, obj.data('delay'))) * 1000 : 1000
                });
            }
        });
    });
    $document.on('action.resize_trx_addons', function(e, container) {
        if ($equal_height.length === 0) {
            return;
        }
        $equal_height.each(function() {
            var eh_wrap = jQuery(this);
            var eh_items_selector = eh_wrap.data('equal-height');
            if (eh_items_selector === undefined) {
                eh_items_selector = '>*';
            }
            var max_h = 0;
            var items = [];
            var row_y = 0;
            var i = 0;
            eh_wrap.find(eh_items_selector).each(function() {
                var el = jQuery(this);
                el.css('visibility', 'hidden').height('auto');
                var el_height = el.height();
                var el_offset = el.offset().top;
                if (row_y === 0) row_y = el_offset;
                if (row_y < el_offset) {
                    if (items.length > 0) {
                        if (max_h > 0) {
                            for (i = 0; i < items.length; i++) items[i].css('visibility', 'visible').height(max_h);
                        }
                        items = [];
                        max_h = 0;
                    }
                    row_y = el_offset;
                }
                if (el_height > max_h) max_h = el_height;
                items.push(el);
            });
            if (items.length > 0) {
                for (i = 0; i < items.length; i++) {
                    items[i].css('visibility', 'visible');
                    if (max_h > 0) items[i].height(max_h);
                }
            }
        });
    });
});
(function() {
    "use strict";
    var trx_addons_once_resize = false;
    var $window = jQuery(window),
        $document = jQuery(document),
        $body = jQuery('body'),
        $scheme_watchers = jQuery('.watch_scheme');
    var $animated_items, $scheme_sections, $stack_sections;
    var is_edit_mode = $body.hasClass('elementor-editor-active');
    $document.on('action.got_ajax_response', update_jquery_links);
    $document.on('action.init_hidden_elements', update_jquery_links);
    var first_run = true;

    function update_jquery_links(e) {
        if (first_run && e && e.namespace == 'init_hidden_elements') {
            first_run = false;
            return;
        }
        $animated_items = jQuery('.animated-item');
        $scheme_sections = jQuery('[class*="scheme_"]:visible');
        $stack_sections = jQuery('.sc_stack_section_effect_slide:not(.elementor-element-edit-mode)');
    }
    update_jquery_links();
    if (typeof TRX_ADDONS_STORAGE != 'undefined' && TRX_ADDONS_STORAGE['popup_engine'] != 'none') {
        $document.on('action.init_hidden_elements', function(e, cont) {
            cont.find('a.esgbox').attr('data-elementor-open-lightbox', 'no');
            if (trx_addons_apply_filters('trx_addons_filter_disable_elementor_lightbox', true)) {
                cont.find(trx_addons_apply_filters('trx_addons_filter_disable_elementor_lightbox_selector', 'a[href$=".jpg"]:not([data-elementor-open-lightbox="yes"]):not([data-elementor-lightbox-slideshow]),' + 'a[href$=".jpeg"]:not([data-elementor-open-lightbox="yes"]):not([data-elementor-lightbox-slideshow]),' + 'a[href$=".png"]:not([data-elementor-open-lightbox="yes"]):not([data-elementor-lightbox-slideshow]),' + 'a[href$=".gif"]:not([data-elementor-open-lightbox="yes"]):not([data-elementor-lightbox-slideshow])')).attr('data-elementor-open-lightbox', 'no');
            }
        });
    }
    $window.on('elementor/frontend/init', function() {
        if (typeof window.elementorFrontend !== 'undefined' && typeof window.elementorFrontend.hooks !== 'undefined') {
            is_edit_mode = elementorFrontend.isEditMode();
            if (is_edit_mode) {
                var init_hidden_elements_immediately = false,
                    init_hidden_elements_immediately_start = trx_addons_throttle(function() {
                        init_hidden_elements_immediately = true;
                        init_hidden_elements($body);
                    }, 2500, true),
                    init_hidden_elements = function($cont) {
                        if ($body.hasClass('cpt_layouts-template') || $body.hasClass('cpt_layouts-template-default') || $body.hasClass('single-cpt_layouts') || $body.hasClass('single-elementor_library')) {
                            $body.find('.elementor-element.elementor-widget').addClass('sc_layouts_item');
                        }
                        jQuery('#toc_menu').remove();
                        $document.trigger('action.init_hidden_elements', [$cont]);
                        if ($cont.parents('.elementor-section-stretched').length > 0 && !trx_addons_once_resize) {
                            trx_addons_once_resize = true;
                            $document.trigger('action.resize_trx_addons', [$cont.parents('.elementor-section-stretched')]);
                        } else {
                            $document.trigger('action.resize_trx_addons', [$cont]);
                        }
                        trx_addons_elementor_prepare_animate_items();
                    };
                elementorFrontend.hooks.addAction('frontend/element_ready/global', function($cont) {
                    if (init_hidden_elements_immediately) {
                        init_hidden_elements($cont);
                    } else {
                        init_hidden_elements_immediately_start();
                    }
                });
                if ($body.hasClass('cpt_layouts-template') || $body.hasClass('cpt_layouts-template-default') || $body.hasClass('single-cpt_layouts')) {
                    jQuery('.elementor-element.elementor-widget').addClass('sc_layouts_item');
                }
                jQuery('.trx_addons_layout_editor_mask').each(function() {
                    var $cont = jQuery(this).parent();
                    if ($cont.css('position') == 'static') {
                        $cont.css('position', 'relative');
                    }
                });
                elementorFrontend.hooks.addFilter('frontend/handlers/menu_anchor/scroll_top_distance', function(scrollTop) {
                    return scrollTop - trx_addons_fixed_rows_height();
                });
                jQuery('.trx_addons_layout_editor_link:not(.inited)').addClass('inited').on('click', function(e) {
                    e.stopImmediatePropagation();
                    return true;
                });
                jQuery('.trx_addons_layout_editor_selector_trigger:not(.inited)').addClass('inited').on('click', function(e) {
                    jQuery(this).next().slideToggle();
                    jQuery(this).parent().toggleClass('trx_addons_layout_editor_selector_opened');
                    e.preventDefault();
                    return false;
                });
                jQuery('.trx_addons_layout_editor_selector_list_item:not(.inited)').addClass('inited').on('click', function(e) {
                    var $self = jQuery(this),
                        layout_id = $self.data('layout-id'),
                        layout_type = $self.data('layout-type'),
                        layout_url = $self.data('layout-url'),
                        layout_title = $self.text(),
                        post_id = $self.data('post-id');
                    $self.parent().prevAll('.trx_addons_layout_editor_selector_trigger').eq(0).trigger('click');
                    var link = $self.parent().prevAll('.trx_addons_layout_editor_link').eq(0),
                        text = link.text();
                    link.attr('href', layout_url).text(text.replace(/"[^"]*"/, '"' + layout_title + '"'));
                    if (layout_id && layout_type && post_id && elementor) {
                        var settings = elementor.settings,
                            model = settings.page.model,
                            theme_slug = TRX_ADDONS_STORAGE['theme_slug'],
                            override_name = theme_slug + '_options_override_' + layout_type + '_type',
                            field_name = theme_slug + '_options_field_' + layout_type + '_type';
                        if (model.attributes.hasOwnProperty(override_name)) {
                            model.set(override_name, '1');
                        }
                        if (model.attributes.hasOwnProperty(field_name)) {
                            model.set(field_name, 'custom');
                        }
                        override_name = theme_slug + '_options_override_' + layout_type + '_style';
                        field_name = theme_slug + '_options_field_' + layout_type + '_style';
                        if (model.attributes.hasOwnProperty(override_name)) {
                            model.set(override_name, '1');
                        }
                        if (model.attributes.hasOwnProperty(field_name)) {
                            model.set(field_name, layout_type + '-custom-' + layout_id);
                        }
                        if (elementor.panel.$el.find('input[data-setting="' + override_name + '"]').length === 0) {
                            elementor.panel.$el.find('#elementor-panel-footer-settings').trigger('click');
                            setTimeout(function() {
                                elementor.panel.$el.find('.elementor-tab-control-advanced a').trigger('click');
                                setTimeout(function() {
                                    var sec_number = layout_type == 'sidebar' ? 1 : (layout_type == 'header' ? 3 : 4);
                                    if (sec_number > 1) {
                                        elementor.panel.$el.find('.elementor-control-section_theme_options_' + sec_number).trigger('click');
                                    }
                                    setTimeout(function() {
                                        elementor.panel.$el.find('input[data-setting="' + override_name + '"]').trigger('change');
                                    }, 10);
                                }, 10);
                            }, 10);
                        } else {
                            var field = elementor.panel.$el.find('select[data-setting="' + field_name + '"]'),
                                layout_value = layout_type + '-custom-' + layout_id;
                            if (field.length > 0) {
                                field.val(layout_value);
                                field.trigger('change');
                            }
                        }
                    }
                    e.preventDefault();
                    return false;
                });
            } else {
                if (typeof elementorFrontend.config !== 'undefined' && typeof elementorFrontend.config.settings !== 'undefined' && typeof elementorFrontend.config.settings.general === 'undefined') {
                    elementorFrontend.config.settings.general = {
                        'elementor_stretched_section_container': TRX_ADDONS_STORAGE['elementor_stretched_section_container']
                    };
                }
                setTimeout(function() {
                    trx_addons_once_resize = true;
                    $document.trigger('action.resize_trx_addons');
                }, 2);
                trx_addons_elementor_prepare_animate_items();
            }
        }
    });
    if ($scheme_watchers.length > 0) {
        $document.on('action.scroll_trx_addons', function() {
            $scheme_watchers.each(function(idx) {
                var item = $scheme_watchers.eq(idx),
                    item_dom = item.get(0),
                    scheme_present = false,
                    item_offset, item_cx, item_cy;
                if (typeof item_dom.getBoundingClientRect == 'function') {
                    item_offset = item_dom.getBoundingClientRect();
                    item_cx = $window.scrollLeft() + item_offset.left + item_offset.width / 2;
                    item_cy = $window.scrollTop() + item_offset.top + item_offset.height / 2;
                } else {
                    item_offset = item.offset();
                    item_cx = item_offset.left + item.width() / 2;
                    item_cy = item_offset.top + item.height() / 2;
                }
                $scheme_sections.each(function(idx2) {
                    var section = $scheme_sections.eq(idx2),
                        section_offset = section.offset(),
                        section_left = section_offset.left,
                        section_top = section_offset.top;
                    if (section_left < item_cx && section_left + section.outerWidth() > item_cx && section_top < item_cy && section_top + section.outerHeight() > item_cy) {
                        var scheme = trx_addons_get_class_by_prefix(section.attr('class'), 'scheme_');
                        if (!item.hasClass(scheme)) {
                            item.attr('class', trx_addons_chg_class_by_prefix(item.attr('class'), 'scheme_', scheme));
                        }
                        scheme_present = true;
                    }
                });
                if (!scheme_present) {
                    item.attr('class', trx_addons_chg_class_by_prefix(item.attr('class'), 'scheme_', ''));
                }
            });
        });
    }
    if ($body.hasClass('fixed_blocks_sticky')) {
        var $sections_wrap = false;
        $document.on('action.resize_trx_addons', function() {
            if ($stack_sections.length === 0) return;
            if ($sections_wrap === false) {
                $sections_wrap = $stack_sections.eq(0).parents('.elementor-section-wrap').eq(0);
                if ($sections_wrap.length === 0) {
                    $sections_wrap = $stack_sections.eq(0).parents('.elementor').eq(0);
                }
            }
            if ($sections_wrap.length) {
                var left = $sections_wrap.offset().left;
                if (typeof TRX_ADDONS_STORAGE['elementor_stretched_section_container'] != 'undefined') {
                    var $page_wrap = jQuery(TRX_ADDONS_STORAGE['elementor_stretched_section_container']).eq(0);
                    if ($page_wrap.length > 0) {
                        left -= $page_wrap.offset().left;
                    }
                }
                $stack_sections.each(function() {
                    var $self = jQuery(this);
                    if ($self.hasClass('elementor-section-stretched')) {
                        var options = {
                            'left': 'unset',
                        };
                        if ($self.hasClass('sc_stack_section_zoom_on')) {
                            options['marginLeft'] = (-1) * left + 'px';
                        } else {
                            options['transform'] = 'translateX(' + (-1) * left + 'px)';
                        }
                        $self.css(options);
                    }
                });
            }
        });
    }
    $document.on('action.init_hidden_elements', function(e, cont) {
        var tabs = cont.hasClass('elementor-widget-tabs') ? cont : jQuery('.elementor-widget-tabs');
        if (tabs.hasClass('sc_tabs_open_on_hover_on') && !tabs.hasClass('sc_tabs_open_on_hover_inited')) {
            tabs.addClass('sc_tabs_open_on_hover_inited').on('mouseenter', '.elementor-tab-title:not(.elementor-active)', function(e) {
                jQuery(this).trigger('click');
            });
        }
    });
    $document.on('action.init_hidden_elements', function(e, cont) {
        var tabs = cont.hasClass('elementor-widget-tabs') ? cont : jQuery('.elementor-widget-tabs');
        if (!tabs.hasClass('sc_tabs_hidden_inited')) {
            tabs.addClass('sc_tabs_hidden_inited').on('touchstart mousedown', '.elementor-tab-title:not(.elementor-active)', function(e) {
                var $active = jQuery(this).siblings('.elementor-active');
                if ($active.length) {
                    var $tab_content = tabs.find('.elementor-tab-content[data-tab="' + $active.data('tab') + '"]');
                    if ($tab_content.length) {
                        $document.trigger('action.deactivate_tab', [$tab_content]);
                    }
                }
            }).on('click', '.elementor-tab-title', function(e) {
                var $self = jQuery(this);
                var $tab_content = tabs.find('.elementor-tab-content[data-tab="' + $self.data('tab') + '"]');
                setTimeout(function() {
                    $document.trigger('action.activate_tab', [$tab_content]);
                    $document.trigger('action.init_hidden_elements', [$tab_content]);
                    $document.trigger('action.resize_trx_addons');
                }, $tab_content.height() > 50 ? 0 : 600);
            });
        }
    });
    $document.on('action.activate_tab', function(e, cont) {
        cont.find('.elementor-widget-image-carousel .swiper-container, .elementor-background-slideshow.swiper-container').each(function() {
            var swiper = jQuery(this).data('swiper');
            if (swiper) {
                swiper.update();
            }
        });
    });
    $document.on('action.prepare_popup_elements', function(e, cont, mfp) {
        var max_delay = 0,
            items = cont.find('.animated-item,' + '.animated[class*="animation_type_"],' + '[data-settings*="animation"][class*="animation_type_"]');
        items.each(function(idx) {
            var $self = jQuery(this),
                block = $self.hasClass('animation_type_block') || $self.hasClass('animated-separate'),
                sc = block ? $self : $self.parents('.animated-separate'),
                params = sc.data('animation-settings') || sc.data('settings'),
                delay = trx_addons_elementor_animate_items_delay(params, sc, $self, idx, items.length),
                animation = trx_addons_elementor_animate_items_animation(params);
            if (delay > max_delay) {
                max_delay = delay;
            }
            $self.addClass('elementor-invisible trx_addons_invisible').removeClass('animated ' + animation + ' ' + trx_addons_elementor_animate_items_animation_revert_name(animation));
            if (block || !mfp) {
                trx_addons_elementor_animate_item($self, idx, items.length, false);
            }
        });
        cont.data({
            'animation-delay': max_delay
        });
        if (mfp && mfp.st) {
            mfp.st.removalDelay = max_delay + 300;
        }
    });
    $document.on('action.close_popup_elements', function(e, cont) {
        var max_delay = cont.data('animation-delay') || 0,
            items = cont.find('.animated-item,.animated[class*="animation_type_"]');
        items.each(function(idx) {
            var $self = jQuery(this),
                block = $self.hasClass('animation_type_block'),
                sc = block ? $self : $self.parents('.animated-separate'),
                params = sc.data(block ? 'settings' : 'animation-settings');
            if (!params) {
                return;
            }
            var reverted = sc.data('animation-reverted'),
                animation = reverted ? reverted : trx_addons_elementor_animate_items_animation(params);
            $self.removeClass('animated ' + animation);
            if (!reverted) {
                var revert_params = trx_addons_elementor_animate_items_animation_revert_params(sc, params, max_delay);
                sc.data(block ? 'settings' : 'animation-settings', revert_params).data('animation-reverted', animation);
                setTimeout(function() {
                    sc.data(block ? 'settings' : 'animation-settings', params).data('animation-reverted', '');
                }, max_delay);
            }
            trx_addons_elementor_animate_item($self, idx, items.length, false);
        });
    });
    $document.on('action.init_hidden_elements', function(e, cont) {
        trx_addons_elementor_prepare_animate_items();
    });
    window.trx_addons_elementor_prepare_animate_items = function(force) {
        jQuery('.sc_section_toggle_on:not(.sc_section_toggle_inited)').each(function() {
            var sc = jQuery(this).addClass('sc_section_toggle_inited'),
                sc_cont = sc.find('>.elementor-container,>.e-con-inner'),
                cid = sc.data('model-cid'),
                params = cid ? trx_addons_elementor_get_settings_by_cid(cid, ['_animation', 'animation']) : sc.data('settings'),
                type = sc.hasClass('animation_type_block') ? 'block' : (sc.hasClass('animation_type_sequental') ? 'sequental' : 'random'),
                item_params = {},
                item_speed = '',
                item_duration = 500;
            var save_height = function() {
                if (sc.hasClass('sc_section_toggle_state_show')) {
                    sc_cont.data('height', sc_cont.outerHeight());
                }
            };
            $document.on('action.resize_trx_addons', save_height);
            if (sc.hasClass('animated-slow')) {
                item_speed = 'animated-slow';
                item_duration = 1000;
            } else if (sc.hasClass('animated-fast')) {
                item_speed = 'animated-fast';
                item_duration = 300;
            }
            if (params) {
                for (var i in params) {
                    if (i.substr(0, 10) == '_animation' || i.substr(0, 9) == 'animation') {
                        item_params[i] = params[i];
                        delete params[i];
                    }
                }
                sc.removeClass('animated animation_type_' + type + ' ' + trx_addons_elementor_animate_items_animation(item_params) + (item_speed ? ' ' + item_speed : '') + (!sc.hasClass('elementor-element-edit-mode') ? ' elementor-invisible trx_addons_invisible' : ''));
                if (!cid) {
                    sc.attr('data-settings', JSON.stringify(params)).data('settings', params);
                }
                sc_cont.addClass('animation_type_' + type + ' ' + item_speed + (!sc.hasClass('elementor-element-edit-mode') ? ' elementor-invisible trx_addons_invisible' : '')).attr('data-settings', JSON.stringify(item_params));
            } else {
                item_speed = '';
                item_duration = 0;
            }
            var id = sc.attr('id');
            if (id) {
                var $link = jQuery('a[href="#' + id + '"]');
                if ($link.length) {
                    $link.addClass('sc_section_toggle_state_' + (sc.hasClass('sc_section_toggle_state_show') ? 'show' : 'hide')).on('click', function(e) {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        var state = sc.hasClass('sc_section_toggle_state_show') ? 'show' : 'hide',
                            action = state == 'show' ? 'hide' : 'show',
                            max_delay = 0,
                            easing = typeof jQuery.easing['easeOutSine'] != 'undefined' ? 'easeOutSine' : 'linear';
                        jQuery(this).removeClass('sc_section_toggle_state_' + state).addClass('sc_section_toggle_state_' + action);
                        if (action == 'show') {
                            var h = sc_cont.data('height') || trx_addons_window_height() * 0.4;
                            sc.addClass('sc_section_toggle_animated_show').animate({
                                height: h + 'px'
                            }, 500, easing, function() {
                                sc.css({
                                    'overflow': 'hidden'
                                }).removeClass('sc_section_toggle_animated_show sc_section_toggle_state_' + state).addClass('sc_section_toggle_state_' + action);
                                $document.trigger('action.prepare_popup_elements', [sc]);
                                $document.trigger('action.init_hidden_elements', [sc]);
                                trx_addons_elementor_animate_items_scroll();
                                max_delay = (sc.data('animation-delay') || 0) + item_duration;
                                setTimeout(function() {
                                    sc.css({
                                        'height': 'auto',
                                        'overflow': 'unset'
                                    });
                                }, max_delay);
                            });
                        } else {
                            max_delay = (sc.data('animation-delay') || 0) + item_duration;
                            sc.addClass('sc_section_toggle_animated_hide').css({
                                'overflow': 'hidden'
                            });
                            $document.trigger('action.close_popup_elements', [sc]);
                            setTimeout(function() {
                                sc.animate({
                                    'height': 0
                                }, 500, easing, function() {
                                    sc.removeClass('sc_section_toggle_animated_hide sc_section_toggle_state_' + state).addClass('sc_section_toggle_state_' + action);
                                });
                            }, max_delay);
                        }
                        return false;
                    });
                    if (sc.hasClass('sc_section_toggle_close_on')) {
                        sc.append('<div class="sc_section_toggle_close_button trx_addons_button_close"><span class="trx_addons_button_close_icon"></span></div>');
                        sc.find('>.sc_section_toggle_close_button').on('click', function() {
                            $link.trigger('click');
                        });
                    }
                }
            }
        });
        jQuery('[class*="animation_type_"]:not(.animation_type_block)' + (!force ? ':not(.animated-separate)' : '')).each(function() {
            var sc = jQuery(this),
                is_section = sc.hasClass('elementor-section') || sc.hasClass('elementor-container') || sc.hasClass('elementor-row'),
                section = sc.hasClass('elementor-section') ? sc : (sc.hasClass('elementor-container') || sc.hasClass('elementor-row') ? sc.parents('.elementor-section') : false),
                is_container = sc.hasClass('e-con') || sc.hasClass('e-con-inner'),
                container = sc.hasClass('e-con') ? sc : (sc.hasClass('e-con-inner') ? sc.parent() : false),
                sc_name = sc.data('widget_type');
            if (sc_name) {
                sc_name = sc_name.split('.');
                sc_name = '.' + sc_name[0].replace('trx_', '') + '_item';
                if (sc.find(sc_name).length === 0) {
                    sc_name = '.post_item';
                    if (sc.find(sc_name).length === 0) {
                        sc_name = '[class*="_column-"]';
                    }
                }
            } else {
                sc_name = is_container && sc.find('>.e-con-inner>.e-con,>.e-con').length > 1 ? '>.e-con-inner>.e-con,>.e-con' : (is_section && sc.find('>.elementor-container>.elementor-row>.elementor-column,>.elementor-container>.elementor-column,>.elementor-row>.elementor-column,>.elementor-column').length > 1 ? '>.elementor-container>.elementor-row>.elementor-column,>.elementor-container>.elementor-column,>.elementor-row>.elementor-column,>.elementor-column' : '[class*="_column-"]');
            }
            if ((!is_section || sc_name.indexOf('.elementor-column') < 0) && (!is_container || sc_name.indexOf('.e-con') < 0)) {
                sc_name += sc_name && TRX_ADDONS_STORAGE['elementor_animate_items'] ? ',' + TRX_ADDONS_STORAGE['elementor_animate_items'] : '';
            }
            var items = sc.find(sc_name);
            if (items.length === 0) {
                sc.addClass('animation_type_block');
                return;
            }
            var cid = sc.data('model-cid'),
                params = cid ? trx_addons_elementor_get_settings_by_cid(cid, ['_animation', 'animation']) : sc.data('settings'),
                item_params = {},
                item_speed = sc.hasClass('animated-slow') ? 'animated-slow' : (sc.hasClass('animated-fast') ? 'animated-fast' : '');
            if (!params) {
                return;
            }
            for (var i in params) {
                if (i.substr(0, 10) == '_animation' || i.substr(0, 9) == 'animation') {
                    item_params[(i.substr(0, 9) == 'animation' ? '_' : '') + i] = params[i];
                    delete params[i];
                }
            }
            sc.removeClass('elementor-invisible trx_addons_invisible animated ' + trx_addons_elementor_animate_items_animation(item_params) + (sc.data('last-animation') ? ' ' + sc.data('last-animation') : '') + (item_speed ? ' ' + item_speed : '')).addClass('animated-separate').data('last-animation', trx_addons_elementor_animate_items_animation(item_params));
            if (!cid) {
                sc.attr('data-settings', JSON.stringify(params)).data('settings', params);
            }
            sc.attr('data-animation-settings', JSON.stringify(item_params)).data('animation-settings', item_params);
            items.each(function(idx) {
                var item = jQuery(this);
                if (item.hasClass('sc_item_title') || item.hasClass('elementor-heading-title')) {
                    item.html(trx_addons_wrap_words(item.html(), '<span class="sc_item_animated_block elementor-invisible trx_addons_invisible animated-item' + (item_speed ? ' ' + item_speed : '') + '">', '</span>'));
                } else {
                    if (item_speed) {
                        item.addClass(item_speed);
                    }
                    item.addClass('animated-item' + ((!section || !section.hasClass('elementor-element-edit-mode')) && (!container || !container.hasClass('elementor-element-edit-mode')) ? ' elementor-invisible trx_addons_invisible' : ''));
                }
                if (item.data('animation') !== undefined) {
                    item.removeAttr('data-animation');
                }
            });
        });
        $animated_items = jQuery('.animated-item');
        if (force) {
            trx_addons_elementor_animate_items_scroll(force);
        }
    };
    window.trx_addons_elementor_get_settings_by_cid = function(cid, keys) {
        if (typeof elementorFrontend != 'undefined') {
            var settings = elementorFrontend.config.elements.data[cid].attributes;
            if (keys) {
                var params = {};
                for (var s in settings) {
                    for (var i = 0; i < keys.length; i++) {
                        if (s.indexOf(keys[i]) === 0) {
                            if (typeof settings[s] == 'object' && settings[s].hasOwnProperty('models')) {
                                var tmp = [];
                                for (var m = 0; m < settings[s]['models'].length; m++) {
                                    tmp.push(settings[s]['models'][m]['attributes']);
                                }
                                params[s] = tmp;
                            } else {
                                params[s] = settings[s];
                            }
                            break;
                        }
                    }
                }
                return params;
            }
            return settings;
        }
        return false;
    };
    window.trx_addons_elementor_get_settings = function($element, keys) {
        var elementSettings = {},
            modelCID = $element.data('model-cid');
        if (is_edit_mode && modelCID) {
            var settings = elementorFrontend.config.elements.data[modelCID],
                settingsKeys = elementorFrontend.config.elements.keys[settings.attributes.widgetType || settings.attributes.elType];
            jQuery.each(settings.getActiveControls(), function(controlKey) {
                var allowed = settingsKeys.indexOf(controlKey) !== -1;
                if (allowed && keys) {
                    allowed = false;
                    for (var i = 0; i < keys.length; i++) {
                        if (controlKey.indexOf(keys[i]) === 0) {
                            allowed = true;
                            break;
                        }
                    }
                }
                if (allowed) {
                    elementSettings[controlKey] = settings.attributes[controlKey];
                }
            });
        } else {
            elementSettings = $element.data('settings') || {};
        }
        return elementSettings;
    };
    $document.on('action.scroll_trx_addons', function() {
        trx_addons_elementor_animate_items_scroll();
    });

    function trx_addons_elementor_animate_items_scroll(force) {
        var cnt = 0;
        $animated_items.each(function(idx) {
            var item = jQuery(this);
            if (!force && (item.hasClass('animated') || item.hasClass('wait-for-animation'))) return;
            var item_top = item.offset().top,
                window_top = $window.scrollTop(),
                window_height = $window.height();
            if (item_top + 50 < window_top + window_height) {
                var item_height = item.outerHeight(),
                    need_animation = item_top + item_height > window_top;
                trx_addons_elementor_animate_item(item, cnt, $animated_items.length - idx + cnt, force || !need_animation);
                if (need_animation) {
                    cnt++;
                }
            }
        });
    }

    function trx_addons_elementor_animate_item(item, idx, total, force) {
        var block = item.hasClass('animation_type_block'),
            sc = block ? item : item.parents('.animated-separate');
        if ((sc.hasClass('elementor-container') || sc.hasClass('e-con-inner')) && sc.parent().hasClass('sc_section_toggle_state_hide')) {
            return;
        }
        var item_params = sc.data(block ? 'settings' : 'animation-settings'),
            item_delay = trx_addons_elementor_animate_items_delay(item_params, sc, item, idx, total),
            item_animation = trx_addons_elementor_animate_items_animation(item_params);
        if (force) {
            if (item.data('last-animation') && item.data('last-animation') != item_animation) {
                item.removeClass(item.data('last-animation'));
                item.data('last-animation', '');
            }
            if (item.hasClass('elementor-invisible')) {
                item.removeClass('elementor-invisible');
            }
            if (item.hasClass('trx_addons_invisible')) {
                item.removeClass('trx_addons_invisible');
            }
            if (!item.hasClass('animated')) {
                item.addClass('animated');
            }
            if (false && !item.hasClass(item_animation)) {
                item.addClass(item_animation);
                item.data('last-animation', item_animation);
            }
        } else {
            item.addClass('wait-for-animation');
            setTimeout(function() {
                item.removeClass('wait-for-animation').addClass('animated').addClass(item_animation).removeClass('elementor-invisible trx_addons_invisible');
            }, item_delay);
        }
    }

    function trx_addons_elementor_animate_items_delay(params, sc, item, idx, total) {
        var delay = sc.hasClass('animation_type_block') ? (params && params._animation_delay ? params._animation_delay : 0) : (sc.hasClass('animation_type_sequental') ? (params && params._animation_delay ? params._animation_delay : 150) * (sc.data('animation-reverted') ? (item.hasClass('menu-item') ? item.siblings('.menu-item').length + 1 - item.index() : Math.min(8, total - idx)) : (item.hasClass('menu-item') ? item.index() : Math.min(8, idx))) : trx_addons_random(0, params && params._animation_delay ? params._animation_delay : 1500));
        return delay;
    }

    function trx_addons_elementor_animate_items_animation(params) {
        var device = $body.data('elementor-device-mode');
        if (!device || device == 'desktop') {
            device = '';
        } else {
            device = '_' + device;
        }
        var animation = '';
        if (typeof params != 'undefined') {
            if (typeof params["_animation" + device] != 'undefined') {
                animation = params["_animation" + device];
            } else if (typeof params["_animation"] != 'undefined') {
                animation = params["_animation"];
            } else if (typeof params["animation" + device] != 'undefined') {
                animation = params["animation" + device];
            } else if (typeof params["animation"] != 'undefined') {
                animation = params["animation"];
            }
        }
        return animation;
    }

    function trx_addons_elementor_animate_items_animation_revert_name(animation) {
        animation = animation.replace('In', 'Out');
        if (animation.indexOf('Up') >= 0) {
            animation = animation.replace('Up', 'Down');
        } else if (animation.indexOf('Down') >= 0) {
            animation = animation.replace('Down', 'Up');
        }
        return animation;
    }

    function trx_addons_elementor_animate_items_animation_revert_params(sc, params, max_delay) {
        var device = $body.data('elementor-device-mode');
        if (!device || device == 'desktop') {
            device = '';
        } else {
            device = '_' + device;
        }
        if (params) {
            var revert_params = trx_addons_object_clone(params);
            if (typeof revert_params["_animation" + device] != 'undefined') {
                revert_params["_animation" + device] = trx_addons_elementor_animate_items_animation_revert_name(revert_params["_animation" + device]);
            } else if (typeof revert_params["_animation"] != 'undefined') {
                revert_params["_animation"] = trx_addons_elementor_animate_items_animation_revert_name(revert_params["_animation"]);
            } else if (typeof revert_params["animation" + device] != 'undefined') {
                revert_params["animation" + device] = trx_addons_elementor_animate_items_animation_revert_name(revert_params["animation" + device]);
            } else if (typeof revert_params["animation"] != 'undefined') {
                revert_params["animation"] = trx_addons_elementor_animate_items_animation_revert_name(revert_params["animation"]);
            }
            if (sc.hasClass('animation_type_block')) {
                revert_params._animation_delay = revert_params._animation_delay ? Math.max(0, max_delay - revert_params._animation_delay) : max_delay;
            }
            return revert_params;
        }
        return params;
    }
    $document.on('action.init_hidden_elements', function(e, cont) {
        trx_addons_elementor_add_bg_text(cont);
    });

    function trx_addons_elementor_add_bg_text(cont) {
        if (cont.hasClass('elementor-section') || cont.hasClass('e-con')) {
            cont.find('.trx_addons_bg_text').remove();
            trx_addons_elementor_add_bg_text_in_row(cont);
        } else {
            jQuery((is_edit_mode ? '.elementor-section.elementor-element-edit-mode,.e-con.e-parent.elementor-element-edit-mode' : '.trx_addons_has_bg_text') + ':not(.trx_addons_has_bg_text_inited)').each(function() {
                trx_addons_elementor_add_bg_text_in_row(jQuery(this));
            });
        }
    }

    function trx_addons_elementor_add_bg_text_in_row(row) {
        var data = row.data('bg-text'),
            cid = '',
            rtl = $body.hasClass('rtl');
        if (!data) {
            cid = row.data('model-cid');
            if (cid) {
                data = trx_addons_elementor_get_settings_by_cid(cid, ['bg_text']);
            }
        }
        if (!data) {
            return;
        }
        if (data['bg_text']) {
            if (!row.hasClass('trx_addons_has_bg_text')) {
                row.addClass('trx_addons_has_bg_text');
            }
            data['bg_text'] = data['bg_text'].replace(/\r/g, ' ').replace(/\n/g, ' ');
            var row_cont = row.addClass('trx_addons_has_bg_text_inited');
            var chars = '',
                in_tag = false,
                in_amp = false,
                amp = '',
                ch;
            var delimiter_image = typeof data['bg_text_delimiter_image'] == 'object' ? data['bg_text_delimiter_image']['url'] : data['bg_text_delimiter_image'];
            var delimiter_svg = data['bg_text_delimiter_svg'] || '';
            var delimiter_icon = !trx_addons_is_off(data['bg_text_delimiter_icon']) ? data['bg_text_delimiter_icon'] : '';
            if (data['bg_text_effect'] != 'none') {
                for (var i = 0; i < data['bg_text'].length; i++) {
                    ch = data['bg_text'].substr(i, 1);
                    if (!in_tag) {
                        if (ch == '<') {
                            in_tag = true;
                        } else {
                            if (ch == '&') {
                                in_amp = true;
                                amp += ch;
                            } else if (in_amp) {
                                amp += ch;
                                if (ch == ';') {
                                    chars += '<span class="trx_addons_bg_text_item trx_addons_bg_text_char">' + amp + '</span>';
                                    in_amp = false;
                                    amp = '';
                                }
                            } else {
                                chars += '<span class="trx_addons_bg_text_item trx_addons_bg_text_char">' + (ch == ' ' ? '&nbsp;' : ch) + '</span>';
                            }
                        }
                    }
                    if (in_tag) {
                        chars += ch;
                        if (ch == '>') {
                            in_tag = false;
                        }
                    }
                }
            } else {
                chars = '<span class="trx_addons_bg_text_item trx_addons_bg_text_char">' + data['bg_text'] + '</span>';
            }
            var marquee_speed = typeof data['bg_text_marquee'] == 'object' ? (data['bg_text_marquee']['size'] ? data['bg_text_marquee']['size'] : 0) : data['bg_text_marquee'],
                marquee_dir = typeof data['bg_text_reverse'] != 'undefined' ? (data['bg_text_reverse'] > 0 ? (rtl ? -1 : 1) : (rtl ? 1 : -1)) : (rtl ? 1 : -1),
                overlay = typeof data['bg_text_overlay'] == 'object' ? data['bg_text_overlay']['url'] : data['bg_text_overlay'];
            if (marquee_speed > 0 && (delimiter_icon || delimiter_image)) {
                chars += '<span class="trx_addons_bg_text_item trx_addons_bg_text_char' + ' trx_addons_bg_text_delimiter' + (!delimiter_image && delimiter_icon ? ' trx_addons_bg_text_delimiter_icon ' + delimiter_icon : ' trx_addons_bg_text_delimiter_image') + (data['bg_text_delimiter_rotation'] > 0 ? ' trx_addons_bg_text_delimiter_rotation' : '') + '">' + (delimiter_image ? (delimiter_svg ? delimiter_svg : '<img src="' + delimiter_image + '" />') : '') + '</span>';
            }
            row_cont.prepend('<div class="trx_addons_bg_text' + (marquee_speed > 0 ? ' trx_addons_marquee_wrap' : '') + ((!rtl && marquee_dir > 0) || (rtl && marquee_dir < 0) ? ' trx_addons_marquee_reverse' : '') + '">' + '<div class="trx_addons_bg_text_inner' + ' trx_addons_bg_text_effect_' + data['bg_text_effect'] + (marquee_speed > 0 ? ' trx_addons_marquee_element' + (data['bg_text_left']['size'] != 0 ? ' trx_addons_marquee_element_with_offset' : '') : '') + (cid == '' ? ' trx_addons_show_on_scroll' : ' trx_addons_showed_on_scroll trx_addons_in_preview_mode') + '"' + '>' + chars + '</div>' + (overlay ? '<div class="trx_addons_bg_text_overlay trx_addons_show_on_scroll"></div>' : '') + '</div>');
            $document.trigger('action.got_ajax_response', ['']);
            if (marquee_speed > 0 && cid === '') {
                var marquee_wrap = row_cont.find('.trx_addons_marquee_wrap').eq(0),
                    marquee_chars = Math.min(100, data['bg_text_effect'] == 'none' ? trx_addons_clear_tags(data['bg_text']).length + (delimiter_icon || delimiter_image ? 1 : 0) : marquee_wrap.find('.trx_addons_bg_text_item').length);
                setTimeout(function() {
                    trx_addons_elementor_marquee_bg_text(marquee_wrap, marquee_dir, marquee_speed, true, data['bg_text_effect'], data['bg_text_marquee_hover'], data['bg_text_accelerate']);
                }, data['bg_text_effect'] != 'none' ? marquee_chars * 100 + 800 : 0);
            }
        }
    }

    function trx_addons_elementor_marquee_bg_text(marquee_wrap, marquee_dir, marquee_speed, start, effect, pause_on_hover, accelerate) {
        var elements = marquee_wrap.find('.trx_addons_marquee_element'),
            mw = elements.eq(0).outerWidth(),
            mpw = marquee_wrap.width(),
            mpw_min = 320,
            mpw_max = 1920,
            divider_min = 1680 - marquee_speed * marquee_speed * 2,
            divider_max = 1920,
            divider = divider_min + (mpw - mpw_min) / (mpw_max - mpw_min) * (divider_max - divider_min),
            time_per_pixel = (50 - Math.min(15, marquee_speed) * 3) / divider,
            with_offset = elements.eq(0).hasClass('trx_addons_marquee_element_with_offset'),
            coeff_max = trx_addons_apply_filters('trx_addons_filter_bg_text_marquee_coeff_max', Math.max(2, Math.ceil(mpw / mw))),
            coeff = with_offset && marquee_wrap.data('marquee-loop') ? Math.min(marquee_wrap.data('marquee-loop') + 1, coeff_max) : 1;
        if (effect == 'none' && elements.eq(0).hasClass('trx_addons_show_on_scroll') && !elements.eq(0).hasClass('trx_addons_showed_on_scroll')) {
            elements.eq(0).removeClass('trx_addons_show_on_scroll').addClass('trx_addons_showed_on_scroll');
        }
        if (elements.eq(0).hasClass('trx_addons_showed_on_scroll')) {
            if (start) {
                for (var i = 1; i < Math.ceil((mpw + mw * (with_offset ? coeff_max + 1 : 2)) / mw); i++) {
                    var element_clone = elements.eq(0).clone();
                    elements.eq(0).after(element_clone);
                }
                elements = marquee_wrap.find('.trx_addons_marquee_element');
            }
            var delimiters = marquee_wrap.find('.trx_addons_bg_text_delimiter_rotation').css({
                    'transform-origin': 'center center',
                    'transition': 'none',
                    'transition-delay': 'unset',
                    'transition-duration': 'unset',
                    'perspective': 'unset'
                }),
                delimiters_loop = delimiters.length > 0 ? Math.max(1, Math.ceil(mpw / (delimiters.eq(0).outerHeight() * Math.PI) / 2)) : 0;
            elements.each(function(idx) {
                var $self = jQuery(this);
                var restartTween = trx_addons_throttle(function() {
                    var tween_obj = elements.eq(idx).data('tweenmax-object');
                    if (tween_obj && tween_obj.timeScale() > 1 && tween_obj.progress() > 0.98) {
                        completeTween();
                    }
                }, 50);
                var completeTween = function() {
                    if (idx == elements.length - 1) {
                        var tween_obj = elements.eq(idx).data('tweenmax-object');
                        var diff = (1 - tween_obj.progress()) * mw;
                        marquee_wrap.data('marquee-loop', (marquee_wrap.data('marquee-loop') || 0) + 1);
                        elements.each(function(idx2) {
                            TweenMax.to(elements.eq(idx2), 0, {
                                overwrite: true,
                                x: (with_offset ? mw * Math.min(coeff, coeff_max - 1) * marquee_dir : 0) - diff * marquee_dir,
                                y: 0,
                                ease: Power0.easeNone
                            });
                            if (delimiters_loop > 0) {
                                TweenMax.to(delimiters.eq(idx2), 0, {
                                    overwrite: true,
                                    rotation: 0,
                                    ease: Power0.easeNone
                                });
                            }
                        });
                        setTimeout(function() {
                            trx_addons_elementor_marquee_bg_text(marquee_wrap, marquee_dir, marquee_speed, false, effect, pause_on_hover, accelerate);
                        }, 1);
                    }
                };
                $self.data('tweenmax-object', TweenMax.to(elements.eq(idx), mw * time_per_pixel, {
                    overwrite: true,
                    x: mw * coeff * marquee_dir,
                    y: 0,
                    ease: Power0.easeNone,
                    onUpdate: function() {
                        var tween_obj = elements.eq(idx).data('tweenmax-object');
                        if (tween_obj && tween_obj.timeScale() > 1 && tween_obj.progress() > 0.9) {
                            restartTween();
                        }
                    },
                    onComplete: completeTween
                })).data('tweenmax-delimiter', delimiters_loop === 0 ? null : TweenMax.to(delimiters.eq(idx), mw * time_per_pixel, {
                    overwrite: true,
                    rotation: delimiters_loop * 360 * marquee_dir,
                    ease: Power0.easeNone
                }));
                if (pause_on_hover) {
                    $self.on('mouseenter', function() {
                        elements.each(function(idx) {
                            var tween_obj = elements.eq(idx).data('tweenmax-object');
                            if (tween_obj) {
                                tween_obj.pause();
                                if (delimiters_loop > 0) {
                                    var tween_delimiter = elements.eq(idx).data('tweenmax-delimiter');
                                    if (tween_delimiter) {
                                        tween_delimiter.pause();
                                    }
                                }
                            }
                        });
                    }).on('mouseleave', function() {
                        elements.each(function(idx) {
                            var tween_obj = elements.eq(idx).data('tweenmax-object');
                            if (tween_obj) {
                                tween_obj.resume();
                                if (delimiters_loop > 0) {
                                    var tween_delimiter = elements.eq(idx).data('tweenmax-delimiter');
                                    if (tween_delimiter) {
                                        tween_delimiter.resume();
                                    }
                                }
                            }
                        });
                    });
                }
            });
        } else {
            setTimeout(function() {
                trx_addons_elementor_marquee_bg_text(marquee_wrap, marquee_dir, marquee_speed, start, effect, pause_on_hover, accelerate);
            }, effect != 'none' ? elements.eq(0).find('.trx_addons_bg_text_char').length * 100 + 800 : 0);
        }
        if (accelerate) {
            var wheel_time = 0,
                wheel_stop = false,
                wheel_accelerate = {
                    value: 1
                },
                wheel_handler = function(e) {
                    if (wheel_stop) {
                        return true;
                    }
                    if (wheel_time == e.timeStamp) {
                        e.preventDefault();
                        return false;
                    }
                    wheel_time = e.timeStamp;
                    var wheel_tween = elements.eq(0).data('tweenmax-accelerate') || null;
                    if (wheel_tween) {
                        wheel_tween.kill();
                        wheel_accelerate.value = 1;
                    }
                    elements.eq(0).data('tweenmax-accelerate', TweenMax.to(wheel_accelerate, 2.0, {
                        overwrite: true,
                        value: 15,
                        ease: Power4.easeOut,
                        onUpdate: function() {
                            var coeff = wheel_accelerate.value == 1 ? 1 : (wheel_accelerate.value <= 8 ? wheel_accelerate.value : 16 - wheel_accelerate.value);
                            elements.each(function(idx) {
                                var tween_obj = elements.eq(idx).data('tweenmax-object');
                                if (tween_obj) {
                                    tween_obj.timeScale(coeff);
                                    if (delimiters_loop > 0) {
                                        var tween_delimiter = elements.eq(idx).data('tweenmax-delimiter');
                                        if (tween_delimiter) {
                                            tween_delimiter.timeScale(coeff);
                                        }
                                    }
                                }
                            });
                        },
                        onComplete: function() {
                            wheel_accelerate.value = 1;
                            elements.each(function(idx) {
                                var tween_obj = elements.eq(idx).data('tweenmax-object');
                                if (tween_obj) {
                                    tween_obj.timeScale(1);
                                    if (delimiters_loop > 0) {
                                        var tween_delimiter = elements.eq(idx).data('tweenmax-delimiter');
                                        if (tween_delimiter) {
                                            tween_delimiter.timeScale(1);
                                        }
                                    }
                                }
                            });
                        }
                    }));
                };
            TRX_ADDONS_STORAGE['bg_text_mousewheel_inited'] = true;
            $document.on('action.stop_wheel_handlers', function(e) {
                wheel_stop = true;
            });
            $document.on('action.start_wheel_handlers', function(e) {
                wheel_stop = false;
            });
            window.addEventListener('mousewheel', wheel_handler, {
                passive: false
            });
            $window.on('DOMMouseScroll', wheel_handler);
        }
    }
})();
(function() {
    'use strict';
    var GET_SIZES_ON_SCROLL = false;
    var $window = jQuery(window),
        $document = jQuery(document),
        $body = jQuery('body');
    var edit_mode = false,
        animation_allowed = true,
        motion_step = 0,
        motion_period = 250;
    var parallax_items = [];
    var bp_params = {
        range_start: {
            default: 0
        },
        range_end: {
            default: 40
        },
        sticky_offset: {
            default: 0
        },
        lag: {
            default: 0
        },
        x_start: {
            default: 0,
            unit: 'px'
        },
        x_end: {
            default: 0,
            unit: 'px'
        },
        y_start: {
            default: 0,
            unit: 'px'
        },
        y_end: {
            default: 0,
            unit: 'px'
        },
        scale_start: {
            default: 100
        },
        scale_end: {
            default: 100
        },
        rotate_start: {
            default: 0
        },
        rotate_end: {
            default: 0
        },
        opacity_start: {
            default: 1
        },
        opacity_end: {
            default: 1
        },
        crop_start: {
            default: 0
        },
        crop_end: {
            default: 100
        }
    };
    $document.on('action.after_add_content', function(e, $cont) {
        if ($cont && $cont.length) {
            $cont.find('.trx_addons_parallax_layers_inited,.trx_addons_parallax_blocks_inited').removeClass('trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited');
        }
    });
    $document.on('action.got_ajax_response action.init_hidden_elements', function(e) {
        setTimeout(function() {
            var items = jQuery('.trx_addons_parallax_layers:not(.trx_addons_parallax_layers_inited)');
            if (items.length > 0) {
                items.each(function() {
                    var layers = new trx_addons_parallax(jQuery(this).addClass('trx_addons_parallax_layers_inited'), 'layers');
                    if (layers.init()) {
                        parallax_items.push(layers);
                    }
                });
            }
            items = jQuery('.trx_addons_parallax_blocks:not(.trx_addons_parallax_blocks_inited)');
            if (items.length > 0) {
                items.each(function() {
                    var $self = jQuery(this);
                    if ($self.hasClass('sc_parallax_text_separate_on')) {
                        var $inner_obj = parallax_text_prepare($self);
                        if ($inner_obj && $inner_obj.length) {
                            items.add($inner_obj);
                            $self.removeClass('trx_addons_parallax_blocks');
                        }
                    } else {
                        var blocks = new trx_addons_parallax($self.addClass('trx_addons_parallax_blocks_inited'), 'blocks');
                        if (blocks.init()) {
                            parallax_items.push(blocks);
                        }
                    }
                });
            }
        }, 0);
    });
    $window.on('elementor/frontend/init', function() {
        edit_mode = Boolean(window.elementorFrontend.isEditMode());
        window.elementorFrontend.hooks.addAction('frontend/element_ready/container', parallax_init);
        window.elementorFrontend.hooks.addAction('frontend/element_ready/section', parallax_init);
        window.elementorFrontend.hooks.addAction('frontend/element_ready/column', parallax_init);
        window.elementorFrontend.hooks.addAction('frontend/element_ready/element', parallax_init);
        window.elementorFrontend.hooks.addAction('frontend/element_ready/widget', parallax_init);
    });

    function parallax_init($init_obj) {
        if (edit_mode) {
            parallax_remove_handlers($init_obj);
        }
        var layers = new trx_addons_parallax($init_obj, 'layers');
        if (layers.init()) {
            parallax_items.push(layers);
        }
        $init_obj.addClass('trx_addons_parallax_layers_inited');
        if ($init_obj.hasClass('sc_parallax_text_separate_on')) {
            var $inner_obj = parallax_text_prepare($init_obj);
            if ($inner_obj && $inner_obj.length) {
                $inner_obj.each(function() {
                    var $self = jQuery(this);
                    var blocks = new trx_addons_parallax($self, 'blocks');
                    if (blocks.init()) {
                        parallax_items.push(blocks);
                    }
                    $self.addClass('trx_addons_parallax_blocks_inited');
                });
            }
        } else {
            var blocks = new trx_addons_parallax($init_obj, 'blocks');
            if (blocks.init()) {
                parallax_items.push(blocks);
            }
        }
        $init_obj.addClass('trx_addons_parallax_blocks_inited');
    }

    function parallax_remove_handlers($init_obj) {
        if (animation_allowed && parallax_items.length) {
            if ($init_obj.hasClass('sc_parallax_text_separate_on')) {
                $init_obj.find('.sc_parallax_text_block').each(function() {
                    var $self = jQuery(this);
                    parallax_items = parallax_items.filter(function(item) {
                        return !item.remove_handlers($self);
                    });
                });
            } else {
                parallax_items = parallax_items.filter(function(item) {
                    return !item.remove_handlers($init_obj);
                });
            }
        }
    }

    function parallax_text_prepare($init_obj, settings) {
        if (!settings) {
            if (!edit_mode) {
                var params = $init_obj.data('parallax-params') || false;
                if (params) {
                    settings = [];
                    settings.push(params);
                }
            } else {
                settings = get_editor_settings($init_obj, 'blocks');
            }
        }
        if (!settings || settings.length === 0 || ['chars', 'words'].indexOf(settings[0].text) == -1 || !$init_obj.data('element_type')) {
            return false;
        }
        var sc = ($init_obj.data('element_type') == 'widget' ? $init_obj.data('widget_type') : $init_obj.data('element_type')).split('.')[0],
            $inner_obj = $init_obj.find('.sc_parallax_text_block');
        if ($inner_obj.length === 0) {
            $inner_obj = $init_obj.find(sc == 'trx_sc_title' ? '.sc_item_title_text,.sc_item_subtitle' : (sc == 'trx_sc_supertitle' ? '.sc_supertitle_text' : (sc == 'heading' ? '.elementor-heading-title' : 'p')));
            if ($inner_obj.length > 0) {
                $inner_obj.each(function(idx) {
                    $inner_obj.eq(idx).html(settings[0].text == 'chars' ? parallax_text_wrap_chars($inner_obj.eq(idx).html(), true) : parallax_text_wrap_words($inner_obj.eq(idx).html()));
                });
                $inner_obj = $inner_obj.find('.sc_parallax_text_block');
                if (settings[0].text_separate) {
                    $inner_obj.each(function(idx) {
                        var params = trx_addons_object_clone(settings[0]);
                        if (params.lag > 0) {
                            params.lag = trx_addons_window_width() < TRX_ADDONS_STORAGE['mobile_breakpoint_scroll_lag_off'] ? 0 : params.lag * (idx + 1);
                        }
                        $inner_obj.eq(idx).attr('data-parallax-params', JSON.stringify(params));
                    });
                }
            }
        }
        return $inner_obj;
    }

    function parallax_text_wrap_chars(txt, wrap_words) {
        return trx_addons_wrap_chars(txt, '<span class="sc_parallax_text_block">', '</span>', wrap_words ? '<span class="sc_parallax_word_wrap">' : '', wrap_words ? '</span>' : '');
    }

    function parallax_text_wrap_words(txt) {
        return trx_addons_wrap_words(txt, '<span class="sc_parallax_text_block">', '</span>');
    }

    function get_editor_settings($target, init_type) {
        if (!window.elementor || !window.elementor.hasOwnProperty('elements')) {
            return false;
        }
        var elements = window.elementor.elements;
        if (!elements.models) {
            return false;
        }
        var section_id = $target.data('id'),
            section_cid = $target.data('model-cid'),
            section_data = {};

        function get_section_data(idx, obj) {
            if (0 < Object.keys(section_data).length) {
                return;
            } else if (section_id == obj.id) {
                section_data = obj.attributes.settings.attributes;
            } else if (obj.attributes && obj.attributes.elements && obj.attributes.elements.models) {
                jQuery.each(obj.attributes.elements.models, get_section_data);
            }
        }
        jQuery.each(elements.models, get_section_data);
        if (0 === Object.keys(section_data).length) {
            return false;
        }
        var settings = [];
        if (init_type == 'layers' && section_data.hasOwnProperty('parallax_blocks')) {
            jQuery.each(section_data['parallax_blocks'].models, function(index, obj) {
                settings.push(obj.attributes);
            });
        } else if (init_type == 'blocks' && (section_data.hasOwnProperty('parallax') && section_data.parallax == 'parallax' || section_data.hasOwnProperty('parallax_mouse') && section_data.parallax_mouse == 'mouse')) {
            var parallax_on = section_data.hasOwnProperty('parallax') && section_data.parallax == 'parallax',
                mouse_on = section_data.hasOwnProperty('parallax_mouse') && section_data.parallax_mouse == 'mouse';
            var data = {
                parallax: parallax_on ? 1 : 0,
                type: parallax_on && section_data.hasOwnProperty('parallax_type') ? section_data.parallax_type : 'object',
                flow: parallax_on && section_data.hasOwnProperty('parallax_flow') ? section_data.parallax_flow : 'default',
                crop: parallax_on && section_data.hasOwnProperty('parallax_crop') ? section_data.parallax_crop : 'none',
                duration: parallax_on && section_data.hasOwnProperty('parallax_duration') ? section_data.parallax_duration.size : 1,
                delay: parallax_on && section_data.hasOwnProperty('parallax_delay') ? section_data.parallax_delay.size : 0,
                squeeze: parallax_on && section_data.hasOwnProperty('parallax_squeeze') ? section_data.parallax_squeeze.size : 1,
                ease: parallax_on && section_data.hasOwnProperty('parallax_ease') ? section_data.parallax_ease : 'power2',
                text: parallax_on && section_data.hasOwnProperty('parallax_text') ? section_data.parallax_text : 'block',
                text_separate: parallax_on && section_data.hasOwnProperty('parallax_text_separate') ? section_data.parallax_text_separate : 0,
                text_wrap: parallax_on && section_data.hasOwnProperty('parallax_text_wrap') ? 1 : 0,
                mouse: mouse_on ? 1 : 0,
                mouse_type: mouse_on && section_data.hasOwnProperty('parallax_mouse_type') ? section_data.parallax_mouse_type : 'transform3d',
                mouse_tilt_amount: mouse_on && section_data.hasOwnProperty('parallax_mouse_tilt_amount') ? section_data.parallax_mouse_tilt_amount.size : 70,
                mouse_speed: mouse_on && section_data.hasOwnProperty('parallax_mouse_speed') ? section_data.parallax_mouse_speed.size : 10,
                mouse_z: mouse_on && section_data.hasOwnProperty('parallax_mouse_z') ? section_data.parallax_mouse_z.size : '',
                mouse_handler: mouse_on && section_data.hasOwnProperty('parallax_mouse_handler') ? section_data.parallax_mouse_handler : 'row'
            };
            var suffix_prev = '',
                suffix = '',
                param_name = '',
                param_prev = '',
                defa = {};
            for (var resp in TRX_ADDONS_STORAGE['elementor_breakpoints']) {
                suffix = resp == 'desktop' ? '' : '_' + resp;
                for (var param in bp_params) {
                    defa = bp_params[param];
                    param_name = param + suffix;
                    param_prev = param + suffix_prev;
                    if (suffix && !section_data.hasOwnProperty('parallax_' + param_name)) continue;
                    data[param_name] = section_data.hasOwnProperty('parallax_' + param_name) && section_data['parallax_' + param_name]['size'] !== '' ? section_data['parallax_' + param_name]['size'] : (!suffix ? defa['default'] : data[param_prev]);
                    if (defa['unit']) {
                        data[param_name + '_unit'] = section_data.hasOwnProperty('parallax_' + param_name) && section_data['parallax_' + param_name].hasOwnProperty('unit') && section_data['parallax_' + param_name]['size'] !== '' ? section_data['parallax_' + param_name]['unit'] : (!suffix ? defa['unit'] : data[param_prev + '_unit']);
                    }
                    if (!suffix) {
                        data[param_name + '_desktop'] = data[param_name];
                        if (defa['unit']) {
                            data[param_name + '_unit_desktop'] = data[param_name + '_unit'];
                        }
                    }
                }
                if (typeof data['x_start' + suffix] != 'undefined' && typeof data['x_end' + suffix] != 'undefined') {
                    if (data['x_end' + suffix] == 0) data['x_end' + suffix + '_unit'] = data['x_start' + suffix + '_unit'];
                    else if (data['x_start' + suffix] == 0) data['x_start' + suffix + '_unit'] = data['x_end' + suffix + '_unit'];
                }
                if (typeof data['y_start' + suffix] != 'undefined' && typeof data['y_end' + suffix] != 'undefined') {
                    if (data['y_end' + suffix] == 0) data['y_end' + suffix + '_unit'] = data['y_start' + suffix + '_unit'];
                    else if (data['y_start' + suffix] == 0) data['y_start' + suffix + '_unit'] = data['y_end' + suffix + '_unit'];
                }
                suffix_prev = suffix;
            }
            settings.push(parallax_bp_settings(data));
        }
        return 0 !== settings.length ? settings : false;
    }

    function parallax_bp_settings(settings) {
        if (!settings.hasOwnProperty('last_bp')) {
            settings['last_bp'] = 'desktop';
            for (var param in bp_params) {
                var param_name = param + '_desktop';
                if (!settings.hasOwnProperty(param_name)) {
                    settings[param_name] = settings[param];
                    if (bp_params[param]['unit']) {
                        settings[param_name + '_unit'] = settings[param + '_unit'];
                    }
                }
            }
        }
        var bp = trx_addons_get_responsive_breakpoint();
        if (bp != settings['last_bp']) {
            for (var param in bp_params) {
                var param_name = param + '_' + bp;
                if (settings.hasOwnProperty(param_name)) {
                    settings[param] = settings[param_name];
                    if (bp_params[param]['unit']) {
                        settings[param + '_unit'] = settings[param_name + '_unit'];
                    }
                }
            }
            settings['last_bp'] = bp;
        }
        return settings;
    }
    window.trx_addons_parallax = function($target, init_type) {
        var self = this,
            settings = false,
            parallax_type = 'none',
            $targetLayers = $target,
            $targetBlocks = $target,
            target_id = $target.data('id');
        if (!target_id) {
            target_id = 'parallax' + ('' + Math.random()).replace('.', '');
            $target.data('id', target_id);
        }
        var scroll_list = [],
            mouse_list = [],
            motion_list = [];
        var on_start_inited = false;
        var wst = trx_addons_window_scroll_top() + trx_addons_fixed_rows_height(),
            ww = trx_addons_window_width(),
            wh = trx_addons_window_height() - trx_addons_fixed_rows_height(),
            is_safari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/),
            platform = navigator.platform;
        var tl = 0,
            tt = 0,
            tw = 0,
            th = 0,
            tx = 0,
            ty = 0,
            cx = 0,
            cy = 0,
            dx = 0,
            dy = 0;
        self.init = function() {
            if (!edit_mode) {
                if (init_type == 'layers') {
                    settings = $target.data('parallax-blocks') || false;
                    if (settings) {
                        parallax_type = 'layers';
                    }
                } else {
                    var params = $target.data('parallax-params') || false;
                    if (params) {
                        settings = [];
                        settings.push(params);
                        parallax_type = 'blocks';
                    }
                }
            } else {
                settings = get_editor_settings($target, init_type);
                if (settings) {
                    parallax_type = init_type;
                }
            }
            if (!settings) {
                return false;
            }
            if (settings[0].mouse == 1) {
                parallax_type += '|layers';
                var layout_data = {
                    selector: $target,
                    image: false,
                    size: 'auto',
                    prop: settings[0].mouse_type || 'transform3d',
                    type: 'mouse',
                    x: 0,
                    y: 0,
                    z: settings[0].mouse_z || 0,
                    speed: 2 * ((settings[0].mouse_speed ? settings[0].mouse_speed : 10) / 100),
                    tilt_amount: settings[0].mouse_tilt_amount || 70,
                    motion_dir: 'round',
                    motion_time: 5
                };
                mouse_list.push(layout_data);
            }
            if (init_type == 'layers' || settings[0].mouse == 1) {
                if (settings[0].mouse_handler == 'window') {
                    $targetLayers = $body;
                } else if (settings[0].mouse_handler == 'content') {
                    $targetLayers = jQuery(trx_addons_apply_filters('trx_addons_filter_page_wrap_class', TRX_ADDONS_STORAGE['page_wrap_class'] ? TRX_ADDONS_STORAGE['page_wrap_class'] : '.page_wrap', 'elementor-parallax')).eq(0);
                } else if (settings[0].mouse_handler == 'row') {
                    if (init_type != 'layers') {
                        $targetLayers = $target.hasClass('trx_addons_parallax_blocks') ? $target.parent() : $target.parents('.elementor-section,.e-con.e-parent').eq(0);
                    }
                } else if (settings[0].mouse_handler == 'column') {
                    $targetLayers = $target.hasClass('trx_addons_parallax_blocks') ? $target.parent() : $target.parents('.elementor-column,.e-con.e-child').eq(0);
                } else if (settings[0].mouse_handler == 'parent') {
                    $targetLayers = $target.parent();
                } else if (settings[0].mouse_handler && '.#'.indexOf(settings[0].mouse_handler.substring(0, 1)) != -1) {
                    $targetLayers = $target.parents(settings[0].mouse_handler);
                } else if (settings[0].mouse_type == 'tilt') {
                    var $tilt_trigger = $target.parents('.trx_addons_tilt_trigger');
                    if ($tilt_trigger.length > 0) {
                        $targetLayers = $tilt_trigger.eq(0);
                    }
                }
                $targetLayers.data('mouse-handler', settings[0].mouse_handler);
            }
            if (parallax_type.indexOf('layers') >= 0) {
                if (init_type == 'layers') {
                    self.create_layers();
                }
                if (animation_allowed) {
                    if (!$targetLayers.attr('data-mousemove-' + target_id)) {
                        $targetLayers.attr('data-mousemove-' + target_id, target_id);
                        $targetLayers.on('mousemove.trx_addons_parallax', self.mouse_move_handler);
                        $targetLayers.on('mouseleave.trx_addons_parallax', self.mouse_leave_handler);
                    }
                    if (motion_list.length > 0) {
                        $targetLayers.attr('data-motionmove-' + target_id, setInterval(self.motion_move_handler, motion_period));
                    }
                }
            }
            if (parallax_type.indexOf('blocks') >= 0) {
                settings[0].selector = $targetBlocks;
                settings[0].hsection = $targetBlocks.parents('.sc_hscroll_section');
                settings[0].hscroller = settings[0].hsection.length ? settings[0].hsection.parents('.sc_hscroll_scroller') : false;
                if (settings[0].flow == 'sticky') {
                    $targetBlocks.css('top', (100 - settings[0].range_start) + '%');
                }
                scroll_list.push(settings[0]);
                settings[0].selector.addClass('trx_addons_parallax_blocks_need_start');
            }
            if (!GET_SIZES_ON_SCROLL) {
                self.get_blocks_sizes();
                $document.on('action.init_hidden_elements action.hscroll_inited', self.get_blocks_sizes);
                $document.on('action.sc_layouts_row_fixed_on action.sc_layouts_row_fixed_off', self.get_blocks_sizes);
                $document.on('action.resize_trx_addons', self.get_blocks_sizes);
            }
            if (animation_allowed) {
                on_start_inited = false;
                var on_start_init = trx_addons_throttle(function() {
                    if (!on_start_inited) {
                        on_start_inited = true;
                        self.scroll_update(true);
                        setTimeout(function() {
                            self.scroll_handler();
                        }, 10);
                    }
                }, 100);
                $document.on('action.resize_trx_addons action.scroll_trx_addons action.hscroll_inited', self.scroll_handler);
                $document.on('action.resize_trx_addons action.scroll_trx_addons action.hscroll_inited action.init_hidden_elements action.sc_layouts_row_fixed_on action.sc_layouts_row_fixed_off', on_start_init);
            }
            return true;
        };
        self.remove_handlers = function($init_obj, force) {
            var found = $target.is($init_obj) || force;
            if (found) {
                var id = $init_obj.data('id');
                $init_obj.attr('style', '');
                if ($init_obj.attr('data-mousemove-' + id)) {
                    $init_obj.removeAttr('data-mousemove-' + id);
                    $init_obj.off('mousemove.trx_addons_parallax', self.mouse_move_handler);
                    $init_obj.off('mouseleave.trx_addons_parallax', self.mouse_leave_handler);
                }
                if ($init_obj.attr('data-motionmove-' + id)) {
                    clearInterval($init_obj.attr('data-motionmove-' + id));
                    $init_obj.removeAttr('data-motionmove-' + id);
                }
            }
            return found;
        };
        self.get_blocks_sizes = function() {
            jQuery.each(scroll_list, function(index, block) {
                var hscroller_offset = block.hsection.length ? block.hscroller.data('hscroll-offset') || 0 : 0;
                var hsection_offset = block.hsection.length ? block.hsection.data('hscroll-section-offset') || 0 : 0;
                hscroller_offset += hsection_offset;
                block.sizes = {
                    width: block.selector.outerWidth(),
                    height: block.selector.outerHeight(),
                    top: block.selector.offset().top + hscroller_offset
                };
                if (block.flow == 'sticky') {
                    var $parent = block.selector.parent();
                    block.sizes.parent_selector = $parent;
                    block.sizes.parent_height = $parent.length ? $parent.outerHeight() : 0;
                    block.sizes.parent_top = $parent.length ? $parent.offset().top + hscroller_offset : 0;
                }
            });
        };
        self.create_layers = function() {
            $target.find('> .sc_parallax_block').remove();
            var bg_parallax_present = false;
            jQuery.each(settings, function(index, block) {
                var image = block['image'].url,
                    speed = block['speed'].size,
                    z_index = block['z_index'].size,
                    bg_size = block['bg_size'] ? block['bg_size'] : 'auto',
                    type = block['type'] ? block['type'] : 'none',
                    anim_prop = block['animation_prop'] ? (['scroll', 'motion'].indexOf(type) != -1 && block['animation_prop'] != 'background' ? 'transform' : block['animation_prop']) : 'background',
                    left = block['left'].size,
                    top = block['top'].size,
                    motion_dir = block['motion_dir'] ? block['motion_dir'] : 'round',
                    motion_time = block['motion_time'] ? block['motion_time'].size : 5,
                    tilt_amount = block['mouse_tilt_amount'] ? block['mouse_tilt_amount'].size : 70,
                    mouse_handler = block['mouse_handler'] ? block['mouse_handler'] : 'row',
                    bg_parallax = block['bg_parallax'] && type == 'scroll' && anim_prop == 'background' ? block['bg_parallax'] : false,
                    $layout = null;
                if (bg_parallax) {
                    bg_parallax_present = true;
                }
                if ('' !== image || 'none' !== type) {
                    var layout_init = {
                        'z-index': z_index
                    };
                    if ('none' === type) {
                        layout_init['left'] = left + '%';
                        layout_init['top'] = top + '%';
                    }
                    $layout = jQuery('<div class="sc_parallax_block' + ' sc_parallax_block_type_' + type + ' sc_parallax_block_animation_' + (bg_parallax ? 'bg_parallax' : anim_prop) + (is_safari ? ' is-safari' : '') + ('MacIntel' == platform ? ' is-mac' : '') + (typeof block['class'] !== 'undefined' && block['class'] != '' ? ' ' + block['class'] : '') + '">' + '<div class="sc_parallax_block_image"' + (bg_parallax ? ' parallax="' + (speed / 100) + '"' : '') + '></div>' + '</div>').prependTo($target).css(layout_init);
                    layout_init = {
                        'background-image': 'url(' + image + ')',
                        'background-size': bg_size,
                        'background-position-x': left + '%',
                        'background-position-y': top + '%'
                    };
                    $layout.find('> .sc_parallax_block_image').css(layout_init);
                    var layout_data = {
                        selector: $layout,
                        image: image,
                        size: bg_size,
                        bg_parallax: bg_parallax,
                        prop: anim_prop,
                        type: type,
                        x: left,
                        y: top,
                        z: z_index,
                        speed: 2 * (speed / 100),
                        tilt_amount: tilt_amount,
                        mouse_handler: mouse_handler,
                        motion_dir: motion_dir,
                        motion_time: motion_time
                    };
                    if ('scroll' === type) {
                        layout_data.hsection = layout_data.selector.parents('.sc_hscroll_section');
                        layout_data.hscroller = layout_data.hsection.length ? layout_data.hsection.parents('.sc_hscroll_scroller') : false;
                        scroll_list.push(layout_data);
                    } else if ('mouse' === type) {
                        mouse_list.push(layout_data);
                    } else if ('motion' === type) {
                        motion_list.push(layout_data);
                    }
                }
            });
            if (bg_parallax_present) {
                trx_addons_bg_parallax($target.get(0));
            }
        };
        var in_out_last_state = '';
        self.get_block_params = function(block) {
            var params = trx_addons_object_merge({}, parallax_bp_settings(block));
            if (typeof params.type == 'undefined') params.type = 'object';
            if (typeof params.flow == 'undefined') params.flow = 'default';
            if (typeof params.crop == 'undefined') params.crop = 'none';
            if (typeof params.range_start == 'undefined') params.range_start = 0;
            if (typeof params.range_end == 'undefined') params.range_end = 40;
            if (params.range_end <= params.range_start) {
                params.range_end = Math.min(100, params.range_start + params.range_end);
            }
            if (typeof params.sticky_offset == 'undefined') params.sticky_offset = 0;
            if (params.flow == 'entrance') {
                params.range_end = 100;
            } else if (params.flow == 'sticky') {
                params.range_end = params.range_start;
            }
            if (typeof params.duration == 'undefined') params.duration = 1;
            if (typeof params.delay == 'undefined') params.delay = 0;
            if (typeof params.squeeze == 'undefined') params.squeeze = 1;
            if (typeof params.ease == 'undefined') params.ease = "power2";
            if (typeof params.lag == 'undefined') params.lag = 0;
            if (typeof params.x_start == 'undefined') params.x_start = 0;
            if (typeof params.x_start_unit == 'undefined') params.x_start_unit = 'px';
            if (typeof params.x_end == 'undefined') params.x_end = 0;
            if (typeof params.x_end_unit == 'undefined') params.x_end_unit = 'px';
            if (typeof params.y_start == 'undefined') params.y_start = 0;
            if (typeof params.y_start_unit == 'undefined') params.y_start_unit = 'px';
            if (typeof params.y_end == 'undefined') params.y_end = 0;
            if (typeof params.y_end_unit == 'undefined') params.y_end_unit = 'px';
            if (typeof params.scale_start == 'undefined') params.scale_start = 100;
            if (typeof params.scale_end == 'undefined') params.scale_end = 100;
            if (typeof params.rotate_start == 'undefined') params.rotate_start = 0;
            if (typeof params.rotate_end == 'undefined') params.rotate_end = 0;
            if (typeof params.opacity_start == 'undefined') params.opacity_start = 1;
            if (typeof params.opacity_end == 'undefined') params.opacity_end = 1;
            if (typeof params.crop_start == 'undefined') params.crop_start = 100;
            if (typeof params.crop_end == 'undefined') params.crop_end = 100;
            if (typeof params.text == 'undefined') params.text = 'block';
            if (typeof params.text_separate == 'undefined') params.text_separate = 0;
            if (params.flow == 'in_out') {
                var w_top = wst + wh * (1 - params.range_end / 100),
                    w_bottom = wst + wh * (1 - params.range_start / 100),
                    obj_height = params.sizes.height,
                    obj_top = params.sizes.top + (ww < TRX_ADDONS_STORAGE['mobile_breakpoint_scroll_lag_off'] ? 0 : params.lag),
                    obj_bottom = obj_top + obj_height;
                if (w_top >= obj_bottom || in_out_last_state == 'out') {
                    in_out_last_state = w_top >= obj_bottom ? 'out' : '';
                    params.in_out_state = 'out';
                    params.force = w_top < obj_bottom;
                    params.range_start = params.range_end;
                    params.range_end = 100;
                    params.x_start = 0;
                    params.y_start = 0;
                    params.scale_start = 100;
                    params.rotate_start = 0;
                    params.opacity_start = 1;
                    params.crop_start = 100;
                    params.crop = self.crop_reverse(params, 'out');
                } else if (w_bottom <= obj_top || in_out_last_state == 'in') {
                    in_out_last_state = w_bottom <= obj_top ? 'in' : '';
                    params.in_out_state = 'in';
                    params.force = w_bottom > obj_top;
                    params.range_end = params.range_start;
                    params.range_start = 0;
                    params.x_end = 0;
                    params.y_end = 0;
                    params.scale_end = 100;
                    params.rotate_end = 0;
                    params.opacity_end = 1;
                    params.crop_end = 100;
                    params.crop = self.crop_reverse(params, 'in');
                } else {
                    params.in_out_state = '';
                    params.x_start = params.x_end = 0;
                    params.y_start = params.y_end = 0;
                    params.scale_start = params.scale_end = 100;
                    params.rotate_start = params.rotate_end = 0;
                    params.opacity_start = params.opacity_end = 1;
                    params.crop_start = params.crop_end = 100;
                }
            }
            return params;
        };
        self.scroll_handler = function(e) {
            if (!animation_allowed) {
                return;
            }
            wst = trx_addons_window_scroll_top() + trx_addons_fixed_rows_height();
            ww = trx_addons_window_width();
            wh = trx_addons_window_height() - trx_addons_fixed_rows_height();
            if (on_start_inited) {
                self.scroll_update();
            }
        };
        self.scroll_update = function(force) {
            if (GET_SIZES_ON_SCROLL) {
                self.get_blocks_sizes();
            }
            jQuery.each(scroll_list, function(index, block) {
                if (parallax_type.indexOf('layers') >= 0) {
                    if ((!block.bg_parallax || block.prop != 'background') && block.speed !== undefined) {
                        var $image = block.selector.find('.sc_parallax_block_image').eq(0),
                            speed = block.speed,
                            offset_top = block.sizes.top,
                            h = block.sizes.height,
                            y = (wst + wh - offset_top) / h * 100;
                        if (wst < offset_top - wh) y = 0;
                        if (wst > offset_top + h) y = 200;
                        y = parseFloat(speed * y).toFixed(1);
                        if ('background' === block.prop) {
                            $image.css({
                                'background-position': block.x + '% calc(' + block.y + '% + ' + y + 'px)'
                            });
                        } else {
                            $image.css({
                                'transform': 'translateY(' + y + 'px)'
                            });
                        }
                    }
                }
                if (parallax_type.indexOf('blocks') >= 0) {
                    var params = self.get_block_params(block);
                    var w_top = wst + wh * (1 - params.range_end / 100),
                        w_bottom = wst + wh * (1 - params.range_start / 100),
                        w_delta = params.flow == 'entrance' ? 0 : 100,
                        obj = params.selector,
                        obj_width = params.sizes.width,
                        obj_height = params.sizes.height,
                        obj_top = params.sizes.top + (ww < TRX_ADDONS_STORAGE['mobile_breakpoint_scroll_lag_off'] ? 0 : params.lag),
                        obj_bottom = obj_top + obj_height,
                        parent_top = params.flow == 'sticky' ? params.sizes.parent_top : 0,
                        parent_bottom = params.flow == 'sticky' ? parent_top + params.sizes.parent_height * (1 - params.sticky_offset / 100) : 0;
                    var entrance_complete = obj.hasClass('sc_parallax_entrance_complete'),
                        bottom_delta = params.flow == 'entrance' && params.range_start == 0 ? wh * (1 - params.range_start / 100) / 10 : 0;
                    var obj_visible = true;
                    if (obj.data('inited') === undefined && params.flow != 'sticky') {
                        if (obj_top > w_bottom) {
                            obj_top = w_bottom + w_delta - bottom_delta;
                            obj_visible = false;
                        } else if (obj_bottom < w_top) {
                            obj_bottom = w_top - w_delta;
                            obj_visible = false;
                        }
                        obj.data('inited', 1);
                    }
                    if ((force || params.force) || (!entrance_complete && w_top - w_delta <= (params.flow == 'sticky' ? parent_bottom : (params.flow == 'in_out' && params.in_out_state == 'in' ? obj_top : obj_bottom)) && (params.flow == 'sticky' ? parent_top : (params.flow == 'in_out' && params.in_out_state == 'out' ? obj_bottom : obj_top)) <= w_bottom + w_delta - bottom_delta)) {
                        if (params.flow == 'entrance') {
                            var entrance_start = false;
                            if (!obj.data('entrance-inited')) {
                                if (obj_bottom <= w_top - w_delta) {
                                    obj.addClass('sc_parallax_entrance_complete');
                                } else {
                                    entrance_start = true;
                                }
                                obj.data('entrance-inited', 1);
                            } else if (!obj.hasClass('sc_parallax_entrance_complete')) {
                                obj.addClass('sc_parallax_entrance_complete');
                            }
                        }
                        var delta, shift;
                        if (params.flow == 'entrance') {
                            delta = 1;
                            shift = entrance_start ? 0 : 1;
                        } else if (params.flow == 'sticky') {
                            var obj_anchor = obj_top + Math.round(obj_height * (100 - params.range_start) / 100);
                            delta = Math.max(1, parent_bottom - obj_bottom);
                            shift = Math.max(0, w_bottom - obj_anchor);
                            if (force) {
                                block.selector.css('top', 'calc( ' + (100 - params.range_start) + '% - ' + (obj_anchor - obj_top) + 'px )');
                            }
                        } else if (params.flow == 'in_out') {
                            delta = Math.max(1, wh * (params.range_end - params.range_start) / 100);
                            shift = w_bottom - (params.in_out_state == 'in' ? obj_top : obj_bottom);
                        } else {
                            delta = Math.max(1, wh * (params.range_end - params.range_start) / 100 + obj_height);
                            shift = w_bottom - obj_top;
                        }
                        var x_start_in_px = params.x_start_unit == 'px' || params.x_start_unit == params.x_end_unit ? params.x_start : trx_addons_units2px(params.x_start + params.x_start_unit, obj, 'x'),
                            x_end_in_px = params.x_end_unit == 'px' || params.x_start_unit == params.x_end_unit ? params.x_end : trx_addons_units2px(params.x_end + params.x_end_unit, obj, 'x'),
                            y_start_in_px = params.y_start_unit == 'px' || params.y_start_unit == params.y_end_unit ? params.y_start : trx_addons_units2px(params.y_start + params.y_start_unit, obj, 'y'),
                            y_end_in_px = params.y_end_unit == 'px' || params.y_start_unit == params.y_end_unit ? params.y_end : trx_addons_units2px(params.y_end + params.y_end_unit, obj, 'y'),
                            step_x = x_start_in_px != x_end_in_px ? (x_end_in_px - x_start_in_px) / delta : 0,
                            step_y = y_start_in_px != y_end_in_px ? (y_end_in_px - y_start_in_px) / delta : 0,
                            step_scale = params.scale_start != params.scale_end ? (params.scale_end - params.scale_start) / 100 / delta : 0,
                            step_rotate = params.rotate_start != params.rotate_end ? (params.rotate_end - params.rotate_start) / delta : 0,
                            step_opacity = params.opacity_start != params.opacity_end ? (params.opacity_end - params.opacity_start) / delta : 0,
                            step_crop = !trx_addons_is_off(params.crop) && params.crop_start != params.crop_end ? (params.crop_end - params.crop_start) / delta : 0;
                        var scroller_init = {
                                overwrite: true,
                                ease: self.get_ease(params.ease)
                            },
                            val = false;
                        if (step_x !== 0) {
                            val = Math.round(x_start_in_px + shift * step_x);
                            if (x_start_in_px < x_end_in_px && val < x_start_in_px || x_start_in_px > x_end_in_px && val > x_start_in_px) {
                                val = x_start_in_px;
                            }
                            if (x_start_in_px < x_end_in_px && val > x_end_in_px || x_start_in_px > x_end_in_px && val < x_end_in_px) {
                                val = x_end_in_px;
                            }
                            scroller_init.x = val + (params.x_start_unit == params.x_end_unit ? params.x_start_unit : 'px');
                        }
                        if (step_y !== 0) {
                            val = Math.round(y_start_in_px + shift * step_y);
                            if (y_start_in_px < y_end_in_px && val < y_start_in_px || y_start_in_px > y_end_in_px && val > y_start_in_px) {
                                val = y_start_in_px;
                            }
                            if (y_start_in_px < y_end_in_px && val > y_end_in_px || y_start_in_px > y_end_in_px && val < y_end_in_px) {
                                val = y_end_in_px;
                            }
                            scroller_init.y = val + (params.y_start_unit == params.y_end_unit ? params.y_start_unit : 'px');
                        }
                        if (step_rotate !== 0) {
                            val = trx_addons_round_number(params.rotate_start + shift * step_rotate, 2);
                            if (params.rotate_start < params.rotate_end && val < params.rotate_start || params.rotate_start > params.rotate_end && val > params.rotate_start) {
                                val = params.rotate_start;
                            }
                            if (params.rotate_start < params.rotate_end && val > params.rotate_end || params.rotate_start > params.rotate_end && val < params.rotate_end) {
                                val = params.rotate_end;
                            }
                            scroller_init.rotation = val;
                        }
                        if (step_scale !== 0) {
                            val = trx_addons_round_number(params.scale_start / 100 + shift * step_scale, 2);
                            if (params.scale_start < params.scale_end && val < params.scale_start / 100 || params.scale_start > params.scale_end && val > params.scale_start / 100) {
                                val = params.scale_start / 100;
                            }
                            if (params.scale_start < params.scale_end && val > params.scale_end / 100 || params.scale_start > params.scale_end && val < params.scale_end / 100) {
                                val = params.scale_end / 100;
                            }
                            scroller_init.scale = val;
                        }
                        if (step_opacity !== 0) {
                            val = trx_addons_round_number(params.opacity_start + shift * step_opacity, 2);
                            if (params.opacity_start < params.opacity_end && val < params.opacity_start || params.opacity_start > params.opacity_end && val > params.opacity_start) {
                                val = params.opacity_start;
                            }
                            if (params.opacity_start < params.opacity_end && val > params.opacity_end || params.opacity_start > params.opacity_end && val < params.opacity_end) {
                                val = params.opacity_end;
                            }
                            scroller_init.opacity = Math.max(0, Math.min(1, val));
                        }
                        if (step_crop !== 0) {
                            val = trx_addons_round_number(params.crop_start + shift * step_crop, 2);
                            if (params.crop_start < params.crop_end && val < params.crop_start || params.crop_start > params.crop_end && val > params.crop_start) {
                                val = params.crop_start;
                            }
                            if (params.crop_start < params.crop_end && val > params.crop_end || params.crop_start > params.crop_end && val < params.crop_end) {
                                val = params.crop_end;
                            }
                            scroller_init.crop = Math.max(0, Math.min(100, val));
                            scroller_init.onUpdate = function(t) {
                                obj.css('clip-path', self.clip_path(obj.prop('crop'), params.crop, obj));
                            };
                        }
                        obj.data('trx-parallax-scroller-init', scroller_init);
                        if (['chars', 'words'].indexOf(params.text) != -1 && obj.data('element_type') !== undefined) {
                            var $inner_obj = parallax_text_prepare(obj, [params]);
                            if ($inner_obj && $inner_obj.length > 0) {
                                $inner_obj.addClass('trx_addons_parallax_blocks_need_start');
                                obj.removeClass('trx_addons_parallax_blocks_need_start');
                                obj = $inner_obj;
                            }
                        }
                        if (step_crop !== 0) {
                            obj.each(function() {
                                if (jQuery(this).prop('crop') === undefined) {
                                    jQuery(this).prop('crop', scroller_init.crop);
                                }
                            });
                        }
                        var set_start_position = force;
                        if (val !== false) {
                            var animate = function() {
                                obj.each(function(idx) {
                                    if (idx === 0 || set_start_position) {
                                        TweenMax.to(obj.eq(idx), set_start_position ? 0 : params.duration, scroller_init);
                                        if (set_start_position) {
                                            obj.eq(idx).addClass('trx_addons_parallax_blocks_on_start');
                                        }
                                    } else {
                                        setTimeout(function() {
                                            TweenMax.to(obj.eq(idx), params.duration, scroller_init);
                                        }, (params.text == 'chars' ? 75 : 250) * idx * params.squeeze);
                                    }
                                });
                            };
                            if (params.flow == 'entrance' && params.delay > 0 && !entrance_start) {
                                setTimeout(animate, params.delay * 1000);
                            } else {
                                animate();
                            }
                        } else if (set_start_position) {
                            obj.addClass('trx_addons_parallax_blocks_on_start');
                        }
                    }
                }
            });
        };
        self.crop_reverse = function(params, state) {
            var crop_in = params.crop_orig ? params.crop_orig : params.crop,
                crop_out = crop_in;
            if (state == 'out') {
                if (!params.crop_orig) params.crop_orig = crop_in;
                if (crop_in == 'wipe_left_right') crop_out = 'wipe_right_left';
                else if (crop_in == 'wipe_right_left') crop_out = 'wipe_left_right';
                else if (crop_in == 'wipe_top_bottom') crop_out = 'wipe_bottom_top';
                else if (crop_in == 'wipe_bottom_top') crop_out = 'wipe_top_bottom';
                else if (crop_in == 'corner_top_left') crop_out = 'corner_bottom_right';
                else if (crop_in == 'corner_top_right') crop_out = 'corner_bottom_left';
                else if (crop_in == 'corner_bottom_left') crop_out = 'corner_top_right';
                else if (crop_in == 'corner_bottom_right') crop_out = 'corner_top_left';
                else if (crop_in == 'box_left') crop_out = 'box_right';
                else if (crop_in == 'box_right') crop_out = 'box_left';
                else if (crop_in == 'box_top') crop_out = 'box_bottom';
                else if (crop_in == 'box_bottom') crop_out = 'box_top';
            }
            return state == 'in' ? crop_in : crop_out;
        };
        self.clip_path = function(val, type, obj) {
            var clip = '';
            if (type == 'circle') {
                clip = 'circle(' + val + '% at center)';
            } else if (type == 'ellipse_hor') {
                clip = 'ellipse( ' + Math.min(100, val * 1.2) + '% ' + val + '% at center)';
            } else if (type == 'ellipse_ver') {
                clip = 'ellipse(' + val + '% ' + Math.min(100, val * 2.5) + '% at center)';
            } else {
                var border_radius = obj.data('trx-addons-clip-border-radius') === undefined ? obj.find('>.elementor-widget-container').css('border-radius') : obj.data('trx-addons-clip-border-radius');
                if (obj.data('trx-addons-clip-border-radius') === undefined) {
                    obj.data('trx-addons-clip-border-radius', border_radius);
                }
                var x_divider = ['wipe_out_vertical', 'box_center', 'box_top', 'box_bottom'].indexOf(type) != -1 ? 2 : 1;
                var y_divider = ['wipe_out_horizontal', 'box_center', 'box_left', 'box_right'].indexOf(type) != -1 ? 2 : 1;
                var shift_top = ['wipe_bottom_top', 'wipe_out_horizontal', 'corner_bottom_left', 'corner_bottom_right', 'box_center', 'box_left', 'box_right', 'box_bottom'].indexOf(type) != -1 ? 1 : 0;
                var shift_bottom = ['wipe_top_bottom', 'wipe_out_horizontal', 'corner_top_left', 'corner_top_right', 'box_center', 'box_left', 'box_right', 'box_top'].indexOf(type) != -1 ? 1 : 0;
                var shift_left = ['wipe_right_left', 'wipe_out_vertical', 'corner_top_right', 'corner_bottom_right', 'box_center', 'box_top', 'box_right', 'box_bottom'].indexOf(type) != -1 ? 1 : 0;
                var shift_right = ['wipe_left_right', 'wipe_out_vertical', 'corner_top_left', 'corner_bottom_left', 'box_center', 'box_top', 'box_left', 'box_bottom'].indexOf(type) != -1 ? 1 : 0;
                clip = 'inset(' + (shift_top ? (100 - val) / y_divider : 0) + '% ' + (shift_right ? (100 - val) / x_divider : 0) + '% ' + (shift_bottom ? (100 - val) / y_divider : 0) + '% ' + (shift_left ? (100 - val) / x_divider : 0) + '%' + (parseFloat(border_radius) > 0 ? ' round ' + border_radius : '') + ')';
            }
            return clip;
        };
        self.mouse_move_handler = function(e) {
            if (tw === 0) {
                tl = $targetLayers.offset().left;
                tt = $targetLayers.offset().top;
                tw = $targetLayers.width();
                th = ['window', 'content'].indexOf($targetLayers.data('mouse-handler')) != -1 ? Math.min(trx_addons_window_height(), $targetLayers.height()) : $targetLayers.height();
                cx = Math.ceil(tw / 2);
                cy = Math.ceil(th / 2);
            }
            wst = trx_addons_window_scroll_top() + trx_addons_fixed_rows_height();
            ww = trx_addons_window_width();
            wh = trx_addons_window_height() - trx_addons_fixed_rows_height();
            dx = e.clientX - tl - cx;
            dy = ['window', 'content'].indexOf($targetLayers.data('mouse-handler')) != -1 ? e.clientY - cy : e.clientY + wst - tt - cy;
            tx = -1 * (dx / cx);
            ty = -1 * (dy / cy);
            jQuery.each(mouse_list, self.mouse_move_update);
        };
        self.mouse_leave_handler = function(e) {
            jQuery.each(mouse_list, function(index, block) {
                var $image = block.selector.find('.sc_parallax_block_image').eq(0);
                if ($image.length === 0) {
                    $image = block.selector;
                }
                var x = 0,
                    y = 0,
                    z = 0;
                var scroller_init = block.selector.data('trx-parallax-scroller-init');
                if (scroller_init) {
                    x = x * 1 + trx_addons_units2px((scroller_init.css ? scroller_init.css.x : scroller_init.x) || 0, block, 'x');
                    y = y * 1 + trx_addons_units2px((scroller_init.css ? scroller_init.css.y : scroller_init.y) || 0, block, 'y');
                }
                if (block.prop == 'background') {
                    TweenMax.to($image, 1.5, {
                        overwrite: true,
                        backgroundPositionX: block.x + '%',
                        backgroundPositionY: block.y + '%',
                        ease: Power2.easeOut
                    });
                } else if (block.prop == 'transform') {
                    TweenMax.to($image, 1.5, {
                        overwrite: true,
                        x: x,
                        y: y,
                        ease: Power2.easeOut
                    });
                } else if (block.prop == 'transform3d') {
                    TweenMax.to($image, 1.5, {
                        overwrite: true,
                        x: x,
                        y: y,
                        z: z,
                        rotationX: 0,
                        rotationY: 0,
                        ease: Power2.easeOut
                    });
                } else if (block.prop == 'tilt') {
                    TweenMax.to($image, 0.2, {
                        overwrite: true,
                        x: x,
                        y: y,
                        z: z,
                        rotationX: 0,
                        rotationY: 0,
                        scale: 1,
                        transformPerspective: 1500,
                        ease: Power2.easeOut
                    });
                }
            });
        };
        self.mouse_move_update = function(index, block, time, ease) {
            var $image = block.selector.find('.sc_parallax_block_image').eq(0),
                speed = block.speed,
                x = parseFloat(tx * 125 * speed).toFixed(1),
                y = parseFloat(ty * 125 * speed).toFixed(1),
                z = block.z * 50,
                rotate_x = parseFloat(tx * 25 * speed).toFixed(1),
                rotate_y = parseFloat(ty * 25 * speed).toFixed(1);
            var scroller_init = block.selector.data('trx-parallax-scroller-init');
            if (scroller_init) {
                x = x * 1 + trx_addons_units2px((scroller_init.css ? scroller_init.css.x : scroller_init.x) || 0, block, 'x');
                y = y * 1 + trx_addons_units2px((scroller_init.css ? scroller_init.css.y : scroller_init.y) || 0, block, 'y');
            }
            if ($image.length === 0) {
                $image = block.selector;
            }
            if (block.prop == 'background') {
                var bx = block.x * 1 + x / ww * 100,
                    by = block.y * 1 + y / wh * 100;
                TweenMax.to($image, time === undefined ? 1 : time, {
                    overwrite: true,
                    backgroundPositionX: bx + '%',
                    backgroundPositionY: by + '%',
                    ease: ease === undefined ? Power2.easeOut : ease
                });
            } else if (block.prop == 'transform') {
                TweenMax.to($image, time === undefined ? 1 : time, {
                    overwrite: true,
                    x: x,
                    y: y,
                    ease: ease === undefined ? Power2.easeOut : ease
                });
            } else if (block.prop == 'transform3d') {
                TweenMax.to($image, time === undefined ? 2 : time, {
                    overwrite: true,
                    x: x,
                    y: y,
                    z: z,
                    rotationX: rotate_y,
                    rotationY: -rotate_x,
                    ease: ease === undefined ? Power2.easeOut : ease
                });
            } else if (block.prop == 'tilt') {
                var m = block.tilt_amount > 0 ? block.tilt_amount : 70,
                    k = ['window', 'content'].indexOf($targetLayers.data('mouse-handler')) != -1 ? 2 : 4;
                z = Math.max(0, block.z);
                if (isNaN(z)) z = 0;
                TweenMax.set($image, {
                    transformOrigin: ((dx + cx) * 25 / tw + 40) + "% " + ((dy + cy) * 25 / th + 40) + "%",
                    transformPerspective: 1000 + 500 * z
                });
                TweenMax.to($image, time === undefined ? 0.5 : time, {
                    overwrite: true,
                    rotationX: dy / (m - k * z),
                    rotationY: -dx / (m - k * z),
                    y: ty * 2 * z,
                    x: tx * 2 * z,
                    z: 2 * z,
                    scale: 1 + z / 100,
                    ease: ease === undefined ? Power2.easeOut : ease
                });
            }
        };
        self.motion_move_handler = function() {
            if (tw === 0) {
                tl = $targetLayers.offset().left;
                tt = $targetLayers.offset().top;
                tw = $targetLayers.width();
                th = $targetLayers.height();
                cx = Math.ceil(tw / 2);
                cy = Math.ceil(th / 2);
            }
            jQuery.each(motion_list, function(index, block) {
                var fi, delta = ((motion_period * motion_step) % (block['motion_time'] * 1000)) / (block['motion_time'] * 1000),
                    angle = 2 * Math.PI * delta;
                if (block['motion_dir'] == 'round') {
                    fi = Math.atan2(tw / 2 * Math.sin(angle), th / 2 * Math.cos(angle));
                    dx = tw / 2 * Math.cos(fi);
                    dy = th / 2 * Math.sin(fi);
                } else if (block['motion_dir'] == 'random') {
                    dx = -tw + tw * 2 * Math.random();
                    dy = -th + th * 2 * Math.random();
                } else {
                    dx = block['motion_dir'] == 'vertical' ? 0 : tw / 2 * Math.cos(angle);
                    dy = block['motion_dir'] == 'horizontal' ? 0 : th / 2 * Math.sin(angle);
                }
                tx = -1 * (dx / cx);
                ty = -1 * (dy / cy);
                if (block['motion_dir'] == 'random') {
                    if (delta === 0) {
                        self.mouse_move_update(index, block, block['motion_time'], Power0.easeNone);
                    }
                } else {
                    self.mouse_move_update(index, block, block['motion_time'], block['motion_dir'] == 'round' ? Power0.easeNone : Power2.easeOut);
                }
            });
            motion_step++;
        };
        self.get_ease = function(name) {
            name = name.toLowerCase();
            if (name == 'none' || name == 'line' || name == 'linear' || name == 'power0') return Power0.easeNone;
            else if (name == 'power1') return Power1.easeOut;
            else if (name == 'power2') return Power2.easeOut;
            else if (name == 'power3') return Power3.easeOut;
            else if (name == 'power4') return Power4.easeOut;
            else if (name == 'back') return Back.easeOut;
            else if (name == 'elastic') return Elastic.easeOut;
            else if (name == 'bounce') return Bounce.easeOut;
            else if (name == 'rough') return Rough.easeOut;
            else if (name == 'slowmo') return SlowMo.easeOut;
            else if (name == 'stepped') return Stepped.easeOut;
            else if (name == 'circ') return Circ.easeOut;
            else if (name == 'expo') return Expo.easeOut;
            else if (name == 'sine') return Sine.easeOut;
        };
    };
    window.trx_addons_bg_parallax = function(clip) {
        var parallax = clip.querySelectorAll('.sc_parallax_block_image[parallax]'),
            parallaxDetails = [],
            sticky = false;
        var fixedPos = document.createElement('div');
        fixedPos.style.position = 'fixed';
        fixedPos.style.top = '0';
        fixedPos.style.width = '1px';
        fixedPos.style.height = '1px';
        fixedPos.style.zIndex = 1;
        document.body.insertBefore(fixedPos, document.body.firstChild);
        for (var i = 0; i < parallax.length; i++) {
            var elem = parallax[i];
            var container = elem.parentNode;
            if (getComputedStyle(container).overflow != 'visible') {
                console.error('Need non-scrollable container to apply perspective for', elem);
                continue;
            }
            if (clip && container.parentNode != clip) {
                console.warn('Currently we only track a single overflow clip, but elements from multiple clips found.', elem);
            }
            clip = container.parentNode;
            if (getComputedStyle(clip).overflow == 'visible') {
                console.error('Parent of sticky container should be scrollable element', elem);
            }
            var perspectiveElement;
            if (sticky || getComputedStyle(clip).webkitOverflowScrolling) {
                sticky = true;
                perspectiveElement = container;
            } else {
                perspectiveElement = clip;
                container.style.transformStyle = 'preserve-3d';
            }
            perspectiveElement.style.perspectiveOrigin = 'bottom right';
            perspectiveElement.style.perspective = '1px';
            if (sticky) {
                elem.style.position = '-webkit-sticky';
                elem.style.top = '0';
            }
            elem.style.transformOrigin = 'bottom right';
            var previousCover = parallax[i].previousElementSibling;
            while (previousCover && previousCover.hasAttribute('parallax')) {
                previousCover = previousCover.previousElementSibling;
            }
            var nextCover = parallax[i].nextElementSibling;
            while (nextCover && !nextCover.hasAttribute('parallax-cover')) {
                nextCover = nextCover.nextElementSibling;
            }
            parallaxDetails.push({
                'node': parallax[i],
                'top': parallax[i].offsetTop,
                'sticky': !!sticky,
                'nextCover': nextCover,
                'previousCover': previousCover
            });
        }
        for (i = 0; i < parallax.length; i++) {
            parallax[i].parentNode.insertBefore(parallax[i], parallax[i].parentNode.firstChild);
        }
        clip.addEventListener('scroll', function() {
            for (var i = 0; i < parallaxDetails.length; i++) {
                var container = parallaxDetails[i].node.parentNode;
                var previousCover = parallaxDetails[i].previousCover;
                var nextCover = parallaxDetails[i].nextCover;
                var parallaxStart = previousCover ? (previousCover.offsetTop + previousCover.offsetHeight) : 0;
                var parallaxEnd = nextCover ? nextCover.offsetTop : container.offsetHeight;
                var threshold = 200;
                var visible = parallaxStart - threshold - clip.clientHeight < clip.scrollTop && parallaxEnd + threshold > clip.scrollTop;
                var display = 'block';
                if (parallaxDetails[i].node.style.display != display) {
                    parallaxDetails[i].node.style.display = display;
                }
            }
        });
        var bg_parallax_resize = function(details) {
            for (var i = 0; i < details.length; i++) {
                var container = details[i].node.parentNode;
                var clip = container.parentNode;
                var previousCover = details[i].previousCover;
                var nextCover = details[i].nextCover;
                var rate = details[i].node.getAttribute('parallax');
                var parallaxStart = previousCover ? (previousCover.offsetTop + previousCover.offsetHeight) : 0;
                var scrollbarWidth = details[i].sticky ? 0 : clip.offsetWidth - clip.clientWidth;
                var parallaxElem = details[i].sticky ? container : clip;
                var height = details[i].node.offsetHeight;
                var depth = 0;
                if (rate) {
                    depth = 1 - (1 / rate);
                } else {
                    var parallaxEnd = nextCover ? nextCover.offsetTop : container.offsetHeight;
                    depth = (height - parallaxEnd + parallaxStart) / (height - clip.clientHeight);
                }
                if (details[i].sticky) {
                    depth = 1.0 / depth;
                }
                var scale = 1.0 / (1.0 - depth);
                var dx = scrollbarWidth * (scale - 1);
                var dy = details[i].sticky ? -(clip.scrollHeight - parallaxStart - height) * (1 - scale) : (parallaxStart - depth * (height - clip.clientHeight)) * scale;
                details[i].node.style.transform = 'scale(' + (1 - depth) + ') translate3d(' + dx + 'px, ' + dy + 'px, ' + depth + 'px)';
            }
        };
        window.addEventListener('resize', bg_parallax_resize.bind(null, parallaxDetails));
        bg_parallax_resize(parallaxDetails);
    };
}());
jQuery(document).ready(function() {
    "use strict";
    var $window = jQuery(window),
        $document = jQuery(document),
        $body = jQuery('body');
    $document.on('action.init_hidden_elements', function(e, cont) {
        jQuery('.sc_services_qw-panel .sc_services_item:not(.switch_qw_panel_inited)').addClass('switch_qw_panel_inited').each(function() {
            var $self = jQuery(this);
            var $text = $self.find('.sc_services_item_text');
            $self.on('mouseenter', function() {
                var num = $self.data('item-number'),
                    $posts = $self.parents('.sc_item_posts_container'),
                    $old_panel = $posts.find('.sc_qw_panel_thumb_active').removeClass('sc_qw_panel_thumb_active'),
                    $new_panel = $posts.find('.sc_qw_panel_thumb[data-thumb-number="' + num + '"]').addClass('sc_qw_panel_thumb_active');
                $document.trigger('action.init_hidden_elements', [$new_panel]);
            });

            function assign_hover($self, $text) {
                $self.off('.qw-panel').on('mouseenter.qw-panel', function() {
                    if ($text.css('display') == 'none') {
                        $text.stop().slideDown(300);
                    }
                }).on('mouseleave.qw-panel', function() {
                    $text.stop().slideUp(300);
                });
            }
            var reassign_hover = trx_addons_throttle(function() {
                assign_hover($self, $text);
            }, 1100);
            assign_hover($self, $text);
            $document.on('action.resize_trx_addons', function() {
                reassign_hover($self, $text);
            });
        });
        cont.find('.sc_testimonials_masonry_wrap').each(function() {
            var testimonials = jQuery(this);
            if (testimonials.parents('div:hidden,article:hidden').length > 0) return;
            if (!testimonials.hasClass('inited')) {
                testimonials.addClass('inited');
                trx_addons_when_images_loaded(testimonials, function() {
                    setTimeout(function() {
                        testimonials.masonry({
                            itemSelector: '.sc_testimonials_masonry_item',
                            columnWidth: '.sc_testimonials_masonry_item',
                            percentPosition: true
                        });
                        setTimeout(function() {
                            jQuery(window).trigger('resize');
                            jQuery(window).trigger('scroll');
                        }, 100);
                    }, 0);
                });
            } else {}
        });
    });
    trx_addons_add_filter('trx_addons_filter_slider_init_args', function($param, $init) {
        if ($init.parents('.slider_width_auto').length > 0) {
            $param.slidesPerView = 'auto';
        }
        return $param;
    });
    jQuery('.sc_portfolio_qw-case:not(.qw_case_inited)').addClass('qw_case_inited').each(function() {
        var items = jQuery(this).find('.sc_portfolio_item');
        items.first().addClass('is-active');
        items.each(function() {
            var $item = jQuery(this);
            $item.off('.qw-case').on('mouseenter.qw-case', function() {
                items.removeClass('is-active');
                $item.addClass('is-active');
            });
        });
    });
});
jQuery(document).on('action.ready_trx_addons', function() {
    "use strict";
    var USE_OBSERVERS = trx_addons_apply_filters('trx_addons_filter_use_observers_to_fix_rows', true) && typeof IntersectionObserver != 'undefined';
    var $window = jQuery(window),
        $document = jQuery(document),
        $body = jQuery('body');

    function get_id(row) {
        return row.attr('id') ? row.attr('id') : row.attr('data-id');
    }
    if (!TRX_ADDONS_STORAGE['pagebuilder_preview_mode'] && !$body.hasClass('sc_layouts_row_fixed_inited')) {
        var rows = jQuery('.sc_layouts_row_fixed'),
            rows_always = rows.filter('.sc_layouts_row_fixed_always'),
            rows_delayed = rows.filter('.sc_layouts_row_delay_fixed'),
            last_scroll_offset = -1;
        if (rows.length > 0) {
            rows.each(function(idx) {
                var row = rows.eq(idx);
                if (row.hasClass('sc_layouts_row_hide_unfixed')) {
                    if (!row.prev().hasClass('sc_layouts_row_unfixed_placeholder')) {
                        row.before('<div class="sc_layouts_row_unfixed_placeholder">' + (USE_OBSERVERS ? '<div class="sc_layouts_row_fixed_marker_on"></div>' : '') + '</div>');
                    }
                }
                if (!row.next().hasClass('sc_layouts_row_fixed_placeholder')) {
                    row.after('<div class="sc_layouts_row_fixed_placeholder" style="background-color:' + row.css('background-color') + ';"><div class="sc_layouts_row_fixed_marker_off"></div></div>');
                    if (USE_OBSERVERS && !row.hasClass('sc_layouts_row_hide_unfixed')) {
                        row.append('<div class="sc_layouts_row_fixed_marker_on"></div>');
                    }
                }
                if (row.find(trx_addons_apply_filters('trx_addons_filter_fullscreen_elements', '.search_style_fullscreen,.search_modern')).length > 0) {
                    row.addClass('sc_layouts_row_fixed_with_fullscreen');
                }
            });
            var timedFix = trx_addons_throttle(function() {
                trx_addons_cpt_layouts_fix_rows({
                    rows: rows,
                    rows_always: rows_always
                });
            }, 150);
            $document.on('action.scroll_trx_addons', function() {
                trx_addons_cpt_layouts_hide_fixed_rows();
                if (!USE_OBSERVERS) {
                    trx_addons_cpt_layouts_fix_rows({
                        rows: rows,
                        rows_always: rows_always
                    });
                } else {
                    timedFix();
                }
            }).on('action.resize_trx_addons', function() {
                trx_addons_cpt_layouts_check_mobile_breakpoint();
                trx_addons_cpt_layouts_hide_fixed_rows();
                trx_addons_cpt_layouts_fix_rows({
                    rows: rows,
                    rows_always: rows_always,
                    resize: true
                });
            });
            if (USE_OBSERVERS) {
                var fixed_rows_observe = function() {
                    rows.each(function(idx) {
                        var row = rows.eq(idx);
                        var last_fixed_time = row.data('trx-addons-last-fixed-time') || 0;
                        var delay = trx_addons_cpt_layouts_fix_rows_delay(row);
                        var marker_off = row.next().find('>.sc_layouts_row_fixed_marker_off');
                        var marker_on = row.hasClass('sc_layouts_row_hide_unfixed') ? row.prev().find('>.sc_layouts_row_fixed_marker_on') : row.find('>.sc_layouts_row_fixed_marker_on');
                        var observer = row.data('trx-addons-fixed-observer');
                        if (observer) {
                            if (marker_off.length) observer.unobserve(marker_off.get(0));
                            if (marker_on.length) observer.unobserve(marker_on.get(0));
                            observer.disconnect();
                            observer = null;
                        }
                        if (row.css('display') == 'none' && !row.hasClass('sc_layouts_row_hide_unfixed')) {
                            return;
                        }
                        if (trx_addons_window_width() < TRX_ADDONS_STORAGE['mobile_breakpoint_fixedrows_off'] && !row.hasClass('sc_layouts_row_fixed_always')) {
                            return;
                        }
                        var row_height = row.hasClass('sc_layouts_row_hide_unfixed') ? 0 : row.outerHeight();
                        observer = new IntersectionObserver(function(entries) {
                            var time = new Date().getTime();
                            entries.forEach(function(entry) {
                                var marker = jQuery(entry.target),
                                    marker_offset = marker.offset().top,
                                    parent = marker.parent(),
                                    row = parent;
                                if (parent.hasClass('sc_layouts_row_unfixed_placeholder')) {
                                    row = row.next();
                                } else if (parent.hasClass('sc_layouts_row_fixed_placeholder')) {
                                    row = row.prev();
                                }
                                var animation_off_timeout = trx_addons_cpt_layouts_fix_rows_off_timeout(delay);
                                if (row.hasClass('sc_layouts_row_fixed_on') && entry.isIntersecting) {
                                    if (time - last_fixed_time > animation_off_timeout && entry.boundingClientRect.top >= entry.rootBounds.top) {
                                        if (!row.hasClass('sc_layouts_row_fixed_animation_off')) {
                                            trx_addons_cpt_layouts_fix_rows({
                                                rows: rows,
                                                rows_always: rows_always,
                                                force_row: row,
                                                force_state: 'off'
                                            });
                                            last_fixed_time = time;
                                        }
                                    }
                                } else if (!row.hasClass('sc_layouts_row_fixed_on') && !entry.isIntersecting) {
                                    if (time - last_fixed_time > animation_off_timeout && entry.boundingClientRect.bottom < entry.rootBounds.top) {
                                        trx_addons_cpt_layouts_fix_rows({
                                            rows: rows,
                                            rows_always: rows_always,
                                            force_row: row,
                                            force_state: 'on'
                                        });
                                        last_fixed_time = time;
                                    }
                                }
                            });
                        }, {
                            root: null,
                            rootMargin: (delay - trx_addons_fixed_rows_height() + (!$body.hasClass('hide_fixed_rows') && row.hasClass('sc_layouts_row_fixed_on') ? row_height : 0)) + 'px 0px 0px 0px',
                            threshold: 0
                        });
                        var marker = row.hasClass('sc_layouts_row_fixed_on') ? marker_off : marker_on;
                        observer.observe(marker.get(0));
                        row.data({
                            'trx-addons-fixed-observer': observer,
                            'trx-addons-last-fixed-time': last_fixed_time
                        });
                    });
                };
                $document.on('action.sc_layouts_row_fixed_on action.sc_layouts_row_fixed_off', fixed_rows_observe);
                fixed_rows_observe();
            }
            $body.addClass('sc_layouts_row_fixed_inited');
        }
    }

    function trx_addons_cpt_layouts_fix_rows_delay(row) {
        return trx_addons_apply_filters('trx_addons_filter_fixed_rows_delay', row.hasClass('sc_layouts_row_delay_fixed') ? Math.max(300, trx_addons_window_height() / 4 * 3) : 0);
    }

    function trx_addons_cpt_layouts_fix_rows_off_timeout(delay) {
        return trx_addons_apply_filters('trx_addons_filter_sc_layouts_row_fixed_off_timeout', delay > 0 ? 400 : 0, delay);
    }

    function trx_addons_cpt_layouts_hide_fixed_rows() {
        if (TRX_ADDONS_STORAGE['hide_fixed_rows'] > 0 && !window.trx_addons_document_animate_to_busy) {
            var scroll_delta = 50;
            var scroll_offset = trx_addons_window_scroll_top();
            if (last_scroll_offset >= 0) {
                var event = '';
                if (scroll_offset > last_scroll_offset + scroll_delta) {
                    if (scroll_offset > trx_addons_window_height() * (rows_delayed.length > 0 ? 1.5 : 0.6667) && !$body.hasClass('hide_fixed_rows')) {
                        $body.addClass('hide_fixed_rows');
                        event = 'off';
                    }
                    last_scroll_offset = scroll_offset;
                } else if (scroll_offset < last_scroll_offset - scroll_delta) {
                    if ($body.hasClass('hide_fixed_rows')) {
                        $body.removeClass('hide_fixed_rows');
                        event = 'on';
                    }
                    last_scroll_offset = scroll_offset;
                }
                if (event) {
                    $document.trigger('action.sc_layouts_row_fixed_' + event, [rows.filter('.sc_layouts_row_fixed_on')]);
                }
            } else {
                last_scroll_offset = scroll_offset;
            }
        }
    }

    function trx_addons_cpt_layouts_check_mobile_breakpoint() {
        if (trx_addons_window_width() < TRX_ADDONS_STORAGE['mobile_breakpoint_fixedrows_off']) {
            rows.each(function(idx) {
                var row = rows.eq(idx);
                if (!row.hasClass('sc_layouts_row_fixed_always')) {
                    row.removeClass('sc_layouts_row_fixed_on').css({
                        'top': 'auto'
                    });
                }
            });
        }
    }

    function trx_addons_cpt_layouts_fix_rows(args) {
        var rows = args.rows,
            rows_always = args.rows_always,
            resize = args.resize || false,
            force_row = args.force_row || null,
            force_state = args.force_state || '';
        if (trx_addons_window_width() < TRX_ADDONS_STORAGE['mobile_breakpoint_fixedrows_off']) {
            if (rows_always.length === 0) {
                return;
            } else {
                rows = rows_always;
            }
        }
        var scroll_offset = $window.scrollTop();
        var rows_offset = trx_addons_adminbar_height();
        rows.each(function(idx) {
            var row = rows.eq(idx);
            var placeholder = row.next();
            var h = row.outerHeight();
            if ((row.css('display') == 'none' || h === 0) && !row.hasClass('sc_layouts_row_hide_unfixed')) {
                placeholder.height(0);
                return;
            }
            var ph = row.hasClass('sc_layouts_row_fixed_on') ? placeholder.outerHeight() : 0;
            var row_unfixed_placeholder = row.hasClass('sc_layouts_row_hide_unfixed') ? row.prev() : false;
            var delay = trx_addons_cpt_layouts_fix_rows_delay(row);
            var animation_off_timeout = trx_addons_cpt_layouts_fix_rows_off_timeout(delay);
            var offset = parseInt(row.hasClass('sc_layouts_row_fixed_on') ? placeholder.offset().top : (row.hasClass('sc_layouts_row_hide_unfixed') ? row_unfixed_placeholder.offset().top : row.offset().top), 10);
            if (isNaN(offset)) {
                offset = 0;
            }
            if ((force_state == 'off' && row.is(force_row)) || (!force_state && (scroll_offset + rows_offset < offset + delay || h < ph))) {
                if (row.hasClass('sc_layouts_row_fixed_on')) {
                    if (animation_off_timeout > 0) {
                        row.addClass('sc_layouts_row_fixed_animation_off');
                    }
                    setTimeout(function() {
                        row.removeClass('sc_layouts_row_fixed_on' + (animation_off_timeout > 0 ? ' sc_layouts_row_fixed_animation_off' : '')).css({
                            'top': 'auto'
                        });
                        $document.trigger('action.sc_layouts_row_fixed_off', [row]);
                    }, animation_off_timeout);
                }
            } else {
                if (!row.hasClass('sc_layouts_row_fixed_on')) {
                    if ((force_state == 'on' && row.is(force_row)) || (rows_offset + h < trx_addons_window_height() * 0.33)) {
                        if (!row.hasClass('sc_layouts_row_hide_unfixed')) {
                            ph = h;
                            placeholder.height(ph);
                        }
                        row.addClass('sc_layouts_row_fixed_on').css({
                            'top': rows_offset + 'px'
                        });
                        h = row.outerHeight();
                        if (ph != h && !row.hasClass('sc_layouts_row_hide_unfixed')) {
                            ph = h;
                            placeholder.height(h);
                        }
                        $document.trigger('action.sc_layouts_row_fixed_on', [row]);
                    }
                } else if (resize && row.hasClass('sc_layouts_row_fixed_on') && row.offset().top != rows_offset) {
                    row.css({
                        'top': rows_offset + 'px'
                    });
                }
                rows_offset += h;
            }
            if (force_state && row.is(force_row)) {
                force_state = '';
                force_row = null;
            }
        });
    }
});
jQuery(document).on('action.init_hidden_elements', function(e, container) {
    "use strict";
    if (container.find('.sc_form_form:not(.sc_form_custom):not(.inited)').length > 0) {
        container.find('.sc_form_form:not(.sc_form_custom):not(.inited)').addClass('inited').on('submit', function(e) {
            sc_form_validate(jQuery(this));
            e.preventDefault();
            return false;
        });
    }
    jQuery('input[type="text"]:not(.fill_inited),' + 'input[type="number"]:not(.fill_inited),' + 'input[type="search"]:not(.fill_inited),' + 'input[type="password"]:not(.fill_inited),' + 'input[type="email"]:not(.fill_inited),' + 'input[type="tel"]:not(.fill_inited),' + 'input[type="url"]:not(.fill_inited),' + 'textarea:not(.fill_inited),' + 'select:not(.fill_inited)').each(function() {
        var $fld = jQuery(this);
        sc_form_mark_filled($fld);
        $fld.addClass('fill_inited').on('blur change', function() {
            var $self = jQuery(this);
            sc_form_mark_filled($self);
            if ($self.hasClass('filled')) {
                $self.removeClass('trx_addons_field_error wpcf7-not-valid');
            }
        });
    });

    function sc_form_mark_filled(field) {
        if (field.val() !== '') field.addClass('filled');
        else field.removeClass('filled');
    }

    function sc_form_validate(form) {
        var url = form.attr('action');
        if (url == '') return false;
        form.find('input').removeClass('trx_addons_error_field');
        var error = trx_addons_form_validate(form, {
            rules: [{
                field: "name",
                min_length: {
                    value: 1,
                    message: TRX_ADDONS_STORAGE['msg_field_name_empty']
                },
            }, {
                field: "email",
                min_length: {
                    value: 1,
                    message: TRX_ADDONS_STORAGE['msg_field_email_empty']
                },
                mask: {
                    value: TRX_ADDONS_STORAGE['email_mask'],
                    message: TRX_ADDONS_STORAGE['msg_field_email_not_valid']
                }
            }, {
                field: "message",
                min_length: {
                    value: 1,
                    message: TRX_ADDONS_STORAGE['msg_field_text_empty']
                },
            }]
        });
        if (!error && url != '#') {
            jQuery.post(url, {
                action: "send_sc_form",
                nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
                data: form.serialize()
            }).done(function(response) {
                var rez = {};
                try {
                    rez = JSON.parse(response);
                } catch (e) {
                    rez = {
                        error: TRX_ADDONS_STORAGE['msg_ajax_error']
                    };
                    console.log(response);
                }
                var result = form.find(".trx_addons_message_box").removeClass("trx_addons_message_box_error").removeClass("trx_addons_message_box_success");
                if (rez.error === '') {
                    form.get(0).reset();
                    result.addClass("trx_addons_message_box_success").html(TRX_ADDONS_STORAGE['msg_send_complete']);
                } else {
                    result.addClass("trx_addons_message_box_error").html(TRX_ADDONS_STORAGE['msg_send_error'] + ' ' + rez.error);
                }
                result.fadeIn().delay(3000).fadeOut();
                jQuery(document).trigger('action.got_ajax_response', {
                    action: 'send_sc_form',
                    result: rez
                });
            });
        }
        return !error;
    }
});
(function() {
    "use strict";
    var $window = jQuery(window),
        $document = jQuery(document);
    var init_attempts = 0;
    var init_hidden_elements_after_all_sliders_inited = trx_addons_throttle(function() {
        $document.trigger('action.init_hidden_elements', [jQuery('body')]);
    }, 300, true);
    $document.on('action.init_hidden_elements', function(e, container) {
        trx_addons_init_sliders(e, container);
    });

    function trx_addons_get_slides_per_view($slider) {
        var per_view = $slider.data('slides-per-view') || 1;
        var bp = $slider.data('slides-per-view-breakpoints');
        if (bp) {
            var ww = trx_addons_window_width();
            for (var max in bp) {
                if (ww <= max) {
                    per_view = bp[max];
                    break;
                }
            }
        }
        return per_view;
    }
    var attempts = 50;

    function trx_addons_init_sliders(e, container) {
        if (!window.Swiper && attempts-- > 0) {
            setTimeout(function() {
                trx_addons_init_sliders(e, container);
            }, 100);
        }
        if (window.Swiper) {
            container.find('.sc_slider_controller:not(.inited)').each(function() {
                var controller = jQuery(this).addClass('inited');
                if (controller.find('.slider_style_controller').length > 0) return;
                var slider_id = controller.data('slider-id');
                if (!slider_id) return;
                var controller_id = controller.attr('id');
                if (controller_id == undefined) {
                    controller_id = 'sc_slider_controller_' + Math.random();
                    controller_id = controller_id.replace('.', '');
                    controller.attr('id', controller_id);
                }
                var slider_cont = jQuery('#' + slider_id + ' .slider_container:not(.slider_controller_container)').eq(0);
                if (!slider_cont.attr('data-controller')) {
                    slider_cont.attr('data-controller', controller_id);
                }
                var controller_style = controller.data('style');
                var controller_effect = controller.data('effect');
                var controller_direction = controller.data('direction');
                var controller_interval = controller.data('interval');
                var controller_per_view = trx_addons_get_slides_per_view(controller);
                var controller_space = controller.data('slides-space');
                var controller_controls = controller.data('controls');
                var controller_html = '';
                slider_cont.find('> .slider-wrapper > .swiper-slide').each(function(idx) {
                    var slide = jQuery(this);
                    var image = '';
                    if (controller_style.indexOf('thumbs') != -1) {
                        if (slide.data('image')) {
                            image = slide.data('image');
                        } else if (slide.find('.post_thumb_bg').length > 0) {
                            image = slide.find('.post_thumb_bg').css('background-image').replace('url(', '').replace(')', '').replace(';', '').replace('"', '');
                        } else if (slide.css('background-image') && slide.css('background-image') != 'none') {
                            image = slide.css('background-image').replace('url(', '').replace(')', '').replace(';', '').replace('"', '');
                        } else if (slide.find('img').length > 0) {
                            image = slide.find('img').eq(0).attr('src');
                        }
                    }
                    var title = controller_style.indexOf('titles') == -1 ? '' : (slide.data('title') ? slide.data('title') : slide.find('[class*="_item_title"]').text());
                    var cats = slide.data('cats');
                    var date = slide.data('date');
                    controller_html += trx_addons_apply_filters('trx_addons_filter_slider_controller_slide_html', '<div class="slider-slide swiper-slide"' + ' style="' + (image !== undefined && image !== '' ? 'background-image: url(' + image + ');' : '') + '"' + '>' + '<div class="sc_slider_controller_info">' + '<span class="sc_slider_controller_info_number">' + (idx < 9 ? '0' : '') + (idx + 1) + '</span>' + '<span class="sc_slider_controller_info_title">' + (title ? title : 'Slide ' + (idx + 1)) + '</span>' + '</div>' + '</div>', slide, controller);
                });
                controller.html(trx_addons_apply_filters('trx_addons_filter_slider_controller_html', '<div id="' + controller_id + '_outer"' + ' class="slider_outer slider_swiper_outer slider_style_controller' + ' slider_outer_' + (controller_controls == 1 ? 'controls slider_outer_controls_side' : 'nocontrols') + ' slider_outer_nopagination' + ' slider_outer_' + (controller_per_view == 1 ? 'one' : 'multi') + ' slider_outer_direction_' + (controller_direction == 'vertical' ? 'vertical' : 'horizontal') + '"' + '>' + '<div id="' + controller_id + '_swiper"' + ' class="slider_container slider_controller_container slider_swiper swiper-slider-container' + ' slider_' + (controller_controls == 1 ? 'controls slider_controls_side' : 'nocontrols') + ' slider_nopagination' + ' slider_notitles' + ' slider_noresize' + ' slider_' + (controller_per_view == 1 ? 'one' : 'multi') + ' slider_direction_' + (controller_direction == 'vertical' ? 'vertical' : 'horizontal') + '"' + ' data-slides-min-width="' + trx_addons_apply_filters('trx_addons_filter_slider_controller_slide_width', 150) + '"' + ' data-controlled-slider="' + slider_id + '"' + ' data-direction="' + (controller_direction == 'vertical' ? 'vertical' : 'horizontal') + '"' + ' data-loop="1"' + ' data-autoplay="' + (controller_interval > 0 ? '1' : '0') + '"' + (controller_effect !== undefined ? ' data-effect="' + controller_effect + '"' : '') + (controller_interval !== undefined ? ' data-interval="' + controller_interval + '"' : '') + (controller_per_view !== undefined ? ' data-slides-per-view="' + controller_per_view + '"' : '') + (controller_space !== undefined ? ' data-slides-space="' + controller_space + '"' : '') + '>' + '<div class="slider-wrapper swiper-wrapper">' + controller_html + '</div>' + '</div>' + (controller_controls == 1 ? '<div class="slider_controls_wrap"><a class="slider_prev swiper-button-prev" href="#"></a><a class="slider_next swiper-button-next" href="#"></a></div>' : '') + '</div>', controller));
            });
            container.find('.sc_slider_controls:not(.inited)').each(function() {
                var controls = jQuery(this).addClass('inited'),
                    slider_id = controls.data('slider-id'),
                    pagination_style = controls.data('pagination-style');
                if (!slider_id) return;
                slider_id = jQuery('#' + slider_id + ' .slider_swiper').attr('id');
                if (!slider_id) return;
                controls.on('click', 'a', function(e) {
                    var s = TRX_ADDONS_STORAGE['swipers'][slider_id];
                    if (jQuery(this).hasClass('slider_next')) s.slideNext();
                    else s.slidePrev();
                    e.preventDefault();
                    return false;
                });
                var s = typeof TRX_ADDONS_STORAGE['swipers'] != 'undefined' && typeof TRX_ADDONS_STORAGE['swipers'][slider_id] != 'undefined' ? TRX_ADDONS_STORAGE['swipers'][slider_id] : false,
                    slides = jQuery('#' + slider_id + ' .swiper-slide'),
                    spv = s ? (s.params.loop ? s.loopedSlides : 0) : 0;
                var total = s ? (s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length) : slides.length;
                var html = '';
                if (pagination_style == 'thumbs') {
                    slides.each(function(idx) {
                        if (idx < spv || idx >= slides.length - spv) return;
                        var slide = jQuery(this);
                        var image = slide.data('image');
                        html += trx_addons_apply_filters('trx_addons_filter_slider_controls_html_thumb', '<span class="slider_pagination_button_wrap swiper-pagination-button-wrap" style="width: ' + Math.round(100 / total, 2) + '%;">' + '<span class="slider_pagination_button swiper-pagination-button"' + (image !== undefined ? ' style="background-image: url(' + image + ');"' : '') + '></span>' + '</span>', slide, controls);
                    });
                    controls.find('.slider_pagination_wrap').html(trx_addons_apply_filters('trx_addons_filter_slider_controls_html_thumbs', html, controls));
                } else if (pagination_style == 'fraction') {
                    controls.find('.slider_pagination_wrap').html(trx_addons_apply_filters('trx_addons_filter_slider_controls_html_fraction', '<span class="slider_pagination_current swiper-pagination-current">1</span>' + '/' + '<span class="slider_pagination_total swiper-pagination-total">' + total + '</span>', controls));
                } else if (pagination_style == 'bullets') {
                    slides.each(function(idx) {
                        if (idx < spv || idx >= slides.length - spv) return;
                        html += trx_addons_apply_filters('trx_addons_filter_slider_controls_html_bullet', '<span class="slider_pagination_bullet swiper-pagination-bullet" data-slide-number="' + (s ? jQuery(this).data('slide-number') : idx) + '"></span>', idx, controls);
                    });
                    controls.find('.slider_pagination_wrap').html(trx_addons_apply_filters('trx_addons_filter_slider_controls_html_bullets', html, controls));
                }
                if (pagination_style != 'none') {
                    if (controls.find('.slider_progress_bar').length > 0) {
                        var bar = controls.find('.slider_progress_bar');
                        bar.parent().on('click', function(e) {
                            var s = TRX_ADDONS_STORAGE['swipers'][slider_id];
                            var total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                            var slide_number = Math.max(0, Math.min(total - 1, Math.floor(total * e.offsetX / jQuery(this).width())));
                            var slide_idx = jQuery('#' + slider_id).find('[data-slide-number="' + slide_number + '"]:not(.swiper-slide-duplicate)').index();
                            s.slideTo(slide_idx);
                            e.preventDefault();
                            return false;
                        });
                    } else {
                        controls.find('.slider_pagination_button_wrap,.slider_pagination_bullet').on('click', function(e) {
                            var s = TRX_ADDONS_STORAGE['swipers'][slider_id];
                            var slide_idx = jQuery('#' + slider_id).find('[data-slide-number="' + jQuery(this).index() + '"]:not(.swiper-slide-duplicate)').index();
                            s.slideTo(slide_idx);
                            e.preventDefault();
                            return false;
                        });
                    }
                    jQuery('#' + slider_id).on('slider_init slide_change_start', function(e) {
                        if (TRX_ADDONS_STORAGE['swipers'][slider_id]) {
                            var s = TRX_ADDONS_STORAGE['swipers'][slider_id];
                            var current = jQuery(s.slides[s.activeIndex]).data('slide-number') + 1,
                                total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                            if (total > 0) {
                                if (pagination_style == 'progressbar') {
                                    bar.width(Math.ceil(current / total * 100) + '%');
                                } else if (pagination_style == 'thumbs') {
                                    controls.find('.slider_pagination_button').removeClass('slider_pagination_button_active').eq(current - 1).addClass('slider_pagination_button_active');
                                } else if (pagination_style == 'bullets') {
                                    controls.find('.slider_pagination_bullet').removeClass('slider_pagination_bullet_active swiper-pagination-bullet-active').eq(current - 1).addClass('slider_pagination_bullet_active swiper-pagination-bullet-active');
                                } else if (pagination_style == 'fraction') {
                                    controls.find('.slider_pagination_current').text(current);
                                }
                            }
                        }
                    });
                }
            });
            container.find('.slider_swiper:not(.inited)').each(function() {
                var slider = jQuery(this);
                if (slider.parents('div:hidden,article:hidden').length > 0) {
                    return;
                }
                var loaded = true;
                slider.find('img').each(function() {
                    var $self = jQuery(this);
                    if (!$self.get(0).complete && $self.attr('loading') != 'lazy') loaded = false;
                });
                if (!loaded && init_attempts++ < 20) {
                    setTimeout(function() {
                        trx_addons_init_sliders(e, container);
                    }, 100);
                    return;
                }
                var id = slider.attr('id');
                if (id == undefined) {
                    id = 'swiper_' + Math.random();
                    id = id.replace('.', '');
                    slider.attr('id', id);
                }
                var cont = slider.parent().hasClass('slider_swiper_outer') ? slider.parent().attr('id', id + '_outer') : slider;
                var cont_id = cont.attr('id');
                var slave_id = slider.data('slave-id') || '';
                if (slave_id != '') {
                    var slave_slider = jQuery('#' + slave_id + ' .slider_container:not(.slider_controller_container)').eq(0);
                    if (slave_slider.length) {
                        slider.attr('data-controlled-slider', slave_id);
                        if (!slave_slider.attr('data-controller')) {
                            slave_slider.attr('data-controller', id);
                        }
                    } else {
                        slave_id = '';
                    }
                }
                var is_controller = slider.parents('.sc_slider_controller').length > 0 || slave_id;
                var controller_id = slider.data('controller');
                slider.find('> .slider-wrapper > .swiper-slide').each(function(idx) {
                    jQuery(this).attr('data-slide-number', idx);
                });
                slider.css({
                    'display': 'block',
                    'opacity': 0
                }).addClass(id).addClass('inited').data('settings', {
                    mode: 'horizontal'
                });
                var effect = slider.data('effect') ? slider.data('effect') : 'slide';
                var loop = slider.data('loop');
                if (loop === undefined || isNaN(loop)) loop = 1;
                var speed = slider.data('speed');
                if (speed === undefined || isNaN(speed)) speed = 600;
                var free_mode = slider.data('free-mode');
                var direction = slider.data('direction');
                if (direction != 'vertical') direction = 'horizontal';
                var smw = slider.data('slides-min-width');
                if (smw === undefined) {
                    smw = 150;
                    slider.attr('data-slides-min-width', smw);
                }
                var spv = trx_addons_get_slides_per_view(slider);
                if (spv == undefined || slider.parents('.widget_nav_menu').length > 0) {
                    spv = 1;
                    slider.attr('data-slides-per-view', spv);
                }
                var width = slider.width();
                if (width === 0) {
                    width = slider.parent().width();
                }
                if (direction == 'horizontal') {
                    if (width / spv < smw) {
                        spv = Math.max(1, Math.floor(width / smw));
                    }
                }
                var space = slider.data('slides-space');
                if (space == undefined) space = 0;
                var slides_parallax = slider.data('slides-parallax');
                slides_parallax = effect == 'slide' && spv == 1 ? Math.max(0, Math.min(1, slides_parallax || 0)) : 0;
                if (direction == 'vertical' && slider.hasClass('slider_height_auto') && slider.hasClass('slider_noresize')) {
                    var height = 0;
                    slider.find('.swiper-slide').each(function(idx) {
                        if (idx >= spv) return;
                        height += jQuery(this).height() + (idx > 0 ? space : 0);
                    });
                    if (height > 0) slider.height(height);
                }
                var interval = slider.data('interval');
                if (interval === undefined) {
                    interval = Math.round(5000 * (1 + Math.random()));
                } else if (isNaN(interval)) {
                    interval = 0;
                } else {
                    interval = parseInt(interval, 10);
                }
                var noswipe = slider.hasClass('slider_noswipe') || slider.parents('.slider_noswipe,.elementor-edit-mode').length > 0 || jQuery('body').hasClass('block-editor-page');
                if (slider.parents('[class*="_grid_wrap"]').length > 0) {
                    slider.css({
                        'max-width': width + 'px'
                    });
                }
                if (TRX_ADDONS_STORAGE['swipers'] === undefined) {
                    TRX_ADDONS_STORAGE['swipers'] = {};
                }
                TRX_ADDONS_STORAGE['swipers'][id] = new Swiper('.' + id, trx_addons_apply_filters('trx_addons_filter_slider_init_args', {
                    freeMode: free_mode > 0,
                    direction: direction,
                    initialSlide: 0,
                    speed: speed,
                    loop: loop > 0 && slider.data('slides-overflow') != 1,
                    loopedSlides: spv,
                    slidesPerView: spv,
                    spaceBetween: space,
                    centeredSlides: slider.data('slides-centered') == 1,
                    mousewheel: slider.data('mouse-wheel') == 1 ? {
                        releaseOnEdges: true
                    } : false,
                    grabCursor: !is_controller && !noswipe,
                    slideToClickedSlide: is_controller,
                    touchRatio: is_controller ? 0.2 : 1,
                    autoHeight: false,
                    lazy: false,
                    preloadImages: true,
                    updateOnImagesReady: true,
                    roundLengths: TRX_ADDONS_STORAGE['slider_round_lengths'] && !is_controller && spv == 1,
                    effect: effect,
                    parallax: {
                        enabled: slides_parallax > 0
                    },
                    swipeHandler: noswipe ? '.slider_controls_wrap,.slider_pagination_wrap' : null,
                    pagination: {
                        el: slider.hasClass('slider_pagination') ? '#' + cont_id + '>.slider_pagination_wrap,#' + cont_id + ' > .slider_swiper > .slider_pagination_wrap' : null,
                        clickable: slider.hasClass('slider_pagination') ? '#' + cont_id + ' .slider_pagination_wrap' : false,
                        type: slider.hasClass('slider_pagination') && slider.data('pagination') ? slider.data('pagination') : 'bullets',
                        progressbarOpposite: slider.data('pagination') == 'progressbar' && ((slider.data('direction') == 'vertical' && (slider.hasClass('slider_pagination_pos_bottom') || slider.hasClass('slider_pagination_pos_bottom_outside'))) || (slider.data('direction') == 'horizontal' && (slider.hasClass('slider_pagination_pos_left') || slider.hasClass('slider_pagination_pos_right'))))
                    },
                    navigation: {
                        nextEl: slider.hasClass('slider_controls') ? '#' + id + '>.slider_controls_wrap>.slider_next,#' + id + '~.slider_controls_wrap>.slider_next' : null,
                        prevEl: slider.hasClass('slider_controls') ? '#' + id + '>.slider_controls_wrap>.slider_prev,#' + id + '~.slider_controls_wrap>.slider_prev' : null
                    },
                    autoplay: slider.hasClass('slider_noautoplay') || (typeof slider.data('autoplay') !== 'undefined' && slider.data('autoplay') == 0) ? false : {
                        delay: interval,
                        disableOnInteraction: true
                    },
                    on: {
                        slideChangeTransitionStart: function() {
                            var swiper = this,
                                slide = jQuery(swiper.slides[swiper.activeIndex]),
                                slide_number = slide.data('slide-number');
                            cont.find('.swiper-pagination-custom > span').removeClass('swiper-pagination-button-active').eq(slide_number).addClass('swiper-pagination-button-active');
                            cont.find('.slider_titles_outside_wrap .active').removeClass('active').fadeOut();
                            var slaves = is_controller ? jQuery('#' + slider.data('controlled-slider')) : jQuery('[data-slider-id="' + id.replace('_sc_', '_') + '"]');
                            if (slaves.length === 0 && !is_controller) {
                                slaves = jQuery('[data-slider-id="' + id.replace('_sc_', '_').replace('_swiper', '') + '"]');
                                if (slaves.length === 0) {
                                    slaves = jQuery('[data-slider-id="' + id.replace('_sc_slider_swiper', '') + '"]');
                                }
                            }
                            if (slaves.length > 0) {
                                slaves.each(function() {
                                    var controlled_slider = jQuery(this).hasClass('slider_swiper') ? jQuery(this) : jQuery(this).find('.slider_swiper').eq(0);
                                    var controlled_id = controlled_slider.attr('id');
                                    if (controlled_id && TRX_ADDONS_STORAGE['swipers'][controlled_id] && jQuery('#' + controlled_id).attr('data-busy') != 1) {
                                        slider.attr('data-busy', 1);
                                        setTimeout(function() {
                                            slider.attr('data-busy', 0);
                                        }, 300);
                                        var slide_number = jQuery(swiper.slides[swiper.activeIndex]).data('slide-number');
                                        var slide_idx = controlled_slider.find('[data-slide-number="' + slide_number + '"]:not(.swiper-slide-duplicate)').index();
                                        TRX_ADDONS_STORAGE['swipers'][controlled_id].slideTo(slide_idx);
                                    }
                                });
                            }
                            slider.trigger('slide_change_start', [slider]);
                        },
                        slideChangeTransitionEnd: function() {
                            var swiper = this,
                                slide = jQuery(swiper.slides[swiper.activeIndex]),
                                slide_prev = jQuery(swiper.slides[swiper.lastOpenedIndex !== undefined ? swiper.lastOpenedIndex : swiper.previousIndex]),
                                slide_number = slide.data('slide-number');
                            swiper.lastOpenedIndex = swiper.activeIndex;
                            var titles = cont.find('.slider_titles_outside_wrap .slide_info');
                            if (titles.length > 0) {
                                titles.eq(slide_number).addClass('active').fadeIn(300);
                            }
                            var video = slide_prev.find('.trx_addons_video_player:not(.with_video_autoplay)');
                            if (video.length > 0) {
                                if (video.hasClass('with_cover')) {
                                    if (video.hasClass('video_play')) {
                                        video.removeClass('video_play').find('.video_embed').empty();
                                    }
                                } else {
                                    var embed = video.find('.video_embed'),
                                        html = embed.html();
                                    embed.empty().html(html);
                                }
                            }
                            slider.attr('data-busy', 0);
                            slider.trigger('slide_change_end', [slider]);
                        },
                        touchStart: function() {
                            slider.trigger('swiper_touch_start');
                        },
                        touchEnd: function() {
                            slider.trigger('swiper_touch_end');
                        },
                    }
                }, slider));
                if (slider.data('mouse-wheel') == 1) {
                    var slider_sticky_wrapper = slider.parents('.elementor-sticky');
                    if (slider_sticky_wrapper.length) {
                        TRX_ADDONS_STORAGE['swipers'][id].mousewheel.disable();
                        var init_sticky_observer = function() {
                            var slider_sticky_wrapper_top = slider_sticky_wrapper.css('top') || '0px',
                                custom_top = Math.abs(parseFloat(slider_sticky_wrapper_top) - trx_addons_fixed_rows_height()) > 1;
                            trx_addons_sticky_observer_remove(id);
                            trx_addons_sticky_observer_create(id, slider_sticky_wrapper, function(entry, is_sticky) {
                                if (is_sticky) {
                                    TRX_ADDONS_STORAGE['swipers'][id].mousewheel.enable();
                                } else {
                                    TRX_ADDONS_STORAGE['swipers'][id].mousewheel.disable();
                                }
                            }, {
                                rootMargin: (-(custom_top ? parseFloat(slider_sticky_wrapper_top) : trx_addons_fixed_rows_height())) + 'px 0px 0px 0px'
                            });
                        };
                        init_sticky_observer();
                        $document.on('action.resize_trx_addons action.sc_layouts_row_fixed_on action.sc_layouts_row_fixed_off', trx_addons_debounce(init_sticky_observer, 500));
                    }
                }
                slider.trigger('slider_init', [slider]);
                cont.find('.swiper-pagination-custom').on('click', '>span', function(e) {
                    jQuery(this).siblings().removeClass('swiper-pagination-button-active');
                    var t = jQuery(this).addClass('swiper-pagination-button-active').index() * TRX_ADDONS_STORAGE['swipers'][id].params.slidesPerGroup;
                    TRX_ADDONS_STORAGE['swipers'][id].params.loop && (t += TRX_ADDONS_STORAGE['swipers'][id].loopedSlides);
                    TRX_ADDONS_STORAGE['swipers'][id].slideTo(t);
                    e.preventDefault();
                    return false;
                });
                cont.find('.slider_titles_outside_wrap .slide_info').eq(0).addClass('active').fadeIn(300);
                slider.attr('data-busy', 1).animate({
                    'opacity': 1
                }, 'fast', function() {
                    slider.attr('data-busy', 0);
                    trx_addons_set_controller_height(is_controller ? slider.parents('[data-slider-id]').eq(0).attr('id') : controller_id, is_controller ? jQuery('#' + slider.parents('[data-slider-id]').eq(0).data('slider-id')) : slider);
                    slider.trigger('slider_inited', [slider]);
                    $document.trigger('action.slider_inited', [slider, id]);
                });
                init_hidden_elements_after_all_sliders_inited();
                $document.trigger('action.resize_trx_addons');
                $window.trigger('scroll');
            });
        }
        if (window.ElastiStack) {
            container.find('.slider_elastistack:not(.inited)').each(function() {
                if (jQuery(this).parents('div:hidden,article:hidden').length > 0 || typeof window.ElastiStack == 'undefined') return;
                var slider = jQuery(this);
                var id = slider.attr('id');
                if (id == undefined) {
                    id = 'elastistack_' + Math.random();
                    id = id.replace('.', '');
                    slider.attr('id', id);
                }
                var cont = slider.parent().hasClass('slider_outer') ? slider.parent().attr('id', id + '_outer') : slider;
                var cont_id = cont.attr('id');
                var images = slider.find('ul.stack__images').attr('id', id + '_images');
                var images_id = images.attr('id');
                slider.css({
                    'display': 'block',
                    'opacity': 0
                }).addClass(id).addClass('inited').data('settings', {
                    mode: 'horizontal'
                });
                trx_addons_resize_sliders(e, cont);
                var stack = new ElastiStack(images.get(0), {
                    onUpdateStack: function(idx) {
                        var titles = cont.find('.slider_titles_outside_wrap');
                        if (titles.length > 0) {
                            titles.find('.active').removeClass('active').hide();
                            titles.find('.slide_info').eq(idx).addClass('active').fadeIn(300);
                        }
                        cont.find('.trx_addons_video_player.with_cover.video_play').removeClass('video_play').find('.video_embed').empty();
                        slider.trigger('slide_change_end', [slider]);
                    }
                });
                cont.find('.slider_next').on('click', function(e) {
                    stack.nextItem({
                        transform: 'translate3d(0, -60px, 400px)'
                    });
                    e.preventDefault();
                    return false;
                });
                cont.find('.slider_titles_outside_wrap .slide_info').eq(0).addClass('active').fadeIn(300);
                slider.animate({
                    'opacity': 1
                }, 'fast', function() {
                    stack._setStackStyle();
                });
            });
        }
    }
    $document.on('action.resize_trx_addons', trx_addons_resize_sliders);

    function trx_addons_resize_sliders(e, container) {
        if (container === undefined) {
            container = jQuery('body');
        }
        container.find('.slider_container.inited').each(function() {
            var slider = jQuery(this);
            if (slider.parents('div:hidden,article:hidden').length > 0) return;
            var id = slider.attr('id');
            var direction = slider.data('direction');
            if (direction != 'vertical') direction = 'horizontal';
            var on_resize = false;
            var max_width = slider.closest('.post_featured' + ',' + '.swiper-slide' + ',' + '.elementor-widget' + ',' + '.vc_column-inner' + ',' + trx_addons_apply_filters('trx_addons_filter_content_class', '.content', 'slider-resize') + ',' + trx_addons_apply_filters('trx_addons_filter_page_wrap_class', TRX_ADDONS_STORAGE['page_wrap_class'] ? TRX_ADDONS_STORAGE['page_wrap_class'] : '.page_wrap', 'slider-resize') + ',' + 'body').width();
            var slider_width = slider.width();
            if (slider_width > max_width) {
                slider_width = Math.min(slider_width, max_width);
                slider.width(slider_width);
                on_resize = true;
            }
            var last_width = slider.data('last-width');
            if (isNaN(last_width)) {
                last_width = 0;
            }
            if (last_width === 0 || last_width != slider_width) {
                if (direction != 'vertical') slider.data('last-width', slider_width);
                var space = slider.data('slides-space');
                if (space == undefined) {
                    space = 0;
                }
                if (slider.hasClass('slider_swiper') && typeof TRX_ADDONS_STORAGE['swipers'] != 'undefined' && typeof TRX_ADDONS_STORAGE['swipers'][id] == 'object' && typeof TRX_ADDONS_STORAGE['swipers'][id].params == 'object' && typeof TRX_ADDONS_STORAGE['swipers'][id].params.spaceBetween != 'undefined') {
                    var gap = space;
                    if (trx_addons_window_width() < 1440) {
                        var grid_element = jQuery('.elementor-column-gap-extended > .elementor-row > .elementor-column > .elementor-element-populated,' + '.elementor-column-gap-extended > .elementor-column > .elementor-element-populated').eq(0),
                            grid_gap = grid_element.length ? parseInt(grid_element.css('padding-left'), 10) : 0;
                        if (grid_gap >= 10) {
                            gap = grid_gap * 2;
                        }
                    }
                    if (gap > 0 && TRX_ADDONS_STORAGE['swipers'][id].params.spaceBetween > gap) {
                        TRX_ADDONS_STORAGE['swipers'][id].params.spaceBetween = gap;
                        space = gap;
                    }
                }
                var spv = trx_addons_get_slides_per_view(slider);
                if (spv == undefined || slider.parents('.widget_nav_menu').length > 0) {
                    spv = 1;
                }
                if (slider.hasClass('slider_swiper') && typeof TRX_ADDONS_STORAGE['swipers'] != 'undefined' && typeof TRX_ADDONS_STORAGE['swipers'][id] == 'object' && typeof TRX_ADDONS_STORAGE['swipers'][id].params == 'object' && typeof TRX_ADDONS_STORAGE['swipers'][id].params.slidesPerView != 'undefined') {
                    if (TRX_ADDONS_STORAGE['swipers'][id].params.slidesPerView != 'auto') {
                        if (direction == 'horizontal') {
                            var smw = slider.data('slides-min-width');
                            if (slider_width / spv < smw) {
                                spv = Math.max(1, Math.floor(slider_width / smw));
                            }
                            if (TRX_ADDONS_STORAGE['swipers'][id].params.slidesPerView != spv) {
                                TRX_ADDONS_STORAGE['swipers'][id].params.slidesPerView = spv;
                                TRX_ADDONS_STORAGE['swipers'][id].params.loopedSlides = spv;
                            }
                        }
                        on_resize = true;
                    }
                }
                if (!slider.hasClass('slider_noresize') || slider.height() === 0) {
                    var slider_height = slider.height();
                    var slide = slider.find('.slider-slide').eq(0);
                    var slide_width = direction == 'horizontal' ? (slider_width - (spv - 1) * space) / spv : slider_width;
                    var slide_height = direction == 'vertical' ? (slider_height - (spv - 1) * space) / spv : slider_height;
                    var ratio = slider.data('ratio');
                    if (ratio === undefined || ('' + ratio).indexOf(':') < 1) {
                        ratio = slide_height > 0 ? slide_width + ':' + slide_height : "16:9";
                        slider.attr('data-ratio', ratio);
                    }
                    ratio = ratio.split(':');
                    var ratio_x = !isNaN(ratio[0]) ? Number(ratio[0]) : 16;
                    var ratio_y = !isNaN(ratio[1]) ? Number(ratio[1]) : 9;
                    var height = Math.floor((spv == 1 ? slider_width : slide_width) / ratio_x * ratio_y);
                    slider.height(direction == 'vertical' ? height * spv + (spv - 1) * space : height);
                    on_resize = true;
                    if (slider.hasClass('slider_elastistack')) {
                        slider.find('.slider-wrapper,.stack__images,.slider-slide').height(height);
                    }
                    trx_addons_set_controller_height(slider.data('controller'), slider, e);
                }
                if (on_resize && (slider.hasClass('slider_swiper') || slider.hasClass('slider_swiper_outer'))) {
                    if (typeof TRX_ADDONS_STORAGE['swipers'] != 'undefined' && typeof TRX_ADDONS_STORAGE['swipers'][id] == 'object' && typeof TRX_ADDONS_STORAGE['swipers'][id].resize == 'object' && typeof TRX_ADDONS_STORAGE['swipers'][id].resize.resizeHandler == 'function') {
                        TRX_ADDONS_STORAGE['swipers'][id].resize.resizeHandler(e);
                    }
                }
            }
        });
    }

    function trx_addons_set_controller_height(controller_id, slider, e) {
        if (!controller_id && typeof TRX_ADDONS_STORAGE['pagebuilder_preview_mode'] != 'undefined' && TRX_ADDONS_STORAGE['pagebuilder_preview_mode']) {
            var slider_id = slider.attr('id').replace('_sc_slider', '');
            if (slider_id) {
                controller_id = jQuery('[data-slider-id="' + slider_id + '"]').eq(0).attr('id');
            }
        }
        if (!controller_id) return;
        var controller = jQuery('#' + controller_id);
        if (controller.length > 0 && controller.hasClass('sc_slider_controller_vertical') && controller.hasClass('sc_slider_controller_height_auto')) {
            var controller_slider = controller.hasClass('slider_container') ? controller : controller.find('.slider_container'),
                controller_slider_id = controller_slider.attr('id');
            var paddings = parseFloat(controller.css('paddingTop'));
            if (isNaN(paddings)) paddings = 0;
            var controller_spv = trx_addons_get_slides_per_view(controller);
            if (isNaN(controller_spv)) controller_spv = 1;
            controller_slider.height(Math.max((slider.parent().hasClass('slider_outer') ? slider.parent().outerHeight() : slider.height()) - 2 * paddings, controller_spv * trx_addons_apply_filters('trx_addons_filter_slider_controller_min_height', 80)));
            if ((controller_slider.hasClass('slider_swiper') || controller_slider.hasClass('slider_swiper_outer'))) {
                if (typeof TRX_ADDONS_STORAGE['swipers'][controller_slider_id] == 'object' && typeof TRX_ADDONS_STORAGE['swipers'][controller_slider_id].resize == 'object' && typeof TRX_ADDONS_STORAGE['swipers'][controller_slider_id].resize.resizeHandler == 'function') {
                    TRX_ADDONS_STORAGE['swipers'][controller_slider_id].resize.resizeHandler(e);
                }
            }
        }
    }
    $document.on('action.ready_trx_addons', function(e) {
        if (!window.Swiper || typeof Swiper.use != 'function') {
            return;
        }
        const $ = Swiper.$;

        function createShadow(params, $slideEl, side) {
            const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
            const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
            let $shadowEl = $shadowContainer.children(`.${shadowClass}`);
            if (!$shadowEl.length) {
                $shadowEl = $(`<div class="swiper-slide-shadow${side ? `-${side}` : ''}"></div>`);
                $shadowContainer.append($shadowEl);
            }
            return $shadowEl;
        }

        function effectInit(params) {
            const {
                effect,
                swiper,
                on,
                setTranslate,
                setTransition,
                overwriteParams,
                perspective,
                recreateShadows,
                getEffectParams
            } = params;
            on('beforeInit', () => {
                if (swiper.params.effect !== effect) {
                    return;
                }
                swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
                if (perspective && perspective()) {
                    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                }
                const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
                Object.assign(swiper.params, overwriteParamsResult);
                Object.assign(swiper.originalParams, overwriteParamsResult);
            });
            on('setTranslate', () => {
                if (swiper.params.effect !== effect) {
                    return;
                }
                setTranslate();
            });
            on('setTransition', (_s, duration) => {
                if (swiper.params.effect !== effect) {
                    return;
                }
                setTransition(duration);
            });
            on('transitionEnd', () => {
                if (swiper.params.effect !== effect) {
                    return;
                }
                if (recreateShadows) {
                    if (!getEffectParams || !getEffectParams().slideShadows) {
                        return;
                    }
                    swiper.slides.each(slideEl => {
                        const $slideEl = swiper.$(slideEl);
                        $slideEl.find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').remove();
                    });
                    recreateShadows();
                }
            });
            let requireUpdateOnVirtual, requestAnimationFrame = trx_addons_request_animation_frame();
            on('virtualUpdate', () => {
                if (swiper.params.effect !== effect) {
                    return;
                }
                if (!swiper.slides.length) {
                    requireUpdateOnVirtual = true;
                }
                requestAnimationFrame(() => {
                    if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                        setTranslate();
                        requireUpdateOnVirtual = false;
                    }
                });
            });
        }
        if (trx_addons_apply_filters('trx_addons_filter_add_effect_to_swiper', true, 'swap')) {
            const effectSwapModules = {
                setTranslate: function setTranslate(swiper) {
                    var swiperWidth = swiper.width;
                    var swiperHeight = swiper.height;
                    var $wrapperEl = swiper.$wrapperEl;
                    var slides = swiper.slides;
                    var slidesSizesGrid = swiper.slidesSizesGrid;
                    var params = swiper.params.swapEffect;
                    var isHorizontal = swiper.isHorizontal();
                    var transform = swiper.translate;
                    var center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
                    var rotate = isHorizontal ? params.rotate : -params.rotate;
                    var spaceBetween = swiper.params.spaceBetween;
                    var perView = swiper.params.slidesPerView;
                    var levelCenter = (perView - 1) / 2;
                    for (var i = 0, length = slides.length; i < length; i += 1) {
                        var $slideEl = slides.eq(i);
                        var slideSize = slidesSizesGrid[i];
                        var slideOffsetOrig = $slideEl[0].swiperSlideOffset;
                        var slideOffset = slideOffsetOrig + slideSize / 2;
                        var distance = center - slideOffset;
                        var slideOffsetNum = Math.abs(distance) < 2 ? 0 : Math.ceil(Math.abs(distance) / (slideSize + spaceBetween));
                        if (perView % 2 === 0) {
                            slideOffsetNum = Math.max(0, slideOffsetNum - 0.5);
                        }
                        var place = distance < -1 * Math.max(1, spaceBetween) ? 1 : (distance > Math.max(1, spaceBetween) ? -1 : 0);
                        distance = distance + place * slideOffsetNum * spaceBetween;
                        var offsetMultiplier = distance / slideSize;
                        var delta = Math.max(0, Math.abs(offsetMultiplier) - levelCenter);
                        var allow = delta > 0;
                        var rotateX = isHorizontal ? 0 : (allow ? -place * Math.min(rotate, rotate * delta) : 0);
                        var rotateY = isHorizontal ? (allow ? -place * Math.min(rotate, rotate * delta) : 0) : 0;
                        var offset = allow ? distance + place * levelCenter * slideSize : 0;
                        var translateX = isHorizontal ? (allow ? offset : 0) : 0;
                        var translateY = isHorizontal ? 0 : (allow ? offset : 0);
                        var translateZ = -slideSize * (allow ? delta : 0);
                        var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
                        if (Math.abs(translateX) < 0.001) translateX = 0;
                        if (Math.abs(translateY) < 0.001) translateY = 0;
                        if (Math.abs(translateZ) < 0.001) translateZ = 0;
                        if (Math.abs(rotateY) < 0.001) rotateY = 0;
                        if (Math.abs(rotateX) < 0.001) rotateX = 0;
                        if (Math.abs(scale) < 0.001) scale = 0;
                        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)" + " rotateX(" + rotateX + "deg)" + " rotateY(" + rotateY + "deg)" + " scale(" + scale + ")";
                        $slideEl.transform(slideTransform);
                        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        $slideEl[0].style.opacity = perView > 1 ? Math.max(0, 1 - delta) : 1;
                        if (params.slideShadows) {
                            let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if ($shadowBeforeEl.length === 0) {
                                $shadowBeforeEl = createShadow(params, $slideEl, isHorizontal ? 'left' : 'top');
                            }
                            if ($shadowAfterEl.length === 0) {
                                $shadowAfterEl = createShadow(params, $slideEl, isHorizontal ? 'right' : 'bottom');
                            }
                            if ($shadowBeforeEl.length) {
                                $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            }
                            if ($shadowAfterEl.length) {
                                $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                            }
                        }
                    }
                    if (trx_addons_browser_is_pointer_events()) {
                        var ws = $wrapperEl[0].style;
                        ws.perspectiveOrigin = center + "px 50%";
                    }
                },
                setTransition: function setTransition(swiper, duration, changeCssTransition) {
                    const {
                        transformEl
                    } = swiper.params.swapEffect;
                    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
                    $transitionElements.transition(duration);
                    if (changeCssTransition) {
                        $transitionElements.css({
                            'webkitTransitionProperty': 'transform, opacity, z-index',
                            'transitionProperty': 'transform, opacity, z-index',
                            'webkitTransitionDuration': duration + 'ms',
                            'transitionDuration': duration + 'ms'
                        });
                    }
                    if (swiper.params.slideShadows) {
                        const $shadow = $transitionElements.find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left');
                        if ($shadow && $shadow.length) {
                            $shadow.transition(duration);
                            if (changeCssTransition) {
                                $shadow.css({
                                    'webkitTransitionProperty': 'transform, opacity, z-index',
                                    'transitionProperty': 'transform, opacity, z-index',
                                    'webkitTransitionDuration': duration + 'ms',
                                    'transitionDuration': duration + 'ms'
                                });
                            }
                        }
                    }
                }
            };
            if (typeof Swiper.prototype.modules != 'undefined' && typeof Swiper.prototype.modules["effect-fade"] != 'undefined') {
                Swiper.__proto__.Swap = {
                    setTranslate: function setTranslate() {
                        effectSwapModules.setTranslate(this);
                    },
                    setTransition: function setTransition(duration) {
                        effectSwapModules.setTransition(this, duration, false);
                    }
                };
                Swiper.__proto__.EffectSwap = {
                    name: 'effect-swap',
                    params: {
                        swapEffect: {
                            rotate: 50,
                            scale: 1
                        }
                    },
                    create: function create() {
                        var swiper = this;
                        trx_addons_object_extend(swiper, {
                            swapEffect: {
                                setTranslate: Swiper.Swap.setTranslate.bind(swiper),
                                setTransition: Swiper.Swap.setTransition.bind(swiper)
                            }
                        });
                    },
                    on: {
                        beforeInit: function beforeInit() {
                            var swiper = this;
                            if (swiper.params.effect !== 'swap') {
                                return;
                            }
                            swiper.classNames.push(swiper.params.containerModifierClass + "swap");
                            swiper.classNames.push(swiper.params.containerModifierClass + "3d");
                            swiper.params.watchSlidesProgress = true;
                            swiper.originalParams.watchSlidesProgress = true;
                        },
                        setTranslate: function setTranslate() {
                            var swiper = this;
                            if (swiper.params.effect !== 'swap') {
                                return;
                            }
                            swiper.swapEffect.setTranslate();
                        },
                        setTransition: function setTransition(duration) {
                            var swiper = this;
                            if (swiper.params.effect !== 'swap') {
                                return;
                            }
                            swiper.swapEffect.setTransition(duration);
                        }
                    }
                };
                Swiper.use([Swiper.EffectSwap]);
            } else {
                const EffectSwap = function(_ref) {
                    let {
                        swiper,
                        extendParams,
                        on
                    } = _ref;
                    extendParams({
                        swapEffect: {
                            rotate: 50,
                            scale: 1,
                            transformEl: null
                        }
                    });
                    const setTranslate = () => {
                        effectSwapModules.setTranslate(swiper);
                    };
                    const setTransition = duration => {
                        effectSwapModules.setTransition(swiper, duration, true);
                    };
                    effectInit({
                        effect: 'swap',
                        swiper,
                        on,
                        setTranslate,
                        setTransition,
                        perspective: () => true,
                        overwriteParams: () => ({
                            watchSlidesProgress: true
                        })
                    });
                };
                Swiper.use([EffectSwap]);
            }
        }
    });
})();
jQuery(document).on('action.ready_trx_addons', function() {
    "use strict";
    var $document = jQuery(document),
        $body = jQuery('body');
    if (!$body.hasClass('added_to_cart_inited')) {
        $body.addClass('added_to_cart_inited');
        var $sc_cart = jQuery('.sc_layouts_cart'),
            $cart_button = jQuery('.sc_layouts_cart_button_wrap');
        if ($sc_cart.length > 0) {
            $sc_cart.filter(':not(.inited)').each(function(idx) {
                var cart = jQuery(this);
                cart.addClass('inited').on('click', '.sc_layouts_cart_icon,.sc_layouts_cart_details', function(e) {
                    var link = jQuery(this);
                    if (!link.data('panel-id')) {
                        var widget = link.siblings('.sc_layouts_cart_widget').eq(0),
                            row = link.parents('.sc_layouts_row').eq(0),
                            cart = link.parents('.sc_layouts_cart').eq(0);
                        if (widget.length > 0 && widget.text().replace(/\s*/g, '') !== '') {
                            cart.toggleClass('sc_layouts_cart_opened');
                            row.toggleClass('sc_layouts_row_on_top');
                            widget.fadeToggle();
                            $document.trigger('action.opened_dropdown_elements', [$sc_cart]);
                        }
                    }
                }).on('click', '.sc_layouts_cart_widget_close', function(e) {
                    var link = jQuery(this),
                        row = link.parents('.sc_layouts_row').eq(0),
                        cart = link.parents('.sc_layouts_cart').eq(0);
                    row.removeClass('sc_layouts_row_on_top');
                    cart.removeClass('sc_layouts_cart_opened');
                    link.parent().fadeOut();
                });
            });
            $document.on('action.prepare_popup_elements', function(e, panel) {
                if (panel.hasClass('sc_layouts_cart_panel')) {
                    $sc_cart.find('[data-panel-id="' + panel.attr('id') + '"]').each(function() {
                        var $cart = jQuery(this).parents('.sc_layouts_cart');
                        if ($cart.is(':visible')) {
                            $cart.toggleClass('sc_layouts_cart_opened', true);
                        }
                    });
                }
            });
            $document.on('action.close_popup_elements', function(e, panel) {
                if (panel.hasClass('sc_layouts_cart_panel')) {
                    $sc_cart.find('[data-panel-id="' + panel.attr('id') + '"]').each(function() {
                        var $cart = jQuery(this).parents('.sc_layouts_cart');
                        if ($cart.is(':visible')) {
                            $cart.removeClass('sc_layouts_cart_opened');
                        }
                    });
                }
            });
            if (trx_addons_apply_filters('trx_addons_filter_sc_layouts_cart_button_hide_on_scroll', true)) {
                $document.on('action.scroll_trx_addons', function() {
                    $cart_button.each(function() {
                        var $self = jQuery(this);
                        if ($self.hasClass('sc_layouts_cart_button_showed')) {
                            $self.removeClass('sc_layouts_cart_button_showed');
                        }
                    });
                });
            }
            jQuery(document.body).on('wc_fragments_refreshed wc_fragments_loaded update_cart added_to_cart removed_from_cart', function(e) {
                jQuery('.widget_shopping_cart').each(function() {
                    var $widget = jQuery(this);
                    var total = 0;
                    var $total = $widget.find('.total .amount');
                    if (!$total.length) {
                        $total = $widget.find('.elementor-menu-cart__subtotal .amount');
                    }
                    if ($total.length) {
                        total = $total.text();
                    }
                    $sc_cart.find('.sc_layouts_cart_summa').text(total);
                    var cnt = 0,
                        cart_list = false;
                    $widget.find('.cart_list li').each(function() {
                        var q = jQuery(this).find('.quantity').html().split(' ', 2);
                        if (!isNaN(q[0])) {
                            cnt += Number(q[0]);
                        }
                        cart_list = true;
                    });
                    if (!cart_list) {
                        $widget.find('.elementor-menu-cart__product').each(function() {
                            var q = jQuery(this).find('.product-quantity').text().split(' ');
                            if (!isNaN(q[0])) {
                                cnt += Number(q[0]);
                            }
                        });
                    }
                    var $items = $sc_cart.find('.sc_layouts_cart_items').eq(0),
                        items = $items.text().split(' ', 2);
                    items[0] = cnt;
                    $items.text(items[0] + (items.length > 1 ? ' ' + (cnt == 1 ? $items.data('item') : $items.data('items')) : ''));
                    jQuery('.sc_layouts_cart_items_short').text(items[0]);
                    $sc_cart.data({
                        'items': cnt ? cnt : 0,
                        'summa': total ? total : 0
                    });
                    if (e.type == 'added_to_cart') {
                        sc_layouts_cart_panel_open($sc_cart);
                    }
                });
            });
            jQuery(document.body).on('edd_cart_item_added edd_cart_item_removed edd_quantity_updated', function(e, data) {
                var items = $sc_cart.find('.sc_layouts_cart_items').eq(0).text().split(' ', 2);
                items[0] = data.cart_quantity ? data.cart_quantity : data.quantity;
                jQuery('.sc_layouts_cart_items').text(items[0] + (items.length > 1 ? ' ' + items[1] : ''));
                jQuery('.sc_layouts_cart_items_short').text(items[0]);
                jQuery('.sc_layouts_cart_summa').text(data.total);
                $sc_cart.data({
                    'items': data.cart_quantity ? data.cart_quantity : 0,
                    'summa': data.total ? data.total : 0
                });
                sc_layouts_cart_panel_open($sc_cart);
            });
        }
    }

    function sc_layouts_cart_panel_open($sc_cart) {
        if (!$sc_cart.hasClass('sc_layouts_cart_opened')) {
            var link = $sc_cart.filter(':visible').find('.sc_layouts_cart_icon,.sc_layouts_cart_details').eq(0);
            if (link.length) {
                if (link.data('panel-id')) {
                    link.trigger('click');
                } else if (link.data('button-id')) {
                    setTimeout(function() {
                        jQuery('#' + link.data('button-id')).toggleClass('sc_layouts_cart_button_showed');
                    }, 10);
                }
            }
        }
    }
});
jQuery(document).on('action.ready_trx_addons', function() {
    "use strict";
    jQuery(document).on('action.init_hidden_elements', function(e, $container) {
        if ($container === undefined) {
            $container = jQuery('body');
        }
        $container.find('.sc_layouts_dark_light:not(.sc_layouts_dark_light_inited)').each(function() {
            jQuery(this).addClass('sc_layouts_dark_light_inited').on('click', function(e) {
                var $self = jQuery(this),
                    $active = $self.find('.sc_layouts_dark_light_active'),
                    active_mode = $active.hasClass('sc_layouts_dark_light_dark') ? 'dark' : 'light',
                    $next = $active.siblings('.sc_layouts_dark_light_item'),
                    next_mode = $next.hasClass('sc_layouts_dark_light_dark') ? 'dark' : 'light',
                    schemes = $self.data('schemes'),
                    permanent = $self.data('permanent'),
                    i, data, option_name;
                jQuery('.sc_layouts_dark_light').each(function() {
                    var $current = jQuery(this);
                    $current.removeClass('sc_layouts_dark_light_active_' + active_mode).addClass('sc_layouts_dark_light_active_' + next_mode).find('.sc_layouts_dark_light_item').toggleClass('sc_layouts_dark_light_active');
                });
                if (schemes) {
                    for (i = 0; i < schemes[active_mode].length; i++) {
                        data = schemes[active_mode][i];
                        jQuery(data.selector).removeClass('scheme_' + data.scheme);
                    }
                    for (i = 0; i < schemes[next_mode].length; i++) {
                        data = schemes[next_mode][i];
                        jQuery(data.selector).addClass('scheme_' + data.scheme);
                    }
                }
                for (i = 0; i < schemes[next_mode].length; i++) {
                    data = schemes[next_mode][i];
                    option_name = trx_addons_apply_filters('trx_addons_filter_dark_light_option_name', (data.area == 'content' ? 'color' : (data.area == 'other' ? 'menu' : data.area)) + '_scheme', data);
                    if (permanent) {
                        trx_addons_set_cookie(option_name, data.scheme);
                    } else {
                        trx_addons_del_cookie(option_name);
                    }
                }
                e.preventDefault();
                return false;
            });
        });
    });
});
jQuery(document).on('action.ready_trx_addons', function() {
    "use strict";
    jQuery('.sc_layouts_logo,.custom-logo-link').on('click', function(e) {
        if (jQuery(this).attr('href') == '#' || location.href == jQuery(this).attr('href')) {
            trx_addons_document_animate_to(0);
            e.preventDefault();
            return false;
        }
    });
});
(function() {
    "use strict";
    var $document = jQuery(document);
    $document.on('action.before_ready_trx_addons', function() {
        window.trx_addons_init_sfmenu = function(selector) {
            jQuery(selector).show().each(function() {
                var $self = jQuery(this);
                var is_touch_device = ('ontouchstart' in document.documentElement);
                var animation_in = $self.parent().data('animation-in');
                if (animation_in == undefined || is_touch_device) {
                    animation_in = "none";
                }
                var animation_out = $self.parent().data('animation-out');
                if (animation_out == undefined || is_touch_device) {
                    animation_out = "none";
                }
                var sf_init = {
                    delay: 300,
                    speed: animation_in != 'none' ? 500 : 200,
                    speedOut: animation_out != 'none' ? 300 : 200,
                    autoArrows: false,
                    dropShadows: false,
                    onBeforeShow: function() {
                        jQuery(this).each(function() {
                            var menu_item = jQuery(this).data('menu-state', 'before-show');
                            if (menu_item.hasClass('sc_layouts_submenu') && !menu_item.hasClass('layouts_inited') && menu_item.find('.slider_container').length > 0) {
                                menu_item.addClass('sc_layouts_submenu_prepare');
                            } else {
                                trx_addons_do_action('trx_addons_action_menu_on_before_show', menu_item);
                                trx_addons_before_show_menu(menu_item);
                            }
                        });
                    },
                    onShow: function() {
                        jQuery(this).each(function() {
                            var menu_item = jQuery(this);
                            if (menu_item.data('menu-state') != 'before-show') {
                                trx_addons_do_action('trx_addons_action_menu_on_show', menu_item);
                                trx_addons_before_show_menu(menu_item);
                            }
                            menu_item.data('menu-state', 'show');
                            trx_addons_do_action('trx_addons_action_menu_after_show', menu_item);
                            trx_addons_after_show_menu(menu_item);
                        });
                    },
                    onBeforeHide: function() {
                        jQuery(this).each(function() {
                            var menu_item = jQuery(this);
                            if (menu_item.data('menu-state') == 'show') {
                                menu_item.data('menu-state', 'before-hide');
                                trx_addons_do_action('trx_addons_action_menu_on_before_hide', menu_item);
                                trx_addons_before_hide_menu(menu_item);
                            }
                        });
                    },
                    onHide: function() {
                        jQuery(this).each(function() {
                            var menu_item = jQuery(this).data('menu-state', 'hide');
                            trx_addons_do_action('trx_addons_action_menu_on_hide', menu_item);
                            trx_addons_after_hide_menu(menu_item);
                        });
                    },
                    onHandleTouch: function() {
                        var $ul = jQuery(this).parents('ul');
                        if (trx_addons_browser_is_ios() && $ul.length > 1) {
                            $ul.addClass('sc_layouts_submenu_freeze');
                            setTimeout(function() {
                                $ul.removeClass('sc_layouts_submenu_freeze');
                            }, 1000);
                        }
                    }
                };
                if (animation_in == 'none') {
                    sf_init.animation = {
                        opacity: 'show'
                    };
                }
                if (animation_out == 'none') {
                    sf_init.animationOut = {
                        opacity: 'hide'
                    };
                }
                $self.find('.sc_layouts_submenu_wrap').on('focusout', function(e) {
                    if (e.currentTarget && jQuery(e.currentTarget).hasClass('sc_layouts_submenu_wrap')) {
                        e.stopPropagation();
                        return false;
                    }
                });
                $self.addClass('inited').superfish(trx_addons_apply_filters('trx_addons_filter_menu_init_args', sf_init));

                function trx_addons_before_show_menu(menu_item) {
                    var in_columns = menu_item.parents('li[class*="columns-"]').length > 0 && (!menu_item.parent().attr('class') || menu_item.parent().attr('class').indexOf('columns-') == -1);
                    if (!in_columns) {
                        var window_width = jQuery(window).width(),
                            page_wrap = jQuery(trx_addons_apply_filters('trx_addons_filter_page_wrap_class', TRX_ADDONS_STORAGE['page_wrap_class'] ? TRX_ADDONS_STORAGE['page_wrap_class'] : '.page_wrap', 'menu-before-show')).eq(0),
                            page_wrap_width = page_wrap.length > 0 ? page_wrap.width() : window_width,
                            page_wrap_offset = page_wrap.length > 0 ? page_wrap.offset().left : 0,
                            par = menu_item.parents("ul").eq(0),
                            par_offset = par.length > 0 ? par.offset().left : 0,
                            par_width = par.length > 0 ? par.outerWidth() : 0,
                            ul_width = menu_item.outerWidth(),
                            rtl = jQuery('body').hasClass('rtl');
                        if (menu_item.parents("ul").length > 1) {
                            if ((!rtl && ((par_offset + par_width + ul_width > page_wrap_offset + page_wrap_width - 10 && par_offset - ul_width > page_wrap_offset) || (par_offset + par_width + ul_width > window_width && par_offset - ul_width > 0))) || (rtl && ((par_offset - ul_width < page_wrap_offset + 10 && par_offset + par_width + ul_width < page_wrap_offset + page_wrap_width) || (par_offset - ul_width < 0 && par_offset + par_width + ul_width < window_width)))) {
                                menu_item.addClass('submenu_left');
                            } else {
                                menu_item.removeClass('submenu_left');
                            }
                        }
                        if (menu_item.parents('.top_panel').length > 0) {
                            var wide = trx_addons_stretch_submenu(menu_item);
                            if (!wide) {
                                var ul_pos = menu_item.data('ul_pos'),
                                    submenu_left = (menu_item.hasClass('submenu_left') && !rtl) || (!menu_item.hasClass('submenu_left') && rtl);
                                if (ul_pos === undefined) {
                                    ul_pos = parseFloat(menu_item.css(submenu_left ? 'right' : 'left'));
                                }
                                if (isNaN(ul_pos)) {
                                    ul_pos = 0;
                                }
                                var ul_offset = menu_item.parents("ul").length > 1 ? par_offset + ul_pos : menu_item.parent().offset().left;
                                if (submenu_left) {
                                    if (ul_offset < 0) {
                                        if (menu_item.data('ul_pos') == undefined) {
                                            menu_item.data('ul_pos', ul_pos);
                                        }
                                        menu_item.css({
                                            'right': ul_pos + ul_offset + 'px'
                                        });
                                    }
                                } else {
                                    if (ul_offset + ul_width >= window_width) {
                                        if (menu_item.data('ul_pos') == undefined) {
                                            menu_item.data('ul_pos', ul_pos);
                                        }
                                        menu_item.css({
                                            'left': (ul_pos - (ul_offset + ul_width - window_width)) + 'px'
                                        });
                                    }
                                }
                                var ul_height = menu_item.outerHeight(),
                                    w_height = jQuery(window).height(),
                                    menu = menu_item.parents('.sc_layouts_menu').eq(0),
                                    row_offset = menu.length ? menu.offset().top - jQuery(window).scrollTop() : 0,
                                    row_height = 0,
                                    par_top = 0;
                                par = menu_item.parent();
                                par_offset = 0;
                                while (par.length > 0) {
                                    par_top = par.position().top;
                                    par_offset += par_top + par.parent().position().top;
                                    row_height = par.outerHeight();
                                    if (par_top === 0) break;
                                    par = par.parents('li').eq(0);
                                }
                                if (row_offset + par_offset + ul_height > w_height) {
                                    if (par_offset > ul_height) {
                                        menu_item.css({
                                            'top': 'auto',
                                            'bottom': '-' + (menu_item.css('padding-bottom') || 0)
                                        });
                                    } else {
                                        menu_item.css({
                                            'top': '-' + (par_offset - row_height - 2) + 'px',
                                            'bottom': 'auto'
                                        });
                                    }
                                }
                            }
                        }
                        var animated = false;
                        trx_addons_do_action('trx_addons_action_menu_before_animation_in', menu_item, animation_in, animation_out);
                        if (animation_in != 'none') {
                            animated = trx_addons_apply_filters('trx_addons_filter_menu_animation_in', false, menu_item, animation_in, animation_out);
                            if (!animated) {
                                if (menu_item.hasClass('animated') && menu_item.hasClass(animation_out)) {
                                    menu_item.removeClass('animated faster ' + animation_out);
                                }
                                menu_item.addClass('animated fast ' + animation_in);
                                animated = true;
                            }
                        }
                        $document.trigger('action.before_show_submenu', [menu_item]);
                    }
                    return animated;
                }

                function trx_addons_after_show_menu(menu_item) {
                    if (menu_item.hasClass('sc_layouts_submenu')) {
                        if (!menu_item.hasClass('layouts_inited')) {
                            trx_addons_stretch_submenu(menu_item);
                            $document.trigger('action.init_hidden_elements', [menu_item]);
                            if (menu_item.find('.slider_container').length > 0) {
                                $document.on('action.slider_inited', function(e, slider, id) {
                                    trx_addons_before_show_menu(menu_item);
                                    menu_item.removeClass('sc_layouts_submenu_prepare').addClass('layouts_inited');
                                });
                            } else {
                                menu_item.addClass('layouts_inited');
                            }
                        }
                        $document.trigger('action.resize_trx_addons', [menu_item]);
                    }
                    $document.trigger('action.after_show_submenu', [menu_item]);
                }

                function trx_addons_before_hide_menu(menu_item) {
                    menu_item.find('.trx_addons_video_player.with_cover.video_play').removeClass('video_play').find('.video_embed').empty();
                    var animated = false;
                    trx_addons_do_action('trx_addons_action_menu_before_animation_out', menu_item, animation_in, animation_out);
                    if (animation_out != 'none') {
                        animated = trx_addons_apply_filters('trx_addons_filter_menu_animation_out', false, menu_item, animation_in, animation_out);
                        if (!animated) {
                            if (menu_item.parents('[class*="columns-"]').length === 0) {
                                if (menu_item.hasClass('animated') && menu_item.hasClass(animation_in)) {
                                    menu_item.removeClass('animated fast ' + animation_in);
                                }
                                if (menu_item.data('menu-state') == 'show' || menu_item.data('menu-state') == 'before-hide') {
                                    menu_item.addClass('animated faster ' + animation_out);
                                    animated = true;
                                }
                            }
                        }
                    }
                    $document.trigger('action.before_hide_submenu', [menu_item]);
                    return animated;
                }

                function trx_addons_after_hide_menu(menu_item) {
                    setTimeout(function() {
                        if (menu_item.data('menu-state') == 'hide') {
                            menu_item.removeAttr('style');
                            var bg = menu_item.find('> .sc_layouts_menu_stretch_bg');
                            if (bg.length) {
                                bg.removeAttr('style').css({
                                    'background-color': menu_item.css('background-color')
                                });
                            }
                            var container = menu_item.data('reset-style');
                            if (container) {
                                menu_item.find(container).removeAttr('style');
                            }
                            $document.trigger('action.after_hide_submenu', [menu_item]);
                        }
                    }, 500);
                }
                window.trx_addons_stretch_submenu = function(menu_item) {
                    var done = false;
                    if (!menu_item.length) {
                        return done;
                    }
                    var parent_class = menu_item.parent().attr('class');
                    if (TRX_ADDONS_STORAGE['menu_stretch'] == 1 && !menu_item.hasClass('trx_addons_no_stretch') && !menu_item.parents('.sc_layouts_menu').hasClass('sc_layouts_menu_dir_vertical') && trx_addons_apply_filters('trx_addons_filter_stretch_menu', menu_item.hasClass('sc_layouts_submenu') || parent_class.indexOf('columns-') != -1 || parent_class.indexOf('trx_addons_stretch_') != -1, menu_item)) {
                        var menu = menu_item.parents("ul");
                        if (menu.length == 1) {
                            var $body = jQuery('body'),
                                li = menu_item.parents("li").eq(0),
                                stretch_to = trx_addons_apply_filters('trx_addons_filter_stretch_menu_to', li.hasClass('trx_addons_stretch_window') ? 'window' : (li.hasClass('trx_addons_stretch_window_boxed') ? 'window_boxed' : 'content'), menu_item),
                                content_wrap_selector = trx_addons_apply_filters('trx_addons_filter_stretch_menu_content_wrap_selector', '.content_wrap', menu_item),
                                content_wrap = jQuery(content_wrap_selector).eq(0);
                            if (!content_wrap.length) {
                                $body.append(trx_addons_apply_filters('trx_addons_filter_stretch_menu_content_wrap_html', '<div class="content_wrap" style="height:0;visibility:hidden;"></div>', menu_item));
                                content_wrap = jQuery(content_wrap_selector).eq(0);
                                if (!content_wrap.length) {
                                    content_wrap = trx_addons_apply_filters('trx_addons_filter_stretch_menu_content_wrap', content_wrap, menu_item);
                                }
                            }
                            if (content_wrap.length == 1) {
                                var bw = $body.innerWidth(),
                                    cw = trx_addons_apply_filters('trx_addons_filter_stretch_menu_content_wrap_width', content_wrap.innerWidth(), menu_item, content_wrap),
                                    cw_offset = content_wrap.offset().left,
                                    li_offset = li.offset().left;
                                menu_item.css({
                                    'width': (stretch_to == 'window' ? bw : cw) + 'px',
                                    'max-width': 'none',
                                    'left': -li_offset + (stretch_to == 'window' ? 0 : cw_offset) + 'px',
                                    'right': 'auto'
                                });
                                if (stretch_to == 'window') {
                                    menu_item.data('reset-style', '.elementor-section-boxed > .elementor-container,.e-con-boxed > .e-con-inner').find('.elementor-section-boxed > .elementor-container,.e-con-boxed > .e-con-inner').css({
                                        'max-width': 'none'
                                    });
                                } else if (stretch_to == 'window_boxed') {
                                    var bg = menu_item.find('> .sc_layouts_menu_stretch_bg');
                                    if (bg.length === 0) {
                                        menu_item.append('<span class="sc_layouts_menu_stretch_bg"></span>');
                                        bg = menu_item.find('> .sc_layouts_menu_stretch_bg');
                                        bg.css({
                                            'background-color': menu_item.css('background-color')
                                        });
                                    }
                                    bg.css({
                                        'left': -(cw_offset + 1) + 'px',
                                        'right': -(bw - cw_offset - cw + 1) + 'px'
                                    });
                                }
                                done = true;
                                $document.trigger('action.resize_trx_addons', [menu_item]);
                            }
                        }
                    }
                    return done;
                };
            });
        };
        trx_addons_init_sfmenu('.sc_layouts_menu:not(.inited):not(.sc_layouts_submenu_dropdown) > ul:not(.inited)');
        trx_addons_menu_collapse();
        jQuery('.sc_layouts_menu:not(.inited)').each(function() {
            if (jQuery(this).find('>ul.inited').length == 1) jQuery(this).addClass('inited');
        });
        jQuery('.menu_hover_slide_line:not(.slide_inited),.menu_hover_slide_box:not(.slide_inited)').each(function() {
            var menu = jQuery(this).addClass('slide_inited');
            var style = menu.hasClass('menu_hover_slide_line') ? 'line' : 'box';
            setTimeout(function() {
                if (jQuery.fn.spasticNav !== undefined) {
                    menu.find('>ul').spasticNav({
                        style: style,
                        colorOverride: false
                    });
                }
            }, 500);
        });
        jQuery('.sc_layouts_menu_mobile_button_burger:not(.inited)').each(function() {
            var burger = jQuery(this);
            var popup = burger.find('.sc_layouts_menu_popup');
            if (popup.length == 1) {
                burger.addClass('inited').on('click', '>a', function(e) {
                    popup.toggleClass('opened').slideToggle();
                    e.preventDefault();
                    return false;
                });
                popup.on('click', 'a', function(e) {
                    var $item = jQuery(this);
                    if ($item.next().hasClass('sub-menu')) {
                        $item.parent().siblings().find('>.sub-menu').fadeOut();
                        $item.next().fadeToggle();
                        e.preventDefault();
                        return false;
                    }
                });
                $document.on('click', function(e) {
                    jQuery('.sc_layouts_menu_popup.opened').removeClass('opened').slideUp();
                });
            }
        });
    });
    $document.on('action.resize_trx_addons', function() {
        trx_addons_menu_collapse();
    });

    function trx_addons_menu_collapse() {
        if (TRX_ADDONS_STORAGE['menu_collapse'] == 0) {
            return;
        }
        jQuery('.sc_layouts_menu:not(.sc_layouts_menu_no_collapse):not(.sc_layouts_menu_dir_vertical)').each(function() {
            var nav = jQuery(this);
            if (nav.parents('div:hidden,section:hidden,article:hidden').length > 0) {
                return;
            }
            var ul = nav.find('>ul:not(.sc_layouts_menu_no_collapse).inited');
            if (ul.length === 0) {
                return;
            }

            function check_menu_wrapper(item) {
                var allow_any_wrapper = trx_addons_apply_filters('trx_addons_filter_menu_collapse_allow_any_wrapper', true);
                var rez = allow_any_wrapper;
                if (!allow_any_wrapper) {
                    var wrappers_list = trx_addons_apply_filters('trx_addons_filter_menu_collapse_wrapper_classes', ['sc_layouts_column', 'wpb_wrapper', 'elementor-widget-wrap', 'e-con', 'e-con-inner', 'wp-block-column', 'kt-inside-inner-col']);
                    for (var i = 0; i < wrappers_list.length; i++) {
                        if (item.hasClass(wrappers_list[i])) {
                            rez = true;
                            break;
                        }
                    }
                }
                return rez;
            }

            function check_item_delimiter(item) {
                var delimiters_list = trx_addons_apply_filters('trx_addons_filter_menu_collapse_delimiter_classes', ['vc_empty_space', 'vc_separator', 'elementor-widget-spacer', 'elementor-widget-divider', 'wp-block-spacer', 'wp-block-separator', 'wp-block-kadence-spacer', 'wp-block-coblocks-shape-divider']);
                var rez = false;
                for (var i = 0; i < delimiters_list.length; i++) {
                    if (item.hasClass(delimiters_list[i])) {
                        rez = true;
                        break;
                    }
                }
                return rez;
            }
            var sc_layouts_item_wrapper = nav.parents('.sc_layouts_item').eq(0),
                sc_layouts_item = sc_layouts_item_wrapper.length > 0 ? sc_layouts_item_wrapper : nav,
                sc_layouts_item_parent = sc_layouts_item.parent();
            if (!check_menu_wrapper(sc_layouts_item_parent)) {
                return;
            }
            var w_max = sc_layouts_item_parent.width() - (Math.ceil(parseFloat(sc_layouts_item.css('marginLeft'))) + Math.ceil(parseFloat(sc_layouts_item.css('marginRight')))) - 2;
            var w_siblings = 0,
                in_group = 0,
                ul_id = ul.attr('id');
            sc_layouts_item_parent.find('>div' + (sc_layouts_item_parent.attr('class').indexOf('elementor-') >= 0 ? '.elementor-element' : '')).each(function() {
                if (in_group > 1) {
                    return;
                }
                var $self = jQuery(this);
                if (check_item_delimiter($self)) {
                    if (in_group == 1) {
                        in_group = 2;
                    } else {
                        w_siblings = 0;
                    }
                } else {
                    if ($self.find('#' + ul_id).length > 0) {
                        in_group = 1;
                    } else {
                        w_siblings += ($self.outerWidth() + Math.ceil(parseFloat($self.css('marginLeft'))) + Math.ceil(parseFloat($self.css('marginRight'))));
                    }
                }
            });
            w_max -= w_siblings;
            var w_all = 0;
            var move = false;
            var li_collapse = ul.find('li.menu-item.menu-collapse');
            if (li_collapse.length === 0) {
                ul.append('<li class="menu-item menu-collapse"><a href="#" class="sf-with-ul ' + TRX_ADDONS_STORAGE['menu_collapse_icon'] + '"></a><ul class="submenu"></ul></li>');
                li_collapse = ul.find('li.menu-item.menu-collapse');
            }
            var li_collapse_ul = li_collapse.find('> ul');
            ul.find('> li').each(function(idx) {
                var cur_item = jQuery(this);
                cur_item.data('index', idx);
                if (move || cur_item.attr('id') == 'blob') {
                    return;
                }
                w_all += !cur_item.hasClass('menu-collapse') || cur_item.css('display') != 'none' ? cur_item.outerWidth() + Math.ceil(parseFloat(cur_item.css('marginLeft'))) + Math.ceil(parseFloat(cur_item.css('marginRight'))) : 0;
                if (w_all > w_max) {
                    move = true;
                }
            });
            if (move) {
                w_all = li_collapse.outerWidth() + Math.ceil(parseFloat(li_collapse.css('marginLeft'))) + Math.ceil(parseFloat(li_collapse.css('marginRight')));
                ul.find("> li:not('.menu-collapse')").each(function(idx) {
                    var cur_item = jQuery(this);
                    var cur_width = cur_item.outerWidth() + Math.ceil(parseFloat(cur_item.css('marginLeft'))) + Math.ceil(parseFloat(cur_item.css('marginRight')));
                    if (w_all <= w_max) {
                        w_all += cur_width;
                    }
                    if (w_all > w_max) {
                        var moved = false;
                        li_collapse_ul.find('>li').each(function() {
                            if (!moved && Number(jQuery(this).data('index')) > idx) {
                                cur_item.attr('data-width', cur_width).insertBefore(jQuery(this));
                                moved = true;
                            }
                        });
                        if (!moved) {
                            cur_item.attr('data-width', cur_width).appendTo(li_collapse_ul);
                        }
                    }
                });
                li_collapse.show();
            } else {
                var items = li_collapse_ul.find('>li');
                var cnt = 0;
                move = true;
                items.each(function() {
                    if (!move) {
                        return;
                    }
                    if (items.length - cnt == 1) {
                        w_all -= (li_collapse.outerWidth() + Math.ceil(parseFloat(li_collapse.css('marginLeft'))) + Math.ceil(parseFloat(li_collapse.css('marginRight'))));
                    }
                    w_all += parseFloat(jQuery(this).data('width'));
                    if (w_all < w_max) {
                        jQuery(this).insertBefore(li_collapse);
                        cnt++;
                    } else {
                        move = false;
                    }
                });
                if (items.length - cnt === 0) {
                    li_collapse.hide();
                }
            }
        });
    }
})();
(function($) {
    "use strict";
    $.fn.spasticNav = function(options) {
        options = $.extend({
            overlap: 0,
            style: 'box',
            reset: 50,
            color: '#00c6ff',
            colorOverride: true,
        }, options);
        return this.each(function() {
            var nav = $(this),
                currentPageItem = nav.find('>.current-menu-item,>.current-menu-parent,>.current-menu-ancestor'),
                hidden = false,
                blob, reset;
            if (currentPageItem.length === 0) {
                currentPageItem = nav.find('li').eq(0);
                hidden = true;
            }
            var a = currentPageItem.find('>a');
            var pl = parseInt(a.css('paddingLeft'), 10);
            if (isNaN(pl)) pl = 0;
            $('<li id="blob"></li>').css({
                width: options.style == 'box' ? a.outerWidth() : a.width(),
                left: currentPageItem.position().left + (options.style == 'box' ? 0 : pl),
                top: currentPageItem.position().top - options.overlap / 2,
                opacity: hidden ? 0 : 1
            }).appendTo(this);
            blob = $('#blob', nav);
            if (options.style == 'box') {
                blob.css({
                    height: currentPageItem.outerHeight() + options.overlap
                });
            }
            if (options.colorOverride) {
                var bg = a.css('backgroundColor');
                blob.css({
                    backgroundColor: hidden || bg == 'transparent' ? options.color : bg
                });
            }
            nav.find('>li:not(#blob)').on('mouseenter', function() {
                clearTimeout(reset);
                var a = $(this).find('>a');
                var pl = parseInt(a.css('paddingLeft'), 10);
                if (isNaN(pl)) pl = 0;
                if (options.colorOverride) {
                    var bg = a.css('backgroundColor');
                    if (bg != 'transparent') blob.css({
                        backgroundColor: bg
                    });
                }
                $(this).addClass('blob_over');
                blob.css({
                    left: $(this).position().left + (options.style == 'box' ? 0 : pl),
                    top: $(this).position().top - options.overlap / 2,
                    width: options.style == 'box' ? a.outerWidth() : a.width(),
                    opacity: $(this).hasClass('menu-collapse') ? 0 : 1
                });
            }).on('mouseleave', function() {
                reset = setTimeout(function() {
                    var a = currentPageItem.find('>a');
                    var pl = parseInt(a.css('paddingLeft'), 10);
                    if (isNaN(pl)) pl = 0;
                    if (options.colorOverride) {
                        var bg = a.css('backgroundColor');
                        if (bg != 'transparent') blob.css({
                            backgroundColor: bg
                        });
                    }
                    blob.css({
                        width: options.style == 'box' ? a.outerWidth() : a.width(),
                        left: currentPageItem.position().left + (options.style == 'box' ? 0 : pl),
                        opacity: hidden ? 0 : 1,
                    });
                }, options.reset);
                $(this).removeClass('blob_over');
            });
        });
    };
})(jQuery);
jQuery(document).on('action.ready_trx_addons', function() {
    "use strict";
    if (jQuery('.search_wrap:not(.inited)').length > 0) {
        jQuery('.search_wrap:not(.inited)').each(function() {
            var search_wrap = jQuery(this).addClass('inited'),
                search_field = search_wrap.find('.search_field'),
                search_button = search_wrap.find('.search_submit');
            var ajax_timer = null;
            search_field.on('keyup', function(e) {
                if (e.keyCode == 27) {
                    search_field.val('');
                    trx_addons_search_close(search_wrap);
                    e.preventDefault();
                    return;
                }
                if (search_wrap.hasClass('search_ajax')) {
                    var s = search_field.val();
                    if (ajax_timer) {
                        clearTimeout(ajax_timer);
                        ajax_timer = null;
                    }
                    if (s.length >= 4) {
                        ajax_timer = setTimeout(function() {
                            search_wrap.addClass('search_progress');
                            jQuery.post(TRX_ADDONS_STORAGE['ajax_url'], {
                                action: 'ajax_search',
                                nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
                                text: s,
                                post_types: search_wrap.find('input[name="post_types"]').val()
                            }).done(function(response) {
                                clearTimeout(ajax_timer);
                                ajax_timer = null;
                                var rez = {};
                                if (response == '' || response == 0) {
                                    rez = {
                                        error: TRX_ADDONS_STORAGE['msg_search_error']
                                    };
                                } else {
                                    try {
                                        rez = JSON.parse(response);
                                    } catch (e) {
                                        rez = {
                                            error: TRX_ADDONS_STORAGE['msg_search_error']
                                        };
                                        console.log(response);
                                    }
                                }
                                var msg = rez.error === '' ? rez.data : rez.error;
                                search_wrap.removeClass('search_progress');
                                search_field.parents('.search_ajax').find('.search_results_content').empty().append(msg);
                                search_field.parents('.search_ajax').find('.search_results').fadeIn();
                                jQuery(document).trigger('action.got_ajax_response', {
                                    action: 'ajax_search',
                                    result: rez
                                });
                            });
                        }, 500);
                    }
                }
            });
            search_wrap.find('.search_submit').on('click', function(e) {
                e.preventDefault();
                if ((search_wrap.hasClass('search_style_expand') || search_wrap.hasClass('search_style_fullscreen')) && !search_wrap.hasClass('search_opened')) {
                    var duration = trx_addons_apply_filters('trx_addons_filter_search_fullscreen_fade_duration', 0);
                    if (search_wrap.hasClass('search_style_fullscreen')) {
                        jQuery('body').addClass('sc_layouts_search_opened');
                        search_wrap.hide().addClass('search_opened').fadeIn(duration);
                    } else {
                        search_wrap.addClass('search_opened');
                    }
                    setTimeout(function() {
                        search_field.get(0).focus();
                    }, duration + 200);
                } else if (search_field.val() === '') {
                    if (search_wrap.hasClass('search_opened') && search_wrap.hasClass('search_style_expand')) {
                        trx_addons_search_close(search_wrap);
                    } else {
                        search_field.get(0).focus();
                    }
                } else {
                    search_wrap.find('form').get(0).submit();
                }
                return false;
            });
            search_wrap.find('.search_close').on('click', function(e) {
                e.preventDefault();
                trx_addons_search_close(search_wrap);
                return false;
            });
            search_wrap.find('.search_results_close').on('click', function(e) {
                e.preventDefault();
                jQuery(this).parent().fadeOut();
                return false;
            });
            search_wrap.on('click', '.search_more', function(e) {
                e.preventDefault();
                if (search_field.val() !== '') {
                    search_wrap.find('form').get(0).submit();
                }
                return false;
            });
        });
    }

    function trx_addons_search_close(search_wrap) {
        var duration = trx_addons_apply_filters('trx_addons_filter_search_fullscreen_fade_duration', 0);
        search_wrap.find('.search_field').get(0).blur();
        if (search_wrap.hasClass('search_style_fullscreen')) {
            jQuery('body').removeClass('sc_layouts_search_opened');
            search_wrap.find('.search_results').fadeOut(duration);
            search_wrap.fadeTo(duration / 3 * 2, 0.33, function() {
                search_wrap.removeClass('search_opened').removeAttr('style').show();
            });
        } else {
            search_wrap.removeClass('search_opened').find('.search_results').fadeOut();
        }
    }
});
jQuery(document).ready(function() {
    "use strict";
    var $window = jQuery(window),
        $document = jQuery(document);
    var $reviews;
    $document.on('action.init_hidden_elements', update_jquery_links);
    $document.on('action.got_ajax_response', update_jquery_links);
    var first_run = true;

    function update_jquery_links(e) {
        if (first_run && e && e.namespace == 'init_hidden_elements') {
            first_run = false;
            return;
        }
        $reviews = jQuery('.trx_addons_reviews_block_mark:not(.inited)' + ',.trx_addons_reviews_stars:not([data-mark-max]):not(.inited)' + ',.trx_addons_reviews_block_detailed .trx_addons_reviews_block_criterias[data-mark-max="10"] .trx_addons_reviews_block_list_mark_line_hover:not(.inited)' + ',.trx_addons_reviews_block_detailed .trx_addons_reviews_block_criterias[data-mark-max="100"] .trx_addons_reviews_block_list_mark_line_hover:not(.inited)');
    }
    update_jquery_links();
    var votes_wrap = jQuery(".trx_addons_reviews_stars[data-mark-max]");
    if (votes_wrap.length > 0) {
        votes_wrap.on('mousemove', function(e) {
            var mark_wrap = jQuery(this),
                mark_max = mark_wrap.data('mark-max'),
                mark_decimals = mark_wrap.data('mark-decimals'),
                w = mark_wrap.width(),
                x = Math.min(w, Math.max(0, Math.round(e.pageX - mark_wrap.offset().left))) + 1;
            if (x <= w) {
                var pos = Math.round(x / w * 100),
                    mark_show = trx_addons_reviews_mark2show(pos, mark_max, mark_decimals);
                pos = trx_addons_reviews_mark2save(mark_show, mark_max, mark_decimals);
                mark_wrap.data("mark", pos).find(".trx_addons_reviews_bubble").fadeIn().css({
                    "left": pos + "%"
                }).find('.trx_addons_reviews_bubble_value').text(mark_show);
                mark_wrap.find(".trx_addons_reviews_stars_hover").css({
                    "width": pos + "%"
                });
            }
        }).on('mouseleave', function(e) {
            var mark_wrap = jQuery(this),
                pos = Math.max(0, Number(mark_wrap.find('input[name="trx_addons_reviews_vote"]').val()));
            mark_wrap.find(".trx_addons_reviews_bubble").fadeOut();
            mark_wrap.find(".trx_addons_reviews_stars_hover").css({
                "width": pos + "%"
            });
        }).on('click', function(e) {
            var mark_wrap = jQuery(this);
            mark_wrap.find('input[name="trx_addons_reviews_vote"]').val(mark_wrap.data("mark"));
            mark_wrap.next('.trx_addons_reviews_text').find('.trx_addons_reviews_text_mark').text(mark_wrap.find('.trx_addons_reviews_bubble_value').text());
        });
    }

    function trx_addons_reviews_mark2show(mark, mark_max, mark_decimals) {
        if (mark_max < 100) {
            mark = mark_decimals > 0 ? Math.round(mark / 100 * mark_max * 10) / 10 : Math.ceil(mark / 100 * mark_max);
            if (mark_decimals > 0 && String(mark).indexOf(".") < 0) {
                mark += ".0";
            }
        } else {
            mark = Math.round(mark);
        }
        return mark;
    }

    function trx_addons_reviews_mark2save(mark, mark_max) {
        if (mark_max < 100) {
            mark = Math.round(mark * 100 / mark_max);
        } else {
            mark = Math.round(mark);
        }
        return mark;
    }
    $document.on('action.init_hidden_elements', trx_addons_reviews_block_mark_init).on('action.scroll_trx_addons', trx_addons_reviews_block_mark_init).on('action.resize_trx_addons', trx_addons_reviews_block_mark_resize);

    function trx_addons_reviews_block_mark_init(e, container) {
        if ($reviews.length === 0) return;
        var scrollPosition = $window.scrollTop() + $window.height();
        $reviews.each(function(idx) {
            var item = $reviews.eq(idx);
            if (item.hasClass('inited') || item.parents('div:hidden,article:hidden').length > 0) {
                return;
            }
            var scrollMark = item.offset().top;
            if (scrollPosition - 50 > scrollMark) {
                item.addClass('inited');
                if (item.hasClass('trx_addons_reviews_block_mark')) {
                    var canvas = item.find('canvas').eq(0),
                        mark = parseFloat(canvas.data('value')),
                        max = parseInt(canvas.data('max-value'), 10),
                        decimals = parseInt(canvas.data('decimals'), 10),
                        digits = item.find('.trx_addons_reviews_block_mark_value');
                    item.find('.trx_addons_reviews_block_mark_progress').animate({
                        'width': trx_addons_reviews_mark2save(mark, max, decimals) + '%'
                    }, {
                        duration: 2000,
                        easing: 'linear',
                        step: function(now, fx) {
                            var m = trx_addons_reviews_mark2show(now, max, decimals);
                            digits.text(m);
                            trx_addons_draw_arc_on_canvas(item, m);
                        }
                    });
                }
            }
        });
    }

    function trx_addons_reviews_block_mark_resize(e) {
        jQuery('.trx_addons_reviews_block_mark.inited canvas').each(function() {
            var canvas = jQuery(this);
            if (canvas.parents('div:hidden,article:hidden').length > 0) {
                return;
            }
            var item = canvas.parent();
            if (item.width() != canvas.width()) {
                trx_addons_draw_arc_on_canvas(item, parseFloat(canvas.data('value')));
            }
        });
    }
});