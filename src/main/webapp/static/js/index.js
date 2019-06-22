var index_layout;
var index_tabs;
var layout_west_tree;

$(function () {
    index_layout = $('#index_layout').layout({
        fit: true
    });
    index_tabs = $('#index_tabs').tabs(
        {
            fit: true,
            border: false
            /*tools: [
                {
                    iconCls: 'icon-home',
                    handler: function () {
                        index_tabs.tabs('select', 0);
                    }
                },
                {
                    iconCls: 'icon-del',
                    handler: function () {
                        var index = index_tabs.tabs('getTabIndex',
                            index_tabs.tabs('getSelected'));
                        var tab = index_tabs.tabs('getTab', index);
                        if (tab.panel('options').closable) {
                            index_tabs.tabs('close', index);
                        }
                    }
                }]*/
        });

    generateNav();
    
});
$(window).load(function(){
	
	setTimeout(function(){
//		$("#nav .panel-header").eq(0).click();
		addTab('个人审批效率','/personalApprove/manager','icon-folder');
	},100);
	
});

function addTab(title, href, icon) {
    var tt = $('#index_tabs');
    icon = icon || 'menu_icon_service';
    if (tt.tabs('exists', title)) {
        tt.tabs('select', title);
        var currTab = tt.tabs('getTab', title);
        tt.tabs('update', {
            tab: currTab,
            options: {
                content: content,
                closable: true
            }
        });
    } else {
        if (href) {
            var content = '<iframe frameborder="0" src="' + href
                + '" style="border:0;width:100%;height:97%;overflow: hidden;"></iframe>';
        } else {
            var content = '未实现';
        }
        tt.tabs('add', {
            title: title,
            content: content,
            closable: true,
            iconCls: icon
        });
    }
}

function editUserPwd() {
    parent.$.modalDialog({
        title: '修改密码',
        width: 300,
        height: 180,
        href: '/user/editPwdPage',
        buttons: [{
            text: '确定',
            handler: function () {
                var f = parent.$.modalDialog.handler.find('#editUserPwdForm');
                f.submit();
            }
        }]
    });
}