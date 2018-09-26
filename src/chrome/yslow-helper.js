document.onclick = function (event) {
    var target = event.target;
    var id = target.id;

    console.log(target);

    switch (id) {
        case "runtest-btn":
            document.ysview.runTest();
            return;

        case "chk-autorun":
            document.ysview.setAutorun(target.checked);
            return;

        case "chk-frame":
            document.ysview.setAntiIframe(target.checked);
            return;

        case "all":
        case "content":
        case "cookie":
        case "css":
        case "images":
        case "javascript":
        case "server":
            document.ysview.updateFilterSelection(event);
            return;

        case "setSplashView":
        case "showPerformance":
        case "showComponents":
        case "showStats":
        case "showTools":
            document.ysview.onclickToolbarMenu(event);
            document["ysview"][id]();
            return;

        case "showRuleSettings":
            event.preventDefault();
            document.ysview.showRuleSettings();
            return;

        case "closeDialog":
        case "okDialog":
            document.ysview.closeDialog(document);
            return;

        case "showHideHelp":
            document.ysview.showHideHelp();
            return;

        case "openPrintableDialog":
            document.ysview.openPrintableDialog(document);
            return;

        case "showComponentHeaders":
            event.preventDefault();
            document.ysview.showComponentHeaders(target.dataset.link);
            return;

        case "showsmushIt":
            event.preventDefault();
            document.ysview.smushIt(document, target.dataset.link);
            return;

        case "checkAllRules":
            event.preventDefault();
            document.ysview.checkAllRules(document, 'edit-form', true);
            return;

        case "uncheckAll":
            event.preventDefault();
            document.ysview.checkAllRules(document, 'edit-form', false);
            return;

        case "saveRuleset":
            event.preventDefault();
            document.ysview.openSaveAsDialog(document, 'edit-form');
            return;

        case "deleteRuleset":
            event.preventDefault();
            document.ysview.deleteRuleset(document, 'edit-form');
            return;

        case "expand-all-href":
            event.preventDefault();
            document.ysview.expandAll(document);
            return;

        case "btn-new-set":
            event.preventDefault();
            document.ysview.createRuleset(target, 'edit-form');
            return;
    }

    if (RegExp('aResults[0-9]+').test(id)) {
        event.preventDefault();
        document.ysview.openLink(target.dataset.reslink);
        return;
    }

    if (RegExp('label[0-9]+').test(id)) {
        document.ysview.onclickResult(event);
        return;
    }

    if (RegExp('xlabel[0-9]+').test(id)) {
        document.ysview.onclickRuleset(event);
        return;
    }

    if (RegExp('add-cdn[0-9]+').test(id)) {
        document.ysview.addCDN(target.dataset.offender);
        return;
    }

    if (RegExp('ysctxt[0-9]+').test(id)) {
        document.ysview.runTool(target.dataset.toolid, {'yscontext': document.yslowContext});
        return;
    }
    
    if (RegExp('regenComponentsTable.+').test(id)) {
        document.ysview.regenComponentsTable(document, target.dataset.f, target.dataset.sort);
        return;
    }
    
    if (RegExp('componentType[0-9]+').test(id)) {
        document.ysview.expandCollapseComponentType(document, target.dataset.typex);
        return;
    }

};

document.onchange = function (event) {
    var target = event.target;
    var id = target.id;

    console.log(target);

    switch (id) {
        case "onChangeRuleset":
            document.ysview.onChangeRuleset(event);
            return;

    }

};

document.onsubmit = function (event) {
    var target = event.target;
    var id = target.id;

    console.log(target);

    switch (id) {
        case "edit-form":
            event.preventDefault();
            document.ysview.saveRuleset(document, 'edit-form');
            return;
    }

};


//>>>> Array of some things
// var facebook=document.getElementById('facebook');
// if (facebook){
//     facebook.onclick=function () {};
// }
// document.getElementById('facebook').$("#clickable a").click(function(e) {
//    e.stopPropagation();
// }); = document.ysview.openPopup("http://www.facebook.com/sharer.php?t=YSlow%20Scoremeter&u=" + link + ", 'facebook'");
// document.getElementById('twitter').onclick = document.ysview.openPopup("http://twitter.com/share?original_referer=&source=tweetbutton&text=YSlow%20grade%20" + grade + "%20for%20" + url + "&url=" + link + "&via=yslow', 'twitter'"); //??

