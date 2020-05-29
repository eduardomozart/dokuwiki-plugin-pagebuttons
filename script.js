/**
 * Page Buttons plugin script
 * 
 * @copyright (c) 2020 Cody Ernesti
 * @license GPLv2 or later (https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)
 * @author  Cody Ernesti
 *
 *  Modified from: https://github.com/dregad/dokuwiki-plugin-deletepagebutton
 *
 *   Original license info:
 *
 * @copyright (c) 2020 Damien Regad
 * @license GPLv2 or later (https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)
 * @author  Damien Regad
 */
jQuery(function() {
    console.log(JSINFO['id']);
    console.log(JSINFO['namespace']);
    jQuery('.deletepagebutton a').click(function(d) {
        d.preventDefault();

        var submit_url = this.href;
        console.log(submit_url);
        var $dialog = jQuery(
            '<div><span>'
            + LANG.plugins.pagebuttons.delete_confirm
            + '</span></div>'
        );
        $dialog.dialog({
            title: LANG.plugins.pagebuttons.delete_title,
            resizable: true,
            width: "auto",
            height: "auto",
            modal: true,
            buttons: [
                {
                    text: LANG.plugins.pagebuttons.btn_ok,
                    click: function () {
                        $dialog.dialog("close");
                        console.log(submit_url);
                        window.location.href = submit_url
                    }
                },
                {
                    text: LANG.plugins.pagebuttons.btn_cancel,
                    click: function () {
                        $dialog.dialog("close");
                    }
                }
            ],
            close: function () {
                // remove the dialog's HTML
                jQuery(this).remove();
                // Due to the preventDefault() call, the "Delete page" span
                // remains active when the dialog is closed, so we need to
                // manually remove focus from it.
                document.activeElement.blur();
            }
        });
    });

    jQuery('.newfolderbutton a').click(function(f) {
        f.preventDefault();

        var pre_url = window.location.href.substring(0, window.location.href.indexOf(JSINFO['id'])) + JSINFO['id'].replace(":start","");
        
        console.log(pre_url);
        var $dialog = jQuery(
            '<div><span>'
            + LANG.plugins.pagebuttons.newfolder_prompt
            + '<br /><input type="text" style="z-index:10000" name="new_folder_name"><br />'
            + '</span></div>'
        );
        $dialog.dialog({
            title: LANG.plugins.pagebuttons.newfolder_title,
            resizable: true,
            width: "auto",
            height: "auto",
            modal: true,
            buttons: [
                {
                    text: LANG.plugins.pagebuttons.btn_ok,
                    click: function () {
                        var folder = document.getElementsByName("new_folder_name")[0].value;
                        $dialog.dialog("close");
                        var submit_url = pre_url + ":" + folder + ":start&do=edit";
                        console.log(submit_url);
                        window.location.href = submit_url
                    }
                },
                {
                    text: LANG.plugins.pagebuttons.btn_cancel,
                    click: function () {
                        $dialog.dialog("close");
                    }
                }
            ],
            close: function () {
                // remove the dialog's HTML
                jQuery(this).remove();
                // Due to the preventDefault() call, the "Delete page" span
                // remains active when the dialog is closed, so we need to
                // manually remove focus from it.
                document.activeElement.blur();
            }
        });
    });

    jQuery('.newpagebutton a').click(function(p) {
        p.preventDefault();
        
        var pre_url = window.location.href.substring(0, window.location.href.indexOf(JSINFO['id'])) + JSINFO['id'].replace(":start","");
        var $dialog = jQuery(
            '<div><span>'
            + LANG.plugins.pagebuttons.newpage_prompt
            + '<br /><input type="text" style="z-index:10000" name="new_page_name"><br />'
            + '</span></div>'
        );
        $dialog.dialog({
            title: LANG.plugins.pagebuttons.newpage_title,
            resizable: true,
            width: "auto",
            height: "auto",
            modal: true,
            buttons: [
                {
                    text: LANG.plugins.pagebuttons.btn_ok,
                    click: function () {
                        var newpage = document.getElementsByName("new_page_name")[0].value;
                        $dialog.dialog("close");
                        var submit_url = pre_url + ":" + newpage + "&do=edit";
                        console.log(submit_url);
                        window.location.href = submit_url
                    }
                },
                {
                    text: LANG.plugins.pagebuttons.btn_cancel,
                    click: function () {
                        $dialog.dialog("close");
                    }
                }
            ],
            close: function () {
                // remove the dialog's HTML
                jQuery(this).remove();
                // Due to the preventDefault() call, the "Delete page" span
                // remains active when the dialog is closed, so we need to
                // manually remove focus from it.
                document.activeElement.blur();
            }
        });
    });
});
