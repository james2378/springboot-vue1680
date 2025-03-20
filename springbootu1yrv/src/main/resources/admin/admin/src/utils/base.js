const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootu1yrv/",
            name: "springbootu1yrv",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootu1yrv/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "智慧养老中心管理系统"
        } 
    }
}
export default base
