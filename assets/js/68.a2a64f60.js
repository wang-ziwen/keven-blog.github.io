(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1014:function(s,e,t){"use strict";t.r(e);var a=t(13),r=Object(a.a)({},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"安装docker流程-root用户权限操作"}},[s._v("安装docker流程 "),t("code",[s._v("root用户权限操作")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新yum包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此过程可能比较慢,需耐心等待")]),s._v("\nroot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" yum update\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装必要的工具包")]),s._v("\nroot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils device-mapper-persistent-data lvm2\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加包源")]),s._v("\nroot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查是否有docker安装包源")]),s._v("\nroot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" yum list docker-ce --showduplicates "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -r\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开始安装, 根据提示的版本号, 可以自行修改下面的版本号")]),s._v("\nroot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce-18.06.3.ce\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h3",{attrs:{id:"如何启动系统docker服务"}},[s._v("如何启动系统docker服务")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("root "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" systemctl start docker\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root > systemctl enable docker")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"常用的docker命令"}},[s._v("常用的docker命令")]),s._v(" "),t("h5",{attrs:{id:"版本"}},[s._v("版本")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("docker --version")]),s._v(" 查看版本")])]),s._v(" "),t("h5",{attrs:{id:"容器相关"}},[s._v("容器相关")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("docker ps -a")]),s._v(" 查看所有容器的状态")]),s._v(" "),t("li",[t("code",[s._v("docker start/stop id/name")]),s._v(" 启动/停止某个容器")]),s._v(" "),t("li",[t("code",[s._v("docker rm id/name")]),s._v(" 删除某个容器")]),s._v(" "),t("li",[t("code",[s._v("docker exec -ti id")]),s._v(" docker exec -ti id 启动一个伪终端以交互式的方式进入某个容器（使用exit退出后容器不停止运行）")]),s._v(" "),t("li",[t("code",[s._v("docker attach id")]),s._v(" 进入某个容器(使用exit退出后容器也跟着停止运行)")])]),s._v(" "),t("h5",{attrs:{id:"镜像相关"}},[s._v("镜像相关")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("docker images")]),s._v(" 查看本地镜像列表")]),s._v(" "),t("li",[t("code",[s._v("docker rmi id/name")]),s._v(" 删除某个镜像")])]),s._v(" "),t("h5",{attrs:{id:"命令应用场景示例"}},[s._v("命令应用场景示例")]),s._v(" "),t("p",[t("code",[s._v("> docker run --name test -ti ubuntu /bin/bash 复制ubuntu容器并且重命名为test且运行，然后以伪终端交互式方式进入容器，运行bash")])]),s._v(" "),t("p",[t("code",[s._v("> docker build -t soar/centos:7.1 . 通过当前目录下的Dockerfile创建一个名为soar/centos:7.1的镜像")])]),s._v(" "),t("p",[t("code",[s._v("> docker run -d -p 2222:22 --name test soar/centos:7.1 以镜像soar/centos:7.1创建名为test的容器，并以后台模式运行，并做端口映射到宿主机2222端口，P参数重启容器宿主机端口会发生改变")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code")]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"})])])},[],!1,null,null,null);e.default=r.exports}}]);