#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { fsExistsSync, fsWriteFileSync, printHelp } = require('./util');

const DB_PATH = path.join(__dirname, 'db');
const argv = process.argv;
const verb = argv[2];
const content = argv[3];
const content1 = argv[4]

let list = [];
if (fsExistsSync(DB_PATH)) {
  list = JSON.parse(fs.readFileSync(DB_PATH) || []) || [];
} else {
  fsWriteFileSync(DB_PATH, '[]');
}

switch (verb) {
  case 'list':      // 查询列表
    break;
  case 'add':       // 新增任务
    list.push({ content, status: 'wait...' });
    break;
  case 'delete':    // 删除任务
    list.splice(content, 1);
    break;
  case 'edit':      // 编辑任务
    list[content].content = content1;
    break;
  case 'done':      // 完成任务
    list[content].status = 'done';
    break;
  case 'done-all':  // 完成所有任务
    list.map(item => {
      item.status = 'done'
    })
    break;
  case 'clear':     // 清空所有任务
    list = [];
    break;
  case 'help':      // 帮助
    printHelp();
    break;
  default:
    console.error('不知道你要干啥，使用 todo help 看看吧')
    break;
}
if (verb !== 'list') {
  fsWriteFileSync(DB_PATH, JSON.stringify(list))
}
if (verb !== 'help') {
  console.info('------------  todo list  ------------');
  console.table(list)
}