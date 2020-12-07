const fs = require('fs');

/**
 * 判断文件是否存在
 * @param {*} DB_PATH 文件路径
 */
const fsExistsSync = (DB_PATH) => {
  try {
    const stats = fs.statSync(DB_PATH);
  } catch (error) {
    return false
  }
  return true
}

/**
 * 往文件中写入内容
 * @param {*} DB_PATH 文件路径
 * @param {*} data 内容：必须是String
 */
const fsWriteFileSync = (DB_PATH, data) => {
  fs.writeFileSync(DB_PATH, data);
}

const printHelp = () => {
  console.log('Usage: todo <command>');
  console.log('')
  console.log(`where <command> is one of:`);
  console.log('    list, add, delete, edit, done, done-all, clear, help');
  console.log('')
  console.log('todo list                   展示todo列表')
  console.log('todo add content            添加todo项')
  console.log('todo delete <index>         根据index删除todo项')
  console.log('todo edit <index> content   根据index编辑todo项')
  console.log('todo done <index>           根据index修改todo项状态为完成状态')
  console.log('todo done-all <index>       修改所有项为完成状态')
  console.log('todo clear <index>          清空todo列表')
}

module.exports = {
  fsExistsSync,
  fsWriteFileSync,
  printHelp
}