app.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,

    layout: 'card',

    cardSwitchAnimation: 'slide',

    initComponent: function(){
        Ext.apply(app.views, {
        });

        Ext.apply(this, {
            items: [
                new Ext.Panel({
                    dockedItems: [{
                        xtype: 'toolbar',
                        title: '(ここに広告)',
                    },
                    {
                        xtype: 'toolbar',
                        title: '都市伝説',
                    }],

                    scroll: 'vertical',

                    items: [{
                        xtype: 'list',

                        width: Ext.is.Phone ? undefined : 500,

                        onItemDisclosure: function(record, btn, index) {
                            console.log('record=>'+record);
                            console.log('btn=>'+btn);
                            console.log('index=>'+index);
                            Ext.dispatch({
                                controller: 'legends',
                                action: 'show',
                                index: index
                            });
                        },

                        store: new Ext.data.Store({
                            model: 'Article',
                            data: [{
                                title: 'ピアスの白い糸',
                            },
                            {
                                title: 'ベッドの下の男'
                            },
                            {
                                title: '偽者の警察官'
                            },
                            {
                                title: '合掌'
                            },
                            {
                                title: '電気をつけたら'
                            },
                            {
                                title: '謎のシール'
                            },
                            {
                                title: 'ストーカー'
                            },
                            {
                                title: '赤い女性'
                            },
                            {
                                title: '生まれ代わり'
                            },
                            {
                                title: '道連れ'
                            },
                            {
                                title: '山小屋'
                            },
                            {
                                title: '正夢'
                            },
                            {
                                title: '達者'
                            },
                            {
                                title: 'コインロッカーベイビー'
                            },
                            {
                                title: 'ミミズバーガー'
                            },
                            {
                                title: '鶏の足'
                            },
                            {
                                title: 'ゴキブリ男'
                            }]
                        }),
                        itemTpl: '<div onclick='+this.show+'><strong>{title}</strong></div>' 
                    }]
                }),

                new Ext.Panel({
                    dockedItems: [{
                         xtype: 'toolbar',
                        title: '(ここに広告)',
                                     },
                    {
                        xtype: 'toolbar', 
                    title: Ext.util.Format.ellipsis('ピアスの白い糸', 10),
                    items: [{
                        ui: 'back',
                    text: 'Back',
                    listeners: {
                        'tap': function() {
                            Ext.dispatch({
                                controller: 'legends',
                            action: 'index',
                            animation: {type: 'slide', direction: 'right'}
                            });
                        }
                    }
                    }]
                    }],

                scroll: 'vertical',

                items: [{
                    padding: '10 0 10 10',
                    html: "明日は高校の入学式。<br>中学生の頃からずっと憧れていたサッカー部の隼人先輩と同じ高校に入学する事になった美幸は、高まる鼓動を抑えきれず、なかなか寝付けずにいた。<br><br>美幸の通う学校は、都内ではオシャレで有名な学校で、かわいい女の子の憧れの学校だった。<br>なかでもサッカー部のマネージャーの裕子は、いつも雑誌のスナップにお呼ばれするほどの容姿とみんなから好かれる根っからの性格の良さで、学校中のアイドルだ。<br><br>そんな彼女も隼人先輩を気にしているようで、美幸はちょっとでも可愛く、彼女に近づければと思い、以前からピアス付けたいと思っていた。<br>とはいっても、中学生の美幸には、病院にいくお金もないし、母親に頼んでも「親から貰った体に傷をつけるんじゃない!?」とダメだし。<br><br>一時はあきらめたものの、入学式が近づくに連れ、また気持ちがよみがえってきてしまった。<br>（どうしよっかなぁ・・・。自分で出来るかなぁ・・・。痛いよなぁ・・・・。）<br><br>「よしっ！」<br><br>どうしてもあきらめきれない美幸は、意を決して安全ピンで自分で空けてしまう事に決めた。<br><br>----2時間後<br>「えい！」<br>ようやく覚悟を決めた美幸。<br>（思ったより痛くなかったな。）そんな事を思いながら本日は就寝。<br><br>----翌朝<br>「チュンチュン♪　チュンチュン♪」<br>小鳥の鳴き声と、刺すように照っている太陽の光に後押しされ、美幸は目覚める。<br>早速、昨日の夜中に用意しておいた新品のセーラー服に身をまとい、化粧をする為、<br>ドレッサーの前に座る。<br><br>「・・・・あれ？」<br><br>彼女は、鏡の中の自分を見つめ、ピアスの穴から白い糸のようなものがニョロリと出ているのに気づく。<br>（おかしいなぁ・・・昨日は無かったのに。）と思いながら、こんなダサイ糸が垂れていると恥ずかしいと思った彼女はエイッ！と力をこめて糸を引きちぎった。<br><br>（あれ？停電かな……）<br><br>糸を引きちぎると同時に、彼女の視界が真っ暗になってしまった。<br>実はこの白い糸は視神経で、それを切ってしまった彼女は失明してしまったのだ。<br>"
                }]
                }),

                new Ext.Panel({
                    dockedItems: [{
                                     xtype: 'toolbar',
                title: '(ここに広告)',
                                 },
                { 
                    xtype: 'toolbar', 
                title: Ext.util.Format.ellipsis('ベッドの下の男', 10),
                items: [{
                    ui: 'back',
                text: 'Back',
                listeners: {
                    'tap': function() {
                        Ext.dispatch({
                            controller: 'legends',
                        action: 'index',
                        animation: {type: 'slide', direction: 'right'}
                        });
                    }
                }
                }]
                }],

                scroll: 'vertical',

                items: [{
                    padding: '10 0 10 10',
                    html: "女子大生のＡ子がある日、先輩のＢ子の家に遊びに行った。<br>Ａ子とＢ子はとっても仲がよく、その日も夜遅くまで先輩のＢ子の家でたわいもない話をしていた。<br>時間を見ると終電ギリギリの時間なので、Ｂ子の家から自分のアパートへＡ子は帰ることにした。<br>しかし途中でＡ子は自分のアパートの鍵をＢ子の家に忘れているのを思い出し、Ｂ子の家に引き返した。<br><br>真夜中ということもあり、Ｂ子の部屋には明かりがついていなかった。幸運なことに鍵もかかっていなかったので、Ｂ子の部屋の構造を良く知っていたＡ子は電灯をつけるまでもなくＢ子の部屋に忘れてしまった自分の部屋の鍵を手に入れてぎりぎりの時間で家に帰った。<br><br>そして次の日。<br>Ａ子は昨日の非礼をわびると同時に、どこかへ食事にでもＢ子を誘おうと思い、Ｂ子の部屋に行った。<br>しかしそこには警察車両と大勢のやじうまでがいた。<br>Ａ子は人ごみをかきわけて入っていくと警察にＢ子の友人だと名乗り出た。<br>警察はＢ子が殺されたことと、ちょっとわからないことがあるのでとショックを受けているＡ子をＢ子の部屋に入れた。Ｂ子の血で染まったベッドの横に血文字でこう書かれていた。<br>「あかりをつけなくてよかったな」<br>そう、Ａ子が鍵を取りに戻ったとき、すでにＢ子は殺されており、まだ部屋にはその犯人も潜んでいたのだ。もしそのとき電気をつけていたらＡ子も殺されていただろう・・・ベッドの下に潜んでいた殺人犯に。<br><br><br>大学生のＡ子は仲良しのＢ子の家に泊まりにきていた。<br>Ｂ子はワンルームマンションで一人暮し。<br><br>恋愛の悩みなどいろいろとお互いのことを話していた。<br>時間も深夜になり、お互い眠くなってきたので寝ることに。<br><br>Ｂ子は自分のベッドへ、Ａ子は来客用の布団を床に敷いて横になった。<br>しばらくしてＢ子が眠りにつきそうになったとき、突然Ａ子がコンビニに行きたいと<br>言い出した。<br>もう眠いし明日にしようとＢ子は言ったが、Ａ子が必死にコンビニに行きたいと言う。<br><br>今日のＡ子は変だなと思いつつも、仕方なくコンビニに行くことに。<br>そして2人でコンビニに向かうため部屋を出た瞬間、Ａ子は真っ青な顔をしてこう言った。<br>「Ｂ子のベッドの下に包丁を持った男がいた」<br><br>Ａ子が床に布団を敷いて寝たため、目線はちょうどＢ子の寝るベッドの下が見える高さだった。<br>そしてＡ子はそこにストーカーの男が隠れているのを見つけてしまったのだ。<br><br>もしＡ子が機転を利かして、コンビニにＢ子を連れ出していなかったら2人とも殺されていたかも知れない・・・<br>"
                }]
                }),

                new Ext.Panel({
                    dockedItems: [{
                                     xtype: 'toolbar',
                title: '(ここに広告)',
                                 },
                {
                    xtype: 'toolbar', 
                title: Ext.util.Format.ellipsis('偽者の警察官', 10),
                items: [{
                    ui: 'back',
                text: 'Back',
                listeners: {
                    'tap': function() {
                        Ext.dispatch({
                            controller: 'legends',
                        action: 'index',
                        animation: {type: 'slide', direction: 'right'}
                        });
                    }
                }
                }]
                }],

                scroll: 'vertical',

                items: [{
                    padding: '10 0 10 10',
                    html: "A子は仕事を終え職場から自宅マンションへと帰ってきました。<br><br>部屋のある階に到着しエレベーターの扉が開いた時、入れ違いに入って来た男と肩がぶつかりました。<br><br>男は謝りもせずエレベーターで1階へと降りていくので、<br>A子は何て失礼な人なんだろうと思いながらもそのまま部屋へと帰りました。<br><br><br>そんな事があった翌日、A子が出勤のために自宅から出るとそこにはたくさんの警察官がいました。<br>どうやら昨夜同じ階のある部屋で殺人事件があったとのことでした。<br><br>もしかしたら昨日すれ違った男が・・・と考えるとA子は恐ろしくなりながらも<br>仕事場へと向かいました。<br><br>そしてその日の夜、A子は仕事を終え、いつも通り帰宅しました。<br><br>するとピンポーンと部屋のチャイムがなりました。<br><br>こんな夜に誰だろうと思い、ドア穴をのぞくとそこには1人の警察官が立っていました。<br><br>どうやらこの警察官は昨日の殺人事件の聞き込みをしているらしく、<br>「昨日の夜何か目撃しなかったか」「少しでも気づいたことはないか」<br>と尋ねてきました。<br><br>A子はふとエレベーターですれ違った男のことが頭をよぎりましたが、<br>顔をはっきり見たわけでも無いし、面倒に巻き込まれるのは嫌だと思い<br>何も見ていないし、気づいたこともないと答え警察官は帰っていきました。<br><br>それから数日後、殺人事件の犯人が捕まり、テレビのニュースでは犯人の顔が報道されていました。<br><br>それを見たA子は血の気が一気に引く思いをしました。<br><br>その犯人の顔は、数日前自宅に尋ねてきた警察官の顔だったのです。<br><br><br>犯人は、エレベーターですれ違ったA子に顔を目撃されたと思い、<br>警察官を装って自宅まで確認をしにきていたのです。<br><br>もしあの時、目撃した話をしていたらA子は殺されていたでしょう。<br>"
                }]
                }),

                new Ext.Panel({
                    dockedItems: [{
                                     xtype: 'toolbar',
                title: '(ここに広告)',
                                 },
                { 
                    xtype: 'toolbar', 
                cls: 'toolbar',
                title: Ext.util.Format.ellipsis('合掌', 10),
                items: [{
                    ui: 'back',
                text: 'Back',
                listeners: {
                    'tap': function() {
                        Ext.dispatch({
                            controller: 'legends',
                        action: 'index',
                        animation: {type: 'slide', direction: 'right'}
                        });
                    }
                }
                }]
                }],

                scroll: 'vertical',

                items: [{
                    padding: '10 0 10 10',
                    html: "とある小学校で行われたマラソン大会でのことです。<br><br>A君は生まれつき心臓に思い病気をかかえており、医師から運動を禁止されていました。<br><br>しかしA君はどうしてもみんなと一緒にマラソン大会に出たいと両親に訴えました。<br><br>小さいことからずっと体育は見学、みんなと鬼ごっこすらやらせてあげられないことを<br>不憫に思っていた両親は医師に相談します。<br><br>医師は絶対に無理としないという約束で出場を許可してくれました。<br><br><br>そして大会がスタートし、A君もみんなと一緒に走ることができました。<br><br>A君はダントツの最下位でしたが、みんな病気の事を知っており、<br>最後は全校あげてゴールの瞬間を拍手で迎えました。<br><br>ところが、ゴールした直後、男の子はその場に倒れてしまいます。<br><br>すぐに救急車で運ばれましたが、間に合わず男の子は無くなってしまいました。<br><br>A君はみんなと初めてマラソンに参加できたことが嬉しくて無理をしてしまったのでしょう。<br><br><br>両親は悲しみに暮れながらも、A君の最後の元気な姿を見たいと<br>ゴールする瞬間を撮影した写真を現像したところ、そこには信じられない光景が写っていました。。<br><br><br>ゴールするA君を拍手で迎える観客の手が皆合わさった状態なのです。<br><br>まるで、A君の死を見届けるためにみんなで合掌しているかのような光景でした。<br>"
                }]
                }),

                new Ext.Panel({
                    dockedItems: [{
                                     xtype: 'toolbar',
                title: '(ここに広告)',
                                 },
                { 
                    xtype: 'toolbar', 
                title: Ext.util.Format.ellipsis('電気をつけたら', 10),
                items: [{
                    ui: 'back',
                text: 'Back',
                listeners: {
                    'tap': function() {
                        Ext.dispatch({
                            controller: 'legends',
                        action: 'index',
                        animation: {type: 'slide', direction: 'right'}
                        });
                    }
                }
                }]
                }],

                scroll: 'vertical',

                items: [{
                    padding: '10 0 10 10',
                    html: "大学の寮で暮らすA子さんは、寮のみんなでB子先輩の部屋に集まりお酒を飲んでいました。<br><br>夜遅くまでみんなで盛り上がり、そろそろ眠くなったからとお開きとしました。<br><br>各自、自分の部屋にもどり、A子を同じく自分の部屋に帰りました。<br><br>ところがB子先輩の部屋に携帯電話を忘れてきたしまい、A子はB子先輩の部屋へと戻りました。<br><br>B子先輩の部屋はすでに暗くなっていて、もう寝ているようでした。<br><br>相当酔ってたしすぐに寝ちゃったんだなと思い、A子はB子先輩を起こさないように<br>真っ暗な部屋の中から手探りで携帯電話を見つけ出し、自分の部屋へと帰りました。<br><br><br>翌朝、A子はパトカーのサイレン音と人々の騒がしい声で目を覚まします。<br><br>なんとB子先輩が昨夜部屋に侵入してきた変質者に襲われ殺されたというのです。<br><br>そして部屋の鏡には赤い血の文字で<br><br>「でんきをつけなくてよかったな」<br><br>と書いてありました。<br><br>そうです。<br><br>A子が携帯電話を取りにきた時にはすでB子先輩は殺され、<br>真っ暗な部屋の中には犯人がまだ残っていたのです。<br><br>もし携帯電話を探すためにA子が部屋の電気をつけていたら・・・<br>"
                }]
                }),

                new Ext.Panel({
                    dockedItems: [{
                                     xtype: 'toolbar',
                title: '(ここに広告)',
                                 },
                { 
                    xtype: 'toolbar', 
                title: Ext.util.Format.ellipsis('謎のシール', 10),
                items: [{
                    ui: 'back',
                text: 'Back',
                listeners: {
                    'tap': function() {
                        Ext.dispatch({
                            controller: 'legends',
                        action: 'index',
                        animation: {type: 'slide', direction: 'right'}
                        });
                    }
                }
                }]
                }],

                scroll: 'vertical',

                items: [{
                    padding: '10 0 10 10',
                    html: "ある日、Aさんが仕事から自宅アパートに帰ってくるとの玄関に違和感を感じた。<br><br>注意して見てみると、玄関ドアの表札に小さなシールが貼られていたのである。<br><br>お隣のお子さんのいたずらだなと思い、Aさんはそのシールを何気無く<br>お隣の玄関に貼って部屋へと入った。<br><br>数日後、Aさんが仕事から帰宅するとアパートにパトカーとたくさんの警察官が集まっており、<br>話を聞いてみると、お隣に強盗が入り部屋にいた主婦が刺され亡くなったという。<br><br>そして強盗は捕まった際に<br>「なんでだ！昼間はいないはずなのに！」<br>と叫んでいたという。<br><br>どうやらAさんが数日前に剥がしたシールは、空き巣が下見をした際に<br>昼間人がいないと確認された部屋の目印だったらしい。<br>"
                }]
                }),

                new Ext.Panel({
                    dockedItems: [{
                                     xtype: 'toolbar',
                title: '(ここに広告)',
                                 },
                { 
                    xtype: 'toolbar', 
                title: Ext.util.Format.ellipsis('ストーカー', 10),
                items: [{
                    ui: 'back',
                text: 'Back',
                listeners: {
                    'tap': function() {
                        Ext.dispatch({
                            controller: 'legends',
                        action: 'index',
                        animation: {type: 'slide', direction: 'right'}
                        });
                    }
                }
                }]
                }],

                scroll: 'vertical',

                items: [{
                    padding: '10 0 10 10',
                    html: "A子はストーカー被害に悩まされていた。<br><br>毎日のように無言電話が続き、ごみをあさられるなどの嫌がらせも受けていた。<br><br>そんな日々が数ヶ月続き、精神的にも肉体的にも限界を感じたA子は警察に相談をすることにした。<br><br>警察はストーカー行為の悪質性を考え、今度無言電話がかかってきたら逆探知をすることとなった。<br><br>そしてその日の夜も無言電話はかかってきた。<br><br>無言電話はとても気味の悪いものだったが、逆探知のためにA子は電話を切らず耐え続けた。<br><br>そして警察から連絡用に渡されていた携帯電話が鳴り、A子が出た瞬間、<br>警察官はこう叫びました。<br><br>「今すぐその部屋から出てください。無言電話の発信元はその部屋です。」<br>"
                }]
                }),

                new Ext.Panel({
                    dockedItems: [{
                                     xtype: 'toolbar',
                title: '(ここに広告)',
                                 },
                { 
                    xtype: 'toolbar', 
                title: Ext.util.Format.ellipsis('赤い女性', 10),
                items: [{
                    ui: 'back',
                text: 'Back',
                listeners: {
                    'tap': function() {
                        Ext.dispatch({
                            controller: 'legends',
                        action: 'index',
                        animation: {type: 'slide', direction: 'right'}
                        });
                    }
                }
                }]
                }],

                scroll: 'vertical',

                items: [{
                    padding: '10 0 10 10',
                    html: "とある深夜、タクシーが赤いコートを着た女性を乗せた。<br><br>雨にも関わらず傘もささず、顔色も悪い女性。<br><br>気味が悪いなと思いながらも、運転手は指定された場所へと向かった。<br><br>そこには古びたアパートがあり、女性は無言でお金を払うと自分の部屋へと<br>入っていった。<br><br>部屋へと向かう女性はおぼつかない足取りで、今にも倒れそうな様子だった。<br><br>運転手は女性のことが心配となり、悪いこととはわかっていながら<br>部屋の前までいき、ドア穴から部屋の中をのぞきこんでみた。<br><br>すると部屋は真っ赤でそれ以外には何も見えない。<br><br>とても恐ろしくなり、運転手は急いでその場と立ち去った。<br><br><br>翌日、昨日の女性のことがまだ気になっていた運転手は再び女性のアパートを<br>訪れた。<br><br>庭を掃除していた女性に話しかえるとどうやらそのアパートの大家さんで<br>女性の事も良く知っていた。<br><br>すると女性はこう彼女のことを教えてくれた。<br><br>「かわいそうに。彼女は何の病気かはわかりませんが眼が真っ赤なんです・・・」<br><br>そう、昨日ドア穴から覗いた時、真っ赤に見えたのは<br>女性も同じように中から覗きこんでいたからだったのです。<br>"
                }]
                }),

                new Ext.Panel({
                    dockedItems: [{
                                     xtype: 'toolbar',
                title: '(ここに広告)',
                                 },
                { 
                    xtype: 'toolbar', 
                title: Ext.util.Format.ellipsis('生まれ代わり', 10),
                items: [{
                    ui: 'back',
                text: 'Back',
                listeners: {
                    'tap': function() {
                        Ext.dispatch({
                            controller: 'legends',
                        action: 'index',
                        animation: {type: 'slide', direction: 'right'}
                        });
                    }
                }
                }]
                }],

                scroll: 'vertical',

                items: [{
                    padding: '10 0 10 10',
                    html: "ある若い夫婦の話です。<br><br>この夫婦は結婚してすぐに子供が出来ました。<br><br>しかし、その子供は重度の障害を抱えていました。<br><br>2人は子供の将来と夫婦の今後を悲観し、とても落ち込んでいました。<br><br>そんなある日、2人は子供を連れて大きな池のある公園に遊びに行きました。<br><br>子供と一緒にボートに乗り、人気の無い場所までボートを漕いでいくと、<br>子供を池に突き落としてしまいました。<br><br>子供は溺れなくなりました。<br><br>2人は口裏を合わせ、事故と主張しまし、目撃者も無く<br>警察も事故ということで処理されました。<br><br><br>それから数年後、この夫婦にはまた子供が出来ました。<br><br>健康で元気な男の子でした。<br><br>2人は子供をとても可愛がり幸せな毎日を送っていました。<br><br>ある日、家族3人で公園に遊びにきていたとき、子供が突然ボートに乗りたいと言い出しました。<br><br>2人は困惑したものの、どうしても乗りたいという子供におされ仕方なくボートに乗ることにしました。<br><br>ボートに乗り、人気の無いところまでやってくると<br>あれだけ乗りたがっていた子供が池を眺めながら沈黙してしまいました。<br><br>どうしたのかと思い、2人が話しかけようとすると子供は突然こう言ったのです。、<br><br>「今度は落とさないでね」<br>"
                }]
                }),

                new Ext.Panel({
                    dockedItems: [{
                                     xtype: 'toolbar',
                title: '(ここに広告)',
                                 },
                { 
                    xtype: 'toolbar', 
                title: Ext.util.Format.ellipsis('道連れ', 10),
                items: [{
                    ui: 'back',
                text: 'Back',
                listeners: {
                    'tap': function() {
                        Ext.dispatch({
                            controller: 'legends',
                        action: 'index',
                        animation: {type: 'slide', direction: 'right'}
                        });
                    }
                }
                }]
                }],

                scroll: 'vertical',

                items: [{
                    padding: '10 0 10 10',
                    html: "2組のカップルがキャンプ旅行に行ったときの話。<br><br>A子とB男カップル、友人のC子とD男カップルの4人で、とある山深くにあるキャンプ場に<br>向かう予定だったが、B男は仕事の関係で一緒に行くことが出来ず、あとからバイクで向かう予定になっていた。<br><br><br>A子はC子と共にD男が運転する車でキャンプ場まで向かった。<br>最初は楽しく3人で話していたが、長い道のりだったこともあり、<br>A子は途中で寝てしまった。<br><br>目が覚めると、すでにキャンプ場に到着していてそのまま3人でコテージに向かった。<br><br>するとC子とD男は真剣な顔をしてA子にこう言った。<br><br>B男がバイクでこっちに向かう途中事故に遭い亡くなったらしいと。<br><br>ショックで放心状態のA子。<br><br>静かに時だけが過ぎるコテージ。<br><br>と、突然激しくドアをノックする音が鳴った。<br><br>「A子、俺だ。開けてくれ！」<br><br>B男の声だ。ドアを開けようとするA子をC子とD男が止めに入る。<br><br>「落ち着くんだA子。B男はもう死んでるんだ。お前を連れて行こうとしてるのかもしれない！」<br><br>しかしB男はノックを続ける。<br><br>「A子。そこにいるんだろ！ドアを開けてくれ。」<br><br>B男の死が信じられないA子は、2人の制止を振り切り、とうとうドアを開けてしまう。<br><br>すると突然間の前が真っ白になり、気がつくと病院のベッドにいた。<br><br>そして横にはB男がいる。<br><br>そしてB男がすべての状況を話してくれた。<br><br>事故にあったのはA子たちだったという。<br><br>D男が運転する車がカーブを曲がりきれず、崖に転落、C子とD男は即死だったとのこと。<br><br>そしてA子は一晩中病院で生死の境を彷徨っていたらしい。<br><br><br>A子がコテージであった話をすると、<br><br>「あいつらも寂しかったんだろう。おまえを連れて行こうとしたのかもしれない。」<br><br>とB男は静かに答えた。<br>"
                }]
                }),

                new Ext.Panel({
                    dockedItems: [{
                                     xtype: 'toolbar',
                title: '(ここに広告)',
                                 },
                { 
                    xtype: 'toolbar', 
                title: Ext.util.Format.ellipsis('山小屋', 10),
                items: [{
                    ui: 'back',
                text: 'Back',
                listeners: {
                    'tap': function() {
                        Ext.dispatch({
                            controller: 'legends',
                        action: 'index',
                        animation: {type: 'slide', direction: 'right'}
                        });
                    }
                }
                }]
                }],

                scroll: 'vertical',

                items: [{
                    padding: '10 0 10 10',
                    html: "とある大学の登山サークルでの話。<br>4年生になるメンバー4人は卒業旅行も兼ねて冬山登山に挑戦することにした。<br><br>山に入り数時間後、厳しい吹雪に襲われた4人は道に迷い遭難してしまう。<br><br>山を彷徨っていると前方に一軒の山小屋を見つけた。<br><br>助かったと4人は急いで山小屋へと避難した。<br><br>しかしこの山小屋には暖を取れるようなものはなく、このまま眠ってしまえば<br>凍死してしま危険がある。<br><br>そこで4人はあるアイデアを考えた。<br><br>それは部屋の四隅にそれぞれ4人が立ち、最初の1人目が壁沿いに角まで歩く。<br>そしてその角にいる2人目にタッチする。<br>タッチされた2人目がまた角まで歩き、3人目にタッチする。<br>そして3人目が・・・と繰り返し、朝までみんなで歩き続けるというものだった。<br><br>そして朝まで眠らずに歩き続けた4人は無事救助隊に救出される。<br><br>どうやって朝まで起きていたのかと尋ねる救助隊員に4人は昨晩実行したアイデアを話した。<br><br>すると救助隊員は不思議そうな顔をしてこう尋ねた。<br><br>「それはおかしな話だな。それぞれが四隅に立って歩き始めたら、<br>　4人目が歩いていった角には誰もいないはずだけど。」<br>"
                }]
                }),

                new Ext.Panel({
                    dockedItems: [{
                                     xtype: 'toolbar',
                title: '(ここに広告)',
                                 },
                { 
                    xtype: 'toolbar', 
                title: Ext.util.Format.ellipsis('正夢', 10),
                items: [{
                    ui: 'back',
                text: 'Back',
                listeners: {
                    'tap': function() {
                        Ext.dispatch({
                            controller: 'legends',
                        action: 'index',
                        animation: {type: 'slide', direction: 'right'}
                        });
                    }
                }
                }]
                }],

                scroll: 'vertical',

                items: [{
                    padding: '10 0 10 10',
                    html: "A子はある日恐ろしい夢を見た。<br><br>A子が下校の途中、通り魔に襲われ刺し殺されるという夢だ。<br><br>それは、普通の夢とは違い、目が覚めてからもはっきり覚えていた。<br><br>そしてその日の下校時、夢で見た通り魔に襲われる場所に差し掛かった。<br><br>A子は嫌な胸騒ぎを感じ、母親に車で迎えにきてもらうことにした。<br><br>母親の車が到着し車に乗り込んだ瞬間、A子は強い視線を感じ振り返ると<br>そこには夢で見たナイフを持った通り魔が立っていた。<br><br>そして怒りを爆発させるように、こう叫んだ。<br><br>「夢とちがうじゃねーか！」と。<br>"
                }]
                }),

                new Ext.Panel({
                    dockedItems: [{
                                     xtype: 'toolbar',
                title: '(ここに広告)',
                                 },
                { 
                    xtype: 'toolbar', 
                title: Ext.util.Format.ellipsis('達者', 10),
                items: [{
                    ui: 'back',
                text: 'Back',
                listeners: {
                    'tap': function() {
                        Ext.dispatch({
                            controller: 'legends',
                        action: 'index',
                        animation: {type: 'slide', direction: 'right'}
                        });
                    }
                }
                }]
                }],

                scroll: 'vertical',

                items: [{
                    padding: '10 0 10 10',
                    html: "ある日本人大学生2人は卒業旅行で中国へと向かいました。<br><br>大学で中国文化を勉強していた2人は、中国語も堪能で、<br>普段観光客が行かないような場所に行こうと山間部のとある田舎町まで旅をしてきました。<br><br>しばらく町を歩いていると、「達者」という看板を見つけました。<br><br>なんだろうと興味が湧いた2人は店に入ってみることにしました。<br><br>店は薄暗く、奥に大きな人形のようなものが並んでおり、数人の中国人がそれを見ているようでした。<br><br>あの人形が達者なのかな？と近づいた2人はその場で凍りつきました。<br><br>その人形には手足がなく、しかし目や口は動いているのです。<br>それは人形ではなく、手足を切断された人間、「達者」でした。<br><br>2人は恐怖のあまり、ただ立ちすくみ震えるばかりでした。<br><br>ここは危険だと急いでこの場を立ち去ろうとした瞬間、達者の1人が2人に向かって突然叫びました。<br><br>「あなたたちは日本人でしょ？お願い助けて！」<br><br>達者は必死に2人に助けを求めました。<br><br>しかし、2人はここで日本人とばれると自分たちも同じ目にあうのではと思い、<br>それを無視して逃げてきたそうです。<br>"
                }]
                }),

                new Ext.Panel({
                    dockedItems: [{
                                     xtype: 'toolbar',
                title: '(ここに広告)',
                                 },
                { 
                    xtype: 'toolbar', 
                title: Ext.util.Format.ellipsis('コインロッカーベイビー', 10),
                items: [{
                    ui: 'back',
                text: 'Back',
                listeners: {
                    'tap': function() {
                        Ext.dispatch({
                            controller: 'legends',
                        action: 'index',
                        animation: {type: 'slide', direction: 'right'}
                        });
                    }
                }
                }]
                }],

                scroll: 'vertical',

                items: [{
                    padding: '10 0 10 10',
                    html: "家出少女だったA子は、ある時ナンパされた見ず知らずの男性の子供を身ごもってしまいました。<br><br>家出中だったため親にも相談できず、中絶するお金も無かったA子は<br>子供を出産するとそのまま赤ん坊を駅のコインローカーの中に放置してしまいました。<br><br>それから数年後の事、<br>今まで避けて通ってきたあのコインロッカーの前をどうしても通らなくてはいけなくなった。<br><br>するとそのコインロッカーの前で男の子が泣いている。<br><br>迷子になってのかなと思い、A子は男の子に話しかけた。<br><br>「僕、迷子になっちゃたの？」<br><br>男の子は泣いているだけで答えてくれない<br><br>「お名前は何ていうの？」<br><br>それでも男の子は泣いているだけだ。<br><br>「僕。お母さんはどこなのかな？」<br><br>すると男の子はすごい形相でこう答えた。<br><br>「おまえだ！」<br>"
                }]
                }),

                new Ext.Panel({
                    dockedItems: [{
                                     xtype: 'toolbar',
                title: '(ここに広告)',
                                 },
                { 
                    xtype: 'toolbar', 
                title: Ext.util.Format.ellipsis('ミミズバーガー', 10),
                items: [{
                    ui: 'back',
                text: 'Back',
                listeners: {
                    'tap': function() {
                        Ext.dispatch({
                            controller: 'legends',
                        action: 'index',
                        animation: {type: 'slide', direction: 'right'}
                        });
                    }
                }
                }]
                }],

                scroll: 'vertical',

                items: [{
                    padding: '10 0 10 10',
                    html: "Aさんは、あるファーストフードチェーンにてハンバーガーを食べていた。<br><br>途中で食感に違和感を感じ、食べかけのハンバーガーを覗きこんだ。<br><br>すると肉の部分から太くて赤い糸のような、まるでミミズのようなものが見えた。<br><br>まさかと思いながらも、店に抗議をすると、店長が現れ裏の事務所へと丁重に案内された。<br><br>するとおもむろに数万円が入った封筒を渡され、このことは一切誰にも話さないようにと<br>懇願されたという。<br>"
                }]
                }),

                new Ext.Panel({
                    dockedItems: [{
                                     xtype: 'toolbar',
                title: '(ここに広告)',
                                 },
                { 
                    xtype: 'toolbar', 
                title: Ext.util.Format.ellipsis('鶏の足', 10),
                items: [{
                    ui: 'back',
                text: 'Back',
                listeners: {
                    'tap': function() {
                        Ext.dispatch({
                            controller: 'legends',
                        action: 'index',
                        animation: {type: 'slide', direction: 'right'}
                        });
                    }
                }
                }]
                }],

                scroll: 'vertical',

                items: [{
                    padding: '10 0 10 10',
                    html: "とあるファースドフードチェーンの食品工場でアルバイトをしていた学生は、<br>いつもある疑問を持っていた。<br><br>出荷される鶏肉が胸肉よりも足の肉のほうが圧倒的に多いのである。<br><br>周りの社員に聞いても、気のせいだとか考え過ぎだと言われ笑われる。<br><br>しかし彼は納得がいかず、深夜、食品工場の奥へと忍びこんだ。<br><br>そしてそこには、足が4本ある鶏が飼育されていたという・・・<br>"
                }]
                }),

                new Ext.Panel({
                    dockedItems: [{
                                     xtype: 'toolbar',
                title: '(ここに広告)',
                                 },
                { 
                    xtype: 'toolbar', 
                title: Ext.util.Format.ellipsis('ゴキブリ男', 10),
                items: [{
                    ui: 'back',
                text: 'Back',
                listeners: {
                    'tap': function() {
                        Ext.dispatch({
                            controller: 'legends',
                        action: 'index',
                        animation: {type: 'slide', direction: 'right'}
                        });
                    }
                }
                }]
                }],

                scroll: 'vertical',

                items: [{
                    padding: '10 0 10 10',
                    html: "まだテレビの規制が今ほど厳しくない時代、ビックリ超人として一世風靡をした男性がいた。<br><br>その男性は、ゴキブリを食べるという芸でテレビによく登場していたのである。<br><br>それから数ヵ月後、突然彼はテレビから姿を消した。<br><br>どうやら彼は亡くなってしまったらしい。<br><br>その死因は、食べたゴキブリの卵が彼の体内で孵化し、無数のゴキブリによって内臓を食いちぎられてしまったためだという。<br>"
                }]
                })]
    });

    app.views.Viewport.superclass.initComponent.apply(this, arguments);
}
});

