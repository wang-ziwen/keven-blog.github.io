(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1012:function(s,t,e){"use strict";e.r(t);var a=e(13),n=Object(a.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("blockquote",[e("p",[s._v("CentOS7使用docker部署apache服务")])]),s._v(" "),e("h2",{attrs:{id:"环境"}},[s._v("环境")]),s._v(" "),e("ul",[e("li",[s._v("服务器系统: "),e("code",[s._v("CentOS 7.4")])])]),s._v(" "),e("hr"),s._v(" "),e("h2",{attrs:{id:"过程"}},[s._v("过程")]),s._v(" "),e("p",[s._v("前提是系统已经安装了docker服务。需要使用"),e("code",[s._v("root")]),s._v("权限。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("root "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docker run -dit --name g4-web -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v(":80 -v /home/visible/website/g4web:/usr/local/apache2/htdocs/ httpd:2.4\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("以上命令表示:")]),s._v(" "),e("ol",[e("li",[e("code",[s._v("--name g4-web")]),s._v(" 定义容器名称")]),s._v(" "),e("li",[e("code",[s._v("-p 8081:80")]),s._v(" 表示将宿主机(就是正在操作的CentOS7系统主机)端口"),e("code",[s._v("8081")]),s._v(","),e("code",[s._v("映射")]),s._v("到启动的镜像容器中默认的"),e("code",[s._v("80")]),s._v("端口上。这样, 我们就可以访问本机的8081端口,相当于直接访问apache的httpd服务了。")]),s._v(" "),e("li",[e("code",[s._v("-v /home/visible/website/g4web:/usr/local/apache2/htdocs/")]),s._v(" 表示将本机目录映射到容器中目录. 本机目录示例为: "),e("code",[s._v("/home/visible/website/g4web")])]),s._v(" "),e("li",[e("code",[s._v("httpd:2.4")]),s._v(" 表示使用"),e("code",[s._v("httpd:2.4")]),s._v("的镜像.")])]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("接下来需要处理一些系统权限, 不然可能会出现一些访问失败的问题:")]),s._v(" "),e("ol",[e("li",[s._v("防火墙")])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("可以关闭所有防火墙: "),e("code",[s._v("systemctl stop firewalld")])])]),s._v(" "),e("li",[e("p",[s._v("也可以开放某端口:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("root "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" systemctl start firewalld\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开放8081端口")]),s._v("\nroot "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" firewall-cmd --zone"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v("/tcp --permanent\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启防火墙以使配置即时生效")]),s._v("\nroot "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" systemctl restart firewalld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[s._v("关闭selinux:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 临时关闭：")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Apache ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# setenforce 0")]),s._v("\nroot "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" setenforce: SELinux is disabled\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 永久关闭：")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Apache ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/selinux/config")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将enforcing改为disabled")]),s._v("\nroot "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SELINUX")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("disabled                 \n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Apache ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# reboot   --重启系统永久生效")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("修改宿主机映射网站目录的权限")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("root "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /home/visible/website/g4web\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"使用docker启动的apache服务-如何编辑和配置httpd-conf"}},[s._v("使用docker启动的Apache服务,如何编辑和配置"),e("code",[s._v("httpd.conf")])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("从容器里面拷贝文件 httpd.conf 到宿主机上:\n"),e("code",[s._v("docker cp apache-web:/usr/local/apache2/conf/httpd.conf ./")])])]),s._v(" "),e("li",[e("p",[s._v("编辑完httpd.conf,再从宿主机copy到容器内:\n"),e("code",[s._v("docker cp ./httpd.conf apache-web:/usr/local/apache2/conf")])])])]),s._v(" "),e("hr"),s._v(" "),e("h2",{attrs:{id:"解决vue前端导出的网站-访问出现404错误的问题"}},[s._v("解决Vue前端导出的网站,访问出现404错误的问题:")]),s._v(" "),e("p",[s._v("前端如果是Vue打包后的文件,放入服务器目录, 可能会出现404访问错误的问题。解决这个问题可以通过两个途径, 一个是前端修改Vue工程中route设置的"),e("code",[s._v("History模式")]),s._v("来解决。另一个是下面所说的通过在服务器中进行一些配置来处理。")]),s._v(" "),e("ol",[e("li",[s._v("修改httpd.conf文件,开启rewrite_module功能。")]),s._v(" "),e("li",[s._v("继续修改httpd.conf文件,然后找到 "),e("code",[s._v("AllowOverride None")]),s._v("的那行，把它改成"),e("code",[s._v("AllowOverride All")]),s._v(",来使.htaccess文件生效。")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# httpd.conf文件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 找到下面这句,去掉前面的#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" LoadModule rewrite_module libexec/apache2/mod_rewrite.so\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 找到`AllowOverride None`的那行,修改为 `AllowOverride All`")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("在映射网站目录(上面的例子指的是"),e("code",[s._v("/home/visible/website/g4web")]),s._v(")下新建"),e("code",[s._v(".htaccess")]),s._v("文件, 按照下面配置。")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("root "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/visible/website/g4web\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建文件")]),s._v("\nroot "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" .htaccess\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用vim编辑")]),s._v("\nroot "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" .htaccess\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("div",{staticClass:"language-xml line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[s._v("# centos \n# 网站目录: /home/visible/website/g4web\n# .htaccess文件\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("IfModule")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mod_rewrite.c")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\nRewriteEngine On\nRewriteBase /\nRewriteRule ^index\\.html$ - [L]\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteCond %{REQUEST_FILENAME} !-d\nRewriteRule . /index.html [L]\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("IfModule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("ul",[e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000012548105",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文章1"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.jb51.net/article/146180.htm",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文章2"),e("OutboundLink")],1)])]),s._v(" "),e("hr"),s._v(" "),e("h2",{attrs:{id:"附-docker的一些常用操作命令"}},[s._v("附: docker的一些常用操作命令")]),s._v(" "),e("ul",[e("li",[s._v("查看运行中容器: "),e("code",[s._v("docker ps -a")])]),s._v(" "),e("li",[s._v("暂停容器: "),e("code",[s._v("docker stop g4-web")])]),s._v(" "),e("li",[s._v("删除容器(慎用,数据无法恢复): "),e("code",[s._v("docker rm g4-web")])])])])},[],!1,null,null,null);t.default=n.exports}}]);