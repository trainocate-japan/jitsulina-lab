(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{310:function(t,s,a){"use strict";a.r(s);var _=a(14),e=Object(_.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("RouterLink",{attrs:{to:"/intro/"}},[t._v("入門編の目次に戻る")])],1),t._v(" "),s("h3",{attrs:{id:"実務で使えるlinux-入門編"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#実務で使えるlinux-入門編"}},[t._v("#")]),t._v(" 実務で使えるLinux 入門編")]),t._v(" "),s("h1",{attrs:{id:"演習5【ネットワーク管理】"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#演習5【ネットワーク管理】"}},[t._v("#")]),t._v(" 演習5【ネットワーク管理】")]),t._v(" "),s("h2",{attrs:{id:"概要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),s("ul",[s("li",[t._v("ipコマンドやnmcliコマンドによるネットワーク設定確認の基礎を学びます")]),t._v(" "),s("li",[t._v("疎通確認についての基礎知識を学びます")]),t._v(" "),s("li",[t._v("ネットワーク状態の確認方法を学びます")]),t._v(" "),s("li",[t._v("設定ファイルの編集とその影響を学びます")])]),t._v(" "),s("h2",{attrs:{id:"所要時間"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#所要時間"}},[t._v("#")]),t._v(" 所要時間")]),t._v(" "),s("p",[t._v("20分")]),t._v(" "),s("h2",{attrs:{id:"実施内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#実施内容"}},[t._v("#")]),t._v(" 実施内容")]),t._v(" "),s("ul",[s("li",[t._v("ipコマンドによるネットワーク設定確認")]),t._v(" "),s("li",[t._v("nmcliコマンドによるネットワーク設定確認")]),t._v(" "),s("li",[t._v("疎通確認")]),t._v(" "),s("li",[t._v("ネットワーク状態の確認")]),t._v(" "),s("li",[t._v("ネットワーク設定ファイルの編集")])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),s("p",[t._v("クラウド環境での演習の場合、ネットワークの設定を間違えると接続が切れたり再接続が不能になり復旧に時間がかかることがあります。十分注意しながら進めてください")])]),t._v(" "),s("h2",{attrs:{id:"演習内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#演習内容"}},[t._v("#")]),t._v(" 演習内容")]),t._v(" "),s("h3",{attrs:{id:"演習-ipコマンドによるネットワーク設定確認"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#演習-ipコマンドによるネットワーク設定確認"}},[t._v("#")]),t._v(" 演習：ipコマンドによるネットワーク設定確認")]),t._v(" "),s("h4",{attrs:{id:"_1-演習環境のホスト名のフルネーム-fqdn-を確認してください。方法は問いません"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-演習環境のホスト名のフルネーム-fqdn-を確認してください。方法は問いません"}},[t._v("#")]),t._v(" 1. 演習環境のホスト名のフルネーム（FQDN）を確認してください。方法は問いません")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[s("code",[t._v("hostname")]),t._v("もしくは"),s("code",[t._v("hostnamectl status")]),t._v(" "),s("br"),t._v("\nなど")])]),t._v(" "),s("h4",{attrs:{id:"_2-演習環境に設定されているipアドレスを、ipコマンドで確認してください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-演習環境に設定されているipアドレスを、ipコマンドで確認してください"}},[t._v("#")]),t._v(" 2. 演習環境に設定されているIPアドレスを、ipコマンドで確認してください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[s("code",[t._v("ip addr")])])]),t._v(" "),s("h4",{attrs:{id:"_3-演習環境に設定されているルーティングテーブル情報をipコマンドで表示し、デフォルトゲートウェイのipアドレスを確認してください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-演習環境に設定されているルーティングテーブル情報をipコマンドで表示し、デフォルトゲートウェイのipアドレスを確認してください"}},[t._v("#")]),t._v(" 3. 演習環境に設定されているルーティングテーブル情報をipコマンドで表示し、デフォルトゲートウェイのIPアドレスを確認してください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[s("code",[t._v("ip route")])])]),t._v(" "),s("h4",{attrs:{id:"_4-ipコマンドの出力結果から、演習環境に設定されているdnsサーバーのアドレスを確認してください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-ipコマンドの出力結果から、演習環境に設定されているdnsサーバーのアドレスを確認してください"}},[t._v("#")]),t._v(" 4. ipコマンドの出力結果から、演習環境に設定されているDNSサーバーのアドレスを確認してください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("ipコマンドではDNSサーバーのアドレスは確認できない")])]),t._v(" "),s("h4",{attrs:{id:"_5-演習環境に設定されているdnsサーバーのアドレスを確認してください。方法は問いません。確認したdnsサーバーのアドレスは後で使うので記録するか、表示できるようにしておいてください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-演習環境に設定されているdnsサーバーのアドレスを確認してください。方法は問いません。確認したdnsサーバーのアドレスは後で使うので記録するか、表示できるようにしておいてください"}},[t._v("#")]),t._v(" 5. 演習環境に設定されているDNSサーバーのアドレスを確認してください。方法は問いません。確認したDNSサーバーのアドレスは後で使うので記録するか、表示できるようにしておいてください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[s("code",[t._v("cat /etc/resolv.conf")]),t._v("もしくは"),s("code",[t._v("nmcli device show")]),t._v(" "),s("br"),t._v("\nなど")])]),t._v(" "),s("h3",{attrs:{id:"演習-nmcliコマンドによるネットワーク設定確認"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#演習-nmcliコマンドによるネットワーク設定確認"}},[t._v("#")]),t._v(" 演習：nmcliコマンドによるネットワーク設定確認")]),t._v(" "),s("h4",{attrs:{id:"_1-演習環境に設定されているipアドレスを、nmcliコマンドで確認してください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-演習環境に設定されているipアドレスを、nmcliコマンドで確認してください"}},[t._v("#")]),t._v(" 1. 演習環境に設定されているIPアドレスを、nmcliコマンドで確認してください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[s("code",[t._v("nmcli")]),t._v("、"),s("code",[t._v("nmcli device show")]),t._v("、"),s("code",[t._v("nmcli connection show")]),t._v(" "),s("br"),t._v("\nなど")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("nmcliコマンドでは、物理的なインターフェースであるdeviceと、論理的なインターフェースであるconnectionの2種類のインターフェースを取り扱います。通常、ネットワークの設定を行う際はconnectionに対して行います。このコースでは取り上げませんが、複数の物理インターフェースを束ねて冗長化を行うボンディング設定などを行う際は、deviceとconnecionを明確に分けて意識する必要があります")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("以前は、IPアドレスを確認するコマンドの定番は ifconfig でした。RHEL7以降は、このコマンドは非推奨となり、標準では利用できません。net-toolsパッケージをインストールすると使えるようになりますが、現場のルールに従って利用するようにしましょう")])]),t._v(" "),s("h3",{attrs:{id:"演習-疎通確認"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#演習-疎通確認"}},[t._v("#")]),t._v(" 演習：疎通確認")]),t._v(" "),s("h4",{attrs:{id:"_2-以下のコマンドを実行して、インターネット上のwebサイトである「exapmle-com」にアクセスしてください。どのような結果になるでしょうか"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-以下のコマンドを実行して、インターネット上のwebサイトである「exapmle-com」にアクセスしてください。どのような結果になるでしょうか"}},[t._v("#")]),t._v(" 2. 以下のコマンドを実行して、インターネット上のWebサイトである「exapmle.com」にアクセスしてください。どのような結果になるでしょうか？")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("`curl http://example.com`\n")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("HTMLが表示される\n"),s("br"),t._v(" "),s("code",[t._v("<h1>Example Domain</h1>")]),t._v("のような、HTMLが表示されれば問題ありません\n"),s("br"),t._v("\nexample.comドメインが名前解決され、インターネット上のホストへWebアクセスできたことがわかります")])]),t._v(" "),s("h4",{attrs:{id:"_3-pingコマンドを利用して、先ほど確認したdnsサーバーのアドレスにpingを実行してください。どんな結果になりましたか"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-pingコマンドを利用して、先ほど確認したdnsサーバーのアドレスにpingを実行してください。どんな結果になりましたか"}},[t._v("#")]),t._v(" 3. pingコマンドを利用して、先ほど確認したDNSサーバーのアドレスにpingを実行してください。どんな結果になりましたか？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[s("code",[t._v("ping 10.0.0.2")]),t._v("を実行して応答を確認する（アドレスは環境により異なります）\n"),s("br"),t._v("\nDNSサーバーによって、pingの応答がある場合もあれば、応答がない場合もある")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("DNSサーバーとしての機能と、pingに応答するかは別の話です。以下はGoogleのパブリックDNSサーバーへのpingですが、問題なく応答が返っています"),s("br"),t._v("\n[ec2-user@ip-10-0-1-207 ~]$ ping 8.8.8.8\n"),s("br"),t._v("\nPING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.\n"),s("br"),t._v("\n64 bytes from 8.8.8.8: icmp_seq=1 ttl=112 time=1.05 ms\n"),s("br"),t._v("\n64 bytes from 8.8.8.8: icmp_seq=2 ttl=112 time=1.07 ms\n"),s("br"),t._v(" "),s("br"),t._v("\nDNSサーバー側で応答を拒否していたり、途中のネットワーク機器（ファイアーウォールなど）がpingを通さない場合、DNSは機能してもpingの応答は返りません。pingによる疎通確認は当てにならないことがあることを覚えておきましょう")])]),t._v(" "),s("h3",{attrs:{id:"演習-ネットワーク状態の確認"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#演習-ネットワーク状態の確認"}},[t._v("#")]),t._v(" 演習：ネットワーク状態の確認")]),t._v(" "),s("h4",{attrs:{id:"_1-ネットワークの接続状態を確認してください。取得する情報は、tcp-udpの両方、サービス名の名前解決はなし、ホストが待ち受けしているポートのみ、です"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-ネットワークの接続状態を確認してください。取得する情報は、tcp-udpの両方、サービス名の名前解決はなし、ホストが待ち受けしているポートのみ、です"}},[t._v("#")]),t._v(" 1. ネットワークの接続状態を確認してください。取得する情報は、TCP/UDPの両方、サービス名の名前解決はなし、ホストが待ち受けしているポートのみ、です")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[s("code",[t._v("ss -nutl")])])]),t._v(" "),s("h4",{attrs:{id:"_2-webサーバー-httpd-をインストールして起動してください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-webサーバー-httpd-をインストールして起動してください"}},[t._v("#")]),t._v(" 2. Webサーバー（httpd）をインストールして起動してください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[s("code",[t._v("sudo dnf install -y httpd")]),t._v("でhttpdをインストール後、"),s("code",[t._v("sudo systemctl start httpd")]),t._v("でサービスを実行")])]),t._v(" "),s("h4",{attrs:{id:"_3-再び、ネットワークの接続状態を確認してください。webサーバーを起動したことにより、何が変わったでしょうか"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-再び、ネットワークの接続状態を確認してください。webサーバーを起動したことにより、何が変わったでしょうか"}},[t._v("#")]),t._v(" 3. 再び、ネットワークの接続状態を確認してください。Webサーバーを起動したことにより、何が変わったでしょうか？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[s("code",[t._v("ss -nutl")]),t._v(" "),s("br"),t._v("\n*:80 という記載が増え、tcp/80ポートでWebサーバーが接続待ちであることが")])]),t._v(" "),s("h3",{attrs:{id:"演習-ネットワーク設定ファイルの編集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#演習-ネットワーク設定ファイルの編集"}},[t._v("#")]),t._v(" 演習：ネットワーク設定ファイルの編集")]),t._v(" "),s("h4",{attrs:{id:"_1-etc-hostsファイルの末尾に、以下を追記してください。追記したあと、間違いが無いかをファイルを表示して確認してください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-etc-hostsファイルの末尾に、以下を追記してください。追記したあと、間違いが無いかをファイルを表示して確認してください"}},[t._v("#")]),t._v(" 1. /etc/hostsファイルの末尾に、以下を追記してください。追記したあと、間違いが無いかをファイルを表示して確認してください")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("169.254.169.254 example.com\n")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[s("code",[t._v("sudo vi /etc/hosts")]),t._v(" で編集後、"),s("code",[t._v("cat /etc/hosts")]),t._v("で確認\n"),s("br"),t._v("\n以下のようになっていればよい")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4\n::1         localhost localhost.localdomain localhost6 localhost6.localdomain6\n169.254.169.254 example.com\n")])])])]),t._v(" "),s("h4",{attrs:{id:"_2-先ほどと同じように、exmaple-comにアクセスしてください。どのような結果になるでしょうか"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-先ほどと同じように、exmaple-comにアクセスしてください。どのような結果になるでしょうか"}},[t._v("#")]),t._v(" 2. 先ほどと同じように、exmaple.comにアクセスしてください。どのような結果になるでしょうか？")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("curl http://example.com\n")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("何も表示されないか、先ほどとは違う結果となる")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("結果が返ってこない場合は、Ctrl+Cキーでcurlコマンドの動作を停止してください")])]),t._v(" "),s("h4",{attrs:{id:"_3-違う結果になった原因を考察してください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-違う結果になった原因を考察してください"}},[t._v("#")]),t._v(" 3. 違う結果になった原因を考察してください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("nsswitch.confに、DNSサーバーよりも/etc/hostsファイルの中身を優先する設定が既定ではいっており、exmaple.comが169.254.169.254と名前解決され、違うサーバー（もしくは存在しないアドレス）にアクセスが発生していた")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("169.254.169.254 (169.254.0.0/16)は、IPv4リンクローカルという特殊なアドレスで、通常の通信に使われることはほぼありません。DHCPでのアドレス割り振りに失敗した際などに使われます。演習環境がAmazon EC2の場合は、クラウド側の情報を取得できる特殊なアドレスとして使われますので、curlコマンドでのアクセスの際は結果が表示されます。一般的な環境の場合は、通常存在しないアドレスのため結果は返ってこず無応答となります")])]),t._v(" "),s("h4",{attrs:{id:"_4-etc-hostsの中身を元に戻しておいてください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-etc-hostsの中身を元に戻しておいてください"}},[t._v("#")]),t._v(" 4. /etc/hostsの中身を元に戻しておいてください")]),t._v(" "),s("h2",{attrs:{id:"演習終了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#演習終了"}},[t._v("#")]),t._v(" 演習終了")]),t._v(" "),s("ul",[s("li",[t._v("以上で演習5は終了です。お疲れ様でした。早く終わった方は、復習や周りのメンバーのヘルプを行いましょう")])]),t._v(" "),s("hr"),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/intro/"}},[t._v("入門編の目次に戻る")]),t._v(" "),s("br")],1),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/"}},[t._v("トップページに戻る")])],1)])}),[],!1,null,null,null);s.default=e.exports}}]);