import * as download from 'download-git-repo'
import * as handlebars from 'handlebars'
import {
    chalk,
    fs,
    succeedSpiner,
    failSpinner,
} from '../lib'
import * as inquirer from 'inquirer'
import logSymbols from 'log-symbols';
// https://github.com/zxyue25/vue-demo-cli-templateA.git
const downloadTemplate = (projectName: string) => {

    download("https://github.com:zxyue25/vue-demo-cli-templateA#master", projectName, { clone: true }, err => {
        if (err) {
            failSpinner();
            return
        }
        succeedSpiner()
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: '请输入项目名称'
            },
            {
                type: 'input',
                name: 'description',
                message: '请输入项目简介'
            },
            {
                type: 'input',
                name: 'author',
                message: '请输入作者姓名'
            },
        ]).then((answers) => {
            const packagePath = `${projectName}/package.json`
            const packageContent = fs.readFileSync(packagePath, 'utf-8')
            //使用handlebars解析模板引擎
            const packageResult = handlebars.compile(packageContent)(answers)
            //将解析后的结果重写到package.json文件中
            fs.writeFileSync(packagePath, packageResult)
            console.log(logSymbols.success, chalk.yellow('初始化模板成功'))
        })
    })

}

