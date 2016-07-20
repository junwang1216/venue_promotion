var CMS_Controller = function () {};

CMS_Controller.prototype = {};

// 首页面板页面
CMS_Controller.renderCMSExample = function (req, res) {
    res.render('cms/cms_example');
};

CMS_Controller.renderCMSVideoProduct = function (req, res) {
    res.render('cms/cms_video_product_window');
};

module.exports = CMS_Controller;
