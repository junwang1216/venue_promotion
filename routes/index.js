var express = require('express');

var CMS = require("./cms");

// 路由
var router = express.Router();

// 内容管理系统
router.get('/cms/example', CMS.renderCMSExample);
router.get('/cms/CMSVideoProduct', CMS.renderCMSVideoProduct);

//对外接口
exports.root = router;
