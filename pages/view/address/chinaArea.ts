import { ref, reactive } from "vue";

const chinaArea = [
	{
		"id": "11",
		"pid": 0,
		"deep": 0,
		"name": "北京",
		"pinyin": "bei jing",
		"pinyin_prefix": "b",
		"ext_id": "110000000000",
		"ext_name": "北京市",
		"childs": [
			{
				"id": "1101",
				"pid": 11,
				"deep": 1,
				"name": "北京",
				"pinyin": "bei jing",
				"pinyin_prefix": "b",
				"ext_id": "110100000000",
				"ext_name": "北京市",
				"childs": [
					{
						"id": "110101",
						"pid": 1101,
						"deep": 2,
						"name": "东城",
						"pinyin": "dong cheng",
						"pinyin_prefix": "d",
						"ext_id": "110101000000",
						"ext_name": "东城区"
					},
					{
						"id": "110102",
						"pid": 1101,
						"deep": 2,
						"name": "西城",
						"pinyin": "xi cheng",
						"pinyin_prefix": "x",
						"ext_id": "110102000000",
						"ext_name": "西城区"
					},
					{
						"id": "110105",
						"pid": 1101,
						"deep": 2,
						"name": "朝阳",
						"pinyin": "chao yang",
						"pinyin_prefix": "c",
						"ext_id": "110105000000",
						"ext_name": "朝阳区"
					},
					{
						"id": "110106",
						"pid": 1101,
						"deep": 2,
						"name": "丰台",
						"pinyin": "feng tai",
						"pinyin_prefix": "f",
						"ext_id": "110106000000",
						"ext_name": "丰台区"
					},
					{
						"id": "110107",
						"pid": 1101,
						"deep": 2,
						"name": "石景山",
						"pinyin": "shi jing shan",
						"pinyin_prefix": "s",
						"ext_id": "110107000000",
						"ext_name": "石景山区"
					},
					{
						"id": "110108",
						"pid": 1101,
						"deep": 2,
						"name": "海淀",
						"pinyin": "hai dian",
						"pinyin_prefix": "h",
						"ext_id": "110108000000",
						"ext_name": "海淀区"
					},
					{
						"id": "110109",
						"pid": 1101,
						"deep": 2,
						"name": "门头沟",
						"pinyin": "men tou gou",
						"pinyin_prefix": "m",
						"ext_id": "110109000000",
						"ext_name": "门头沟区"
					},
					{
						"id": "110111",
						"pid": 1101,
						"deep": 2,
						"name": "房山",
						"pinyin": "fang shan",
						"pinyin_prefix": "f",
						"ext_id": "110111000000",
						"ext_name": "房山区"
					},
					{
						"id": "110112",
						"pid": 1101,
						"deep": 2,
						"name": "通州",
						"pinyin": "tong zhou",
						"pinyin_prefix": "t",
						"ext_id": "110112000000",
						"ext_name": "通州区"
					},
					{
						"id": "110113",
						"pid": 1101,
						"deep": 2,
						"name": "顺义",
						"pinyin": "shun yi",
						"pinyin_prefix": "s",
						"ext_id": "110113000000",
						"ext_name": "顺义区"
					},
					{
						"id": "110114",
						"pid": 1101,
						"deep": 2,
						"name": "昌平",
						"pinyin": "chang ping",
						"pinyin_prefix": "c",
						"ext_id": "110114000000",
						"ext_name": "昌平区"
					},
					{
						"id": "110115",
						"pid": 1101,
						"deep": 2,
						"name": "大兴",
						"pinyin": "da xing",
						"pinyin_prefix": "d",
						"ext_id": "110115000000",
						"ext_name": "大兴区"
					},
					{
						"id": "110116",
						"pid": 1101,
						"deep": 2,
						"name": "怀柔",
						"pinyin": "huai rou",
						"pinyin_prefix": "h",
						"ext_id": "110116000000",
						"ext_name": "怀柔区"
					},
					{
						"id": "110117",
						"pid": 1101,
						"deep": 2,
						"name": "平谷",
						"pinyin": "ping gu",
						"pinyin_prefix": "p",
						"ext_id": "110117000000",
						"ext_name": "平谷区"
					},
					{
						"id": "110118",
						"pid": 1101,
						"deep": 2,
						"name": "密云",
						"pinyin": "mi yun",
						"pinyin_prefix": "m",
						"ext_id": "110118000000",
						"ext_name": "密云区"
					},
					{
						"id": "110119",
						"pid": 1101,
						"deep": 2,
						"name": "延庆",
						"pinyin": "yan qing",
						"pinyin_prefix": "y",
						"ext_id": "110119000000",
						"ext_name": "延庆区"
					}
				]
			}
		]
	},
	{
		"id": "12",
		"pid": 0,
		"deep": 0,
		"name": "天津",
		"pinyin": "tian jin",
		"pinyin_prefix": "t",
		"ext_id": "120000000000",
		"ext_name": "天津市",
		"childs": [
			{
				"id": "1201",
				"pid": 12,
				"deep": 1,
				"name": "天津",
				"pinyin": "tian jin",
				"pinyin_prefix": "t",
				"ext_id": "120100000000",
				"ext_name": "天津市",
				"childs": [
					{
						"id": "120101",
						"pid": 1201,
						"deep": 2,
						"name": "和平",
						"pinyin": "he ping",
						"pinyin_prefix": "h",
						"ext_id": "120101000000",
						"ext_name": "和平区"
					},
					{
						"id": "120102",
						"pid": 1201,
						"deep": 2,
						"name": "河东",
						"pinyin": "he dong",
						"pinyin_prefix": "h",
						"ext_id": "120102000000",
						"ext_name": "河东区"
					},
					{
						"id": "120103",
						"pid": 1201,
						"deep": 2,
						"name": "河西",
						"pinyin": "he xi",
						"pinyin_prefix": "h",
						"ext_id": "120103000000",
						"ext_name": "河西区"
					},
					{
						"id": "120104",
						"pid": 1201,
						"deep": 2,
						"name": "南开",
						"pinyin": "nan kai",
						"pinyin_prefix": "n",
						"ext_id": "120104000000",
						"ext_name": "南开区"
					},
					{
						"id": "120105",
						"pid": 1201,
						"deep": 2,
						"name": "河北",
						"pinyin": "he bei",
						"pinyin_prefix": "h",
						"ext_id": "120105000000",
						"ext_name": "河北区"
					},
					{
						"id": "120106",
						"pid": 1201,
						"deep": 2,
						"name": "红桥",
						"pinyin": "hong qiao",
						"pinyin_prefix": "h",
						"ext_id": "120106000000",
						"ext_name": "红桥区"
					},
					{
						"id": "120110",
						"pid": 1201,
						"deep": 2,
						"name": "东丽",
						"pinyin": "dong li",
						"pinyin_prefix": "d",
						"ext_id": "120110000000",
						"ext_name": "东丽区"
					},
					{
						"id": "120111",
						"pid": 1201,
						"deep": 2,
						"name": "西青",
						"pinyin": "xi qing",
						"pinyin_prefix": "x",
						"ext_id": "120111000000",
						"ext_name": "西青区"
					},
					{
						"id": "120112",
						"pid": 1201,
						"deep": 2,
						"name": "津南",
						"pinyin": "jin nan",
						"pinyin_prefix": "j",
						"ext_id": "120112000000",
						"ext_name": "津南区"
					},
					{
						"id": "120113",
						"pid": 1201,
						"deep": 2,
						"name": "北辰",
						"pinyin": "bei chen",
						"pinyin_prefix": "b",
						"ext_id": "120113000000",
						"ext_name": "北辰区"
					},
					{
						"id": "120114",
						"pid": 1201,
						"deep": 2,
						"name": "武清",
						"pinyin": "wu qing",
						"pinyin_prefix": "w",
						"ext_id": "120114000000",
						"ext_name": "武清区"
					},
					{
						"id": "120115",
						"pid": 1201,
						"deep": 2,
						"name": "宝坻",
						"pinyin": "bao di",
						"pinyin_prefix": "b",
						"ext_id": "120115000000",
						"ext_name": "宝坻区"
					},
					{
						"id": "120116",
						"pid": 1201,
						"deep": 2,
						"name": "滨海新区",
						"pinyin": "bin hai xin qu",
						"pinyin_prefix": "b",
						"ext_id": "120116000000",
						"ext_name": "滨海新区"
					},
					{
						"id": "120117",
						"pid": 1201,
						"deep": 2,
						"name": "宁河",
						"pinyin": "ning he",
						"pinyin_prefix": "n",
						"ext_id": "120117000000",
						"ext_name": "宁河区"
					},
					{
						"id": "120118",
						"pid": 1201,
						"deep": 2,
						"name": "静海",
						"pinyin": "jing hai",
						"pinyin_prefix": "j",
						"ext_id": "120118000000",
						"ext_name": "静海区"
					},
					{
						"id": "120119",
						"pid": 1201,
						"deep": 2,
						"name": "蓟州",
						"pinyin": "ji zhou",
						"pinyin_prefix": "j",
						"ext_id": "120119000000",
						"ext_name": "蓟州区"
					}
				]
			}
		]
	},
	{
		"id": "13",
		"pid": 0,
		"deep": 0,
		"name": "河北",
		"pinyin": "he bei",
		"pinyin_prefix": "h",
		"ext_id": "130000000000",
		"ext_name": "河北省",
		"childs": [
			{
				"id": "1301",
				"pid": 13,
				"deep": 1,
				"name": "石家庄",
				"pinyin": "shi jia zhuang",
				"pinyin_prefix": "s",
				"ext_id": "130100000000",
				"ext_name": "石家庄市",
				"childs": [
					{
						"id": "130102",
						"pid": 1301,
						"deep": 2,
						"name": "长安",
						"pinyin": "chang an",
						"pinyin_prefix": "c",
						"ext_id": "130102000000",
						"ext_name": "长安区"
					},
					{
						"id": "130104",
						"pid": 1301,
						"deep": 2,
						"name": "桥西",
						"pinyin": "qiao xi",
						"pinyin_prefix": "q",
						"ext_id": "130104000000",
						"ext_name": "桥西区"
					},
					{
						"id": "130105",
						"pid": 1301,
						"deep": 2,
						"name": "新华",
						"pinyin": "xin hua",
						"pinyin_prefix": "x",
						"ext_id": "130105000000",
						"ext_name": "新华区"
					},
					{
						"id": "130107",
						"pid": 1301,
						"deep": 2,
						"name": "井陉矿区",
						"pinyin": "jing xing kuang qu",
						"pinyin_prefix": "j",
						"ext_id": "130107000000",
						"ext_name": "井陉矿区"
					},
					{
						"id": "130108",
						"pid": 1301,
						"deep": 2,
						"name": "裕华",
						"pinyin": "yu hua",
						"pinyin_prefix": "y",
						"ext_id": "130108000000",
						"ext_name": "裕华区"
					},
					{
						"id": "130109",
						"pid": 1301,
						"deep": 2,
						"name": "藁城",
						"pinyin": "gao cheng",
						"pinyin_prefix": "g",
						"ext_id": "130109000000",
						"ext_name": "藁城区"
					},
					{
						"id": "130110",
						"pid": 1301,
						"deep": 2,
						"name": "鹿泉",
						"pinyin": "lu quan",
						"pinyin_prefix": "l",
						"ext_id": "130110000000",
						"ext_name": "鹿泉区"
					},
					{
						"id": "130111",
						"pid": 1301,
						"deep": 2,
						"name": "栾城",
						"pinyin": "luan cheng",
						"pinyin_prefix": "l",
						"ext_id": "130111000000",
						"ext_name": "栾城区"
					},
					{
						"id": "130121",
						"pid": 1301,
						"deep": 2,
						"name": "井陉",
						"pinyin": "jing xing",
						"pinyin_prefix": "j",
						"ext_id": "130121000000",
						"ext_name": "井陉县"
					},
					{
						"id": "130123",
						"pid": 1301,
						"deep": 2,
						"name": "正定",
						"pinyin": "zheng ding",
						"pinyin_prefix": "z",
						"ext_id": "130123000000",
						"ext_name": "正定县"
					},
					{
						"id": "130125",
						"pid": 1301,
						"deep": 2,
						"name": "行唐",
						"pinyin": "xing tang",
						"pinyin_prefix": "x",
						"ext_id": "130125000000",
						"ext_name": "行唐县"
					},
					{
						"id": "130126",
						"pid": 1301,
						"deep": 2,
						"name": "灵寿",
						"pinyin": "ling shou",
						"pinyin_prefix": "l",
						"ext_id": "130126000000",
						"ext_name": "灵寿县"
					},
					{
						"id": "130127",
						"pid": 1301,
						"deep": 2,
						"name": "高邑",
						"pinyin": "gao yi",
						"pinyin_prefix": "g",
						"ext_id": "130127000000",
						"ext_name": "高邑县"
					},
					{
						"id": "130128",
						"pid": 1301,
						"deep": 2,
						"name": "深泽",
						"pinyin": "shen ze",
						"pinyin_prefix": "s",
						"ext_id": "130128000000",
						"ext_name": "深泽县"
					},
					{
						"id": "130129",
						"pid": 1301,
						"deep": 2,
						"name": "赞皇",
						"pinyin": "zan huang",
						"pinyin_prefix": "z",
						"ext_id": "130129000000",
						"ext_name": "赞皇县"
					},
					{
						"id": "130130",
						"pid": 1301,
						"deep": 2,
						"name": "无极",
						"pinyin": "wu ji",
						"pinyin_prefix": "w",
						"ext_id": "130130000000",
						"ext_name": "无极县"
					},
					{
						"id": "130131",
						"pid": 1301,
						"deep": 2,
						"name": "平山",
						"pinyin": "ping shan",
						"pinyin_prefix": "p",
						"ext_id": "130131000000",
						"ext_name": "平山县"
					},
					{
						"id": "130132",
						"pid": 1301,
						"deep": 2,
						"name": "元氏",
						"pinyin": "yuan shi",
						"pinyin_prefix": "y",
						"ext_id": "130132000000",
						"ext_name": "元氏县"
					},
					{
						"id": "130133",
						"pid": 1301,
						"deep": 2,
						"name": "赵县",
						"pinyin": "zhao xian",
						"pinyin_prefix": "z",
						"ext_id": "130133000000",
						"ext_name": "赵县"
					},
					{
						"id": "130181",
						"pid": 1301,
						"deep": 2,
						"name": "辛集",
						"pinyin": "xin ji",
						"pinyin_prefix": "x",
						"ext_id": "130181000000",
						"ext_name": "辛集市"
					},
					{
						"id": "130183",
						"pid": 1301,
						"deep": 2,
						"name": "晋州",
						"pinyin": "jin zhou",
						"pinyin_prefix": "j",
						"ext_id": "130183000000",
						"ext_name": "晋州市"
					},
					{
						"id": "130184",
						"pid": 1301,
						"deep": 2,
						"name": "新乐",
						"pinyin": "xin le",
						"pinyin_prefix": "x",
						"ext_id": "130184000000",
						"ext_name": "新乐市"
					}
				]
			},
			{
				"id": "1302",
				"pid": 13,
				"deep": 1,
				"name": "唐山",
				"pinyin": "tang shan",
				"pinyin_prefix": "t",
				"ext_id": "130200000000",
				"ext_name": "唐山市",
				"childs": [
					{
						"id": "130202",
						"pid": 1302,
						"deep": 2,
						"name": "路南",
						"pinyin": "lu nan",
						"pinyin_prefix": "l",
						"ext_id": "130202000000",
						"ext_name": "路南区"
					},
					{
						"id": "130203",
						"pid": 1302,
						"deep": 2,
						"name": "路北",
						"pinyin": "lu bei",
						"pinyin_prefix": "l",
						"ext_id": "130203000000",
						"ext_name": "路北区"
					},
					{
						"id": "130204",
						"pid": 1302,
						"deep": 2,
						"name": "古冶",
						"pinyin": "gu ye",
						"pinyin_prefix": "g",
						"ext_id": "130204000000",
						"ext_name": "古冶区"
					},
					{
						"id": "130205",
						"pid": 1302,
						"deep": 2,
						"name": "开平",
						"pinyin": "kai ping",
						"pinyin_prefix": "k",
						"ext_id": "130205000000",
						"ext_name": "开平区"
					},
					{
						"id": "130207",
						"pid": 1302,
						"deep": 2,
						"name": "丰南",
						"pinyin": "feng nan",
						"pinyin_prefix": "f",
						"ext_id": "130207000000",
						"ext_name": "丰南区"
					},
					{
						"id": "130208",
						"pid": 1302,
						"deep": 2,
						"name": "丰润",
						"pinyin": "feng run",
						"pinyin_prefix": "f",
						"ext_id": "130208000000",
						"ext_name": "丰润区"
					},
					{
						"id": "130209",
						"pid": 1302,
						"deep": 2,
						"name": "曹妃甸",
						"pinyin": "cao fei dian",
						"pinyin_prefix": "c",
						"ext_id": "130209000000",
						"ext_name": "曹妃甸区"
					},
					{
						"id": "130224",
						"pid": 1302,
						"deep": 2,
						"name": "滦南",
						"pinyin": "luan nan",
						"pinyin_prefix": "l",
						"ext_id": "130224000000",
						"ext_name": "滦南县"
					},
					{
						"id": "130225",
						"pid": 1302,
						"deep": 2,
						"name": "乐亭",
						"pinyin": "lao ting",
						"pinyin_prefix": "l",
						"ext_id": "130225000000",
						"ext_name": "乐亭县"
					},
					{
						"id": "130227",
						"pid": 1302,
						"deep": 2,
						"name": "迁西",
						"pinyin": "qian xi",
						"pinyin_prefix": "q",
						"ext_id": "130227000000",
						"ext_name": "迁西县"
					},
					{
						"id": "130229",
						"pid": 1302,
						"deep": 2,
						"name": "玉田",
						"pinyin": "yu tian",
						"pinyin_prefix": "y",
						"ext_id": "130229000000",
						"ext_name": "玉田县"
					},
					{
						"id": "130281",
						"pid": 1302,
						"deep": 2,
						"name": "遵化",
						"pinyin": "zun hua",
						"pinyin_prefix": "z",
						"ext_id": "130281000000",
						"ext_name": "遵化市"
					},
					{
						"id": "130283",
						"pid": 1302,
						"deep": 2,
						"name": "迁安",
						"pinyin": "qian an",
						"pinyin_prefix": "q",
						"ext_id": "130283000000",
						"ext_name": "迁安市"
					},
					{
						"id": "130284",
						"pid": 1302,
						"deep": 2,
						"name": "滦州",
						"pinyin": "luan zhou",
						"pinyin_prefix": "l",
						"ext_id": "130284000000",
						"ext_name": "滦州市"
					}
				]
			},
			{
				"id": "1303",
				"pid": 13,
				"deep": 1,
				"name": "秦皇岛",
				"pinyin": "qin huang dao",
				"pinyin_prefix": "q",
				"ext_id": "130300000000",
				"ext_name": "秦皇岛市",
				"childs": [
					{
						"id": "130302",
						"pid": 1303,
						"deep": 2,
						"name": "海港",
						"pinyin": "hai gang",
						"pinyin_prefix": "h",
						"ext_id": "130302000000",
						"ext_name": "海港区"
					},
					{
						"id": "130303",
						"pid": 1303,
						"deep": 2,
						"name": "山海关",
						"pinyin": "shan hai guan",
						"pinyin_prefix": "s",
						"ext_id": "130303000000",
						"ext_name": "山海关区"
					},
					{
						"id": "130304",
						"pid": 1303,
						"deep": 2,
						"name": "北戴河",
						"pinyin": "bei dai he",
						"pinyin_prefix": "b",
						"ext_id": "130304000000",
						"ext_name": "北戴河区"
					},
					{
						"id": "130306",
						"pid": 1303,
						"deep": 2,
						"name": "抚宁",
						"pinyin": "fu ning",
						"pinyin_prefix": "f",
						"ext_id": "130306000000",
						"ext_name": "抚宁区"
					},
					{
						"id": "130321",
						"pid": 1303,
						"deep": 2,
						"name": "青龙",
						"pinyin": "qing long",
						"pinyin_prefix": "q",
						"ext_id": "130321000000",
						"ext_name": "青龙满族自治县"
					},
					{
						"id": "130322",
						"pid": 1303,
						"deep": 2,
						"name": "昌黎",
						"pinyin": "chang li",
						"pinyin_prefix": "c",
						"ext_id": "130322000000",
						"ext_name": "昌黎县"
					},
					{
						"id": "130324",
						"pid": 1303,
						"deep": 2,
						"name": "卢龙",
						"pinyin": "lu long",
						"pinyin_prefix": "l",
						"ext_id": "130324000000",
						"ext_name": "卢龙县"
					}
				]
			},
			{
				"id": "1304",
				"pid": 13,
				"deep": 1,
				"name": "邯郸",
				"pinyin": "han dan",
				"pinyin_prefix": "h",
				"ext_id": "130400000000",
				"ext_name": "邯郸市",
				"childs": [
					{
						"id": "130402",
						"pid": 1304,
						"deep": 2,
						"name": "邯山",
						"pinyin": "han shan",
						"pinyin_prefix": "h",
						"ext_id": "130402000000",
						"ext_name": "邯山区"
					},
					{
						"id": "130403",
						"pid": 1304,
						"deep": 2,
						"name": "丛台",
						"pinyin": "cong tai",
						"pinyin_prefix": "c",
						"ext_id": "130403000000",
						"ext_name": "丛台区"
					},
					{
						"id": "130404",
						"pid": 1304,
						"deep": 2,
						"name": "复兴",
						"pinyin": "fu xing",
						"pinyin_prefix": "f",
						"ext_id": "130404000000",
						"ext_name": "复兴区"
					},
					{
						"id": "130406",
						"pid": 1304,
						"deep": 2,
						"name": "峰峰矿区",
						"pinyin": "feng feng kuang qu",
						"pinyin_prefix": "f",
						"ext_id": "130406000000",
						"ext_name": "峰峰矿区"
					},
					{
						"id": "130407",
						"pid": 1304,
						"deep": 2,
						"name": "肥乡",
						"pinyin": "fei xiang",
						"pinyin_prefix": "f",
						"ext_id": "130407000000",
						"ext_name": "肥乡区"
					},
					{
						"id": "130408",
						"pid": 1304,
						"deep": 2,
						"name": "永年",
						"pinyin": "yong nian",
						"pinyin_prefix": "y",
						"ext_id": "130408000000",
						"ext_name": "永年区"
					},
					{
						"id": "130423",
						"pid": 1304,
						"deep": 2,
						"name": "临漳",
						"pinyin": "lin zhang",
						"pinyin_prefix": "l",
						"ext_id": "130423000000",
						"ext_name": "临漳县"
					},
					{
						"id": "130424",
						"pid": 1304,
						"deep": 2,
						"name": "成安",
						"pinyin": "cheng an",
						"pinyin_prefix": "c",
						"ext_id": "130424000000",
						"ext_name": "成安县"
					},
					{
						"id": "130425",
						"pid": 1304,
						"deep": 2,
						"name": "大名",
						"pinyin": "da ming",
						"pinyin_prefix": "d",
						"ext_id": "130425000000",
						"ext_name": "大名县"
					},
					{
						"id": "130426",
						"pid": 1304,
						"deep": 2,
						"name": "涉县",
						"pinyin": "she xian",
						"pinyin_prefix": "s",
						"ext_id": "130426000000",
						"ext_name": "涉县"
					},
					{
						"id": "130427",
						"pid": 1304,
						"deep": 2,
						"name": "磁县",
						"pinyin": "ci xian",
						"pinyin_prefix": "c",
						"ext_id": "130427000000",
						"ext_name": "磁县"
					},
					{
						"id": "130430",
						"pid": 1304,
						"deep": 2,
						"name": "邱县",
						"pinyin": "qiu xian",
						"pinyin_prefix": "q",
						"ext_id": "130430000000",
						"ext_name": "邱县"
					},
					{
						"id": "130431",
						"pid": 1304,
						"deep": 2,
						"name": "鸡泽",
						"pinyin": "ji ze",
						"pinyin_prefix": "j",
						"ext_id": "130431000000",
						"ext_name": "鸡泽县"
					},
					{
						"id": "130432",
						"pid": 1304,
						"deep": 2,
						"name": "广平",
						"pinyin": "guang ping",
						"pinyin_prefix": "g",
						"ext_id": "130432000000",
						"ext_name": "广平县"
					},
					{
						"id": "130433",
						"pid": 1304,
						"deep": 2,
						"name": "馆陶",
						"pinyin": "guan tao",
						"pinyin_prefix": "g",
						"ext_id": "130433000000",
						"ext_name": "馆陶县"
					},
					{
						"id": "130434",
						"pid": 1304,
						"deep": 2,
						"name": "魏县",
						"pinyin": "wei xian",
						"pinyin_prefix": "w",
						"ext_id": "130434000000",
						"ext_name": "魏县"
					},
					{
						"id": "130435",
						"pid": 1304,
						"deep": 2,
						"name": "曲周",
						"pinyin": "qu zhou",
						"pinyin_prefix": "q",
						"ext_id": "130435000000",
						"ext_name": "曲周县"
					},
					{
						"id": "130481",
						"pid": 1304,
						"deep": 2,
						"name": "武安",
						"pinyin": "wu an",
						"pinyin_prefix": "w",
						"ext_id": "130481000000",
						"ext_name": "武安市"
					}
				]
			},
			{
				"id": "1305",
				"pid": 13,
				"deep": 1,
				"name": "邢台",
				"pinyin": "xing tai",
				"pinyin_prefix": "x",
				"ext_id": "130500000000",
				"ext_name": "邢台市",
				"childs": [
					{
						"id": "130502",
						"pid": 1305,
						"deep": 2,
						"name": "襄都",
						"pinyin": "xiang du",
						"pinyin_prefix": "x",
						"ext_id": "130502000000",
						"ext_name": "襄都区"
					},
					{
						"id": "130503",
						"pid": 1305,
						"deep": 2,
						"name": "信都",
						"pinyin": "xin du",
						"pinyin_prefix": "x",
						"ext_id": "130503000000",
						"ext_name": "信都区"
					},
					{
						"id": "130505",
						"pid": 1305,
						"deep": 2,
						"name": "任泽",
						"pinyin": "ren ze",
						"pinyin_prefix": "r",
						"ext_id": "130505000000",
						"ext_name": "任泽区"
					},
					{
						"id": "130506",
						"pid": 1305,
						"deep": 2,
						"name": "南和",
						"pinyin": "nan he",
						"pinyin_prefix": "n",
						"ext_id": "130506000000",
						"ext_name": "南和区"
					},
					{
						"id": "130522",
						"pid": 1305,
						"deep": 2,
						"name": "临城",
						"pinyin": "lin cheng",
						"pinyin_prefix": "l",
						"ext_id": "130522000000",
						"ext_name": "临城县"
					},
					{
						"id": "130523",
						"pid": 1305,
						"deep": 2,
						"name": "内丘",
						"pinyin": "nei qiu",
						"pinyin_prefix": "n",
						"ext_id": "130523000000",
						"ext_name": "内丘县"
					},
					{
						"id": "130524",
						"pid": 1305,
						"deep": 2,
						"name": "柏乡",
						"pinyin": "bai xiang",
						"pinyin_prefix": "b",
						"ext_id": "130524000000",
						"ext_name": "柏乡县"
					},
					{
						"id": "130525",
						"pid": 1305,
						"deep": 2,
						"name": "隆尧",
						"pinyin": "long yao",
						"pinyin_prefix": "l",
						"ext_id": "130525000000",
						"ext_name": "隆尧县"
					},
					{
						"id": "130528",
						"pid": 1305,
						"deep": 2,
						"name": "宁晋",
						"pinyin": "ning jin",
						"pinyin_prefix": "n",
						"ext_id": "130528000000",
						"ext_name": "宁晋县"
					},
					{
						"id": "130529",
						"pid": 1305,
						"deep": 2,
						"name": "巨鹿",
						"pinyin": "ju lu",
						"pinyin_prefix": "j",
						"ext_id": "130529000000",
						"ext_name": "巨鹿县"
					},
					{
						"id": "130530",
						"pid": 1305,
						"deep": 2,
						"name": "新河",
						"pinyin": "xin he",
						"pinyin_prefix": "x",
						"ext_id": "130530000000",
						"ext_name": "新河县"
					},
					{
						"id": "130531",
						"pid": 1305,
						"deep": 2,
						"name": "广宗",
						"pinyin": "guang zong",
						"pinyin_prefix": "g",
						"ext_id": "130531000000",
						"ext_name": "广宗县"
					},
					{
						"id": "130532",
						"pid": 1305,
						"deep": 2,
						"name": "平乡",
						"pinyin": "ping xiang",
						"pinyin_prefix": "p",
						"ext_id": "130532000000",
						"ext_name": "平乡县"
					},
					{
						"id": "130533",
						"pid": 1305,
						"deep": 2,
						"name": "威县",
						"pinyin": "wei xian",
						"pinyin_prefix": "w",
						"ext_id": "130533000000",
						"ext_name": "威县"
					},
					{
						"id": "130534",
						"pid": 1305,
						"deep": 2,
						"name": "清河",
						"pinyin": "qing he",
						"pinyin_prefix": "q",
						"ext_id": "130534000000",
						"ext_name": "清河县"
					},
					{
						"id": "130535",
						"pid": 1305,
						"deep": 2,
						"name": "临西",
						"pinyin": "lin xi",
						"pinyin_prefix": "l",
						"ext_id": "130535000000",
						"ext_name": "临西县"
					},
					{
						"id": "130581",
						"pid": 1305,
						"deep": 2,
						"name": "南宫",
						"pinyin": "nan gong",
						"pinyin_prefix": "n",
						"ext_id": "130581000000",
						"ext_name": "南宫市"
					},
					{
						"id": "130582",
						"pid": 1305,
						"deep": 2,
						"name": "沙河",
						"pinyin": "sha he",
						"pinyin_prefix": "s",
						"ext_id": "130582000000",
						"ext_name": "沙河市"
					}
				]
			},
			{
				"id": "1306",
				"pid": 13,
				"deep": 1,
				"name": "保定",
				"pinyin": "bao ding",
				"pinyin_prefix": "b",
				"ext_id": "130600000000",
				"ext_name": "保定市",
				"childs": [
					{
						"id": "130602",
						"pid": 1306,
						"deep": 2,
						"name": "竞秀",
						"pinyin": "jing xiu",
						"pinyin_prefix": "j",
						"ext_id": "130602000000",
						"ext_name": "竞秀区"
					},
					{
						"id": "130606",
						"pid": 1306,
						"deep": 2,
						"name": "莲池",
						"pinyin": "lian chi",
						"pinyin_prefix": "l",
						"ext_id": "130606000000",
						"ext_name": "莲池区"
					},
					{
						"id": "130607",
						"pid": 1306,
						"deep": 2,
						"name": "满城",
						"pinyin": "man cheng",
						"pinyin_prefix": "m",
						"ext_id": "130607000000",
						"ext_name": "满城区"
					},
					{
						"id": "130608",
						"pid": 1306,
						"deep": 2,
						"name": "清苑",
						"pinyin": "qing yuan",
						"pinyin_prefix": "q",
						"ext_id": "130608000000",
						"ext_name": "清苑区"
					},
					{
						"id": "130609",
						"pid": 1306,
						"deep": 2,
						"name": "徐水",
						"pinyin": "xu shui",
						"pinyin_prefix": "x",
						"ext_id": "130609000000",
						"ext_name": "徐水区"
					},
					{
						"id": "130623",
						"pid": 1306,
						"deep": 2,
						"name": "涞水",
						"pinyin": "lai shui",
						"pinyin_prefix": "l",
						"ext_id": "130623000000",
						"ext_name": "涞水县"
					},
					{
						"id": "130624",
						"pid": 1306,
						"deep": 2,
						"name": "阜平",
						"pinyin": "fu ping",
						"pinyin_prefix": "f",
						"ext_id": "130624000000",
						"ext_name": "阜平县"
					},
					{
						"id": "130626",
						"pid": 1306,
						"deep": 2,
						"name": "定兴",
						"pinyin": "ding xing",
						"pinyin_prefix": "d",
						"ext_id": "130626000000",
						"ext_name": "定兴县"
					},
					{
						"id": "130627",
						"pid": 1306,
						"deep": 2,
						"name": "唐县",
						"pinyin": "tang xian",
						"pinyin_prefix": "t",
						"ext_id": "130627000000",
						"ext_name": "唐县"
					},
					{
						"id": "130628",
						"pid": 1306,
						"deep": 2,
						"name": "高阳",
						"pinyin": "gao yang",
						"pinyin_prefix": "g",
						"ext_id": "130628000000",
						"ext_name": "高阳县"
					},
					{
						"id": "130629",
						"pid": 1306,
						"deep": 2,
						"name": "容城",
						"pinyin": "rong cheng",
						"pinyin_prefix": "r",
						"ext_id": "130629000000",
						"ext_name": "容城县"
					},
					{
						"id": "130630",
						"pid": 1306,
						"deep": 2,
						"name": "涞源",
						"pinyin": "lai yuan",
						"pinyin_prefix": "l",
						"ext_id": "130630000000",
						"ext_name": "涞源县"
					},
					{
						"id": "130631",
						"pid": 1306,
						"deep": 2,
						"name": "望都",
						"pinyin": "wang du",
						"pinyin_prefix": "w",
						"ext_id": "130631000000",
						"ext_name": "望都县"
					},
					{
						"id": "130632",
						"pid": 1306,
						"deep": 2,
						"name": "安新",
						"pinyin": "an xin",
						"pinyin_prefix": "a",
						"ext_id": "130632000000",
						"ext_name": "安新县"
					},
					{
						"id": "130633",
						"pid": 1306,
						"deep": 2,
						"name": "易县",
						"pinyin": "yi xian",
						"pinyin_prefix": "y",
						"ext_id": "130633000000",
						"ext_name": "易县"
					},
					{
						"id": "130634",
						"pid": 1306,
						"deep": 2,
						"name": "曲阳",
						"pinyin": "qu yang",
						"pinyin_prefix": "q",
						"ext_id": "130634000000",
						"ext_name": "曲阳县"
					},
					{
						"id": "130635",
						"pid": 1306,
						"deep": 2,
						"name": "蠡县",
						"pinyin": "li xian",
						"pinyin_prefix": "l",
						"ext_id": "130635000000",
						"ext_name": "蠡县"
					},
					{
						"id": "130636",
						"pid": 1306,
						"deep": 2,
						"name": "顺平",
						"pinyin": "shun ping",
						"pinyin_prefix": "s",
						"ext_id": "130636000000",
						"ext_name": "顺平县"
					},
					{
						"id": "130637",
						"pid": 1306,
						"deep": 2,
						"name": "博野",
						"pinyin": "bo ye",
						"pinyin_prefix": "b",
						"ext_id": "130637000000",
						"ext_name": "博野县"
					},
					{
						"id": "130638",
						"pid": 1306,
						"deep": 2,
						"name": "雄县",
						"pinyin": "xiong xian",
						"pinyin_prefix": "x",
						"ext_id": "130638000000",
						"ext_name": "雄县"
					},
					{
						"id": "130681",
						"pid": 1306,
						"deep": 2,
						"name": "涿州",
						"pinyin": "zhuo zhou",
						"pinyin_prefix": "z",
						"ext_id": "130681000000",
						"ext_name": "涿州市"
					},
					{
						"id": "130682",
						"pid": 1306,
						"deep": 2,
						"name": "定州",
						"pinyin": "ding zhou",
						"pinyin_prefix": "d",
						"ext_id": "130682000000",
						"ext_name": "定州市"
					},
					{
						"id": "130683",
						"pid": 1306,
						"deep": 2,
						"name": "安国",
						"pinyin": "an guo",
						"pinyin_prefix": "a",
						"ext_id": "130683000000",
						"ext_name": "安国市"
					},
					{
						"id": "130684",
						"pid": 1306,
						"deep": 2,
						"name": "高碑店",
						"pinyin": "gao bei dian",
						"pinyin_prefix": "g",
						"ext_id": "130684000000",
						"ext_name": "高碑店市"
					}
				]
			},
			{
				"id": "1307",
				"pid": 13,
				"deep": 1,
				"name": "张家口",
				"pinyin": "zhang jia kou",
				"pinyin_prefix": "z",
				"ext_id": "130700000000",
				"ext_name": "张家口市",
				"childs": [
					{
						"id": "130702",
						"pid": 1307,
						"deep": 2,
						"name": "桥东",
						"pinyin": "qiao dong",
						"pinyin_prefix": "q",
						"ext_id": "130702000000",
						"ext_name": "桥东区"
					},
					{
						"id": "130703",
						"pid": 1307,
						"deep": 2,
						"name": "桥西",
						"pinyin": "qiao xi",
						"pinyin_prefix": "q",
						"ext_id": "130703000000",
						"ext_name": "桥西区"
					},
					{
						"id": "130705",
						"pid": 1307,
						"deep": 2,
						"name": "宣化",
						"pinyin": "xuan hua",
						"pinyin_prefix": "x",
						"ext_id": "130705000000",
						"ext_name": "宣化区"
					},
					{
						"id": "130706",
						"pid": 1307,
						"deep": 2,
						"name": "下花园",
						"pinyin": "xia hua yuan",
						"pinyin_prefix": "x",
						"ext_id": "130706000000",
						"ext_name": "下花园区"
					},
					{
						"id": "130708",
						"pid": 1307,
						"deep": 2,
						"name": "万全",
						"pinyin": "wan quan",
						"pinyin_prefix": "w",
						"ext_id": "130708000000",
						"ext_name": "万全区"
					},
					{
						"id": "130709",
						"pid": 1307,
						"deep": 2,
						"name": "崇礼",
						"pinyin": "chong li",
						"pinyin_prefix": "c",
						"ext_id": "130709000000",
						"ext_name": "崇礼区"
					},
					{
						"id": "130722",
						"pid": 1307,
						"deep": 2,
						"name": "张北",
						"pinyin": "zhang bei",
						"pinyin_prefix": "z",
						"ext_id": "130722000000",
						"ext_name": "张北县"
					},
					{
						"id": "130723",
						"pid": 1307,
						"deep": 2,
						"name": "康保",
						"pinyin": "kang bao",
						"pinyin_prefix": "k",
						"ext_id": "130723000000",
						"ext_name": "康保县"
					},
					{
						"id": "130724",
						"pid": 1307,
						"deep": 2,
						"name": "沽源",
						"pinyin": "gu yuan",
						"pinyin_prefix": "g",
						"ext_id": "130724000000",
						"ext_name": "沽源县"
					},
					{
						"id": "130725",
						"pid": 1307,
						"deep": 2,
						"name": "尚义",
						"pinyin": "shang yi",
						"pinyin_prefix": "s",
						"ext_id": "130725000000",
						"ext_name": "尚义县"
					},
					{
						"id": "130726",
						"pid": 1307,
						"deep": 2,
						"name": "蔚县",
						"pinyin": "yu xian",
						"pinyin_prefix": "y",
						"ext_id": "130726000000",
						"ext_name": "蔚县"
					},
					{
						"id": "130727",
						"pid": 1307,
						"deep": 2,
						"name": "阳原",
						"pinyin": "yang yuan",
						"pinyin_prefix": "y",
						"ext_id": "130727000000",
						"ext_name": "阳原县"
					},
					{
						"id": "130728",
						"pid": 1307,
						"deep": 2,
						"name": "怀安",
						"pinyin": "huai an",
						"pinyin_prefix": "h",
						"ext_id": "130728000000",
						"ext_name": "怀安县"
					},
					{
						"id": "130730",
						"pid": 1307,
						"deep": 2,
						"name": "怀来",
						"pinyin": "huai lai",
						"pinyin_prefix": "h",
						"ext_id": "130730000000",
						"ext_name": "怀来县"
					},
					{
						"id": "130731",
						"pid": 1307,
						"deep": 2,
						"name": "涿鹿",
						"pinyin": "zhuo lu",
						"pinyin_prefix": "z",
						"ext_id": "130731000000",
						"ext_name": "涿鹿县"
					},
					{
						"id": "130732",
						"pid": 1307,
						"deep": 2,
						"name": "赤城",
						"pinyin": "chi cheng",
						"pinyin_prefix": "c",
						"ext_id": "130732000000",
						"ext_name": "赤城县"
					}
				]
			},
			{
				"id": "1308",
				"pid": 13,
				"deep": 1,
				"name": "承德",
				"pinyin": "cheng de",
				"pinyin_prefix": "c",
				"ext_id": "130800000000",
				"ext_name": "承德市",
				"childs": [
					{
						"id": "130802",
						"pid": 1308,
						"deep": 2,
						"name": "双桥",
						"pinyin": "shuang qiao",
						"pinyin_prefix": "s",
						"ext_id": "130802000000",
						"ext_name": "双桥区"
					},
					{
						"id": "130803",
						"pid": 1308,
						"deep": 2,
						"name": "双滦",
						"pinyin": "shuang luan",
						"pinyin_prefix": "s",
						"ext_id": "130803000000",
						"ext_name": "双滦区"
					},
					{
						"id": "130804",
						"pid": 1308,
						"deep": 2,
						"name": "鹰手营子矿区",
						"pinyin": "ying shou ying zi kuang qu",
						"pinyin_prefix": "y",
						"ext_id": "130804000000",
						"ext_name": "鹰手营子矿区"
					},
					{
						"id": "130821",
						"pid": 1308,
						"deep": 2,
						"name": "承德县",
						"pinyin": "cheng de xian",
						"pinyin_prefix": "c",
						"ext_id": "130821000000",
						"ext_name": "承德县"
					},
					{
						"id": "130822",
						"pid": 1308,
						"deep": 2,
						"name": "兴隆",
						"pinyin": "xing long",
						"pinyin_prefix": "x",
						"ext_id": "130822000000",
						"ext_name": "兴隆县"
					},
					{
						"id": "130824",
						"pid": 1308,
						"deep": 2,
						"name": "滦平",
						"pinyin": "luan ping",
						"pinyin_prefix": "l",
						"ext_id": "130824000000",
						"ext_name": "滦平县"
					},
					{
						"id": "130825",
						"pid": 1308,
						"deep": 2,
						"name": "隆化",
						"pinyin": "long hua",
						"pinyin_prefix": "l",
						"ext_id": "130825000000",
						"ext_name": "隆化县"
					},
					{
						"id": "130826",
						"pid": 1308,
						"deep": 2,
						"name": "丰宁",
						"pinyin": "feng ning",
						"pinyin_prefix": "f",
						"ext_id": "130826000000",
						"ext_name": "丰宁满族自治县"
					},
					{
						"id": "130827",
						"pid": 1308,
						"deep": 2,
						"name": "宽城",
						"pinyin": "kuan cheng",
						"pinyin_prefix": "k",
						"ext_id": "130827000000",
						"ext_name": "宽城满族自治县"
					},
					{
						"id": "130828",
						"pid": 1308,
						"deep": 2,
						"name": "围场",
						"pinyin": "wei chang",
						"pinyin_prefix": "w",
						"ext_id": "130828000000",
						"ext_name": "围场满族蒙古族自治县"
					},
					{
						"id": "130881",
						"pid": 1308,
						"deep": 2,
						"name": "平泉",
						"pinyin": "ping quan",
						"pinyin_prefix": "p",
						"ext_id": "130881000000",
						"ext_name": "平泉市"
					}
				]
			},
			{
				"id": "1309",
				"pid": 13,
				"deep": 1,
				"name": "沧州",
				"pinyin": "cang zhou",
				"pinyin_prefix": "c",
				"ext_id": "130900000000",
				"ext_name": "沧州市",
				"childs": [
					{
						"id": "130902",
						"pid": 1309,
						"deep": 2,
						"name": "新华",
						"pinyin": "xin hua",
						"pinyin_prefix": "x",
						"ext_id": "130902000000",
						"ext_name": "新华区"
					},
					{
						"id": "130903",
						"pid": 1309,
						"deep": 2,
						"name": "运河",
						"pinyin": "yun he",
						"pinyin_prefix": "y",
						"ext_id": "130903000000",
						"ext_name": "运河区"
					},
					{
						"id": "130921",
						"pid": 1309,
						"deep": 2,
						"name": "沧县",
						"pinyin": "cang xian",
						"pinyin_prefix": "c",
						"ext_id": "130921000000",
						"ext_name": "沧县"
					},
					{
						"id": "130922",
						"pid": 1309,
						"deep": 2,
						"name": "青县",
						"pinyin": "qing xian",
						"pinyin_prefix": "q",
						"ext_id": "130922000000",
						"ext_name": "青县"
					},
					{
						"id": "130923",
						"pid": 1309,
						"deep": 2,
						"name": "东光",
						"pinyin": "dong guang",
						"pinyin_prefix": "d",
						"ext_id": "130923000000",
						"ext_name": "东光县"
					},
					{
						"id": "130924",
						"pid": 1309,
						"deep": 2,
						"name": "海兴",
						"pinyin": "hai xing",
						"pinyin_prefix": "h",
						"ext_id": "130924000000",
						"ext_name": "海兴县"
					},
					{
						"id": "130925",
						"pid": 1309,
						"deep": 2,
						"name": "盐山",
						"pinyin": "yan shan",
						"pinyin_prefix": "y",
						"ext_id": "130925000000",
						"ext_name": "盐山县"
					},
					{
						"id": "130926",
						"pid": 1309,
						"deep": 2,
						"name": "肃宁",
						"pinyin": "su ning",
						"pinyin_prefix": "s",
						"ext_id": "130926000000",
						"ext_name": "肃宁县"
					},
					{
						"id": "130927",
						"pid": 1309,
						"deep": 2,
						"name": "南皮",
						"pinyin": "nan pi",
						"pinyin_prefix": "n",
						"ext_id": "130927000000",
						"ext_name": "南皮县"
					},
					{
						"id": "130928",
						"pid": 1309,
						"deep": 2,
						"name": "吴桥",
						"pinyin": "wu qiao",
						"pinyin_prefix": "w",
						"ext_id": "130928000000",
						"ext_name": "吴桥县"
					},
					{
						"id": "130929",
						"pid": 1309,
						"deep": 2,
						"name": "献县",
						"pinyin": "xian xian",
						"pinyin_prefix": "x",
						"ext_id": "130929000000",
						"ext_name": "献县"
					},
					{
						"id": "130930",
						"pid": 1309,
						"deep": 2,
						"name": "孟村",
						"pinyin": "meng cun",
						"pinyin_prefix": "m",
						"ext_id": "130930000000",
						"ext_name": "孟村回族自治县"
					},
					{
						"id": "130981",
						"pid": 1309,
						"deep": 2,
						"name": "泊头",
						"pinyin": "bo tou",
						"pinyin_prefix": "b",
						"ext_id": "130981000000",
						"ext_name": "泊头市"
					},
					{
						"id": "130982",
						"pid": 1309,
						"deep": 2,
						"name": "任丘",
						"pinyin": "ren qiu",
						"pinyin_prefix": "r",
						"ext_id": "130982000000",
						"ext_name": "任丘市"
					},
					{
						"id": "130983",
						"pid": 1309,
						"deep": 2,
						"name": "黄骅",
						"pinyin": "huang hua",
						"pinyin_prefix": "h",
						"ext_id": "130983000000",
						"ext_name": "黄骅市"
					},
					{
						"id": "130984",
						"pid": 1309,
						"deep": 2,
						"name": "河间",
						"pinyin": "he jian",
						"pinyin_prefix": "h",
						"ext_id": "130984000000",
						"ext_name": "河间市"
					}
				]
			},
			{
				"id": "1310",
				"pid": 13,
				"deep": 1,
				"name": "廊坊",
				"pinyin": "lang fang",
				"pinyin_prefix": "l",
				"ext_id": "131000000000",
				"ext_name": "廊坊市",
				"childs": [
					{
						"id": "131002",
						"pid": 1310,
						"deep": 2,
						"name": "安次",
						"pinyin": "an ci",
						"pinyin_prefix": "a",
						"ext_id": "131002000000",
						"ext_name": "安次区"
					},
					{
						"id": "131003",
						"pid": 1310,
						"deep": 2,
						"name": "广阳",
						"pinyin": "guang yang",
						"pinyin_prefix": "g",
						"ext_id": "131003000000",
						"ext_name": "广阳区"
					},
					{
						"id": "131022",
						"pid": 1310,
						"deep": 2,
						"name": "固安",
						"pinyin": "gu an",
						"pinyin_prefix": "g",
						"ext_id": "131022000000",
						"ext_name": "固安县"
					},
					{
						"id": "131023",
						"pid": 1310,
						"deep": 2,
						"name": "永清",
						"pinyin": "yong qing",
						"pinyin_prefix": "y",
						"ext_id": "131023000000",
						"ext_name": "永清县"
					},
					{
						"id": "131024",
						"pid": 1310,
						"deep": 2,
						"name": "香河",
						"pinyin": "xiang he",
						"pinyin_prefix": "x",
						"ext_id": "131024000000",
						"ext_name": "香河县"
					},
					{
						"id": "131025",
						"pid": 1310,
						"deep": 2,
						"name": "大城",
						"pinyin": "da cheng",
						"pinyin_prefix": "d",
						"ext_id": "131025000000",
						"ext_name": "大城县"
					},
					{
						"id": "131026",
						"pid": 1310,
						"deep": 2,
						"name": "文安",
						"pinyin": "wen an",
						"pinyin_prefix": "w",
						"ext_id": "131026000000",
						"ext_name": "文安县"
					},
					{
						"id": "131028",
						"pid": 1310,
						"deep": 2,
						"name": "大厂",
						"pinyin": "da chang",
						"pinyin_prefix": "d",
						"ext_id": "131028000000",
						"ext_name": "大厂回族自治县"
					},
					{
						"id": "131081",
						"pid": 1310,
						"deep": 2,
						"name": "霸州",
						"pinyin": "ba zhou",
						"pinyin_prefix": "b",
						"ext_id": "131081000000",
						"ext_name": "霸州市"
					},
					{
						"id": "131082",
						"pid": 1310,
						"deep": 2,
						"name": "三河",
						"pinyin": "san he",
						"pinyin_prefix": "s",
						"ext_id": "131082000000",
						"ext_name": "三河市"
					}
				]
			},
			{
				"id": "1311",
				"pid": 13,
				"deep": 1,
				"name": "衡水",
				"pinyin": "heng shui",
				"pinyin_prefix": "h",
				"ext_id": "131100000000",
				"ext_name": "衡水市",
				"childs": [
					{
						"id": "131102",
						"pid": 1311,
						"deep": 2,
						"name": "桃城",
						"pinyin": "tao cheng",
						"pinyin_prefix": "t",
						"ext_id": "131102000000",
						"ext_name": "桃城区"
					},
					{
						"id": "131103",
						"pid": 1311,
						"deep": 2,
						"name": "冀州",
						"pinyin": "ji zhou",
						"pinyin_prefix": "j",
						"ext_id": "131103000000",
						"ext_name": "冀州区"
					},
					{
						"id": "131121",
						"pid": 1311,
						"deep": 2,
						"name": "枣强",
						"pinyin": "zao qiang",
						"pinyin_prefix": "z",
						"ext_id": "131121000000",
						"ext_name": "枣强县"
					},
					{
						"id": "131122",
						"pid": 1311,
						"deep": 2,
						"name": "武邑",
						"pinyin": "wu yi",
						"pinyin_prefix": "w",
						"ext_id": "131122000000",
						"ext_name": "武邑县"
					},
					{
						"id": "131123",
						"pid": 1311,
						"deep": 2,
						"name": "武强",
						"pinyin": "wu qiang",
						"pinyin_prefix": "w",
						"ext_id": "131123000000",
						"ext_name": "武强县"
					},
					{
						"id": "131124",
						"pid": 1311,
						"deep": 2,
						"name": "饶阳",
						"pinyin": "rao yang",
						"pinyin_prefix": "r",
						"ext_id": "131124000000",
						"ext_name": "饶阳县"
					},
					{
						"id": "131125",
						"pid": 1311,
						"deep": 2,
						"name": "安平",
						"pinyin": "an ping",
						"pinyin_prefix": "a",
						"ext_id": "131125000000",
						"ext_name": "安平县"
					},
					{
						"id": "131126",
						"pid": 1311,
						"deep": 2,
						"name": "故城",
						"pinyin": "gu cheng",
						"pinyin_prefix": "g",
						"ext_id": "131126000000",
						"ext_name": "故城县"
					},
					{
						"id": "131127",
						"pid": 1311,
						"deep": 2,
						"name": "景县",
						"pinyin": "jing xian",
						"pinyin_prefix": "j",
						"ext_id": "131127000000",
						"ext_name": "景县"
					},
					{
						"id": "131128",
						"pid": 1311,
						"deep": 2,
						"name": "阜城",
						"pinyin": "fu cheng",
						"pinyin_prefix": "f",
						"ext_id": "131128000000",
						"ext_name": "阜城县"
					},
					{
						"id": "131182",
						"pid": 1311,
						"deep": 2,
						"name": "深州",
						"pinyin": "shen zhou",
						"pinyin_prefix": "s",
						"ext_id": "131182000000",
						"ext_name": "深州市"
					}
				]
			}
		]
	},
	{
		"id": "14",
		"pid": 0,
		"deep": 0,
		"name": "山西",
		"pinyin": "shan xi",
		"pinyin_prefix": "s",
		"ext_id": "140000000000",
		"ext_name": "山西省",
		"childs": [
			{
				"id": "1401",
				"pid": 14,
				"deep": 1,
				"name": "太原",
				"pinyin": "tai yuan",
				"pinyin_prefix": "t",
				"ext_id": "140100000000",
				"ext_name": "太原市",
				"childs": [
					{
						"id": "140105",
						"pid": 1401,
						"deep": 2,
						"name": "小店",
						"pinyin": "xiao dian",
						"pinyin_prefix": "x",
						"ext_id": "140105000000",
						"ext_name": "小店区"
					},
					{
						"id": "140106",
						"pid": 1401,
						"deep": 2,
						"name": "迎泽",
						"pinyin": "ying ze",
						"pinyin_prefix": "y",
						"ext_id": "140106000000",
						"ext_name": "迎泽区"
					},
					{
						"id": "140107",
						"pid": 1401,
						"deep": 2,
						"name": "杏花岭",
						"pinyin": "xing hua ling",
						"pinyin_prefix": "x",
						"ext_id": "140107000000",
						"ext_name": "杏花岭区"
					},
					{
						"id": "140108",
						"pid": 1401,
						"deep": 2,
						"name": "尖草坪",
						"pinyin": "jian cao ping",
						"pinyin_prefix": "j",
						"ext_id": "140108000000",
						"ext_name": "尖草坪区"
					},
					{
						"id": "140109",
						"pid": 1401,
						"deep": 2,
						"name": "万柏林",
						"pinyin": "wan bai lin",
						"pinyin_prefix": "w",
						"ext_id": "140109000000",
						"ext_name": "万柏林区"
					},
					{
						"id": "140110",
						"pid": 1401,
						"deep": 2,
						"name": "晋源",
						"pinyin": "jin yuan",
						"pinyin_prefix": "j",
						"ext_id": "140110000000",
						"ext_name": "晋源区"
					},
					{
						"id": "140121",
						"pid": 1401,
						"deep": 2,
						"name": "清徐",
						"pinyin": "qing xu",
						"pinyin_prefix": "q",
						"ext_id": "140121000000",
						"ext_name": "清徐县"
					},
					{
						"id": "140122",
						"pid": 1401,
						"deep": 2,
						"name": "阳曲",
						"pinyin": "yang qu",
						"pinyin_prefix": "y",
						"ext_id": "140122000000",
						"ext_name": "阳曲县"
					},
					{
						"id": "140123",
						"pid": 1401,
						"deep": 2,
						"name": "娄烦",
						"pinyin": "lou fan",
						"pinyin_prefix": "l",
						"ext_id": "140123000000",
						"ext_name": "娄烦县"
					},
					{
						"id": "140181",
						"pid": 1401,
						"deep": 2,
						"name": "古交",
						"pinyin": "gu jiao",
						"pinyin_prefix": "g",
						"ext_id": "140181000000",
						"ext_name": "古交市"
					}
				]
			},
			{
				"id": "1402",
				"pid": 14,
				"deep": 1,
				"name": "大同",
				"pinyin": "da tong",
				"pinyin_prefix": "d",
				"ext_id": "140200000000",
				"ext_name": "大同市",
				"childs": [
					{
						"id": "140212",
						"pid": 1402,
						"deep": 2,
						"name": "新荣",
						"pinyin": "xin rong",
						"pinyin_prefix": "x",
						"ext_id": "140212000000",
						"ext_name": "新荣区"
					},
					{
						"id": "140213",
						"pid": 1402,
						"deep": 2,
						"name": "平城",
						"pinyin": "ping cheng",
						"pinyin_prefix": "p",
						"ext_id": "140213000000",
						"ext_name": "平城区"
					},
					{
						"id": "140214",
						"pid": 1402,
						"deep": 2,
						"name": "云冈",
						"pinyin": "yun gang",
						"pinyin_prefix": "y",
						"ext_id": "140214000000",
						"ext_name": "云冈区"
					},
					{
						"id": "140215",
						"pid": 1402,
						"deep": 2,
						"name": "云州",
						"pinyin": "yun zhou",
						"pinyin_prefix": "y",
						"ext_id": "140215000000",
						"ext_name": "云州区"
					},
					{
						"id": "140221",
						"pid": 1402,
						"deep": 2,
						"name": "阳高",
						"pinyin": "yang gao",
						"pinyin_prefix": "y",
						"ext_id": "140221000000",
						"ext_name": "阳高县"
					},
					{
						"id": "140222",
						"pid": 1402,
						"deep": 2,
						"name": "天镇",
						"pinyin": "tian zhen",
						"pinyin_prefix": "t",
						"ext_id": "140222000000",
						"ext_name": "天镇县"
					},
					{
						"id": "140223",
						"pid": 1402,
						"deep": 2,
						"name": "广灵",
						"pinyin": "guang ling",
						"pinyin_prefix": "g",
						"ext_id": "140223000000",
						"ext_name": "广灵县"
					},
					{
						"id": "140224",
						"pid": 1402,
						"deep": 2,
						"name": "灵丘",
						"pinyin": "ling qiu",
						"pinyin_prefix": "l",
						"ext_id": "140224000000",
						"ext_name": "灵丘县"
					},
					{
						"id": "140225",
						"pid": 1402,
						"deep": 2,
						"name": "浑源",
						"pinyin": "hun yuan",
						"pinyin_prefix": "h",
						"ext_id": "140225000000",
						"ext_name": "浑源县"
					},
					{
						"id": "140226",
						"pid": 1402,
						"deep": 2,
						"name": "左云",
						"pinyin": "zuo yun",
						"pinyin_prefix": "z",
						"ext_id": "140226000000",
						"ext_name": "左云县"
					}
				]
			},
			{
				"id": "1403",
				"pid": 14,
				"deep": 1,
				"name": "阳泉",
				"pinyin": "yang quan",
				"pinyin_prefix": "y",
				"ext_id": "140300000000",
				"ext_name": "阳泉市",
				"childs": [
					{
						"id": "140302",
						"pid": 1403,
						"deep": 2,
						"name": "城区",
						"pinyin": "cheng qu",
						"pinyin_prefix": "c",
						"ext_id": "140302000000",
						"ext_name": "城区"
					},
					{
						"id": "140303",
						"pid": 1403,
						"deep": 2,
						"name": "矿区",
						"pinyin": "kuang qu",
						"pinyin_prefix": "k",
						"ext_id": "140303000000",
						"ext_name": "矿区"
					},
					{
						"id": "140311",
						"pid": 1403,
						"deep": 2,
						"name": "郊区",
						"pinyin": "jiao qu",
						"pinyin_prefix": "j",
						"ext_id": "140311000000",
						"ext_name": "郊区"
					},
					{
						"id": "140321",
						"pid": 1403,
						"deep": 2,
						"name": "平定",
						"pinyin": "ping ding",
						"pinyin_prefix": "p",
						"ext_id": "140321000000",
						"ext_name": "平定县"
					},
					{
						"id": "140322",
						"pid": 1403,
						"deep": 2,
						"name": "盂县",
						"pinyin": "yu xian",
						"pinyin_prefix": "y",
						"ext_id": "140322000000",
						"ext_name": "盂县"
					}
				]
			},
			{
				"id": "1404",
				"pid": 14,
				"deep": 1,
				"name": "长治",
				"pinyin": "chang zhi",
				"pinyin_prefix": "c",
				"ext_id": "140400000000",
				"ext_name": "长治市",
				"childs": [
					{
						"id": "140403",
						"pid": 1404,
						"deep": 2,
						"name": "潞州",
						"pinyin": "lu zhou",
						"pinyin_prefix": "l",
						"ext_id": "140403000000",
						"ext_name": "潞州区"
					},
					{
						"id": "140404",
						"pid": 1404,
						"deep": 2,
						"name": "上党",
						"pinyin": "shang dang",
						"pinyin_prefix": "s",
						"ext_id": "140404000000",
						"ext_name": "上党区"
					},
					{
						"id": "140405",
						"pid": 1404,
						"deep": 2,
						"name": "屯留",
						"pinyin": "tun liu",
						"pinyin_prefix": "t",
						"ext_id": "140405000000",
						"ext_name": "屯留区"
					},
					{
						"id": "140406",
						"pid": 1404,
						"deep": 2,
						"name": "潞城",
						"pinyin": "lu cheng",
						"pinyin_prefix": "l",
						"ext_id": "140406000000",
						"ext_name": "潞城区"
					},
					{
						"id": "140423",
						"pid": 1404,
						"deep": 2,
						"name": "襄垣",
						"pinyin": "xiang yuan",
						"pinyin_prefix": "x",
						"ext_id": "140423000000",
						"ext_name": "襄垣县"
					},
					{
						"id": "140425",
						"pid": 1404,
						"deep": 2,
						"name": "平顺",
						"pinyin": "ping shun",
						"pinyin_prefix": "p",
						"ext_id": "140425000000",
						"ext_name": "平顺县"
					},
					{
						"id": "140426",
						"pid": 1404,
						"deep": 2,
						"name": "黎城",
						"pinyin": "li cheng",
						"pinyin_prefix": "l",
						"ext_id": "140426000000",
						"ext_name": "黎城县"
					},
					{
						"id": "140427",
						"pid": 1404,
						"deep": 2,
						"name": "壶关",
						"pinyin": "hu guan",
						"pinyin_prefix": "h",
						"ext_id": "140427000000",
						"ext_name": "壶关县"
					},
					{
						"id": "140428",
						"pid": 1404,
						"deep": 2,
						"name": "长子",
						"pinyin": "zhang zi",
						"pinyin_prefix": "z",
						"ext_id": "140428000000",
						"ext_name": "长子县"
					},
					{
						"id": "140429",
						"pid": 1404,
						"deep": 2,
						"name": "武乡",
						"pinyin": "wu xiang",
						"pinyin_prefix": "w",
						"ext_id": "140429000000",
						"ext_name": "武乡县"
					},
					{
						"id": "140430",
						"pid": 1404,
						"deep": 2,
						"name": "沁县",
						"pinyin": "qin xian",
						"pinyin_prefix": "q",
						"ext_id": "140430000000",
						"ext_name": "沁县"
					},
					{
						"id": "140431",
						"pid": 1404,
						"deep": 2,
						"name": "沁源",
						"pinyin": "qin yuan",
						"pinyin_prefix": "q",
						"ext_id": "140431000000",
						"ext_name": "沁源县"
					}
				]
			},
			{
				"id": "1405",
				"pid": 14,
				"deep": 1,
				"name": "晋城",
				"pinyin": "jin cheng",
				"pinyin_prefix": "j",
				"ext_id": "140500000000",
				"ext_name": "晋城市",
				"childs": [
					{
						"id": "140502",
						"pid": 1405,
						"deep": 2,
						"name": "城区",
						"pinyin": "cheng qu",
						"pinyin_prefix": "c",
						"ext_id": "140502000000",
						"ext_name": "城区"
					},
					{
						"id": "140521",
						"pid": 1405,
						"deep": 2,
						"name": "沁水",
						"pinyin": "qin shui",
						"pinyin_prefix": "q",
						"ext_id": "140521000000",
						"ext_name": "沁水县"
					},
					{
						"id": "140522",
						"pid": 1405,
						"deep": 2,
						"name": "阳城",
						"pinyin": "yang cheng",
						"pinyin_prefix": "y",
						"ext_id": "140522000000",
						"ext_name": "阳城县"
					},
					{
						"id": "140524",
						"pid": 1405,
						"deep": 2,
						"name": "陵川",
						"pinyin": "ling chuan",
						"pinyin_prefix": "l",
						"ext_id": "140524000000",
						"ext_name": "陵川县"
					},
					{
						"id": "140525",
						"pid": 1405,
						"deep": 2,
						"name": "泽州",
						"pinyin": "ze zhou",
						"pinyin_prefix": "z",
						"ext_id": "140525000000",
						"ext_name": "泽州县"
					},
					{
						"id": "140581",
						"pid": 1405,
						"deep": 2,
						"name": "高平",
						"pinyin": "gao ping",
						"pinyin_prefix": "g",
						"ext_id": "140581000000",
						"ext_name": "高平市"
					}
				]
			},
			{
				"id": "1406",
				"pid": 14,
				"deep": 1,
				"name": "朔州",
				"pinyin": "shuo zhou",
				"pinyin_prefix": "s",
				"ext_id": "140600000000",
				"ext_name": "朔州市",
				"childs": [
					{
						"id": "140602",
						"pid": 1406,
						"deep": 2,
						"name": "朔城",
						"pinyin": "shuo cheng",
						"pinyin_prefix": "s",
						"ext_id": "140602000000",
						"ext_name": "朔城区"
					},
					{
						"id": "140603",
						"pid": 1406,
						"deep": 2,
						"name": "平鲁",
						"pinyin": "ping lu",
						"pinyin_prefix": "p",
						"ext_id": "140603000000",
						"ext_name": "平鲁区"
					},
					{
						"id": "140621",
						"pid": 1406,
						"deep": 2,
						"name": "山阴",
						"pinyin": "shan yin",
						"pinyin_prefix": "s",
						"ext_id": "140621000000",
						"ext_name": "山阴县"
					},
					{
						"id": "140622",
						"pid": 1406,
						"deep": 2,
						"name": "应县",
						"pinyin": "ying xian",
						"pinyin_prefix": "y",
						"ext_id": "140622000000",
						"ext_name": "应县"
					},
					{
						"id": "140623",
						"pid": 1406,
						"deep": 2,
						"name": "右玉",
						"pinyin": "you yu",
						"pinyin_prefix": "y",
						"ext_id": "140623000000",
						"ext_name": "右玉县"
					},
					{
						"id": "140681",
						"pid": 1406,
						"deep": 2,
						"name": "怀仁",
						"pinyin": "huai ren",
						"pinyin_prefix": "h",
						"ext_id": "140681000000",
						"ext_name": "怀仁市"
					}
				]
			},
			{
				"id": "1407",
				"pid": 14,
				"deep": 1,
				"name": "晋中",
				"pinyin": "jin zhong",
				"pinyin_prefix": "j",
				"ext_id": "140700000000",
				"ext_name": "晋中市",
				"childs": [
					{
						"id": "140702",
						"pid": 1407,
						"deep": 2,
						"name": "榆次",
						"pinyin": "yu ci",
						"pinyin_prefix": "y",
						"ext_id": "140702000000",
						"ext_name": "榆次区"
					},
					{
						"id": "140703",
						"pid": 1407,
						"deep": 2,
						"name": "太谷",
						"pinyin": "tai gu",
						"pinyin_prefix": "t",
						"ext_id": "140703000000",
						"ext_name": "太谷区"
					},
					{
						"id": "140721",
						"pid": 1407,
						"deep": 2,
						"name": "榆社",
						"pinyin": "yu she",
						"pinyin_prefix": "y",
						"ext_id": "140721000000",
						"ext_name": "榆社县"
					},
					{
						"id": "140722",
						"pid": 1407,
						"deep": 2,
						"name": "左权",
						"pinyin": "zuo quan",
						"pinyin_prefix": "z",
						"ext_id": "140722000000",
						"ext_name": "左权县"
					},
					{
						"id": "140723",
						"pid": 1407,
						"deep": 2,
						"name": "和顺",
						"pinyin": "he shun",
						"pinyin_prefix": "h",
						"ext_id": "140723000000",
						"ext_name": "和顺县"
					},
					{
						"id": "140724",
						"pid": 1407,
						"deep": 2,
						"name": "昔阳",
						"pinyin": "xi yang",
						"pinyin_prefix": "x",
						"ext_id": "140724000000",
						"ext_name": "昔阳县"
					},
					{
						"id": "140725",
						"pid": 1407,
						"deep": 2,
						"name": "寿阳",
						"pinyin": "shou yang",
						"pinyin_prefix": "s",
						"ext_id": "140725000000",
						"ext_name": "寿阳县"
					},
					{
						"id": "140727",
						"pid": 1407,
						"deep": 2,
						"name": "祁县",
						"pinyin": "qi xian",
						"pinyin_prefix": "q",
						"ext_id": "140727000000",
						"ext_name": "祁县"
					},
					{
						"id": "140728",
						"pid": 1407,
						"deep": 2,
						"name": "平遥",
						"pinyin": "ping yao",
						"pinyin_prefix": "p",
						"ext_id": "140728000000",
						"ext_name": "平遥县"
					},
					{
						"id": "140729",
						"pid": 1407,
						"deep": 2,
						"name": "灵石",
						"pinyin": "ling shi",
						"pinyin_prefix": "l",
						"ext_id": "140729000000",
						"ext_name": "灵石县"
					},
					{
						"id": "140781",
						"pid": 1407,
						"deep": 2,
						"name": "介休",
						"pinyin": "jie xiu",
						"pinyin_prefix": "j",
						"ext_id": "140781000000",
						"ext_name": "介休市"
					}
				]
			},
			{
				"id": "1408",
				"pid": 14,
				"deep": 1,
				"name": "运城",
				"pinyin": "yun cheng",
				"pinyin_prefix": "y",
				"ext_id": "140800000000",
				"ext_name": "运城市",
				"childs": [
					{
						"id": "140802",
						"pid": 1408,
						"deep": 2,
						"name": "盐湖",
						"pinyin": "yan hu",
						"pinyin_prefix": "y",
						"ext_id": "140802000000",
						"ext_name": "盐湖区"
					},
					{
						"id": "140821",
						"pid": 1408,
						"deep": 2,
						"name": "临猗",
						"pinyin": "lin yi",
						"pinyin_prefix": "l",
						"ext_id": "140821000000",
						"ext_name": "临猗县"
					},
					{
						"id": "140822",
						"pid": 1408,
						"deep": 2,
						"name": "万荣",
						"pinyin": "wan rong",
						"pinyin_prefix": "w",
						"ext_id": "140822000000",
						"ext_name": "万荣县"
					},
					{
						"id": "140823",
						"pid": 1408,
						"deep": 2,
						"name": "闻喜",
						"pinyin": "wen xi",
						"pinyin_prefix": "w",
						"ext_id": "140823000000",
						"ext_name": "闻喜县"
					},
					{
						"id": "140824",
						"pid": 1408,
						"deep": 2,
						"name": "稷山",
						"pinyin": "ji shan",
						"pinyin_prefix": "j",
						"ext_id": "140824000000",
						"ext_name": "稷山县"
					},
					{
						"id": "140825",
						"pid": 1408,
						"deep": 2,
						"name": "新绛",
						"pinyin": "xin jiang",
						"pinyin_prefix": "x",
						"ext_id": "140825000000",
						"ext_name": "新绛县"
					},
					{
						"id": "140826",
						"pid": 1408,
						"deep": 2,
						"name": "绛县",
						"pinyin": "jiang xian",
						"pinyin_prefix": "j",
						"ext_id": "140826000000",
						"ext_name": "绛县"
					},
					{
						"id": "140827",
						"pid": 1408,
						"deep": 2,
						"name": "垣曲",
						"pinyin": "yuan qu",
						"pinyin_prefix": "y",
						"ext_id": "140827000000",
						"ext_name": "垣曲县"
					},
					{
						"id": "140828",
						"pid": 1408,
						"deep": 2,
						"name": "夏县",
						"pinyin": "xia xian",
						"pinyin_prefix": "x",
						"ext_id": "140828000000",
						"ext_name": "夏县"
					},
					{
						"id": "140829",
						"pid": 1408,
						"deep": 2,
						"name": "平陆",
						"pinyin": "ping lu",
						"pinyin_prefix": "p",
						"ext_id": "140829000000",
						"ext_name": "平陆县"
					},
					{
						"id": "140830",
						"pid": 1408,
						"deep": 2,
						"name": "芮城",
						"pinyin": "rui cheng",
						"pinyin_prefix": "r",
						"ext_id": "140830000000",
						"ext_name": "芮城县"
					},
					{
						"id": "140881",
						"pid": 1408,
						"deep": 2,
						"name": "永济",
						"pinyin": "yong ji",
						"pinyin_prefix": "y",
						"ext_id": "140881000000",
						"ext_name": "永济市"
					},
					{
						"id": "140882",
						"pid": 1408,
						"deep": 2,
						"name": "河津",
						"pinyin": "he jin",
						"pinyin_prefix": "h",
						"ext_id": "140882000000",
						"ext_name": "河津市"
					}
				]
			},
			{
				"id": "1409",
				"pid": 14,
				"deep": 1,
				"name": "忻州",
				"pinyin": "xin zhou",
				"pinyin_prefix": "x",
				"ext_id": "140900000000",
				"ext_name": "忻州市",
				"childs": [
					{
						"id": "140902",
						"pid": 1409,
						"deep": 2,
						"name": "忻府",
						"pinyin": "xin fu",
						"pinyin_prefix": "x",
						"ext_id": "140902000000",
						"ext_name": "忻府区"
					},
					{
						"id": "140921",
						"pid": 1409,
						"deep": 2,
						"name": "定襄",
						"pinyin": "ding xiang",
						"pinyin_prefix": "d",
						"ext_id": "140921000000",
						"ext_name": "定襄县"
					},
					{
						"id": "140922",
						"pid": 1409,
						"deep": 2,
						"name": "五台",
						"pinyin": "wu tai",
						"pinyin_prefix": "w",
						"ext_id": "140922000000",
						"ext_name": "五台县"
					},
					{
						"id": "140923",
						"pid": 1409,
						"deep": 2,
						"name": "代县",
						"pinyin": "dai xian",
						"pinyin_prefix": "d",
						"ext_id": "140923000000",
						"ext_name": "代县"
					},
					{
						"id": "140924",
						"pid": 1409,
						"deep": 2,
						"name": "繁峙",
						"pinyin": "fan shi",
						"pinyin_prefix": "f",
						"ext_id": "140924000000",
						"ext_name": "繁峙县"
					},
					{
						"id": "140925",
						"pid": 1409,
						"deep": 2,
						"name": "宁武",
						"pinyin": "ning wu",
						"pinyin_prefix": "n",
						"ext_id": "140925000000",
						"ext_name": "宁武县"
					},
					{
						"id": "140926",
						"pid": 1409,
						"deep": 2,
						"name": "静乐",
						"pinyin": "jing le",
						"pinyin_prefix": "j",
						"ext_id": "140926000000",
						"ext_name": "静乐县"
					},
					{
						"id": "140927",
						"pid": 1409,
						"deep": 2,
						"name": "神池",
						"pinyin": "shen chi",
						"pinyin_prefix": "s",
						"ext_id": "140927000000",
						"ext_name": "神池县"
					},
					{
						"id": "140928",
						"pid": 1409,
						"deep": 2,
						"name": "五寨",
						"pinyin": "wu zhai",
						"pinyin_prefix": "w",
						"ext_id": "140928000000",
						"ext_name": "五寨县"
					},
					{
						"id": "140929",
						"pid": 1409,
						"deep": 2,
						"name": "岢岚",
						"pinyin": "ke lan",
						"pinyin_prefix": "k",
						"ext_id": "140929000000",
						"ext_name": "岢岚县"
					},
					{
						"id": "140930",
						"pid": 1409,
						"deep": 2,
						"name": "河曲",
						"pinyin": "he qu",
						"pinyin_prefix": "h",
						"ext_id": "140930000000",
						"ext_name": "河曲县"
					},
					{
						"id": "140931",
						"pid": 1409,
						"deep": 2,
						"name": "保德",
						"pinyin": "bao de",
						"pinyin_prefix": "b",
						"ext_id": "140931000000",
						"ext_name": "保德县"
					},
					{
						"id": "140932",
						"pid": 1409,
						"deep": 2,
						"name": "偏关",
						"pinyin": "pian guan",
						"pinyin_prefix": "p",
						"ext_id": "140932000000",
						"ext_name": "偏关县"
					},
					{
						"id": "140981",
						"pid": 1409,
						"deep": 2,
						"name": "原平",
						"pinyin": "yuan ping",
						"pinyin_prefix": "y",
						"ext_id": "140981000000",
						"ext_name": "原平市"
					}
				]
			},
			{
				"id": "1410",
				"pid": 14,
				"deep": 1,
				"name": "临汾",
				"pinyin": "lin fen",
				"pinyin_prefix": "l",
				"ext_id": "141000000000",
				"ext_name": "临汾市",
				"childs": [
					{
						"id": "141002",
						"pid": 1410,
						"deep": 2,
						"name": "尧都",
						"pinyin": "yao du",
						"pinyin_prefix": "y",
						"ext_id": "141002000000",
						"ext_name": "尧都区"
					},
					{
						"id": "141021",
						"pid": 1410,
						"deep": 2,
						"name": "曲沃",
						"pinyin": "qu wo",
						"pinyin_prefix": "q",
						"ext_id": "141021000000",
						"ext_name": "曲沃县"
					},
					{
						"id": "141022",
						"pid": 1410,
						"deep": 2,
						"name": "翼城",
						"pinyin": "yi cheng",
						"pinyin_prefix": "y",
						"ext_id": "141022000000",
						"ext_name": "翼城县"
					},
					{
						"id": "141023",
						"pid": 1410,
						"deep": 2,
						"name": "襄汾",
						"pinyin": "xiang fen",
						"pinyin_prefix": "x",
						"ext_id": "141023000000",
						"ext_name": "襄汾县"
					},
					{
						"id": "141024",
						"pid": 1410,
						"deep": 2,
						"name": "洪洞",
						"pinyin": "hong tong",
						"pinyin_prefix": "h",
						"ext_id": "141024000000",
						"ext_name": "洪洞县"
					},
					{
						"id": "141025",
						"pid": 1410,
						"deep": 2,
						"name": "古县",
						"pinyin": "gu xian",
						"pinyin_prefix": "g",
						"ext_id": "141025000000",
						"ext_name": "古县"
					},
					{
						"id": "141026",
						"pid": 1410,
						"deep": 2,
						"name": "安泽",
						"pinyin": "an ze",
						"pinyin_prefix": "a",
						"ext_id": "141026000000",
						"ext_name": "安泽县"
					},
					{
						"id": "141027",
						"pid": 1410,
						"deep": 2,
						"name": "浮山",
						"pinyin": "fu shan",
						"pinyin_prefix": "f",
						"ext_id": "141027000000",
						"ext_name": "浮山县"
					},
					{
						"id": "141028",
						"pid": 1410,
						"deep": 2,
						"name": "吉县",
						"pinyin": "ji xian",
						"pinyin_prefix": "j",
						"ext_id": "141028000000",
						"ext_name": "吉县"
					},
					{
						"id": "141029",
						"pid": 1410,
						"deep": 2,
						"name": "乡宁",
						"pinyin": "xiang ning",
						"pinyin_prefix": "x",
						"ext_id": "141029000000",
						"ext_name": "乡宁县"
					},
					{
						"id": "141030",
						"pid": 1410,
						"deep": 2,
						"name": "大宁",
						"pinyin": "da ning",
						"pinyin_prefix": "d",
						"ext_id": "141030000000",
						"ext_name": "大宁县"
					},
					{
						"id": "141031",
						"pid": 1410,
						"deep": 2,
						"name": "隰县",
						"pinyin": "xi xian",
						"pinyin_prefix": "x",
						"ext_id": "141031000000",
						"ext_name": "隰县"
					},
					{
						"id": "141032",
						"pid": 1410,
						"deep": 2,
						"name": "永和",
						"pinyin": "yong he",
						"pinyin_prefix": "y",
						"ext_id": "141032000000",
						"ext_name": "永和县"
					},
					{
						"id": "141033",
						"pid": 1410,
						"deep": 2,
						"name": "蒲县",
						"pinyin": "pu xian",
						"pinyin_prefix": "p",
						"ext_id": "141033000000",
						"ext_name": "蒲县"
					},
					{
						"id": "141034",
						"pid": 1410,
						"deep": 2,
						"name": "汾西",
						"pinyin": "fen xi",
						"pinyin_prefix": "f",
						"ext_id": "141034000000",
						"ext_name": "汾西县"
					},
					{
						"id": "141081",
						"pid": 1410,
						"deep": 2,
						"name": "侯马",
						"pinyin": "hou ma",
						"pinyin_prefix": "h",
						"ext_id": "141081000000",
						"ext_name": "侯马市"
					},
					{
						"id": "141082",
						"pid": 1410,
						"deep": 2,
						"name": "霍州",
						"pinyin": "huo zhou",
						"pinyin_prefix": "h",
						"ext_id": "141082000000",
						"ext_name": "霍州市"
					}
				]
			},
			{
				"id": "1411",
				"pid": 14,
				"deep": 1,
				"name": "吕梁",
				"pinyin": "lv liang",
				"pinyin_prefix": "l",
				"ext_id": "141100000000",
				"ext_name": "吕梁市",
				"childs": [
					{
						"id": "141102",
						"pid": 1411,
						"deep": 2,
						"name": "离石",
						"pinyin": "li shi",
						"pinyin_prefix": "l",
						"ext_id": "141102000000",
						"ext_name": "离石区"
					},
					{
						"id": "141121",
						"pid": 1411,
						"deep": 2,
						"name": "文水",
						"pinyin": "wen shui",
						"pinyin_prefix": "w",
						"ext_id": "141121000000",
						"ext_name": "文水县"
					},
					{
						"id": "141122",
						"pid": 1411,
						"deep": 2,
						"name": "交城",
						"pinyin": "jiao cheng",
						"pinyin_prefix": "j",
						"ext_id": "141122000000",
						"ext_name": "交城县"
					},
					{
						"id": "141123",
						"pid": 1411,
						"deep": 2,
						"name": "兴县",
						"pinyin": "xing xian",
						"pinyin_prefix": "x",
						"ext_id": "141123000000",
						"ext_name": "兴县"
					},
					{
						"id": "141124",
						"pid": 1411,
						"deep": 2,
						"name": "临县",
						"pinyin": "lin xian",
						"pinyin_prefix": "l",
						"ext_id": "141124000000",
						"ext_name": "临县"
					},
					{
						"id": "141125",
						"pid": 1411,
						"deep": 2,
						"name": "柳林",
						"pinyin": "liu lin",
						"pinyin_prefix": "l",
						"ext_id": "141125000000",
						"ext_name": "柳林县"
					},
					{
						"id": "141126",
						"pid": 1411,
						"deep": 2,
						"name": "石楼",
						"pinyin": "shi lou",
						"pinyin_prefix": "s",
						"ext_id": "141126000000",
						"ext_name": "石楼县"
					},
					{
						"id": "141127",
						"pid": 1411,
						"deep": 2,
						"name": "岚县",
						"pinyin": "lan xian",
						"pinyin_prefix": "l",
						"ext_id": "141127000000",
						"ext_name": "岚县"
					},
					{
						"id": "141128",
						"pid": 1411,
						"deep": 2,
						"name": "方山",
						"pinyin": "fang shan",
						"pinyin_prefix": "f",
						"ext_id": "141128000000",
						"ext_name": "方山县"
					},
					{
						"id": "141129",
						"pid": 1411,
						"deep": 2,
						"name": "中阳",
						"pinyin": "zhong yang",
						"pinyin_prefix": "z",
						"ext_id": "141129000000",
						"ext_name": "中阳县"
					},
					{
						"id": "141130",
						"pid": 1411,
						"deep": 2,
						"name": "交口",
						"pinyin": "jiao kou",
						"pinyin_prefix": "j",
						"ext_id": "141130000000",
						"ext_name": "交口县"
					},
					{
						"id": "141181",
						"pid": 1411,
						"deep": 2,
						"name": "孝义",
						"pinyin": "xiao yi",
						"pinyin_prefix": "x",
						"ext_id": "141181000000",
						"ext_name": "孝义市"
					},
					{
						"id": "141182",
						"pid": 1411,
						"deep": 2,
						"name": "汾阳",
						"pinyin": "fen yang",
						"pinyin_prefix": "f",
						"ext_id": "141182000000",
						"ext_name": "汾阳市"
					}
				]
			}
		]
	},
	{
		"id": "15",
		"pid": 0,
		"deep": 0,
		"name": "内蒙古",
		"pinyin": "nei meng gu",
		"pinyin_prefix": "n",
		"ext_id": "150000000000",
		"ext_name": "内蒙古自治区",
		"childs": [
			{
				"id": "1501",
				"pid": 15,
				"deep": 1,
				"name": "呼和浩特",
				"pinyin": "hu he hao te",
				"pinyin_prefix": "h",
				"ext_id": "150100000000",
				"ext_name": "呼和浩特市",
				"childs": [
					{
						"id": "150102",
						"pid": 1501,
						"deep": 2,
						"name": "新城",
						"pinyin": "xin cheng",
						"pinyin_prefix": "x",
						"ext_id": "150102000000",
						"ext_name": "新城区"
					},
					{
						"id": "150103",
						"pid": 1501,
						"deep": 2,
						"name": "回民",
						"pinyin": "hui min",
						"pinyin_prefix": "h",
						"ext_id": "150103000000",
						"ext_name": "回民区"
					},
					{
						"id": "150104",
						"pid": 1501,
						"deep": 2,
						"name": "玉泉",
						"pinyin": "yu quan",
						"pinyin_prefix": "y",
						"ext_id": "150104000000",
						"ext_name": "玉泉区"
					},
					{
						"id": "150105",
						"pid": 1501,
						"deep": 2,
						"name": "赛罕",
						"pinyin": "sai han",
						"pinyin_prefix": "s",
						"ext_id": "150105000000",
						"ext_name": "赛罕区"
					},
					{
						"id": "150121",
						"pid": 1501,
						"deep": 2,
						"name": "土默特左旗",
						"pinyin": "tu mo te zuo qi",
						"pinyin_prefix": "t",
						"ext_id": "150121000000",
						"ext_name": "土默特左旗"
					},
					{
						"id": "150122",
						"pid": 1501,
						"deep": 2,
						"name": "托克托",
						"pinyin": "tuo ke tuo",
						"pinyin_prefix": "t",
						"ext_id": "150122000000",
						"ext_name": "托克托县"
					},
					{
						"id": "150123",
						"pid": 1501,
						"deep": 2,
						"name": "和林格尔",
						"pinyin": "he lin ge er",
						"pinyin_prefix": "h",
						"ext_id": "150123000000",
						"ext_name": "和林格尔县"
					},
					{
						"id": "150124",
						"pid": 1501,
						"deep": 2,
						"name": "清水河",
						"pinyin": "qing shui he",
						"pinyin_prefix": "q",
						"ext_id": "150124000000",
						"ext_name": "清水河县"
					},
					{
						"id": "150125",
						"pid": 1501,
						"deep": 2,
						"name": "武川",
						"pinyin": "wu chuan",
						"pinyin_prefix": "w",
						"ext_id": "150125000000",
						"ext_name": "武川县"
					}
				]
			},
			{
				"id": "1502",
				"pid": 15,
				"deep": 1,
				"name": "包头",
				"pinyin": "bao tou",
				"pinyin_prefix": "b",
				"ext_id": "150200000000",
				"ext_name": "包头市",
				"childs": [
					{
						"id": "150202",
						"pid": 1502,
						"deep": 2,
						"name": "东河",
						"pinyin": "dong he",
						"pinyin_prefix": "d",
						"ext_id": "150202000000",
						"ext_name": "东河区"
					},
					{
						"id": "150203",
						"pid": 1502,
						"deep": 2,
						"name": "昆都仑",
						"pinyin": "kun du lun",
						"pinyin_prefix": "k",
						"ext_id": "150203000000",
						"ext_name": "昆都仑区"
					},
					{
						"id": "150204",
						"pid": 1502,
						"deep": 2,
						"name": "青山",
						"pinyin": "qing shan",
						"pinyin_prefix": "q",
						"ext_id": "150204000000",
						"ext_name": "青山区"
					},
					{
						"id": "150205",
						"pid": 1502,
						"deep": 2,
						"name": "石拐",
						"pinyin": "shi guai",
						"pinyin_prefix": "s",
						"ext_id": "150205000000",
						"ext_name": "石拐区"
					},
					{
						"id": "150206",
						"pid": 1502,
						"deep": 2,
						"name": "白云鄂博矿区",
						"pinyin": "bai yun e bo kuang qu",
						"pinyin_prefix": "b",
						"ext_id": "150206000000",
						"ext_name": "白云鄂博矿区"
					},
					{
						"id": "150207",
						"pid": 1502,
						"deep": 2,
						"name": "九原",
						"pinyin": "jiu yuan",
						"pinyin_prefix": "j",
						"ext_id": "150207000000",
						"ext_name": "九原区"
					},
					{
						"id": "150221",
						"pid": 1502,
						"deep": 2,
						"name": "土默特右旗",
						"pinyin": "tu mo te you qi",
						"pinyin_prefix": "t",
						"ext_id": "150221000000",
						"ext_name": "土默特右旗"
					},
					{
						"id": "150222",
						"pid": 1502,
						"deep": 2,
						"name": "固阳",
						"pinyin": "gu yang",
						"pinyin_prefix": "g",
						"ext_id": "150222000000",
						"ext_name": "固阳县"
					},
					{
						"id": "150223",
						"pid": 1502,
						"deep": 2,
						"name": "达尔罕茂明安联合旗",
						"pinyin": "da er han mao ming an lian he qi",
						"pinyin_prefix": "d",
						"ext_id": "150223000000",
						"ext_name": "达尔罕茂明安联合旗"
					}
				]
			},
			{
				"id": "1503",
				"pid": 15,
				"deep": 1,
				"name": "乌海",
				"pinyin": "wu hai",
				"pinyin_prefix": "w",
				"ext_id": "150300000000",
				"ext_name": "乌海市",
				"childs": [
					{
						"id": "150302",
						"pid": 1503,
						"deep": 2,
						"name": "海勃湾",
						"pinyin": "hai bo wan",
						"pinyin_prefix": "h",
						"ext_id": "150302000000",
						"ext_name": "海勃湾区"
					},
					{
						"id": "150303",
						"pid": 1503,
						"deep": 2,
						"name": "海南",
						"pinyin": "hai nan",
						"pinyin_prefix": "h",
						"ext_id": "150303000000",
						"ext_name": "海南区"
					},
					{
						"id": "150304",
						"pid": 1503,
						"deep": 2,
						"name": "乌达",
						"pinyin": "wu da",
						"pinyin_prefix": "w",
						"ext_id": "150304000000",
						"ext_name": "乌达区"
					}
				]
			},
			{
				"id": "1504",
				"pid": 15,
				"deep": 1,
				"name": "赤峰",
				"pinyin": "chi feng",
				"pinyin_prefix": "c",
				"ext_id": "150400000000",
				"ext_name": "赤峰市",
				"childs": [
					{
						"id": "150402",
						"pid": 1504,
						"deep": 2,
						"name": "红山",
						"pinyin": "hong shan",
						"pinyin_prefix": "h",
						"ext_id": "150402000000",
						"ext_name": "红山区"
					},
					{
						"id": "150403",
						"pid": 1504,
						"deep": 2,
						"name": "元宝山",
						"pinyin": "yuan bao shan",
						"pinyin_prefix": "y",
						"ext_id": "150403000000",
						"ext_name": "元宝山区"
					},
					{
						"id": "150404",
						"pid": 1504,
						"deep": 2,
						"name": "松山",
						"pinyin": "song shan",
						"pinyin_prefix": "s",
						"ext_id": "150404000000",
						"ext_name": "松山区"
					},
					{
						"id": "150421",
						"pid": 1504,
						"deep": 2,
						"name": "阿鲁科尔沁旗",
						"pinyin": "a lu ke er qin qi",
						"pinyin_prefix": "a",
						"ext_id": "150421000000",
						"ext_name": "阿鲁科尔沁旗"
					},
					{
						"id": "150422",
						"pid": 1504,
						"deep": 2,
						"name": "巴林左旗",
						"pinyin": "ba lin zuo qi",
						"pinyin_prefix": "b",
						"ext_id": "150422000000",
						"ext_name": "巴林左旗"
					},
					{
						"id": "150423",
						"pid": 1504,
						"deep": 2,
						"name": "巴林右旗",
						"pinyin": "ba lin you qi",
						"pinyin_prefix": "b",
						"ext_id": "150423000000",
						"ext_name": "巴林右旗"
					},
					{
						"id": "150424",
						"pid": 1504,
						"deep": 2,
						"name": "林西",
						"pinyin": "lin xi",
						"pinyin_prefix": "l",
						"ext_id": "150424000000",
						"ext_name": "林西县"
					},
					{
						"id": "150425",
						"pid": 1504,
						"deep": 2,
						"name": "克什克腾旗",
						"pinyin": "ke shi ke teng qi",
						"pinyin_prefix": "k",
						"ext_id": "150425000000",
						"ext_name": "克什克腾旗"
					},
					{
						"id": "150426",
						"pid": 1504,
						"deep": 2,
						"name": "翁牛特旗",
						"pinyin": "weng niu te qi",
						"pinyin_prefix": "w",
						"ext_id": "150426000000",
						"ext_name": "翁牛特旗"
					},
					{
						"id": "150428",
						"pid": 1504,
						"deep": 2,
						"name": "喀喇沁旗",
						"pinyin": "ka la qin qi",
						"pinyin_prefix": "k",
						"ext_id": "150428000000",
						"ext_name": "喀喇沁旗"
					},
					{
						"id": "150429",
						"pid": 1504,
						"deep": 2,
						"name": "宁城",
						"pinyin": "ning cheng",
						"pinyin_prefix": "n",
						"ext_id": "150429000000",
						"ext_name": "宁城县"
					},
					{
						"id": "150430",
						"pid": 1504,
						"deep": 2,
						"name": "敖汉旗",
						"pinyin": "ao han qi",
						"pinyin_prefix": "a",
						"ext_id": "150430000000",
						"ext_name": "敖汉旗"
					}
				]
			},
			{
				"id": "1505",
				"pid": 15,
				"deep": 1,
				"name": "通辽",
				"pinyin": "tong liao",
				"pinyin_prefix": "t",
				"ext_id": "150500000000",
				"ext_name": "通辽市",
				"childs": [
					{
						"id": "150502",
						"pid": 1505,
						"deep": 2,
						"name": "科尔沁",
						"pinyin": "ke er qin",
						"pinyin_prefix": "k",
						"ext_id": "150502000000",
						"ext_name": "科尔沁区"
					},
					{
						"id": "150521",
						"pid": 1505,
						"deep": 2,
						"name": "科尔沁左翼中旗",
						"pinyin": "ke er qin zuo yi zhong qi",
						"pinyin_prefix": "k",
						"ext_id": "150521000000",
						"ext_name": "科尔沁左翼中旗"
					},
					{
						"id": "150522",
						"pid": 1505,
						"deep": 2,
						"name": "科尔沁左翼后旗",
						"pinyin": "ke er qin zuo yi hou qi",
						"pinyin_prefix": "k",
						"ext_id": "150522000000",
						"ext_name": "科尔沁左翼后旗"
					},
					{
						"id": "150523",
						"pid": 1505,
						"deep": 2,
						"name": "开鲁",
						"pinyin": "kai lu",
						"pinyin_prefix": "k",
						"ext_id": "150523000000",
						"ext_name": "开鲁县"
					},
					{
						"id": "150524",
						"pid": 1505,
						"deep": 2,
						"name": "库伦旗",
						"pinyin": "ku lun qi",
						"pinyin_prefix": "k",
						"ext_id": "150524000000",
						"ext_name": "库伦旗"
					},
					{
						"id": "150525",
						"pid": 1505,
						"deep": 2,
						"name": "奈曼旗",
						"pinyin": "nai man qi",
						"pinyin_prefix": "n",
						"ext_id": "150525000000",
						"ext_name": "奈曼旗"
					},
					{
						"id": "150526",
						"pid": 1505,
						"deep": 2,
						"name": "扎鲁特旗",
						"pinyin": "zha lu te qi",
						"pinyin_prefix": "z",
						"ext_id": "150526000000",
						"ext_name": "扎鲁特旗"
					},
					{
						"id": "150581",
						"pid": 1505,
						"deep": 2,
						"name": "霍林郭勒",
						"pinyin": "huo lin guo le",
						"pinyin_prefix": "h",
						"ext_id": "150581000000",
						"ext_name": "霍林郭勒市"
					}
				]
			},
			{
				"id": "1506",
				"pid": 15,
				"deep": 1,
				"name": "鄂尔多斯",
				"pinyin": "e er duo si",
				"pinyin_prefix": "e",
				"ext_id": "150600000000",
				"ext_name": "鄂尔多斯市",
				"childs": [
					{
						"id": "150602",
						"pid": 1506,
						"deep": 2,
						"name": "东胜",
						"pinyin": "dong sheng",
						"pinyin_prefix": "d",
						"ext_id": "150602000000",
						"ext_name": "东胜区"
					},
					{
						"id": "150603",
						"pid": 1506,
						"deep": 2,
						"name": "康巴什",
						"pinyin": "kang ba shi",
						"pinyin_prefix": "k",
						"ext_id": "150603000000",
						"ext_name": "康巴什区"
					},
					{
						"id": "150621",
						"pid": 1506,
						"deep": 2,
						"name": "达拉特旗",
						"pinyin": "da la te qi",
						"pinyin_prefix": "d",
						"ext_id": "150621000000",
						"ext_name": "达拉特旗"
					},
					{
						"id": "150622",
						"pid": 1506,
						"deep": 2,
						"name": "准格尔旗",
						"pinyin": "zhun ge er qi",
						"pinyin_prefix": "z",
						"ext_id": "150622000000",
						"ext_name": "准格尔旗"
					},
					{
						"id": "150623",
						"pid": 1506,
						"deep": 2,
						"name": "鄂托克前旗",
						"pinyin": "e tuo ke qian qi",
						"pinyin_prefix": "e",
						"ext_id": "150623000000",
						"ext_name": "鄂托克前旗"
					},
					{
						"id": "150624",
						"pid": 1506,
						"deep": 2,
						"name": "鄂托克旗",
						"pinyin": "e tuo ke qi",
						"pinyin_prefix": "e",
						"ext_id": "150624000000",
						"ext_name": "鄂托克旗"
					},
					{
						"id": "150625",
						"pid": 1506,
						"deep": 2,
						"name": "杭锦旗",
						"pinyin": "hang jin qi",
						"pinyin_prefix": "h",
						"ext_id": "150625000000",
						"ext_name": "杭锦旗"
					},
					{
						"id": "150626",
						"pid": 1506,
						"deep": 2,
						"name": "乌审旗",
						"pinyin": "wu shen qi",
						"pinyin_prefix": "w",
						"ext_id": "150626000000",
						"ext_name": "乌审旗"
					},
					{
						"id": "150627",
						"pid": 1506,
						"deep": 2,
						"name": "伊金霍洛旗",
						"pinyin": "yi jin huo luo qi",
						"pinyin_prefix": "y",
						"ext_id": "150627000000",
						"ext_name": "伊金霍洛旗"
					}
				]
			},
			{
				"id": "1507",
				"pid": 15,
				"deep": 1,
				"name": "呼伦贝尔",
				"pinyin": "hu lun bei er",
				"pinyin_prefix": "h",
				"ext_id": "150700000000",
				"ext_name": "呼伦贝尔市",
				"childs": [
					{
						"id": "150702",
						"pid": 1507,
						"deep": 2,
						"name": "海拉尔",
						"pinyin": "hai la er",
						"pinyin_prefix": "h",
						"ext_id": "150702000000",
						"ext_name": "海拉尔区"
					},
					{
						"id": "150703",
						"pid": 1507,
						"deep": 2,
						"name": "扎赉诺尔区",
						"pinyin": "zha lai nuo er qu",
						"pinyin_prefix": "z",
						"ext_id": "150703000000",
						"ext_name": "扎赉诺尔区"
					},
					{
						"id": "150721",
						"pid": 1507,
						"deep": 2,
						"name": "阿荣旗",
						"pinyin": "a rong qi",
						"pinyin_prefix": "a",
						"ext_id": "150721000000",
						"ext_name": "阿荣旗"
					},
					{
						"id": "150722",
						"pid": 1507,
						"deep": 2,
						"name": "莫力达瓦",
						"pinyin": "mo li da wa",
						"pinyin_prefix": "m",
						"ext_id": "150722000000",
						"ext_name": "莫力达瓦达斡尔族自治旗"
					},
					{
						"id": "150723",
						"pid": 1507,
						"deep": 2,
						"name": "鄂伦春自治旗",
						"pinyin": "e lun chun zi zhi qi",
						"pinyin_prefix": "e",
						"ext_id": "150723000000",
						"ext_name": "鄂伦春自治旗"
					},
					{
						"id": "150724",
						"pid": 1507,
						"deep": 2,
						"name": "鄂温克族自治旗",
						"pinyin": "e wen ke zu zi zhi qi",
						"pinyin_prefix": "e",
						"ext_id": "150724000000",
						"ext_name": "鄂温克族自治旗"
					},
					{
						"id": "150725",
						"pid": 1507,
						"deep": 2,
						"name": "陈巴尔虎旗",
						"pinyin": "chen ba er hu qi",
						"pinyin_prefix": "c",
						"ext_id": "150725000000",
						"ext_name": "陈巴尔虎旗"
					},
					{
						"id": "150726",
						"pid": 1507,
						"deep": 2,
						"name": "新巴尔虎左旗",
						"pinyin": "xin ba er hu zuo qi",
						"pinyin_prefix": "x",
						"ext_id": "150726000000",
						"ext_name": "新巴尔虎左旗"
					},
					{
						"id": "150727",
						"pid": 1507,
						"deep": 2,
						"name": "新巴尔虎右旗",
						"pinyin": "xin ba er hu you qi",
						"pinyin_prefix": "x",
						"ext_id": "150727000000",
						"ext_name": "新巴尔虎右旗"
					},
					{
						"id": "150781",
						"pid": 1507,
						"deep": 2,
						"name": "满洲里",
						"pinyin": "man zhou li",
						"pinyin_prefix": "m",
						"ext_id": "150781000000",
						"ext_name": "满洲里市"
					},
					{
						"id": "150782",
						"pid": 1507,
						"deep": 2,
						"name": "牙克石",
						"pinyin": "ya ke shi",
						"pinyin_prefix": "y",
						"ext_id": "150782000000",
						"ext_name": "牙克石市"
					},
					{
						"id": "150783",
						"pid": 1507,
						"deep": 2,
						"name": "扎兰屯",
						"pinyin": "zha lan tun",
						"pinyin_prefix": "z",
						"ext_id": "150783000000",
						"ext_name": "扎兰屯市"
					},
					{
						"id": "150784",
						"pid": 1507,
						"deep": 2,
						"name": "额尔古纳",
						"pinyin": "e er gu na",
						"pinyin_prefix": "e",
						"ext_id": "150784000000",
						"ext_name": "额尔古纳市"
					},
					{
						"id": "150785",
						"pid": 1507,
						"deep": 2,
						"name": "根河",
						"pinyin": "gen he",
						"pinyin_prefix": "g",
						"ext_id": "150785000000",
						"ext_name": "根河市"
					}
				]
			},
			{
				"id": "1508",
				"pid": 15,
				"deep": 1,
				"name": "巴彦淖尔",
				"pinyin": "ba yan nao er",
				"pinyin_prefix": "b",
				"ext_id": "150800000000",
				"ext_name": "巴彦淖尔市",
				"childs": [
					{
						"id": "150802",
						"pid": 1508,
						"deep": 2,
						"name": "临河",
						"pinyin": "lin he",
						"pinyin_prefix": "l",
						"ext_id": "150802000000",
						"ext_name": "临河区"
					},
					{
						"id": "150821",
						"pid": 1508,
						"deep": 2,
						"name": "五原",
						"pinyin": "wu yuan",
						"pinyin_prefix": "w",
						"ext_id": "150821000000",
						"ext_name": "五原县"
					},
					{
						"id": "150822",
						"pid": 1508,
						"deep": 2,
						"name": "磴口",
						"pinyin": "deng kou",
						"pinyin_prefix": "d",
						"ext_id": "150822000000",
						"ext_name": "磴口县"
					},
					{
						"id": "150823",
						"pid": 1508,
						"deep": 2,
						"name": "乌拉特前旗",
						"pinyin": "wu la te qian qi",
						"pinyin_prefix": "w",
						"ext_id": "150823000000",
						"ext_name": "乌拉特前旗"
					},
					{
						"id": "150824",
						"pid": 1508,
						"deep": 2,
						"name": "乌拉特中旗",
						"pinyin": "wu la te zhong qi",
						"pinyin_prefix": "w",
						"ext_id": "150824000000",
						"ext_name": "乌拉特中旗"
					},
					{
						"id": "150825",
						"pid": 1508,
						"deep": 2,
						"name": "乌拉特后旗",
						"pinyin": "wu la te hou qi",
						"pinyin_prefix": "w",
						"ext_id": "150825000000",
						"ext_name": "乌拉特后旗"
					},
					{
						"id": "150826",
						"pid": 1508,
						"deep": 2,
						"name": "杭锦后旗",
						"pinyin": "hang jin hou qi",
						"pinyin_prefix": "h",
						"ext_id": "150826000000",
						"ext_name": "杭锦后旗"
					}
				]
			},
			{
				"id": "1509",
				"pid": 15,
				"deep": 1,
				"name": "乌兰察布",
				"pinyin": "wu lan cha bu",
				"pinyin_prefix": "w",
				"ext_id": "150900000000",
				"ext_name": "乌兰察布市",
				"childs": [
					{
						"id": "150902",
						"pid": 1509,
						"deep": 2,
						"name": "集宁",
						"pinyin": "ji ning",
						"pinyin_prefix": "j",
						"ext_id": "150902000000",
						"ext_name": "集宁区"
					},
					{
						"id": "150921",
						"pid": 1509,
						"deep": 2,
						"name": "卓资",
						"pinyin": "zhuo zi",
						"pinyin_prefix": "z",
						"ext_id": "150921000000",
						"ext_name": "卓资县"
					},
					{
						"id": "150922",
						"pid": 1509,
						"deep": 2,
						"name": "化德",
						"pinyin": "hua de",
						"pinyin_prefix": "h",
						"ext_id": "150922000000",
						"ext_name": "化德县"
					},
					{
						"id": "150923",
						"pid": 1509,
						"deep": 2,
						"name": "商都",
						"pinyin": "shang du",
						"pinyin_prefix": "s",
						"ext_id": "150923000000",
						"ext_name": "商都县"
					},
					{
						"id": "150924",
						"pid": 1509,
						"deep": 2,
						"name": "兴和",
						"pinyin": "xing he",
						"pinyin_prefix": "x",
						"ext_id": "150924000000",
						"ext_name": "兴和县"
					},
					{
						"id": "150925",
						"pid": 1509,
						"deep": 2,
						"name": "凉城",
						"pinyin": "liang cheng",
						"pinyin_prefix": "l",
						"ext_id": "150925000000",
						"ext_name": "凉城县"
					},
					{
						"id": "150926",
						"pid": 1509,
						"deep": 2,
						"name": "察哈尔右翼前旗",
						"pinyin": "cha ha er you yi qian qi",
						"pinyin_prefix": "c",
						"ext_id": "150926000000",
						"ext_name": "察哈尔右翼前旗"
					},
					{
						"id": "150927",
						"pid": 1509,
						"deep": 2,
						"name": "察哈尔右翼中旗",
						"pinyin": "cha ha er you yi zhong qi",
						"pinyin_prefix": "c",
						"ext_id": "150927000000",
						"ext_name": "察哈尔右翼中旗"
					},
					{
						"id": "150928",
						"pid": 1509,
						"deep": 2,
						"name": "察哈尔右翼后旗",
						"pinyin": "cha ha er you yi hou qi",
						"pinyin_prefix": "c",
						"ext_id": "150928000000",
						"ext_name": "察哈尔右翼后旗"
					},
					{
						"id": "150929",
						"pid": 1509,
						"deep": 2,
						"name": "四子王旗",
						"pinyin": "si zi wang qi",
						"pinyin_prefix": "s",
						"ext_id": "150929000000",
						"ext_name": "四子王旗"
					},
					{
						"id": "150981",
						"pid": 1509,
						"deep": 2,
						"name": "丰镇",
						"pinyin": "feng zhen",
						"pinyin_prefix": "f",
						"ext_id": "150981000000",
						"ext_name": "丰镇市"
					}
				]
			},
			{
				"id": "1522",
				"pid": 15,
				"deep": 1,
				"name": "兴安",
				"pinyin": "xing an",
				"pinyin_prefix": "x",
				"ext_id": "152200000000",
				"ext_name": "兴安盟",
				"childs": [
					{
						"id": "152201",
						"pid": 1522,
						"deep": 2,
						"name": "乌兰浩特",
						"pinyin": "wu lan hao te",
						"pinyin_prefix": "w",
						"ext_id": "152201000000",
						"ext_name": "乌兰浩特市"
					},
					{
						"id": "152202",
						"pid": 1522,
						"deep": 2,
						"name": "阿尔山",
						"pinyin": "a er shan",
						"pinyin_prefix": "a",
						"ext_id": "152202000000",
						"ext_name": "阿尔山市"
					},
					{
						"id": "152221",
						"pid": 1522,
						"deep": 2,
						"name": "科尔沁右翼前旗",
						"pinyin": "ke er qin you yi qian qi",
						"pinyin_prefix": "k",
						"ext_id": "152221000000",
						"ext_name": "科尔沁右翼前旗"
					},
					{
						"id": "152222",
						"pid": 1522,
						"deep": 2,
						"name": "科尔沁右翼中旗",
						"pinyin": "ke er qin you yi zhong qi",
						"pinyin_prefix": "k",
						"ext_id": "152222000000",
						"ext_name": "科尔沁右翼中旗"
					},
					{
						"id": "152223",
						"pid": 1522,
						"deep": 2,
						"name": "扎赉特旗",
						"pinyin": "zha lai te qi",
						"pinyin_prefix": "z",
						"ext_id": "152223000000",
						"ext_name": "扎赉特旗"
					},
					{
						"id": "152224",
						"pid": 1522,
						"deep": 2,
						"name": "突泉",
						"pinyin": "tu quan",
						"pinyin_prefix": "t",
						"ext_id": "152224000000",
						"ext_name": "突泉县"
					}
				]
			},
			{
				"id": "1525",
				"pid": 15,
				"deep": 1,
				"name": "锡林郭勒",
				"pinyin": "xi lin guo le",
				"pinyin_prefix": "x",
				"ext_id": "152500000000",
				"ext_name": "锡林郭勒盟",
				"childs": [
					{
						"id": "152501",
						"pid": 1525,
						"deep": 2,
						"name": "二连浩特",
						"pinyin": "er lian hao te",
						"pinyin_prefix": "e",
						"ext_id": "152501000000",
						"ext_name": "二连浩特市"
					},
					{
						"id": "152502",
						"pid": 1525,
						"deep": 2,
						"name": "锡林浩特",
						"pinyin": "xi lin hao te",
						"pinyin_prefix": "x",
						"ext_id": "152502000000",
						"ext_name": "锡林浩特市"
					},
					{
						"id": "152522",
						"pid": 1525,
						"deep": 2,
						"name": "阿巴嘎旗",
						"pinyin": "a ba ga qi",
						"pinyin_prefix": "a",
						"ext_id": "152522000000",
						"ext_name": "阿巴嘎旗"
					},
					{
						"id": "152523",
						"pid": 1525,
						"deep": 2,
						"name": "苏尼特左旗",
						"pinyin": "su ni te zuo qi",
						"pinyin_prefix": "s",
						"ext_id": "152523000000",
						"ext_name": "苏尼特左旗"
					},
					{
						"id": "152524",
						"pid": 1525,
						"deep": 2,
						"name": "苏尼特右旗",
						"pinyin": "su ni te you qi",
						"pinyin_prefix": "s",
						"ext_id": "152524000000",
						"ext_name": "苏尼特右旗"
					},
					{
						"id": "152525",
						"pid": 1525,
						"deep": 2,
						"name": "东乌珠穆沁旗",
						"pinyin": "dong wu zhu mu qin qi",
						"pinyin_prefix": "d",
						"ext_id": "152525000000",
						"ext_name": "东乌珠穆沁旗"
					},
					{
						"id": "152526",
						"pid": 1525,
						"deep": 2,
						"name": "西乌珠穆沁旗",
						"pinyin": "xi wu zhu mu qin qi",
						"pinyin_prefix": "x",
						"ext_id": "152526000000",
						"ext_name": "西乌珠穆沁旗"
					},
					{
						"id": "152527",
						"pid": 1525,
						"deep": 2,
						"name": "太仆寺旗",
						"pinyin": "tai pu si qi",
						"pinyin_prefix": "t",
						"ext_id": "152527000000",
						"ext_name": "太仆寺旗"
					},
					{
						"id": "152528",
						"pid": 1525,
						"deep": 2,
						"name": "镶黄旗",
						"pinyin": "xiang huang qi",
						"pinyin_prefix": "x",
						"ext_id": "152528000000",
						"ext_name": "镶黄旗"
					},
					{
						"id": "152529",
						"pid": 1525,
						"deep": 2,
						"name": "正镶白旗",
						"pinyin": "zheng xiang bai qi",
						"pinyin_prefix": "z",
						"ext_id": "152529000000",
						"ext_name": "正镶白旗"
					},
					{
						"id": "152530",
						"pid": 1525,
						"deep": 2,
						"name": "正蓝旗",
						"pinyin": "zheng lan qi",
						"pinyin_prefix": "z",
						"ext_id": "152530000000",
						"ext_name": "正蓝旗"
					},
					{
						"id": "152531",
						"pid": 1525,
						"deep": 2,
						"name": "多伦",
						"pinyin": "duo lun",
						"pinyin_prefix": "d",
						"ext_id": "152531000000",
						"ext_name": "多伦县"
					}
				]
			},
			{
				"id": "1529",
				"pid": 15,
				"deep": 1,
				"name": "阿拉善",
				"pinyin": "a la shan",
				"pinyin_prefix": "a",
				"ext_id": "152900000000",
				"ext_name": "阿拉善盟",
				"childs": [
					{
						"id": "152921",
						"pid": 1529,
						"deep": 2,
						"name": "阿拉善左旗",
						"pinyin": "a la shan zuo qi",
						"pinyin_prefix": "a",
						"ext_id": "152921000000",
						"ext_name": "阿拉善左旗"
					},
					{
						"id": "152922",
						"pid": 1529,
						"deep": 2,
						"name": "阿拉善右旗",
						"pinyin": "a la shan you qi",
						"pinyin_prefix": "a",
						"ext_id": "152922000000",
						"ext_name": "阿拉善右旗"
					},
					{
						"id": "152923",
						"pid": 1529,
						"deep": 2,
						"name": "额济纳旗",
						"pinyin": "e ji na qi",
						"pinyin_prefix": "e",
						"ext_id": "152923000000",
						"ext_name": "额济纳旗"
					}
				]
			}
		]
	},
	{
		"id": "21",
		"pid": 0,
		"deep": 0,
		"name": "辽宁",
		"pinyin": "liao ning",
		"pinyin_prefix": "l",
		"ext_id": "210000000000",
		"ext_name": "辽宁省",
		"childs": [
			{
				"id": "2101",
				"pid": 21,
				"deep": 1,
				"name": "沈阳",
				"pinyin": "shen yang",
				"pinyin_prefix": "s",
				"ext_id": "210100000000",
				"ext_name": "沈阳市",
				"childs": [
					{
						"id": "210102",
						"pid": 2101,
						"deep": 2,
						"name": "和平",
						"pinyin": "he ping",
						"pinyin_prefix": "h",
						"ext_id": "210102000000",
						"ext_name": "和平区"
					},
					{
						"id": "210103",
						"pid": 2101,
						"deep": 2,
						"name": "沈河",
						"pinyin": "shen he",
						"pinyin_prefix": "s",
						"ext_id": "210103000000",
						"ext_name": "沈河区"
					},
					{
						"id": "210104",
						"pid": 2101,
						"deep": 2,
						"name": "大东",
						"pinyin": "da dong",
						"pinyin_prefix": "d",
						"ext_id": "210104000000",
						"ext_name": "大东区"
					},
					{
						"id": "210105",
						"pid": 2101,
						"deep": 2,
						"name": "皇姑",
						"pinyin": "huang gu",
						"pinyin_prefix": "h",
						"ext_id": "210105000000",
						"ext_name": "皇姑区"
					},
					{
						"id": "210106",
						"pid": 2101,
						"deep": 2,
						"name": "铁西",
						"pinyin": "tie xi",
						"pinyin_prefix": "t",
						"ext_id": "210106000000",
						"ext_name": "铁西区"
					},
					{
						"id": "210111",
						"pid": 2101,
						"deep": 2,
						"name": "苏家屯",
						"pinyin": "su jia tun",
						"pinyin_prefix": "s",
						"ext_id": "210111000000",
						"ext_name": "苏家屯区"
					},
					{
						"id": "210112",
						"pid": 2101,
						"deep": 2,
						"name": "浑南",
						"pinyin": "hun nan",
						"pinyin_prefix": "h",
						"ext_id": "210112000000",
						"ext_name": "浑南区"
					},
					{
						"id": "210113",
						"pid": 2101,
						"deep": 2,
						"name": "沈北新区",
						"pinyin": "shen bei xin qu",
						"pinyin_prefix": "s",
						"ext_id": "210113000000",
						"ext_name": "沈北新区"
					},
					{
						"id": "210114",
						"pid": 2101,
						"deep": 2,
						"name": "于洪",
						"pinyin": "yu hong",
						"pinyin_prefix": "y",
						"ext_id": "210114000000",
						"ext_name": "于洪区"
					},
					{
						"id": "210115",
						"pid": 2101,
						"deep": 2,
						"name": "辽中",
						"pinyin": "liao zhong",
						"pinyin_prefix": "l",
						"ext_id": "210115000000",
						"ext_name": "辽中区"
					},
					{
						"id": "210123",
						"pid": 2101,
						"deep": 2,
						"name": "康平",
						"pinyin": "kang ping",
						"pinyin_prefix": "k",
						"ext_id": "210123000000",
						"ext_name": "康平县"
					},
					{
						"id": "210124",
						"pid": 2101,
						"deep": 2,
						"name": "法库",
						"pinyin": "fa ku",
						"pinyin_prefix": "f",
						"ext_id": "210124000000",
						"ext_name": "法库县"
					},
					{
						"id": "210181",
						"pid": 2101,
						"deep": 2,
						"name": "新民",
						"pinyin": "xin min",
						"pinyin_prefix": "x",
						"ext_id": "210181000000",
						"ext_name": "新民市"
					}
				]
			},
			{
				"id": "2102",
				"pid": 21,
				"deep": 1,
				"name": "大连",
				"pinyin": "da lian",
				"pinyin_prefix": "d",
				"ext_id": "210200000000",
				"ext_name": "大连市",
				"childs": [
					{
						"id": "210202",
						"pid": 2102,
						"deep": 2,
						"name": "中山",
						"pinyin": "zhong shan",
						"pinyin_prefix": "z",
						"ext_id": "210202000000",
						"ext_name": "中山区"
					},
					{
						"id": "210203",
						"pid": 2102,
						"deep": 2,
						"name": "西岗",
						"pinyin": "xi gang",
						"pinyin_prefix": "x",
						"ext_id": "210203000000",
						"ext_name": "西岗区"
					},
					{
						"id": "210204",
						"pid": 2102,
						"deep": 2,
						"name": "沙河口",
						"pinyin": "sha he kou",
						"pinyin_prefix": "s",
						"ext_id": "210204000000",
						"ext_name": "沙河口区"
					},
					{
						"id": "210211",
						"pid": 2102,
						"deep": 2,
						"name": "甘井子",
						"pinyin": "gan jing zi",
						"pinyin_prefix": "g",
						"ext_id": "210211000000",
						"ext_name": "甘井子区"
					},
					{
						"id": "210212",
						"pid": 2102,
						"deep": 2,
						"name": "旅顺口",
						"pinyin": "lv shun kou",
						"pinyin_prefix": "l",
						"ext_id": "210212000000",
						"ext_name": "旅顺口区"
					},
					{
						"id": "210213",
						"pid": 2102,
						"deep": 2,
						"name": "金州",
						"pinyin": "jin zhou",
						"pinyin_prefix": "j",
						"ext_id": "210213000000",
						"ext_name": "金州区"
					},
					{
						"id": "210214",
						"pid": 2102,
						"deep": 2,
						"name": "普兰店",
						"pinyin": "pu lan dian",
						"pinyin_prefix": "p",
						"ext_id": "210214000000",
						"ext_name": "普兰店区"
					},
					{
						"id": "210224",
						"pid": 2102,
						"deep": 2,
						"name": "长海",
						"pinyin": "chang hai",
						"pinyin_prefix": "c",
						"ext_id": "210224000000",
						"ext_name": "长海县"
					},
					{
						"id": "210281",
						"pid": 2102,
						"deep": 2,
						"name": "瓦房店",
						"pinyin": "wa fang dian",
						"pinyin_prefix": "w",
						"ext_id": "210281000000",
						"ext_name": "瓦房店市"
					},
					{
						"id": "210283",
						"pid": 2102,
						"deep": 2,
						"name": "庄河",
						"pinyin": "zhuang he",
						"pinyin_prefix": "z",
						"ext_id": "210283000000",
						"ext_name": "庄河市"
					}
				]
			},
			{
				"id": "2103",
				"pid": 21,
				"deep": 1,
				"name": "鞍山",
				"pinyin": "an shan",
				"pinyin_prefix": "a",
				"ext_id": "210300000000",
				"ext_name": "鞍山市",
				"childs": [
					{
						"id": "210302",
						"pid": 2103,
						"deep": 2,
						"name": "铁东",
						"pinyin": "tie dong",
						"pinyin_prefix": "t",
						"ext_id": "210302000000",
						"ext_name": "铁东区"
					},
					{
						"id": "210303",
						"pid": 2103,
						"deep": 2,
						"name": "铁西",
						"pinyin": "tie xi",
						"pinyin_prefix": "t",
						"ext_id": "210303000000",
						"ext_name": "铁西区"
					},
					{
						"id": "210304",
						"pid": 2103,
						"deep": 2,
						"name": "立山",
						"pinyin": "li shan",
						"pinyin_prefix": "l",
						"ext_id": "210304000000",
						"ext_name": "立山区"
					},
					{
						"id": "210311",
						"pid": 2103,
						"deep": 2,
						"name": "千山",
						"pinyin": "qian shan",
						"pinyin_prefix": "q",
						"ext_id": "210311000000",
						"ext_name": "千山区"
					},
					{
						"id": "210321",
						"pid": 2103,
						"deep": 2,
						"name": "台安",
						"pinyin": "tai an",
						"pinyin_prefix": "t",
						"ext_id": "210321000000",
						"ext_name": "台安县"
					},
					{
						"id": "210323",
						"pid": 2103,
						"deep": 2,
						"name": "岫岩",
						"pinyin": "xiu yan",
						"pinyin_prefix": "x",
						"ext_id": "210323000000",
						"ext_name": "岫岩满族自治县"
					},
					{
						"id": "210381",
						"pid": 2103,
						"deep": 2,
						"name": "海城",
						"pinyin": "hai cheng",
						"pinyin_prefix": "h",
						"ext_id": "210381000000",
						"ext_name": "海城市"
					}
				]
			},
			{
				"id": "2104",
				"pid": 21,
				"deep": 1,
				"name": "抚顺",
				"pinyin": "fu shun",
				"pinyin_prefix": "f",
				"ext_id": "210400000000",
				"ext_name": "抚顺市",
				"childs": [
					{
						"id": "210402",
						"pid": 2104,
						"deep": 2,
						"name": "新抚",
						"pinyin": "xin fu",
						"pinyin_prefix": "x",
						"ext_id": "210402000000",
						"ext_name": "新抚区"
					},
					{
						"id": "210403",
						"pid": 2104,
						"deep": 2,
						"name": "东洲",
						"pinyin": "dong zhou",
						"pinyin_prefix": "d",
						"ext_id": "210403000000",
						"ext_name": "东洲区"
					},
					{
						"id": "210404",
						"pid": 2104,
						"deep": 2,
						"name": "望花",
						"pinyin": "wang hua",
						"pinyin_prefix": "w",
						"ext_id": "210404000000",
						"ext_name": "望花区"
					},
					{
						"id": "210411",
						"pid": 2104,
						"deep": 2,
						"name": "顺城",
						"pinyin": "shun cheng",
						"pinyin_prefix": "s",
						"ext_id": "210411000000",
						"ext_name": "顺城区"
					},
					{
						"id": "210421",
						"pid": 2104,
						"deep": 2,
						"name": "抚顺县",
						"pinyin": "fu shun xian",
						"pinyin_prefix": "f",
						"ext_id": "210421000000",
						"ext_name": "抚顺县"
					},
					{
						"id": "210422",
						"pid": 2104,
						"deep": 2,
						"name": "新宾",
						"pinyin": "xin bin",
						"pinyin_prefix": "x",
						"ext_id": "210422000000",
						"ext_name": "新宾满族自治县"
					},
					{
						"id": "210423",
						"pid": 2104,
						"deep": 2,
						"name": "清原",
						"pinyin": "qing yuan",
						"pinyin_prefix": "q",
						"ext_id": "210423000000",
						"ext_name": "清原满族自治县"
					}
				]
			},
			{
				"id": "2105",
				"pid": 21,
				"deep": 1,
				"name": "本溪",
				"pinyin": "ben xi",
				"pinyin_prefix": "b",
				"ext_id": "210500000000",
				"ext_name": "本溪市",
				"childs": [
					{
						"id": "210502",
						"pid": 2105,
						"deep": 2,
						"name": "平山",
						"pinyin": "ping shan",
						"pinyin_prefix": "p",
						"ext_id": "210502000000",
						"ext_name": "平山区"
					},
					{
						"id": "210503",
						"pid": 2105,
						"deep": 2,
						"name": "溪湖",
						"pinyin": "xi hu",
						"pinyin_prefix": "x",
						"ext_id": "210503000000",
						"ext_name": "溪湖区"
					},
					{
						"id": "210504",
						"pid": 2105,
						"deep": 2,
						"name": "明山",
						"pinyin": "ming shan",
						"pinyin_prefix": "m",
						"ext_id": "210504000000",
						"ext_name": "明山区"
					},
					{
						"id": "210505",
						"pid": 2105,
						"deep": 2,
						"name": "南芬",
						"pinyin": "nan fen",
						"pinyin_prefix": "n",
						"ext_id": "210505000000",
						"ext_name": "南芬区"
					},
					{
						"id": "210521",
						"pid": 2105,
						"deep": 2,
						"name": "本溪满族自治县",
						"pinyin": "ben xi man zu zi zhi xian",
						"pinyin_prefix": "b",
						"ext_id": "210521000000",
						"ext_name": "本溪满族自治县"
					},
					{
						"id": "210522",
						"pid": 2105,
						"deep": 2,
						"name": "桓仁",
						"pinyin": "huan ren",
						"pinyin_prefix": "h",
						"ext_id": "210522000000",
						"ext_name": "桓仁满族自治县"
					}
				]
			},
			{
				"id": "2106",
				"pid": 21,
				"deep": 1,
				"name": "丹东",
				"pinyin": "dan dong",
				"pinyin_prefix": "d",
				"ext_id": "210600000000",
				"ext_name": "丹东市",
				"childs": [
					{
						"id": "210602",
						"pid": 2106,
						"deep": 2,
						"name": "元宝",
						"pinyin": "yuan bao",
						"pinyin_prefix": "y",
						"ext_id": "210602000000",
						"ext_name": "元宝区"
					},
					{
						"id": "210603",
						"pid": 2106,
						"deep": 2,
						"name": "振兴",
						"pinyin": "zhen xing",
						"pinyin_prefix": "z",
						"ext_id": "210603000000",
						"ext_name": "振兴区"
					},
					{
						"id": "210604",
						"pid": 2106,
						"deep": 2,
						"name": "振安",
						"pinyin": "zhen an",
						"pinyin_prefix": "z",
						"ext_id": "210604000000",
						"ext_name": "振安区"
					},
					{
						"id": "210624",
						"pid": 2106,
						"deep": 2,
						"name": "宽甸",
						"pinyin": "kuan dian",
						"pinyin_prefix": "k",
						"ext_id": "210624000000",
						"ext_name": "宽甸满族自治县"
					},
					{
						"id": "210681",
						"pid": 2106,
						"deep": 2,
						"name": "东港",
						"pinyin": "dong gang",
						"pinyin_prefix": "d",
						"ext_id": "210681000000",
						"ext_name": "东港市"
					},
					{
						"id": "210682",
						"pid": 2106,
						"deep": 2,
						"name": "凤城",
						"pinyin": "feng cheng",
						"pinyin_prefix": "f",
						"ext_id": "210682000000",
						"ext_name": "凤城市"
					}
				]
			},
			{
				"id": "2107",
				"pid": 21,
				"deep": 1,
				"name": "锦州",
				"pinyin": "jin zhou",
				"pinyin_prefix": "j",
				"ext_id": "210700000000",
				"ext_name": "锦州市",
				"childs": [
					{
						"id": "210702",
						"pid": 2107,
						"deep": 2,
						"name": "古塔",
						"pinyin": "gu ta",
						"pinyin_prefix": "g",
						"ext_id": "210702000000",
						"ext_name": "古塔区"
					},
					{
						"id": "210703",
						"pid": 2107,
						"deep": 2,
						"name": "凌河",
						"pinyin": "ling he",
						"pinyin_prefix": "l",
						"ext_id": "210703000000",
						"ext_name": "凌河区"
					},
					{
						"id": "210711",
						"pid": 2107,
						"deep": 2,
						"name": "太和",
						"pinyin": "tai he",
						"pinyin_prefix": "t",
						"ext_id": "210711000000",
						"ext_name": "太和区"
					},
					{
						"id": "210726",
						"pid": 2107,
						"deep": 2,
						"name": "黑山",
						"pinyin": "hei shan",
						"pinyin_prefix": "h",
						"ext_id": "210726000000",
						"ext_name": "黑山县"
					},
					{
						"id": "210727",
						"pid": 2107,
						"deep": 2,
						"name": "义县",
						"pinyin": "yi xian",
						"pinyin_prefix": "y",
						"ext_id": "210727000000",
						"ext_name": "义县"
					},
					{
						"id": "210781",
						"pid": 2107,
						"deep": 2,
						"name": "凌海",
						"pinyin": "ling hai",
						"pinyin_prefix": "l",
						"ext_id": "210781000000",
						"ext_name": "凌海市"
					},
					{
						"id": "210782",
						"pid": 2107,
						"deep": 2,
						"name": "北镇",
						"pinyin": "bei zhen",
						"pinyin_prefix": "b",
						"ext_id": "210782000000",
						"ext_name": "北镇市"
					}
				]
			},
			{
				"id": "2108",
				"pid": 21,
				"deep": 1,
				"name": "营口",
				"pinyin": "ying kou",
				"pinyin_prefix": "y",
				"ext_id": "210800000000",
				"ext_name": "营口市",
				"childs": [
					{
						"id": "210802",
						"pid": 2108,
						"deep": 2,
						"name": "站前",
						"pinyin": "zhan qian",
						"pinyin_prefix": "z",
						"ext_id": "210802000000",
						"ext_name": "站前区"
					},
					{
						"id": "210803",
						"pid": 2108,
						"deep": 2,
						"name": "西市",
						"pinyin": "xi shi",
						"pinyin_prefix": "x",
						"ext_id": "210803000000",
						"ext_name": "西市区"
					},
					{
						"id": "210804",
						"pid": 2108,
						"deep": 2,
						"name": "鲅鱼圈",
						"pinyin": "ba yu quan",
						"pinyin_prefix": "b",
						"ext_id": "210804000000",
						"ext_name": "鲅鱼圈区"
					},
					{
						"id": "210811",
						"pid": 2108,
						"deep": 2,
						"name": "老边",
						"pinyin": "lao bian",
						"pinyin_prefix": "l",
						"ext_id": "210811000000",
						"ext_name": "老边区"
					},
					{
						"id": "210881",
						"pid": 2108,
						"deep": 2,
						"name": "盖州",
						"pinyin": "gai zhou",
						"pinyin_prefix": "g",
						"ext_id": "210881000000",
						"ext_name": "盖州市"
					},
					{
						"id": "210882",
						"pid": 2108,
						"deep": 2,
						"name": "大石桥",
						"pinyin": "da shi qiao",
						"pinyin_prefix": "d",
						"ext_id": "210882000000",
						"ext_name": "大石桥市"
					}
				]
			},
			{
				"id": "2109",
				"pid": 21,
				"deep": 1,
				"name": "阜新",
				"pinyin": "fu xin",
				"pinyin_prefix": "f",
				"ext_id": "210900000000",
				"ext_name": "阜新市",
				"childs": [
					{
						"id": "210902",
						"pid": 2109,
						"deep": 2,
						"name": "海州",
						"pinyin": "hai zhou",
						"pinyin_prefix": "h",
						"ext_id": "210902000000",
						"ext_name": "海州区"
					},
					{
						"id": "210903",
						"pid": 2109,
						"deep": 2,
						"name": "新邱",
						"pinyin": "xin qiu",
						"pinyin_prefix": "x",
						"ext_id": "210903000000",
						"ext_name": "新邱区"
					},
					{
						"id": "210904",
						"pid": 2109,
						"deep": 2,
						"name": "太平",
						"pinyin": "tai ping",
						"pinyin_prefix": "t",
						"ext_id": "210904000000",
						"ext_name": "太平区"
					},
					{
						"id": "210905",
						"pid": 2109,
						"deep": 2,
						"name": "清河门",
						"pinyin": "qing he men",
						"pinyin_prefix": "q",
						"ext_id": "210905000000",
						"ext_name": "清河门区"
					},
					{
						"id": "210911",
						"pid": 2109,
						"deep": 2,
						"name": "细河",
						"pinyin": "xi he",
						"pinyin_prefix": "x",
						"ext_id": "210911000000",
						"ext_name": "细河区"
					},
					{
						"id": "210921",
						"pid": 2109,
						"deep": 2,
						"name": "阜新蒙古族自治县",
						"pinyin": "fu xin meng gu zu zi zhi xian",
						"pinyin_prefix": "f",
						"ext_id": "210921000000",
						"ext_name": "阜新蒙古族自治县"
					},
					{
						"id": "210922",
						"pid": 2109,
						"deep": 2,
						"name": "彰武",
						"pinyin": "zhang wu",
						"pinyin_prefix": "z",
						"ext_id": "210922000000",
						"ext_name": "彰武县"
					}
				]
			},
			{
				"id": "2110",
				"pid": 21,
				"deep": 1,
				"name": "辽阳",
				"pinyin": "liao yang",
				"pinyin_prefix": "l",
				"ext_id": "211000000000",
				"ext_name": "辽阳市",
				"childs": [
					{
						"id": "211002",
						"pid": 2110,
						"deep": 2,
						"name": "白塔",
						"pinyin": "bai ta",
						"pinyin_prefix": "b",
						"ext_id": "211002000000",
						"ext_name": "白塔区"
					},
					{
						"id": "211003",
						"pid": 2110,
						"deep": 2,
						"name": "文圣",
						"pinyin": "wen sheng",
						"pinyin_prefix": "w",
						"ext_id": "211003000000",
						"ext_name": "文圣区"
					},
					{
						"id": "211004",
						"pid": 2110,
						"deep": 2,
						"name": "宏伟",
						"pinyin": "hong wei",
						"pinyin_prefix": "h",
						"ext_id": "211004000000",
						"ext_name": "宏伟区"
					},
					{
						"id": "211005",
						"pid": 2110,
						"deep": 2,
						"name": "弓长岭",
						"pinyin": "gong chang ling",
						"pinyin_prefix": "g",
						"ext_id": "211005000000",
						"ext_name": "弓长岭区"
					},
					{
						"id": "211011",
						"pid": 2110,
						"deep": 2,
						"name": "太子河",
						"pinyin": "tai zi he",
						"pinyin_prefix": "t",
						"ext_id": "211011000000",
						"ext_name": "太子河区"
					},
					{
						"id": "211021",
						"pid": 2110,
						"deep": 2,
						"name": "辽阳县",
						"pinyin": "liao yang xian",
						"pinyin_prefix": "l",
						"ext_id": "211021000000",
						"ext_name": "辽阳县"
					},
					{
						"id": "211081",
						"pid": 2110,
						"deep": 2,
						"name": "灯塔",
						"pinyin": "deng ta",
						"pinyin_prefix": "d",
						"ext_id": "211081000000",
						"ext_name": "灯塔市"
					}
				]
			},
			{
				"id": "2111",
				"pid": 21,
				"deep": 1,
				"name": "盘锦",
				"pinyin": "pan jin",
				"pinyin_prefix": "p",
				"ext_id": "211100000000",
				"ext_name": "盘锦市",
				"childs": [
					{
						"id": "211102",
						"pid": 2111,
						"deep": 2,
						"name": "双台子",
						"pinyin": "shuang tai zi",
						"pinyin_prefix": "s",
						"ext_id": "211102000000",
						"ext_name": "双台子区"
					},
					{
						"id": "211103",
						"pid": 2111,
						"deep": 2,
						"name": "兴隆台",
						"pinyin": "xing long tai",
						"pinyin_prefix": "x",
						"ext_id": "211103000000",
						"ext_name": "兴隆台区"
					},
					{
						"id": "211104",
						"pid": 2111,
						"deep": 2,
						"name": "大洼",
						"pinyin": "da wa",
						"pinyin_prefix": "d",
						"ext_id": "211104000000",
						"ext_name": "大洼区"
					},
					{
						"id": "211122",
						"pid": 2111,
						"deep": 2,
						"name": "盘山",
						"pinyin": "pan shan",
						"pinyin_prefix": "p",
						"ext_id": "211122000000",
						"ext_name": "盘山县"
					}
				]
			},
			{
				"id": "2112",
				"pid": 21,
				"deep": 1,
				"name": "铁岭",
				"pinyin": "tie ling",
				"pinyin_prefix": "t",
				"ext_id": "211200000000",
				"ext_name": "铁岭市",
				"childs": [
					{
						"id": "211202",
						"pid": 2112,
						"deep": 2,
						"name": "银州",
						"pinyin": "yin zhou",
						"pinyin_prefix": "y",
						"ext_id": "211202000000",
						"ext_name": "银州区"
					},
					{
						"id": "211204",
						"pid": 2112,
						"deep": 2,
						"name": "清河",
						"pinyin": "qing he",
						"pinyin_prefix": "q",
						"ext_id": "211204000000",
						"ext_name": "清河区"
					},
					{
						"id": "211221",
						"pid": 2112,
						"deep": 2,
						"name": "铁岭县",
						"pinyin": "tie ling xian",
						"pinyin_prefix": "t",
						"ext_id": "211221000000",
						"ext_name": "铁岭县"
					},
					{
						"id": "211223",
						"pid": 2112,
						"deep": 2,
						"name": "西丰",
						"pinyin": "xi feng",
						"pinyin_prefix": "x",
						"ext_id": "211223000000",
						"ext_name": "西丰县"
					},
					{
						"id": "211224",
						"pid": 2112,
						"deep": 2,
						"name": "昌图",
						"pinyin": "chang tu",
						"pinyin_prefix": "c",
						"ext_id": "211224000000",
						"ext_name": "昌图县"
					},
					{
						"id": "211281",
						"pid": 2112,
						"deep": 2,
						"name": "调兵山",
						"pinyin": "diao bing shan",
						"pinyin_prefix": "d",
						"ext_id": "211281000000",
						"ext_name": "调兵山市"
					},
					{
						"id": "211282",
						"pid": 2112,
						"deep": 2,
						"name": "开原",
						"pinyin": "kai yuan",
						"pinyin_prefix": "k",
						"ext_id": "211282000000",
						"ext_name": "开原市"
					}
				]
			},
			{
				"id": "2113",
				"pid": 21,
				"deep": 1,
				"name": "朝阳",
				"pinyin": "chao yang",
				"pinyin_prefix": "c",
				"ext_id": "211300000000",
				"ext_name": "朝阳市",
				"childs": [
					{
						"id": "211302",
						"pid": 2113,
						"deep": 2,
						"name": "双塔",
						"pinyin": "shuang ta",
						"pinyin_prefix": "s",
						"ext_id": "211302000000",
						"ext_name": "双塔区"
					},
					{
						"id": "211303",
						"pid": 2113,
						"deep": 2,
						"name": "龙城",
						"pinyin": "long cheng",
						"pinyin_prefix": "l",
						"ext_id": "211303000000",
						"ext_name": "龙城区"
					},
					{
						"id": "211321",
						"pid": 2113,
						"deep": 2,
						"name": "朝阳县",
						"pinyin": "chao yang xian",
						"pinyin_prefix": "c",
						"ext_id": "211321000000",
						"ext_name": "朝阳县"
					},
					{
						"id": "211322",
						"pid": 2113,
						"deep": 2,
						"name": "建平",
						"pinyin": "jian ping",
						"pinyin_prefix": "j",
						"ext_id": "211322000000",
						"ext_name": "建平县"
					},
					{
						"id": "211324",
						"pid": 2113,
						"deep": 2,
						"name": "喀喇沁左翼",
						"pinyin": "ka la qin zuo yi",
						"pinyin_prefix": "k",
						"ext_id": "211324000000",
						"ext_name": "喀喇沁左翼蒙古族自治县"
					},
					{
						"id": "211381",
						"pid": 2113,
						"deep": 2,
						"name": "北票",
						"pinyin": "bei piao",
						"pinyin_prefix": "b",
						"ext_id": "211381000000",
						"ext_name": "北票市"
					},
					{
						"id": "211382",
						"pid": 2113,
						"deep": 2,
						"name": "凌源",
						"pinyin": "ling yuan",
						"pinyin_prefix": "l",
						"ext_id": "211382000000",
						"ext_name": "凌源市"
					}
				]
			},
			{
				"id": "2114",
				"pid": 21,
				"deep": 1,
				"name": "葫芦岛",
				"pinyin": "hu lu dao",
				"pinyin_prefix": "h",
				"ext_id": "211400000000",
				"ext_name": "葫芦岛市",
				"childs": [
					{
						"id": "211402",
						"pid": 2114,
						"deep": 2,
						"name": "连山",
						"pinyin": "lian shan",
						"pinyin_prefix": "l",
						"ext_id": "211402000000",
						"ext_name": "连山区"
					},
					{
						"id": "211403",
						"pid": 2114,
						"deep": 2,
						"name": "龙港",
						"pinyin": "long gang",
						"pinyin_prefix": "l",
						"ext_id": "211403000000",
						"ext_name": "龙港区"
					},
					{
						"id": "211404",
						"pid": 2114,
						"deep": 2,
						"name": "南票",
						"pinyin": "nan piao",
						"pinyin_prefix": "n",
						"ext_id": "211404000000",
						"ext_name": "南票区"
					},
					{
						"id": "211421",
						"pid": 2114,
						"deep": 2,
						"name": "绥中",
						"pinyin": "sui zhong",
						"pinyin_prefix": "s",
						"ext_id": "211421000000",
						"ext_name": "绥中县"
					},
					{
						"id": "211422",
						"pid": 2114,
						"deep": 2,
						"name": "建昌",
						"pinyin": "jian chang",
						"pinyin_prefix": "j",
						"ext_id": "211422000000",
						"ext_name": "建昌县"
					},
					{
						"id": "211481",
						"pid": 2114,
						"deep": 2,
						"name": "兴城",
						"pinyin": "xing cheng",
						"pinyin_prefix": "x",
						"ext_id": "211481000000",
						"ext_name": "兴城市"
					}
				]
			}
		]
	},
	{
		"id": "22",
		"pid": 0,
		"deep": 0,
		"name": "吉林",
		"pinyin": "ji lin",
		"pinyin_prefix": "j",
		"ext_id": "220000000000",
		"ext_name": "吉林省",
		"childs": [
			{
				"id": "2201",
				"pid": 22,
				"deep": 1,
				"name": "长春",
				"pinyin": "chang chun",
				"pinyin_prefix": "c",
				"ext_id": "220100000000",
				"ext_name": "长春市",
				"childs": [
					{
						"id": "220102",
						"pid": 2201,
						"deep": 2,
						"name": "南关",
						"pinyin": "nan guan",
						"pinyin_prefix": "n",
						"ext_id": "220102000000",
						"ext_name": "南关区"
					},
					{
						"id": "220103",
						"pid": 2201,
						"deep": 2,
						"name": "宽城",
						"pinyin": "kuan cheng",
						"pinyin_prefix": "k",
						"ext_id": "220103000000",
						"ext_name": "宽城区"
					},
					{
						"id": "220104",
						"pid": 2201,
						"deep": 2,
						"name": "朝阳",
						"pinyin": "chao yang",
						"pinyin_prefix": "c",
						"ext_id": "220104000000",
						"ext_name": "朝阳区"
					},
					{
						"id": "220105",
						"pid": 2201,
						"deep": 2,
						"name": "二道",
						"pinyin": "er dao",
						"pinyin_prefix": "e",
						"ext_id": "220105000000",
						"ext_name": "二道区"
					},
					{
						"id": "220106",
						"pid": 2201,
						"deep": 2,
						"name": "绿园",
						"pinyin": "lv yuan",
						"pinyin_prefix": "l",
						"ext_id": "220106000000",
						"ext_name": "绿园区"
					},
					{
						"id": "220112",
						"pid": 2201,
						"deep": 2,
						"name": "双阳",
						"pinyin": "shuang yang",
						"pinyin_prefix": "s",
						"ext_id": "220112000000",
						"ext_name": "双阳区"
					},
					{
						"id": "220113",
						"pid": 2201,
						"deep": 2,
						"name": "九台",
						"pinyin": "jiu tai",
						"pinyin_prefix": "j",
						"ext_id": "220113000000",
						"ext_name": "九台区"
					},
					{
						"id": "220122",
						"pid": 2201,
						"deep": 2,
						"name": "农安",
						"pinyin": "nong an",
						"pinyin_prefix": "n",
						"ext_id": "220122000000",
						"ext_name": "农安县"
					},
					{
						"id": "220182",
						"pid": 2201,
						"deep": 2,
						"name": "榆树",
						"pinyin": "yu shu",
						"pinyin_prefix": "y",
						"ext_id": "220182000000",
						"ext_name": "榆树市"
					},
					{
						"id": "220183",
						"pid": 2201,
						"deep": 2,
						"name": "德惠",
						"pinyin": "de hui",
						"pinyin_prefix": "d",
						"ext_id": "220183000000",
						"ext_name": "德惠市"
					},
					{
						"id": "220184",
						"pid": 2201,
						"deep": 2,
						"name": "公主岭",
						"pinyin": "gong zhu ling",
						"pinyin_prefix": "g",
						"ext_id": "220184000000",
						"ext_name": "公主岭市"
					}
				]
			},
			{
				"id": "2202",
				"pid": 22,
				"deep": 1,
				"name": "吉林市",
				"pinyin": "ji lin shi",
				"pinyin_prefix": "j",
				"ext_id": "220200000000",
				"ext_name": "吉林市",
				"childs": [
					{
						"id": "220202",
						"pid": 2202,
						"deep": 2,
						"name": "昌邑",
						"pinyin": "chang yi",
						"pinyin_prefix": "c",
						"ext_id": "220202000000",
						"ext_name": "昌邑区"
					},
					{
						"id": "220203",
						"pid": 2202,
						"deep": 2,
						"name": "龙潭",
						"pinyin": "long tan",
						"pinyin_prefix": "l",
						"ext_id": "220203000000",
						"ext_name": "龙潭区"
					},
					{
						"id": "220204",
						"pid": 2202,
						"deep": 2,
						"name": "船营",
						"pinyin": "chuan ying",
						"pinyin_prefix": "c",
						"ext_id": "220204000000",
						"ext_name": "船营区"
					},
					{
						"id": "220211",
						"pid": 2202,
						"deep": 2,
						"name": "丰满",
						"pinyin": "feng man",
						"pinyin_prefix": "f",
						"ext_id": "220211000000",
						"ext_name": "丰满区"
					},
					{
						"id": "220221",
						"pid": 2202,
						"deep": 2,
						"name": "永吉",
						"pinyin": "yong ji",
						"pinyin_prefix": "y",
						"ext_id": "220221000000",
						"ext_name": "永吉县"
					},
					{
						"id": "220281",
						"pid": 2202,
						"deep": 2,
						"name": "蛟河",
						"pinyin": "jiao he",
						"pinyin_prefix": "j",
						"ext_id": "220281000000",
						"ext_name": "蛟河市"
					},
					{
						"id": "220282",
						"pid": 2202,
						"deep": 2,
						"name": "桦甸",
						"pinyin": "hua dian",
						"pinyin_prefix": "h",
						"ext_id": "220282000000",
						"ext_name": "桦甸市"
					},
					{
						"id": "220283",
						"pid": 2202,
						"deep": 2,
						"name": "舒兰",
						"pinyin": "shu lan",
						"pinyin_prefix": "s",
						"ext_id": "220283000000",
						"ext_name": "舒兰市"
					},
					{
						"id": "220284",
						"pid": 2202,
						"deep": 2,
						"name": "磐石",
						"pinyin": "pan shi",
						"pinyin_prefix": "p",
						"ext_id": "220284000000",
						"ext_name": "磐石市"
					}
				]
			},
			{
				"id": "2203",
				"pid": 22,
				"deep": 1,
				"name": "四平",
				"pinyin": "si ping",
				"pinyin_prefix": "s",
				"ext_id": "220300000000",
				"ext_name": "四平市",
				"childs": [
					{
						"id": "220302",
						"pid": 2203,
						"deep": 2,
						"name": "铁西",
						"pinyin": "tie xi",
						"pinyin_prefix": "t",
						"ext_id": "220302000000",
						"ext_name": "铁西区"
					},
					{
						"id": "220303",
						"pid": 2203,
						"deep": 2,
						"name": "铁东",
						"pinyin": "tie dong",
						"pinyin_prefix": "t",
						"ext_id": "220303000000",
						"ext_name": "铁东区"
					},
					{
						"id": "220322",
						"pid": 2203,
						"deep": 2,
						"name": "梨树",
						"pinyin": "li shu",
						"pinyin_prefix": "l",
						"ext_id": "220322000000",
						"ext_name": "梨树县"
					},
					{
						"id": "220323",
						"pid": 2203,
						"deep": 2,
						"name": "伊通",
						"pinyin": "yi tong",
						"pinyin_prefix": "y",
						"ext_id": "220323000000",
						"ext_name": "伊通满族自治县"
					},
					{
						"id": "220382",
						"pid": 2203,
						"deep": 2,
						"name": "双辽",
						"pinyin": "shuang liao",
						"pinyin_prefix": "s",
						"ext_id": "220382000000",
						"ext_name": "双辽市"
					}
				]
			},
			{
				"id": "2204",
				"pid": 22,
				"deep": 1,
				"name": "辽源",
				"pinyin": "liao yuan",
				"pinyin_prefix": "l",
				"ext_id": "220400000000",
				"ext_name": "辽源市",
				"childs": [
					{
						"id": "220402",
						"pid": 2204,
						"deep": 2,
						"name": "龙山",
						"pinyin": "long shan",
						"pinyin_prefix": "l",
						"ext_id": "220402000000",
						"ext_name": "龙山区"
					},
					{
						"id": "220403",
						"pid": 2204,
						"deep": 2,
						"name": "西安",
						"pinyin": "xi an",
						"pinyin_prefix": "x",
						"ext_id": "220403000000",
						"ext_name": "西安区"
					},
					{
						"id": "220421",
						"pid": 2204,
						"deep": 2,
						"name": "东丰",
						"pinyin": "dong feng",
						"pinyin_prefix": "d",
						"ext_id": "220421000000",
						"ext_name": "东丰县"
					},
					{
						"id": "220422",
						"pid": 2204,
						"deep": 2,
						"name": "东辽",
						"pinyin": "dong liao",
						"pinyin_prefix": "d",
						"ext_id": "220422000000",
						"ext_name": "东辽县"
					}
				]
			},
			{
				"id": "2205",
				"pid": 22,
				"deep": 1,
				"name": "通化",
				"pinyin": "tong hua",
				"pinyin_prefix": "t",
				"ext_id": "220500000000",
				"ext_name": "通化市",
				"childs": [
					{
						"id": "220502",
						"pid": 2205,
						"deep": 2,
						"name": "东昌",
						"pinyin": "dong chang",
						"pinyin_prefix": "d",
						"ext_id": "220502000000",
						"ext_name": "东昌区"
					},
					{
						"id": "220503",
						"pid": 2205,
						"deep": 2,
						"name": "二道江",
						"pinyin": "er dao jiang",
						"pinyin_prefix": "e",
						"ext_id": "220503000000",
						"ext_name": "二道江区"
					},
					{
						"id": "220521",
						"pid": 2205,
						"deep": 2,
						"name": "通化县",
						"pinyin": "tong hua xian",
						"pinyin_prefix": "t",
						"ext_id": "220521000000",
						"ext_name": "通化县"
					},
					{
						"id": "220523",
						"pid": 2205,
						"deep": 2,
						"name": "辉南",
						"pinyin": "hui nan",
						"pinyin_prefix": "h",
						"ext_id": "220523000000",
						"ext_name": "辉南县"
					},
					{
						"id": "220524",
						"pid": 2205,
						"deep": 2,
						"name": "柳河",
						"pinyin": "liu he",
						"pinyin_prefix": "l",
						"ext_id": "220524000000",
						"ext_name": "柳河县"
					},
					{
						"id": "220581",
						"pid": 2205,
						"deep": 2,
						"name": "梅河口",
						"pinyin": "mei he kou",
						"pinyin_prefix": "m",
						"ext_id": "220581000000",
						"ext_name": "梅河口市"
					},
					{
						"id": "220582",
						"pid": 2205,
						"deep": 2,
						"name": "集安",
						"pinyin": "ji an",
						"pinyin_prefix": "j",
						"ext_id": "220582000000",
						"ext_name": "集安市"
					}
				]
			},
			{
				"id": "2206",
				"pid": 22,
				"deep": 1,
				"name": "白山",
				"pinyin": "bai shan",
				"pinyin_prefix": "b",
				"ext_id": "220600000000",
				"ext_name": "白山市",
				"childs": [
					{
						"id": "220602",
						"pid": 2206,
						"deep": 2,
						"name": "浑江",
						"pinyin": "hun jiang",
						"pinyin_prefix": "h",
						"ext_id": "220602000000",
						"ext_name": "浑江区"
					},
					{
						"id": "220605",
						"pid": 2206,
						"deep": 2,
						"name": "江源",
						"pinyin": "jiang yuan",
						"pinyin_prefix": "j",
						"ext_id": "220605000000",
						"ext_name": "江源区"
					},
					{
						"id": "220621",
						"pid": 2206,
						"deep": 2,
						"name": "抚松",
						"pinyin": "fu song",
						"pinyin_prefix": "f",
						"ext_id": "220621000000",
						"ext_name": "抚松县"
					},
					{
						"id": "220622",
						"pid": 2206,
						"deep": 2,
						"name": "靖宇",
						"pinyin": "jing yu",
						"pinyin_prefix": "j",
						"ext_id": "220622000000",
						"ext_name": "靖宇县"
					},
					{
						"id": "220623",
						"pid": 2206,
						"deep": 2,
						"name": "长白",
						"pinyin": "chang bai",
						"pinyin_prefix": "c",
						"ext_id": "220623000000",
						"ext_name": "长白朝鲜族自治县"
					},
					{
						"id": "220681",
						"pid": 2206,
						"deep": 2,
						"name": "临江",
						"pinyin": "lin jiang",
						"pinyin_prefix": "l",
						"ext_id": "220681000000",
						"ext_name": "临江市"
					}
				]
			},
			{
				"id": "2207",
				"pid": 22,
				"deep": 1,
				"name": "松原",
				"pinyin": "song yuan",
				"pinyin_prefix": "s",
				"ext_id": "220700000000",
				"ext_name": "松原市",
				"childs": [
					{
						"id": "220702",
						"pid": 2207,
						"deep": 2,
						"name": "宁江",
						"pinyin": "ning jiang",
						"pinyin_prefix": "n",
						"ext_id": "220702000000",
						"ext_name": "宁江区"
					},
					{
						"id": "220721",
						"pid": 2207,
						"deep": 2,
						"name": "前郭尔罗斯",
						"pinyin": "qian guo er luo si",
						"pinyin_prefix": "q",
						"ext_id": "220721000000",
						"ext_name": "前郭尔罗斯蒙古族自治县"
					},
					{
						"id": "220722",
						"pid": 2207,
						"deep": 2,
						"name": "长岭",
						"pinyin": "chang ling",
						"pinyin_prefix": "c",
						"ext_id": "220722000000",
						"ext_name": "长岭县"
					},
					{
						"id": "220723",
						"pid": 2207,
						"deep": 2,
						"name": "乾安",
						"pinyin": "qian an",
						"pinyin_prefix": "q",
						"ext_id": "220723000000",
						"ext_name": "乾安县"
					},
					{
						"id": "220781",
						"pid": 2207,
						"deep": 2,
						"name": "扶余",
						"pinyin": "fu yu",
						"pinyin_prefix": "f",
						"ext_id": "220781000000",
						"ext_name": "扶余市"
					}
				]
			},
			{
				"id": "2208",
				"pid": 22,
				"deep": 1,
				"name": "白城",
				"pinyin": "bai cheng",
				"pinyin_prefix": "b",
				"ext_id": "220800000000",
				"ext_name": "白城市",
				"childs": [
					{
						"id": "220802",
						"pid": 2208,
						"deep": 2,
						"name": "洮北",
						"pinyin": "tao bei",
						"pinyin_prefix": "t",
						"ext_id": "220802000000",
						"ext_name": "洮北区"
					},
					{
						"id": "220821",
						"pid": 2208,
						"deep": 2,
						"name": "镇赉",
						"pinyin": "zhen lai",
						"pinyin_prefix": "z",
						"ext_id": "220821000000",
						"ext_name": "镇赉县"
					},
					{
						"id": "220822",
						"pid": 2208,
						"deep": 2,
						"name": "通榆",
						"pinyin": "tong yu",
						"pinyin_prefix": "t",
						"ext_id": "220822000000",
						"ext_name": "通榆县"
					},
					{
						"id": "220881",
						"pid": 2208,
						"deep": 2,
						"name": "洮南",
						"pinyin": "tao nan",
						"pinyin_prefix": "t",
						"ext_id": "220881000000",
						"ext_name": "洮南市"
					},
					{
						"id": "220882",
						"pid": 2208,
						"deep": 2,
						"name": "大安",
						"pinyin": "da an",
						"pinyin_prefix": "d",
						"ext_id": "220882000000",
						"ext_name": "大安市"
					}
				]
			},
			{
				"id": "2224",
				"pid": 22,
				"deep": 1,
				"name": "延边",
				"pinyin": "yan bian",
				"pinyin_prefix": "y",
				"ext_id": "222400000000",
				"ext_name": "延边朝鲜族自治州",
				"childs": [
					{
						"id": "222401",
						"pid": 2224,
						"deep": 2,
						"name": "延吉",
						"pinyin": "yan ji",
						"pinyin_prefix": "y",
						"ext_id": "222401000000",
						"ext_name": "延吉市"
					},
					{
						"id": "222402",
						"pid": 2224,
						"deep": 2,
						"name": "图们",
						"pinyin": "tu men",
						"pinyin_prefix": "t",
						"ext_id": "222402000000",
						"ext_name": "图们市"
					},
					{
						"id": "222403",
						"pid": 2224,
						"deep": 2,
						"name": "敦化",
						"pinyin": "dun hua",
						"pinyin_prefix": "d",
						"ext_id": "222403000000",
						"ext_name": "敦化市"
					},
					{
						"id": "222404",
						"pid": 2224,
						"deep": 2,
						"name": "珲春",
						"pinyin": "hun chun",
						"pinyin_prefix": "h",
						"ext_id": "222404000000",
						"ext_name": "珲春市"
					},
					{
						"id": "222405",
						"pid": 2224,
						"deep": 2,
						"name": "龙井",
						"pinyin": "long jing",
						"pinyin_prefix": "l",
						"ext_id": "222405000000",
						"ext_name": "龙井市"
					},
					{
						"id": "222406",
						"pid": 2224,
						"deep": 2,
						"name": "和龙",
						"pinyin": "he long",
						"pinyin_prefix": "h",
						"ext_id": "222406000000",
						"ext_name": "和龙市"
					},
					{
						"id": "222424",
						"pid": 2224,
						"deep": 2,
						"name": "汪清",
						"pinyin": "wang qing",
						"pinyin_prefix": "w",
						"ext_id": "222424000000",
						"ext_name": "汪清县"
					},
					{
						"id": "222426",
						"pid": 2224,
						"deep": 2,
						"name": "安图",
						"pinyin": "an tu",
						"pinyin_prefix": "a",
						"ext_id": "222426000000",
						"ext_name": "安图县"
					}
				]
			}
		]
	},
	{
		"id": "23",
		"pid": 0,
		"deep": 0,
		"name": "黑龙江",
		"pinyin": "hei long jiang",
		"pinyin_prefix": "h",
		"ext_id": "230000000000",
		"ext_name": "黑龙江省",
		"childs": [
			{
				"id": "2301",
				"pid": 23,
				"deep": 1,
				"name": "哈尔滨",
				"pinyin": "ha er bin",
				"pinyin_prefix": "h",
				"ext_id": "230100000000",
				"ext_name": "哈尔滨市",
				"childs": [
					{
						"id": "230102",
						"pid": 2301,
						"deep": 2,
						"name": "道里",
						"pinyin": "dao li",
						"pinyin_prefix": "d",
						"ext_id": "230102000000",
						"ext_name": "道里区"
					},
					{
						"id": "230103",
						"pid": 2301,
						"deep": 2,
						"name": "南岗",
						"pinyin": "nan gang",
						"pinyin_prefix": "n",
						"ext_id": "230103000000",
						"ext_name": "南岗区"
					},
					{
						"id": "230104",
						"pid": 2301,
						"deep": 2,
						"name": "道外",
						"pinyin": "dao wai",
						"pinyin_prefix": "d",
						"ext_id": "230104000000",
						"ext_name": "道外区"
					},
					{
						"id": "230108",
						"pid": 2301,
						"deep": 2,
						"name": "平房",
						"pinyin": "ping fang",
						"pinyin_prefix": "p",
						"ext_id": "230108000000",
						"ext_name": "平房区"
					},
					{
						"id": "230109",
						"pid": 2301,
						"deep": 2,
						"name": "松北",
						"pinyin": "song bei",
						"pinyin_prefix": "s",
						"ext_id": "230109000000",
						"ext_name": "松北区"
					},
					{
						"id": "230110",
						"pid": 2301,
						"deep": 2,
						"name": "香坊",
						"pinyin": "xiang fang",
						"pinyin_prefix": "x",
						"ext_id": "230110000000",
						"ext_name": "香坊区"
					},
					{
						"id": "230111",
						"pid": 2301,
						"deep": 2,
						"name": "呼兰",
						"pinyin": "hu lan",
						"pinyin_prefix": "h",
						"ext_id": "230111000000",
						"ext_name": "呼兰区"
					},
					{
						"id": "230112",
						"pid": 2301,
						"deep": 2,
						"name": "阿城",
						"pinyin": "a cheng",
						"pinyin_prefix": "a",
						"ext_id": "230112000000",
						"ext_name": "阿城区"
					},
					{
						"id": "230113",
						"pid": 2301,
						"deep": 2,
						"name": "双城",
						"pinyin": "shuang cheng",
						"pinyin_prefix": "s",
						"ext_id": "230113000000",
						"ext_name": "双城区"
					},
					{
						"id": "230123",
						"pid": 2301,
						"deep": 2,
						"name": "依兰",
						"pinyin": "yi lan",
						"pinyin_prefix": "y",
						"ext_id": "230123000000",
						"ext_name": "依兰县"
					},
					{
						"id": "230124",
						"pid": 2301,
						"deep": 2,
						"name": "方正",
						"pinyin": "fang zheng",
						"pinyin_prefix": "f",
						"ext_id": "230124000000",
						"ext_name": "方正县"
					},
					{
						"id": "230125",
						"pid": 2301,
						"deep": 2,
						"name": "宾县",
						"pinyin": "bin xian",
						"pinyin_prefix": "b",
						"ext_id": "230125000000",
						"ext_name": "宾县"
					},
					{
						"id": "230126",
						"pid": 2301,
						"deep": 2,
						"name": "巴彦",
						"pinyin": "ba yan",
						"pinyin_prefix": "b",
						"ext_id": "230126000000",
						"ext_name": "巴彦县"
					},
					{
						"id": "230127",
						"pid": 2301,
						"deep": 2,
						"name": "木兰",
						"pinyin": "mu lan",
						"pinyin_prefix": "m",
						"ext_id": "230127000000",
						"ext_name": "木兰县"
					},
					{
						"id": "230128",
						"pid": 2301,
						"deep": 2,
						"name": "通河",
						"pinyin": "tong he",
						"pinyin_prefix": "t",
						"ext_id": "230128000000",
						"ext_name": "通河县"
					},
					{
						"id": "230129",
						"pid": 2301,
						"deep": 2,
						"name": "延寿",
						"pinyin": "yan shou",
						"pinyin_prefix": "y",
						"ext_id": "230129000000",
						"ext_name": "延寿县"
					},
					{
						"id": "230183",
						"pid": 2301,
						"deep": 2,
						"name": "尚志",
						"pinyin": "shang zhi",
						"pinyin_prefix": "s",
						"ext_id": "230183000000",
						"ext_name": "尚志市"
					},
					{
						"id": "230184",
						"pid": 2301,
						"deep": 2,
						"name": "五常",
						"pinyin": "wu chang",
						"pinyin_prefix": "w",
						"ext_id": "230184000000",
						"ext_name": "五常市"
					}
				]
			},
			{
				"id": "2302",
				"pid": 23,
				"deep": 1,
				"name": "齐齐哈尔",
				"pinyin": "qi qi ha er",
				"pinyin_prefix": "q",
				"ext_id": "230200000000",
				"ext_name": "齐齐哈尔市",
				"childs": [
					{
						"id": "230202",
						"pid": 2302,
						"deep": 2,
						"name": "龙沙",
						"pinyin": "long sha",
						"pinyin_prefix": "l",
						"ext_id": "230202000000",
						"ext_name": "龙沙区"
					},
					{
						"id": "230203",
						"pid": 2302,
						"deep": 2,
						"name": "建华",
						"pinyin": "jian hua",
						"pinyin_prefix": "j",
						"ext_id": "230203000000",
						"ext_name": "建华区"
					},
					{
						"id": "230204",
						"pid": 2302,
						"deep": 2,
						"name": "铁锋",
						"pinyin": "tie feng",
						"pinyin_prefix": "t",
						"ext_id": "230204000000",
						"ext_name": "铁锋区"
					},
					{
						"id": "230205",
						"pid": 2302,
						"deep": 2,
						"name": "昂昂溪",
						"pinyin": "ang ang xi",
						"pinyin_prefix": "a",
						"ext_id": "230205000000",
						"ext_name": "昂昂溪区"
					},
					{
						"id": "230206",
						"pid": 2302,
						"deep": 2,
						"name": "富拉尔基区",
						"pinyin": "fu la er ji qu",
						"pinyin_prefix": "f",
						"ext_id": "230206000000",
						"ext_name": "富拉尔基区"
					},
					{
						"id": "230207",
						"pid": 2302,
						"deep": 2,
						"name": "碾子山",
						"pinyin": "nian zi shan",
						"pinyin_prefix": "n",
						"ext_id": "230207000000",
						"ext_name": "碾子山区"
					},
					{
						"id": "230208",
						"pid": 2302,
						"deep": 2,
						"name": "梅里斯",
						"pinyin": "mei li si",
						"pinyin_prefix": "m",
						"ext_id": "230208000000",
						"ext_name": "梅里斯达斡尔族区"
					},
					{
						"id": "230221",
						"pid": 2302,
						"deep": 2,
						"name": "龙江",
						"pinyin": "long jiang",
						"pinyin_prefix": "l",
						"ext_id": "230221000000",
						"ext_name": "龙江县"
					},
					{
						"id": "230223",
						"pid": 2302,
						"deep": 2,
						"name": "依安",
						"pinyin": "yi an",
						"pinyin_prefix": "y",
						"ext_id": "230223000000",
						"ext_name": "依安县"
					},
					{
						"id": "230224",
						"pid": 2302,
						"deep": 2,
						"name": "泰来",
						"pinyin": "tai lai",
						"pinyin_prefix": "t",
						"ext_id": "230224000000",
						"ext_name": "泰来县"
					},
					{
						"id": "230225",
						"pid": 2302,
						"deep": 2,
						"name": "甘南",
						"pinyin": "gan nan",
						"pinyin_prefix": "g",
						"ext_id": "230225000000",
						"ext_name": "甘南县"
					},
					{
						"id": "230227",
						"pid": 2302,
						"deep": 2,
						"name": "富裕",
						"pinyin": "fu yu",
						"pinyin_prefix": "f",
						"ext_id": "230227000000",
						"ext_name": "富裕县"
					},
					{
						"id": "230229",
						"pid": 2302,
						"deep": 2,
						"name": "克山",
						"pinyin": "ke shan",
						"pinyin_prefix": "k",
						"ext_id": "230229000000",
						"ext_name": "克山县"
					},
					{
						"id": "230230",
						"pid": 2302,
						"deep": 2,
						"name": "克东",
						"pinyin": "ke dong",
						"pinyin_prefix": "k",
						"ext_id": "230230000000",
						"ext_name": "克东县"
					},
					{
						"id": "230231",
						"pid": 2302,
						"deep": 2,
						"name": "拜泉",
						"pinyin": "bai quan",
						"pinyin_prefix": "b",
						"ext_id": "230231000000",
						"ext_name": "拜泉县"
					},
					{
						"id": "230281",
						"pid": 2302,
						"deep": 2,
						"name": "讷河",
						"pinyin": "ne he",
						"pinyin_prefix": "n",
						"ext_id": "230281000000",
						"ext_name": "讷河市"
					}
				]
			},
			{
				"id": "2303",
				"pid": 23,
				"deep": 1,
				"name": "鸡西",
				"pinyin": "ji xi",
				"pinyin_prefix": "j",
				"ext_id": "230300000000",
				"ext_name": "鸡西市",
				"childs": [
					{
						"id": "230302",
						"pid": 2303,
						"deep": 2,
						"name": "鸡冠",
						"pinyin": "ji guan",
						"pinyin_prefix": "j",
						"ext_id": "230302000000",
						"ext_name": "鸡冠区"
					},
					{
						"id": "230303",
						"pid": 2303,
						"deep": 2,
						"name": "恒山",
						"pinyin": "heng shan",
						"pinyin_prefix": "h",
						"ext_id": "230303000000",
						"ext_name": "恒山区"
					},
					{
						"id": "230304",
						"pid": 2303,
						"deep": 2,
						"name": "滴道",
						"pinyin": "di dao",
						"pinyin_prefix": "d",
						"ext_id": "230304000000",
						"ext_name": "滴道区"
					},
					{
						"id": "230305",
						"pid": 2303,
						"deep": 2,
						"name": "梨树",
						"pinyin": "li shu",
						"pinyin_prefix": "l",
						"ext_id": "230305000000",
						"ext_name": "梨树区"
					},
					{
						"id": "230306",
						"pid": 2303,
						"deep": 2,
						"name": "城子河",
						"pinyin": "cheng zi he",
						"pinyin_prefix": "c",
						"ext_id": "230306000000",
						"ext_name": "城子河区"
					},
					{
						"id": "230307",
						"pid": 2303,
						"deep": 2,
						"name": "麻山",
						"pinyin": "ma shan",
						"pinyin_prefix": "m",
						"ext_id": "230307000000",
						"ext_name": "麻山区"
					},
					{
						"id": "230321",
						"pid": 2303,
						"deep": 2,
						"name": "鸡东",
						"pinyin": "ji dong",
						"pinyin_prefix": "j",
						"ext_id": "230321000000",
						"ext_name": "鸡东县"
					},
					{
						"id": "230381",
						"pid": 2303,
						"deep": 2,
						"name": "虎林",
						"pinyin": "hu lin",
						"pinyin_prefix": "h",
						"ext_id": "230381000000",
						"ext_name": "虎林市"
					},
					{
						"id": "230382",
						"pid": 2303,
						"deep": 2,
						"name": "密山",
						"pinyin": "mi shan",
						"pinyin_prefix": "m",
						"ext_id": "230382000000",
						"ext_name": "密山市"
					}
				]
			},
			{
				"id": "2304",
				"pid": 23,
				"deep": 1,
				"name": "鹤岗",
				"pinyin": "he gang",
				"pinyin_prefix": "h",
				"ext_id": "230400000000",
				"ext_name": "鹤岗市",
				"childs": [
					{
						"id": "230402",
						"pid": 2304,
						"deep": 2,
						"name": "向阳",
						"pinyin": "xiang yang",
						"pinyin_prefix": "x",
						"ext_id": "230402000000",
						"ext_name": "向阳区"
					},
					{
						"id": "230403",
						"pid": 2304,
						"deep": 2,
						"name": "工农",
						"pinyin": "gong nong",
						"pinyin_prefix": "g",
						"ext_id": "230403000000",
						"ext_name": "工农区"
					},
					{
						"id": "230404",
						"pid": 2304,
						"deep": 2,
						"name": "南山",
						"pinyin": "nan shan",
						"pinyin_prefix": "n",
						"ext_id": "230404000000",
						"ext_name": "南山区"
					},
					{
						"id": "230405",
						"pid": 2304,
						"deep": 2,
						"name": "兴安",
						"pinyin": "xing an",
						"pinyin_prefix": "x",
						"ext_id": "230405000000",
						"ext_name": "兴安区"
					},
					{
						"id": "230406",
						"pid": 2304,
						"deep": 2,
						"name": "东山",
						"pinyin": "dong shan",
						"pinyin_prefix": "d",
						"ext_id": "230406000000",
						"ext_name": "东山区"
					},
					{
						"id": "230407",
						"pid": 2304,
						"deep": 2,
						"name": "兴山",
						"pinyin": "xing shan",
						"pinyin_prefix": "x",
						"ext_id": "230407000000",
						"ext_name": "兴山区"
					},
					{
						"id": "230421",
						"pid": 2304,
						"deep": 2,
						"name": "萝北",
						"pinyin": "luo bei",
						"pinyin_prefix": "l",
						"ext_id": "230421000000",
						"ext_name": "萝北县"
					},
					{
						"id": "230422",
						"pid": 2304,
						"deep": 2,
						"name": "绥滨",
						"pinyin": "sui bin",
						"pinyin_prefix": "s",
						"ext_id": "230422000000",
						"ext_name": "绥滨县"
					}
				]
			},
			{
				"id": "2305",
				"pid": 23,
				"deep": 1,
				"name": "双鸭山",
				"pinyin": "shuang ya shan",
				"pinyin_prefix": "s",
				"ext_id": "230500000000",
				"ext_name": "双鸭山市",
				"childs": [
					{
						"id": "230502",
						"pid": 2305,
						"deep": 2,
						"name": "尖山",
						"pinyin": "jian shan",
						"pinyin_prefix": "j",
						"ext_id": "230502000000",
						"ext_name": "尖山区"
					},
					{
						"id": "230503",
						"pid": 2305,
						"deep": 2,
						"name": "岭东",
						"pinyin": "ling dong",
						"pinyin_prefix": "l",
						"ext_id": "230503000000",
						"ext_name": "岭东区"
					},
					{
						"id": "230505",
						"pid": 2305,
						"deep": 2,
						"name": "四方台",
						"pinyin": "si fang tai",
						"pinyin_prefix": "s",
						"ext_id": "230505000000",
						"ext_name": "四方台区"
					},
					{
						"id": "230506",
						"pid": 2305,
						"deep": 2,
						"name": "宝山",
						"pinyin": "bao shan",
						"pinyin_prefix": "b",
						"ext_id": "230506000000",
						"ext_name": "宝山区"
					},
					{
						"id": "230521",
						"pid": 2305,
						"deep": 2,
						"name": "集贤",
						"pinyin": "ji xian",
						"pinyin_prefix": "j",
						"ext_id": "230521000000",
						"ext_name": "集贤县"
					},
					{
						"id": "230522",
						"pid": 2305,
						"deep": 2,
						"name": "友谊",
						"pinyin": "you yi",
						"pinyin_prefix": "y",
						"ext_id": "230522000000",
						"ext_name": "友谊县"
					},
					{
						"id": "230523",
						"pid": 2305,
						"deep": 2,
						"name": "宝清",
						"pinyin": "bao qing",
						"pinyin_prefix": "b",
						"ext_id": "230523000000",
						"ext_name": "宝清县"
					},
					{
						"id": "230524",
						"pid": 2305,
						"deep": 2,
						"name": "饶河",
						"pinyin": "rao he",
						"pinyin_prefix": "r",
						"ext_id": "230524000000",
						"ext_name": "饶河县"
					}
				]
			},
			{
				"id": "2306",
				"pid": 23,
				"deep": 1,
				"name": "大庆",
				"pinyin": "da qing",
				"pinyin_prefix": "d",
				"ext_id": "230600000000",
				"ext_name": "大庆市",
				"childs": [
					{
						"id": "230602",
						"pid": 2306,
						"deep": 2,
						"name": "萨尔图",
						"pinyin": "sa er tu",
						"pinyin_prefix": "s",
						"ext_id": "230602000000",
						"ext_name": "萨尔图区"
					},
					{
						"id": "230603",
						"pid": 2306,
						"deep": 2,
						"name": "龙凤",
						"pinyin": "long feng",
						"pinyin_prefix": "l",
						"ext_id": "230603000000",
						"ext_name": "龙凤区"
					},
					{
						"id": "230604",
						"pid": 2306,
						"deep": 2,
						"name": "让胡路",
						"pinyin": "rang hu lu",
						"pinyin_prefix": "r",
						"ext_id": "230604000000",
						"ext_name": "让胡路区"
					},
					{
						"id": "230605",
						"pid": 2306,
						"deep": 2,
						"name": "红岗",
						"pinyin": "hong gang",
						"pinyin_prefix": "h",
						"ext_id": "230605000000",
						"ext_name": "红岗区"
					},
					{
						"id": "230606",
						"pid": 2306,
						"deep": 2,
						"name": "大同",
						"pinyin": "da tong",
						"pinyin_prefix": "d",
						"ext_id": "230606000000",
						"ext_name": "大同区"
					},
					{
						"id": "230621",
						"pid": 2306,
						"deep": 2,
						"name": "肇州",
						"pinyin": "zhao zhou",
						"pinyin_prefix": "z",
						"ext_id": "230621000000",
						"ext_name": "肇州县"
					},
					{
						"id": "230622",
						"pid": 2306,
						"deep": 2,
						"name": "肇源",
						"pinyin": "zhao yuan",
						"pinyin_prefix": "z",
						"ext_id": "230622000000",
						"ext_name": "肇源县"
					},
					{
						"id": "230623",
						"pid": 2306,
						"deep": 2,
						"name": "林甸",
						"pinyin": "lin dian",
						"pinyin_prefix": "l",
						"ext_id": "230623000000",
						"ext_name": "林甸县"
					},
					{
						"id": "230624",
						"pid": 2306,
						"deep": 2,
						"name": "杜尔伯特",
						"pinyin": "du er bo te",
						"pinyin_prefix": "d",
						"ext_id": "230624000000",
						"ext_name": "杜尔伯特蒙古族自治县"
					}
				]
			},
			{
				"id": "2307",
				"pid": 23,
				"deep": 1,
				"name": "伊春",
				"pinyin": "yi chun",
				"pinyin_prefix": "y",
				"ext_id": "230700000000",
				"ext_name": "伊春市",
				"childs": [
					{
						"id": "230717",
						"pid": 2307,
						"deep": 2,
						"name": "伊美",
						"pinyin": "yi mei",
						"pinyin_prefix": "y",
						"ext_id": "230717000000",
						"ext_name": "伊美区"
					},
					{
						"id": "230718",
						"pid": 2307,
						"deep": 2,
						"name": "乌翠",
						"pinyin": "wu cui",
						"pinyin_prefix": "w",
						"ext_id": "230718000000",
						"ext_name": "乌翠区"
					},
					{
						"id": "230719",
						"pid": 2307,
						"deep": 2,
						"name": "友好",
						"pinyin": "you hao",
						"pinyin_prefix": "y",
						"ext_id": "230719000000",
						"ext_name": "友好区"
					},
					{
						"id": "230722",
						"pid": 2307,
						"deep": 2,
						"name": "嘉荫",
						"pinyin": "jia yin",
						"pinyin_prefix": "j",
						"ext_id": "230722000000",
						"ext_name": "嘉荫县"
					},
					{
						"id": "230723",
						"pid": 2307,
						"deep": 2,
						"name": "汤旺",
						"pinyin": "tang wang",
						"pinyin_prefix": "t",
						"ext_id": "230723000000",
						"ext_name": "汤旺县"
					},
					{
						"id": "230724",
						"pid": 2307,
						"deep": 2,
						"name": "丰林",
						"pinyin": "feng lin",
						"pinyin_prefix": "f",
						"ext_id": "230724000000",
						"ext_name": "丰林县"
					},
					{
						"id": "230725",
						"pid": 2307,
						"deep": 2,
						"name": "大箐山",
						"pinyin": "da qing shan",
						"pinyin_prefix": "d",
						"ext_id": "230725000000",
						"ext_name": "大箐山县"
					},
					{
						"id": "230726",
						"pid": 2307,
						"deep": 2,
						"name": "南岔",
						"pinyin": "nan cha",
						"pinyin_prefix": "n",
						"ext_id": "230726000000",
						"ext_name": "南岔县"
					},
					{
						"id": "230751",
						"pid": 2307,
						"deep": 2,
						"name": "金林",
						"pinyin": "jin lin",
						"pinyin_prefix": "j",
						"ext_id": "230751000000",
						"ext_name": "金林区"
					},
					{
						"id": "230781",
						"pid": 2307,
						"deep": 2,
						"name": "铁力",
						"pinyin": "tie li",
						"pinyin_prefix": "t",
						"ext_id": "230781000000",
						"ext_name": "铁力市"
					}
				]
			},
			{
				"id": "2308",
				"pid": 23,
				"deep": 1,
				"name": "佳木斯",
				"pinyin": "jia mu si",
				"pinyin_prefix": "j",
				"ext_id": "230800000000",
				"ext_name": "佳木斯市",
				"childs": [
					{
						"id": "230803",
						"pid": 2308,
						"deep": 2,
						"name": "向阳",
						"pinyin": "xiang yang",
						"pinyin_prefix": "x",
						"ext_id": "230803000000",
						"ext_name": "向阳区"
					},
					{
						"id": "230804",
						"pid": 2308,
						"deep": 2,
						"name": "前进",
						"pinyin": "qian jin",
						"pinyin_prefix": "q",
						"ext_id": "230804000000",
						"ext_name": "前进区"
					},
					{
						"id": "230805",
						"pid": 2308,
						"deep": 2,
						"name": "东风",
						"pinyin": "dong feng",
						"pinyin_prefix": "d",
						"ext_id": "230805000000",
						"ext_name": "东风区"
					},
					{
						"id": "230811",
						"pid": 2308,
						"deep": 2,
						"name": "郊区",
						"pinyin": "jiao qu",
						"pinyin_prefix": "j",
						"ext_id": "230811000000",
						"ext_name": "郊区"
					},
					{
						"id": "230822",
						"pid": 2308,
						"deep": 2,
						"name": "桦南",
						"pinyin": "hua nan",
						"pinyin_prefix": "h",
						"ext_id": "230822000000",
						"ext_name": "桦南县"
					},
					{
						"id": "230826",
						"pid": 2308,
						"deep": 2,
						"name": "桦川",
						"pinyin": "hua chuan",
						"pinyin_prefix": "h",
						"ext_id": "230826000000",
						"ext_name": "桦川县"
					},
					{
						"id": "230828",
						"pid": 2308,
						"deep": 2,
						"name": "汤原",
						"pinyin": "tang yuan",
						"pinyin_prefix": "t",
						"ext_id": "230828000000",
						"ext_name": "汤原县"
					},
					{
						"id": "230881",
						"pid": 2308,
						"deep": 2,
						"name": "同江",
						"pinyin": "tong jiang",
						"pinyin_prefix": "t",
						"ext_id": "230881000000",
						"ext_name": "同江市"
					},
					{
						"id": "230882",
						"pid": 2308,
						"deep": 2,
						"name": "富锦",
						"pinyin": "fu jin",
						"pinyin_prefix": "f",
						"ext_id": "230882000000",
						"ext_name": "富锦市"
					},
					{
						"id": "230883",
						"pid": 2308,
						"deep": 2,
						"name": "抚远",
						"pinyin": "fu yuan",
						"pinyin_prefix": "f",
						"ext_id": "230883000000",
						"ext_name": "抚远市"
					}
				]
			},
			{
				"id": "2309",
				"pid": 23,
				"deep": 1,
				"name": "七台河",
				"pinyin": "qi tai he",
				"pinyin_prefix": "q",
				"ext_id": "230900000000",
				"ext_name": "七台河市",
				"childs": [
					{
						"id": "230902",
						"pid": 2309,
						"deep": 2,
						"name": "新兴",
						"pinyin": "xin xing",
						"pinyin_prefix": "x",
						"ext_id": "230902000000",
						"ext_name": "新兴区"
					},
					{
						"id": "230903",
						"pid": 2309,
						"deep": 2,
						"name": "桃山",
						"pinyin": "tao shan",
						"pinyin_prefix": "t",
						"ext_id": "230903000000",
						"ext_name": "桃山区"
					},
					{
						"id": "230904",
						"pid": 2309,
						"deep": 2,
						"name": "茄子河",
						"pinyin": "qie zi he",
						"pinyin_prefix": "q",
						"ext_id": "230904000000",
						"ext_name": "茄子河区"
					},
					{
						"id": "230921",
						"pid": 2309,
						"deep": 2,
						"name": "勃利",
						"pinyin": "bo li",
						"pinyin_prefix": "b",
						"ext_id": "230921000000",
						"ext_name": "勃利县"
					}
				]
			},
			{
				"id": "2310",
				"pid": 23,
				"deep": 1,
				"name": "牡丹江",
				"pinyin": "mu dan jiang",
				"pinyin_prefix": "m",
				"ext_id": "231000000000",
				"ext_name": "牡丹江市",
				"childs": [
					{
						"id": "231002",
						"pid": 2310,
						"deep": 2,
						"name": "东安",
						"pinyin": "dong an",
						"pinyin_prefix": "d",
						"ext_id": "231002000000",
						"ext_name": "东安区"
					},
					{
						"id": "231003",
						"pid": 2310,
						"deep": 2,
						"name": "阳明",
						"pinyin": "yang ming",
						"pinyin_prefix": "y",
						"ext_id": "231003000000",
						"ext_name": "阳明区"
					},
					{
						"id": "231004",
						"pid": 2310,
						"deep": 2,
						"name": "爱民",
						"pinyin": "ai min",
						"pinyin_prefix": "a",
						"ext_id": "231004000000",
						"ext_name": "爱民区"
					},
					{
						"id": "231005",
						"pid": 2310,
						"deep": 2,
						"name": "西安",
						"pinyin": "xi an",
						"pinyin_prefix": "x",
						"ext_id": "231005000000",
						"ext_name": "西安区"
					},
					{
						"id": "231025",
						"pid": 2310,
						"deep": 2,
						"name": "林口",
						"pinyin": "lin kou",
						"pinyin_prefix": "l",
						"ext_id": "231025000000",
						"ext_name": "林口县"
					},
					{
						"id": "231081",
						"pid": 2310,
						"deep": 2,
						"name": "绥芬河",
						"pinyin": "sui fen he",
						"pinyin_prefix": "s",
						"ext_id": "231081000000",
						"ext_name": "绥芬河市"
					},
					{
						"id": "231083",
						"pid": 2310,
						"deep": 2,
						"name": "海林",
						"pinyin": "hai lin",
						"pinyin_prefix": "h",
						"ext_id": "231083000000",
						"ext_name": "海林市"
					},
					{
						"id": "231084",
						"pid": 2310,
						"deep": 2,
						"name": "宁安",
						"pinyin": "ning an",
						"pinyin_prefix": "n",
						"ext_id": "231084000000",
						"ext_name": "宁安市"
					},
					{
						"id": "231085",
						"pid": 2310,
						"deep": 2,
						"name": "穆棱",
						"pinyin": "mu ling",
						"pinyin_prefix": "m",
						"ext_id": "231085000000",
						"ext_name": "穆棱市"
					},
					{
						"id": "231086",
						"pid": 2310,
						"deep": 2,
						"name": "东宁",
						"pinyin": "dong ning",
						"pinyin_prefix": "d",
						"ext_id": "231086000000",
						"ext_name": "东宁市"
					}
				]
			},
			{
				"id": "2311",
				"pid": 23,
				"deep": 1,
				"name": "黑河",
				"pinyin": "hei he",
				"pinyin_prefix": "h",
				"ext_id": "231100000000",
				"ext_name": "黑河市",
				"childs": [
					{
						"id": "231102",
						"pid": 2311,
						"deep": 2,
						"name": "爱辉",
						"pinyin": "ai hui",
						"pinyin_prefix": "a",
						"ext_id": "231102000000",
						"ext_name": "爱辉区"
					},
					{
						"id": "231123",
						"pid": 2311,
						"deep": 2,
						"name": "逊克",
						"pinyin": "xun ke",
						"pinyin_prefix": "x",
						"ext_id": "231123000000",
						"ext_name": "逊克县"
					},
					{
						"id": "231124",
						"pid": 2311,
						"deep": 2,
						"name": "孙吴",
						"pinyin": "sun wu",
						"pinyin_prefix": "s",
						"ext_id": "231124000000",
						"ext_name": "孙吴县"
					},
					{
						"id": "231181",
						"pid": 2311,
						"deep": 2,
						"name": "北安",
						"pinyin": "bei an",
						"pinyin_prefix": "b",
						"ext_id": "231181000000",
						"ext_name": "北安市"
					},
					{
						"id": "231182",
						"pid": 2311,
						"deep": 2,
						"name": "五大连池",
						"pinyin": "wu da lian chi",
						"pinyin_prefix": "w",
						"ext_id": "231182000000",
						"ext_name": "五大连池市"
					},
					{
						"id": "231183",
						"pid": 2311,
						"deep": 2,
						"name": "嫩江",
						"pinyin": "nen jiang",
						"pinyin_prefix": "n",
						"ext_id": "231183000000",
						"ext_name": "嫩江市"
					}
				]
			},
			{
				"id": "2312",
				"pid": 23,
				"deep": 1,
				"name": "绥化",
				"pinyin": "sui hua",
				"pinyin_prefix": "s",
				"ext_id": "231200000000",
				"ext_name": "绥化市",
				"childs": [
					{
						"id": "231202",
						"pid": 2312,
						"deep": 2,
						"name": "北林",
						"pinyin": "bei lin",
						"pinyin_prefix": "b",
						"ext_id": "231202000000",
						"ext_name": "北林区"
					},
					{
						"id": "231221",
						"pid": 2312,
						"deep": 2,
						"name": "望奎",
						"pinyin": "wang kui",
						"pinyin_prefix": "w",
						"ext_id": "231221000000",
						"ext_name": "望奎县"
					},
					{
						"id": "231222",
						"pid": 2312,
						"deep": 2,
						"name": "兰西",
						"pinyin": "lan xi",
						"pinyin_prefix": "l",
						"ext_id": "231222000000",
						"ext_name": "兰西县"
					},
					{
						"id": "231223",
						"pid": 2312,
						"deep": 2,
						"name": "青冈",
						"pinyin": "qing gang",
						"pinyin_prefix": "q",
						"ext_id": "231223000000",
						"ext_name": "青冈县"
					},
					{
						"id": "231224",
						"pid": 2312,
						"deep": 2,
						"name": "庆安",
						"pinyin": "qing an",
						"pinyin_prefix": "q",
						"ext_id": "231224000000",
						"ext_name": "庆安县"
					},
					{
						"id": "231225",
						"pid": 2312,
						"deep": 2,
						"name": "明水",
						"pinyin": "ming shui",
						"pinyin_prefix": "m",
						"ext_id": "231225000000",
						"ext_name": "明水县"
					},
					{
						"id": "231226",
						"pid": 2312,
						"deep": 2,
						"name": "绥棱",
						"pinyin": "sui ling",
						"pinyin_prefix": "s",
						"ext_id": "231226000000",
						"ext_name": "绥棱县"
					},
					{
						"id": "231281",
						"pid": 2312,
						"deep": 2,
						"name": "安达",
						"pinyin": "an da",
						"pinyin_prefix": "a",
						"ext_id": "231281000000",
						"ext_name": "安达市"
					},
					{
						"id": "231282",
						"pid": 2312,
						"deep": 2,
						"name": "肇东",
						"pinyin": "zhao dong",
						"pinyin_prefix": "z",
						"ext_id": "231282000000",
						"ext_name": "肇东市"
					},
					{
						"id": "231283",
						"pid": 2312,
						"deep": 2,
						"name": "海伦",
						"pinyin": "hai lun",
						"pinyin_prefix": "h",
						"ext_id": "231283000000",
						"ext_name": "海伦市"
					}
				]
			},
			{
				"id": "2327",
				"pid": 23,
				"deep": 1,
				"name": "大兴安岭",
				"pinyin": "da xing an ling",
				"pinyin_prefix": "d",
				"ext_id": "232700000000",
				"ext_name": "大兴安岭地区",
				"childs": [
					{
						"id": "232701",
						"pid": 2327,
						"deep": 2,
						"name": "漠河",
						"pinyin": "mo he",
						"pinyin_prefix": "m",
						"ext_id": "232701000000",
						"ext_name": "漠河市"
					},
					{
						"id": "232721",
						"pid": 2327,
						"deep": 2,
						"name": "呼玛",
						"pinyin": "hu ma",
						"pinyin_prefix": "h",
						"ext_id": "232721000000",
						"ext_name": "呼玛县"
					},
					{
						"id": "232722",
						"pid": 2327,
						"deep": 2,
						"name": "塔河",
						"pinyin": "ta he",
						"pinyin_prefix": "t",
						"ext_id": "232722000000",
						"ext_name": "塔河县"
					},
					{
						"id": "232761",
						"pid": 2327,
						"deep": 2,
						"name": "加格达奇区",
						"pinyin": "jia ge da qi qu",
						"pinyin_prefix": "j",
						"ext_id": "232761000000",
						"ext_name": "加格达奇区"
					}
				]
			}
		]
	},
	{
		"id": "31",
		"pid": 0,
		"deep": 0,
		"name": "上海",
		"pinyin": "shang hai",
		"pinyin_prefix": "s",
		"ext_id": "310000000000",
		"ext_name": "上海市",
		"childs": [
			{
				"id": "3101",
				"pid": 31,
				"deep": 1,
				"name": "上海",
				"pinyin": "shang hai",
				"pinyin_prefix": "s",
				"ext_id": "310100000000",
				"ext_name": "上海市",
				"childs": [
					{
						"id": "310101",
						"pid": 3101,
						"deep": 2,
						"name": "黄浦",
						"pinyin": "huang pu",
						"pinyin_prefix": "h",
						"ext_id": "310101000000",
						"ext_name": "黄浦区"
					},
					{
						"id": "310104",
						"pid": 3101,
						"deep": 2,
						"name": "徐汇",
						"pinyin": "xu hui",
						"pinyin_prefix": "x",
						"ext_id": "310104000000",
						"ext_name": "徐汇区"
					},
					{
						"id": "310105",
						"pid": 3101,
						"deep": 2,
						"name": "长宁",
						"pinyin": "chang ning",
						"pinyin_prefix": "c",
						"ext_id": "310105000000",
						"ext_name": "长宁区"
					},
					{
						"id": "310106",
						"pid": 3101,
						"deep": 2,
						"name": "静安",
						"pinyin": "jing an",
						"pinyin_prefix": "j",
						"ext_id": "310106000000",
						"ext_name": "静安区"
					},
					{
						"id": "310107",
						"pid": 3101,
						"deep": 2,
						"name": "普陀",
						"pinyin": "pu tuo",
						"pinyin_prefix": "p",
						"ext_id": "310107000000",
						"ext_name": "普陀区"
					},
					{
						"id": "310109",
						"pid": 3101,
						"deep": 2,
						"name": "虹口",
						"pinyin": "hong kou",
						"pinyin_prefix": "h",
						"ext_id": "310109000000",
						"ext_name": "虹口区"
					},
					{
						"id": "310110",
						"pid": 3101,
						"deep": 2,
						"name": "杨浦",
						"pinyin": "yang pu",
						"pinyin_prefix": "y",
						"ext_id": "310110000000",
						"ext_name": "杨浦区"
					},
					{
						"id": "310112",
						"pid": 3101,
						"deep": 2,
						"name": "闵行",
						"pinyin": "min hang",
						"pinyin_prefix": "m",
						"ext_id": "310112000000",
						"ext_name": "闵行区"
					},
					{
						"id": "310113",
						"pid": 3101,
						"deep": 2,
						"name": "宝山",
						"pinyin": "bao shan",
						"pinyin_prefix": "b",
						"ext_id": "310113000000",
						"ext_name": "宝山区"
					},
					{
						"id": "310114",
						"pid": 3101,
						"deep": 2,
						"name": "嘉定",
						"pinyin": "jia ding",
						"pinyin_prefix": "j",
						"ext_id": "310114000000",
						"ext_name": "嘉定区"
					},
					{
						"id": "310115",
						"pid": 3101,
						"deep": 2,
						"name": "浦东新区",
						"pinyin": "pu dong xin qu",
						"pinyin_prefix": "p",
						"ext_id": "310115000000",
						"ext_name": "浦东新区"
					},
					{
						"id": "310116",
						"pid": 3101,
						"deep": 2,
						"name": "金山",
						"pinyin": "jin shan",
						"pinyin_prefix": "j",
						"ext_id": "310116000000",
						"ext_name": "金山区"
					},
					{
						"id": "310117",
						"pid": 3101,
						"deep": 2,
						"name": "松江",
						"pinyin": "song jiang",
						"pinyin_prefix": "s",
						"ext_id": "310117000000",
						"ext_name": "松江区"
					},
					{
						"id": "310118",
						"pid": 3101,
						"deep": 2,
						"name": "青浦",
						"pinyin": "qing pu",
						"pinyin_prefix": "q",
						"ext_id": "310118000000",
						"ext_name": "青浦区"
					},
					{
						"id": "310120",
						"pid": 3101,
						"deep": 2,
						"name": "奉贤",
						"pinyin": "feng xian",
						"pinyin_prefix": "f",
						"ext_id": "310120000000",
						"ext_name": "奉贤区"
					},
					{
						"id": "310151",
						"pid": 3101,
						"deep": 2,
						"name": "崇明",
						"pinyin": "chong ming",
						"pinyin_prefix": "c",
						"ext_id": "310151000000",
						"ext_name": "崇明区"
					}
				]
			}
		]
	},
	{
		"id": "32",
		"pid": 0,
		"deep": 0,
		"name": "江苏",
		"pinyin": "jiang su",
		"pinyin_prefix": "j",
		"ext_id": "320000000000",
		"ext_name": "江苏省",
		"childs": [
			{
				"id": "3201",
				"pid": 32,
				"deep": 1,
				"name": "南京",
				"pinyin": "nan jing",
				"pinyin_prefix": "n",
				"ext_id": "320100000000",
				"ext_name": "南京市",
				"childs": [
					{
						"id": "320102",
						"pid": 3201,
						"deep": 2,
						"name": "玄武",
						"pinyin": "xuan wu",
						"pinyin_prefix": "x",
						"ext_id": "320102000000",
						"ext_name": "玄武区"
					},
					{
						"id": "320104",
						"pid": 3201,
						"deep": 2,
						"name": "秦淮",
						"pinyin": "qin huai",
						"pinyin_prefix": "q",
						"ext_id": "320104000000",
						"ext_name": "秦淮区"
					},
					{
						"id": "320105",
						"pid": 3201,
						"deep": 2,
						"name": "建邺",
						"pinyin": "jian ye",
						"pinyin_prefix": "j",
						"ext_id": "320105000000",
						"ext_name": "建邺区"
					},
					{
						"id": "320106",
						"pid": 3201,
						"deep": 2,
						"name": "鼓楼",
						"pinyin": "gu lou",
						"pinyin_prefix": "g",
						"ext_id": "320106000000",
						"ext_name": "鼓楼区"
					},
					{
						"id": "320111",
						"pid": 3201,
						"deep": 2,
						"name": "浦口",
						"pinyin": "pu kou",
						"pinyin_prefix": "p",
						"ext_id": "320111000000",
						"ext_name": "浦口区"
					},
					{
						"id": "320113",
						"pid": 3201,
						"deep": 2,
						"name": "栖霞",
						"pinyin": "qi xia",
						"pinyin_prefix": "q",
						"ext_id": "320113000000",
						"ext_name": "栖霞区"
					},
					{
						"id": "320114",
						"pid": 3201,
						"deep": 2,
						"name": "雨花台",
						"pinyin": "yu hua tai",
						"pinyin_prefix": "y",
						"ext_id": "320114000000",
						"ext_name": "雨花台区"
					},
					{
						"id": "320115",
						"pid": 3201,
						"deep": 2,
						"name": "江宁",
						"pinyin": "jiang ning",
						"pinyin_prefix": "j",
						"ext_id": "320115000000",
						"ext_name": "江宁区"
					},
					{
						"id": "320116",
						"pid": 3201,
						"deep": 2,
						"name": "六合",
						"pinyin": "lu he",
						"pinyin_prefix": "l",
						"ext_id": "320116000000",
						"ext_name": "六合区"
					},
					{
						"id": "320117",
						"pid": 3201,
						"deep": 2,
						"name": "溧水",
						"pinyin": "li shui",
						"pinyin_prefix": "l",
						"ext_id": "320117000000",
						"ext_name": "溧水区"
					},
					{
						"id": "320118",
						"pid": 3201,
						"deep": 2,
						"name": "高淳",
						"pinyin": "gao chun",
						"pinyin_prefix": "g",
						"ext_id": "320118000000",
						"ext_name": "高淳区"
					}
				]
			},
			{
				"id": "3202",
				"pid": 32,
				"deep": 1,
				"name": "无锡",
				"pinyin": "wu xi",
				"pinyin_prefix": "w",
				"ext_id": "320200000000",
				"ext_name": "无锡市",
				"childs": [
					{
						"id": "320205",
						"pid": 3202,
						"deep": 2,
						"name": "锡山",
						"pinyin": "xi shan",
						"pinyin_prefix": "x",
						"ext_id": "320205000000",
						"ext_name": "锡山区"
					},
					{
						"id": "320206",
						"pid": 3202,
						"deep": 2,
						"name": "惠山",
						"pinyin": "hui shan",
						"pinyin_prefix": "h",
						"ext_id": "320206000000",
						"ext_name": "惠山区"
					},
					{
						"id": "320211",
						"pid": 3202,
						"deep": 2,
						"name": "滨湖",
						"pinyin": "bin hu",
						"pinyin_prefix": "b",
						"ext_id": "320211000000",
						"ext_name": "滨湖区"
					},
					{
						"id": "320213",
						"pid": 3202,
						"deep": 2,
						"name": "梁溪",
						"pinyin": "liang xi",
						"pinyin_prefix": "l",
						"ext_id": "320213000000",
						"ext_name": "梁溪区"
					},
					{
						"id": "320214",
						"pid": 3202,
						"deep": 2,
						"name": "新吴",
						"pinyin": "xin wu",
						"pinyin_prefix": "x",
						"ext_id": "320214000000",
						"ext_name": "新吴区"
					},
					{
						"id": "320281",
						"pid": 3202,
						"deep": 2,
						"name": "江阴",
						"pinyin": "jiang yin",
						"pinyin_prefix": "j",
						"ext_id": "320281000000",
						"ext_name": "江阴市"
					},
					{
						"id": "320282",
						"pid": 3202,
						"deep": 2,
						"name": "宜兴",
						"pinyin": "yi xing",
						"pinyin_prefix": "y",
						"ext_id": "320282000000",
						"ext_name": "宜兴市"
					}
				]
			},
			{
				"id": "3203",
				"pid": 32,
				"deep": 1,
				"name": "徐州",
				"pinyin": "xu zhou",
				"pinyin_prefix": "x",
				"ext_id": "320300000000",
				"ext_name": "徐州市",
				"childs": [
					{
						"id": "320302",
						"pid": 3203,
						"deep": 2,
						"name": "鼓楼",
						"pinyin": "gu lou",
						"pinyin_prefix": "g",
						"ext_id": "320302000000",
						"ext_name": "鼓楼区"
					},
					{
						"id": "320303",
						"pid": 3203,
						"deep": 2,
						"name": "云龙",
						"pinyin": "yun long",
						"pinyin_prefix": "y",
						"ext_id": "320303000000",
						"ext_name": "云龙区"
					},
					{
						"id": "320305",
						"pid": 3203,
						"deep": 2,
						"name": "贾汪",
						"pinyin": "jia wang",
						"pinyin_prefix": "j",
						"ext_id": "320305000000",
						"ext_name": "贾汪区"
					},
					{
						"id": "320311",
						"pid": 3203,
						"deep": 2,
						"name": "泉山",
						"pinyin": "quan shan",
						"pinyin_prefix": "q",
						"ext_id": "320311000000",
						"ext_name": "泉山区"
					},
					{
						"id": "320312",
						"pid": 3203,
						"deep": 2,
						"name": "铜山",
						"pinyin": "tong shan",
						"pinyin_prefix": "t",
						"ext_id": "320312000000",
						"ext_name": "铜山区"
					},
					{
						"id": "320321",
						"pid": 3203,
						"deep": 2,
						"name": "丰县",
						"pinyin": "feng xian",
						"pinyin_prefix": "f",
						"ext_id": "320321000000",
						"ext_name": "丰县"
					},
					{
						"id": "320322",
						"pid": 3203,
						"deep": 2,
						"name": "沛县",
						"pinyin": "pei xian",
						"pinyin_prefix": "p",
						"ext_id": "320322000000",
						"ext_name": "沛县"
					},
					{
						"id": "320324",
						"pid": 3203,
						"deep": 2,
						"name": "睢宁",
						"pinyin": "sui ning",
						"pinyin_prefix": "s",
						"ext_id": "320324000000",
						"ext_name": "睢宁县"
					},
					{
						"id": "320381",
						"pid": 3203,
						"deep": 2,
						"name": "新沂",
						"pinyin": "xin yi",
						"pinyin_prefix": "x",
						"ext_id": "320381000000",
						"ext_name": "新沂市"
					},
					{
						"id": "320382",
						"pid": 3203,
						"deep": 2,
						"name": "邳州",
						"pinyin": "pi zhou",
						"pinyin_prefix": "p",
						"ext_id": "320382000000",
						"ext_name": "邳州市"
					}
				]
			},
			{
				"id": "3204",
				"pid": 32,
				"deep": 1,
				"name": "常州",
				"pinyin": "chang zhou",
				"pinyin_prefix": "c",
				"ext_id": "320400000000",
				"ext_name": "常州市",
				"childs": [
					{
						"id": "320402",
						"pid": 3204,
						"deep": 2,
						"name": "天宁",
						"pinyin": "tian ning",
						"pinyin_prefix": "t",
						"ext_id": "320402000000",
						"ext_name": "天宁区"
					},
					{
						"id": "320404",
						"pid": 3204,
						"deep": 2,
						"name": "钟楼",
						"pinyin": "zhong lou",
						"pinyin_prefix": "z",
						"ext_id": "320404000000",
						"ext_name": "钟楼区"
					},
					{
						"id": "320411",
						"pid": 3204,
						"deep": 2,
						"name": "新北",
						"pinyin": "xin bei",
						"pinyin_prefix": "x",
						"ext_id": "320411000000",
						"ext_name": "新北区"
					},
					{
						"id": "320412",
						"pid": 3204,
						"deep": 2,
						"name": "武进",
						"pinyin": "wu jin",
						"pinyin_prefix": "w",
						"ext_id": "320412000000",
						"ext_name": "武进区"
					},
					{
						"id": "320413",
						"pid": 3204,
						"deep": 2,
						"name": "金坛",
						"pinyin": "jin tan",
						"pinyin_prefix": "j",
						"ext_id": "320413000000",
						"ext_name": "金坛区"
					},
					{
						"id": "320481",
						"pid": 3204,
						"deep": 2,
						"name": "溧阳",
						"pinyin": "li yang",
						"pinyin_prefix": "l",
						"ext_id": "320481000000",
						"ext_name": "溧阳市"
					}
				]
			},
			{
				"id": "3205",
				"pid": 32,
				"deep": 1,
				"name": "苏州",
				"pinyin": "su zhou",
				"pinyin_prefix": "s",
				"ext_id": "320500000000",
				"ext_name": "苏州市",
				"childs": [
					{
						"id": "320505",
						"pid": 3205,
						"deep": 2,
						"name": "虎丘",
						"pinyin": "hu qiu",
						"pinyin_prefix": "h",
						"ext_id": "320505000000",
						"ext_name": "虎丘区"
					},
					{
						"id": "320506",
						"pid": 3205,
						"deep": 2,
						"name": "吴中",
						"pinyin": "wu zhong",
						"pinyin_prefix": "w",
						"ext_id": "320506000000",
						"ext_name": "吴中区"
					},
					{
						"id": "320507",
						"pid": 3205,
						"deep": 2,
						"name": "相城",
						"pinyin": "xiang cheng",
						"pinyin_prefix": "x",
						"ext_id": "320507000000",
						"ext_name": "相城区"
					},
					{
						"id": "320508",
						"pid": 3205,
						"deep": 2,
						"name": "姑苏",
						"pinyin": "gu su",
						"pinyin_prefix": "g",
						"ext_id": "320508000000",
						"ext_name": "姑苏区"
					},
					{
						"id": "320509",
						"pid": 3205,
						"deep": 2,
						"name": "吴江",
						"pinyin": "wu jiang",
						"pinyin_prefix": "w",
						"ext_id": "320509000000",
						"ext_name": "吴江区"
					},
					{
						"id": "320581",
						"pid": 3205,
						"deep": 2,
						"name": "常熟",
						"pinyin": "chang shu",
						"pinyin_prefix": "c",
						"ext_id": "320581000000",
						"ext_name": "常熟市"
					},
					{
						"id": "320582",
						"pid": 3205,
						"deep": 2,
						"name": "张家港",
						"pinyin": "zhang jia gang",
						"pinyin_prefix": "z",
						"ext_id": "320582000000",
						"ext_name": "张家港市"
					},
					{
						"id": "320583",
						"pid": 3205,
						"deep": 2,
						"name": "昆山",
						"pinyin": "kun shan",
						"pinyin_prefix": "k",
						"ext_id": "320583000000",
						"ext_name": "昆山市"
					},
					{
						"id": "320585",
						"pid": 3205,
						"deep": 2,
						"name": "太仓",
						"pinyin": "tai cang",
						"pinyin_prefix": "t",
						"ext_id": "320585000000",
						"ext_name": "太仓市"
					}
				]
			},
			{
				"id": "3206",
				"pid": 32,
				"deep": 1,
				"name": "南通",
				"pinyin": "nan tong",
				"pinyin_prefix": "n",
				"ext_id": "320600000000",
				"ext_name": "南通市",
				"childs": [
					{
						"id": "320612",
						"pid": 3206,
						"deep": 2,
						"name": "通州",
						"pinyin": "tong zhou",
						"pinyin_prefix": "t",
						"ext_id": "320612000000",
						"ext_name": "通州区"
					},
					{
						"id": "320613",
						"pid": 3206,
						"deep": 2,
						"name": "崇川",
						"pinyin": "chong chuan",
						"pinyin_prefix": "c",
						"ext_id": "320613000000",
						"ext_name": "崇川区"
					},
					{
						"id": "320614",
						"pid": 3206,
						"deep": 2,
						"name": "海门",
						"pinyin": "hai men",
						"pinyin_prefix": "h",
						"ext_id": "320614000000",
						"ext_name": "海门区"
					},
					{
						"id": "320623",
						"pid": 3206,
						"deep": 2,
						"name": "如东",
						"pinyin": "ru dong",
						"pinyin_prefix": "r",
						"ext_id": "320623000000",
						"ext_name": "如东县"
					},
					{
						"id": "320681",
						"pid": 3206,
						"deep": 2,
						"name": "启东",
						"pinyin": "qi dong",
						"pinyin_prefix": "q",
						"ext_id": "320681000000",
						"ext_name": "启东市"
					},
					{
						"id": "320682",
						"pid": 3206,
						"deep": 2,
						"name": "如皋",
						"pinyin": "ru gao",
						"pinyin_prefix": "r",
						"ext_id": "320682000000",
						"ext_name": "如皋市"
					},
					{
						"id": "320685",
						"pid": 3206,
						"deep": 2,
						"name": "海安",
						"pinyin": "hai an",
						"pinyin_prefix": "h",
						"ext_id": "320685000000",
						"ext_name": "海安市"
					}
				]
			},
			{
				"id": "3207",
				"pid": 32,
				"deep": 1,
				"name": "连云港",
				"pinyin": "lian yun gang",
				"pinyin_prefix": "l",
				"ext_id": "320700000000",
				"ext_name": "连云港市",
				"childs": [
					{
						"id": "320703",
						"pid": 3207,
						"deep": 2,
						"name": "连云",
						"pinyin": "lian yun",
						"pinyin_prefix": "l",
						"ext_id": "320703000000",
						"ext_name": "连云区"
					},
					{
						"id": "320706",
						"pid": 3207,
						"deep": 2,
						"name": "海州",
						"pinyin": "hai zhou",
						"pinyin_prefix": "h",
						"ext_id": "320706000000",
						"ext_name": "海州区"
					},
					{
						"id": "320707",
						"pid": 3207,
						"deep": 2,
						"name": "赣榆",
						"pinyin": "gan yu",
						"pinyin_prefix": "g",
						"ext_id": "320707000000",
						"ext_name": "赣榆区"
					},
					{
						"id": "320722",
						"pid": 3207,
						"deep": 2,
						"name": "东海",
						"pinyin": "dong hai",
						"pinyin_prefix": "d",
						"ext_id": "320722000000",
						"ext_name": "东海县"
					},
					{
						"id": "320723",
						"pid": 3207,
						"deep": 2,
						"name": "灌云",
						"pinyin": "guan yun",
						"pinyin_prefix": "g",
						"ext_id": "320723000000",
						"ext_name": "灌云县"
					},
					{
						"id": "320724",
						"pid": 3207,
						"deep": 2,
						"name": "灌南",
						"pinyin": "guan nan",
						"pinyin_prefix": "g",
						"ext_id": "320724000000",
						"ext_name": "灌南县"
					}
				]
			},
			{
				"id": "3208",
				"pid": 32,
				"deep": 1,
				"name": "淮安",
				"pinyin": "huai an",
				"pinyin_prefix": "h",
				"ext_id": "320800000000",
				"ext_name": "淮安市",
				"childs": [
					{
						"id": "320803",
						"pid": 3208,
						"deep": 2,
						"name": "淮安区",
						"pinyin": "huai an qu",
						"pinyin_prefix": "h",
						"ext_id": "320803000000",
						"ext_name": "淮安区"
					},
					{
						"id": "320804",
						"pid": 3208,
						"deep": 2,
						"name": "淮阴",
						"pinyin": "huai yin",
						"pinyin_prefix": "h",
						"ext_id": "320804000000",
						"ext_name": "淮阴区"
					},
					{
						"id": "320812",
						"pid": 3208,
						"deep": 2,
						"name": "清江浦",
						"pinyin": "qing jiang pu",
						"pinyin_prefix": "q",
						"ext_id": "320812000000",
						"ext_name": "清江浦区"
					},
					{
						"id": "320813",
						"pid": 3208,
						"deep": 2,
						"name": "洪泽",
						"pinyin": "hong ze",
						"pinyin_prefix": "h",
						"ext_id": "320813000000",
						"ext_name": "洪泽区"
					},
					{
						"id": "320826",
						"pid": 3208,
						"deep": 2,
						"name": "涟水",
						"pinyin": "lian shui",
						"pinyin_prefix": "l",
						"ext_id": "320826000000",
						"ext_name": "涟水县"
					},
					{
						"id": "320830",
						"pid": 3208,
						"deep": 2,
						"name": "盱眙",
						"pinyin": "xu yi",
						"pinyin_prefix": "x",
						"ext_id": "320830000000",
						"ext_name": "盱眙县"
					},
					{
						"id": "320831",
						"pid": 3208,
						"deep": 2,
						"name": "金湖",
						"pinyin": "jin hu",
						"pinyin_prefix": "j",
						"ext_id": "320831000000",
						"ext_name": "金湖县"
					}
				]
			},
			{
				"id": "3209",
				"pid": 32,
				"deep": 1,
				"name": "盐城",
				"pinyin": "yan cheng",
				"pinyin_prefix": "y",
				"ext_id": "320900000000",
				"ext_name": "盐城市",
				"childs": [
					{
						"id": "320902",
						"pid": 3209,
						"deep": 2,
						"name": "亭湖",
						"pinyin": "ting hu",
						"pinyin_prefix": "t",
						"ext_id": "320902000000",
						"ext_name": "亭湖区"
					},
					{
						"id": "320903",
						"pid": 3209,
						"deep": 2,
						"name": "盐都",
						"pinyin": "yan du",
						"pinyin_prefix": "y",
						"ext_id": "320903000000",
						"ext_name": "盐都区"
					},
					{
						"id": "320904",
						"pid": 3209,
						"deep": 2,
						"name": "大丰",
						"pinyin": "da feng",
						"pinyin_prefix": "d",
						"ext_id": "320904000000",
						"ext_name": "大丰区"
					},
					{
						"id": "320921",
						"pid": 3209,
						"deep": 2,
						"name": "响水",
						"pinyin": "xiang shui",
						"pinyin_prefix": "x",
						"ext_id": "320921000000",
						"ext_name": "响水县"
					},
					{
						"id": "320922",
						"pid": 3209,
						"deep": 2,
						"name": "滨海",
						"pinyin": "bin hai",
						"pinyin_prefix": "b",
						"ext_id": "320922000000",
						"ext_name": "滨海县"
					},
					{
						"id": "320923",
						"pid": 3209,
						"deep": 2,
						"name": "阜宁",
						"pinyin": "fu ning",
						"pinyin_prefix": "f",
						"ext_id": "320923000000",
						"ext_name": "阜宁县"
					},
					{
						"id": "320924",
						"pid": 3209,
						"deep": 2,
						"name": "射阳",
						"pinyin": "she yang",
						"pinyin_prefix": "s",
						"ext_id": "320924000000",
						"ext_name": "射阳县"
					},
					{
						"id": "320925",
						"pid": 3209,
						"deep": 2,
						"name": "建湖",
						"pinyin": "jian hu",
						"pinyin_prefix": "j",
						"ext_id": "320925000000",
						"ext_name": "建湖县"
					},
					{
						"id": "320981",
						"pid": 3209,
						"deep": 2,
						"name": "东台",
						"pinyin": "dong tai",
						"pinyin_prefix": "d",
						"ext_id": "320981000000",
						"ext_name": "东台市"
					}
				]
			},
			{
				"id": "3210",
				"pid": 32,
				"deep": 1,
				"name": "扬州",
				"pinyin": "yang zhou",
				"pinyin_prefix": "y",
				"ext_id": "321000000000",
				"ext_name": "扬州市",
				"childs": [
					{
						"id": "321002",
						"pid": 3210,
						"deep": 2,
						"name": "广陵",
						"pinyin": "guang ling",
						"pinyin_prefix": "g",
						"ext_id": "321002000000",
						"ext_name": "广陵区"
					},
					{
						"id": "321003",
						"pid": 3210,
						"deep": 2,
						"name": "邗江",
						"pinyin": "han jiang",
						"pinyin_prefix": "h",
						"ext_id": "321003000000",
						"ext_name": "邗江区"
					},
					{
						"id": "321012",
						"pid": 3210,
						"deep": 2,
						"name": "江都",
						"pinyin": "jiang du",
						"pinyin_prefix": "j",
						"ext_id": "321012000000",
						"ext_name": "江都区"
					},
					{
						"id": "321023",
						"pid": 3210,
						"deep": 2,
						"name": "宝应",
						"pinyin": "bao ying",
						"pinyin_prefix": "b",
						"ext_id": "321023000000",
						"ext_name": "宝应县"
					},
					{
						"id": "321081",
						"pid": 3210,
						"deep": 2,
						"name": "仪征",
						"pinyin": "yi zheng",
						"pinyin_prefix": "y",
						"ext_id": "321081000000",
						"ext_name": "仪征市"
					},
					{
						"id": "321084",
						"pid": 3210,
						"deep": 2,
						"name": "高邮",
						"pinyin": "gao you",
						"pinyin_prefix": "g",
						"ext_id": "321084000000",
						"ext_name": "高邮市"
					}
				]
			},
			{
				"id": "3211",
				"pid": 32,
				"deep": 1,
				"name": "镇江",
				"pinyin": "zhen jiang",
				"pinyin_prefix": "z",
				"ext_id": "321100000000",
				"ext_name": "镇江市",
				"childs": [
					{
						"id": "321102",
						"pid": 3211,
						"deep": 2,
						"name": "京口",
						"pinyin": "jing kou",
						"pinyin_prefix": "j",
						"ext_id": "321102000000",
						"ext_name": "京口区"
					},
					{
						"id": "321111",
						"pid": 3211,
						"deep": 2,
						"name": "润州",
						"pinyin": "run zhou",
						"pinyin_prefix": "r",
						"ext_id": "321111000000",
						"ext_name": "润州区"
					},
					{
						"id": "321112",
						"pid": 3211,
						"deep": 2,
						"name": "丹徒",
						"pinyin": "dan tu",
						"pinyin_prefix": "d",
						"ext_id": "321112000000",
						"ext_name": "丹徒区"
					},
					{
						"id": "321181",
						"pid": 3211,
						"deep": 2,
						"name": "丹阳",
						"pinyin": "dan yang",
						"pinyin_prefix": "d",
						"ext_id": "321181000000",
						"ext_name": "丹阳市"
					},
					{
						"id": "321182",
						"pid": 3211,
						"deep": 2,
						"name": "扬中",
						"pinyin": "yang zhong",
						"pinyin_prefix": "y",
						"ext_id": "321182000000",
						"ext_name": "扬中市"
					},
					{
						"id": "321183",
						"pid": 3211,
						"deep": 2,
						"name": "句容",
						"pinyin": "ju rong",
						"pinyin_prefix": "j",
						"ext_id": "321183000000",
						"ext_name": "句容市"
					}
				]
			},
			{
				"id": "3212",
				"pid": 32,
				"deep": 1,
				"name": "泰州",
				"pinyin": "tai zhou",
				"pinyin_prefix": "t",
				"ext_id": "321200000000",
				"ext_name": "泰州市",
				"childs": [
					{
						"id": "321202",
						"pid": 3212,
						"deep": 2,
						"name": "海陵",
						"pinyin": "hai ling",
						"pinyin_prefix": "h",
						"ext_id": "321202000000",
						"ext_name": "海陵区"
					},
					{
						"id": "321203",
						"pid": 3212,
						"deep": 2,
						"name": "高港",
						"pinyin": "gao gang",
						"pinyin_prefix": "g",
						"ext_id": "321203000000",
						"ext_name": "高港区"
					},
					{
						"id": "321204",
						"pid": 3212,
						"deep": 2,
						"name": "姜堰",
						"pinyin": "jiang yan",
						"pinyin_prefix": "j",
						"ext_id": "321204000000",
						"ext_name": "姜堰区"
					},
					{
						"id": "321281",
						"pid": 3212,
						"deep": 2,
						"name": "兴化",
						"pinyin": "xing hua",
						"pinyin_prefix": "x",
						"ext_id": "321281000000",
						"ext_name": "兴化市"
					},
					{
						"id": "321282",
						"pid": 3212,
						"deep": 2,
						"name": "靖江",
						"pinyin": "jing jiang",
						"pinyin_prefix": "j",
						"ext_id": "321282000000",
						"ext_name": "靖江市"
					},
					{
						"id": "321283",
						"pid": 3212,
						"deep": 2,
						"name": "泰兴",
						"pinyin": "tai xing",
						"pinyin_prefix": "t",
						"ext_id": "321283000000",
						"ext_name": "泰兴市"
					}
				]
			},
			{
				"id": "3213",
				"pid": 32,
				"deep": 1,
				"name": "宿迁",
				"pinyin": "su qian",
				"pinyin_prefix": "s",
				"ext_id": "321300000000",
				"ext_name": "宿迁市",
				"childs": [
					{
						"id": "321302",
						"pid": 3213,
						"deep": 2,
						"name": "宿城",
						"pinyin": "su cheng",
						"pinyin_prefix": "s",
						"ext_id": "321302000000",
						"ext_name": "宿城区"
					},
					{
						"id": "321311",
						"pid": 3213,
						"deep": 2,
						"name": "宿豫",
						"pinyin": "su yu",
						"pinyin_prefix": "s",
						"ext_id": "321311000000",
						"ext_name": "宿豫区"
					},
					{
						"id": "321322",
						"pid": 3213,
						"deep": 2,
						"name": "沭阳",
						"pinyin": "shu yang",
						"pinyin_prefix": "s",
						"ext_id": "321322000000",
						"ext_name": "沭阳县"
					},
					{
						"id": "321323",
						"pid": 3213,
						"deep": 2,
						"name": "泗阳",
						"pinyin": "si yang",
						"pinyin_prefix": "s",
						"ext_id": "321323000000",
						"ext_name": "泗阳县"
					},
					{
						"id": "321324",
						"pid": 3213,
						"deep": 2,
						"name": "泗洪",
						"pinyin": "si hong",
						"pinyin_prefix": "s",
						"ext_id": "321324000000",
						"ext_name": "泗洪县"
					}
				]
			}
		]
	},
	{
		"id": "33",
		"pid": 0,
		"deep": 0,
		"name": "浙江",
		"pinyin": "zhe jiang",
		"pinyin_prefix": "z",
		"ext_id": "330000000000",
		"ext_name": "浙江省",
		"childs": [
			{
				"id": "3301",
				"pid": 33,
				"deep": 1,
				"name": "杭州",
				"pinyin": "hang zhou",
				"pinyin_prefix": "h",
				"ext_id": "330100000000",
				"ext_name": "杭州市",
				"childs": [
					{
						"id": "330102",
						"pid": 3301,
						"deep": 2,
						"name": "上城",
						"pinyin": "shang cheng",
						"pinyin_prefix": "s",
						"ext_id": "330102000000",
						"ext_name": "上城区"
					},
					{
						"id": "330105",
						"pid": 3301,
						"deep": 2,
						"name": "拱墅",
						"pinyin": "gong shu",
						"pinyin_prefix": "g",
						"ext_id": "330105000000",
						"ext_name": "拱墅区"
					},
					{
						"id": "330106",
						"pid": 3301,
						"deep": 2,
						"name": "西湖",
						"pinyin": "xi hu",
						"pinyin_prefix": "x",
						"ext_id": "330106000000",
						"ext_name": "西湖区"
					},
					{
						"id": "330108",
						"pid": 3301,
						"deep": 2,
						"name": "滨江",
						"pinyin": "bin jiang",
						"pinyin_prefix": "b",
						"ext_id": "330108000000",
						"ext_name": "滨江区"
					},
					{
						"id": "330109",
						"pid": 3301,
						"deep": 2,
						"name": "萧山",
						"pinyin": "xiao shan",
						"pinyin_prefix": "x",
						"ext_id": "330109000000",
						"ext_name": "萧山区"
					},
					{
						"id": "330110",
						"pid": 3301,
						"deep": 2,
						"name": "余杭",
						"pinyin": "yu hang",
						"pinyin_prefix": "y",
						"ext_id": "330110000000",
						"ext_name": "余杭区"
					},
					{
						"id": "330111",
						"pid": 3301,
						"deep": 2,
						"name": "富阳",
						"pinyin": "fu yang",
						"pinyin_prefix": "f",
						"ext_id": "330111000000",
						"ext_name": "富阳区"
					},
					{
						"id": "330112",
						"pid": 3301,
						"deep": 2,
						"name": "临安",
						"pinyin": "lin an",
						"pinyin_prefix": "l",
						"ext_id": "330112000000",
						"ext_name": "临安区"
					},
					{
						"id": "330113",
						"pid": 3301,
						"deep": 2,
						"name": "临平",
						"pinyin": "lin ping",
						"pinyin_prefix": "l",
						"ext_id": "330113000000",
						"ext_name": "临平区"
					},
					{
						"id": "330114",
						"pid": 3301,
						"deep": 2,
						"name": "钱塘",
						"pinyin": "qian tang",
						"pinyin_prefix": "q",
						"ext_id": "330114000000",
						"ext_name": "钱塘区"
					},
					{
						"id": "330122",
						"pid": 3301,
						"deep": 2,
						"name": "桐庐",
						"pinyin": "tong lu",
						"pinyin_prefix": "t",
						"ext_id": "330122000000",
						"ext_name": "桐庐县"
					},
					{
						"id": "330127",
						"pid": 3301,
						"deep": 2,
						"name": "淳安",
						"pinyin": "chun an",
						"pinyin_prefix": "c",
						"ext_id": "330127000000",
						"ext_name": "淳安县"
					},
					{
						"id": "330182",
						"pid": 3301,
						"deep": 2,
						"name": "建德",
						"pinyin": "jian de",
						"pinyin_prefix": "j",
						"ext_id": "330182000000",
						"ext_name": "建德市"
					}
				]
			},
			{
				"id": "3302",
				"pid": 33,
				"deep": 1,
				"name": "宁波",
				"pinyin": "ning bo",
				"pinyin_prefix": "n",
				"ext_id": "330200000000",
				"ext_name": "宁波市",
				"childs": [
					{
						"id": "330203",
						"pid": 3302,
						"deep": 2,
						"name": "海曙",
						"pinyin": "hai shu",
						"pinyin_prefix": "h",
						"ext_id": "330203000000",
						"ext_name": "海曙区"
					},
					{
						"id": "330205",
						"pid": 3302,
						"deep": 2,
						"name": "江北",
						"pinyin": "jiang bei",
						"pinyin_prefix": "j",
						"ext_id": "330205000000",
						"ext_name": "江北区"
					},
					{
						"id": "330206",
						"pid": 3302,
						"deep": 2,
						"name": "北仑",
						"pinyin": "bei lun",
						"pinyin_prefix": "b",
						"ext_id": "330206000000",
						"ext_name": "北仑区"
					},
					{
						"id": "330211",
						"pid": 3302,
						"deep": 2,
						"name": "镇海",
						"pinyin": "zhen hai",
						"pinyin_prefix": "z",
						"ext_id": "330211000000",
						"ext_name": "镇海区"
					},
					{
						"id": "330212",
						"pid": 3302,
						"deep": 2,
						"name": "鄞州",
						"pinyin": "yin zhou",
						"pinyin_prefix": "y",
						"ext_id": "330212000000",
						"ext_name": "鄞州区"
					},
					{
						"id": "330213",
						"pid": 3302,
						"deep": 2,
						"name": "奉化",
						"pinyin": "feng hua",
						"pinyin_prefix": "f",
						"ext_id": "330213000000",
						"ext_name": "奉化区"
					},
					{
						"id": "330225",
						"pid": 3302,
						"deep": 2,
						"name": "象山",
						"pinyin": "xiang shan",
						"pinyin_prefix": "x",
						"ext_id": "330225000000",
						"ext_name": "象山县"
					},
					{
						"id": "330226",
						"pid": 3302,
						"deep": 2,
						"name": "宁海",
						"pinyin": "ning hai",
						"pinyin_prefix": "n",
						"ext_id": "330226000000",
						"ext_name": "宁海县"
					},
					{
						"id": "330281",
						"pid": 3302,
						"deep": 2,
						"name": "余姚",
						"pinyin": "yu yao",
						"pinyin_prefix": "y",
						"ext_id": "330281000000",
						"ext_name": "余姚市"
					},
					{
						"id": "330282",
						"pid": 3302,
						"deep": 2,
						"name": "慈溪",
						"pinyin": "ci xi",
						"pinyin_prefix": "c",
						"ext_id": "330282000000",
						"ext_name": "慈溪市"
					}
				]
			},
			{
				"id": "3303",
				"pid": 33,
				"deep": 1,
				"name": "温州",
				"pinyin": "wen zhou",
				"pinyin_prefix": "w",
				"ext_id": "330300000000",
				"ext_name": "温州市",
				"childs": [
					{
						"id": "330302",
						"pid": 3303,
						"deep": 2,
						"name": "鹿城",
						"pinyin": "lu cheng",
						"pinyin_prefix": "l",
						"ext_id": "330302000000",
						"ext_name": "鹿城区"
					},
					{
						"id": "330303",
						"pid": 3303,
						"deep": 2,
						"name": "龙湾",
						"pinyin": "long wan",
						"pinyin_prefix": "l",
						"ext_id": "330303000000",
						"ext_name": "龙湾区"
					},
					{
						"id": "330304",
						"pid": 3303,
						"deep": 2,
						"name": "瓯海",
						"pinyin": "ou hai",
						"pinyin_prefix": "o",
						"ext_id": "330304000000",
						"ext_name": "瓯海区"
					},
					{
						"id": "330305",
						"pid": 3303,
						"deep": 2,
						"name": "洞头",
						"pinyin": "dong tou",
						"pinyin_prefix": "d",
						"ext_id": "330305000000",
						"ext_name": "洞头区"
					},
					{
						"id": "330324",
						"pid": 3303,
						"deep": 2,
						"name": "永嘉",
						"pinyin": "yong jia",
						"pinyin_prefix": "y",
						"ext_id": "330324000000",
						"ext_name": "永嘉县"
					},
					{
						"id": "330326",
						"pid": 3303,
						"deep": 2,
						"name": "平阳",
						"pinyin": "ping yang",
						"pinyin_prefix": "p",
						"ext_id": "330326000000",
						"ext_name": "平阳县"
					},
					{
						"id": "330327",
						"pid": 3303,
						"deep": 2,
						"name": "苍南",
						"pinyin": "cang nan",
						"pinyin_prefix": "c",
						"ext_id": "330327000000",
						"ext_name": "苍南县"
					},
					{
						"id": "330328",
						"pid": 3303,
						"deep": 2,
						"name": "文成",
						"pinyin": "wen cheng",
						"pinyin_prefix": "w",
						"ext_id": "330328000000",
						"ext_name": "文成县"
					},
					{
						"id": "330329",
						"pid": 3303,
						"deep": 2,
						"name": "泰顺",
						"pinyin": "tai shun",
						"pinyin_prefix": "t",
						"ext_id": "330329000000",
						"ext_name": "泰顺县"
					},
					{
						"id": "330381",
						"pid": 3303,
						"deep": 2,
						"name": "瑞安",
						"pinyin": "rui an",
						"pinyin_prefix": "r",
						"ext_id": "330381000000",
						"ext_name": "瑞安市"
					},
					{
						"id": "330382",
						"pid": 3303,
						"deep": 2,
						"name": "乐清",
						"pinyin": "yue qing",
						"pinyin_prefix": "y",
						"ext_id": "330382000000",
						"ext_name": "乐清市"
					},
					{
						"id": "330383",
						"pid": 3303,
						"deep": 2,
						"name": "龙港",
						"pinyin": "long gang",
						"pinyin_prefix": "l",
						"ext_id": "330383000000",
						"ext_name": "龙港市"
					}
				]
			},
			{
				"id": "3304",
				"pid": 33,
				"deep": 1,
				"name": "嘉兴",
				"pinyin": "jia xing",
				"pinyin_prefix": "j",
				"ext_id": "330400000000",
				"ext_name": "嘉兴市",
				"childs": [
					{
						"id": "330402",
						"pid": 3304,
						"deep": 2,
						"name": "南湖",
						"pinyin": "nan hu",
						"pinyin_prefix": "n",
						"ext_id": "330402000000",
						"ext_name": "南湖区"
					},
					{
						"id": "330411",
						"pid": 3304,
						"deep": 2,
						"name": "秀洲",
						"pinyin": "xiu zhou",
						"pinyin_prefix": "x",
						"ext_id": "330411000000",
						"ext_name": "秀洲区"
					},
					{
						"id": "330421",
						"pid": 3304,
						"deep": 2,
						"name": "嘉善",
						"pinyin": "jia shan",
						"pinyin_prefix": "j",
						"ext_id": "330421000000",
						"ext_name": "嘉善县"
					},
					{
						"id": "330424",
						"pid": 3304,
						"deep": 2,
						"name": "海盐",
						"pinyin": "hai yan",
						"pinyin_prefix": "h",
						"ext_id": "330424000000",
						"ext_name": "海盐县"
					},
					{
						"id": "330481",
						"pid": 3304,
						"deep": 2,
						"name": "海宁",
						"pinyin": "hai ning",
						"pinyin_prefix": "h",
						"ext_id": "330481000000",
						"ext_name": "海宁市"
					},
					{
						"id": "330482",
						"pid": 3304,
						"deep": 2,
						"name": "平湖",
						"pinyin": "ping hu",
						"pinyin_prefix": "p",
						"ext_id": "330482000000",
						"ext_name": "平湖市"
					},
					{
						"id": "330483",
						"pid": 3304,
						"deep": 2,
						"name": "桐乡",
						"pinyin": "tong xiang",
						"pinyin_prefix": "t",
						"ext_id": "330483000000",
						"ext_name": "桐乡市"
					}
				]
			},
			{
				"id": "3305",
				"pid": 33,
				"deep": 1,
				"name": "湖州",
				"pinyin": "hu zhou",
				"pinyin_prefix": "h",
				"ext_id": "330500000000",
				"ext_name": "湖州市",
				"childs": [
					{
						"id": "330502",
						"pid": 3305,
						"deep": 2,
						"name": "吴兴",
						"pinyin": "wu xing",
						"pinyin_prefix": "w",
						"ext_id": "330502000000",
						"ext_name": "吴兴区"
					},
					{
						"id": "330503",
						"pid": 3305,
						"deep": 2,
						"name": "南浔",
						"pinyin": "nan xun",
						"pinyin_prefix": "n",
						"ext_id": "330503000000",
						"ext_name": "南浔区"
					},
					{
						"id": "330521",
						"pid": 3305,
						"deep": 2,
						"name": "德清",
						"pinyin": "de qing",
						"pinyin_prefix": "d",
						"ext_id": "330521000000",
						"ext_name": "德清县"
					},
					{
						"id": "330522",
						"pid": 3305,
						"deep": 2,
						"name": "长兴",
						"pinyin": "chang xing",
						"pinyin_prefix": "c",
						"ext_id": "330522000000",
						"ext_name": "长兴县"
					},
					{
						"id": "330523",
						"pid": 3305,
						"deep": 2,
						"name": "安吉",
						"pinyin": "an ji",
						"pinyin_prefix": "a",
						"ext_id": "330523000000",
						"ext_name": "安吉县"
					}
				]
			},
			{
				"id": "3306",
				"pid": 33,
				"deep": 1,
				"name": "绍兴",
				"pinyin": "shao xing",
				"pinyin_prefix": "s",
				"ext_id": "330600000000",
				"ext_name": "绍兴市",
				"childs": [
					{
						"id": "330602",
						"pid": 3306,
						"deep": 2,
						"name": "越城",
						"pinyin": "yue cheng",
						"pinyin_prefix": "y",
						"ext_id": "330602000000",
						"ext_name": "越城区"
					},
					{
						"id": "330603",
						"pid": 3306,
						"deep": 2,
						"name": "柯桥",
						"pinyin": "ke qiao",
						"pinyin_prefix": "k",
						"ext_id": "330603000000",
						"ext_name": "柯桥区"
					},
					{
						"id": "330604",
						"pid": 3306,
						"deep": 2,
						"name": "上虞",
						"pinyin": "shang yu",
						"pinyin_prefix": "s",
						"ext_id": "330604000000",
						"ext_name": "上虞区"
					},
					{
						"id": "330624",
						"pid": 3306,
						"deep": 2,
						"name": "新昌",
						"pinyin": "xin chang",
						"pinyin_prefix": "x",
						"ext_id": "330624000000",
						"ext_name": "新昌县"
					},
					{
						"id": "330681",
						"pid": 3306,
						"deep": 2,
						"name": "诸暨",
						"pinyin": "zhu ji",
						"pinyin_prefix": "z",
						"ext_id": "330681000000",
						"ext_name": "诸暨市"
					},
					{
						"id": "330683",
						"pid": 3306,
						"deep": 2,
						"name": "嵊州",
						"pinyin": "sheng zhou",
						"pinyin_prefix": "s",
						"ext_id": "330683000000",
						"ext_name": "嵊州市"
					}
				]
			},
			{
				"id": "3307",
				"pid": 33,
				"deep": 1,
				"name": "金华",
				"pinyin": "jin hua",
				"pinyin_prefix": "j",
				"ext_id": "330700000000",
				"ext_name": "金华市",
				"childs": [
					{
						"id": "330702",
						"pid": 3307,
						"deep": 2,
						"name": "婺城",
						"pinyin": "wu cheng",
						"pinyin_prefix": "w",
						"ext_id": "330702000000",
						"ext_name": "婺城区"
					},
					{
						"id": "330703",
						"pid": 3307,
						"deep": 2,
						"name": "金东",
						"pinyin": "jin dong",
						"pinyin_prefix": "j",
						"ext_id": "330703000000",
						"ext_name": "金东区"
					},
					{
						"id": "330723",
						"pid": 3307,
						"deep": 2,
						"name": "武义",
						"pinyin": "wu yi",
						"pinyin_prefix": "w",
						"ext_id": "330723000000",
						"ext_name": "武义县"
					},
					{
						"id": "330726",
						"pid": 3307,
						"deep": 2,
						"name": "浦江",
						"pinyin": "pu jiang",
						"pinyin_prefix": "p",
						"ext_id": "330726000000",
						"ext_name": "浦江县"
					},
					{
						"id": "330727",
						"pid": 3307,
						"deep": 2,
						"name": "磐安",
						"pinyin": "pan an",
						"pinyin_prefix": "p",
						"ext_id": "330727000000",
						"ext_name": "磐安县"
					},
					{
						"id": "330781",
						"pid": 3307,
						"deep": 2,
						"name": "兰溪",
						"pinyin": "lan xi",
						"pinyin_prefix": "l",
						"ext_id": "330781000000",
						"ext_name": "兰溪市"
					},
					{
						"id": "330782",
						"pid": 3307,
						"deep": 2,
						"name": "义乌",
						"pinyin": "yi wu",
						"pinyin_prefix": "y",
						"ext_id": "330782000000",
						"ext_name": "义乌市"
					},
					{
						"id": "330783",
						"pid": 3307,
						"deep": 2,
						"name": "东阳",
						"pinyin": "dong yang",
						"pinyin_prefix": "d",
						"ext_id": "330783000000",
						"ext_name": "东阳市"
					},
					{
						"id": "330784",
						"pid": 3307,
						"deep": 2,
						"name": "永康",
						"pinyin": "yong kang",
						"pinyin_prefix": "y",
						"ext_id": "330784000000",
						"ext_name": "永康市"
					}
				]
			},
			{
				"id": "3308",
				"pid": 33,
				"deep": 1,
				"name": "衢州",
				"pinyin": "qu zhou",
				"pinyin_prefix": "q",
				"ext_id": "330800000000",
				"ext_name": "衢州市",
				"childs": [
					{
						"id": "330802",
						"pid": 3308,
						"deep": 2,
						"name": "柯城",
						"pinyin": "ke cheng",
						"pinyin_prefix": "k",
						"ext_id": "330802000000",
						"ext_name": "柯城区"
					},
					{
						"id": "330803",
						"pid": 3308,
						"deep": 2,
						"name": "衢江",
						"pinyin": "qu jiang",
						"pinyin_prefix": "q",
						"ext_id": "330803000000",
						"ext_name": "衢江区"
					},
					{
						"id": "330822",
						"pid": 3308,
						"deep": 2,
						"name": "常山",
						"pinyin": "chang shan",
						"pinyin_prefix": "c",
						"ext_id": "330822000000",
						"ext_name": "常山县"
					},
					{
						"id": "330824",
						"pid": 3308,
						"deep": 2,
						"name": "开化",
						"pinyin": "kai hua",
						"pinyin_prefix": "k",
						"ext_id": "330824000000",
						"ext_name": "开化县"
					},
					{
						"id": "330825",
						"pid": 3308,
						"deep": 2,
						"name": "龙游",
						"pinyin": "long you",
						"pinyin_prefix": "l",
						"ext_id": "330825000000",
						"ext_name": "龙游县"
					},
					{
						"id": "330881",
						"pid": 3308,
						"deep": 2,
						"name": "江山",
						"pinyin": "jiang shan",
						"pinyin_prefix": "j",
						"ext_id": "330881000000",
						"ext_name": "江山市"
					}
				]
			},
			{
				"id": "3309",
				"pid": 33,
				"deep": 1,
				"name": "舟山",
				"pinyin": "zhou shan",
				"pinyin_prefix": "z",
				"ext_id": "330900000000",
				"ext_name": "舟山市",
				"childs": [
					{
						"id": "330902",
						"pid": 3309,
						"deep": 2,
						"name": "定海",
						"pinyin": "ding hai",
						"pinyin_prefix": "d",
						"ext_id": "330902000000",
						"ext_name": "定海区"
					},
					{
						"id": "330903",
						"pid": 3309,
						"deep": 2,
						"name": "普陀",
						"pinyin": "pu tuo",
						"pinyin_prefix": "p",
						"ext_id": "330903000000",
						"ext_name": "普陀区"
					},
					{
						"id": "330921",
						"pid": 3309,
						"deep": 2,
						"name": "岱山",
						"pinyin": "dai shan",
						"pinyin_prefix": "d",
						"ext_id": "330921000000",
						"ext_name": "岱山县"
					},
					{
						"id": "330922",
						"pid": 3309,
						"deep": 2,
						"name": "嵊泗",
						"pinyin": "sheng si",
						"pinyin_prefix": "s",
						"ext_id": "330922000000",
						"ext_name": "嵊泗县"
					}
				]
			},
			{
				"id": "3310",
				"pid": 33,
				"deep": 1,
				"name": "台州",
				"pinyin": "tai zhou",
				"pinyin_prefix": "t",
				"ext_id": "331000000000",
				"ext_name": "台州市",
				"childs": [
					{
						"id": "331002",
						"pid": 3310,
						"deep": 2,
						"name": "椒江",
						"pinyin": "jiao jiang",
						"pinyin_prefix": "j",
						"ext_id": "331002000000",
						"ext_name": "椒江区"
					},
					{
						"id": "331003",
						"pid": 3310,
						"deep": 2,
						"name": "黄岩",
						"pinyin": "huang yan",
						"pinyin_prefix": "h",
						"ext_id": "331003000000",
						"ext_name": "黄岩区"
					},
					{
						"id": "331004",
						"pid": 3310,
						"deep": 2,
						"name": "路桥",
						"pinyin": "lu qiao",
						"pinyin_prefix": "l",
						"ext_id": "331004000000",
						"ext_name": "路桥区"
					},
					{
						"id": "331022",
						"pid": 3310,
						"deep": 2,
						"name": "三门",
						"pinyin": "san men",
						"pinyin_prefix": "s",
						"ext_id": "331022000000",
						"ext_name": "三门县"
					},
					{
						"id": "331023",
						"pid": 3310,
						"deep": 2,
						"name": "天台",
						"pinyin": "tian tai",
						"pinyin_prefix": "t",
						"ext_id": "331023000000",
						"ext_name": "天台县"
					},
					{
						"id": "331024",
						"pid": 3310,
						"deep": 2,
						"name": "仙居",
						"pinyin": "xian ju",
						"pinyin_prefix": "x",
						"ext_id": "331024000000",
						"ext_name": "仙居县"
					},
					{
						"id": "331081",
						"pid": 3310,
						"deep": 2,
						"name": "温岭",
						"pinyin": "wen ling",
						"pinyin_prefix": "w",
						"ext_id": "331081000000",
						"ext_name": "温岭市"
					},
					{
						"id": "331082",
						"pid": 3310,
						"deep": 2,
						"name": "临海",
						"pinyin": "lin hai",
						"pinyin_prefix": "l",
						"ext_id": "331082000000",
						"ext_name": "临海市"
					},
					{
						"id": "331083",
						"pid": 3310,
						"deep": 2,
						"name": "玉环",
						"pinyin": "yu huan",
						"pinyin_prefix": "y",
						"ext_id": "331083000000",
						"ext_name": "玉环市"
					}
				]
			},
			{
				"id": "3311",
				"pid": 33,
				"deep": 1,
				"name": "丽水",
				"pinyin": "li shui",
				"pinyin_prefix": "l",
				"ext_id": "331100000000",
				"ext_name": "丽水市",
				"childs": [
					{
						"id": "331102",
						"pid": 3311,
						"deep": 2,
						"name": "莲都",
						"pinyin": "lian du",
						"pinyin_prefix": "l",
						"ext_id": "331102000000",
						"ext_name": "莲都区"
					},
					{
						"id": "331121",
						"pid": 3311,
						"deep": 2,
						"name": "青田",
						"pinyin": "qing tian",
						"pinyin_prefix": "q",
						"ext_id": "331121000000",
						"ext_name": "青田县"
					},
					{
						"id": "331122",
						"pid": 3311,
						"deep": 2,
						"name": "缙云",
						"pinyin": "jin yun",
						"pinyin_prefix": "j",
						"ext_id": "331122000000",
						"ext_name": "缙云县"
					},
					{
						"id": "331123",
						"pid": 3311,
						"deep": 2,
						"name": "遂昌",
						"pinyin": "sui chang",
						"pinyin_prefix": "s",
						"ext_id": "331123000000",
						"ext_name": "遂昌县"
					},
					{
						"id": "331124",
						"pid": 3311,
						"deep": 2,
						"name": "松阳",
						"pinyin": "song yang",
						"pinyin_prefix": "s",
						"ext_id": "331124000000",
						"ext_name": "松阳县"
					},
					{
						"id": "331125",
						"pid": 3311,
						"deep": 2,
						"name": "云和",
						"pinyin": "yun he",
						"pinyin_prefix": "y",
						"ext_id": "331125000000",
						"ext_name": "云和县"
					},
					{
						"id": "331126",
						"pid": 3311,
						"deep": 2,
						"name": "庆元",
						"pinyin": "qing yuan",
						"pinyin_prefix": "q",
						"ext_id": "331126000000",
						"ext_name": "庆元县"
					},
					{
						"id": "331127",
						"pid": 3311,
						"deep": 2,
						"name": "景宁",
						"pinyin": "jing ning",
						"pinyin_prefix": "j",
						"ext_id": "331127000000",
						"ext_name": "景宁畲族自治县"
					},
					{
						"id": "331181",
						"pid": 3311,
						"deep": 2,
						"name": "龙泉",
						"pinyin": "long quan",
						"pinyin_prefix": "l",
						"ext_id": "331181000000",
						"ext_name": "龙泉市"
					}
				]
			}
		]
	},
	{
		"id": "34",
		"pid": 0,
		"deep": 0,
		"name": "安徽",
		"pinyin": "an hui",
		"pinyin_prefix": "a",
		"ext_id": "340000000000",
		"ext_name": "安徽省",
		"childs": [
			{
				"id": "3401",
				"pid": 34,
				"deep": 1,
				"name": "合肥",
				"pinyin": "he fei",
				"pinyin_prefix": "h",
				"ext_id": "340100000000",
				"ext_name": "合肥市",
				"childs": [
					{
						"id": "340102",
						"pid": 3401,
						"deep": 2,
						"name": "瑶海",
						"pinyin": "yao hai",
						"pinyin_prefix": "y",
						"ext_id": "340102000000",
						"ext_name": "瑶海区"
					},
					{
						"id": "340103",
						"pid": 3401,
						"deep": 2,
						"name": "庐阳",
						"pinyin": "lu yang",
						"pinyin_prefix": "l",
						"ext_id": "340103000000",
						"ext_name": "庐阳区"
					},
					{
						"id": "340104",
						"pid": 3401,
						"deep": 2,
						"name": "蜀山",
						"pinyin": "shu shan",
						"pinyin_prefix": "s",
						"ext_id": "340104000000",
						"ext_name": "蜀山区"
					},
					{
						"id": "340111",
						"pid": 3401,
						"deep": 2,
						"name": "包河",
						"pinyin": "bao he",
						"pinyin_prefix": "b",
						"ext_id": "340111000000",
						"ext_name": "包河区"
					},
					{
						"id": "340121",
						"pid": 3401,
						"deep": 2,
						"name": "长丰",
						"pinyin": "chang feng",
						"pinyin_prefix": "c",
						"ext_id": "340121000000",
						"ext_name": "长丰县"
					},
					{
						"id": "340122",
						"pid": 3401,
						"deep": 2,
						"name": "肥东",
						"pinyin": "fei dong",
						"pinyin_prefix": "f",
						"ext_id": "340122000000",
						"ext_name": "肥东县"
					},
					{
						"id": "340123",
						"pid": 3401,
						"deep": 2,
						"name": "肥西",
						"pinyin": "fei xi",
						"pinyin_prefix": "f",
						"ext_id": "340123000000",
						"ext_name": "肥西县"
					},
					{
						"id": "340124",
						"pid": 3401,
						"deep": 2,
						"name": "庐江",
						"pinyin": "lu jiang",
						"pinyin_prefix": "l",
						"ext_id": "340124000000",
						"ext_name": "庐江县"
					},
					{
						"id": "340181",
						"pid": 3401,
						"deep": 2,
						"name": "巢湖",
						"pinyin": "chao hu",
						"pinyin_prefix": "c",
						"ext_id": "340181000000",
						"ext_name": "巢湖市"
					}
				]
			},
			{
				"id": "3402",
				"pid": 34,
				"deep": 1,
				"name": "芜湖",
				"pinyin": "wu hu",
				"pinyin_prefix": "w",
				"ext_id": "340200000000",
				"ext_name": "芜湖市",
				"childs": [
					{
						"id": "340202",
						"pid": 3402,
						"deep": 2,
						"name": "镜湖",
						"pinyin": "jing hu",
						"pinyin_prefix": "j",
						"ext_id": "340202000000",
						"ext_name": "镜湖区"
					},
					{
						"id": "340207",
						"pid": 3402,
						"deep": 2,
						"name": "鸠江",
						"pinyin": "jiu jiang",
						"pinyin_prefix": "j",
						"ext_id": "340207000000",
						"ext_name": "鸠江区"
					},
					{
						"id": "340209",
						"pid": 3402,
						"deep": 2,
						"name": "弋江",
						"pinyin": "yi jiang",
						"pinyin_prefix": "y",
						"ext_id": "340209000000",
						"ext_name": "弋江区"
					},
					{
						"id": "340210",
						"pid": 3402,
						"deep": 2,
						"name": "湾沚",
						"pinyin": "wan zhi",
						"pinyin_prefix": "w",
						"ext_id": "340210000000",
						"ext_name": "湾沚区"
					},
					{
						"id": "340212",
						"pid": 3402,
						"deep": 2,
						"name": "繁昌",
						"pinyin": "fan chang",
						"pinyin_prefix": "f",
						"ext_id": "340212000000",
						"ext_name": "繁昌区"
					},
					{
						"id": "340223",
						"pid": 3402,
						"deep": 2,
						"name": "南陵",
						"pinyin": "nan ling",
						"pinyin_prefix": "n",
						"ext_id": "340223000000",
						"ext_name": "南陵县"
					},
					{
						"id": "340281",
						"pid": 3402,
						"deep": 2,
						"name": "无为",
						"pinyin": "wu wei",
						"pinyin_prefix": "w",
						"ext_id": "340281000000",
						"ext_name": "无为市"
					}
				]
			},
			{
				"id": "3403",
				"pid": 34,
				"deep": 1,
				"name": "蚌埠",
				"pinyin": "beng bu",
				"pinyin_prefix": "b",
				"ext_id": "340300000000",
				"ext_name": "蚌埠市",
				"childs": [
					{
						"id": "340302",
						"pid": 3403,
						"deep": 2,
						"name": "龙子湖",
						"pinyin": "long zi hu",
						"pinyin_prefix": "l",
						"ext_id": "340302000000",
						"ext_name": "龙子湖区"
					},
					{
						"id": "340303",
						"pid": 3403,
						"deep": 2,
						"name": "蚌山",
						"pinyin": "beng shan",
						"pinyin_prefix": "b",
						"ext_id": "340303000000",
						"ext_name": "蚌山区"
					},
					{
						"id": "340304",
						"pid": 3403,
						"deep": 2,
						"name": "禹会",
						"pinyin": "yu hui",
						"pinyin_prefix": "y",
						"ext_id": "340304000000",
						"ext_name": "禹会区"
					},
					{
						"id": "340311",
						"pid": 3403,
						"deep": 2,
						"name": "淮上",
						"pinyin": "huai shang",
						"pinyin_prefix": "h",
						"ext_id": "340311000000",
						"ext_name": "淮上区"
					},
					{
						"id": "340321",
						"pid": 3403,
						"deep": 2,
						"name": "怀远",
						"pinyin": "huai yuan",
						"pinyin_prefix": "h",
						"ext_id": "340321000000",
						"ext_name": "怀远县"
					},
					{
						"id": "340322",
						"pid": 3403,
						"deep": 2,
						"name": "五河",
						"pinyin": "wu he",
						"pinyin_prefix": "w",
						"ext_id": "340322000000",
						"ext_name": "五河县"
					},
					{
						"id": "340323",
						"pid": 3403,
						"deep": 2,
						"name": "固镇",
						"pinyin": "gu zhen",
						"pinyin_prefix": "g",
						"ext_id": "340323000000",
						"ext_name": "固镇县"
					}
				]
			},
			{
				"id": "3404",
				"pid": 34,
				"deep": 1,
				"name": "淮南",
				"pinyin": "huai nan",
				"pinyin_prefix": "h",
				"ext_id": "340400000000",
				"ext_name": "淮南市",
				"childs": [
					{
						"id": "340402",
						"pid": 3404,
						"deep": 2,
						"name": "大通",
						"pinyin": "da tong",
						"pinyin_prefix": "d",
						"ext_id": "340402000000",
						"ext_name": "大通区"
					},
					{
						"id": "340403",
						"pid": 3404,
						"deep": 2,
						"name": "田家庵",
						"pinyin": "tian jia an",
						"pinyin_prefix": "t",
						"ext_id": "340403000000",
						"ext_name": "田家庵区"
					},
					{
						"id": "340404",
						"pid": 3404,
						"deep": 2,
						"name": "谢家集",
						"pinyin": "xie jia ji",
						"pinyin_prefix": "x",
						"ext_id": "340404000000",
						"ext_name": "谢家集区"
					},
					{
						"id": "340405",
						"pid": 3404,
						"deep": 2,
						"name": "八公山",
						"pinyin": "ba gong shan",
						"pinyin_prefix": "b",
						"ext_id": "340405000000",
						"ext_name": "八公山区"
					},
					{
						"id": "340406",
						"pid": 3404,
						"deep": 2,
						"name": "潘集",
						"pinyin": "pan ji",
						"pinyin_prefix": "p",
						"ext_id": "340406000000",
						"ext_name": "潘集区"
					},
					{
						"id": "340421",
						"pid": 3404,
						"deep": 2,
						"name": "凤台",
						"pinyin": "feng tai",
						"pinyin_prefix": "f",
						"ext_id": "340421000000",
						"ext_name": "凤台县"
					},
					{
						"id": "340422",
						"pid": 3404,
						"deep": 2,
						"name": "寿县",
						"pinyin": "shou xian",
						"pinyin_prefix": "s",
						"ext_id": "340422000000",
						"ext_name": "寿县"
					}
				]
			},
			{
				"id": "3405",
				"pid": 34,
				"deep": 1,
				"name": "马鞍山",
				"pinyin": "ma an shan",
				"pinyin_prefix": "m",
				"ext_id": "340500000000",
				"ext_name": "马鞍山市",
				"childs": [
					{
						"id": "340503",
						"pid": 3405,
						"deep": 2,
						"name": "花山",
						"pinyin": "hua shan",
						"pinyin_prefix": "h",
						"ext_id": "340503000000",
						"ext_name": "花山区"
					},
					{
						"id": "340504",
						"pid": 3405,
						"deep": 2,
						"name": "雨山",
						"pinyin": "yu shan",
						"pinyin_prefix": "y",
						"ext_id": "340504000000",
						"ext_name": "雨山区"
					},
					{
						"id": "340506",
						"pid": 3405,
						"deep": 2,
						"name": "博望",
						"pinyin": "bo wang",
						"pinyin_prefix": "b",
						"ext_id": "340506000000",
						"ext_name": "博望区"
					},
					{
						"id": "340521",
						"pid": 3405,
						"deep": 2,
						"name": "当涂",
						"pinyin": "dang tu",
						"pinyin_prefix": "d",
						"ext_id": "340521000000",
						"ext_name": "当涂县"
					},
					{
						"id": "340522",
						"pid": 3405,
						"deep": 2,
						"name": "含山",
						"pinyin": "han shan",
						"pinyin_prefix": "h",
						"ext_id": "340522000000",
						"ext_name": "含山县"
					},
					{
						"id": "340523",
						"pid": 3405,
						"deep": 2,
						"name": "和县",
						"pinyin": "he xian",
						"pinyin_prefix": "h",
						"ext_id": "340523000000",
						"ext_name": "和县"
					}
				]
			},
			{
				"id": "3406",
				"pid": 34,
				"deep": 1,
				"name": "淮北",
				"pinyin": "huai bei",
				"pinyin_prefix": "h",
				"ext_id": "340600000000",
				"ext_name": "淮北市",
				"childs": [
					{
						"id": "340602",
						"pid": 3406,
						"deep": 2,
						"name": "杜集",
						"pinyin": "du ji",
						"pinyin_prefix": "d",
						"ext_id": "340602000000",
						"ext_name": "杜集区"
					},
					{
						"id": "340603",
						"pid": 3406,
						"deep": 2,
						"name": "相山",
						"pinyin": "xiang shan",
						"pinyin_prefix": "x",
						"ext_id": "340603000000",
						"ext_name": "相山区"
					},
					{
						"id": "340604",
						"pid": 3406,
						"deep": 2,
						"name": "烈山",
						"pinyin": "lie shan",
						"pinyin_prefix": "l",
						"ext_id": "340604000000",
						"ext_name": "烈山区"
					},
					{
						"id": "340621",
						"pid": 3406,
						"deep": 2,
						"name": "濉溪",
						"pinyin": "sui xi",
						"pinyin_prefix": "s",
						"ext_id": "340621000000",
						"ext_name": "濉溪县"
					}
				]
			},
			{
				"id": "3407",
				"pid": 34,
				"deep": 1,
				"name": "铜陵",
				"pinyin": "tong ling",
				"pinyin_prefix": "t",
				"ext_id": "340700000000",
				"ext_name": "铜陵市",
				"childs": [
					{
						"id": "340705",
						"pid": 3407,
						"deep": 2,
						"name": "铜官",
						"pinyin": "tong guan",
						"pinyin_prefix": "t",
						"ext_id": "340705000000",
						"ext_name": "铜官区"
					},
					{
						"id": "340706",
						"pid": 3407,
						"deep": 2,
						"name": "义安",
						"pinyin": "yi an",
						"pinyin_prefix": "y",
						"ext_id": "340706000000",
						"ext_name": "义安区"
					},
					{
						"id": "340711",
						"pid": 3407,
						"deep": 2,
						"name": "郊区",
						"pinyin": "jiao qu",
						"pinyin_prefix": "j",
						"ext_id": "340711000000",
						"ext_name": "郊区"
					},
					{
						"id": "340722",
						"pid": 3407,
						"deep": 2,
						"name": "枞阳",
						"pinyin": "zong yang",
						"pinyin_prefix": "z",
						"ext_id": "340722000000",
						"ext_name": "枞阳县"
					}
				]
			},
			{
				"id": "3408",
				"pid": 34,
				"deep": 1,
				"name": "安庆",
				"pinyin": "an qing",
				"pinyin_prefix": "a",
				"ext_id": "340800000000",
				"ext_name": "安庆市",
				"childs": [
					{
						"id": "340802",
						"pid": 3408,
						"deep": 2,
						"name": "迎江",
						"pinyin": "ying jiang",
						"pinyin_prefix": "y",
						"ext_id": "340802000000",
						"ext_name": "迎江区"
					},
					{
						"id": "340803",
						"pid": 3408,
						"deep": 2,
						"name": "大观",
						"pinyin": "da guan",
						"pinyin_prefix": "d",
						"ext_id": "340803000000",
						"ext_name": "大观区"
					},
					{
						"id": "340811",
						"pid": 3408,
						"deep": 2,
						"name": "宜秀",
						"pinyin": "yi xiu",
						"pinyin_prefix": "y",
						"ext_id": "340811000000",
						"ext_name": "宜秀区"
					},
					{
						"id": "340822",
						"pid": 3408,
						"deep": 2,
						"name": "怀宁",
						"pinyin": "huai ning",
						"pinyin_prefix": "h",
						"ext_id": "340822000000",
						"ext_name": "怀宁县"
					},
					{
						"id": "340825",
						"pid": 3408,
						"deep": 2,
						"name": "太湖",
						"pinyin": "tai hu",
						"pinyin_prefix": "t",
						"ext_id": "340825000000",
						"ext_name": "太湖县"
					},
					{
						"id": "340826",
						"pid": 3408,
						"deep": 2,
						"name": "宿松",
						"pinyin": "su song",
						"pinyin_prefix": "s",
						"ext_id": "340826000000",
						"ext_name": "宿松县"
					},
					{
						"id": "340827",
						"pid": 3408,
						"deep": 2,
						"name": "望江",
						"pinyin": "wang jiang",
						"pinyin_prefix": "w",
						"ext_id": "340827000000",
						"ext_name": "望江县"
					},
					{
						"id": "340828",
						"pid": 3408,
						"deep": 2,
						"name": "岳西",
						"pinyin": "yue xi",
						"pinyin_prefix": "y",
						"ext_id": "340828000000",
						"ext_name": "岳西县"
					},
					{
						"id": "340881",
						"pid": 3408,
						"deep": 2,
						"name": "桐城",
						"pinyin": "tong cheng",
						"pinyin_prefix": "t",
						"ext_id": "340881000000",
						"ext_name": "桐城市"
					},
					{
						"id": "340882",
						"pid": 3408,
						"deep": 2,
						"name": "潜山",
						"pinyin": "qian shan",
						"pinyin_prefix": "q",
						"ext_id": "340882000000",
						"ext_name": "潜山市"
					}
				]
			},
			{
				"id": "3410",
				"pid": 34,
				"deep": 1,
				"name": "黄山",
				"pinyin": "huang shan",
				"pinyin_prefix": "h",
				"ext_id": "341000000000",
				"ext_name": "黄山市",
				"childs": [
					{
						"id": "341002",
						"pid": 3410,
						"deep": 2,
						"name": "屯溪",
						"pinyin": "tun xi",
						"pinyin_prefix": "t",
						"ext_id": "341002000000",
						"ext_name": "屯溪区"
					},
					{
						"id": "341003",
						"pid": 3410,
						"deep": 2,
						"name": "黄山区",
						"pinyin": "huang shan qu",
						"pinyin_prefix": "h",
						"ext_id": "341003000000",
						"ext_name": "黄山区"
					},
					{
						"id": "341004",
						"pid": 3410,
						"deep": 2,
						"name": "徽州",
						"pinyin": "hui zhou",
						"pinyin_prefix": "h",
						"ext_id": "341004000000",
						"ext_name": "徽州区"
					},
					{
						"id": "341021",
						"pid": 3410,
						"deep": 2,
						"name": "歙县",
						"pinyin": "she xian",
						"pinyin_prefix": "s",
						"ext_id": "341021000000",
						"ext_name": "歙县"
					},
					{
						"id": "341022",
						"pid": 3410,
						"deep": 2,
						"name": "休宁",
						"pinyin": "xiu ning",
						"pinyin_prefix": "x",
						"ext_id": "341022000000",
						"ext_name": "休宁县"
					},
					{
						"id": "341023",
						"pid": 3410,
						"deep": 2,
						"name": "黟县",
						"pinyin": "yi xian",
						"pinyin_prefix": "y",
						"ext_id": "341023000000",
						"ext_name": "黟县"
					},
					{
						"id": "341024",
						"pid": 3410,
						"deep": 2,
						"name": "祁门",
						"pinyin": "qi men",
						"pinyin_prefix": "q",
						"ext_id": "341024000000",
						"ext_name": "祁门县"
					}
				]
			},
			{
				"id": "3411",
				"pid": 34,
				"deep": 1,
				"name": "滁州",
				"pinyin": "chu zhou",
				"pinyin_prefix": "c",
				"ext_id": "341100000000",
				"ext_name": "滁州市",
				"childs": [
					{
						"id": "341102",
						"pid": 3411,
						"deep": 2,
						"name": "琅琊",
						"pinyin": "lang ya",
						"pinyin_prefix": "l",
						"ext_id": "341102000000",
						"ext_name": "琅琊区"
					},
					{
						"id": "341103",
						"pid": 3411,
						"deep": 2,
						"name": "南谯",
						"pinyin": "nan qiao",
						"pinyin_prefix": "n",
						"ext_id": "341103000000",
						"ext_name": "南谯区"
					},
					{
						"id": "341122",
						"pid": 3411,
						"deep": 2,
						"name": "来安",
						"pinyin": "lai an",
						"pinyin_prefix": "l",
						"ext_id": "341122000000",
						"ext_name": "来安县"
					},
					{
						"id": "341124",
						"pid": 3411,
						"deep": 2,
						"name": "全椒",
						"pinyin": "quan jiao",
						"pinyin_prefix": "q",
						"ext_id": "341124000000",
						"ext_name": "全椒县"
					},
					{
						"id": "341125",
						"pid": 3411,
						"deep": 2,
						"name": "定远",
						"pinyin": "ding yuan",
						"pinyin_prefix": "d",
						"ext_id": "341125000000",
						"ext_name": "定远县"
					},
					{
						"id": "341126",
						"pid": 3411,
						"deep": 2,
						"name": "凤阳",
						"pinyin": "feng yang",
						"pinyin_prefix": "f",
						"ext_id": "341126000000",
						"ext_name": "凤阳县"
					},
					{
						"id": "341181",
						"pid": 3411,
						"deep": 2,
						"name": "天长",
						"pinyin": "tian chang",
						"pinyin_prefix": "t",
						"ext_id": "341181000000",
						"ext_name": "天长市"
					},
					{
						"id": "341182",
						"pid": 3411,
						"deep": 2,
						"name": "明光",
						"pinyin": "ming guang",
						"pinyin_prefix": "m",
						"ext_id": "341182000000",
						"ext_name": "明光市"
					}
				]
			},
			{
				"id": "3412",
				"pid": 34,
				"deep": 1,
				"name": "阜阳",
				"pinyin": "fu yang",
				"pinyin_prefix": "f",
				"ext_id": "341200000000",
				"ext_name": "阜阳市",
				"childs": [
					{
						"id": "341202",
						"pid": 3412,
						"deep": 2,
						"name": "颍州",
						"pinyin": "ying zhou",
						"pinyin_prefix": "y",
						"ext_id": "341202000000",
						"ext_name": "颍州区"
					},
					{
						"id": "341203",
						"pid": 3412,
						"deep": 2,
						"name": "颍东",
						"pinyin": "ying dong",
						"pinyin_prefix": "y",
						"ext_id": "341203000000",
						"ext_name": "颍东区"
					},
					{
						"id": "341204",
						"pid": 3412,
						"deep": 2,
						"name": "颍泉",
						"pinyin": "ying quan",
						"pinyin_prefix": "y",
						"ext_id": "341204000000",
						"ext_name": "颍泉区"
					},
					{
						"id": "341221",
						"pid": 3412,
						"deep": 2,
						"name": "临泉",
						"pinyin": "lin quan",
						"pinyin_prefix": "l",
						"ext_id": "341221000000",
						"ext_name": "临泉县"
					},
					{
						"id": "341222",
						"pid": 3412,
						"deep": 2,
						"name": "太和",
						"pinyin": "tai he",
						"pinyin_prefix": "t",
						"ext_id": "341222000000",
						"ext_name": "太和县"
					},
					{
						"id": "341225",
						"pid": 3412,
						"deep": 2,
						"name": "阜南",
						"pinyin": "fu nan",
						"pinyin_prefix": "f",
						"ext_id": "341225000000",
						"ext_name": "阜南县"
					},
					{
						"id": "341226",
						"pid": 3412,
						"deep": 2,
						"name": "颍上",
						"pinyin": "ying shang",
						"pinyin_prefix": "y",
						"ext_id": "341226000000",
						"ext_name": "颍上县"
					},
					{
						"id": "341282",
						"pid": 3412,
						"deep": 2,
						"name": "界首",
						"pinyin": "jie shou",
						"pinyin_prefix": "j",
						"ext_id": "341282000000",
						"ext_name": "界首市"
					}
				]
			},
			{
				"id": "3413",
				"pid": 34,
				"deep": 1,
				"name": "宿州",
				"pinyin": "su zhou",
				"pinyin_prefix": "s",
				"ext_id": "341300000000",
				"ext_name": "宿州市",
				"childs": [
					{
						"id": "341302",
						"pid": 3413,
						"deep": 2,
						"name": "埇桥",
						"pinyin": "yong qiao",
						"pinyin_prefix": "y",
						"ext_id": "341302000000",
						"ext_name": "埇桥区"
					},
					{
						"id": "341321",
						"pid": 3413,
						"deep": 2,
						"name": "砀山",
						"pinyin": "dang shan",
						"pinyin_prefix": "d",
						"ext_id": "341321000000",
						"ext_name": "砀山县"
					},
					{
						"id": "341322",
						"pid": 3413,
						"deep": 2,
						"name": "萧县",
						"pinyin": "xiao xian",
						"pinyin_prefix": "x",
						"ext_id": "341322000000",
						"ext_name": "萧县"
					},
					{
						"id": "341323",
						"pid": 3413,
						"deep": 2,
						"name": "灵璧",
						"pinyin": "ling bi",
						"pinyin_prefix": "l",
						"ext_id": "341323000000",
						"ext_name": "灵璧县"
					},
					{
						"id": "341324",
						"pid": 3413,
						"deep": 2,
						"name": "泗县",
						"pinyin": "si xian",
						"pinyin_prefix": "s",
						"ext_id": "341324000000",
						"ext_name": "泗县"
					}
				]
			},
			{
				"id": "3415",
				"pid": 34,
				"deep": 1,
				"name": "六安",
				"pinyin": "lu an",
				"pinyin_prefix": "l",
				"ext_id": "341500000000",
				"ext_name": "六安市",
				"childs": [
					{
						"id": "341502",
						"pid": 3415,
						"deep": 2,
						"name": "金安",
						"pinyin": "jin an",
						"pinyin_prefix": "j",
						"ext_id": "341502000000",
						"ext_name": "金安区"
					},
					{
						"id": "341503",
						"pid": 3415,
						"deep": 2,
						"name": "裕安",
						"pinyin": "yu an",
						"pinyin_prefix": "y",
						"ext_id": "341503000000",
						"ext_name": "裕安区"
					},
					{
						"id": "341504",
						"pid": 3415,
						"deep": 2,
						"name": "叶集",
						"pinyin": "ye ji",
						"pinyin_prefix": "y",
						"ext_id": "341504000000",
						"ext_name": "叶集区"
					},
					{
						"id": "341522",
						"pid": 3415,
						"deep": 2,
						"name": "霍邱",
						"pinyin": "huo qiu",
						"pinyin_prefix": "h",
						"ext_id": "341522000000",
						"ext_name": "霍邱县"
					},
					{
						"id": "341523",
						"pid": 3415,
						"deep": 2,
						"name": "舒城",
						"pinyin": "shu cheng",
						"pinyin_prefix": "s",
						"ext_id": "341523000000",
						"ext_name": "舒城县"
					},
					{
						"id": "341524",
						"pid": 3415,
						"deep": 2,
						"name": "金寨",
						"pinyin": "jin zhai",
						"pinyin_prefix": "j",
						"ext_id": "341524000000",
						"ext_name": "金寨县"
					},
					{
						"id": "341525",
						"pid": 3415,
						"deep": 2,
						"name": "霍山",
						"pinyin": "huo shan",
						"pinyin_prefix": "h",
						"ext_id": "341525000000",
						"ext_name": "霍山县"
					}
				]
			},
			{
				"id": "3416",
				"pid": 34,
				"deep": 1,
				"name": "亳州",
				"pinyin": "bo zhou",
				"pinyin_prefix": "b",
				"ext_id": "341600000000",
				"ext_name": "亳州市",
				"childs": [
					{
						"id": "341602",
						"pid": 3416,
						"deep": 2,
						"name": "谯城",
						"pinyin": "qiao cheng",
						"pinyin_prefix": "q",
						"ext_id": "341602000000",
						"ext_name": "谯城区"
					},
					{
						"id": "341621",
						"pid": 3416,
						"deep": 2,
						"name": "涡阳",
						"pinyin": "guo yang",
						"pinyin_prefix": "g",
						"ext_id": "341621000000",
						"ext_name": "涡阳县"
					},
					{
						"id": "341622",
						"pid": 3416,
						"deep": 2,
						"name": "蒙城",
						"pinyin": "meng cheng",
						"pinyin_prefix": "m",
						"ext_id": "341622000000",
						"ext_name": "蒙城县"
					},
					{
						"id": "341623",
						"pid": 3416,
						"deep": 2,
						"name": "利辛",
						"pinyin": "li xin",
						"pinyin_prefix": "l",
						"ext_id": "341623000000",
						"ext_name": "利辛县"
					}
				]
			},
			{
				"id": "3417",
				"pid": 34,
				"deep": 1,
				"name": "池州",
				"pinyin": "chi zhou",
				"pinyin_prefix": "c",
				"ext_id": "341700000000",
				"ext_name": "池州市",
				"childs": [
					{
						"id": "341702",
						"pid": 3417,
						"deep": 2,
						"name": "贵池",
						"pinyin": "gui chi",
						"pinyin_prefix": "g",
						"ext_id": "341702000000",
						"ext_name": "贵池区"
					},
					{
						"id": "341721",
						"pid": 3417,
						"deep": 2,
						"name": "东至",
						"pinyin": "dong zhi",
						"pinyin_prefix": "d",
						"ext_id": "341721000000",
						"ext_name": "东至县"
					},
					{
						"id": "341722",
						"pid": 3417,
						"deep": 2,
						"name": "石台",
						"pinyin": "shi tai",
						"pinyin_prefix": "s",
						"ext_id": "341722000000",
						"ext_name": "石台县"
					},
					{
						"id": "341723",
						"pid": 3417,
						"deep": 2,
						"name": "青阳",
						"pinyin": "qing yang",
						"pinyin_prefix": "q",
						"ext_id": "341723000000",
						"ext_name": "青阳县"
					}
				]
			},
			{
				"id": "3418",
				"pid": 34,
				"deep": 1,
				"name": "宣城",
				"pinyin": "xuan cheng",
				"pinyin_prefix": "x",
				"ext_id": "341800000000",
				"ext_name": "宣城市",
				"childs": [
					{
						"id": "341802",
						"pid": 3418,
						"deep": 2,
						"name": "宣州",
						"pinyin": "xuan zhou",
						"pinyin_prefix": "x",
						"ext_id": "341802000000",
						"ext_name": "宣州区"
					},
					{
						"id": "341821",
						"pid": 3418,
						"deep": 2,
						"name": "郎溪",
						"pinyin": "lang xi",
						"pinyin_prefix": "l",
						"ext_id": "341821000000",
						"ext_name": "郎溪县"
					},
					{
						"id": "341823",
						"pid": 3418,
						"deep": 2,
						"name": "泾县",
						"pinyin": "jing xian",
						"pinyin_prefix": "j",
						"ext_id": "341823000000",
						"ext_name": "泾县"
					},
					{
						"id": "341824",
						"pid": 3418,
						"deep": 2,
						"name": "绩溪",
						"pinyin": "ji xi",
						"pinyin_prefix": "j",
						"ext_id": "341824000000",
						"ext_name": "绩溪县"
					},
					{
						"id": "341825",
						"pid": 3418,
						"deep": 2,
						"name": "旌德",
						"pinyin": "jing de",
						"pinyin_prefix": "j",
						"ext_id": "341825000000",
						"ext_name": "旌德县"
					},
					{
						"id": "341881",
						"pid": 3418,
						"deep": 2,
						"name": "宁国",
						"pinyin": "ning guo",
						"pinyin_prefix": "n",
						"ext_id": "341881000000",
						"ext_name": "宁国市"
					},
					{
						"id": "341882",
						"pid": 3418,
						"deep": 2,
						"name": "广德",
						"pinyin": "guang de",
						"pinyin_prefix": "g",
						"ext_id": "341882000000",
						"ext_name": "广德市"
					}
				]
			}
		]
	},
	{
		"id": "35",
		"pid": 0,
		"deep": 0,
		"name": "福建",
		"pinyin": "fu jian",
		"pinyin_prefix": "f",
		"ext_id": "350000000000",
		"ext_name": "福建省",
		"childs": [
			{
				"id": "3501",
				"pid": 35,
				"deep": 1,
				"name": "福州",
				"pinyin": "fu zhou",
				"pinyin_prefix": "f",
				"ext_id": "350100000000",
				"ext_name": "福州市",
				"childs": [
					{
						"id": "350102",
						"pid": 3501,
						"deep": 2,
						"name": "鼓楼",
						"pinyin": "gu lou",
						"pinyin_prefix": "g",
						"ext_id": "350102000000",
						"ext_name": "鼓楼区"
					},
					{
						"id": "350103",
						"pid": 3501,
						"deep": 2,
						"name": "台江",
						"pinyin": "tai jiang",
						"pinyin_prefix": "t",
						"ext_id": "350103000000",
						"ext_name": "台江区"
					},
					{
						"id": "350104",
						"pid": 3501,
						"deep": 2,
						"name": "仓山",
						"pinyin": "cang shan",
						"pinyin_prefix": "c",
						"ext_id": "350104000000",
						"ext_name": "仓山区"
					},
					{
						"id": "350105",
						"pid": 3501,
						"deep": 2,
						"name": "马尾",
						"pinyin": "ma wei",
						"pinyin_prefix": "m",
						"ext_id": "350105000000",
						"ext_name": "马尾区"
					},
					{
						"id": "350111",
						"pid": 3501,
						"deep": 2,
						"name": "晋安",
						"pinyin": "jin an",
						"pinyin_prefix": "j",
						"ext_id": "350111000000",
						"ext_name": "晋安区"
					},
					{
						"id": "350112",
						"pid": 3501,
						"deep": 2,
						"name": "长乐",
						"pinyin": "chang le",
						"pinyin_prefix": "c",
						"ext_id": "350112000000",
						"ext_name": "长乐区"
					},
					{
						"id": "350121",
						"pid": 3501,
						"deep": 2,
						"name": "闽侯",
						"pinyin": "min hou",
						"pinyin_prefix": "m",
						"ext_id": "350121000000",
						"ext_name": "闽侯县"
					},
					{
						"id": "350122",
						"pid": 3501,
						"deep": 2,
						"name": "连江",
						"pinyin": "lian jiang",
						"pinyin_prefix": "l",
						"ext_id": "350122000000",
						"ext_name": "连江县"
					},
					{
						"id": "350123",
						"pid": 3501,
						"deep": 2,
						"name": "罗源",
						"pinyin": "luo yuan",
						"pinyin_prefix": "l",
						"ext_id": "350123000000",
						"ext_name": "罗源县"
					},
					{
						"id": "350124",
						"pid": 3501,
						"deep": 2,
						"name": "闽清",
						"pinyin": "min qing",
						"pinyin_prefix": "m",
						"ext_id": "350124000000",
						"ext_name": "闽清县"
					},
					{
						"id": "350125",
						"pid": 3501,
						"deep": 2,
						"name": "永泰",
						"pinyin": "yong tai",
						"pinyin_prefix": "y",
						"ext_id": "350125000000",
						"ext_name": "永泰县"
					},
					{
						"id": "350128",
						"pid": 3501,
						"deep": 2,
						"name": "平潭",
						"pinyin": "ping tan",
						"pinyin_prefix": "p",
						"ext_id": "350128000000",
						"ext_name": "平潭县"
					},
					{
						"id": "350181",
						"pid": 3501,
						"deep": 2,
						"name": "福清",
						"pinyin": "fu qing",
						"pinyin_prefix": "f",
						"ext_id": "350181000000",
						"ext_name": "福清市"
					}
				]
			},
			{
				"id": "3502",
				"pid": 35,
				"deep": 1,
				"name": "厦门",
				"pinyin": "xia men",
				"pinyin_prefix": "x",
				"ext_id": "350200000000",
				"ext_name": "厦门市",
				"childs": [
					{
						"id": "350203",
						"pid": 3502,
						"deep": 2,
						"name": "思明",
						"pinyin": "si ming",
						"pinyin_prefix": "s",
						"ext_id": "350203000000",
						"ext_name": "思明区"
					},
					{
						"id": "350205",
						"pid": 3502,
						"deep": 2,
						"name": "海沧",
						"pinyin": "hai cang",
						"pinyin_prefix": "h",
						"ext_id": "350205000000",
						"ext_name": "海沧区"
					},
					{
						"id": "350206",
						"pid": 3502,
						"deep": 2,
						"name": "湖里",
						"pinyin": "hu li",
						"pinyin_prefix": "h",
						"ext_id": "350206000000",
						"ext_name": "湖里区"
					},
					{
						"id": "350211",
						"pid": 3502,
						"deep": 2,
						"name": "集美",
						"pinyin": "ji mei",
						"pinyin_prefix": "j",
						"ext_id": "350211000000",
						"ext_name": "集美区"
					},
					{
						"id": "350212",
						"pid": 3502,
						"deep": 2,
						"name": "同安",
						"pinyin": "tong an",
						"pinyin_prefix": "t",
						"ext_id": "350212000000",
						"ext_name": "同安区"
					},
					{
						"id": "350213",
						"pid": 3502,
						"deep": 2,
						"name": "翔安",
						"pinyin": "xiang an",
						"pinyin_prefix": "x",
						"ext_id": "350213000000",
						"ext_name": "翔安区"
					}
				]
			},
			{
				"id": "3503",
				"pid": 35,
				"deep": 1,
				"name": "莆田",
				"pinyin": "pu tian",
				"pinyin_prefix": "p",
				"ext_id": "350300000000",
				"ext_name": "莆田市",
				"childs": [
					{
						"id": "350302",
						"pid": 3503,
						"deep": 2,
						"name": "城厢",
						"pinyin": "cheng xiang",
						"pinyin_prefix": "c",
						"ext_id": "350302000000",
						"ext_name": "城厢区"
					},
					{
						"id": "350303",
						"pid": 3503,
						"deep": 2,
						"name": "涵江",
						"pinyin": "han jiang",
						"pinyin_prefix": "h",
						"ext_id": "350303000000",
						"ext_name": "涵江区"
					},
					{
						"id": "350304",
						"pid": 3503,
						"deep": 2,
						"name": "荔城",
						"pinyin": "li cheng",
						"pinyin_prefix": "l",
						"ext_id": "350304000000",
						"ext_name": "荔城区"
					},
					{
						"id": "350305",
						"pid": 3503,
						"deep": 2,
						"name": "秀屿",
						"pinyin": "xiu yu",
						"pinyin_prefix": "x",
						"ext_id": "350305000000",
						"ext_name": "秀屿区"
					},
					{
						"id": "350322",
						"pid": 3503,
						"deep": 2,
						"name": "仙游",
						"pinyin": "xian you",
						"pinyin_prefix": "x",
						"ext_id": "350322000000",
						"ext_name": "仙游县"
					}
				]
			},
			{
				"id": "3504",
				"pid": 35,
				"deep": 1,
				"name": "三明",
				"pinyin": "san ming",
				"pinyin_prefix": "s",
				"ext_id": "350400000000",
				"ext_name": "三明市",
				"childs": [
					{
						"id": "350404",
						"pid": 3504,
						"deep": 2,
						"name": "三元",
						"pinyin": "san yuan",
						"pinyin_prefix": "s",
						"ext_id": "350404000000",
						"ext_name": "三元区"
					},
					{
						"id": "350405",
						"pid": 3504,
						"deep": 2,
						"name": "沙县",
						"pinyin": "sha xian",
						"pinyin_prefix": "s",
						"ext_id": "350405000000",
						"ext_name": "沙县区"
					},
					{
						"id": "350421",
						"pid": 3504,
						"deep": 2,
						"name": "明溪",
						"pinyin": "ming xi",
						"pinyin_prefix": "m",
						"ext_id": "350421000000",
						"ext_name": "明溪县"
					},
					{
						"id": "350423",
						"pid": 3504,
						"deep": 2,
						"name": "清流",
						"pinyin": "qing liu",
						"pinyin_prefix": "q",
						"ext_id": "350423000000",
						"ext_name": "清流县"
					},
					{
						"id": "350424",
						"pid": 3504,
						"deep": 2,
						"name": "宁化",
						"pinyin": "ning hua",
						"pinyin_prefix": "n",
						"ext_id": "350424000000",
						"ext_name": "宁化县"
					},
					{
						"id": "350425",
						"pid": 3504,
						"deep": 2,
						"name": "大田",
						"pinyin": "da tian",
						"pinyin_prefix": "d",
						"ext_id": "350425000000",
						"ext_name": "大田县"
					},
					{
						"id": "350426",
						"pid": 3504,
						"deep": 2,
						"name": "尤溪",
						"pinyin": "you xi",
						"pinyin_prefix": "y",
						"ext_id": "350426000000",
						"ext_name": "尤溪县"
					},
					{
						"id": "350428",
						"pid": 3504,
						"deep": 2,
						"name": "将乐",
						"pinyin": "jiang le",
						"pinyin_prefix": "j",
						"ext_id": "350428000000",
						"ext_name": "将乐县"
					},
					{
						"id": "350429",
						"pid": 3504,
						"deep": 2,
						"name": "泰宁",
						"pinyin": "tai ning",
						"pinyin_prefix": "t",
						"ext_id": "350429000000",
						"ext_name": "泰宁县"
					},
					{
						"id": "350430",
						"pid": 3504,
						"deep": 2,
						"name": "建宁",
						"pinyin": "jian ning",
						"pinyin_prefix": "j",
						"ext_id": "350430000000",
						"ext_name": "建宁县"
					},
					{
						"id": "350481",
						"pid": 3504,
						"deep": 2,
						"name": "永安",
						"pinyin": "yong an",
						"pinyin_prefix": "y",
						"ext_id": "350481000000",
						"ext_name": "永安市"
					}
				]
			},
			{
				"id": "3505",
				"pid": 35,
				"deep": 1,
				"name": "泉州",
				"pinyin": "quan zhou",
				"pinyin_prefix": "q",
				"ext_id": "350500000000",
				"ext_name": "泉州市",
				"childs": [
					{
						"id": "350502",
						"pid": 3505,
						"deep": 2,
						"name": "鲤城",
						"pinyin": "li cheng",
						"pinyin_prefix": "l",
						"ext_id": "350502000000",
						"ext_name": "鲤城区"
					},
					{
						"id": "350503",
						"pid": 3505,
						"deep": 2,
						"name": "丰泽",
						"pinyin": "feng ze",
						"pinyin_prefix": "f",
						"ext_id": "350503000000",
						"ext_name": "丰泽区"
					},
					{
						"id": "350504",
						"pid": 3505,
						"deep": 2,
						"name": "洛江",
						"pinyin": "luo jiang",
						"pinyin_prefix": "l",
						"ext_id": "350504000000",
						"ext_name": "洛江区"
					},
					{
						"id": "350505",
						"pid": 3505,
						"deep": 2,
						"name": "泉港",
						"pinyin": "quan gang",
						"pinyin_prefix": "q",
						"ext_id": "350505000000",
						"ext_name": "泉港区"
					},
					{
						"id": "350521",
						"pid": 3505,
						"deep": 2,
						"name": "惠安",
						"pinyin": "hui an",
						"pinyin_prefix": "h",
						"ext_id": "350521000000",
						"ext_name": "惠安县"
					},
					{
						"id": "350524",
						"pid": 3505,
						"deep": 2,
						"name": "安溪",
						"pinyin": "an xi",
						"pinyin_prefix": "a",
						"ext_id": "350524000000",
						"ext_name": "安溪县"
					},
					{
						"id": "350525",
						"pid": 3505,
						"deep": 2,
						"name": "永春",
						"pinyin": "yong chun",
						"pinyin_prefix": "y",
						"ext_id": "350525000000",
						"ext_name": "永春县"
					},
					{
						"id": "350526",
						"pid": 3505,
						"deep": 2,
						"name": "德化",
						"pinyin": "de hua",
						"pinyin_prefix": "d",
						"ext_id": "350526000000",
						"ext_name": "德化县"
					},
					{
						"id": "350527",
						"pid": 3505,
						"deep": 2,
						"name": "金门",
						"pinyin": "jin men",
						"pinyin_prefix": "j",
						"ext_id": "350527000000",
						"ext_name": "金门县"
					},
					{
						"id": "350581",
						"pid": 3505,
						"deep": 2,
						"name": "石狮",
						"pinyin": "shi shi",
						"pinyin_prefix": "s",
						"ext_id": "350581000000",
						"ext_name": "石狮市"
					},
					{
						"id": "350582",
						"pid": 3505,
						"deep": 2,
						"name": "晋江",
						"pinyin": "jin jiang",
						"pinyin_prefix": "j",
						"ext_id": "350582000000",
						"ext_name": "晋江市"
					},
					{
						"id": "350583",
						"pid": 3505,
						"deep": 2,
						"name": "南安",
						"pinyin": "nan an",
						"pinyin_prefix": "n",
						"ext_id": "350583000000",
						"ext_name": "南安市"
					}
				]
			},
			{
				"id": "3506",
				"pid": 35,
				"deep": 1,
				"name": "漳州",
				"pinyin": "zhang zhou",
				"pinyin_prefix": "z",
				"ext_id": "350600000000",
				"ext_name": "漳州市",
				"childs": [
					{
						"id": "350602",
						"pid": 3506,
						"deep": 2,
						"name": "芗城",
						"pinyin": "xiang cheng",
						"pinyin_prefix": "x",
						"ext_id": "350602000000",
						"ext_name": "芗城区"
					},
					{
						"id": "350603",
						"pid": 3506,
						"deep": 2,
						"name": "龙文",
						"pinyin": "long wen",
						"pinyin_prefix": "l",
						"ext_id": "350603000000",
						"ext_name": "龙文区"
					},
					{
						"id": "350604",
						"pid": 3506,
						"deep": 2,
						"name": "龙海",
						"pinyin": "long hai",
						"pinyin_prefix": "l",
						"ext_id": "350604000000",
						"ext_name": "龙海区"
					},
					{
						"id": "350605",
						"pid": 3506,
						"deep": 2,
						"name": "长泰",
						"pinyin": "chang tai",
						"pinyin_prefix": "c",
						"ext_id": "350605000000",
						"ext_name": "长泰区"
					},
					{
						"id": "350622",
						"pid": 3506,
						"deep": 2,
						"name": "云霄",
						"pinyin": "yun xiao",
						"pinyin_prefix": "y",
						"ext_id": "350622000000",
						"ext_name": "云霄县"
					},
					{
						"id": "350623",
						"pid": 3506,
						"deep": 2,
						"name": "漳浦",
						"pinyin": "zhang pu",
						"pinyin_prefix": "z",
						"ext_id": "350623000000",
						"ext_name": "漳浦县"
					},
					{
						"id": "350624",
						"pid": 3506,
						"deep": 2,
						"name": "诏安",
						"pinyin": "zhao an",
						"pinyin_prefix": "z",
						"ext_id": "350624000000",
						"ext_name": "诏安县"
					},
					{
						"id": "350626",
						"pid": 3506,
						"deep": 2,
						"name": "东山",
						"pinyin": "dong shan",
						"pinyin_prefix": "d",
						"ext_id": "350626000000",
						"ext_name": "东山县"
					},
					{
						"id": "350627",
						"pid": 3506,
						"deep": 2,
						"name": "南靖",
						"pinyin": "nan jing",
						"pinyin_prefix": "n",
						"ext_id": "350627000000",
						"ext_name": "南靖县"
					},
					{
						"id": "350628",
						"pid": 3506,
						"deep": 2,
						"name": "平和",
						"pinyin": "ping he",
						"pinyin_prefix": "p",
						"ext_id": "350628000000",
						"ext_name": "平和县"
					},
					{
						"id": "350629",
						"pid": 3506,
						"deep": 2,
						"name": "华安",
						"pinyin": "hua an",
						"pinyin_prefix": "h",
						"ext_id": "350629000000",
						"ext_name": "华安县"
					}
				]
			},
			{
				"id": "3507",
				"pid": 35,
				"deep": 1,
				"name": "南平",
				"pinyin": "nan ping",
				"pinyin_prefix": "n",
				"ext_id": "350700000000",
				"ext_name": "南平市",
				"childs": [
					{
						"id": "350702",
						"pid": 3507,
						"deep": 2,
						"name": "延平",
						"pinyin": "yan ping",
						"pinyin_prefix": "y",
						"ext_id": "350702000000",
						"ext_name": "延平区"
					},
					{
						"id": "350703",
						"pid": 3507,
						"deep": 2,
						"name": "建阳",
						"pinyin": "jian yang",
						"pinyin_prefix": "j",
						"ext_id": "350703000000",
						"ext_name": "建阳区"
					},
					{
						"id": "350721",
						"pid": 3507,
						"deep": 2,
						"name": "顺昌",
						"pinyin": "shun chang",
						"pinyin_prefix": "s",
						"ext_id": "350721000000",
						"ext_name": "顺昌县"
					},
					{
						"id": "350722",
						"pid": 3507,
						"deep": 2,
						"name": "浦城",
						"pinyin": "pu cheng",
						"pinyin_prefix": "p",
						"ext_id": "350722000000",
						"ext_name": "浦城县"
					},
					{
						"id": "350723",
						"pid": 3507,
						"deep": 2,
						"name": "光泽",
						"pinyin": "guang ze",
						"pinyin_prefix": "g",
						"ext_id": "350723000000",
						"ext_name": "光泽县"
					},
					{
						"id": "350724",
						"pid": 3507,
						"deep": 2,
						"name": "松溪",
						"pinyin": "song xi",
						"pinyin_prefix": "s",
						"ext_id": "350724000000",
						"ext_name": "松溪县"
					},
					{
						"id": "350725",
						"pid": 3507,
						"deep": 2,
						"name": "政和",
						"pinyin": "zheng he",
						"pinyin_prefix": "z",
						"ext_id": "350725000000",
						"ext_name": "政和县"
					},
					{
						"id": "350781",
						"pid": 3507,
						"deep": 2,
						"name": "邵武",
						"pinyin": "shao wu",
						"pinyin_prefix": "s",
						"ext_id": "350781000000",
						"ext_name": "邵武市"
					},
					{
						"id": "350782",
						"pid": 3507,
						"deep": 2,
						"name": "武夷山",
						"pinyin": "wu yi shan",
						"pinyin_prefix": "w",
						"ext_id": "350782000000",
						"ext_name": "武夷山市"
					},
					{
						"id": "350783",
						"pid": 3507,
						"deep": 2,
						"name": "建瓯",
						"pinyin": "jian ou",
						"pinyin_prefix": "j",
						"ext_id": "350783000000",
						"ext_name": "建瓯市"
					}
				]
			},
			{
				"id": "3508",
				"pid": 35,
				"deep": 1,
				"name": "龙岩",
				"pinyin": "long yan",
				"pinyin_prefix": "l",
				"ext_id": "350800000000",
				"ext_name": "龙岩市",
				"childs": [
					{
						"id": "350802",
						"pid": 3508,
						"deep": 2,
						"name": "新罗",
						"pinyin": "xin luo",
						"pinyin_prefix": "x",
						"ext_id": "350802000000",
						"ext_name": "新罗区"
					},
					{
						"id": "350803",
						"pid": 3508,
						"deep": 2,
						"name": "永定",
						"pinyin": "yong ding",
						"pinyin_prefix": "y",
						"ext_id": "350803000000",
						"ext_name": "永定区"
					},
					{
						"id": "350821",
						"pid": 3508,
						"deep": 2,
						"name": "长汀",
						"pinyin": "chang ting",
						"pinyin_prefix": "c",
						"ext_id": "350821000000",
						"ext_name": "长汀县"
					},
					{
						"id": "350823",
						"pid": 3508,
						"deep": 2,
						"name": "上杭",
						"pinyin": "shang hang",
						"pinyin_prefix": "s",
						"ext_id": "350823000000",
						"ext_name": "上杭县"
					},
					{
						"id": "350824",
						"pid": 3508,
						"deep": 2,
						"name": "武平",
						"pinyin": "wu ping",
						"pinyin_prefix": "w",
						"ext_id": "350824000000",
						"ext_name": "武平县"
					},
					{
						"id": "350825",
						"pid": 3508,
						"deep": 2,
						"name": "连城",
						"pinyin": "lian cheng",
						"pinyin_prefix": "l",
						"ext_id": "350825000000",
						"ext_name": "连城县"
					},
					{
						"id": "350881",
						"pid": 3508,
						"deep": 2,
						"name": "漳平",
						"pinyin": "zhang ping",
						"pinyin_prefix": "z",
						"ext_id": "350881000000",
						"ext_name": "漳平市"
					}
				]
			},
			{
				"id": "3509",
				"pid": 35,
				"deep": 1,
				"name": "宁德",
				"pinyin": "ning de",
				"pinyin_prefix": "n",
				"ext_id": "350900000000",
				"ext_name": "宁德市",
				"childs": [
					{
						"id": "350902",
						"pid": 3509,
						"deep": 2,
						"name": "蕉城",
						"pinyin": "jiao cheng",
						"pinyin_prefix": "j",
						"ext_id": "350902000000",
						"ext_name": "蕉城区"
					},
					{
						"id": "350921",
						"pid": 3509,
						"deep": 2,
						"name": "霞浦",
						"pinyin": "xia pu",
						"pinyin_prefix": "x",
						"ext_id": "350921000000",
						"ext_name": "霞浦县"
					},
					{
						"id": "350922",
						"pid": 3509,
						"deep": 2,
						"name": "古田",
						"pinyin": "gu tian",
						"pinyin_prefix": "g",
						"ext_id": "350922000000",
						"ext_name": "古田县"
					},
					{
						"id": "350923",
						"pid": 3509,
						"deep": 2,
						"name": "屏南",
						"pinyin": "ping nan",
						"pinyin_prefix": "p",
						"ext_id": "350923000000",
						"ext_name": "屏南县"
					},
					{
						"id": "350924",
						"pid": 3509,
						"deep": 2,
						"name": "寿宁",
						"pinyin": "shou ning",
						"pinyin_prefix": "s",
						"ext_id": "350924000000",
						"ext_name": "寿宁县"
					},
					{
						"id": "350925",
						"pid": 3509,
						"deep": 2,
						"name": "周宁",
						"pinyin": "zhou ning",
						"pinyin_prefix": "z",
						"ext_id": "350925000000",
						"ext_name": "周宁县"
					},
					{
						"id": "350926",
						"pid": 3509,
						"deep": 2,
						"name": "柘荣",
						"pinyin": "zhe rong",
						"pinyin_prefix": "z",
						"ext_id": "350926000000",
						"ext_name": "柘荣县"
					},
					{
						"id": "350981",
						"pid": 3509,
						"deep": 2,
						"name": "福安",
						"pinyin": "fu an",
						"pinyin_prefix": "f",
						"ext_id": "350981000000",
						"ext_name": "福安市"
					},
					{
						"id": "350982",
						"pid": 3509,
						"deep": 2,
						"name": "福鼎",
						"pinyin": "fu ding",
						"pinyin_prefix": "f",
						"ext_id": "350982000000",
						"ext_name": "福鼎市"
					}
				]
			}
		]
	},
	{
		"id": "36",
		"pid": 0,
		"deep": 0,
		"name": "江西",
		"pinyin": "jiang xi",
		"pinyin_prefix": "j",
		"ext_id": "360000000000",
		"ext_name": "江西省",
		"childs": [
			{
				"id": "3601",
				"pid": 36,
				"deep": 1,
				"name": "南昌",
				"pinyin": "nan chang",
				"pinyin_prefix": "n",
				"ext_id": "360100000000",
				"ext_name": "南昌市",
				"childs": [
					{
						"id": "360102",
						"pid": 3601,
						"deep": 2,
						"name": "东湖",
						"pinyin": "dong hu",
						"pinyin_prefix": "d",
						"ext_id": "360102000000",
						"ext_name": "东湖区"
					},
					{
						"id": "360103",
						"pid": 3601,
						"deep": 2,
						"name": "西湖",
						"pinyin": "xi hu",
						"pinyin_prefix": "x",
						"ext_id": "360103000000",
						"ext_name": "西湖区"
					},
					{
						"id": "360104",
						"pid": 3601,
						"deep": 2,
						"name": "青云谱",
						"pinyin": "qing yun pu",
						"pinyin_prefix": "q",
						"ext_id": "360104000000",
						"ext_name": "青云谱区"
					},
					{
						"id": "360111",
						"pid": 3601,
						"deep": 2,
						"name": "青山湖",
						"pinyin": "qing shan hu",
						"pinyin_prefix": "q",
						"ext_id": "360111000000",
						"ext_name": "青山湖区"
					},
					{
						"id": "360112",
						"pid": 3601,
						"deep": 2,
						"name": "新建",
						"pinyin": "xin jian",
						"pinyin_prefix": "x",
						"ext_id": "360112000000",
						"ext_name": "新建区"
					},
					{
						"id": "360113",
						"pid": 3601,
						"deep": 2,
						"name": "红谷滩",
						"pinyin": "hong gu tan",
						"pinyin_prefix": "h",
						"ext_id": "360113000000",
						"ext_name": "红谷滩区"
					},
					{
						"id": "360121",
						"pid": 3601,
						"deep": 2,
						"name": "南昌县",
						"pinyin": "nan chang xian",
						"pinyin_prefix": "n",
						"ext_id": "360121000000",
						"ext_name": "南昌县"
					},
					{
						"id": "360123",
						"pid": 3601,
						"deep": 2,
						"name": "安义",
						"pinyin": "an yi",
						"pinyin_prefix": "a",
						"ext_id": "360123000000",
						"ext_name": "安义县"
					},
					{
						"id": "360124",
						"pid": 3601,
						"deep": 2,
						"name": "进贤",
						"pinyin": "jin xian",
						"pinyin_prefix": "j",
						"ext_id": "360124000000",
						"ext_name": "进贤县"
					}
				]
			},
			{
				"id": "3602",
				"pid": 36,
				"deep": 1,
				"name": "景德镇",
				"pinyin": "jing de zhen",
				"pinyin_prefix": "j",
				"ext_id": "360200000000",
				"ext_name": "景德镇市",
				"childs": [
					{
						"id": "360202",
						"pid": 3602,
						"deep": 2,
						"name": "昌江",
						"pinyin": "chang jiang",
						"pinyin_prefix": "c",
						"ext_id": "360202000000",
						"ext_name": "昌江区"
					},
					{
						"id": "360203",
						"pid": 3602,
						"deep": 2,
						"name": "珠山",
						"pinyin": "zhu shan",
						"pinyin_prefix": "z",
						"ext_id": "360203000000",
						"ext_name": "珠山区"
					},
					{
						"id": "360222",
						"pid": 3602,
						"deep": 2,
						"name": "浮梁",
						"pinyin": "fu liang",
						"pinyin_prefix": "f",
						"ext_id": "360222000000",
						"ext_name": "浮梁县"
					},
					{
						"id": "360281",
						"pid": 3602,
						"deep": 2,
						"name": "乐平",
						"pinyin": "le ping",
						"pinyin_prefix": "l",
						"ext_id": "360281000000",
						"ext_name": "乐平市"
					}
				]
			},
			{
				"id": "3603",
				"pid": 36,
				"deep": 1,
				"name": "萍乡",
				"pinyin": "ping xiang",
				"pinyin_prefix": "p",
				"ext_id": "360300000000",
				"ext_name": "萍乡市",
				"childs": [
					{
						"id": "360302",
						"pid": 3603,
						"deep": 2,
						"name": "安源",
						"pinyin": "an yuan",
						"pinyin_prefix": "a",
						"ext_id": "360302000000",
						"ext_name": "安源区"
					},
					{
						"id": "360313",
						"pid": 3603,
						"deep": 2,
						"name": "湘东",
						"pinyin": "xiang dong",
						"pinyin_prefix": "x",
						"ext_id": "360313000000",
						"ext_name": "湘东区"
					},
					{
						"id": "360321",
						"pid": 3603,
						"deep": 2,
						"name": "莲花",
						"pinyin": "lian hua",
						"pinyin_prefix": "l",
						"ext_id": "360321000000",
						"ext_name": "莲花县"
					},
					{
						"id": "360322",
						"pid": 3603,
						"deep": 2,
						"name": "上栗",
						"pinyin": "shang li",
						"pinyin_prefix": "s",
						"ext_id": "360322000000",
						"ext_name": "上栗县"
					},
					{
						"id": "360323",
						"pid": 3603,
						"deep": 2,
						"name": "芦溪",
						"pinyin": "lu xi",
						"pinyin_prefix": "l",
						"ext_id": "360323000000",
						"ext_name": "芦溪县"
					}
				]
			},
			{
				"id": "3604",
				"pid": 36,
				"deep": 1,
				"name": "九江",
				"pinyin": "jiu jiang",
				"pinyin_prefix": "j",
				"ext_id": "360400000000",
				"ext_name": "九江市",
				"childs": [
					{
						"id": "360402",
						"pid": 3604,
						"deep": 2,
						"name": "濂溪",
						"pinyin": "lian xi",
						"pinyin_prefix": "l",
						"ext_id": "360402000000",
						"ext_name": "濂溪区"
					},
					{
						"id": "360403",
						"pid": 3604,
						"deep": 2,
						"name": "浔阳",
						"pinyin": "xun yang",
						"pinyin_prefix": "x",
						"ext_id": "360403000000",
						"ext_name": "浔阳区"
					},
					{
						"id": "360404",
						"pid": 3604,
						"deep": 2,
						"name": "柴桑",
						"pinyin": "chai sang",
						"pinyin_prefix": "c",
						"ext_id": "360404000000",
						"ext_name": "柴桑区"
					},
					{
						"id": "360423",
						"pid": 3604,
						"deep": 2,
						"name": "武宁",
						"pinyin": "wu ning",
						"pinyin_prefix": "w",
						"ext_id": "360423000000",
						"ext_name": "武宁县"
					},
					{
						"id": "360424",
						"pid": 3604,
						"deep": 2,
						"name": "修水",
						"pinyin": "xiu shui",
						"pinyin_prefix": "x",
						"ext_id": "360424000000",
						"ext_name": "修水县"
					},
					{
						"id": "360425",
						"pid": 3604,
						"deep": 2,
						"name": "永修",
						"pinyin": "yong xiu",
						"pinyin_prefix": "y",
						"ext_id": "360425000000",
						"ext_name": "永修县"
					},
					{
						"id": "360426",
						"pid": 3604,
						"deep": 2,
						"name": "德安",
						"pinyin": "de an",
						"pinyin_prefix": "d",
						"ext_id": "360426000000",
						"ext_name": "德安县"
					},
					{
						"id": "360428",
						"pid": 3604,
						"deep": 2,
						"name": "都昌",
						"pinyin": "du chang",
						"pinyin_prefix": "d",
						"ext_id": "360428000000",
						"ext_name": "都昌县"
					},
					{
						"id": "360429",
						"pid": 3604,
						"deep": 2,
						"name": "湖口",
						"pinyin": "hu kou",
						"pinyin_prefix": "h",
						"ext_id": "360429000000",
						"ext_name": "湖口县"
					},
					{
						"id": "360430",
						"pid": 3604,
						"deep": 2,
						"name": "彭泽",
						"pinyin": "peng ze",
						"pinyin_prefix": "p",
						"ext_id": "360430000000",
						"ext_name": "彭泽县"
					},
					{
						"id": "360481",
						"pid": 3604,
						"deep": 2,
						"name": "瑞昌",
						"pinyin": "rui chang",
						"pinyin_prefix": "r",
						"ext_id": "360481000000",
						"ext_name": "瑞昌市"
					},
					{
						"id": "360482",
						"pid": 3604,
						"deep": 2,
						"name": "共青城",
						"pinyin": "gong qing cheng",
						"pinyin_prefix": "g",
						"ext_id": "360482000000",
						"ext_name": "共青城市"
					},
					{
						"id": "360483",
						"pid": 3604,
						"deep": 2,
						"name": "庐山",
						"pinyin": "lu shan",
						"pinyin_prefix": "l",
						"ext_id": "360483000000",
						"ext_name": "庐山市"
					}
				]
			},
			{
				"id": "3605",
				"pid": 36,
				"deep": 1,
				"name": "新余",
				"pinyin": "xin yu",
				"pinyin_prefix": "x",
				"ext_id": "360500000000",
				"ext_name": "新余市",
				"childs": [
					{
						"id": "360502",
						"pid": 3605,
						"deep": 2,
						"name": "渝水",
						"pinyin": "yu shui",
						"pinyin_prefix": "y",
						"ext_id": "360502000000",
						"ext_name": "渝水区"
					},
					{
						"id": "360521",
						"pid": 3605,
						"deep": 2,
						"name": "分宜",
						"pinyin": "fen yi",
						"pinyin_prefix": "f",
						"ext_id": "360521000000",
						"ext_name": "分宜县"
					}
				]
			},
			{
				"id": "3606",
				"pid": 36,
				"deep": 1,
				"name": "鹰潭",
				"pinyin": "ying tan",
				"pinyin_prefix": "y",
				"ext_id": "360600000000",
				"ext_name": "鹰潭市",
				"childs": [
					{
						"id": "360602",
						"pid": 3606,
						"deep": 2,
						"name": "月湖",
						"pinyin": "yue hu",
						"pinyin_prefix": "y",
						"ext_id": "360602000000",
						"ext_name": "月湖区"
					},
					{
						"id": "360603",
						"pid": 3606,
						"deep": 2,
						"name": "余江",
						"pinyin": "yu jiang",
						"pinyin_prefix": "y",
						"ext_id": "360603000000",
						"ext_name": "余江区"
					},
					{
						"id": "360681",
						"pid": 3606,
						"deep": 2,
						"name": "贵溪",
						"pinyin": "gui xi",
						"pinyin_prefix": "g",
						"ext_id": "360681000000",
						"ext_name": "贵溪市"
					}
				]
			},
			{
				"id": "3607",
				"pid": 36,
				"deep": 1,
				"name": "赣州",
				"pinyin": "gan zhou",
				"pinyin_prefix": "g",
				"ext_id": "360700000000",
				"ext_name": "赣州市",
				"childs": [
					{
						"id": "360702",
						"pid": 3607,
						"deep": 2,
						"name": "章贡",
						"pinyin": "zhang gong",
						"pinyin_prefix": "z",
						"ext_id": "360702000000",
						"ext_name": "章贡区"
					},
					{
						"id": "360703",
						"pid": 3607,
						"deep": 2,
						"name": "南康",
						"pinyin": "nan kang",
						"pinyin_prefix": "n",
						"ext_id": "360703000000",
						"ext_name": "南康区"
					},
					{
						"id": "360704",
						"pid": 3607,
						"deep": 2,
						"name": "赣县",
						"pinyin": "gan xian",
						"pinyin_prefix": "g",
						"ext_id": "360704000000",
						"ext_name": "赣县区"
					},
					{
						"id": "360722",
						"pid": 3607,
						"deep": 2,
						"name": "信丰",
						"pinyin": "xin feng",
						"pinyin_prefix": "x",
						"ext_id": "360722000000",
						"ext_name": "信丰县"
					},
					{
						"id": "360723",
						"pid": 3607,
						"deep": 2,
						"name": "大余",
						"pinyin": "da yu",
						"pinyin_prefix": "d",
						"ext_id": "360723000000",
						"ext_name": "大余县"
					},
					{
						"id": "360724",
						"pid": 3607,
						"deep": 2,
						"name": "上犹",
						"pinyin": "shang you",
						"pinyin_prefix": "s",
						"ext_id": "360724000000",
						"ext_name": "上犹县"
					},
					{
						"id": "360725",
						"pid": 3607,
						"deep": 2,
						"name": "崇义",
						"pinyin": "chong yi",
						"pinyin_prefix": "c",
						"ext_id": "360725000000",
						"ext_name": "崇义县"
					},
					{
						"id": "360726",
						"pid": 3607,
						"deep": 2,
						"name": "安远",
						"pinyin": "an yuan",
						"pinyin_prefix": "a",
						"ext_id": "360726000000",
						"ext_name": "安远县"
					},
					{
						"id": "360728",
						"pid": 3607,
						"deep": 2,
						"name": "定南",
						"pinyin": "ding nan",
						"pinyin_prefix": "d",
						"ext_id": "360728000000",
						"ext_name": "定南县"
					},
					{
						"id": "360729",
						"pid": 3607,
						"deep": 2,
						"name": "全南",
						"pinyin": "quan nan",
						"pinyin_prefix": "q",
						"ext_id": "360729000000",
						"ext_name": "全南县"
					},
					{
						"id": "360730",
						"pid": 3607,
						"deep": 2,
						"name": "宁都",
						"pinyin": "ning du",
						"pinyin_prefix": "n",
						"ext_id": "360730000000",
						"ext_name": "宁都县"
					},
					{
						"id": "360731",
						"pid": 3607,
						"deep": 2,
						"name": "于都",
						"pinyin": "yu du",
						"pinyin_prefix": "y",
						"ext_id": "360731000000",
						"ext_name": "于都县"
					},
					{
						"id": "360732",
						"pid": 3607,
						"deep": 2,
						"name": "兴国",
						"pinyin": "xing guo",
						"pinyin_prefix": "x",
						"ext_id": "360732000000",
						"ext_name": "兴国县"
					},
					{
						"id": "360733",
						"pid": 3607,
						"deep": 2,
						"name": "会昌",
						"pinyin": "hui chang",
						"pinyin_prefix": "h",
						"ext_id": "360733000000",
						"ext_name": "会昌县"
					},
					{
						"id": "360734",
						"pid": 3607,
						"deep": 2,
						"name": "寻乌",
						"pinyin": "xun wu",
						"pinyin_prefix": "x",
						"ext_id": "360734000000",
						"ext_name": "寻乌县"
					},
					{
						"id": "360735",
						"pid": 3607,
						"deep": 2,
						"name": "石城",
						"pinyin": "shi cheng",
						"pinyin_prefix": "s",
						"ext_id": "360735000000",
						"ext_name": "石城县"
					},
					{
						"id": "360781",
						"pid": 3607,
						"deep": 2,
						"name": "瑞金",
						"pinyin": "rui jin",
						"pinyin_prefix": "r",
						"ext_id": "360781000000",
						"ext_name": "瑞金市"
					},
					{
						"id": "360783",
						"pid": 3607,
						"deep": 2,
						"name": "龙南",
						"pinyin": "long nan",
						"pinyin_prefix": "l",
						"ext_id": "360783000000",
						"ext_name": "龙南市"
					}
				]
			},
			{
				"id": "3608",
				"pid": 36,
				"deep": 1,
				"name": "吉安",
				"pinyin": "ji an",
				"pinyin_prefix": "j",
				"ext_id": "360800000000",
				"ext_name": "吉安市",
				"childs": [
					{
						"id": "360802",
						"pid": 3608,
						"deep": 2,
						"name": "吉州",
						"pinyin": "ji zhou",
						"pinyin_prefix": "j",
						"ext_id": "360802000000",
						"ext_name": "吉州区"
					},
					{
						"id": "360803",
						"pid": 3608,
						"deep": 2,
						"name": "青原",
						"pinyin": "qing yuan",
						"pinyin_prefix": "q",
						"ext_id": "360803000000",
						"ext_name": "青原区"
					},
					{
						"id": "360821",
						"pid": 3608,
						"deep": 2,
						"name": "吉安县",
						"pinyin": "ji an xian",
						"pinyin_prefix": "j",
						"ext_id": "360821000000",
						"ext_name": "吉安县"
					},
					{
						"id": "360822",
						"pid": 3608,
						"deep": 2,
						"name": "吉水",
						"pinyin": "ji shui",
						"pinyin_prefix": "j",
						"ext_id": "360822000000",
						"ext_name": "吉水县"
					},
					{
						"id": "360823",
						"pid": 3608,
						"deep": 2,
						"name": "峡江",
						"pinyin": "xia jiang",
						"pinyin_prefix": "x",
						"ext_id": "360823000000",
						"ext_name": "峡江县"
					},
					{
						"id": "360824",
						"pid": 3608,
						"deep": 2,
						"name": "新干",
						"pinyin": "xin gan",
						"pinyin_prefix": "x",
						"ext_id": "360824000000",
						"ext_name": "新干县"
					},
					{
						"id": "360825",
						"pid": 3608,
						"deep": 2,
						"name": "永丰",
						"pinyin": "yong feng",
						"pinyin_prefix": "y",
						"ext_id": "360825000000",
						"ext_name": "永丰县"
					},
					{
						"id": "360826",
						"pid": 3608,
						"deep": 2,
						"name": "泰和",
						"pinyin": "tai he",
						"pinyin_prefix": "t",
						"ext_id": "360826000000",
						"ext_name": "泰和县"
					},
					{
						"id": "360827",
						"pid": 3608,
						"deep": 2,
						"name": "遂川",
						"pinyin": "sui chuan",
						"pinyin_prefix": "s",
						"ext_id": "360827000000",
						"ext_name": "遂川县"
					},
					{
						"id": "360828",
						"pid": 3608,
						"deep": 2,
						"name": "万安",
						"pinyin": "wan an",
						"pinyin_prefix": "w",
						"ext_id": "360828000000",
						"ext_name": "万安县"
					},
					{
						"id": "360829",
						"pid": 3608,
						"deep": 2,
						"name": "安福",
						"pinyin": "an fu",
						"pinyin_prefix": "a",
						"ext_id": "360829000000",
						"ext_name": "安福县"
					},
					{
						"id": "360830",
						"pid": 3608,
						"deep": 2,
						"name": "永新",
						"pinyin": "yong xin",
						"pinyin_prefix": "y",
						"ext_id": "360830000000",
						"ext_name": "永新县"
					},
					{
						"id": "360881",
						"pid": 3608,
						"deep": 2,
						"name": "井冈山",
						"pinyin": "jing gang shan",
						"pinyin_prefix": "j",
						"ext_id": "360881000000",
						"ext_name": "井冈山市"
					}
				]
			},
			{
				"id": "3609",
				"pid": 36,
				"deep": 1,
				"name": "宜春",
				"pinyin": "yi chun",
				"pinyin_prefix": "y",
				"ext_id": "360900000000",
				"ext_name": "宜春市",
				"childs": [
					{
						"id": "360902",
						"pid": 3609,
						"deep": 2,
						"name": "袁州",
						"pinyin": "yuan zhou",
						"pinyin_prefix": "y",
						"ext_id": "360902000000",
						"ext_name": "袁州区"
					},
					{
						"id": "360921",
						"pid": 3609,
						"deep": 2,
						"name": "奉新",
						"pinyin": "feng xin",
						"pinyin_prefix": "f",
						"ext_id": "360921000000",
						"ext_name": "奉新县"
					},
					{
						"id": "360922",
						"pid": 3609,
						"deep": 2,
						"name": "万载",
						"pinyin": "wan zai",
						"pinyin_prefix": "w",
						"ext_id": "360922000000",
						"ext_name": "万载县"
					},
					{
						"id": "360923",
						"pid": 3609,
						"deep": 2,
						"name": "上高",
						"pinyin": "shang gao",
						"pinyin_prefix": "s",
						"ext_id": "360923000000",
						"ext_name": "上高县"
					},
					{
						"id": "360924",
						"pid": 3609,
						"deep": 2,
						"name": "宜丰",
						"pinyin": "yi feng",
						"pinyin_prefix": "y",
						"ext_id": "360924000000",
						"ext_name": "宜丰县"
					},
					{
						"id": "360925",
						"pid": 3609,
						"deep": 2,
						"name": "靖安",
						"pinyin": "jing an",
						"pinyin_prefix": "j",
						"ext_id": "360925000000",
						"ext_name": "靖安县"
					},
					{
						"id": "360926",
						"pid": 3609,
						"deep": 2,
						"name": "铜鼓",
						"pinyin": "tong gu",
						"pinyin_prefix": "t",
						"ext_id": "360926000000",
						"ext_name": "铜鼓县"
					},
					{
						"id": "360981",
						"pid": 3609,
						"deep": 2,
						"name": "丰城",
						"pinyin": "feng cheng",
						"pinyin_prefix": "f",
						"ext_id": "360981000000",
						"ext_name": "丰城市"
					},
					{
						"id": "360982",
						"pid": 3609,
						"deep": 2,
						"name": "樟树",
						"pinyin": "zhang shu",
						"pinyin_prefix": "z",
						"ext_id": "360982000000",
						"ext_name": "樟树市"
					},
					{
						"id": "360983",
						"pid": 3609,
						"deep": 2,
						"name": "高安",
						"pinyin": "gao an",
						"pinyin_prefix": "g",
						"ext_id": "360983000000",
						"ext_name": "高安市"
					}
				]
			},
			{
				"id": "3610",
				"pid": 36,
				"deep": 1,
				"name": "抚州",
				"pinyin": "fu zhou",
				"pinyin_prefix": "f",
				"ext_id": "361000000000",
				"ext_name": "抚州市",
				"childs": [
					{
						"id": "361002",
						"pid": 3610,
						"deep": 2,
						"name": "临川",
						"pinyin": "lin chuan",
						"pinyin_prefix": "l",
						"ext_id": "361002000000",
						"ext_name": "临川区"
					},
					{
						"id": "361003",
						"pid": 3610,
						"deep": 2,
						"name": "东乡",
						"pinyin": "dong xiang",
						"pinyin_prefix": "d",
						"ext_id": "361003000000",
						"ext_name": "东乡区"
					},
					{
						"id": "361021",
						"pid": 3610,
						"deep": 2,
						"name": "南城",
						"pinyin": "nan cheng",
						"pinyin_prefix": "n",
						"ext_id": "361021000000",
						"ext_name": "南城县"
					},
					{
						"id": "361022",
						"pid": 3610,
						"deep": 2,
						"name": "黎川",
						"pinyin": "li chuan",
						"pinyin_prefix": "l",
						"ext_id": "361022000000",
						"ext_name": "黎川县"
					},
					{
						"id": "361023",
						"pid": 3610,
						"deep": 2,
						"name": "南丰",
						"pinyin": "nan feng",
						"pinyin_prefix": "n",
						"ext_id": "361023000000",
						"ext_name": "南丰县"
					},
					{
						"id": "361024",
						"pid": 3610,
						"deep": 2,
						"name": "崇仁",
						"pinyin": "chong ren",
						"pinyin_prefix": "c",
						"ext_id": "361024000000",
						"ext_name": "崇仁县"
					},
					{
						"id": "361025",
						"pid": 3610,
						"deep": 2,
						"name": "乐安",
						"pinyin": "le an",
						"pinyin_prefix": "l",
						"ext_id": "361025000000",
						"ext_name": "乐安县"
					},
					{
						"id": "361026",
						"pid": 3610,
						"deep": 2,
						"name": "宜黄",
						"pinyin": "yi huang",
						"pinyin_prefix": "y",
						"ext_id": "361026000000",
						"ext_name": "宜黄县"
					},
					{
						"id": "361027",
						"pid": 3610,
						"deep": 2,
						"name": "金溪",
						"pinyin": "jin xi",
						"pinyin_prefix": "j",
						"ext_id": "361027000000",
						"ext_name": "金溪县"
					},
					{
						"id": "361028",
						"pid": 3610,
						"deep": 2,
						"name": "资溪",
						"pinyin": "zi xi",
						"pinyin_prefix": "z",
						"ext_id": "361028000000",
						"ext_name": "资溪县"
					},
					{
						"id": "361030",
						"pid": 3610,
						"deep": 2,
						"name": "广昌",
						"pinyin": "guang chang",
						"pinyin_prefix": "g",
						"ext_id": "361030000000",
						"ext_name": "广昌县"
					}
				]
			},
			{
				"id": "3611",
				"pid": 36,
				"deep": 1,
				"name": "上饶",
				"pinyin": "shang rao",
				"pinyin_prefix": "s",
				"ext_id": "361100000000",
				"ext_name": "上饶市",
				"childs": [
					{
						"id": "361102",
						"pid": 3611,
						"deep": 2,
						"name": "信州",
						"pinyin": "xin zhou",
						"pinyin_prefix": "x",
						"ext_id": "361102000000",
						"ext_name": "信州区"
					},
					{
						"id": "361103",
						"pid": 3611,
						"deep": 2,
						"name": "广丰",
						"pinyin": "guang feng",
						"pinyin_prefix": "g",
						"ext_id": "361103000000",
						"ext_name": "广丰区"
					},
					{
						"id": "361104",
						"pid": 3611,
						"deep": 2,
						"name": "广信",
						"pinyin": "guang xin",
						"pinyin_prefix": "g",
						"ext_id": "361104000000",
						"ext_name": "广信区"
					},
					{
						"id": "361123",
						"pid": 3611,
						"deep": 2,
						"name": "玉山",
						"pinyin": "yu shan",
						"pinyin_prefix": "y",
						"ext_id": "361123000000",
						"ext_name": "玉山县"
					},
					{
						"id": "361124",
						"pid": 3611,
						"deep": 2,
						"name": "铅山",
						"pinyin": "yan shan",
						"pinyin_prefix": "y",
						"ext_id": "361124000000",
						"ext_name": "铅山县"
					},
					{
						"id": "361125",
						"pid": 3611,
						"deep": 2,
						"name": "横峰",
						"pinyin": "heng feng",
						"pinyin_prefix": "h",
						"ext_id": "361125000000",
						"ext_name": "横峰县"
					},
					{
						"id": "361126",
						"pid": 3611,
						"deep": 2,
						"name": "弋阳",
						"pinyin": "yi yang",
						"pinyin_prefix": "y",
						"ext_id": "361126000000",
						"ext_name": "弋阳县"
					},
					{
						"id": "361127",
						"pid": 3611,
						"deep": 2,
						"name": "余干",
						"pinyin": "yu gan",
						"pinyin_prefix": "y",
						"ext_id": "361127000000",
						"ext_name": "余干县"
					},
					{
						"id": "361128",
						"pid": 3611,
						"deep": 2,
						"name": "鄱阳",
						"pinyin": "po yang",
						"pinyin_prefix": "p",
						"ext_id": "361128000000",
						"ext_name": "鄱阳县"
					},
					{
						"id": "361129",
						"pid": 3611,
						"deep": 2,
						"name": "万年",
						"pinyin": "wan nian",
						"pinyin_prefix": "w",
						"ext_id": "361129000000",
						"ext_name": "万年县"
					},
					{
						"id": "361130",
						"pid": 3611,
						"deep": 2,
						"name": "婺源",
						"pinyin": "wu yuan",
						"pinyin_prefix": "w",
						"ext_id": "361130000000",
						"ext_name": "婺源县"
					},
					{
						"id": "361181",
						"pid": 3611,
						"deep": 2,
						"name": "德兴",
						"pinyin": "de xing",
						"pinyin_prefix": "d",
						"ext_id": "361181000000",
						"ext_name": "德兴市"
					}
				]
			}
		]
	},
	{
		"id": "37",
		"pid": 0,
		"deep": 0,
		"name": "山东",
		"pinyin": "shan dong",
		"pinyin_prefix": "s",
		"ext_id": "370000000000",
		"ext_name": "山东省",
		"childs": [
			{
				"id": "3701",
				"pid": 37,
				"deep": 1,
				"name": "济南",
				"pinyin": "ji nan",
				"pinyin_prefix": "j",
				"ext_id": "370100000000",
				"ext_name": "济南市",
				"childs": [
					{
						"id": "370102",
						"pid": 3701,
						"deep": 2,
						"name": "历下",
						"pinyin": "li xia",
						"pinyin_prefix": "l",
						"ext_id": "370102000000",
						"ext_name": "历下区"
					},
					{
						"id": "370103",
						"pid": 3701,
						"deep": 2,
						"name": "市中",
						"pinyin": "shi zhong",
						"pinyin_prefix": "s",
						"ext_id": "370103000000",
						"ext_name": "市中区"
					},
					{
						"id": "370104",
						"pid": 3701,
						"deep": 2,
						"name": "槐荫",
						"pinyin": "huai yin",
						"pinyin_prefix": "h",
						"ext_id": "370104000000",
						"ext_name": "槐荫区"
					},
					{
						"id": "370105",
						"pid": 3701,
						"deep": 2,
						"name": "天桥",
						"pinyin": "tian qiao",
						"pinyin_prefix": "t",
						"ext_id": "370105000000",
						"ext_name": "天桥区"
					},
					{
						"id": "370112",
						"pid": 3701,
						"deep": 2,
						"name": "历城",
						"pinyin": "li cheng",
						"pinyin_prefix": "l",
						"ext_id": "370112000000",
						"ext_name": "历城区"
					},
					{
						"id": "370113",
						"pid": 3701,
						"deep": 2,
						"name": "长清",
						"pinyin": "chang qing",
						"pinyin_prefix": "c",
						"ext_id": "370113000000",
						"ext_name": "长清区"
					},
					{
						"id": "370114",
						"pid": 3701,
						"deep": 2,
						"name": "章丘",
						"pinyin": "zhang qiu",
						"pinyin_prefix": "z",
						"ext_id": "370114000000",
						"ext_name": "章丘区"
					},
					{
						"id": "370115",
						"pid": 3701,
						"deep": 2,
						"name": "济阳",
						"pinyin": "ji yang",
						"pinyin_prefix": "j",
						"ext_id": "370115000000",
						"ext_name": "济阳区"
					},
					{
						"id": "370116",
						"pid": 3701,
						"deep": 2,
						"name": "莱芜",
						"pinyin": "lai wu",
						"pinyin_prefix": "l",
						"ext_id": "370116000000",
						"ext_name": "莱芜区"
					},
					{
						"id": "370117",
						"pid": 3701,
						"deep": 2,
						"name": "钢城",
						"pinyin": "gang cheng",
						"pinyin_prefix": "g",
						"ext_id": "370117000000",
						"ext_name": "钢城区"
					},
					{
						"id": "370124",
						"pid": 3701,
						"deep": 2,
						"name": "平阴",
						"pinyin": "ping yin",
						"pinyin_prefix": "p",
						"ext_id": "370124000000",
						"ext_name": "平阴县"
					},
					{
						"id": "370126",
						"pid": 3701,
						"deep": 2,
						"name": "商河",
						"pinyin": "shang he",
						"pinyin_prefix": "s",
						"ext_id": "370126000000",
						"ext_name": "商河县"
					}
				]
			},
			{
				"id": "3702",
				"pid": 37,
				"deep": 1,
				"name": "青岛",
				"pinyin": "qing dao",
				"pinyin_prefix": "q",
				"ext_id": "370200000000",
				"ext_name": "青岛市",
				"childs": [
					{
						"id": "370202",
						"pid": 3702,
						"deep": 2,
						"name": "市南",
						"pinyin": "shi nan",
						"pinyin_prefix": "s",
						"ext_id": "370202000000",
						"ext_name": "市南区"
					},
					{
						"id": "370203",
						"pid": 3702,
						"deep": 2,
						"name": "市北",
						"pinyin": "shi bei",
						"pinyin_prefix": "s",
						"ext_id": "370203000000",
						"ext_name": "市北区"
					},
					{
						"id": "370211",
						"pid": 3702,
						"deep": 2,
						"name": "黄岛",
						"pinyin": "huang dao",
						"pinyin_prefix": "h",
						"ext_id": "370211000000",
						"ext_name": "黄岛区"
					},
					{
						"id": "370212",
						"pid": 3702,
						"deep": 2,
						"name": "崂山",
						"pinyin": "lao shan",
						"pinyin_prefix": "l",
						"ext_id": "370212000000",
						"ext_name": "崂山区"
					},
					{
						"id": "370213",
						"pid": 3702,
						"deep": 2,
						"name": "李沧",
						"pinyin": "li cang",
						"pinyin_prefix": "l",
						"ext_id": "370213000000",
						"ext_name": "李沧区"
					},
					{
						"id": "370214",
						"pid": 3702,
						"deep": 2,
						"name": "城阳",
						"pinyin": "cheng yang",
						"pinyin_prefix": "c",
						"ext_id": "370214000000",
						"ext_name": "城阳区"
					},
					{
						"id": "370215",
						"pid": 3702,
						"deep": 2,
						"name": "即墨",
						"pinyin": "ji mo",
						"pinyin_prefix": "j",
						"ext_id": "370215000000",
						"ext_name": "即墨区"
					},
					{
						"id": "370281",
						"pid": 3702,
						"deep": 2,
						"name": "胶州",
						"pinyin": "jiao zhou",
						"pinyin_prefix": "j",
						"ext_id": "370281000000",
						"ext_name": "胶州市"
					},
					{
						"id": "370283",
						"pid": 3702,
						"deep": 2,
						"name": "平度",
						"pinyin": "ping du",
						"pinyin_prefix": "p",
						"ext_id": "370283000000",
						"ext_name": "平度市"
					},
					{
						"id": "370285",
						"pid": 3702,
						"deep": 2,
						"name": "莱西",
						"pinyin": "lai xi",
						"pinyin_prefix": "l",
						"ext_id": "370285000000",
						"ext_name": "莱西市"
					}
				]
			},
			{
				"id": "3703",
				"pid": 37,
				"deep": 1,
				"name": "淄博",
				"pinyin": "zi bo",
				"pinyin_prefix": "z",
				"ext_id": "370300000000",
				"ext_name": "淄博市",
				"childs": [
					{
						"id": "370302",
						"pid": 3703,
						"deep": 2,
						"name": "淄川",
						"pinyin": "zi chuan",
						"pinyin_prefix": "z",
						"ext_id": "370302000000",
						"ext_name": "淄川区"
					},
					{
						"id": "370303",
						"pid": 3703,
						"deep": 2,
						"name": "张店",
						"pinyin": "zhang dian",
						"pinyin_prefix": "z",
						"ext_id": "370303000000",
						"ext_name": "张店区"
					},
					{
						"id": "370304",
						"pid": 3703,
						"deep": 2,
						"name": "博山",
						"pinyin": "bo shan",
						"pinyin_prefix": "b",
						"ext_id": "370304000000",
						"ext_name": "博山区"
					},
					{
						"id": "370305",
						"pid": 3703,
						"deep": 2,
						"name": "临淄",
						"pinyin": "lin zi",
						"pinyin_prefix": "l",
						"ext_id": "370305000000",
						"ext_name": "临淄区"
					},
					{
						"id": "370306",
						"pid": 3703,
						"deep": 2,
						"name": "周村",
						"pinyin": "zhou cun",
						"pinyin_prefix": "z",
						"ext_id": "370306000000",
						"ext_name": "周村区"
					},
					{
						"id": "370321",
						"pid": 3703,
						"deep": 2,
						"name": "桓台",
						"pinyin": "huan tai",
						"pinyin_prefix": "h",
						"ext_id": "370321000000",
						"ext_name": "桓台县"
					},
					{
						"id": "370322",
						"pid": 3703,
						"deep": 2,
						"name": "高青",
						"pinyin": "gao qing",
						"pinyin_prefix": "g",
						"ext_id": "370322000000",
						"ext_name": "高青县"
					},
					{
						"id": "370323",
						"pid": 3703,
						"deep": 2,
						"name": "沂源",
						"pinyin": "yi yuan",
						"pinyin_prefix": "y",
						"ext_id": "370323000000",
						"ext_name": "沂源县"
					}
				]
			},
			{
				"id": "3704",
				"pid": 37,
				"deep": 1,
				"name": "枣庄",
				"pinyin": "zao zhuang",
				"pinyin_prefix": "z",
				"ext_id": "370400000000",
				"ext_name": "枣庄市",
				"childs": [
					{
						"id": "370402",
						"pid": 3704,
						"deep": 2,
						"name": "市中",
						"pinyin": "shi zhong",
						"pinyin_prefix": "s",
						"ext_id": "370402000000",
						"ext_name": "市中区"
					},
					{
						"id": "370403",
						"pid": 3704,
						"deep": 2,
						"name": "薛城",
						"pinyin": "xue cheng",
						"pinyin_prefix": "x",
						"ext_id": "370403000000",
						"ext_name": "薛城区"
					},
					{
						"id": "370404",
						"pid": 3704,
						"deep": 2,
						"name": "峄城",
						"pinyin": "yi cheng",
						"pinyin_prefix": "y",
						"ext_id": "370404000000",
						"ext_name": "峄城区"
					},
					{
						"id": "370405",
						"pid": 3704,
						"deep": 2,
						"name": "台儿庄",
						"pinyin": "tai er zhuang",
						"pinyin_prefix": "t",
						"ext_id": "370405000000",
						"ext_name": "台儿庄区"
					},
					{
						"id": "370406",
						"pid": 3704,
						"deep": 2,
						"name": "山亭",
						"pinyin": "shan ting",
						"pinyin_prefix": "s",
						"ext_id": "370406000000",
						"ext_name": "山亭区"
					},
					{
						"id": "370481",
						"pid": 3704,
						"deep": 2,
						"name": "滕州",
						"pinyin": "teng zhou",
						"pinyin_prefix": "t",
						"ext_id": "370481000000",
						"ext_name": "滕州市"
					}
				]
			},
			{
				"id": "3705",
				"pid": 37,
				"deep": 1,
				"name": "东营",
				"pinyin": "dong ying",
				"pinyin_prefix": "d",
				"ext_id": "370500000000",
				"ext_name": "东营市",
				"childs": [
					{
						"id": "370502",
						"pid": 3705,
						"deep": 2,
						"name": "东营区",
						"pinyin": "dong ying qu",
						"pinyin_prefix": "d",
						"ext_id": "370502000000",
						"ext_name": "东营区"
					},
					{
						"id": "370503",
						"pid": 3705,
						"deep": 2,
						"name": "河口",
						"pinyin": "he kou",
						"pinyin_prefix": "h",
						"ext_id": "370503000000",
						"ext_name": "河口区"
					},
					{
						"id": "370505",
						"pid": 3705,
						"deep": 2,
						"name": "垦利",
						"pinyin": "ken li",
						"pinyin_prefix": "k",
						"ext_id": "370505000000",
						"ext_name": "垦利区"
					},
					{
						"id": "370522",
						"pid": 3705,
						"deep": 2,
						"name": "利津",
						"pinyin": "li jin",
						"pinyin_prefix": "l",
						"ext_id": "370522000000",
						"ext_name": "利津县"
					},
					{
						"id": "370523",
						"pid": 3705,
						"deep": 2,
						"name": "广饶",
						"pinyin": "guang rao",
						"pinyin_prefix": "g",
						"ext_id": "370523000000",
						"ext_name": "广饶县"
					}
				]
			},
			{
				"id": "3706",
				"pid": 37,
				"deep": 1,
				"name": "烟台",
				"pinyin": "yan tai",
				"pinyin_prefix": "y",
				"ext_id": "370600000000",
				"ext_name": "烟台市",
				"childs": [
					{
						"id": "370602",
						"pid": 3706,
						"deep": 2,
						"name": "芝罘",
						"pinyin": "zhi fu",
						"pinyin_prefix": "z",
						"ext_id": "370602000000",
						"ext_name": "芝罘区"
					},
					{
						"id": "370611",
						"pid": 3706,
						"deep": 2,
						"name": "福山",
						"pinyin": "fu shan",
						"pinyin_prefix": "f",
						"ext_id": "370611000000",
						"ext_name": "福山区"
					},
					{
						"id": "370612",
						"pid": 3706,
						"deep": 2,
						"name": "牟平",
						"pinyin": "mu ping",
						"pinyin_prefix": "m",
						"ext_id": "370612000000",
						"ext_name": "牟平区"
					},
					{
						"id": "370613",
						"pid": 3706,
						"deep": 2,
						"name": "莱山",
						"pinyin": "lai shan",
						"pinyin_prefix": "l",
						"ext_id": "370613000000",
						"ext_name": "莱山区"
					},
					{
						"id": "370614",
						"pid": 3706,
						"deep": 2,
						"name": "蓬莱",
						"pinyin": "peng lai",
						"pinyin_prefix": "p",
						"ext_id": "370614000000",
						"ext_name": "蓬莱区"
					},
					{
						"id": "370681",
						"pid": 3706,
						"deep": 2,
						"name": "龙口",
						"pinyin": "long kou",
						"pinyin_prefix": "l",
						"ext_id": "370681000000",
						"ext_name": "龙口市"
					},
					{
						"id": "370682",
						"pid": 3706,
						"deep": 2,
						"name": "莱阳",
						"pinyin": "lai yang",
						"pinyin_prefix": "l",
						"ext_id": "370682000000",
						"ext_name": "莱阳市"
					},
					{
						"id": "370683",
						"pid": 3706,
						"deep": 2,
						"name": "莱州",
						"pinyin": "lai zhou",
						"pinyin_prefix": "l",
						"ext_id": "370683000000",
						"ext_name": "莱州市"
					},
					{
						"id": "370685",
						"pid": 3706,
						"deep": 2,
						"name": "招远",
						"pinyin": "zhao yuan",
						"pinyin_prefix": "z",
						"ext_id": "370685000000",
						"ext_name": "招远市"
					},
					{
						"id": "370686",
						"pid": 3706,
						"deep": 2,
						"name": "栖霞",
						"pinyin": "qi xia",
						"pinyin_prefix": "q",
						"ext_id": "370686000000",
						"ext_name": "栖霞市"
					},
					{
						"id": "370687",
						"pid": 3706,
						"deep": 2,
						"name": "海阳",
						"pinyin": "hai yang",
						"pinyin_prefix": "h",
						"ext_id": "370687000000",
						"ext_name": "海阳市"
					}
				]
			},
			{
				"id": "3707",
				"pid": 37,
				"deep": 1,
				"name": "潍坊",
				"pinyin": "wei fang",
				"pinyin_prefix": "w",
				"ext_id": "370700000000",
				"ext_name": "潍坊市",
				"childs": [
					{
						"id": "370702",
						"pid": 3707,
						"deep": 2,
						"name": "潍城",
						"pinyin": "wei cheng",
						"pinyin_prefix": "w",
						"ext_id": "370702000000",
						"ext_name": "潍城区"
					},
					{
						"id": "370703",
						"pid": 3707,
						"deep": 2,
						"name": "寒亭",
						"pinyin": "han ting",
						"pinyin_prefix": "h",
						"ext_id": "370703000000",
						"ext_name": "寒亭区"
					},
					{
						"id": "370704",
						"pid": 3707,
						"deep": 2,
						"name": "坊子",
						"pinyin": "fang zi",
						"pinyin_prefix": "f",
						"ext_id": "370704000000",
						"ext_name": "坊子区"
					},
					{
						"id": "370705",
						"pid": 3707,
						"deep": 2,
						"name": "奎文",
						"pinyin": "kui wen",
						"pinyin_prefix": "k",
						"ext_id": "370705000000",
						"ext_name": "奎文区"
					},
					{
						"id": "370724",
						"pid": 3707,
						"deep": 2,
						"name": "临朐",
						"pinyin": "lin qu",
						"pinyin_prefix": "l",
						"ext_id": "370724000000",
						"ext_name": "临朐县"
					},
					{
						"id": "370725",
						"pid": 3707,
						"deep": 2,
						"name": "昌乐",
						"pinyin": "chang le",
						"pinyin_prefix": "c",
						"ext_id": "370725000000",
						"ext_name": "昌乐县"
					},
					{
						"id": "370781",
						"pid": 3707,
						"deep": 2,
						"name": "青州",
						"pinyin": "qing zhou",
						"pinyin_prefix": "q",
						"ext_id": "370781000000",
						"ext_name": "青州市"
					},
					{
						"id": "370782",
						"pid": 3707,
						"deep": 2,
						"name": "诸城",
						"pinyin": "zhu cheng",
						"pinyin_prefix": "z",
						"ext_id": "370782000000",
						"ext_name": "诸城市"
					},
					{
						"id": "370783",
						"pid": 3707,
						"deep": 2,
						"name": "寿光",
						"pinyin": "shou guang",
						"pinyin_prefix": "s",
						"ext_id": "370783000000",
						"ext_name": "寿光市"
					},
					{
						"id": "370784",
						"pid": 3707,
						"deep": 2,
						"name": "安丘",
						"pinyin": "an qiu",
						"pinyin_prefix": "a",
						"ext_id": "370784000000",
						"ext_name": "安丘市"
					},
					{
						"id": "370785",
						"pid": 3707,
						"deep": 2,
						"name": "高密",
						"pinyin": "gao mi",
						"pinyin_prefix": "g",
						"ext_id": "370785000000",
						"ext_name": "高密市"
					},
					{
						"id": "370786",
						"pid": 3707,
						"deep": 2,
						"name": "昌邑",
						"pinyin": "chang yi",
						"pinyin_prefix": "c",
						"ext_id": "370786000000",
						"ext_name": "昌邑市"
					}
				]
			},
			{
				"id": "3708",
				"pid": 37,
				"deep": 1,
				"name": "济宁",
				"pinyin": "ji ning",
				"pinyin_prefix": "j",
				"ext_id": "370800000000",
				"ext_name": "济宁市",
				"childs": [
					{
						"id": "370811",
						"pid": 3708,
						"deep": 2,
						"name": "任城",
						"pinyin": "ren cheng",
						"pinyin_prefix": "r",
						"ext_id": "370811000000",
						"ext_name": "任城区"
					},
					{
						"id": "370812",
						"pid": 3708,
						"deep": 2,
						"name": "兖州",
						"pinyin": "yan zhou",
						"pinyin_prefix": "y",
						"ext_id": "370812000000",
						"ext_name": "兖州区"
					},
					{
						"id": "370826",
						"pid": 3708,
						"deep": 2,
						"name": "微山",
						"pinyin": "wei shan",
						"pinyin_prefix": "w",
						"ext_id": "370826000000",
						"ext_name": "微山县"
					},
					{
						"id": "370827",
						"pid": 3708,
						"deep": 2,
						"name": "鱼台",
						"pinyin": "yu tai",
						"pinyin_prefix": "y",
						"ext_id": "370827000000",
						"ext_name": "鱼台县"
					},
					{
						"id": "370828",
						"pid": 3708,
						"deep": 2,
						"name": "金乡",
						"pinyin": "jin xiang",
						"pinyin_prefix": "j",
						"ext_id": "370828000000",
						"ext_name": "金乡县"
					},
					{
						"id": "370829",
						"pid": 3708,
						"deep": 2,
						"name": "嘉祥",
						"pinyin": "jia xiang",
						"pinyin_prefix": "j",
						"ext_id": "370829000000",
						"ext_name": "嘉祥县"
					},
					{
						"id": "370830",
						"pid": 3708,
						"deep": 2,
						"name": "汶上",
						"pinyin": "wen shang",
						"pinyin_prefix": "w",
						"ext_id": "370830000000",
						"ext_name": "汶上县"
					},
					{
						"id": "370831",
						"pid": 3708,
						"deep": 2,
						"name": "泗水",
						"pinyin": "si shui",
						"pinyin_prefix": "s",
						"ext_id": "370831000000",
						"ext_name": "泗水县"
					},
					{
						"id": "370832",
						"pid": 3708,
						"deep": 2,
						"name": "梁山",
						"pinyin": "liang shan",
						"pinyin_prefix": "l",
						"ext_id": "370832000000",
						"ext_name": "梁山县"
					},
					{
						"id": "370881",
						"pid": 3708,
						"deep": 2,
						"name": "曲阜",
						"pinyin": "qu fu",
						"pinyin_prefix": "q",
						"ext_id": "370881000000",
						"ext_name": "曲阜市"
					},
					{
						"id": "370883",
						"pid": 3708,
						"deep": 2,
						"name": "邹城",
						"pinyin": "zou cheng",
						"pinyin_prefix": "z",
						"ext_id": "370883000000",
						"ext_name": "邹城市"
					}
				]
			},
			{
				"id": "3709",
				"pid": 37,
				"deep": 1,
				"name": "泰安",
				"pinyin": "tai an",
				"pinyin_prefix": "t",
				"ext_id": "370900000000",
				"ext_name": "泰安市",
				"childs": [
					{
						"id": "370902",
						"pid": 3709,
						"deep": 2,
						"name": "泰山",
						"pinyin": "tai shan",
						"pinyin_prefix": "t",
						"ext_id": "370902000000",
						"ext_name": "泰山区"
					},
					{
						"id": "370911",
						"pid": 3709,
						"deep": 2,
						"name": "岱岳",
						"pinyin": "dai yue",
						"pinyin_prefix": "d",
						"ext_id": "370911000000",
						"ext_name": "岱岳区"
					},
					{
						"id": "370921",
						"pid": 3709,
						"deep": 2,
						"name": "宁阳",
						"pinyin": "ning yang",
						"pinyin_prefix": "n",
						"ext_id": "370921000000",
						"ext_name": "宁阳县"
					},
					{
						"id": "370923",
						"pid": 3709,
						"deep": 2,
						"name": "东平",
						"pinyin": "dong ping",
						"pinyin_prefix": "d",
						"ext_id": "370923000000",
						"ext_name": "东平县"
					},
					{
						"id": "370982",
						"pid": 3709,
						"deep": 2,
						"name": "新泰",
						"pinyin": "xin tai",
						"pinyin_prefix": "x",
						"ext_id": "370982000000",
						"ext_name": "新泰市"
					},
					{
						"id": "370983",
						"pid": 3709,
						"deep": 2,
						"name": "肥城",
						"pinyin": "fei cheng",
						"pinyin_prefix": "f",
						"ext_id": "370983000000",
						"ext_name": "肥城市"
					}
				]
			},
			{
				"id": "3710",
				"pid": 37,
				"deep": 1,
				"name": "威海",
				"pinyin": "wei hai",
				"pinyin_prefix": "w",
				"ext_id": "371000000000",
				"ext_name": "威海市",
				"childs": [
					{
						"id": "371002",
						"pid": 3710,
						"deep": 2,
						"name": "环翠",
						"pinyin": "huan cui",
						"pinyin_prefix": "h",
						"ext_id": "371002000000",
						"ext_name": "环翠区"
					},
					{
						"id": "371003",
						"pid": 3710,
						"deep": 2,
						"name": "文登",
						"pinyin": "wen deng",
						"pinyin_prefix": "w",
						"ext_id": "371003000000",
						"ext_name": "文登区"
					},
					{
						"id": "371082",
						"pid": 3710,
						"deep": 2,
						"name": "荣成",
						"pinyin": "rong cheng",
						"pinyin_prefix": "r",
						"ext_id": "371082000000",
						"ext_name": "荣成市"
					},
					{
						"id": "371083",
						"pid": 3710,
						"deep": 2,
						"name": "乳山",
						"pinyin": "ru shan",
						"pinyin_prefix": "r",
						"ext_id": "371083000000",
						"ext_name": "乳山市"
					}
				]
			},
			{
				"id": "3711",
				"pid": 37,
				"deep": 1,
				"name": "日照",
				"pinyin": "ri zhao",
				"pinyin_prefix": "r",
				"ext_id": "371100000000",
				"ext_name": "日照市",
				"childs": [
					{
						"id": "371102",
						"pid": 3711,
						"deep": 2,
						"name": "东港",
						"pinyin": "dong gang",
						"pinyin_prefix": "d",
						"ext_id": "371102000000",
						"ext_name": "东港区"
					},
					{
						"id": "371103",
						"pid": 3711,
						"deep": 2,
						"name": "岚山",
						"pinyin": "lan shan",
						"pinyin_prefix": "l",
						"ext_id": "371103000000",
						"ext_name": "岚山区"
					},
					{
						"id": "371121",
						"pid": 3711,
						"deep": 2,
						"name": "五莲",
						"pinyin": "wu lian",
						"pinyin_prefix": "w",
						"ext_id": "371121000000",
						"ext_name": "五莲县"
					},
					{
						"id": "371122",
						"pid": 3711,
						"deep": 2,
						"name": "莒县",
						"pinyin": "ju xian",
						"pinyin_prefix": "j",
						"ext_id": "371122000000",
						"ext_name": "莒县"
					}
				]
			},
			{
				"id": "3713",
				"pid": 37,
				"deep": 1,
				"name": "临沂",
				"pinyin": "lin yi",
				"pinyin_prefix": "l",
				"ext_id": "371300000000",
				"ext_name": "临沂市",
				"childs": [
					{
						"id": "371302",
						"pid": 3713,
						"deep": 2,
						"name": "兰山",
						"pinyin": "lan shan",
						"pinyin_prefix": "l",
						"ext_id": "371302000000",
						"ext_name": "兰山区"
					},
					{
						"id": "371311",
						"pid": 3713,
						"deep": 2,
						"name": "罗庄",
						"pinyin": "luo zhuang",
						"pinyin_prefix": "l",
						"ext_id": "371311000000",
						"ext_name": "罗庄区"
					},
					{
						"id": "371312",
						"pid": 3713,
						"deep": 2,
						"name": "河东",
						"pinyin": "he dong",
						"pinyin_prefix": "h",
						"ext_id": "371312000000",
						"ext_name": "河东区"
					},
					{
						"id": "371321",
						"pid": 3713,
						"deep": 2,
						"name": "沂南",
						"pinyin": "yi nan",
						"pinyin_prefix": "y",
						"ext_id": "371321000000",
						"ext_name": "沂南县"
					},
					{
						"id": "371322",
						"pid": 3713,
						"deep": 2,
						"name": "郯城",
						"pinyin": "tan cheng",
						"pinyin_prefix": "t",
						"ext_id": "371322000000",
						"ext_name": "郯城县"
					},
					{
						"id": "371323",
						"pid": 3713,
						"deep": 2,
						"name": "沂水",
						"pinyin": "yi shui",
						"pinyin_prefix": "y",
						"ext_id": "371323000000",
						"ext_name": "沂水县"
					},
					{
						"id": "371324",
						"pid": 3713,
						"deep": 2,
						"name": "兰陵",
						"pinyin": "lan ling",
						"pinyin_prefix": "l",
						"ext_id": "371324000000",
						"ext_name": "兰陵县"
					},
					{
						"id": "371325",
						"pid": 3713,
						"deep": 2,
						"name": "费县",
						"pinyin": "fei xian",
						"pinyin_prefix": "f",
						"ext_id": "371325000000",
						"ext_name": "费县"
					},
					{
						"id": "371326",
						"pid": 3713,
						"deep": 2,
						"name": "平邑",
						"pinyin": "ping yi",
						"pinyin_prefix": "p",
						"ext_id": "371326000000",
						"ext_name": "平邑县"
					},
					{
						"id": "371327",
						"pid": 3713,
						"deep": 2,
						"name": "莒南",
						"pinyin": "ju nan",
						"pinyin_prefix": "j",
						"ext_id": "371327000000",
						"ext_name": "莒南县"
					},
					{
						"id": "371328",
						"pid": 3713,
						"deep": 2,
						"name": "蒙阴",
						"pinyin": "meng yin",
						"pinyin_prefix": "m",
						"ext_id": "371328000000",
						"ext_name": "蒙阴县"
					},
					{
						"id": "371329",
						"pid": 3713,
						"deep": 2,
						"name": "临沭",
						"pinyin": "lin shu",
						"pinyin_prefix": "l",
						"ext_id": "371329000000",
						"ext_name": "临沭县"
					}
				]
			},
			{
				"id": "3714",
				"pid": 37,
				"deep": 1,
				"name": "德州",
				"pinyin": "de zhou",
				"pinyin_prefix": "d",
				"ext_id": "371400000000",
				"ext_name": "德州市",
				"childs": [
					{
						"id": "371402",
						"pid": 3714,
						"deep": 2,
						"name": "德城",
						"pinyin": "de cheng",
						"pinyin_prefix": "d",
						"ext_id": "371402000000",
						"ext_name": "德城区"
					},
					{
						"id": "371403",
						"pid": 3714,
						"deep": 2,
						"name": "陵城",
						"pinyin": "ling cheng",
						"pinyin_prefix": "l",
						"ext_id": "371403000000",
						"ext_name": "陵城区"
					},
					{
						"id": "371422",
						"pid": 3714,
						"deep": 2,
						"name": "宁津",
						"pinyin": "ning jin",
						"pinyin_prefix": "n",
						"ext_id": "371422000000",
						"ext_name": "宁津县"
					},
					{
						"id": "371423",
						"pid": 3714,
						"deep": 2,
						"name": "庆云",
						"pinyin": "qing yun",
						"pinyin_prefix": "q",
						"ext_id": "371423000000",
						"ext_name": "庆云县"
					},
					{
						"id": "371424",
						"pid": 3714,
						"deep": 2,
						"name": "临邑",
						"pinyin": "lin yi",
						"pinyin_prefix": "l",
						"ext_id": "371424000000",
						"ext_name": "临邑县"
					},
					{
						"id": "371425",
						"pid": 3714,
						"deep": 2,
						"name": "齐河",
						"pinyin": "qi he",
						"pinyin_prefix": "q",
						"ext_id": "371425000000",
						"ext_name": "齐河县"
					},
					{
						"id": "371426",
						"pid": 3714,
						"deep": 2,
						"name": "平原",
						"pinyin": "ping yuan",
						"pinyin_prefix": "p",
						"ext_id": "371426000000",
						"ext_name": "平原县"
					},
					{
						"id": "371427",
						"pid": 3714,
						"deep": 2,
						"name": "夏津",
						"pinyin": "xia jin",
						"pinyin_prefix": "x",
						"ext_id": "371427000000",
						"ext_name": "夏津县"
					},
					{
						"id": "371428",
						"pid": 3714,
						"deep": 2,
						"name": "武城",
						"pinyin": "wu cheng",
						"pinyin_prefix": "w",
						"ext_id": "371428000000",
						"ext_name": "武城县"
					},
					{
						"id": "371481",
						"pid": 3714,
						"deep": 2,
						"name": "乐陵",
						"pinyin": "le ling",
						"pinyin_prefix": "l",
						"ext_id": "371481000000",
						"ext_name": "乐陵市"
					},
					{
						"id": "371482",
						"pid": 3714,
						"deep": 2,
						"name": "禹城",
						"pinyin": "yu cheng",
						"pinyin_prefix": "y",
						"ext_id": "371482000000",
						"ext_name": "禹城市"
					}
				]
			},
			{
				"id": "3715",
				"pid": 37,
				"deep": 1,
				"name": "聊城",
				"pinyin": "liao cheng",
				"pinyin_prefix": "l",
				"ext_id": "371500000000",
				"ext_name": "聊城市",
				"childs": [
					{
						"id": "371502",
						"pid": 3715,
						"deep": 2,
						"name": "东昌府",
						"pinyin": "dong chang fu",
						"pinyin_prefix": "d",
						"ext_id": "371502000000",
						"ext_name": "东昌府区"
					},
					{
						"id": "371503",
						"pid": 3715,
						"deep": 2,
						"name": "茌平",
						"pinyin": "chi ping",
						"pinyin_prefix": "c",
						"ext_id": "371503000000",
						"ext_name": "茌平区"
					},
					{
						"id": "371521",
						"pid": 3715,
						"deep": 2,
						"name": "阳谷",
						"pinyin": "yang gu",
						"pinyin_prefix": "y",
						"ext_id": "371521000000",
						"ext_name": "阳谷县"
					},
					{
						"id": "371522",
						"pid": 3715,
						"deep": 2,
						"name": "莘县",
						"pinyin": "shen xian",
						"pinyin_prefix": "s",
						"ext_id": "371522000000",
						"ext_name": "莘县"
					},
					{
						"id": "371524",
						"pid": 3715,
						"deep": 2,
						"name": "东阿",
						"pinyin": "dong e",
						"pinyin_prefix": "d",
						"ext_id": "371524000000",
						"ext_name": "东阿县"
					},
					{
						"id": "371525",
						"pid": 3715,
						"deep": 2,
						"name": "冠县",
						"pinyin": "guan xian",
						"pinyin_prefix": "g",
						"ext_id": "371525000000",
						"ext_name": "冠县"
					},
					{
						"id": "371526",
						"pid": 3715,
						"deep": 2,
						"name": "高唐",
						"pinyin": "gao tang",
						"pinyin_prefix": "g",
						"ext_id": "371526000000",
						"ext_name": "高唐县"
					},
					{
						"id": "371581",
						"pid": 3715,
						"deep": 2,
						"name": "临清",
						"pinyin": "lin qing",
						"pinyin_prefix": "l",
						"ext_id": "371581000000",
						"ext_name": "临清市"
					}
				]
			},
			{
				"id": "3716",
				"pid": 37,
				"deep": 1,
				"name": "滨州",
				"pinyin": "bin zhou",
				"pinyin_prefix": "b",
				"ext_id": "371600000000",
				"ext_name": "滨州市",
				"childs": [
					{
						"id": "371602",
						"pid": 3716,
						"deep": 2,
						"name": "滨城",
						"pinyin": "bin cheng",
						"pinyin_prefix": "b",
						"ext_id": "371602000000",
						"ext_name": "滨城区"
					},
					{
						"id": "371603",
						"pid": 3716,
						"deep": 2,
						"name": "沾化",
						"pinyin": "zhan hua",
						"pinyin_prefix": "z",
						"ext_id": "371603000000",
						"ext_name": "沾化区"
					},
					{
						"id": "371621",
						"pid": 3716,
						"deep": 2,
						"name": "惠民",
						"pinyin": "hui min",
						"pinyin_prefix": "h",
						"ext_id": "371621000000",
						"ext_name": "惠民县"
					},
					{
						"id": "371622",
						"pid": 3716,
						"deep": 2,
						"name": "阳信",
						"pinyin": "yang xin",
						"pinyin_prefix": "y",
						"ext_id": "371622000000",
						"ext_name": "阳信县"
					},
					{
						"id": "371623",
						"pid": 3716,
						"deep": 2,
						"name": "无棣",
						"pinyin": "wu di",
						"pinyin_prefix": "w",
						"ext_id": "371623000000",
						"ext_name": "无棣县"
					},
					{
						"id": "371625",
						"pid": 3716,
						"deep": 2,
						"name": "博兴",
						"pinyin": "bo xing",
						"pinyin_prefix": "b",
						"ext_id": "371625000000",
						"ext_name": "博兴县"
					},
					{
						"id": "371681",
						"pid": 3716,
						"deep": 2,
						"name": "邹平",
						"pinyin": "zou ping",
						"pinyin_prefix": "z",
						"ext_id": "371681000000",
						"ext_name": "邹平市"
					}
				]
			},
			{
				"id": "3717",
				"pid": 37,
				"deep": 1,
				"name": "菏泽",
				"pinyin": "he ze",
				"pinyin_prefix": "h",
				"ext_id": "371700000000",
				"ext_name": "菏泽市",
				"childs": [
					{
						"id": "371702",
						"pid": 3717,
						"deep": 2,
						"name": "牡丹",
						"pinyin": "mu dan",
						"pinyin_prefix": "m",
						"ext_id": "371702000000",
						"ext_name": "牡丹区"
					},
					{
						"id": "371703",
						"pid": 3717,
						"deep": 2,
						"name": "定陶",
						"pinyin": "ding tao",
						"pinyin_prefix": "d",
						"ext_id": "371703000000",
						"ext_name": "定陶区"
					},
					{
						"id": "371721",
						"pid": 3717,
						"deep": 2,
						"name": "曹县",
						"pinyin": "cao xian",
						"pinyin_prefix": "c",
						"ext_id": "371721000000",
						"ext_name": "曹县"
					},
					{
						"id": "371722",
						"pid": 3717,
						"deep": 2,
						"name": "单县",
						"pinyin": "shan xian",
						"pinyin_prefix": "s",
						"ext_id": "371722000000",
						"ext_name": "单县"
					},
					{
						"id": "371723",
						"pid": 3717,
						"deep": 2,
						"name": "成武",
						"pinyin": "cheng wu",
						"pinyin_prefix": "c",
						"ext_id": "371723000000",
						"ext_name": "成武县"
					},
					{
						"id": "371724",
						"pid": 3717,
						"deep": 2,
						"name": "巨野",
						"pinyin": "ju ye",
						"pinyin_prefix": "j",
						"ext_id": "371724000000",
						"ext_name": "巨野县"
					},
					{
						"id": "371725",
						"pid": 3717,
						"deep": 2,
						"name": "郓城",
						"pinyin": "yun cheng",
						"pinyin_prefix": "y",
						"ext_id": "371725000000",
						"ext_name": "郓城县"
					},
					{
						"id": "371726",
						"pid": 3717,
						"deep": 2,
						"name": "鄄城",
						"pinyin": "juan cheng",
						"pinyin_prefix": "j",
						"ext_id": "371726000000",
						"ext_name": "鄄城县"
					},
					{
						"id": "371728",
						"pid": 3717,
						"deep": 2,
						"name": "东明",
						"pinyin": "dong ming",
						"pinyin_prefix": "d",
						"ext_id": "371728000000",
						"ext_name": "东明县"
					}
				]
			}
		]
	},
	{
		"id": "41",
		"pid": 0,
		"deep": 0,
		"name": "河南",
		"pinyin": "he nan",
		"pinyin_prefix": "h",
		"ext_id": "410000000000",
		"ext_name": "河南省",
		"childs": [
			{
				"id": "4101",
				"pid": 41,
				"deep": 1,
				"name": "郑州",
				"pinyin": "zheng zhou",
				"pinyin_prefix": "z",
				"ext_id": "410100000000",
				"ext_name": "郑州市",
				"childs": [
					{
						"id": "410102",
						"pid": 4101,
						"deep": 2,
						"name": "中原",
						"pinyin": "zhong yuan",
						"pinyin_prefix": "z",
						"ext_id": "410102000000",
						"ext_name": "中原区"
					},
					{
						"id": "410103",
						"pid": 4101,
						"deep": 2,
						"name": "二七",
						"pinyin": "er qi",
						"pinyin_prefix": "e",
						"ext_id": "410103000000",
						"ext_name": "二七区"
					},
					{
						"id": "410104",
						"pid": 4101,
						"deep": 2,
						"name": "管城",
						"pinyin": "guan cheng",
						"pinyin_prefix": "g",
						"ext_id": "410104000000",
						"ext_name": "管城回族区"
					},
					{
						"id": "410105",
						"pid": 4101,
						"deep": 2,
						"name": "金水",
						"pinyin": "jin shui",
						"pinyin_prefix": "j",
						"ext_id": "410105000000",
						"ext_name": "金水区"
					},
					{
						"id": "410106",
						"pid": 4101,
						"deep": 2,
						"name": "上街",
						"pinyin": "shang jie",
						"pinyin_prefix": "s",
						"ext_id": "410106000000",
						"ext_name": "上街区"
					},
					{
						"id": "410108",
						"pid": 4101,
						"deep": 2,
						"name": "惠济",
						"pinyin": "hui ji",
						"pinyin_prefix": "h",
						"ext_id": "410108000000",
						"ext_name": "惠济区"
					},
					{
						"id": "410122",
						"pid": 4101,
						"deep": 2,
						"name": "中牟",
						"pinyin": "zhong mu",
						"pinyin_prefix": "z",
						"ext_id": "410122000000",
						"ext_name": "中牟县"
					},
					{
						"id": "410181",
						"pid": 4101,
						"deep": 2,
						"name": "巩义",
						"pinyin": "gong yi",
						"pinyin_prefix": "g",
						"ext_id": "410181000000",
						"ext_name": "巩义市"
					},
					{
						"id": "410182",
						"pid": 4101,
						"deep": 2,
						"name": "荥阳",
						"pinyin": "xing yang",
						"pinyin_prefix": "x",
						"ext_id": "410182000000",
						"ext_name": "荥阳市"
					},
					{
						"id": "410183",
						"pid": 4101,
						"deep": 2,
						"name": "新密",
						"pinyin": "xin mi",
						"pinyin_prefix": "x",
						"ext_id": "410183000000",
						"ext_name": "新密市"
					},
					{
						"id": "410184",
						"pid": 4101,
						"deep": 2,
						"name": "新郑",
						"pinyin": "xin zheng",
						"pinyin_prefix": "x",
						"ext_id": "410184000000",
						"ext_name": "新郑市"
					},
					{
						"id": "410185",
						"pid": 4101,
						"deep": 2,
						"name": "登封",
						"pinyin": "deng feng",
						"pinyin_prefix": "d",
						"ext_id": "410185000000",
						"ext_name": "登封市"
					}
				]
			},
			{
				"id": "4102",
				"pid": 41,
				"deep": 1,
				"name": "开封",
				"pinyin": "kai feng",
				"pinyin_prefix": "k",
				"ext_id": "410200000000",
				"ext_name": "开封市",
				"childs": [
					{
						"id": "410202",
						"pid": 4102,
						"deep": 2,
						"name": "龙亭",
						"pinyin": "long ting",
						"pinyin_prefix": "l",
						"ext_id": "410202000000",
						"ext_name": "龙亭区"
					},
					{
						"id": "410203",
						"pid": 4102,
						"deep": 2,
						"name": "顺河",
						"pinyin": "shun he",
						"pinyin_prefix": "s",
						"ext_id": "410203000000",
						"ext_name": "顺河回族区"
					},
					{
						"id": "410204",
						"pid": 4102,
						"deep": 2,
						"name": "鼓楼",
						"pinyin": "gu lou",
						"pinyin_prefix": "g",
						"ext_id": "410204000000",
						"ext_name": "鼓楼区"
					},
					{
						"id": "410205",
						"pid": 4102,
						"deep": 2,
						"name": "禹王台",
						"pinyin": "yu wang tai",
						"pinyin_prefix": "y",
						"ext_id": "410205000000",
						"ext_name": "禹王台区"
					},
					{
						"id": "410212",
						"pid": 4102,
						"deep": 2,
						"name": "祥符",
						"pinyin": "xiang fu",
						"pinyin_prefix": "x",
						"ext_id": "410212000000",
						"ext_name": "祥符区"
					},
					{
						"id": "410221",
						"pid": 4102,
						"deep": 2,
						"name": "杞县",
						"pinyin": "qi xian",
						"pinyin_prefix": "q",
						"ext_id": "410221000000",
						"ext_name": "杞县"
					},
					{
						"id": "410222",
						"pid": 4102,
						"deep": 2,
						"name": "通许",
						"pinyin": "tong xu",
						"pinyin_prefix": "t",
						"ext_id": "410222000000",
						"ext_name": "通许县"
					},
					{
						"id": "410223",
						"pid": 4102,
						"deep": 2,
						"name": "尉氏",
						"pinyin": "wei shi",
						"pinyin_prefix": "w",
						"ext_id": "410223000000",
						"ext_name": "尉氏县"
					},
					{
						"id": "410225",
						"pid": 4102,
						"deep": 2,
						"name": "兰考",
						"pinyin": "lan kao",
						"pinyin_prefix": "l",
						"ext_id": "410225000000",
						"ext_name": "兰考县"
					}
				]
			},
			{
				"id": "4103",
				"pid": 41,
				"deep": 1,
				"name": "洛阳",
				"pinyin": "luo yang",
				"pinyin_prefix": "l",
				"ext_id": "410300000000",
				"ext_name": "洛阳市",
				"childs": [
					{
						"id": "410302",
						"pid": 4103,
						"deep": 2,
						"name": "老城",
						"pinyin": "lao cheng",
						"pinyin_prefix": "l",
						"ext_id": "410302000000",
						"ext_name": "老城区"
					},
					{
						"id": "410303",
						"pid": 4103,
						"deep": 2,
						"name": "西工",
						"pinyin": "xi gong",
						"pinyin_prefix": "x",
						"ext_id": "410303000000",
						"ext_name": "西工区"
					},
					{
						"id": "410304",
						"pid": 4103,
						"deep": 2,
						"name": "瀍河",
						"pinyin": "chan he",
						"pinyin_prefix": "c",
						"ext_id": "410304000000",
						"ext_name": "瀍河回族区"
					},
					{
						"id": "410305",
						"pid": 4103,
						"deep": 2,
						"name": "涧西",
						"pinyin": "jian xi",
						"pinyin_prefix": "j",
						"ext_id": "410305000000",
						"ext_name": "涧西区"
					},
					{
						"id": "410307",
						"pid": 4103,
						"deep": 2,
						"name": "偃师",
						"pinyin": "yan shi",
						"pinyin_prefix": "y",
						"ext_id": "410307000000",
						"ext_name": "偃师区"
					},
					{
						"id": "410308",
						"pid": 4103,
						"deep": 2,
						"name": "孟津",
						"pinyin": "meng jin",
						"pinyin_prefix": "m",
						"ext_id": "410308000000",
						"ext_name": "孟津区"
					},
					{
						"id": "410311",
						"pid": 4103,
						"deep": 2,
						"name": "洛龙",
						"pinyin": "luo long",
						"pinyin_prefix": "l",
						"ext_id": "410311000000",
						"ext_name": "洛龙区"
					},
					{
						"id": "410323",
						"pid": 4103,
						"deep": 2,
						"name": "新安",
						"pinyin": "xin an",
						"pinyin_prefix": "x",
						"ext_id": "410323000000",
						"ext_name": "新安县"
					},
					{
						"id": "410324",
						"pid": 4103,
						"deep": 2,
						"name": "栾川",
						"pinyin": "luan chuan",
						"pinyin_prefix": "l",
						"ext_id": "410324000000",
						"ext_name": "栾川县"
					},
					{
						"id": "410325",
						"pid": 4103,
						"deep": 2,
						"name": "嵩县",
						"pinyin": "song xian",
						"pinyin_prefix": "s",
						"ext_id": "410325000000",
						"ext_name": "嵩县"
					},
					{
						"id": "410326",
						"pid": 4103,
						"deep": 2,
						"name": "汝阳",
						"pinyin": "ru yang",
						"pinyin_prefix": "r",
						"ext_id": "410326000000",
						"ext_name": "汝阳县"
					},
					{
						"id": "410327",
						"pid": 4103,
						"deep": 2,
						"name": "宜阳",
						"pinyin": "yi yang",
						"pinyin_prefix": "y",
						"ext_id": "410327000000",
						"ext_name": "宜阳县"
					},
					{
						"id": "410328",
						"pid": 4103,
						"deep": 2,
						"name": "洛宁",
						"pinyin": "luo ning",
						"pinyin_prefix": "l",
						"ext_id": "410328000000",
						"ext_name": "洛宁县"
					},
					{
						"id": "410329",
						"pid": 4103,
						"deep": 2,
						"name": "伊川",
						"pinyin": "yi chuan",
						"pinyin_prefix": "y",
						"ext_id": "410329000000",
						"ext_name": "伊川县"
					}
				]
			},
			{
				"id": "4104",
				"pid": 41,
				"deep": 1,
				"name": "平顶山",
				"pinyin": "ping ding shan",
				"pinyin_prefix": "p",
				"ext_id": "410400000000",
				"ext_name": "平顶山市",
				"childs": [
					{
						"id": "410402",
						"pid": 4104,
						"deep": 2,
						"name": "新华",
						"pinyin": "xin hua",
						"pinyin_prefix": "x",
						"ext_id": "410402000000",
						"ext_name": "新华区"
					},
					{
						"id": "410403",
						"pid": 4104,
						"deep": 2,
						"name": "卫东",
						"pinyin": "wei dong",
						"pinyin_prefix": "w",
						"ext_id": "410403000000",
						"ext_name": "卫东区"
					},
					{
						"id": "410404",
						"pid": 4104,
						"deep": 2,
						"name": "石龙",
						"pinyin": "shi long",
						"pinyin_prefix": "s",
						"ext_id": "410404000000",
						"ext_name": "石龙区"
					},
					{
						"id": "410411",
						"pid": 4104,
						"deep": 2,
						"name": "湛河",
						"pinyin": "zhan he",
						"pinyin_prefix": "z",
						"ext_id": "410411000000",
						"ext_name": "湛河区"
					},
					{
						"id": "410421",
						"pid": 4104,
						"deep": 2,
						"name": "宝丰",
						"pinyin": "bao feng",
						"pinyin_prefix": "b",
						"ext_id": "410421000000",
						"ext_name": "宝丰县"
					},
					{
						"id": "410422",
						"pid": 4104,
						"deep": 2,
						"name": "叶县",
						"pinyin": "ye xian",
						"pinyin_prefix": "y",
						"ext_id": "410422000000",
						"ext_name": "叶县"
					},
					{
						"id": "410423",
						"pid": 4104,
						"deep": 2,
						"name": "鲁山",
						"pinyin": "lu shan",
						"pinyin_prefix": "l",
						"ext_id": "410423000000",
						"ext_name": "鲁山县"
					},
					{
						"id": "410425",
						"pid": 4104,
						"deep": 2,
						"name": "郏县",
						"pinyin": "jia xian",
						"pinyin_prefix": "j",
						"ext_id": "410425000000",
						"ext_name": "郏县"
					},
					{
						"id": "410481",
						"pid": 4104,
						"deep": 2,
						"name": "舞钢",
						"pinyin": "wu gang",
						"pinyin_prefix": "w",
						"ext_id": "410481000000",
						"ext_name": "舞钢市"
					},
					{
						"id": "410482",
						"pid": 4104,
						"deep": 2,
						"name": "汝州",
						"pinyin": "ru zhou",
						"pinyin_prefix": "r",
						"ext_id": "410482000000",
						"ext_name": "汝州市"
					}
				]
			},
			{
				"id": "4105",
				"pid": 41,
				"deep": 1,
				"name": "安阳",
				"pinyin": "an yang",
				"pinyin_prefix": "a",
				"ext_id": "410500000000",
				"ext_name": "安阳市",
				"childs": [
					{
						"id": "410502",
						"pid": 4105,
						"deep": 2,
						"name": "文峰",
						"pinyin": "wen feng",
						"pinyin_prefix": "w",
						"ext_id": "410502000000",
						"ext_name": "文峰区"
					},
					{
						"id": "410503",
						"pid": 4105,
						"deep": 2,
						"name": "北关",
						"pinyin": "bei guan",
						"pinyin_prefix": "b",
						"ext_id": "410503000000",
						"ext_name": "北关区"
					},
					{
						"id": "410505",
						"pid": 4105,
						"deep": 2,
						"name": "殷都",
						"pinyin": "yin du",
						"pinyin_prefix": "y",
						"ext_id": "410505000000",
						"ext_name": "殷都区"
					},
					{
						"id": "410506",
						"pid": 4105,
						"deep": 2,
						"name": "龙安",
						"pinyin": "long an",
						"pinyin_prefix": "l",
						"ext_id": "410506000000",
						"ext_name": "龙安区"
					},
					{
						"id": "410522",
						"pid": 4105,
						"deep": 2,
						"name": "安阳县",
						"pinyin": "an yang xian",
						"pinyin_prefix": "a",
						"ext_id": "410522000000",
						"ext_name": "安阳县"
					},
					{
						"id": "410523",
						"pid": 4105,
						"deep": 2,
						"name": "汤阴",
						"pinyin": "tang yin",
						"pinyin_prefix": "t",
						"ext_id": "410523000000",
						"ext_name": "汤阴县"
					},
					{
						"id": "410526",
						"pid": 4105,
						"deep": 2,
						"name": "滑县",
						"pinyin": "hua xian",
						"pinyin_prefix": "h",
						"ext_id": "410526000000",
						"ext_name": "滑县"
					},
					{
						"id": "410527",
						"pid": 4105,
						"deep": 2,
						"name": "内黄",
						"pinyin": "nei huang",
						"pinyin_prefix": "n",
						"ext_id": "410527000000",
						"ext_name": "内黄县"
					},
					{
						"id": "410581",
						"pid": 4105,
						"deep": 2,
						"name": "林州",
						"pinyin": "lin zhou",
						"pinyin_prefix": "l",
						"ext_id": "410581000000",
						"ext_name": "林州市"
					}
				]
			},
			{
				"id": "4106",
				"pid": 41,
				"deep": 1,
				"name": "鹤壁",
				"pinyin": "he bi",
				"pinyin_prefix": "h",
				"ext_id": "410600000000",
				"ext_name": "鹤壁市",
				"childs": [
					{
						"id": "410602",
						"pid": 4106,
						"deep": 2,
						"name": "鹤山",
						"pinyin": "he shan",
						"pinyin_prefix": "h",
						"ext_id": "410602000000",
						"ext_name": "鹤山区"
					},
					{
						"id": "410603",
						"pid": 4106,
						"deep": 2,
						"name": "山城",
						"pinyin": "shan cheng",
						"pinyin_prefix": "s",
						"ext_id": "410603000000",
						"ext_name": "山城区"
					},
					{
						"id": "410611",
						"pid": 4106,
						"deep": 2,
						"name": "淇滨",
						"pinyin": "qi bin",
						"pinyin_prefix": "q",
						"ext_id": "410611000000",
						"ext_name": "淇滨区"
					},
					{
						"id": "410621",
						"pid": 4106,
						"deep": 2,
						"name": "浚县",
						"pinyin": "xun xian",
						"pinyin_prefix": "x",
						"ext_id": "410621000000",
						"ext_name": "浚县"
					},
					{
						"id": "410622",
						"pid": 4106,
						"deep": 2,
						"name": "淇县",
						"pinyin": "qi xian",
						"pinyin_prefix": "q",
						"ext_id": "410622000000",
						"ext_name": "淇县"
					}
				]
			},
			{
				"id": "4107",
				"pid": 41,
				"deep": 1,
				"name": "新乡",
				"pinyin": "xin xiang",
				"pinyin_prefix": "x",
				"ext_id": "410700000000",
				"ext_name": "新乡市",
				"childs": [
					{
						"id": "410702",
						"pid": 4107,
						"deep": 2,
						"name": "红旗",
						"pinyin": "hong qi",
						"pinyin_prefix": "h",
						"ext_id": "410702000000",
						"ext_name": "红旗区"
					},
					{
						"id": "410703",
						"pid": 4107,
						"deep": 2,
						"name": "卫滨",
						"pinyin": "wei bin",
						"pinyin_prefix": "w",
						"ext_id": "410703000000",
						"ext_name": "卫滨区"
					},
					{
						"id": "410704",
						"pid": 4107,
						"deep": 2,
						"name": "凤泉",
						"pinyin": "feng quan",
						"pinyin_prefix": "f",
						"ext_id": "410704000000",
						"ext_name": "凤泉区"
					},
					{
						"id": "410711",
						"pid": 4107,
						"deep": 2,
						"name": "牧野",
						"pinyin": "mu ye",
						"pinyin_prefix": "m",
						"ext_id": "410711000000",
						"ext_name": "牧野区"
					},
					{
						"id": "410721",
						"pid": 4107,
						"deep": 2,
						"name": "新乡县",
						"pinyin": "xin xiang xian",
						"pinyin_prefix": "x",
						"ext_id": "410721000000",
						"ext_name": "新乡县"
					},
					{
						"id": "410724",
						"pid": 4107,
						"deep": 2,
						"name": "获嘉",
						"pinyin": "huo jia",
						"pinyin_prefix": "h",
						"ext_id": "410724000000",
						"ext_name": "获嘉县"
					},
					{
						"id": "410725",
						"pid": 4107,
						"deep": 2,
						"name": "原阳",
						"pinyin": "yuan yang",
						"pinyin_prefix": "y",
						"ext_id": "410725000000",
						"ext_name": "原阳县"
					},
					{
						"id": "410726",
						"pid": 4107,
						"deep": 2,
						"name": "延津",
						"pinyin": "yan jin",
						"pinyin_prefix": "y",
						"ext_id": "410726000000",
						"ext_name": "延津县"
					},
					{
						"id": "410727",
						"pid": 4107,
						"deep": 2,
						"name": "封丘",
						"pinyin": "feng qiu",
						"pinyin_prefix": "f",
						"ext_id": "410727000000",
						"ext_name": "封丘县"
					},
					{
						"id": "410781",
						"pid": 4107,
						"deep": 2,
						"name": "卫辉",
						"pinyin": "wei hui",
						"pinyin_prefix": "w",
						"ext_id": "410781000000",
						"ext_name": "卫辉市"
					},
					{
						"id": "410782",
						"pid": 4107,
						"deep": 2,
						"name": "辉县",
						"pinyin": "hui xian",
						"pinyin_prefix": "h",
						"ext_id": "410782000000",
						"ext_name": "辉县市"
					},
					{
						"id": "410783",
						"pid": 4107,
						"deep": 2,
						"name": "长垣",
						"pinyin": "chang yuan",
						"pinyin_prefix": "c",
						"ext_id": "410783000000",
						"ext_name": "长垣市"
					}
				]
			},
			{
				"id": "4108",
				"pid": 41,
				"deep": 1,
				"name": "焦作",
				"pinyin": "jiao zuo",
				"pinyin_prefix": "j",
				"ext_id": "410800000000",
				"ext_name": "焦作市",
				"childs": [
					{
						"id": "410802",
						"pid": 4108,
						"deep": 2,
						"name": "解放",
						"pinyin": "jie fang",
						"pinyin_prefix": "j",
						"ext_id": "410802000000",
						"ext_name": "解放区"
					},
					{
						"id": "410803",
						"pid": 4108,
						"deep": 2,
						"name": "中站",
						"pinyin": "zhong zhan",
						"pinyin_prefix": "z",
						"ext_id": "410803000000",
						"ext_name": "中站区"
					},
					{
						"id": "410804",
						"pid": 4108,
						"deep": 2,
						"name": "马村",
						"pinyin": "ma cun",
						"pinyin_prefix": "m",
						"ext_id": "410804000000",
						"ext_name": "马村区"
					},
					{
						"id": "410811",
						"pid": 4108,
						"deep": 2,
						"name": "山阳",
						"pinyin": "shan yang",
						"pinyin_prefix": "s",
						"ext_id": "410811000000",
						"ext_name": "山阳区"
					},
					{
						"id": "410821",
						"pid": 4108,
						"deep": 2,
						"name": "修武",
						"pinyin": "xiu wu",
						"pinyin_prefix": "x",
						"ext_id": "410821000000",
						"ext_name": "修武县"
					},
					{
						"id": "410822",
						"pid": 4108,
						"deep": 2,
						"name": "博爱",
						"pinyin": "bo ai",
						"pinyin_prefix": "b",
						"ext_id": "410822000000",
						"ext_name": "博爱县"
					},
					{
						"id": "410823",
						"pid": 4108,
						"deep": 2,
						"name": "武陟",
						"pinyin": "wu zhi",
						"pinyin_prefix": "w",
						"ext_id": "410823000000",
						"ext_name": "武陟县"
					},
					{
						"id": "410825",
						"pid": 4108,
						"deep": 2,
						"name": "温县",
						"pinyin": "wen xian",
						"pinyin_prefix": "w",
						"ext_id": "410825000000",
						"ext_name": "温县"
					},
					{
						"id": "410882",
						"pid": 4108,
						"deep": 2,
						"name": "沁阳",
						"pinyin": "qin yang",
						"pinyin_prefix": "q",
						"ext_id": "410882000000",
						"ext_name": "沁阳市"
					},
					{
						"id": "410883",
						"pid": 4108,
						"deep": 2,
						"name": "孟州",
						"pinyin": "meng zhou",
						"pinyin_prefix": "m",
						"ext_id": "410883000000",
						"ext_name": "孟州市"
					}
				]
			},
			{
				"id": "4109",
				"pid": 41,
				"deep": 1,
				"name": "濮阳",
				"pinyin": "pu yang",
				"pinyin_prefix": "p",
				"ext_id": "410900000000",
				"ext_name": "濮阳市",
				"childs": [
					{
						"id": "410902",
						"pid": 4109,
						"deep": 2,
						"name": "华龙",
						"pinyin": "hua long",
						"pinyin_prefix": "h",
						"ext_id": "410902000000",
						"ext_name": "华龙区"
					},
					{
						"id": "410922",
						"pid": 4109,
						"deep": 2,
						"name": "清丰",
						"pinyin": "qing feng",
						"pinyin_prefix": "q",
						"ext_id": "410922000000",
						"ext_name": "清丰县"
					},
					{
						"id": "410923",
						"pid": 4109,
						"deep": 2,
						"name": "南乐",
						"pinyin": "nan le",
						"pinyin_prefix": "n",
						"ext_id": "410923000000",
						"ext_name": "南乐县"
					},
					{
						"id": "410926",
						"pid": 4109,
						"deep": 2,
						"name": "范县",
						"pinyin": "fan xian",
						"pinyin_prefix": "f",
						"ext_id": "410926000000",
						"ext_name": "范县"
					},
					{
						"id": "410927",
						"pid": 4109,
						"deep": 2,
						"name": "台前",
						"pinyin": "tai qian",
						"pinyin_prefix": "t",
						"ext_id": "410927000000",
						"ext_name": "台前县"
					},
					{
						"id": "410928",
						"pid": 4109,
						"deep": 2,
						"name": "濮阳县",
						"pinyin": "pu yang xian",
						"pinyin_prefix": "p",
						"ext_id": "410928000000",
						"ext_name": "濮阳县"
					}
				]
			},
			{
				"id": "4110",
				"pid": 41,
				"deep": 1,
				"name": "许昌",
				"pinyin": "xu chang",
				"pinyin_prefix": "x",
				"ext_id": "411000000000",
				"ext_name": "许昌市",
				"childs": [
					{
						"id": "411002",
						"pid": 4110,
						"deep": 2,
						"name": "魏都",
						"pinyin": "wei du",
						"pinyin_prefix": "w",
						"ext_id": "411002000000",
						"ext_name": "魏都区"
					},
					{
						"id": "411003",
						"pid": 4110,
						"deep": 2,
						"name": "建安",
						"pinyin": "jian an",
						"pinyin_prefix": "j",
						"ext_id": "411003000000",
						"ext_name": "建安区"
					},
					{
						"id": "411024",
						"pid": 4110,
						"deep": 2,
						"name": "鄢陵",
						"pinyin": "yan ling",
						"pinyin_prefix": "y",
						"ext_id": "411024000000",
						"ext_name": "鄢陵县"
					},
					{
						"id": "411025",
						"pid": 4110,
						"deep": 2,
						"name": "襄城",
						"pinyin": "xiang cheng",
						"pinyin_prefix": "x",
						"ext_id": "411025000000",
						"ext_name": "襄城县"
					},
					{
						"id": "411081",
						"pid": 4110,
						"deep": 2,
						"name": "禹州",
						"pinyin": "yu zhou",
						"pinyin_prefix": "y",
						"ext_id": "411081000000",
						"ext_name": "禹州市"
					},
					{
						"id": "411082",
						"pid": 4110,
						"deep": 2,
						"name": "长葛",
						"pinyin": "chang ge",
						"pinyin_prefix": "c",
						"ext_id": "411082000000",
						"ext_name": "长葛市"
					}
				]
			},
			{
				"id": "4111",
				"pid": 41,
				"deep": 1,
				"name": "漯河",
				"pinyin": "luo he",
				"pinyin_prefix": "l",
				"ext_id": "411100000000",
				"ext_name": "漯河市",
				"childs": [
					{
						"id": "411102",
						"pid": 4111,
						"deep": 2,
						"name": "源汇",
						"pinyin": "yuan hui",
						"pinyin_prefix": "y",
						"ext_id": "411102000000",
						"ext_name": "源汇区"
					},
					{
						"id": "411103",
						"pid": 4111,
						"deep": 2,
						"name": "郾城",
						"pinyin": "yan cheng",
						"pinyin_prefix": "y",
						"ext_id": "411103000000",
						"ext_name": "郾城区"
					},
					{
						"id": "411104",
						"pid": 4111,
						"deep": 2,
						"name": "召陵",
						"pinyin": "shao ling",
						"pinyin_prefix": "s",
						"ext_id": "411104000000",
						"ext_name": "召陵区"
					},
					{
						"id": "411121",
						"pid": 4111,
						"deep": 2,
						"name": "舞阳",
						"pinyin": "wu yang",
						"pinyin_prefix": "w",
						"ext_id": "411121000000",
						"ext_name": "舞阳县"
					},
					{
						"id": "411122",
						"pid": 4111,
						"deep": 2,
						"name": "临颍",
						"pinyin": "lin ying",
						"pinyin_prefix": "l",
						"ext_id": "411122000000",
						"ext_name": "临颍县"
					}
				]
			},
			{
				"id": "4112",
				"pid": 41,
				"deep": 1,
				"name": "三门峡",
				"pinyin": "san men xia",
				"pinyin_prefix": "s",
				"ext_id": "411200000000",
				"ext_name": "三门峡市",
				"childs": [
					{
						"id": "411202",
						"pid": 4112,
						"deep": 2,
						"name": "湖滨",
						"pinyin": "hu bin",
						"pinyin_prefix": "h",
						"ext_id": "411202000000",
						"ext_name": "湖滨区"
					},
					{
						"id": "411203",
						"pid": 4112,
						"deep": 2,
						"name": "陕州",
						"pinyin": "shan zhou",
						"pinyin_prefix": "s",
						"ext_id": "411203000000",
						"ext_name": "陕州区"
					},
					{
						"id": "411221",
						"pid": 4112,
						"deep": 2,
						"name": "渑池",
						"pinyin": "mian chi",
						"pinyin_prefix": "m",
						"ext_id": "411221000000",
						"ext_name": "渑池县"
					},
					{
						"id": "411224",
						"pid": 4112,
						"deep": 2,
						"name": "卢氏",
						"pinyin": "lu shi",
						"pinyin_prefix": "l",
						"ext_id": "411224000000",
						"ext_name": "卢氏县"
					},
					{
						"id": "411281",
						"pid": 4112,
						"deep": 2,
						"name": "义马",
						"pinyin": "yi ma",
						"pinyin_prefix": "y",
						"ext_id": "411281000000",
						"ext_name": "义马市"
					},
					{
						"id": "411282",
						"pid": 4112,
						"deep": 2,
						"name": "灵宝",
						"pinyin": "ling bao",
						"pinyin_prefix": "l",
						"ext_id": "411282000000",
						"ext_name": "灵宝市"
					}
				]
			},
			{
				"id": "4113",
				"pid": 41,
				"deep": 1,
				"name": "南阳",
				"pinyin": "nan yang",
				"pinyin_prefix": "n",
				"ext_id": "411300000000",
				"ext_name": "南阳市",
				"childs": [
					{
						"id": "411302",
						"pid": 4113,
						"deep": 2,
						"name": "宛城",
						"pinyin": "wan cheng",
						"pinyin_prefix": "w",
						"ext_id": "411302000000",
						"ext_name": "宛城区"
					},
					{
						"id": "411303",
						"pid": 4113,
						"deep": 2,
						"name": "卧龙",
						"pinyin": "wo long",
						"pinyin_prefix": "w",
						"ext_id": "411303000000",
						"ext_name": "卧龙区"
					},
					{
						"id": "411321",
						"pid": 4113,
						"deep": 2,
						"name": "南召",
						"pinyin": "nan zhao",
						"pinyin_prefix": "n",
						"ext_id": "411321000000",
						"ext_name": "南召县"
					},
					{
						"id": "411322",
						"pid": 4113,
						"deep": 2,
						"name": "方城",
						"pinyin": "fang cheng",
						"pinyin_prefix": "f",
						"ext_id": "411322000000",
						"ext_name": "方城县"
					},
					{
						"id": "411323",
						"pid": 4113,
						"deep": 2,
						"name": "西峡",
						"pinyin": "xi xia",
						"pinyin_prefix": "x",
						"ext_id": "411323000000",
						"ext_name": "西峡县"
					},
					{
						"id": "411324",
						"pid": 4113,
						"deep": 2,
						"name": "镇平",
						"pinyin": "zhen ping",
						"pinyin_prefix": "z",
						"ext_id": "411324000000",
						"ext_name": "镇平县"
					},
					{
						"id": "411325",
						"pid": 4113,
						"deep": 2,
						"name": "内乡",
						"pinyin": "nei xiang",
						"pinyin_prefix": "n",
						"ext_id": "411325000000",
						"ext_name": "内乡县"
					},
					{
						"id": "411326",
						"pid": 4113,
						"deep": 2,
						"name": "淅川",
						"pinyin": "xi chuan",
						"pinyin_prefix": "x",
						"ext_id": "411326000000",
						"ext_name": "淅川县"
					},
					{
						"id": "411327",
						"pid": 4113,
						"deep": 2,
						"name": "社旗",
						"pinyin": "she qi",
						"pinyin_prefix": "s",
						"ext_id": "411327000000",
						"ext_name": "社旗县"
					},
					{
						"id": "411328",
						"pid": 4113,
						"deep": 2,
						"name": "唐河",
						"pinyin": "tang he",
						"pinyin_prefix": "t",
						"ext_id": "411328000000",
						"ext_name": "唐河县"
					},
					{
						"id": "411329",
						"pid": 4113,
						"deep": 2,
						"name": "新野",
						"pinyin": "xin ye",
						"pinyin_prefix": "x",
						"ext_id": "411329000000",
						"ext_name": "新野县"
					},
					{
						"id": "411330",
						"pid": 4113,
						"deep": 2,
						"name": "桐柏",
						"pinyin": "tong bai",
						"pinyin_prefix": "t",
						"ext_id": "411330000000",
						"ext_name": "桐柏县"
					},
					{
						"id": "411381",
						"pid": 4113,
						"deep": 2,
						"name": "邓州",
						"pinyin": "deng zhou",
						"pinyin_prefix": "d",
						"ext_id": "411381000000",
						"ext_name": "邓州市"
					}
				]
			},
			{
				"id": "4114",
				"pid": 41,
				"deep": 1,
				"name": "商丘",
				"pinyin": "shang qiu",
				"pinyin_prefix": "s",
				"ext_id": "411400000000",
				"ext_name": "商丘市",
				"childs": [
					{
						"id": "411402",
						"pid": 4114,
						"deep": 2,
						"name": "梁园",
						"pinyin": "liang yuan",
						"pinyin_prefix": "l",
						"ext_id": "411402000000",
						"ext_name": "梁园区"
					},
					{
						"id": "411403",
						"pid": 4114,
						"deep": 2,
						"name": "睢阳",
						"pinyin": "sui yang",
						"pinyin_prefix": "s",
						"ext_id": "411403000000",
						"ext_name": "睢阳区"
					},
					{
						"id": "411421",
						"pid": 4114,
						"deep": 2,
						"name": "民权",
						"pinyin": "min quan",
						"pinyin_prefix": "m",
						"ext_id": "411421000000",
						"ext_name": "民权县"
					},
					{
						"id": "411422",
						"pid": 4114,
						"deep": 2,
						"name": "睢县",
						"pinyin": "sui xian",
						"pinyin_prefix": "s",
						"ext_id": "411422000000",
						"ext_name": "睢县"
					},
					{
						"id": "411423",
						"pid": 4114,
						"deep": 2,
						"name": "宁陵",
						"pinyin": "ning ling",
						"pinyin_prefix": "n",
						"ext_id": "411423000000",
						"ext_name": "宁陵县"
					},
					{
						"id": "411424",
						"pid": 4114,
						"deep": 2,
						"name": "柘城",
						"pinyin": "zhe cheng",
						"pinyin_prefix": "z",
						"ext_id": "411424000000",
						"ext_name": "柘城县"
					},
					{
						"id": "411425",
						"pid": 4114,
						"deep": 2,
						"name": "虞城",
						"pinyin": "yu cheng",
						"pinyin_prefix": "y",
						"ext_id": "411425000000",
						"ext_name": "虞城县"
					},
					{
						"id": "411426",
						"pid": 4114,
						"deep": 2,
						"name": "夏邑",
						"pinyin": "xia yi",
						"pinyin_prefix": "x",
						"ext_id": "411426000000",
						"ext_name": "夏邑县"
					},
					{
						"id": "411481",
						"pid": 4114,
						"deep": 2,
						"name": "永城",
						"pinyin": "yong cheng",
						"pinyin_prefix": "y",
						"ext_id": "411481000000",
						"ext_name": "永城市"
					}
				]
			},
			{
				"id": "4115",
				"pid": 41,
				"deep": 1,
				"name": "信阳",
				"pinyin": "xin yang",
				"pinyin_prefix": "x",
				"ext_id": "411500000000",
				"ext_name": "信阳市",
				"childs": [
					{
						"id": "411502",
						"pid": 4115,
						"deep": 2,
						"name": "浉河",
						"pinyin": "shi he",
						"pinyin_prefix": "s",
						"ext_id": "411502000000",
						"ext_name": "浉河区"
					},
					{
						"id": "411503",
						"pid": 4115,
						"deep": 2,
						"name": "平桥",
						"pinyin": "ping qiao",
						"pinyin_prefix": "p",
						"ext_id": "411503000000",
						"ext_name": "平桥区"
					},
					{
						"id": "411521",
						"pid": 4115,
						"deep": 2,
						"name": "罗山",
						"pinyin": "luo shan",
						"pinyin_prefix": "l",
						"ext_id": "411521000000",
						"ext_name": "罗山县"
					},
					{
						"id": "411522",
						"pid": 4115,
						"deep": 2,
						"name": "光山",
						"pinyin": "guang shan",
						"pinyin_prefix": "g",
						"ext_id": "411522000000",
						"ext_name": "光山县"
					},
					{
						"id": "411523",
						"pid": 4115,
						"deep": 2,
						"name": "新县",
						"pinyin": "xin xian",
						"pinyin_prefix": "x",
						"ext_id": "411523000000",
						"ext_name": "新县"
					},
					{
						"id": "411524",
						"pid": 4115,
						"deep": 2,
						"name": "商城",
						"pinyin": "shang cheng",
						"pinyin_prefix": "s",
						"ext_id": "411524000000",
						"ext_name": "商城县"
					},
					{
						"id": "411525",
						"pid": 4115,
						"deep": 2,
						"name": "固始",
						"pinyin": "gu shi",
						"pinyin_prefix": "g",
						"ext_id": "411525000000",
						"ext_name": "固始县"
					},
					{
						"id": "411526",
						"pid": 4115,
						"deep": 2,
						"name": "潢川",
						"pinyin": "huang chuan",
						"pinyin_prefix": "h",
						"ext_id": "411526000000",
						"ext_name": "潢川县"
					},
					{
						"id": "411527",
						"pid": 4115,
						"deep": 2,
						"name": "淮滨",
						"pinyin": "huai bin",
						"pinyin_prefix": "h",
						"ext_id": "411527000000",
						"ext_name": "淮滨县"
					},
					{
						"id": "411528",
						"pid": 4115,
						"deep": 2,
						"name": "息县",
						"pinyin": "xi xian",
						"pinyin_prefix": "x",
						"ext_id": "411528000000",
						"ext_name": "息县"
					}
				]
			},
			{
				"id": "4116",
				"pid": 41,
				"deep": 1,
				"name": "周口",
				"pinyin": "zhou kou",
				"pinyin_prefix": "z",
				"ext_id": "411600000000",
				"ext_name": "周口市",
				"childs": [
					{
						"id": "411602",
						"pid": 4116,
						"deep": 2,
						"name": "川汇",
						"pinyin": "chuan hui",
						"pinyin_prefix": "c",
						"ext_id": "411602000000",
						"ext_name": "川汇区"
					},
					{
						"id": "411603",
						"pid": 4116,
						"deep": 2,
						"name": "淮阳",
						"pinyin": "huai yang",
						"pinyin_prefix": "h",
						"ext_id": "411603000000",
						"ext_name": "淮阳区"
					},
					{
						"id": "411621",
						"pid": 4116,
						"deep": 2,
						"name": "扶沟",
						"pinyin": "fu gou",
						"pinyin_prefix": "f",
						"ext_id": "411621000000",
						"ext_name": "扶沟县"
					},
					{
						"id": "411622",
						"pid": 4116,
						"deep": 2,
						"name": "西华",
						"pinyin": "xi hua",
						"pinyin_prefix": "x",
						"ext_id": "411622000000",
						"ext_name": "西华县"
					},
					{
						"id": "411623",
						"pid": 4116,
						"deep": 2,
						"name": "商水",
						"pinyin": "shang shui",
						"pinyin_prefix": "s",
						"ext_id": "411623000000",
						"ext_name": "商水县"
					},
					{
						"id": "411624",
						"pid": 4116,
						"deep": 2,
						"name": "沈丘",
						"pinyin": "shen qiu",
						"pinyin_prefix": "s",
						"ext_id": "411624000000",
						"ext_name": "沈丘县"
					},
					{
						"id": "411625",
						"pid": 4116,
						"deep": 2,
						"name": "郸城",
						"pinyin": "dan cheng",
						"pinyin_prefix": "d",
						"ext_id": "411625000000",
						"ext_name": "郸城县"
					},
					{
						"id": "411627",
						"pid": 4116,
						"deep": 2,
						"name": "太康",
						"pinyin": "tai kang",
						"pinyin_prefix": "t",
						"ext_id": "411627000000",
						"ext_name": "太康县"
					},
					{
						"id": "411628",
						"pid": 4116,
						"deep": 2,
						"name": "鹿邑",
						"pinyin": "lu yi",
						"pinyin_prefix": "l",
						"ext_id": "411628000000",
						"ext_name": "鹿邑县"
					},
					{
						"id": "411681",
						"pid": 4116,
						"deep": 2,
						"name": "项城",
						"pinyin": "xiang cheng",
						"pinyin_prefix": "x",
						"ext_id": "411681000000",
						"ext_name": "项城市"
					}
				]
			},
			{
				"id": "4117",
				"pid": 41,
				"deep": 1,
				"name": "驻马店",
				"pinyin": "zhu ma dian",
				"pinyin_prefix": "z",
				"ext_id": "411700000000",
				"ext_name": "驻马店市",
				"childs": [
					{
						"id": "411702",
						"pid": 4117,
						"deep": 2,
						"name": "驿城",
						"pinyin": "yi cheng",
						"pinyin_prefix": "y",
						"ext_id": "411702000000",
						"ext_name": "驿城区"
					},
					{
						"id": "411721",
						"pid": 4117,
						"deep": 2,
						"name": "西平",
						"pinyin": "xi ping",
						"pinyin_prefix": "x",
						"ext_id": "411721000000",
						"ext_name": "西平县"
					},
					{
						"id": "411722",
						"pid": 4117,
						"deep": 2,
						"name": "上蔡",
						"pinyin": "shang cai",
						"pinyin_prefix": "s",
						"ext_id": "411722000000",
						"ext_name": "上蔡县"
					},
					{
						"id": "411723",
						"pid": 4117,
						"deep": 2,
						"name": "平舆",
						"pinyin": "ping yu",
						"pinyin_prefix": "p",
						"ext_id": "411723000000",
						"ext_name": "平舆县"
					},
					{
						"id": "411724",
						"pid": 4117,
						"deep": 2,
						"name": "正阳",
						"pinyin": "zheng yang",
						"pinyin_prefix": "z",
						"ext_id": "411724000000",
						"ext_name": "正阳县"
					},
					{
						"id": "411725",
						"pid": 4117,
						"deep": 2,
						"name": "确山",
						"pinyin": "que shan",
						"pinyin_prefix": "q",
						"ext_id": "411725000000",
						"ext_name": "确山县"
					},
					{
						"id": "411726",
						"pid": 4117,
						"deep": 2,
						"name": "泌阳",
						"pinyin": "bi yang",
						"pinyin_prefix": "b",
						"ext_id": "411726000000",
						"ext_name": "泌阳县"
					},
					{
						"id": "411727",
						"pid": 4117,
						"deep": 2,
						"name": "汝南",
						"pinyin": "ru nan",
						"pinyin_prefix": "r",
						"ext_id": "411727000000",
						"ext_name": "汝南县"
					},
					{
						"id": "411728",
						"pid": 4117,
						"deep": 2,
						"name": "遂平",
						"pinyin": "sui ping",
						"pinyin_prefix": "s",
						"ext_id": "411728000000",
						"ext_name": "遂平县"
					},
					{
						"id": "411729",
						"pid": 4117,
						"deep": 2,
						"name": "新蔡",
						"pinyin": "xin cai",
						"pinyin_prefix": "x",
						"ext_id": "411729000000",
						"ext_name": "新蔡县"
					}
				]
			},
			{
				"id": "419001",
				"pid": 41,
				"deep": 1,
				"name": "济源",
				"pinyin": "ji yuan",
				"pinyin_prefix": "j",
				"ext_id": "419001000000",
				"ext_name": "济源市",
				"childs": [
					{
						"id": "419001000",
						"pid": 419001,
						"deep": 2,
						"name": "济源",
						"pinyin": "ji yuan",
						"pinyin_prefix": "j",
						"ext_id": "419001000000",
						"ext_name": "济源市"
					}
				]
			}
		]
	},
	{
		"id": "42",
		"pid": 0,
		"deep": 0,
		"name": "湖北",
		"pinyin": "hu bei",
		"pinyin_prefix": "h",
		"ext_id": "420000000000",
		"ext_name": "湖北省",
		"childs": [
			{
				"id": "4201",
				"pid": 42,
				"deep": 1,
				"name": "武汉",
				"pinyin": "wu han",
				"pinyin_prefix": "w",
				"ext_id": "420100000000",
				"ext_name": "武汉市",
				"childs": [
					{
						"id": "420102",
						"pid": 4201,
						"deep": 2,
						"name": "江岸",
						"pinyin": "jiang an",
						"pinyin_prefix": "j",
						"ext_id": "420102000000",
						"ext_name": "江岸区"
					},
					{
						"id": "420103",
						"pid": 4201,
						"deep": 2,
						"name": "江汉",
						"pinyin": "jiang han",
						"pinyin_prefix": "j",
						"ext_id": "420103000000",
						"ext_name": "江汉区"
					},
					{
						"id": "420104",
						"pid": 4201,
						"deep": 2,
						"name": "硚口",
						"pinyin": "qiao kou",
						"pinyin_prefix": "q",
						"ext_id": "420104000000",
						"ext_name": "硚口区"
					},
					{
						"id": "420105",
						"pid": 4201,
						"deep": 2,
						"name": "汉阳",
						"pinyin": "han yang",
						"pinyin_prefix": "h",
						"ext_id": "420105000000",
						"ext_name": "汉阳区"
					},
					{
						"id": "420106",
						"pid": 4201,
						"deep": 2,
						"name": "武昌",
						"pinyin": "wu chang",
						"pinyin_prefix": "w",
						"ext_id": "420106000000",
						"ext_name": "武昌区"
					},
					{
						"id": "420107",
						"pid": 4201,
						"deep": 2,
						"name": "青山",
						"pinyin": "qing shan",
						"pinyin_prefix": "q",
						"ext_id": "420107000000",
						"ext_name": "青山区"
					},
					{
						"id": "420111",
						"pid": 4201,
						"deep": 2,
						"name": "洪山",
						"pinyin": "hong shan",
						"pinyin_prefix": "h",
						"ext_id": "420111000000",
						"ext_name": "洪山区"
					},
					{
						"id": "420112",
						"pid": 4201,
						"deep": 2,
						"name": "东西湖",
						"pinyin": "dong xi hu",
						"pinyin_prefix": "d",
						"ext_id": "420112000000",
						"ext_name": "东西湖区"
					},
					{
						"id": "420113",
						"pid": 4201,
						"deep": 2,
						"name": "汉南",
						"pinyin": "han nan",
						"pinyin_prefix": "h",
						"ext_id": "420113000000",
						"ext_name": "汉南区"
					},
					{
						"id": "420114",
						"pid": 4201,
						"deep": 2,
						"name": "蔡甸",
						"pinyin": "cai dian",
						"pinyin_prefix": "c",
						"ext_id": "420114000000",
						"ext_name": "蔡甸区"
					},
					{
						"id": "420115",
						"pid": 4201,
						"deep": 2,
						"name": "江夏",
						"pinyin": "jiang xia",
						"pinyin_prefix": "j",
						"ext_id": "420115000000",
						"ext_name": "江夏区"
					},
					{
						"id": "420116",
						"pid": 4201,
						"deep": 2,
						"name": "黄陂",
						"pinyin": "huang pi",
						"pinyin_prefix": "h",
						"ext_id": "420116000000",
						"ext_name": "黄陂区"
					},
					{
						"id": "420117",
						"pid": 4201,
						"deep": 2,
						"name": "新洲",
						"pinyin": "xin zhou",
						"pinyin_prefix": "x",
						"ext_id": "420117000000",
						"ext_name": "新洲区"
					}
				]
			},
			{
				"id": "4202",
				"pid": 42,
				"deep": 1,
				"name": "黄石",
				"pinyin": "huang shi",
				"pinyin_prefix": "h",
				"ext_id": "420200000000",
				"ext_name": "黄石市",
				"childs": [
					{
						"id": "420202",
						"pid": 4202,
						"deep": 2,
						"name": "黄石港",
						"pinyin": "huang shi gang",
						"pinyin_prefix": "h",
						"ext_id": "420202000000",
						"ext_name": "黄石港区"
					},
					{
						"id": "420203",
						"pid": 4202,
						"deep": 2,
						"name": "西塞山",
						"pinyin": "xi sai shan",
						"pinyin_prefix": "x",
						"ext_id": "420203000000",
						"ext_name": "西塞山区"
					},
					{
						"id": "420204",
						"pid": 4202,
						"deep": 2,
						"name": "下陆",
						"pinyin": "xia lu",
						"pinyin_prefix": "x",
						"ext_id": "420204000000",
						"ext_name": "下陆区"
					},
					{
						"id": "420205",
						"pid": 4202,
						"deep": 2,
						"name": "铁山",
						"pinyin": "tie shan",
						"pinyin_prefix": "t",
						"ext_id": "420205000000",
						"ext_name": "铁山区"
					},
					{
						"id": "420222",
						"pid": 4202,
						"deep": 2,
						"name": "阳新",
						"pinyin": "yang xin",
						"pinyin_prefix": "y",
						"ext_id": "420222000000",
						"ext_name": "阳新县"
					},
					{
						"id": "420281",
						"pid": 4202,
						"deep": 2,
						"name": "大冶",
						"pinyin": "da ye",
						"pinyin_prefix": "d",
						"ext_id": "420281000000",
						"ext_name": "大冶市"
					}
				]
			},
			{
				"id": "4203",
				"pid": 42,
				"deep": 1,
				"name": "十堰",
				"pinyin": "shi yan",
				"pinyin_prefix": "s",
				"ext_id": "420300000000",
				"ext_name": "十堰市",
				"childs": [
					{
						"id": "420302",
						"pid": 4203,
						"deep": 2,
						"name": "茅箭",
						"pinyin": "mao jian",
						"pinyin_prefix": "m",
						"ext_id": "420302000000",
						"ext_name": "茅箭区"
					},
					{
						"id": "420303",
						"pid": 4203,
						"deep": 2,
						"name": "张湾",
						"pinyin": "zhang wan",
						"pinyin_prefix": "z",
						"ext_id": "420303000000",
						"ext_name": "张湾区"
					},
					{
						"id": "420304",
						"pid": 4203,
						"deep": 2,
						"name": "郧阳",
						"pinyin": "yun yang",
						"pinyin_prefix": "y",
						"ext_id": "420304000000",
						"ext_name": "郧阳区"
					},
					{
						"id": "420322",
						"pid": 4203,
						"deep": 2,
						"name": "郧西",
						"pinyin": "yun xi",
						"pinyin_prefix": "y",
						"ext_id": "420322000000",
						"ext_name": "郧西县"
					},
					{
						"id": "420323",
						"pid": 4203,
						"deep": 2,
						"name": "竹山",
						"pinyin": "zhu shan",
						"pinyin_prefix": "z",
						"ext_id": "420323000000",
						"ext_name": "竹山县"
					},
					{
						"id": "420324",
						"pid": 4203,
						"deep": 2,
						"name": "竹溪",
						"pinyin": "zhu xi",
						"pinyin_prefix": "z",
						"ext_id": "420324000000",
						"ext_name": "竹溪县"
					},
					{
						"id": "420325",
						"pid": 4203,
						"deep": 2,
						"name": "房县",
						"pinyin": "fang xian",
						"pinyin_prefix": "f",
						"ext_id": "420325000000",
						"ext_name": "房县"
					},
					{
						"id": "420381",
						"pid": 4203,
						"deep": 2,
						"name": "丹江口",
						"pinyin": "dan jiang kou",
						"pinyin_prefix": "d",
						"ext_id": "420381000000",
						"ext_name": "丹江口市"
					}
				]
			},
			{
				"id": "4205",
				"pid": 42,
				"deep": 1,
				"name": "宜昌",
				"pinyin": "yi chang",
				"pinyin_prefix": "y",
				"ext_id": "420500000000",
				"ext_name": "宜昌市",
				"childs": [
					{
						"id": "420502",
						"pid": 4205,
						"deep": 2,
						"name": "西陵",
						"pinyin": "xi ling",
						"pinyin_prefix": "x",
						"ext_id": "420502000000",
						"ext_name": "西陵区"
					},
					{
						"id": "420503",
						"pid": 4205,
						"deep": 2,
						"name": "伍家岗",
						"pinyin": "wu jia gang",
						"pinyin_prefix": "w",
						"ext_id": "420503000000",
						"ext_name": "伍家岗区"
					},
					{
						"id": "420504",
						"pid": 4205,
						"deep": 2,
						"name": "点军",
						"pinyin": "dian jun",
						"pinyin_prefix": "d",
						"ext_id": "420504000000",
						"ext_name": "点军区"
					},
					{
						"id": "420505",
						"pid": 4205,
						"deep": 2,
						"name": "猇亭",
						"pinyin": "xiao ting",
						"pinyin_prefix": "x",
						"ext_id": "420505000000",
						"ext_name": "猇亭区"
					},
					{
						"id": "420506",
						"pid": 4205,
						"deep": 2,
						"name": "夷陵",
						"pinyin": "yi ling",
						"pinyin_prefix": "y",
						"ext_id": "420506000000",
						"ext_name": "夷陵区"
					},
					{
						"id": "420525",
						"pid": 4205,
						"deep": 2,
						"name": "远安",
						"pinyin": "yuan an",
						"pinyin_prefix": "y",
						"ext_id": "420525000000",
						"ext_name": "远安县"
					},
					{
						"id": "420526",
						"pid": 4205,
						"deep": 2,
						"name": "兴山",
						"pinyin": "xing shan",
						"pinyin_prefix": "x",
						"ext_id": "420526000000",
						"ext_name": "兴山县"
					},
					{
						"id": "420527",
						"pid": 4205,
						"deep": 2,
						"name": "秭归",
						"pinyin": "zi gui",
						"pinyin_prefix": "z",
						"ext_id": "420527000000",
						"ext_name": "秭归县"
					},
					{
						"id": "420528",
						"pid": 4205,
						"deep": 2,
						"name": "长阳",
						"pinyin": "chang yang",
						"pinyin_prefix": "c",
						"ext_id": "420528000000",
						"ext_name": "长阳土家族自治县"
					},
					{
						"id": "420529",
						"pid": 4205,
						"deep": 2,
						"name": "五峰",
						"pinyin": "wu feng",
						"pinyin_prefix": "w",
						"ext_id": "420529000000",
						"ext_name": "五峰土家族自治县"
					},
					{
						"id": "420581",
						"pid": 4205,
						"deep": 2,
						"name": "宜都",
						"pinyin": "yi du",
						"pinyin_prefix": "y",
						"ext_id": "420581000000",
						"ext_name": "宜都市"
					},
					{
						"id": "420582",
						"pid": 4205,
						"deep": 2,
						"name": "当阳",
						"pinyin": "dang yang",
						"pinyin_prefix": "d",
						"ext_id": "420582000000",
						"ext_name": "当阳市"
					},
					{
						"id": "420583",
						"pid": 4205,
						"deep": 2,
						"name": "枝江",
						"pinyin": "zhi jiang",
						"pinyin_prefix": "z",
						"ext_id": "420583000000",
						"ext_name": "枝江市"
					}
				]
			},
			{
				"id": "4206",
				"pid": 42,
				"deep": 1,
				"name": "襄阳",
				"pinyin": "xiang yang",
				"pinyin_prefix": "x",
				"ext_id": "420600000000",
				"ext_name": "襄阳市",
				"childs": [
					{
						"id": "420602",
						"pid": 4206,
						"deep": 2,
						"name": "襄城",
						"pinyin": "xiang cheng",
						"pinyin_prefix": "x",
						"ext_id": "420602000000",
						"ext_name": "襄城区"
					},
					{
						"id": "420606",
						"pid": 4206,
						"deep": 2,
						"name": "樊城",
						"pinyin": "fan cheng",
						"pinyin_prefix": "f",
						"ext_id": "420606000000",
						"ext_name": "樊城区"
					},
					{
						"id": "420607",
						"pid": 4206,
						"deep": 2,
						"name": "襄州",
						"pinyin": "xiang zhou",
						"pinyin_prefix": "x",
						"ext_id": "420607000000",
						"ext_name": "襄州区"
					},
					{
						"id": "420624",
						"pid": 4206,
						"deep": 2,
						"name": "南漳",
						"pinyin": "nan zhang",
						"pinyin_prefix": "n",
						"ext_id": "420624000000",
						"ext_name": "南漳县"
					},
					{
						"id": "420625",
						"pid": 4206,
						"deep": 2,
						"name": "谷城",
						"pinyin": "gu cheng",
						"pinyin_prefix": "g",
						"ext_id": "420625000000",
						"ext_name": "谷城县"
					},
					{
						"id": "420626",
						"pid": 4206,
						"deep": 2,
						"name": "保康",
						"pinyin": "bao kang",
						"pinyin_prefix": "b",
						"ext_id": "420626000000",
						"ext_name": "保康县"
					},
					{
						"id": "420682",
						"pid": 4206,
						"deep": 2,
						"name": "老河口",
						"pinyin": "lao he kou",
						"pinyin_prefix": "l",
						"ext_id": "420682000000",
						"ext_name": "老河口市"
					},
					{
						"id": "420683",
						"pid": 4206,
						"deep": 2,
						"name": "枣阳",
						"pinyin": "zao yang",
						"pinyin_prefix": "z",
						"ext_id": "420683000000",
						"ext_name": "枣阳市"
					},
					{
						"id": "420684",
						"pid": 4206,
						"deep": 2,
						"name": "宜城",
						"pinyin": "yi cheng",
						"pinyin_prefix": "y",
						"ext_id": "420684000000",
						"ext_name": "宜城市"
					}
				]
			},
			{
				"id": "4207",
				"pid": 42,
				"deep": 1,
				"name": "鄂州",
				"pinyin": "e zhou",
				"pinyin_prefix": "e",
				"ext_id": "420700000000",
				"ext_name": "鄂州市",
				"childs": [
					{
						"id": "420702",
						"pid": 4207,
						"deep": 2,
						"name": "梁子湖",
						"pinyin": "liang zi hu",
						"pinyin_prefix": "l",
						"ext_id": "420702000000",
						"ext_name": "梁子湖区"
					},
					{
						"id": "420703",
						"pid": 4207,
						"deep": 2,
						"name": "华容",
						"pinyin": "hua rong",
						"pinyin_prefix": "h",
						"ext_id": "420703000000",
						"ext_name": "华容区"
					},
					{
						"id": "420704",
						"pid": 4207,
						"deep": 2,
						"name": "鄂城",
						"pinyin": "e cheng",
						"pinyin_prefix": "e",
						"ext_id": "420704000000",
						"ext_name": "鄂城区"
					}
				]
			},
			{
				"id": "4208",
				"pid": 42,
				"deep": 1,
				"name": "荆门",
				"pinyin": "jing men",
				"pinyin_prefix": "j",
				"ext_id": "420800000000",
				"ext_name": "荆门市",
				"childs": [
					{
						"id": "420802",
						"pid": 4208,
						"deep": 2,
						"name": "东宝",
						"pinyin": "dong bao",
						"pinyin_prefix": "d",
						"ext_id": "420802000000",
						"ext_name": "东宝区"
					},
					{
						"id": "420804",
						"pid": 4208,
						"deep": 2,
						"name": "掇刀",
						"pinyin": "duo dao",
						"pinyin_prefix": "d",
						"ext_id": "420804000000",
						"ext_name": "掇刀区"
					},
					{
						"id": "420822",
						"pid": 4208,
						"deep": 2,
						"name": "沙洋",
						"pinyin": "sha yang",
						"pinyin_prefix": "s",
						"ext_id": "420822000000",
						"ext_name": "沙洋县"
					},
					{
						"id": "420881",
						"pid": 4208,
						"deep": 2,
						"name": "钟祥",
						"pinyin": "zhong xiang",
						"pinyin_prefix": "z",
						"ext_id": "420881000000",
						"ext_name": "钟祥市"
					},
					{
						"id": "420882",
						"pid": 4208,
						"deep": 2,
						"name": "京山",
						"pinyin": "jing shan",
						"pinyin_prefix": "j",
						"ext_id": "420882000000",
						"ext_name": "京山市"
					}
				]
			},
			{
				"id": "4209",
				"pid": 42,
				"deep": 1,
				"name": "孝感",
				"pinyin": "xiao gan",
				"pinyin_prefix": "x",
				"ext_id": "420900000000",
				"ext_name": "孝感市",
				"childs": [
					{
						"id": "420902",
						"pid": 4209,
						"deep": 2,
						"name": "孝南",
						"pinyin": "xiao nan",
						"pinyin_prefix": "x",
						"ext_id": "420902000000",
						"ext_name": "孝南区"
					},
					{
						"id": "420921",
						"pid": 4209,
						"deep": 2,
						"name": "孝昌",
						"pinyin": "xiao chang",
						"pinyin_prefix": "x",
						"ext_id": "420921000000",
						"ext_name": "孝昌县"
					},
					{
						"id": "420922",
						"pid": 4209,
						"deep": 2,
						"name": "大悟",
						"pinyin": "da wu",
						"pinyin_prefix": "d",
						"ext_id": "420922000000",
						"ext_name": "大悟县"
					},
					{
						"id": "420923",
						"pid": 4209,
						"deep": 2,
						"name": "云梦",
						"pinyin": "yun meng",
						"pinyin_prefix": "y",
						"ext_id": "420923000000",
						"ext_name": "云梦县"
					},
					{
						"id": "420981",
						"pid": 4209,
						"deep": 2,
						"name": "应城",
						"pinyin": "ying cheng",
						"pinyin_prefix": "y",
						"ext_id": "420981000000",
						"ext_name": "应城市"
					},
					{
						"id": "420982",
						"pid": 4209,
						"deep": 2,
						"name": "安陆",
						"pinyin": "an lu",
						"pinyin_prefix": "a",
						"ext_id": "420982000000",
						"ext_name": "安陆市"
					},
					{
						"id": "420984",
						"pid": 4209,
						"deep": 2,
						"name": "汉川",
						"pinyin": "han chuan",
						"pinyin_prefix": "h",
						"ext_id": "420984000000",
						"ext_name": "汉川市"
					}
				]
			},
			{
				"id": "4210",
				"pid": 42,
				"deep": 1,
				"name": "荆州",
				"pinyin": "jing zhou",
				"pinyin_prefix": "j",
				"ext_id": "421000000000",
				"ext_name": "荆州市",
				"childs": [
					{
						"id": "421002",
						"pid": 4210,
						"deep": 2,
						"name": "沙市",
						"pinyin": "sha shi",
						"pinyin_prefix": "s",
						"ext_id": "421002000000",
						"ext_name": "沙市区"
					},
					{
						"id": "421003",
						"pid": 4210,
						"deep": 2,
						"name": "荆州区",
						"pinyin": "jing zhou qu",
						"pinyin_prefix": "j",
						"ext_id": "421003000000",
						"ext_name": "荆州区"
					},
					{
						"id": "421022",
						"pid": 4210,
						"deep": 2,
						"name": "公安",
						"pinyin": "gong an",
						"pinyin_prefix": "g",
						"ext_id": "421022000000",
						"ext_name": "公安县"
					},
					{
						"id": "421024",
						"pid": 4210,
						"deep": 2,
						"name": "江陵",
						"pinyin": "jiang ling",
						"pinyin_prefix": "j",
						"ext_id": "421024000000",
						"ext_name": "江陵县"
					},
					{
						"id": "421081",
						"pid": 4210,
						"deep": 2,
						"name": "石首",
						"pinyin": "shi shou",
						"pinyin_prefix": "s",
						"ext_id": "421081000000",
						"ext_name": "石首市"
					},
					{
						"id": "421083",
						"pid": 4210,
						"deep": 2,
						"name": "洪湖",
						"pinyin": "hong hu",
						"pinyin_prefix": "h",
						"ext_id": "421083000000",
						"ext_name": "洪湖市"
					},
					{
						"id": "421087",
						"pid": 4210,
						"deep": 2,
						"name": "松滋",
						"pinyin": "song zi",
						"pinyin_prefix": "s",
						"ext_id": "421087000000",
						"ext_name": "松滋市"
					},
					{
						"id": "421088",
						"pid": 4210,
						"deep": 2,
						"name": "监利",
						"pinyin": "jian li",
						"pinyin_prefix": "j",
						"ext_id": "421088000000",
						"ext_name": "监利市"
					}
				]
			},
			{
				"id": "4211",
				"pid": 42,
				"deep": 1,
				"name": "黄冈",
				"pinyin": "huang gang",
				"pinyin_prefix": "h",
				"ext_id": "421100000000",
				"ext_name": "黄冈市",
				"childs": [
					{
						"id": "421102",
						"pid": 4211,
						"deep": 2,
						"name": "黄州",
						"pinyin": "huang zhou",
						"pinyin_prefix": "h",
						"ext_id": "421102000000",
						"ext_name": "黄州区"
					},
					{
						"id": "421121",
						"pid": 4211,
						"deep": 2,
						"name": "团风",
						"pinyin": "tuan feng",
						"pinyin_prefix": "t",
						"ext_id": "421121000000",
						"ext_name": "团风县"
					},
					{
						"id": "421122",
						"pid": 4211,
						"deep": 2,
						"name": "红安",
						"pinyin": "hong an",
						"pinyin_prefix": "h",
						"ext_id": "421122000000",
						"ext_name": "红安县"
					},
					{
						"id": "421123",
						"pid": 4211,
						"deep": 2,
						"name": "罗田",
						"pinyin": "luo tian",
						"pinyin_prefix": "l",
						"ext_id": "421123000000",
						"ext_name": "罗田县"
					},
					{
						"id": "421124",
						"pid": 4211,
						"deep": 2,
						"name": "英山",
						"pinyin": "ying shan",
						"pinyin_prefix": "y",
						"ext_id": "421124000000",
						"ext_name": "英山县"
					},
					{
						"id": "421125",
						"pid": 4211,
						"deep": 2,
						"name": "浠水",
						"pinyin": "xi shui",
						"pinyin_prefix": "x",
						"ext_id": "421125000000",
						"ext_name": "浠水县"
					},
					{
						"id": "421126",
						"pid": 4211,
						"deep": 2,
						"name": "蕲春",
						"pinyin": "qi chun",
						"pinyin_prefix": "q",
						"ext_id": "421126000000",
						"ext_name": "蕲春县"
					},
					{
						"id": "421127",
						"pid": 4211,
						"deep": 2,
						"name": "黄梅",
						"pinyin": "huang mei",
						"pinyin_prefix": "h",
						"ext_id": "421127000000",
						"ext_name": "黄梅县"
					},
					{
						"id": "421181",
						"pid": 4211,
						"deep": 2,
						"name": "麻城",
						"pinyin": "ma cheng",
						"pinyin_prefix": "m",
						"ext_id": "421181000000",
						"ext_name": "麻城市"
					},
					{
						"id": "421182",
						"pid": 4211,
						"deep": 2,
						"name": "武穴",
						"pinyin": "wu xue",
						"pinyin_prefix": "w",
						"ext_id": "421182000000",
						"ext_name": "武穴市"
					}
				]
			},
			{
				"id": "4212",
				"pid": 42,
				"deep": 1,
				"name": "咸宁",
				"pinyin": "xian ning",
				"pinyin_prefix": "x",
				"ext_id": "421200000000",
				"ext_name": "咸宁市",
				"childs": [
					{
						"id": "421202",
						"pid": 4212,
						"deep": 2,
						"name": "咸安",
						"pinyin": "xian an",
						"pinyin_prefix": "x",
						"ext_id": "421202000000",
						"ext_name": "咸安区"
					},
					{
						"id": "421221",
						"pid": 4212,
						"deep": 2,
						"name": "嘉鱼",
						"pinyin": "jia yu",
						"pinyin_prefix": "j",
						"ext_id": "421221000000",
						"ext_name": "嘉鱼县"
					},
					{
						"id": "421222",
						"pid": 4212,
						"deep": 2,
						"name": "通城",
						"pinyin": "tong cheng",
						"pinyin_prefix": "t",
						"ext_id": "421222000000",
						"ext_name": "通城县"
					},
					{
						"id": "421223",
						"pid": 4212,
						"deep": 2,
						"name": "崇阳",
						"pinyin": "chong yang",
						"pinyin_prefix": "c",
						"ext_id": "421223000000",
						"ext_name": "崇阳县"
					},
					{
						"id": "421224",
						"pid": 4212,
						"deep": 2,
						"name": "通山",
						"pinyin": "tong shan",
						"pinyin_prefix": "t",
						"ext_id": "421224000000",
						"ext_name": "通山县"
					},
					{
						"id": "421281",
						"pid": 4212,
						"deep": 2,
						"name": "赤壁",
						"pinyin": "chi bi",
						"pinyin_prefix": "c",
						"ext_id": "421281000000",
						"ext_name": "赤壁市"
					}
				]
			},
			{
				"id": "4213",
				"pid": 42,
				"deep": 1,
				"name": "随州",
				"pinyin": "sui zhou",
				"pinyin_prefix": "s",
				"ext_id": "421300000000",
				"ext_name": "随州市",
				"childs": [
					{
						"id": "421303",
						"pid": 4213,
						"deep": 2,
						"name": "曾都",
						"pinyin": "zeng du",
						"pinyin_prefix": "z",
						"ext_id": "421303000000",
						"ext_name": "曾都区"
					},
					{
						"id": "421321",
						"pid": 4213,
						"deep": 2,
						"name": "随县",
						"pinyin": "sui xian",
						"pinyin_prefix": "s",
						"ext_id": "421321000000",
						"ext_name": "随县"
					},
					{
						"id": "421381",
						"pid": 4213,
						"deep": 2,
						"name": "广水",
						"pinyin": "guang shui",
						"pinyin_prefix": "g",
						"ext_id": "421381000000",
						"ext_name": "广水市"
					}
				]
			},
			{
				"id": "4228",
				"pid": 42,
				"deep": 1,
				"name": "恩施",
				"pinyin": "en shi",
				"pinyin_prefix": "e",
				"ext_id": "422800000000",
				"ext_name": "恩施土家族苗族自治州",
				"childs": [
					{
						"id": "422801",
						"pid": 4228,
						"deep": 2,
						"name": "恩施市",
						"pinyin": "en shi shi",
						"pinyin_prefix": "e",
						"ext_id": "422801000000",
						"ext_name": "恩施市"
					},
					{
						"id": "422802",
						"pid": 4228,
						"deep": 2,
						"name": "利川",
						"pinyin": "li chuan",
						"pinyin_prefix": "l",
						"ext_id": "422802000000",
						"ext_name": "利川市"
					},
					{
						"id": "422822",
						"pid": 4228,
						"deep": 2,
						"name": "建始",
						"pinyin": "jian shi",
						"pinyin_prefix": "j",
						"ext_id": "422822000000",
						"ext_name": "建始县"
					},
					{
						"id": "422823",
						"pid": 4228,
						"deep": 2,
						"name": "巴东",
						"pinyin": "ba dong",
						"pinyin_prefix": "b",
						"ext_id": "422823000000",
						"ext_name": "巴东县"
					},
					{
						"id": "422825",
						"pid": 4228,
						"deep": 2,
						"name": "宣恩",
						"pinyin": "xuan en",
						"pinyin_prefix": "x",
						"ext_id": "422825000000",
						"ext_name": "宣恩县"
					},
					{
						"id": "422826",
						"pid": 4228,
						"deep": 2,
						"name": "咸丰",
						"pinyin": "xian feng",
						"pinyin_prefix": "x",
						"ext_id": "422826000000",
						"ext_name": "咸丰县"
					},
					{
						"id": "422827",
						"pid": 4228,
						"deep": 2,
						"name": "来凤",
						"pinyin": "lai feng",
						"pinyin_prefix": "l",
						"ext_id": "422827000000",
						"ext_name": "来凤县"
					},
					{
						"id": "422828",
						"pid": 4228,
						"deep": 2,
						"name": "鹤峰",
						"pinyin": "he feng",
						"pinyin_prefix": "h",
						"ext_id": "422828000000",
						"ext_name": "鹤峰县"
					}
				]
			},
			{
				"id": "429004",
				"pid": 42,
				"deep": 1,
				"name": "仙桃",
				"pinyin": "xian tao",
				"pinyin_prefix": "x",
				"ext_id": "429004000000",
				"ext_name": "仙桃市",
				"childs": [
					{
						"id": "429004000",
						"pid": 429004,
						"deep": 2,
						"name": "仙桃",
						"pinyin": "xian tao",
						"pinyin_prefix": "x",
						"ext_id": "429004000000",
						"ext_name": "仙桃市"
					}
				]
			},
			{
				"id": "429005",
				"pid": 42,
				"deep": 1,
				"name": "潜江",
				"pinyin": "qian jiang",
				"pinyin_prefix": "q",
				"ext_id": "429005000000",
				"ext_name": "潜江市",
				"childs": [
					{
						"id": "429005000",
						"pid": 429005,
						"deep": 2,
						"name": "潜江",
						"pinyin": "qian jiang",
						"pinyin_prefix": "q",
						"ext_id": "429005000000",
						"ext_name": "潜江市"
					}
				]
			},
			{
				"id": "429006",
				"pid": 42,
				"deep": 1,
				"name": "天门",
				"pinyin": "tian men",
				"pinyin_prefix": "t",
				"ext_id": "429006000000",
				"ext_name": "天门市",
				"childs": [
					{
						"id": "429006000",
						"pid": 429006,
						"deep": 2,
						"name": "天门",
						"pinyin": "tian men",
						"pinyin_prefix": "t",
						"ext_id": "429006000000",
						"ext_name": "天门市"
					}
				]
			},
			{
				"id": "429021",
				"pid": 42,
				"deep": 1,
				"name": "神农架",
				"pinyin": "shen nong jia",
				"pinyin_prefix": "s",
				"ext_id": "429021000000",
				"ext_name": "神农架林区",
				"childs": [
					{
						"id": "429021000",
						"pid": 429021,
						"deep": 2,
						"name": "神农架林区",
						"pinyin": "shen nong jia lin qu",
						"pinyin_prefix": "s",
						"ext_id": "429021000000",
						"ext_name": "神农架林区"
					}
				]
			}
		]
	},
	{
		"id": "43",
		"pid": 0,
		"deep": 0,
		"name": "湖南",
		"pinyin": "hu nan",
		"pinyin_prefix": "h",
		"ext_id": "430000000000",
		"ext_name": "湖南省",
		"childs": [
			{
				"id": "4301",
				"pid": 43,
				"deep": 1,
				"name": "长沙",
				"pinyin": "chang sha",
				"pinyin_prefix": "c",
				"ext_id": "430100000000",
				"ext_name": "长沙市",
				"childs": [
					{
						"id": "430102",
						"pid": 4301,
						"deep": 2,
						"name": "芙蓉",
						"pinyin": "fu rong",
						"pinyin_prefix": "f",
						"ext_id": "430102000000",
						"ext_name": "芙蓉区"
					},
					{
						"id": "430103",
						"pid": 4301,
						"deep": 2,
						"name": "天心",
						"pinyin": "tian xin",
						"pinyin_prefix": "t",
						"ext_id": "430103000000",
						"ext_name": "天心区"
					},
					{
						"id": "430104",
						"pid": 4301,
						"deep": 2,
						"name": "岳麓",
						"pinyin": "yue lu",
						"pinyin_prefix": "y",
						"ext_id": "430104000000",
						"ext_name": "岳麓区"
					},
					{
						"id": "430105",
						"pid": 4301,
						"deep": 2,
						"name": "开福",
						"pinyin": "kai fu",
						"pinyin_prefix": "k",
						"ext_id": "430105000000",
						"ext_name": "开福区"
					},
					{
						"id": "430111",
						"pid": 4301,
						"deep": 2,
						"name": "雨花",
						"pinyin": "yu hua",
						"pinyin_prefix": "y",
						"ext_id": "430111000000",
						"ext_name": "雨花区"
					},
					{
						"id": "430112",
						"pid": 4301,
						"deep": 2,
						"name": "望城",
						"pinyin": "wang cheng",
						"pinyin_prefix": "w",
						"ext_id": "430112000000",
						"ext_name": "望城区"
					},
					{
						"id": "430121",
						"pid": 4301,
						"deep": 2,
						"name": "长沙县",
						"pinyin": "chang sha xian",
						"pinyin_prefix": "c",
						"ext_id": "430121000000",
						"ext_name": "长沙县"
					},
					{
						"id": "430181",
						"pid": 4301,
						"deep": 2,
						"name": "浏阳",
						"pinyin": "liu yang",
						"pinyin_prefix": "l",
						"ext_id": "430181000000",
						"ext_name": "浏阳市"
					},
					{
						"id": "430182",
						"pid": 4301,
						"deep": 2,
						"name": "宁乡",
						"pinyin": "ning xiang",
						"pinyin_prefix": "n",
						"ext_id": "430182000000",
						"ext_name": "宁乡市"
					}
				]
			},
			{
				"id": "4302",
				"pid": 43,
				"deep": 1,
				"name": "株洲",
				"pinyin": "zhu zhou",
				"pinyin_prefix": "z",
				"ext_id": "430200000000",
				"ext_name": "株洲市",
				"childs": [
					{
						"id": "430202",
						"pid": 4302,
						"deep": 2,
						"name": "荷塘",
						"pinyin": "he tang",
						"pinyin_prefix": "h",
						"ext_id": "430202000000",
						"ext_name": "荷塘区"
					},
					{
						"id": "430203",
						"pid": 4302,
						"deep": 2,
						"name": "芦淞",
						"pinyin": "lu song",
						"pinyin_prefix": "l",
						"ext_id": "430203000000",
						"ext_name": "芦淞区"
					},
					{
						"id": "430204",
						"pid": 4302,
						"deep": 2,
						"name": "石峰",
						"pinyin": "shi feng",
						"pinyin_prefix": "s",
						"ext_id": "430204000000",
						"ext_name": "石峰区"
					},
					{
						"id": "430211",
						"pid": 4302,
						"deep": 2,
						"name": "天元",
						"pinyin": "tian yuan",
						"pinyin_prefix": "t",
						"ext_id": "430211000000",
						"ext_name": "天元区"
					},
					{
						"id": "430212",
						"pid": 4302,
						"deep": 2,
						"name": "渌口",
						"pinyin": "lu kou",
						"pinyin_prefix": "l",
						"ext_id": "430212000000",
						"ext_name": "渌口区"
					},
					{
						"id": "430223",
						"pid": 4302,
						"deep": 2,
						"name": "攸县",
						"pinyin": "you xian",
						"pinyin_prefix": "y",
						"ext_id": "430223000000",
						"ext_name": "攸县"
					},
					{
						"id": "430224",
						"pid": 4302,
						"deep": 2,
						"name": "茶陵",
						"pinyin": "cha ling",
						"pinyin_prefix": "c",
						"ext_id": "430224000000",
						"ext_name": "茶陵县"
					},
					{
						"id": "430225",
						"pid": 4302,
						"deep": 2,
						"name": "炎陵",
						"pinyin": "yan ling",
						"pinyin_prefix": "y",
						"ext_id": "430225000000",
						"ext_name": "炎陵县"
					},
					{
						"id": "430281",
						"pid": 4302,
						"deep": 2,
						"name": "醴陵",
						"pinyin": "li ling",
						"pinyin_prefix": "l",
						"ext_id": "430281000000",
						"ext_name": "醴陵市"
					}
				]
			},
			{
				"id": "4303",
				"pid": 43,
				"deep": 1,
				"name": "湘潭",
				"pinyin": "xiang tan",
				"pinyin_prefix": "x",
				"ext_id": "430300000000",
				"ext_name": "湘潭市",
				"childs": [
					{
						"id": "430302",
						"pid": 4303,
						"deep": 2,
						"name": "雨湖",
						"pinyin": "yu hu",
						"pinyin_prefix": "y",
						"ext_id": "430302000000",
						"ext_name": "雨湖区"
					},
					{
						"id": "430304",
						"pid": 4303,
						"deep": 2,
						"name": "岳塘",
						"pinyin": "yue tang",
						"pinyin_prefix": "y",
						"ext_id": "430304000000",
						"ext_name": "岳塘区"
					},
					{
						"id": "430321",
						"pid": 4303,
						"deep": 2,
						"name": "湘潭县",
						"pinyin": "xiang tan xian",
						"pinyin_prefix": "x",
						"ext_id": "430321000000",
						"ext_name": "湘潭县"
					},
					{
						"id": "430381",
						"pid": 4303,
						"deep": 2,
						"name": "湘乡",
						"pinyin": "xiang xiang",
						"pinyin_prefix": "x",
						"ext_id": "430381000000",
						"ext_name": "湘乡市"
					},
					{
						"id": "430382",
						"pid": 4303,
						"deep": 2,
						"name": "韶山",
						"pinyin": "shao shan",
						"pinyin_prefix": "s",
						"ext_id": "430382000000",
						"ext_name": "韶山市"
					}
				]
			},
			{
				"id": "4304",
				"pid": 43,
				"deep": 1,
				"name": "衡阳",
				"pinyin": "heng yang",
				"pinyin_prefix": "h",
				"ext_id": "430400000000",
				"ext_name": "衡阳市",
				"childs": [
					{
						"id": "430405",
						"pid": 4304,
						"deep": 2,
						"name": "珠晖",
						"pinyin": "zhu hui",
						"pinyin_prefix": "z",
						"ext_id": "430405000000",
						"ext_name": "珠晖区"
					},
					{
						"id": "430406",
						"pid": 4304,
						"deep": 2,
						"name": "雁峰",
						"pinyin": "yan feng",
						"pinyin_prefix": "y",
						"ext_id": "430406000000",
						"ext_name": "雁峰区"
					},
					{
						"id": "430407",
						"pid": 4304,
						"deep": 2,
						"name": "石鼓",
						"pinyin": "shi gu",
						"pinyin_prefix": "s",
						"ext_id": "430407000000",
						"ext_name": "石鼓区"
					},
					{
						"id": "430408",
						"pid": 4304,
						"deep": 2,
						"name": "蒸湘",
						"pinyin": "zheng xiang",
						"pinyin_prefix": "z",
						"ext_id": "430408000000",
						"ext_name": "蒸湘区"
					},
					{
						"id": "430412",
						"pid": 4304,
						"deep": 2,
						"name": "南岳",
						"pinyin": "nan yue",
						"pinyin_prefix": "n",
						"ext_id": "430412000000",
						"ext_name": "南岳区"
					},
					{
						"id": "430421",
						"pid": 4304,
						"deep": 2,
						"name": "衡阳县",
						"pinyin": "heng yang xian",
						"pinyin_prefix": "h",
						"ext_id": "430421000000",
						"ext_name": "衡阳县"
					},
					{
						"id": "430422",
						"pid": 4304,
						"deep": 2,
						"name": "衡南",
						"pinyin": "heng nan",
						"pinyin_prefix": "h",
						"ext_id": "430422000000",
						"ext_name": "衡南县"
					},
					{
						"id": "430423",
						"pid": 4304,
						"deep": 2,
						"name": "衡山",
						"pinyin": "heng shan",
						"pinyin_prefix": "h",
						"ext_id": "430423000000",
						"ext_name": "衡山县"
					},
					{
						"id": "430424",
						"pid": 4304,
						"deep": 2,
						"name": "衡东",
						"pinyin": "heng dong",
						"pinyin_prefix": "h",
						"ext_id": "430424000000",
						"ext_name": "衡东县"
					},
					{
						"id": "430426",
						"pid": 4304,
						"deep": 2,
						"name": "祁东",
						"pinyin": "qi dong",
						"pinyin_prefix": "q",
						"ext_id": "430426000000",
						"ext_name": "祁东县"
					},
					{
						"id": "430481",
						"pid": 4304,
						"deep": 2,
						"name": "耒阳",
						"pinyin": "lei yang",
						"pinyin_prefix": "l",
						"ext_id": "430481000000",
						"ext_name": "耒阳市"
					},
					{
						"id": "430482",
						"pid": 4304,
						"deep": 2,
						"name": "常宁",
						"pinyin": "chang ning",
						"pinyin_prefix": "c",
						"ext_id": "430482000000",
						"ext_name": "常宁市"
					}
				]
			},
			{
				"id": "4305",
				"pid": 43,
				"deep": 1,
				"name": "邵阳",
				"pinyin": "shao yang",
				"pinyin_prefix": "s",
				"ext_id": "430500000000",
				"ext_name": "邵阳市",
				"childs": [
					{
						"id": "430502",
						"pid": 4305,
						"deep": 2,
						"name": "双清",
						"pinyin": "shuang qing",
						"pinyin_prefix": "s",
						"ext_id": "430502000000",
						"ext_name": "双清区"
					},
					{
						"id": "430503",
						"pid": 4305,
						"deep": 2,
						"name": "大祥",
						"pinyin": "da xiang",
						"pinyin_prefix": "d",
						"ext_id": "430503000000",
						"ext_name": "大祥区"
					},
					{
						"id": "430511",
						"pid": 4305,
						"deep": 2,
						"name": "北塔",
						"pinyin": "bei ta",
						"pinyin_prefix": "b",
						"ext_id": "430511000000",
						"ext_name": "北塔区"
					},
					{
						"id": "430522",
						"pid": 4305,
						"deep": 2,
						"name": "新邵",
						"pinyin": "xin shao",
						"pinyin_prefix": "x",
						"ext_id": "430522000000",
						"ext_name": "新邵县"
					},
					{
						"id": "430523",
						"pid": 4305,
						"deep": 2,
						"name": "邵阳县",
						"pinyin": "shao yang xian",
						"pinyin_prefix": "s",
						"ext_id": "430523000000",
						"ext_name": "邵阳县"
					},
					{
						"id": "430524",
						"pid": 4305,
						"deep": 2,
						"name": "隆回",
						"pinyin": "long hui",
						"pinyin_prefix": "l",
						"ext_id": "430524000000",
						"ext_name": "隆回县"
					},
					{
						"id": "430525",
						"pid": 4305,
						"deep": 2,
						"name": "洞口",
						"pinyin": "dong kou",
						"pinyin_prefix": "d",
						"ext_id": "430525000000",
						"ext_name": "洞口县"
					},
					{
						"id": "430527",
						"pid": 4305,
						"deep": 2,
						"name": "绥宁",
						"pinyin": "sui ning",
						"pinyin_prefix": "s",
						"ext_id": "430527000000",
						"ext_name": "绥宁县"
					},
					{
						"id": "430528",
						"pid": 4305,
						"deep": 2,
						"name": "新宁",
						"pinyin": "xin ning",
						"pinyin_prefix": "x",
						"ext_id": "430528000000",
						"ext_name": "新宁县"
					},
					{
						"id": "430529",
						"pid": 4305,
						"deep": 2,
						"name": "城步",
						"pinyin": "cheng bu",
						"pinyin_prefix": "c",
						"ext_id": "430529000000",
						"ext_name": "城步苗族自治县"
					},
					{
						"id": "430581",
						"pid": 4305,
						"deep": 2,
						"name": "武冈",
						"pinyin": "wu gang",
						"pinyin_prefix": "w",
						"ext_id": "430581000000",
						"ext_name": "武冈市"
					},
					{
						"id": "430582",
						"pid": 4305,
						"deep": 2,
						"name": "邵东",
						"pinyin": "shao dong",
						"pinyin_prefix": "s",
						"ext_id": "430582000000",
						"ext_name": "邵东市"
					}
				]
			},
			{
				"id": "4306",
				"pid": 43,
				"deep": 1,
				"name": "岳阳",
				"pinyin": "yue yang",
				"pinyin_prefix": "y",
				"ext_id": "430600000000",
				"ext_name": "岳阳市",
				"childs": [
					{
						"id": "430602",
						"pid": 4306,
						"deep": 2,
						"name": "岳阳楼",
						"pinyin": "yue yang lou",
						"pinyin_prefix": "y",
						"ext_id": "430602000000",
						"ext_name": "岳阳楼区"
					},
					{
						"id": "430603",
						"pid": 4306,
						"deep": 2,
						"name": "云溪",
						"pinyin": "yun xi",
						"pinyin_prefix": "y",
						"ext_id": "430603000000",
						"ext_name": "云溪区"
					},
					{
						"id": "430611",
						"pid": 4306,
						"deep": 2,
						"name": "君山",
						"pinyin": "jun shan",
						"pinyin_prefix": "j",
						"ext_id": "430611000000",
						"ext_name": "君山区"
					},
					{
						"id": "430621",
						"pid": 4306,
						"deep": 2,
						"name": "岳阳县",
						"pinyin": "yue yang xian",
						"pinyin_prefix": "y",
						"ext_id": "430621000000",
						"ext_name": "岳阳县"
					},
					{
						"id": "430623",
						"pid": 4306,
						"deep": 2,
						"name": "华容",
						"pinyin": "hua rong",
						"pinyin_prefix": "h",
						"ext_id": "430623000000",
						"ext_name": "华容县"
					},
					{
						"id": "430624",
						"pid": 4306,
						"deep": 2,
						"name": "湘阴",
						"pinyin": "xiang yin",
						"pinyin_prefix": "x",
						"ext_id": "430624000000",
						"ext_name": "湘阴县"
					},
					{
						"id": "430626",
						"pid": 4306,
						"deep": 2,
						"name": "平江",
						"pinyin": "ping jiang",
						"pinyin_prefix": "p",
						"ext_id": "430626000000",
						"ext_name": "平江县"
					},
					{
						"id": "430681",
						"pid": 4306,
						"deep": 2,
						"name": "汨罗",
						"pinyin": "mi luo",
						"pinyin_prefix": "m",
						"ext_id": "430681000000",
						"ext_name": "汨罗市"
					},
					{
						"id": "430682",
						"pid": 4306,
						"deep": 2,
						"name": "临湘",
						"pinyin": "lin xiang",
						"pinyin_prefix": "l",
						"ext_id": "430682000000",
						"ext_name": "临湘市"
					}
				]
			},
			{
				"id": "4307",
				"pid": 43,
				"deep": 1,
				"name": "常德",
				"pinyin": "chang de",
				"pinyin_prefix": "c",
				"ext_id": "430700000000",
				"ext_name": "常德市",
				"childs": [
					{
						"id": "430702",
						"pid": 4307,
						"deep": 2,
						"name": "武陵",
						"pinyin": "wu ling",
						"pinyin_prefix": "w",
						"ext_id": "430702000000",
						"ext_name": "武陵区"
					},
					{
						"id": "430703",
						"pid": 4307,
						"deep": 2,
						"name": "鼎城",
						"pinyin": "ding cheng",
						"pinyin_prefix": "d",
						"ext_id": "430703000000",
						"ext_name": "鼎城区"
					},
					{
						"id": "430721",
						"pid": 4307,
						"deep": 2,
						"name": "安乡",
						"pinyin": "an xiang",
						"pinyin_prefix": "a",
						"ext_id": "430721000000",
						"ext_name": "安乡县"
					},
					{
						"id": "430722",
						"pid": 4307,
						"deep": 2,
						"name": "汉寿",
						"pinyin": "han shou",
						"pinyin_prefix": "h",
						"ext_id": "430722000000",
						"ext_name": "汉寿县"
					},
					{
						"id": "430723",
						"pid": 4307,
						"deep": 2,
						"name": "澧县",
						"pinyin": "li xian",
						"pinyin_prefix": "l",
						"ext_id": "430723000000",
						"ext_name": "澧县"
					},
					{
						"id": "430724",
						"pid": 4307,
						"deep": 2,
						"name": "临澧",
						"pinyin": "lin li",
						"pinyin_prefix": "l",
						"ext_id": "430724000000",
						"ext_name": "临澧县"
					},
					{
						"id": "430725",
						"pid": 4307,
						"deep": 2,
						"name": "桃源",
						"pinyin": "tao yuan",
						"pinyin_prefix": "t",
						"ext_id": "430725000000",
						"ext_name": "桃源县"
					},
					{
						"id": "430726",
						"pid": 4307,
						"deep": 2,
						"name": "石门",
						"pinyin": "shi men",
						"pinyin_prefix": "s",
						"ext_id": "430726000000",
						"ext_name": "石门县"
					},
					{
						"id": "430781",
						"pid": 4307,
						"deep": 2,
						"name": "津市",
						"pinyin": "jin shi",
						"pinyin_prefix": "j",
						"ext_id": "430781000000",
						"ext_name": "津市市"
					}
				]
			},
			{
				"id": "4308",
				"pid": 43,
				"deep": 1,
				"name": "张家界",
				"pinyin": "zhang jia jie",
				"pinyin_prefix": "z",
				"ext_id": "430800000000",
				"ext_name": "张家界市",
				"childs": [
					{
						"id": "430802",
						"pid": 4308,
						"deep": 2,
						"name": "永定",
						"pinyin": "yong ding",
						"pinyin_prefix": "y",
						"ext_id": "430802000000",
						"ext_name": "永定区"
					},
					{
						"id": "430811",
						"pid": 4308,
						"deep": 2,
						"name": "武陵源",
						"pinyin": "wu ling yuan",
						"pinyin_prefix": "w",
						"ext_id": "430811000000",
						"ext_name": "武陵源区"
					},
					{
						"id": "430821",
						"pid": 4308,
						"deep": 2,
						"name": "慈利",
						"pinyin": "ci li",
						"pinyin_prefix": "c",
						"ext_id": "430821000000",
						"ext_name": "慈利县"
					},
					{
						"id": "430822",
						"pid": 4308,
						"deep": 2,
						"name": "桑植",
						"pinyin": "sang zhi",
						"pinyin_prefix": "s",
						"ext_id": "430822000000",
						"ext_name": "桑植县"
					}
				]
			},
			{
				"id": "4309",
				"pid": 43,
				"deep": 1,
				"name": "益阳",
				"pinyin": "yi yang",
				"pinyin_prefix": "y",
				"ext_id": "430900000000",
				"ext_name": "益阳市",
				"childs": [
					{
						"id": "430902",
						"pid": 4309,
						"deep": 2,
						"name": "资阳",
						"pinyin": "zi yang",
						"pinyin_prefix": "z",
						"ext_id": "430902000000",
						"ext_name": "资阳区"
					},
					{
						"id": "430903",
						"pid": 4309,
						"deep": 2,
						"name": "赫山",
						"pinyin": "he shan",
						"pinyin_prefix": "h",
						"ext_id": "430903000000",
						"ext_name": "赫山区"
					},
					{
						"id": "430921",
						"pid": 4309,
						"deep": 2,
						"name": "南县",
						"pinyin": "nan xian",
						"pinyin_prefix": "n",
						"ext_id": "430921000000",
						"ext_name": "南县"
					},
					{
						"id": "430922",
						"pid": 4309,
						"deep": 2,
						"name": "桃江",
						"pinyin": "tao jiang",
						"pinyin_prefix": "t",
						"ext_id": "430922000000",
						"ext_name": "桃江县"
					},
					{
						"id": "430923",
						"pid": 4309,
						"deep": 2,
						"name": "安化",
						"pinyin": "an hua",
						"pinyin_prefix": "a",
						"ext_id": "430923000000",
						"ext_name": "安化县"
					},
					{
						"id": "430981",
						"pid": 4309,
						"deep": 2,
						"name": "沅江",
						"pinyin": "yuan jiang",
						"pinyin_prefix": "y",
						"ext_id": "430981000000",
						"ext_name": "沅江市"
					}
				]
			},
			{
				"id": "4310",
				"pid": 43,
				"deep": 1,
				"name": "郴州",
				"pinyin": "chen zhou",
				"pinyin_prefix": "c",
				"ext_id": "431000000000",
				"ext_name": "郴州市",
				"childs": [
					{
						"id": "431002",
						"pid": 4310,
						"deep": 2,
						"name": "北湖",
						"pinyin": "bei hu",
						"pinyin_prefix": "b",
						"ext_id": "431002000000",
						"ext_name": "北湖区"
					},
					{
						"id": "431003",
						"pid": 4310,
						"deep": 2,
						"name": "苏仙",
						"pinyin": "su xian",
						"pinyin_prefix": "s",
						"ext_id": "431003000000",
						"ext_name": "苏仙区"
					},
					{
						"id": "431021",
						"pid": 4310,
						"deep": 2,
						"name": "桂阳",
						"pinyin": "gui yang",
						"pinyin_prefix": "g",
						"ext_id": "431021000000",
						"ext_name": "桂阳县"
					},
					{
						"id": "431022",
						"pid": 4310,
						"deep": 2,
						"name": "宜章",
						"pinyin": "yi zhang",
						"pinyin_prefix": "y",
						"ext_id": "431022000000",
						"ext_name": "宜章县"
					},
					{
						"id": "431023",
						"pid": 4310,
						"deep": 2,
						"name": "永兴",
						"pinyin": "yong xing",
						"pinyin_prefix": "y",
						"ext_id": "431023000000",
						"ext_name": "永兴县"
					},
					{
						"id": "431024",
						"pid": 4310,
						"deep": 2,
						"name": "嘉禾",
						"pinyin": "jia he",
						"pinyin_prefix": "j",
						"ext_id": "431024000000",
						"ext_name": "嘉禾县"
					},
					{
						"id": "431025",
						"pid": 4310,
						"deep": 2,
						"name": "临武",
						"pinyin": "lin wu",
						"pinyin_prefix": "l",
						"ext_id": "431025000000",
						"ext_name": "临武县"
					},
					{
						"id": "431026",
						"pid": 4310,
						"deep": 2,
						"name": "汝城",
						"pinyin": "ru cheng",
						"pinyin_prefix": "r",
						"ext_id": "431026000000",
						"ext_name": "汝城县"
					},
					{
						"id": "431027",
						"pid": 4310,
						"deep": 2,
						"name": "桂东",
						"pinyin": "gui dong",
						"pinyin_prefix": "g",
						"ext_id": "431027000000",
						"ext_name": "桂东县"
					},
					{
						"id": "431028",
						"pid": 4310,
						"deep": 2,
						"name": "安仁",
						"pinyin": "an ren",
						"pinyin_prefix": "a",
						"ext_id": "431028000000",
						"ext_name": "安仁县"
					},
					{
						"id": "431081",
						"pid": 4310,
						"deep": 2,
						"name": "资兴",
						"pinyin": "zi xing",
						"pinyin_prefix": "z",
						"ext_id": "431081000000",
						"ext_name": "资兴市"
					}
				]
			},
			{
				"id": "4311",
				"pid": 43,
				"deep": 1,
				"name": "永州",
				"pinyin": "yong zhou",
				"pinyin_prefix": "y",
				"ext_id": "431100000000",
				"ext_name": "永州市",
				"childs": [
					{
						"id": "431102",
						"pid": 4311,
						"deep": 2,
						"name": "零陵",
						"pinyin": "ling ling",
						"pinyin_prefix": "l",
						"ext_id": "431102000000",
						"ext_name": "零陵区"
					},
					{
						"id": "431103",
						"pid": 4311,
						"deep": 2,
						"name": "冷水滩",
						"pinyin": "leng shui tan",
						"pinyin_prefix": "l",
						"ext_id": "431103000000",
						"ext_name": "冷水滩区"
					},
					{
						"id": "431122",
						"pid": 4311,
						"deep": 2,
						"name": "东安",
						"pinyin": "dong an",
						"pinyin_prefix": "d",
						"ext_id": "431122000000",
						"ext_name": "东安县"
					},
					{
						"id": "431123",
						"pid": 4311,
						"deep": 2,
						"name": "双牌",
						"pinyin": "shuang pai",
						"pinyin_prefix": "s",
						"ext_id": "431123000000",
						"ext_name": "双牌县"
					},
					{
						"id": "431124",
						"pid": 4311,
						"deep": 2,
						"name": "道县",
						"pinyin": "dao xian",
						"pinyin_prefix": "d",
						"ext_id": "431124000000",
						"ext_name": "道县"
					},
					{
						"id": "431125",
						"pid": 4311,
						"deep": 2,
						"name": "江永",
						"pinyin": "jiang yong",
						"pinyin_prefix": "j",
						"ext_id": "431125000000",
						"ext_name": "江永县"
					},
					{
						"id": "431126",
						"pid": 4311,
						"deep": 2,
						"name": "宁远",
						"pinyin": "ning yuan",
						"pinyin_prefix": "n",
						"ext_id": "431126000000",
						"ext_name": "宁远县"
					},
					{
						"id": "431127",
						"pid": 4311,
						"deep": 2,
						"name": "蓝山",
						"pinyin": "lan shan",
						"pinyin_prefix": "l",
						"ext_id": "431127000000",
						"ext_name": "蓝山县"
					},
					{
						"id": "431128",
						"pid": 4311,
						"deep": 2,
						"name": "新田",
						"pinyin": "xin tian",
						"pinyin_prefix": "x",
						"ext_id": "431128000000",
						"ext_name": "新田县"
					},
					{
						"id": "431129",
						"pid": 4311,
						"deep": 2,
						"name": "江华",
						"pinyin": "jiang hua",
						"pinyin_prefix": "j",
						"ext_id": "431129000000",
						"ext_name": "江华瑶族自治县"
					},
					{
						"id": "431181",
						"pid": 4311,
						"deep": 2,
						"name": "祁阳",
						"pinyin": "qi yang",
						"pinyin_prefix": "q",
						"ext_id": "431181000000",
						"ext_name": "祁阳市"
					}
				]
			},
			{
				"id": "4312",
				"pid": 43,
				"deep": 1,
				"name": "怀化",
				"pinyin": "huai hua",
				"pinyin_prefix": "h",
				"ext_id": "431200000000",
				"ext_name": "怀化市",
				"childs": [
					{
						"id": "431202",
						"pid": 4312,
						"deep": 2,
						"name": "鹤城",
						"pinyin": "he cheng",
						"pinyin_prefix": "h",
						"ext_id": "431202000000",
						"ext_name": "鹤城区"
					},
					{
						"id": "431221",
						"pid": 4312,
						"deep": 2,
						"name": "中方",
						"pinyin": "zhong fang",
						"pinyin_prefix": "z",
						"ext_id": "431221000000",
						"ext_name": "中方县"
					},
					{
						"id": "431222",
						"pid": 4312,
						"deep": 2,
						"name": "沅陵",
						"pinyin": "yuan ling",
						"pinyin_prefix": "y",
						"ext_id": "431222000000",
						"ext_name": "沅陵县"
					},
					{
						"id": "431223",
						"pid": 4312,
						"deep": 2,
						"name": "辰溪",
						"pinyin": "chen xi",
						"pinyin_prefix": "c",
						"ext_id": "431223000000",
						"ext_name": "辰溪县"
					},
					{
						"id": "431224",
						"pid": 4312,
						"deep": 2,
						"name": "溆浦",
						"pinyin": "xu pu",
						"pinyin_prefix": "x",
						"ext_id": "431224000000",
						"ext_name": "溆浦县"
					},
					{
						"id": "431225",
						"pid": 4312,
						"deep": 2,
						"name": "会同",
						"pinyin": "hui tong",
						"pinyin_prefix": "h",
						"ext_id": "431225000000",
						"ext_name": "会同县"
					},
					{
						"id": "431226",
						"pid": 4312,
						"deep": 2,
						"name": "麻阳",
						"pinyin": "ma yang",
						"pinyin_prefix": "m",
						"ext_id": "431226000000",
						"ext_name": "麻阳苗族自治县"
					},
					{
						"id": "431227",
						"pid": 4312,
						"deep": 2,
						"name": "新晃",
						"pinyin": "xin huang",
						"pinyin_prefix": "x",
						"ext_id": "431227000000",
						"ext_name": "新晃侗族自治县"
					},
					{
						"id": "431228",
						"pid": 4312,
						"deep": 2,
						"name": "芷江",
						"pinyin": "zhi jiang",
						"pinyin_prefix": "z",
						"ext_id": "431228000000",
						"ext_name": "芷江侗族自治县"
					},
					{
						"id": "431229",
						"pid": 4312,
						"deep": 2,
						"name": "靖州",
						"pinyin": "jing zhou",
						"pinyin_prefix": "j",
						"ext_id": "431229000000",
						"ext_name": "靖州苗族侗族自治县"
					},
					{
						"id": "431230",
						"pid": 4312,
						"deep": 2,
						"name": "通道",
						"pinyin": "tong dao",
						"pinyin_prefix": "t",
						"ext_id": "431230000000",
						"ext_name": "通道侗族自治县"
					},
					{
						"id": "431281",
						"pid": 4312,
						"deep": 2,
						"name": "洪江",
						"pinyin": "hong jiang",
						"pinyin_prefix": "h",
						"ext_id": "431281000000",
						"ext_name": "洪江市"
					}
				]
			},
			{
				"id": "4313",
				"pid": 43,
				"deep": 1,
				"name": "娄底",
				"pinyin": "lou di",
				"pinyin_prefix": "l",
				"ext_id": "431300000000",
				"ext_name": "娄底市",
				"childs": [
					{
						"id": "431302",
						"pid": 4313,
						"deep": 2,
						"name": "娄星",
						"pinyin": "lou xing",
						"pinyin_prefix": "l",
						"ext_id": "431302000000",
						"ext_name": "娄星区"
					},
					{
						"id": "431321",
						"pid": 4313,
						"deep": 2,
						"name": "双峰",
						"pinyin": "shuang feng",
						"pinyin_prefix": "s",
						"ext_id": "431321000000",
						"ext_name": "双峰县"
					},
					{
						"id": "431322",
						"pid": 4313,
						"deep": 2,
						"name": "新化",
						"pinyin": "xin hua",
						"pinyin_prefix": "x",
						"ext_id": "431322000000",
						"ext_name": "新化县"
					},
					{
						"id": "431381",
						"pid": 4313,
						"deep": 2,
						"name": "冷水江",
						"pinyin": "leng shui jiang",
						"pinyin_prefix": "l",
						"ext_id": "431381000000",
						"ext_name": "冷水江市"
					},
					{
						"id": "431382",
						"pid": 4313,
						"deep": 2,
						"name": "涟源",
						"pinyin": "lian yuan",
						"pinyin_prefix": "l",
						"ext_id": "431382000000",
						"ext_name": "涟源市"
					}
				]
			},
			{
				"id": "4331",
				"pid": 43,
				"deep": 1,
				"name": "湘西",
				"pinyin": "xiang xi",
				"pinyin_prefix": "x",
				"ext_id": "433100000000",
				"ext_name": "湘西土家族苗族自治州",
				"childs": [
					{
						"id": "433101",
						"pid": 4331,
						"deep": 2,
						"name": "吉首",
						"pinyin": "ji shou",
						"pinyin_prefix": "j",
						"ext_id": "433101000000",
						"ext_name": "吉首市"
					},
					{
						"id": "433122",
						"pid": 4331,
						"deep": 2,
						"name": "泸溪",
						"pinyin": "lu xi",
						"pinyin_prefix": "l",
						"ext_id": "433122000000",
						"ext_name": "泸溪县"
					},
					{
						"id": "433123",
						"pid": 4331,
						"deep": 2,
						"name": "凤凰",
						"pinyin": "feng huang",
						"pinyin_prefix": "f",
						"ext_id": "433123000000",
						"ext_name": "凤凰县"
					},
					{
						"id": "433124",
						"pid": 4331,
						"deep": 2,
						"name": "花垣",
						"pinyin": "hua yuan",
						"pinyin_prefix": "h",
						"ext_id": "433124000000",
						"ext_name": "花垣县"
					},
					{
						"id": "433125",
						"pid": 4331,
						"deep": 2,
						"name": "保靖",
						"pinyin": "bao jing",
						"pinyin_prefix": "b",
						"ext_id": "433125000000",
						"ext_name": "保靖县"
					},
					{
						"id": "433126",
						"pid": 4331,
						"deep": 2,
						"name": "古丈",
						"pinyin": "gu zhang",
						"pinyin_prefix": "g",
						"ext_id": "433126000000",
						"ext_name": "古丈县"
					},
					{
						"id": "433127",
						"pid": 4331,
						"deep": 2,
						"name": "永顺",
						"pinyin": "yong shun",
						"pinyin_prefix": "y",
						"ext_id": "433127000000",
						"ext_name": "永顺县"
					},
					{
						"id": "433130",
						"pid": 4331,
						"deep": 2,
						"name": "龙山",
						"pinyin": "long shan",
						"pinyin_prefix": "l",
						"ext_id": "433130000000",
						"ext_name": "龙山县"
					}
				]
			}
		]
	},
	{
		"id": "44",
		"pid": 0,
		"deep": 0,
		"name": "广东",
		"pinyin": "guang dong",
		"pinyin_prefix": "g",
		"ext_id": "440000000000",
		"ext_name": "广东省",
		"childs": [
			{
				"id": "4401",
				"pid": 44,
				"deep": 1,
				"name": "广州",
				"pinyin": "guang zhou",
				"pinyin_prefix": "g",
				"ext_id": "440100000000",
				"ext_name": "广州市",
				"childs": [
					{
						"id": "440103",
						"pid": 4401,
						"deep": 2,
						"name": "荔湾",
						"pinyin": "li wan",
						"pinyin_prefix": "l",
						"ext_id": "440103000000",
						"ext_name": "荔湾区"
					},
					{
						"id": "440104",
						"pid": 4401,
						"deep": 2,
						"name": "越秀",
						"pinyin": "yue xiu",
						"pinyin_prefix": "y",
						"ext_id": "440104000000",
						"ext_name": "越秀区"
					},
					{
						"id": "440105",
						"pid": 4401,
						"deep": 2,
						"name": "海珠",
						"pinyin": "hai zhu",
						"pinyin_prefix": "h",
						"ext_id": "440105000000",
						"ext_name": "海珠区"
					},
					{
						"id": "440106",
						"pid": 4401,
						"deep": 2,
						"name": "天河",
						"pinyin": "tian he",
						"pinyin_prefix": "t",
						"ext_id": "440106000000",
						"ext_name": "天河区"
					},
					{
						"id": "440111",
						"pid": 4401,
						"deep": 2,
						"name": "白云",
						"pinyin": "bai yun",
						"pinyin_prefix": "b",
						"ext_id": "440111000000",
						"ext_name": "白云区"
					},
					{
						"id": "440112",
						"pid": 4401,
						"deep": 2,
						"name": "黄埔",
						"pinyin": "huang pu",
						"pinyin_prefix": "h",
						"ext_id": "440112000000",
						"ext_name": "黄埔区"
					},
					{
						"id": "440113",
						"pid": 4401,
						"deep": 2,
						"name": "番禺",
						"pinyin": "pan yu",
						"pinyin_prefix": "p",
						"ext_id": "440113000000",
						"ext_name": "番禺区"
					},
					{
						"id": "440114",
						"pid": 4401,
						"deep": 2,
						"name": "花都",
						"pinyin": "hua du",
						"pinyin_prefix": "h",
						"ext_id": "440114000000",
						"ext_name": "花都区"
					},
					{
						"id": "440115",
						"pid": 4401,
						"deep": 2,
						"name": "南沙",
						"pinyin": "nan sha",
						"pinyin_prefix": "n",
						"ext_id": "440115000000",
						"ext_name": "南沙区"
					},
					{
						"id": "440117",
						"pid": 4401,
						"deep": 2,
						"name": "从化",
						"pinyin": "cong hua",
						"pinyin_prefix": "c",
						"ext_id": "440117000000",
						"ext_name": "从化区"
					},
					{
						"id": "440118",
						"pid": 4401,
						"deep": 2,
						"name": "增城",
						"pinyin": "zeng cheng",
						"pinyin_prefix": "z",
						"ext_id": "440118000000",
						"ext_name": "增城区"
					}
				]
			},
			{
				"id": "4402",
				"pid": 44,
				"deep": 1,
				"name": "韶关",
				"pinyin": "shao guan",
				"pinyin_prefix": "s",
				"ext_id": "440200000000",
				"ext_name": "韶关市",
				"childs": [
					{
						"id": "440203",
						"pid": 4402,
						"deep": 2,
						"name": "武江",
						"pinyin": "wu jiang",
						"pinyin_prefix": "w",
						"ext_id": "440203000000",
						"ext_name": "武江区"
					},
					{
						"id": "440204",
						"pid": 4402,
						"deep": 2,
						"name": "浈江",
						"pinyin": "zhen jiang",
						"pinyin_prefix": "z",
						"ext_id": "440204000000",
						"ext_name": "浈江区"
					},
					{
						"id": "440205",
						"pid": 4402,
						"deep": 2,
						"name": "曲江",
						"pinyin": "qu jiang",
						"pinyin_prefix": "q",
						"ext_id": "440205000000",
						"ext_name": "曲江区"
					},
					{
						"id": "440222",
						"pid": 4402,
						"deep": 2,
						"name": "始兴",
						"pinyin": "shi xing",
						"pinyin_prefix": "s",
						"ext_id": "440222000000",
						"ext_name": "始兴县"
					},
					{
						"id": "440224",
						"pid": 4402,
						"deep": 2,
						"name": "仁化",
						"pinyin": "ren hua",
						"pinyin_prefix": "r",
						"ext_id": "440224000000",
						"ext_name": "仁化县"
					},
					{
						"id": "440229",
						"pid": 4402,
						"deep": 2,
						"name": "翁源",
						"pinyin": "weng yuan",
						"pinyin_prefix": "w",
						"ext_id": "440229000000",
						"ext_name": "翁源县"
					},
					{
						"id": "440232",
						"pid": 4402,
						"deep": 2,
						"name": "乳源",
						"pinyin": "ru yuan",
						"pinyin_prefix": "r",
						"ext_id": "440232000000",
						"ext_name": "乳源瑶族自治县"
					},
					{
						"id": "440233",
						"pid": 4402,
						"deep": 2,
						"name": "新丰",
						"pinyin": "xin feng",
						"pinyin_prefix": "x",
						"ext_id": "440233000000",
						"ext_name": "新丰县"
					},
					{
						"id": "440281",
						"pid": 4402,
						"deep": 2,
						"name": "乐昌",
						"pinyin": "le chang",
						"pinyin_prefix": "l",
						"ext_id": "440281000000",
						"ext_name": "乐昌市"
					},
					{
						"id": "440282",
						"pid": 4402,
						"deep": 2,
						"name": "南雄",
						"pinyin": "nan xiong",
						"pinyin_prefix": "n",
						"ext_id": "440282000000",
						"ext_name": "南雄市"
					}
				]
			},
			{
				"id": "4403",
				"pid": 44,
				"deep": 1,
				"name": "深圳",
				"pinyin": "shen zhen",
				"pinyin_prefix": "s",
				"ext_id": "440300000000",
				"ext_name": "深圳市",
				"childs": [
					{
						"id": "440303",
						"pid": 4403,
						"deep": 2,
						"name": "罗湖",
						"pinyin": "luo hu",
						"pinyin_prefix": "l",
						"ext_id": "440303000000",
						"ext_name": "罗湖区"
					},
					{
						"id": "440304",
						"pid": 4403,
						"deep": 2,
						"name": "福田",
						"pinyin": "fu tian",
						"pinyin_prefix": "f",
						"ext_id": "440304000000",
						"ext_name": "福田区"
					},
					{
						"id": "440305",
						"pid": 4403,
						"deep": 2,
						"name": "南山",
						"pinyin": "nan shan",
						"pinyin_prefix": "n",
						"ext_id": "440305000000",
						"ext_name": "南山区"
					},
					{
						"id": "440306",
						"pid": 4403,
						"deep": 2,
						"name": "宝安",
						"pinyin": "bao an",
						"pinyin_prefix": "b",
						"ext_id": "440306000000",
						"ext_name": "宝安区"
					},
					{
						"id": "440307",
						"pid": 4403,
						"deep": 2,
						"name": "龙岗",
						"pinyin": "long gang",
						"pinyin_prefix": "l",
						"ext_id": "440307000000",
						"ext_name": "龙岗区"
					},
					{
						"id": "440308",
						"pid": 4403,
						"deep": 2,
						"name": "盐田",
						"pinyin": "yan tian",
						"pinyin_prefix": "y",
						"ext_id": "440308000000",
						"ext_name": "盐田区"
					},
					{
						"id": "440309",
						"pid": 4403,
						"deep": 2,
						"name": "龙华",
						"pinyin": "long hua",
						"pinyin_prefix": "l",
						"ext_id": "440309000000",
						"ext_name": "龙华区"
					},
					{
						"id": "440310",
						"pid": 4403,
						"deep": 2,
						"name": "坪山",
						"pinyin": "ping shan",
						"pinyin_prefix": "p",
						"ext_id": "440310000000",
						"ext_name": "坪山区"
					},
					{
						"id": "440311",
						"pid": 4403,
						"deep": 2,
						"name": "光明",
						"pinyin": "guang ming",
						"pinyin_prefix": "g",
						"ext_id": "440311000000",
						"ext_name": "光明区"
					}
				]
			},
			{
				"id": "4404",
				"pid": 44,
				"deep": 1,
				"name": "珠海",
				"pinyin": "zhu hai",
				"pinyin_prefix": "z",
				"ext_id": "440400000000",
				"ext_name": "珠海市",
				"childs": [
					{
						"id": "440402",
						"pid": 4404,
						"deep": 2,
						"name": "香洲",
						"pinyin": "xiang zhou",
						"pinyin_prefix": "x",
						"ext_id": "440402000000",
						"ext_name": "香洲区"
					},
					{
						"id": "440403",
						"pid": 4404,
						"deep": 2,
						"name": "斗门",
						"pinyin": "dou men",
						"pinyin_prefix": "d",
						"ext_id": "440403000000",
						"ext_name": "斗门区"
					},
					{
						"id": "440404",
						"pid": 4404,
						"deep": 2,
						"name": "金湾",
						"pinyin": "jin wan",
						"pinyin_prefix": "j",
						"ext_id": "440404000000",
						"ext_name": "金湾区"
					}
				]
			},
			{
				"id": "4405",
				"pid": 44,
				"deep": 1,
				"name": "汕头",
				"pinyin": "shan tou",
				"pinyin_prefix": "s",
				"ext_id": "440500000000",
				"ext_name": "汕头市",
				"childs": [
					{
						"id": "440507",
						"pid": 4405,
						"deep": 2,
						"name": "龙湖",
						"pinyin": "long hu",
						"pinyin_prefix": "l",
						"ext_id": "440507000000",
						"ext_name": "龙湖区"
					},
					{
						"id": "440511",
						"pid": 4405,
						"deep": 2,
						"name": "金平",
						"pinyin": "jin ping",
						"pinyin_prefix": "j",
						"ext_id": "440511000000",
						"ext_name": "金平区"
					},
					{
						"id": "440512",
						"pid": 4405,
						"deep": 2,
						"name": "濠江",
						"pinyin": "hao jiang",
						"pinyin_prefix": "h",
						"ext_id": "440512000000",
						"ext_name": "濠江区"
					},
					{
						"id": "440513",
						"pid": 4405,
						"deep": 2,
						"name": "潮阳",
						"pinyin": "chao yang",
						"pinyin_prefix": "c",
						"ext_id": "440513000000",
						"ext_name": "潮阳区"
					},
					{
						"id": "440514",
						"pid": 4405,
						"deep": 2,
						"name": "潮南",
						"pinyin": "chao nan",
						"pinyin_prefix": "c",
						"ext_id": "440514000000",
						"ext_name": "潮南区"
					},
					{
						"id": "440515",
						"pid": 4405,
						"deep": 2,
						"name": "澄海",
						"pinyin": "cheng hai",
						"pinyin_prefix": "c",
						"ext_id": "440515000000",
						"ext_name": "澄海区"
					},
					{
						"id": "440523",
						"pid": 4405,
						"deep": 2,
						"name": "南澳",
						"pinyin": "nan ao",
						"pinyin_prefix": "n",
						"ext_id": "440523000000",
						"ext_name": "南澳县"
					}
				]
			},
			{
				"id": "4406",
				"pid": 44,
				"deep": 1,
				"name": "佛山",
				"pinyin": "fo shan",
				"pinyin_prefix": "f",
				"ext_id": "440600000000",
				"ext_name": "佛山市",
				"childs": [
					{
						"id": "440604",
						"pid": 4406,
						"deep": 2,
						"name": "禅城",
						"pinyin": "chan cheng",
						"pinyin_prefix": "c",
						"ext_id": "440604000000",
						"ext_name": "禅城区"
					},
					{
						"id": "440605",
						"pid": 4406,
						"deep": 2,
						"name": "南海",
						"pinyin": "nan hai",
						"pinyin_prefix": "n",
						"ext_id": "440605000000",
						"ext_name": "南海区"
					},
					{
						"id": "440606",
						"pid": 4406,
						"deep": 2,
						"name": "顺德",
						"pinyin": "shun de",
						"pinyin_prefix": "s",
						"ext_id": "440606000000",
						"ext_name": "顺德区"
					},
					{
						"id": "440607",
						"pid": 4406,
						"deep": 2,
						"name": "三水",
						"pinyin": "san shui",
						"pinyin_prefix": "s",
						"ext_id": "440607000000",
						"ext_name": "三水区"
					},
					{
						"id": "440608",
						"pid": 4406,
						"deep": 2,
						"name": "高明",
						"pinyin": "gao ming",
						"pinyin_prefix": "g",
						"ext_id": "440608000000",
						"ext_name": "高明区"
					}
				]
			},
			{
				"id": "4407",
				"pid": 44,
				"deep": 1,
				"name": "江门",
				"pinyin": "jiang men",
				"pinyin_prefix": "j",
				"ext_id": "440700000000",
				"ext_name": "江门市",
				"childs": [
					{
						"id": "440703",
						"pid": 4407,
						"deep": 2,
						"name": "蓬江",
						"pinyin": "peng jiang",
						"pinyin_prefix": "p",
						"ext_id": "440703000000",
						"ext_name": "蓬江区"
					},
					{
						"id": "440704",
						"pid": 4407,
						"deep": 2,
						"name": "江海",
						"pinyin": "jiang hai",
						"pinyin_prefix": "j",
						"ext_id": "440704000000",
						"ext_name": "江海区"
					},
					{
						"id": "440705",
						"pid": 4407,
						"deep": 2,
						"name": "新会",
						"pinyin": "xin hui",
						"pinyin_prefix": "x",
						"ext_id": "440705000000",
						"ext_name": "新会区"
					},
					{
						"id": "440781",
						"pid": 4407,
						"deep": 2,
						"name": "台山",
						"pinyin": "tai shan",
						"pinyin_prefix": "t",
						"ext_id": "440781000000",
						"ext_name": "台山市"
					},
					{
						"id": "440783",
						"pid": 4407,
						"deep": 2,
						"name": "开平",
						"pinyin": "kai ping",
						"pinyin_prefix": "k",
						"ext_id": "440783000000",
						"ext_name": "开平市"
					},
					{
						"id": "440784",
						"pid": 4407,
						"deep": 2,
						"name": "鹤山",
						"pinyin": "he shan",
						"pinyin_prefix": "h",
						"ext_id": "440784000000",
						"ext_name": "鹤山市"
					},
					{
						"id": "440785",
						"pid": 4407,
						"deep": 2,
						"name": "恩平",
						"pinyin": "en ping",
						"pinyin_prefix": "e",
						"ext_id": "440785000000",
						"ext_name": "恩平市"
					}
				]
			},
			{
				"id": "4408",
				"pid": 44,
				"deep": 1,
				"name": "湛江",
				"pinyin": "zhan jiang",
				"pinyin_prefix": "z",
				"ext_id": "440800000000",
				"ext_name": "湛江市",
				"childs": [
					{
						"id": "440802",
						"pid": 4408,
						"deep": 2,
						"name": "赤坎",
						"pinyin": "chi kan",
						"pinyin_prefix": "c",
						"ext_id": "440802000000",
						"ext_name": "赤坎区"
					},
					{
						"id": "440803",
						"pid": 4408,
						"deep": 2,
						"name": "霞山",
						"pinyin": "xia shan",
						"pinyin_prefix": "x",
						"ext_id": "440803000000",
						"ext_name": "霞山区"
					},
					{
						"id": "440804",
						"pid": 4408,
						"deep": 2,
						"name": "坡头",
						"pinyin": "po tou",
						"pinyin_prefix": "p",
						"ext_id": "440804000000",
						"ext_name": "坡头区"
					},
					{
						"id": "440811",
						"pid": 4408,
						"deep": 2,
						"name": "麻章",
						"pinyin": "ma zhang",
						"pinyin_prefix": "m",
						"ext_id": "440811000000",
						"ext_name": "麻章区"
					},
					{
						"id": "440823",
						"pid": 4408,
						"deep": 2,
						"name": "遂溪",
						"pinyin": "sui xi",
						"pinyin_prefix": "s",
						"ext_id": "440823000000",
						"ext_name": "遂溪县"
					},
					{
						"id": "440825",
						"pid": 4408,
						"deep": 2,
						"name": "徐闻",
						"pinyin": "xu wen",
						"pinyin_prefix": "x",
						"ext_id": "440825000000",
						"ext_name": "徐闻县"
					},
					{
						"id": "440881",
						"pid": 4408,
						"deep": 2,
						"name": "廉江",
						"pinyin": "lian jiang",
						"pinyin_prefix": "l",
						"ext_id": "440881000000",
						"ext_name": "廉江市"
					},
					{
						"id": "440882",
						"pid": 4408,
						"deep": 2,
						"name": "雷州",
						"pinyin": "lei zhou",
						"pinyin_prefix": "l",
						"ext_id": "440882000000",
						"ext_name": "雷州市"
					},
					{
						"id": "440883",
						"pid": 4408,
						"deep": 2,
						"name": "吴川",
						"pinyin": "wu chuan",
						"pinyin_prefix": "w",
						"ext_id": "440883000000",
						"ext_name": "吴川市"
					}
				]
			},
			{
				"id": "4409",
				"pid": 44,
				"deep": 1,
				"name": "茂名",
				"pinyin": "mao ming",
				"pinyin_prefix": "m",
				"ext_id": "440900000000",
				"ext_name": "茂名市",
				"childs": [
					{
						"id": "440902",
						"pid": 4409,
						"deep": 2,
						"name": "茂南",
						"pinyin": "mao nan",
						"pinyin_prefix": "m",
						"ext_id": "440902000000",
						"ext_name": "茂南区"
					},
					{
						"id": "440904",
						"pid": 4409,
						"deep": 2,
						"name": "电白",
						"pinyin": "dian bai",
						"pinyin_prefix": "d",
						"ext_id": "440904000000",
						"ext_name": "电白区"
					},
					{
						"id": "440981",
						"pid": 4409,
						"deep": 2,
						"name": "高州",
						"pinyin": "gao zhou",
						"pinyin_prefix": "g",
						"ext_id": "440981000000",
						"ext_name": "高州市"
					},
					{
						"id": "440982",
						"pid": 4409,
						"deep": 2,
						"name": "化州",
						"pinyin": "hua zhou",
						"pinyin_prefix": "h",
						"ext_id": "440982000000",
						"ext_name": "化州市"
					},
					{
						"id": "440983",
						"pid": 4409,
						"deep": 2,
						"name": "信宜",
						"pinyin": "xin yi",
						"pinyin_prefix": "x",
						"ext_id": "440983000000",
						"ext_name": "信宜市"
					}
				]
			},
			{
				"id": "4412",
				"pid": 44,
				"deep": 1,
				"name": "肇庆",
				"pinyin": "zhao qing",
				"pinyin_prefix": "z",
				"ext_id": "441200000000",
				"ext_name": "肇庆市",
				"childs": [
					{
						"id": "441202",
						"pid": 4412,
						"deep": 2,
						"name": "端州",
						"pinyin": "duan zhou",
						"pinyin_prefix": "d",
						"ext_id": "441202000000",
						"ext_name": "端州区"
					},
					{
						"id": "441203",
						"pid": 4412,
						"deep": 2,
						"name": "鼎湖",
						"pinyin": "ding hu",
						"pinyin_prefix": "d",
						"ext_id": "441203000000",
						"ext_name": "鼎湖区"
					},
					{
						"id": "441204",
						"pid": 4412,
						"deep": 2,
						"name": "高要",
						"pinyin": "gao yao",
						"pinyin_prefix": "g",
						"ext_id": "441204000000",
						"ext_name": "高要区"
					},
					{
						"id": "441223",
						"pid": 4412,
						"deep": 2,
						"name": "广宁",
						"pinyin": "guang ning",
						"pinyin_prefix": "g",
						"ext_id": "441223000000",
						"ext_name": "广宁县"
					},
					{
						"id": "441224",
						"pid": 4412,
						"deep": 2,
						"name": "怀集",
						"pinyin": "huai ji",
						"pinyin_prefix": "h",
						"ext_id": "441224000000",
						"ext_name": "怀集县"
					},
					{
						"id": "441225",
						"pid": 4412,
						"deep": 2,
						"name": "封开",
						"pinyin": "feng kai",
						"pinyin_prefix": "f",
						"ext_id": "441225000000",
						"ext_name": "封开县"
					},
					{
						"id": "441226",
						"pid": 4412,
						"deep": 2,
						"name": "德庆",
						"pinyin": "de qing",
						"pinyin_prefix": "d",
						"ext_id": "441226000000",
						"ext_name": "德庆县"
					},
					{
						"id": "441284",
						"pid": 4412,
						"deep": 2,
						"name": "四会",
						"pinyin": "si hui",
						"pinyin_prefix": "s",
						"ext_id": "441284000000",
						"ext_name": "四会市"
					}
				]
			},
			{
				"id": "4413",
				"pid": 44,
				"deep": 1,
				"name": "惠州",
				"pinyin": "hui zhou",
				"pinyin_prefix": "h",
				"ext_id": "441300000000",
				"ext_name": "惠州市",
				"childs": [
					{
						"id": "441302",
						"pid": 4413,
						"deep": 2,
						"name": "惠城",
						"pinyin": "hui cheng",
						"pinyin_prefix": "h",
						"ext_id": "441302000000",
						"ext_name": "惠城区"
					},
					{
						"id": "441303",
						"pid": 4413,
						"deep": 2,
						"name": "惠阳",
						"pinyin": "hui yang",
						"pinyin_prefix": "h",
						"ext_id": "441303000000",
						"ext_name": "惠阳区"
					},
					{
						"id": "441322",
						"pid": 4413,
						"deep": 2,
						"name": "博罗",
						"pinyin": "bo luo",
						"pinyin_prefix": "b",
						"ext_id": "441322000000",
						"ext_name": "博罗县"
					},
					{
						"id": "441323",
						"pid": 4413,
						"deep": 2,
						"name": "惠东",
						"pinyin": "hui dong",
						"pinyin_prefix": "h",
						"ext_id": "441323000000",
						"ext_name": "惠东县"
					},
					{
						"id": "441324",
						"pid": 4413,
						"deep": 2,
						"name": "龙门",
						"pinyin": "long men",
						"pinyin_prefix": "l",
						"ext_id": "441324000000",
						"ext_name": "龙门县"
					}
				]
			},
			{
				"id": "4414",
				"pid": 44,
				"deep": 1,
				"name": "梅州",
				"pinyin": "mei zhou",
				"pinyin_prefix": "m",
				"ext_id": "441400000000",
				"ext_name": "梅州市",
				"childs": [
					{
						"id": "441402",
						"pid": 4414,
						"deep": 2,
						"name": "梅江",
						"pinyin": "mei jiang",
						"pinyin_prefix": "m",
						"ext_id": "441402000000",
						"ext_name": "梅江区"
					},
					{
						"id": "441403",
						"pid": 4414,
						"deep": 2,
						"name": "梅县",
						"pinyin": "mei xian",
						"pinyin_prefix": "m",
						"ext_id": "441403000000",
						"ext_name": "梅县区"
					},
					{
						"id": "441422",
						"pid": 4414,
						"deep": 2,
						"name": "大埔",
						"pinyin": "da bu",
						"pinyin_prefix": "d",
						"ext_id": "441422000000",
						"ext_name": "大埔县"
					},
					{
						"id": "441423",
						"pid": 4414,
						"deep": 2,
						"name": "丰顺",
						"pinyin": "feng shun",
						"pinyin_prefix": "f",
						"ext_id": "441423000000",
						"ext_name": "丰顺县"
					},
					{
						"id": "441424",
						"pid": 4414,
						"deep": 2,
						"name": "五华",
						"pinyin": "wu hua",
						"pinyin_prefix": "w",
						"ext_id": "441424000000",
						"ext_name": "五华县"
					},
					{
						"id": "441426",
						"pid": 4414,
						"deep": 2,
						"name": "平远",
						"pinyin": "ping yuan",
						"pinyin_prefix": "p",
						"ext_id": "441426000000",
						"ext_name": "平远县"
					},
					{
						"id": "441427",
						"pid": 4414,
						"deep": 2,
						"name": "蕉岭",
						"pinyin": "jiao ling",
						"pinyin_prefix": "j",
						"ext_id": "441427000000",
						"ext_name": "蕉岭县"
					},
					{
						"id": "441481",
						"pid": 4414,
						"deep": 2,
						"name": "兴宁",
						"pinyin": "xing ning",
						"pinyin_prefix": "x",
						"ext_id": "441481000000",
						"ext_name": "兴宁市"
					}
				]
			},
			{
				"id": "4415",
				"pid": 44,
				"deep": 1,
				"name": "汕尾",
				"pinyin": "shan wei",
				"pinyin_prefix": "s",
				"ext_id": "441500000000",
				"ext_name": "汕尾市",
				"childs": [
					{
						"id": "441502",
						"pid": 4415,
						"deep": 2,
						"name": "城区",
						"pinyin": "cheng qu",
						"pinyin_prefix": "c",
						"ext_id": "441502000000",
						"ext_name": "城区"
					},
					{
						"id": "441521",
						"pid": 4415,
						"deep": 2,
						"name": "海丰",
						"pinyin": "hai feng",
						"pinyin_prefix": "h",
						"ext_id": "441521000000",
						"ext_name": "海丰县"
					},
					{
						"id": "441523",
						"pid": 4415,
						"deep": 2,
						"name": "陆河",
						"pinyin": "lu he",
						"pinyin_prefix": "l",
						"ext_id": "441523000000",
						"ext_name": "陆河县"
					},
					{
						"id": "441581",
						"pid": 4415,
						"deep": 2,
						"name": "陆丰",
						"pinyin": "lu feng",
						"pinyin_prefix": "l",
						"ext_id": "441581000000",
						"ext_name": "陆丰市"
					}
				]
			},
			{
				"id": "4416",
				"pid": 44,
				"deep": 1,
				"name": "河源",
				"pinyin": "he yuan",
				"pinyin_prefix": "h",
				"ext_id": "441600000000",
				"ext_name": "河源市",
				"childs": [
					{
						"id": "441602",
						"pid": 4416,
						"deep": 2,
						"name": "源城",
						"pinyin": "yuan cheng",
						"pinyin_prefix": "y",
						"ext_id": "441602000000",
						"ext_name": "源城区"
					},
					{
						"id": "441621",
						"pid": 4416,
						"deep": 2,
						"name": "紫金",
						"pinyin": "zi jin",
						"pinyin_prefix": "z",
						"ext_id": "441621000000",
						"ext_name": "紫金县"
					},
					{
						"id": "441622",
						"pid": 4416,
						"deep": 2,
						"name": "龙川",
						"pinyin": "long chuan",
						"pinyin_prefix": "l",
						"ext_id": "441622000000",
						"ext_name": "龙川县"
					},
					{
						"id": "441623",
						"pid": 4416,
						"deep": 2,
						"name": "连平",
						"pinyin": "lian ping",
						"pinyin_prefix": "l",
						"ext_id": "441623000000",
						"ext_name": "连平县"
					},
					{
						"id": "441624",
						"pid": 4416,
						"deep": 2,
						"name": "和平",
						"pinyin": "he ping",
						"pinyin_prefix": "h",
						"ext_id": "441624000000",
						"ext_name": "和平县"
					},
					{
						"id": "441625",
						"pid": 4416,
						"deep": 2,
						"name": "东源",
						"pinyin": "dong yuan",
						"pinyin_prefix": "d",
						"ext_id": "441625000000",
						"ext_name": "东源县"
					}
				]
			},
			{
				"id": "4417",
				"pid": 44,
				"deep": 1,
				"name": "阳江",
				"pinyin": "yang jiang",
				"pinyin_prefix": "y",
				"ext_id": "441700000000",
				"ext_name": "阳江市",
				"childs": [
					{
						"id": "441702",
						"pid": 4417,
						"deep": 2,
						"name": "江城",
						"pinyin": "jiang cheng",
						"pinyin_prefix": "j",
						"ext_id": "441702000000",
						"ext_name": "江城区"
					},
					{
						"id": "441704",
						"pid": 4417,
						"deep": 2,
						"name": "阳东",
						"pinyin": "yang dong",
						"pinyin_prefix": "y",
						"ext_id": "441704000000",
						"ext_name": "阳东区"
					},
					{
						"id": "441721",
						"pid": 4417,
						"deep": 2,
						"name": "阳西",
						"pinyin": "yang xi",
						"pinyin_prefix": "y",
						"ext_id": "441721000000",
						"ext_name": "阳西县"
					},
					{
						"id": "441781",
						"pid": 4417,
						"deep": 2,
						"name": "阳春",
						"pinyin": "yang chun",
						"pinyin_prefix": "y",
						"ext_id": "441781000000",
						"ext_name": "阳春市"
					}
				]
			},
			{
				"id": "4418",
				"pid": 44,
				"deep": 1,
				"name": "清远",
				"pinyin": "qing yuan",
				"pinyin_prefix": "q",
				"ext_id": "441800000000",
				"ext_name": "清远市",
				"childs": [
					{
						"id": "441802",
						"pid": 4418,
						"deep": 2,
						"name": "清城",
						"pinyin": "qing cheng",
						"pinyin_prefix": "q",
						"ext_id": "441802000000",
						"ext_name": "清城区"
					},
					{
						"id": "441803",
						"pid": 4418,
						"deep": 2,
						"name": "清新区",
						"pinyin": "qing xin qu",
						"pinyin_prefix": "q",
						"ext_id": "441803000000",
						"ext_name": "清新区"
					},
					{
						"id": "441821",
						"pid": 4418,
						"deep": 2,
						"name": "佛冈",
						"pinyin": "fo gang",
						"pinyin_prefix": "f",
						"ext_id": "441821000000",
						"ext_name": "佛冈县"
					},
					{
						"id": "441823",
						"pid": 4418,
						"deep": 2,
						"name": "阳山",
						"pinyin": "yang shan",
						"pinyin_prefix": "y",
						"ext_id": "441823000000",
						"ext_name": "阳山县"
					},
					{
						"id": "441825",
						"pid": 4418,
						"deep": 2,
						"name": "连山",
						"pinyin": "lian shan",
						"pinyin_prefix": "l",
						"ext_id": "441825000000",
						"ext_name": "连山壮族瑶族自治县"
					},
					{
						"id": "441826",
						"pid": 4418,
						"deep": 2,
						"name": "连南",
						"pinyin": "lian nan",
						"pinyin_prefix": "l",
						"ext_id": "441826000000",
						"ext_name": "连南瑶族自治县"
					},
					{
						"id": "441881",
						"pid": 4418,
						"deep": 2,
						"name": "英德",
						"pinyin": "ying de",
						"pinyin_prefix": "y",
						"ext_id": "441881000000",
						"ext_name": "英德市"
					},
					{
						"id": "441882",
						"pid": 4418,
						"deep": 2,
						"name": "连州",
						"pinyin": "lian zhou",
						"pinyin_prefix": "l",
						"ext_id": "441882000000",
						"ext_name": "连州市"
					}
				]
			},
			{
				"id": "4419",
				"pid": 44,
				"deep": 1,
				"name": "东莞",
				"pinyin": "dong guan",
				"pinyin_prefix": "d",
				"ext_id": "441900000000",
				"ext_name": "东莞市",
				"childs": [
					{
						"id": "441900",
						"pid": 4419,
						"deep": 2,
						"name": "东莞",
						"pinyin": "dong guan",
						"pinyin_prefix": "d",
						"ext_id": "441900000000",
						"ext_name": "东莞市"
					}
				]
			},
			{
				"id": "4420",
				"pid": 44,
				"deep": 1,
				"name": "中山",
				"pinyin": "zhong shan",
				"pinyin_prefix": "z",
				"ext_id": "442000000000",
				"ext_name": "中山市",
				"childs": [
					{
						"id": "442000",
						"pid": 4420,
						"deep": 2,
						"name": "中山",
						"pinyin": "zhong shan",
						"pinyin_prefix": "z",
						"ext_id": "442000000000",
						"ext_name": "中山市"
					}
				]
			},
			{
				"id": "4451",
				"pid": 44,
				"deep": 1,
				"name": "潮州",
				"pinyin": "chao zhou",
				"pinyin_prefix": "c",
				"ext_id": "445100000000",
				"ext_name": "潮州市",
				"childs": [
					{
						"id": "445102",
						"pid": 4451,
						"deep": 2,
						"name": "湘桥",
						"pinyin": "xiang qiao",
						"pinyin_prefix": "x",
						"ext_id": "445102000000",
						"ext_name": "湘桥区"
					},
					{
						"id": "445103",
						"pid": 4451,
						"deep": 2,
						"name": "潮安",
						"pinyin": "chao an",
						"pinyin_prefix": "c",
						"ext_id": "445103000000",
						"ext_name": "潮安区"
					},
					{
						"id": "445122",
						"pid": 4451,
						"deep": 2,
						"name": "饶平",
						"pinyin": "rao ping",
						"pinyin_prefix": "r",
						"ext_id": "445122000000",
						"ext_name": "饶平县"
					}
				]
			},
			{
				"id": "4452",
				"pid": 44,
				"deep": 1,
				"name": "揭阳",
				"pinyin": "jie yang",
				"pinyin_prefix": "j",
				"ext_id": "445200000000",
				"ext_name": "揭阳市",
				"childs": [
					{
						"id": "445202",
						"pid": 4452,
						"deep": 2,
						"name": "榕城",
						"pinyin": "rong cheng",
						"pinyin_prefix": "r",
						"ext_id": "445202000000",
						"ext_name": "榕城区"
					},
					{
						"id": "445203",
						"pid": 4452,
						"deep": 2,
						"name": "揭东",
						"pinyin": "jie dong",
						"pinyin_prefix": "j",
						"ext_id": "445203000000",
						"ext_name": "揭东区"
					},
					{
						"id": "445222",
						"pid": 4452,
						"deep": 2,
						"name": "揭西",
						"pinyin": "jie xi",
						"pinyin_prefix": "j",
						"ext_id": "445222000000",
						"ext_name": "揭西县"
					},
					{
						"id": "445224",
						"pid": 4452,
						"deep": 2,
						"name": "惠来",
						"pinyin": "hui lai",
						"pinyin_prefix": "h",
						"ext_id": "445224000000",
						"ext_name": "惠来县"
					},
					{
						"id": "445281",
						"pid": 4452,
						"deep": 2,
						"name": "普宁",
						"pinyin": "pu ning",
						"pinyin_prefix": "p",
						"ext_id": "445281000000",
						"ext_name": "普宁市"
					}
				]
			},
			{
				"id": "4453",
				"pid": 44,
				"deep": 1,
				"name": "云浮",
				"pinyin": "yun fu",
				"pinyin_prefix": "y",
				"ext_id": "445300000000",
				"ext_name": "云浮市",
				"childs": [
					{
						"id": "445302",
						"pid": 4453,
						"deep": 2,
						"name": "云城",
						"pinyin": "yun cheng",
						"pinyin_prefix": "y",
						"ext_id": "445302000000",
						"ext_name": "云城区"
					},
					{
						"id": "445303",
						"pid": 4453,
						"deep": 2,
						"name": "云安",
						"pinyin": "yun an",
						"pinyin_prefix": "y",
						"ext_id": "445303000000",
						"ext_name": "云安区"
					},
					{
						"id": "445321",
						"pid": 4453,
						"deep": 2,
						"name": "新兴",
						"pinyin": "xin xing",
						"pinyin_prefix": "x",
						"ext_id": "445321000000",
						"ext_name": "新兴县"
					},
					{
						"id": "445322",
						"pid": 4453,
						"deep": 2,
						"name": "郁南",
						"pinyin": "yu nan",
						"pinyin_prefix": "y",
						"ext_id": "445322000000",
						"ext_name": "郁南县"
					},
					{
						"id": "445381",
						"pid": 4453,
						"deep": 2,
						"name": "罗定",
						"pinyin": "luo ding",
						"pinyin_prefix": "l",
						"ext_id": "445381000000",
						"ext_name": "罗定市"
					}
				]
			}
		]
	},
	{
		"id": "45",
		"pid": 0,
		"deep": 0,
		"name": "广西",
		"pinyin": "guang xi",
		"pinyin_prefix": "g",
		"ext_id": "450000000000",
		"ext_name": "广西壮族自治区",
		"childs": [
			{
				"id": "4501",
				"pid": 45,
				"deep": 1,
				"name": "南宁",
				"pinyin": "nan ning",
				"pinyin_prefix": "n",
				"ext_id": "450100000000",
				"ext_name": "南宁市",
				"childs": [
					{
						"id": "450102",
						"pid": 4501,
						"deep": 2,
						"name": "兴宁",
						"pinyin": "xing ning",
						"pinyin_prefix": "x",
						"ext_id": "450102000000",
						"ext_name": "兴宁区"
					},
					{
						"id": "450103",
						"pid": 4501,
						"deep": 2,
						"name": "青秀",
						"pinyin": "qing xiu",
						"pinyin_prefix": "q",
						"ext_id": "450103000000",
						"ext_name": "青秀区"
					},
					{
						"id": "450105",
						"pid": 4501,
						"deep": 2,
						"name": "江南",
						"pinyin": "jiang nan",
						"pinyin_prefix": "j",
						"ext_id": "450105000000",
						"ext_name": "江南区"
					},
					{
						"id": "450107",
						"pid": 4501,
						"deep": 2,
						"name": "西乡塘",
						"pinyin": "xi xiang tang",
						"pinyin_prefix": "x",
						"ext_id": "450107000000",
						"ext_name": "西乡塘区"
					},
					{
						"id": "450108",
						"pid": 4501,
						"deep": 2,
						"name": "良庆",
						"pinyin": "liang qing",
						"pinyin_prefix": "l",
						"ext_id": "450108000000",
						"ext_name": "良庆区"
					},
					{
						"id": "450109",
						"pid": 4501,
						"deep": 2,
						"name": "邕宁",
						"pinyin": "yong ning",
						"pinyin_prefix": "y",
						"ext_id": "450109000000",
						"ext_name": "邕宁区"
					},
					{
						"id": "450110",
						"pid": 4501,
						"deep": 2,
						"name": "武鸣",
						"pinyin": "wu ming",
						"pinyin_prefix": "w",
						"ext_id": "450110000000",
						"ext_name": "武鸣区"
					},
					{
						"id": "450123",
						"pid": 4501,
						"deep": 2,
						"name": "隆安",
						"pinyin": "long an",
						"pinyin_prefix": "l",
						"ext_id": "450123000000",
						"ext_name": "隆安县"
					},
					{
						"id": "450124",
						"pid": 4501,
						"deep": 2,
						"name": "马山",
						"pinyin": "ma shan",
						"pinyin_prefix": "m",
						"ext_id": "450124000000",
						"ext_name": "马山县"
					},
					{
						"id": "450125",
						"pid": 4501,
						"deep": 2,
						"name": "上林",
						"pinyin": "shang lin",
						"pinyin_prefix": "s",
						"ext_id": "450125000000",
						"ext_name": "上林县"
					},
					{
						"id": "450126",
						"pid": 4501,
						"deep": 2,
						"name": "宾阳",
						"pinyin": "bin yang",
						"pinyin_prefix": "b",
						"ext_id": "450126000000",
						"ext_name": "宾阳县"
					},
					{
						"id": "450181",
						"pid": 4501,
						"deep": 2,
						"name": "横州",
						"pinyin": "heng zhou",
						"pinyin_prefix": "h",
						"ext_id": "450181000000",
						"ext_name": "横州市"
					}
				]
			},
			{
				"id": "4502",
				"pid": 45,
				"deep": 1,
				"name": "柳州",
				"pinyin": "liu zhou",
				"pinyin_prefix": "l",
				"ext_id": "450200000000",
				"ext_name": "柳州市",
				"childs": [
					{
						"id": "450202",
						"pid": 4502,
						"deep": 2,
						"name": "城中",
						"pinyin": "cheng zhong",
						"pinyin_prefix": "c",
						"ext_id": "450202000000",
						"ext_name": "城中区"
					},
					{
						"id": "450203",
						"pid": 4502,
						"deep": 2,
						"name": "鱼峰",
						"pinyin": "yu feng",
						"pinyin_prefix": "y",
						"ext_id": "450203000000",
						"ext_name": "鱼峰区"
					},
					{
						"id": "450204",
						"pid": 4502,
						"deep": 2,
						"name": "柳南",
						"pinyin": "liu nan",
						"pinyin_prefix": "l",
						"ext_id": "450204000000",
						"ext_name": "柳南区"
					},
					{
						"id": "450205",
						"pid": 4502,
						"deep": 2,
						"name": "柳北",
						"pinyin": "liu bei",
						"pinyin_prefix": "l",
						"ext_id": "450205000000",
						"ext_name": "柳北区"
					},
					{
						"id": "450206",
						"pid": 4502,
						"deep": 2,
						"name": "柳江",
						"pinyin": "liu jiang",
						"pinyin_prefix": "l",
						"ext_id": "450206000000",
						"ext_name": "柳江区"
					},
					{
						"id": "450222",
						"pid": 4502,
						"deep": 2,
						"name": "柳城",
						"pinyin": "liu cheng",
						"pinyin_prefix": "l",
						"ext_id": "450222000000",
						"ext_name": "柳城县"
					},
					{
						"id": "450223",
						"pid": 4502,
						"deep": 2,
						"name": "鹿寨",
						"pinyin": "lu zhai",
						"pinyin_prefix": "l",
						"ext_id": "450223000000",
						"ext_name": "鹿寨县"
					},
					{
						"id": "450224",
						"pid": 4502,
						"deep": 2,
						"name": "融安",
						"pinyin": "rong an",
						"pinyin_prefix": "r",
						"ext_id": "450224000000",
						"ext_name": "融安县"
					},
					{
						"id": "450225",
						"pid": 4502,
						"deep": 2,
						"name": "融水",
						"pinyin": "rong shui",
						"pinyin_prefix": "r",
						"ext_id": "450225000000",
						"ext_name": "融水苗族自治县"
					},
					{
						"id": "450226",
						"pid": 4502,
						"deep": 2,
						"name": "三江",
						"pinyin": "san jiang",
						"pinyin_prefix": "s",
						"ext_id": "450226000000",
						"ext_name": "三江侗族自治县"
					}
				]
			},
			{
				"id": "4503",
				"pid": 45,
				"deep": 1,
				"name": "桂林",
				"pinyin": "gui lin",
				"pinyin_prefix": "g",
				"ext_id": "450300000000",
				"ext_name": "桂林市",
				"childs": [
					{
						"id": "450302",
						"pid": 4503,
						"deep": 2,
						"name": "秀峰",
						"pinyin": "xiu feng",
						"pinyin_prefix": "x",
						"ext_id": "450302000000",
						"ext_name": "秀峰区"
					},
					{
						"id": "450303",
						"pid": 4503,
						"deep": 2,
						"name": "叠彩",
						"pinyin": "die cai",
						"pinyin_prefix": "d",
						"ext_id": "450303000000",
						"ext_name": "叠彩区"
					},
					{
						"id": "450304",
						"pid": 4503,
						"deep": 2,
						"name": "象山",
						"pinyin": "xiang shan",
						"pinyin_prefix": "x",
						"ext_id": "450304000000",
						"ext_name": "象山区"
					},
					{
						"id": "450305",
						"pid": 4503,
						"deep": 2,
						"name": "七星",
						"pinyin": "qi xing",
						"pinyin_prefix": "q",
						"ext_id": "450305000000",
						"ext_name": "七星区"
					},
					{
						"id": "450311",
						"pid": 4503,
						"deep": 2,
						"name": "雁山",
						"pinyin": "yan shan",
						"pinyin_prefix": "y",
						"ext_id": "450311000000",
						"ext_name": "雁山区"
					},
					{
						"id": "450312",
						"pid": 4503,
						"deep": 2,
						"name": "临桂",
						"pinyin": "lin gui",
						"pinyin_prefix": "l",
						"ext_id": "450312000000",
						"ext_name": "临桂区"
					},
					{
						"id": "450321",
						"pid": 4503,
						"deep": 2,
						"name": "阳朔",
						"pinyin": "yang shuo",
						"pinyin_prefix": "y",
						"ext_id": "450321000000",
						"ext_name": "阳朔县"
					},
					{
						"id": "450323",
						"pid": 4503,
						"deep": 2,
						"name": "灵川",
						"pinyin": "ling chuan",
						"pinyin_prefix": "l",
						"ext_id": "450323000000",
						"ext_name": "灵川县"
					},
					{
						"id": "450324",
						"pid": 4503,
						"deep": 2,
						"name": "全州",
						"pinyin": "quan zhou",
						"pinyin_prefix": "q",
						"ext_id": "450324000000",
						"ext_name": "全州县"
					},
					{
						"id": "450325",
						"pid": 4503,
						"deep": 2,
						"name": "兴安",
						"pinyin": "xing an",
						"pinyin_prefix": "x",
						"ext_id": "450325000000",
						"ext_name": "兴安县"
					},
					{
						"id": "450326",
						"pid": 4503,
						"deep": 2,
						"name": "永福",
						"pinyin": "yong fu",
						"pinyin_prefix": "y",
						"ext_id": "450326000000",
						"ext_name": "永福县"
					},
					{
						"id": "450327",
						"pid": 4503,
						"deep": 2,
						"name": "灌阳",
						"pinyin": "guan yang",
						"pinyin_prefix": "g",
						"ext_id": "450327000000",
						"ext_name": "灌阳县"
					},
					{
						"id": "450328",
						"pid": 4503,
						"deep": 2,
						"name": "龙胜",
						"pinyin": "long sheng",
						"pinyin_prefix": "l",
						"ext_id": "450328000000",
						"ext_name": "龙胜各族自治县"
					},
					{
						"id": "450329",
						"pid": 4503,
						"deep": 2,
						"name": "资源",
						"pinyin": "zi yuan",
						"pinyin_prefix": "z",
						"ext_id": "450329000000",
						"ext_name": "资源县"
					},
					{
						"id": "450330",
						"pid": 4503,
						"deep": 2,
						"name": "平乐",
						"pinyin": "ping le",
						"pinyin_prefix": "p",
						"ext_id": "450330000000",
						"ext_name": "平乐县"
					},
					{
						"id": "450332",
						"pid": 4503,
						"deep": 2,
						"name": "恭城",
						"pinyin": "gong cheng",
						"pinyin_prefix": "g",
						"ext_id": "450332000000",
						"ext_name": "恭城瑶族自治县"
					},
					{
						"id": "450381",
						"pid": 4503,
						"deep": 2,
						"name": "荔浦",
						"pinyin": "li pu",
						"pinyin_prefix": "l",
						"ext_id": "450381000000",
						"ext_name": "荔浦市"
					}
				]
			},
			{
				"id": "4504",
				"pid": 45,
				"deep": 1,
				"name": "梧州",
				"pinyin": "wu zhou",
				"pinyin_prefix": "w",
				"ext_id": "450400000000",
				"ext_name": "梧州市",
				"childs": [
					{
						"id": "450403",
						"pid": 4504,
						"deep": 2,
						"name": "万秀",
						"pinyin": "wan xiu",
						"pinyin_prefix": "w",
						"ext_id": "450403000000",
						"ext_name": "万秀区"
					},
					{
						"id": "450405",
						"pid": 4504,
						"deep": 2,
						"name": "长洲",
						"pinyin": "chang zhou",
						"pinyin_prefix": "c",
						"ext_id": "450405000000",
						"ext_name": "长洲区"
					},
					{
						"id": "450406",
						"pid": 4504,
						"deep": 2,
						"name": "龙圩",
						"pinyin": "long xu",
						"pinyin_prefix": "l",
						"ext_id": "450406000000",
						"ext_name": "龙圩区"
					},
					{
						"id": "450421",
						"pid": 4504,
						"deep": 2,
						"name": "苍梧",
						"pinyin": "cang wu",
						"pinyin_prefix": "c",
						"ext_id": "450421000000",
						"ext_name": "苍梧县"
					},
					{
						"id": "450422",
						"pid": 4504,
						"deep": 2,
						"name": "藤县",
						"pinyin": "teng xian",
						"pinyin_prefix": "t",
						"ext_id": "450422000000",
						"ext_name": "藤县"
					},
					{
						"id": "450423",
						"pid": 4504,
						"deep": 2,
						"name": "蒙山",
						"pinyin": "meng shan",
						"pinyin_prefix": "m",
						"ext_id": "450423000000",
						"ext_name": "蒙山县"
					},
					{
						"id": "450481",
						"pid": 4504,
						"deep": 2,
						"name": "岑溪",
						"pinyin": "cen xi",
						"pinyin_prefix": "c",
						"ext_id": "450481000000",
						"ext_name": "岑溪市"
					}
				]
			},
			{
				"id": "4505",
				"pid": 45,
				"deep": 1,
				"name": "北海",
				"pinyin": "bei hai",
				"pinyin_prefix": "b",
				"ext_id": "450500000000",
				"ext_name": "北海市",
				"childs": [
					{
						"id": "450502",
						"pid": 4505,
						"deep": 2,
						"name": "海城",
						"pinyin": "hai cheng",
						"pinyin_prefix": "h",
						"ext_id": "450502000000",
						"ext_name": "海城区"
					},
					{
						"id": "450503",
						"pid": 4505,
						"deep": 2,
						"name": "银海",
						"pinyin": "yin hai",
						"pinyin_prefix": "y",
						"ext_id": "450503000000",
						"ext_name": "银海区"
					},
					{
						"id": "450512",
						"pid": 4505,
						"deep": 2,
						"name": "铁山港",
						"pinyin": "tie shan gang",
						"pinyin_prefix": "t",
						"ext_id": "450512000000",
						"ext_name": "铁山港区"
					},
					{
						"id": "450521",
						"pid": 4505,
						"deep": 2,
						"name": "合浦",
						"pinyin": "he pu",
						"pinyin_prefix": "h",
						"ext_id": "450521000000",
						"ext_name": "合浦县"
					}
				]
			},
			{
				"id": "4506",
				"pid": 45,
				"deep": 1,
				"name": "防城港",
				"pinyin": "fang cheng gang",
				"pinyin_prefix": "f",
				"ext_id": "450600000000",
				"ext_name": "防城港市",
				"childs": [
					{
						"id": "450602",
						"pid": 4506,
						"deep": 2,
						"name": "港口",
						"pinyin": "gang kou",
						"pinyin_prefix": "g",
						"ext_id": "450602000000",
						"ext_name": "港口区"
					},
					{
						"id": "450603",
						"pid": 4506,
						"deep": 2,
						"name": "防城",
						"pinyin": "fang cheng",
						"pinyin_prefix": "f",
						"ext_id": "450603000000",
						"ext_name": "防城区"
					},
					{
						"id": "450621",
						"pid": 4506,
						"deep": 2,
						"name": "上思",
						"pinyin": "shang si",
						"pinyin_prefix": "s",
						"ext_id": "450621000000",
						"ext_name": "上思县"
					},
					{
						"id": "450681",
						"pid": 4506,
						"deep": 2,
						"name": "东兴",
						"pinyin": "dong xing",
						"pinyin_prefix": "d",
						"ext_id": "450681000000",
						"ext_name": "东兴市"
					}
				]
			},
			{
				"id": "4507",
				"pid": 45,
				"deep": 1,
				"name": "钦州",
				"pinyin": "qin zhou",
				"pinyin_prefix": "q",
				"ext_id": "450700000000",
				"ext_name": "钦州市",
				"childs": [
					{
						"id": "450702",
						"pid": 4507,
						"deep": 2,
						"name": "钦南",
						"pinyin": "qin nan",
						"pinyin_prefix": "q",
						"ext_id": "450702000000",
						"ext_name": "钦南区"
					},
					{
						"id": "450703",
						"pid": 4507,
						"deep": 2,
						"name": "钦北",
						"pinyin": "qin bei",
						"pinyin_prefix": "q",
						"ext_id": "450703000000",
						"ext_name": "钦北区"
					},
					{
						"id": "450721",
						"pid": 4507,
						"deep": 2,
						"name": "灵山",
						"pinyin": "ling shan",
						"pinyin_prefix": "l",
						"ext_id": "450721000000",
						"ext_name": "灵山县"
					},
					{
						"id": "450722",
						"pid": 4507,
						"deep": 2,
						"name": "浦北",
						"pinyin": "pu bei",
						"pinyin_prefix": "p",
						"ext_id": "450722000000",
						"ext_name": "浦北县"
					}
				]
			},
			{
				"id": "4508",
				"pid": 45,
				"deep": 1,
				"name": "贵港",
				"pinyin": "gui gang",
				"pinyin_prefix": "g",
				"ext_id": "450800000000",
				"ext_name": "贵港市",
				"childs": [
					{
						"id": "450802",
						"pid": 4508,
						"deep": 2,
						"name": "港北",
						"pinyin": "gang bei",
						"pinyin_prefix": "g",
						"ext_id": "450802000000",
						"ext_name": "港北区"
					},
					{
						"id": "450803",
						"pid": 4508,
						"deep": 2,
						"name": "港南",
						"pinyin": "gang nan",
						"pinyin_prefix": "g",
						"ext_id": "450803000000",
						"ext_name": "港南区"
					},
					{
						"id": "450804",
						"pid": 4508,
						"deep": 2,
						"name": "覃塘",
						"pinyin": "qin tang",
						"pinyin_prefix": "q",
						"ext_id": "450804000000",
						"ext_name": "覃塘区"
					},
					{
						"id": "450821",
						"pid": 4508,
						"deep": 2,
						"name": "平南",
						"pinyin": "ping nan",
						"pinyin_prefix": "p",
						"ext_id": "450821000000",
						"ext_name": "平南县"
					},
					{
						"id": "450881",
						"pid": 4508,
						"deep": 2,
						"name": "桂平",
						"pinyin": "gui ping",
						"pinyin_prefix": "g",
						"ext_id": "450881000000",
						"ext_name": "桂平市"
					}
				]
			},
			{
				"id": "4509",
				"pid": 45,
				"deep": 1,
				"name": "玉林",
				"pinyin": "yu lin",
				"pinyin_prefix": "y",
				"ext_id": "450900000000",
				"ext_name": "玉林市",
				"childs": [
					{
						"id": "450902",
						"pid": 4509,
						"deep": 2,
						"name": "玉州",
						"pinyin": "yu zhou",
						"pinyin_prefix": "y",
						"ext_id": "450902000000",
						"ext_name": "玉州区"
					},
					{
						"id": "450903",
						"pid": 4509,
						"deep": 2,
						"name": "福绵",
						"pinyin": "fu mian",
						"pinyin_prefix": "f",
						"ext_id": "450903000000",
						"ext_name": "福绵区"
					},
					{
						"id": "450921",
						"pid": 4509,
						"deep": 2,
						"name": "容县",
						"pinyin": "rong xian",
						"pinyin_prefix": "r",
						"ext_id": "450921000000",
						"ext_name": "容县"
					},
					{
						"id": "450922",
						"pid": 4509,
						"deep": 2,
						"name": "陆川",
						"pinyin": "lu chuan",
						"pinyin_prefix": "l",
						"ext_id": "450922000000",
						"ext_name": "陆川县"
					},
					{
						"id": "450923",
						"pid": 4509,
						"deep": 2,
						"name": "博白",
						"pinyin": "bo bai",
						"pinyin_prefix": "b",
						"ext_id": "450923000000",
						"ext_name": "博白县"
					},
					{
						"id": "450924",
						"pid": 4509,
						"deep": 2,
						"name": "兴业",
						"pinyin": "xing ye",
						"pinyin_prefix": "x",
						"ext_id": "450924000000",
						"ext_name": "兴业县"
					},
					{
						"id": "450981",
						"pid": 4509,
						"deep": 2,
						"name": "北流",
						"pinyin": "bei liu",
						"pinyin_prefix": "b",
						"ext_id": "450981000000",
						"ext_name": "北流市"
					}
				]
			},
			{
				"id": "4510",
				"pid": 45,
				"deep": 1,
				"name": "百色",
				"pinyin": "bai se",
				"pinyin_prefix": "b",
				"ext_id": "451000000000",
				"ext_name": "百色市",
				"childs": [
					{
						"id": "451002",
						"pid": 4510,
						"deep": 2,
						"name": "右江",
						"pinyin": "you jiang",
						"pinyin_prefix": "y",
						"ext_id": "451002000000",
						"ext_name": "右江区"
					},
					{
						"id": "451003",
						"pid": 4510,
						"deep": 2,
						"name": "田阳",
						"pinyin": "tian yang",
						"pinyin_prefix": "t",
						"ext_id": "451003000000",
						"ext_name": "田阳区"
					},
					{
						"id": "451022",
						"pid": 4510,
						"deep": 2,
						"name": "田东",
						"pinyin": "tian dong",
						"pinyin_prefix": "t",
						"ext_id": "451022000000",
						"ext_name": "田东县"
					},
					{
						"id": "451024",
						"pid": 4510,
						"deep": 2,
						"name": "德保",
						"pinyin": "de bao",
						"pinyin_prefix": "d",
						"ext_id": "451024000000",
						"ext_name": "德保县"
					},
					{
						"id": "451026",
						"pid": 4510,
						"deep": 2,
						"name": "那坡",
						"pinyin": "na po",
						"pinyin_prefix": "n",
						"ext_id": "451026000000",
						"ext_name": "那坡县"
					},
					{
						"id": "451027",
						"pid": 4510,
						"deep": 2,
						"name": "凌云",
						"pinyin": "ling yun",
						"pinyin_prefix": "l",
						"ext_id": "451027000000",
						"ext_name": "凌云县"
					},
					{
						"id": "451028",
						"pid": 4510,
						"deep": 2,
						"name": "乐业",
						"pinyin": "le ye",
						"pinyin_prefix": "l",
						"ext_id": "451028000000",
						"ext_name": "乐业县"
					},
					{
						"id": "451029",
						"pid": 4510,
						"deep": 2,
						"name": "田林",
						"pinyin": "tian lin",
						"pinyin_prefix": "t",
						"ext_id": "451029000000",
						"ext_name": "田林县"
					},
					{
						"id": "451030",
						"pid": 4510,
						"deep": 2,
						"name": "西林",
						"pinyin": "xi lin",
						"pinyin_prefix": "x",
						"ext_id": "451030000000",
						"ext_name": "西林县"
					},
					{
						"id": "451031",
						"pid": 4510,
						"deep": 2,
						"name": "隆林",
						"pinyin": "long lin",
						"pinyin_prefix": "l",
						"ext_id": "451031000000",
						"ext_name": "隆林各族自治县"
					},
					{
						"id": "451081",
						"pid": 4510,
						"deep": 2,
						"name": "靖西",
						"pinyin": "jing xi",
						"pinyin_prefix": "j",
						"ext_id": "451081000000",
						"ext_name": "靖西市"
					},
					{
						"id": "451082",
						"pid": 4510,
						"deep": 2,
						"name": "平果",
						"pinyin": "ping guo",
						"pinyin_prefix": "p",
						"ext_id": "451082000000",
						"ext_name": "平果市"
					}
				]
			},
			{
				"id": "4511",
				"pid": 45,
				"deep": 1,
				"name": "贺州",
				"pinyin": "he zhou",
				"pinyin_prefix": "h",
				"ext_id": "451100000000",
				"ext_name": "贺州市",
				"childs": [
					{
						"id": "451102",
						"pid": 4511,
						"deep": 2,
						"name": "八步",
						"pinyin": "ba bu",
						"pinyin_prefix": "b",
						"ext_id": "451102000000",
						"ext_name": "八步区"
					},
					{
						"id": "451103",
						"pid": 4511,
						"deep": 2,
						"name": "平桂",
						"pinyin": "ping gui",
						"pinyin_prefix": "p",
						"ext_id": "451103000000",
						"ext_name": "平桂区"
					},
					{
						"id": "451121",
						"pid": 4511,
						"deep": 2,
						"name": "昭平",
						"pinyin": "zhao ping",
						"pinyin_prefix": "z",
						"ext_id": "451121000000",
						"ext_name": "昭平县"
					},
					{
						"id": "451122",
						"pid": 4511,
						"deep": 2,
						"name": "钟山",
						"pinyin": "zhong shan",
						"pinyin_prefix": "z",
						"ext_id": "451122000000",
						"ext_name": "钟山县"
					},
					{
						"id": "451123",
						"pid": 4511,
						"deep": 2,
						"name": "富川",
						"pinyin": "fu chuan",
						"pinyin_prefix": "f",
						"ext_id": "451123000000",
						"ext_name": "富川瑶族自治县"
					}
				]
			},
			{
				"id": "4512",
				"pid": 45,
				"deep": 1,
				"name": "河池",
				"pinyin": "he chi",
				"pinyin_prefix": "h",
				"ext_id": "451200000000",
				"ext_name": "河池市",
				"childs": [
					{
						"id": "451202",
						"pid": 4512,
						"deep": 2,
						"name": "金城江",
						"pinyin": "jin cheng jiang",
						"pinyin_prefix": "j",
						"ext_id": "451202000000",
						"ext_name": "金城江区"
					},
					{
						"id": "451203",
						"pid": 4512,
						"deep": 2,
						"name": "宜州",
						"pinyin": "yi zhou",
						"pinyin_prefix": "y",
						"ext_id": "451203000000",
						"ext_name": "宜州区"
					},
					{
						"id": "451221",
						"pid": 4512,
						"deep": 2,
						"name": "南丹",
						"pinyin": "nan dan",
						"pinyin_prefix": "n",
						"ext_id": "451221000000",
						"ext_name": "南丹县"
					},
					{
						"id": "451222",
						"pid": 4512,
						"deep": 2,
						"name": "天峨",
						"pinyin": "tian e",
						"pinyin_prefix": "t",
						"ext_id": "451222000000",
						"ext_name": "天峨县"
					},
					{
						"id": "451223",
						"pid": 4512,
						"deep": 2,
						"name": "凤山",
						"pinyin": "feng shan",
						"pinyin_prefix": "f",
						"ext_id": "451223000000",
						"ext_name": "凤山县"
					},
					{
						"id": "451224",
						"pid": 4512,
						"deep": 2,
						"name": "东兰",
						"pinyin": "dong lan",
						"pinyin_prefix": "d",
						"ext_id": "451224000000",
						"ext_name": "东兰县"
					},
					{
						"id": "451225",
						"pid": 4512,
						"deep": 2,
						"name": "罗城",
						"pinyin": "luo cheng",
						"pinyin_prefix": "l",
						"ext_id": "451225000000",
						"ext_name": "罗城仫佬族自治县"
					},
					{
						"id": "451226",
						"pid": 4512,
						"deep": 2,
						"name": "环江",
						"pinyin": "huan jiang",
						"pinyin_prefix": "h",
						"ext_id": "451226000000",
						"ext_name": "环江毛南族自治县"
					},
					{
						"id": "451227",
						"pid": 4512,
						"deep": 2,
						"name": "巴马",
						"pinyin": "ba ma",
						"pinyin_prefix": "b",
						"ext_id": "451227000000",
						"ext_name": "巴马瑶族自治县"
					},
					{
						"id": "451228",
						"pid": 4512,
						"deep": 2,
						"name": "都安",
						"pinyin": "du an",
						"pinyin_prefix": "d",
						"ext_id": "451228000000",
						"ext_name": "都安瑶族自治县"
					},
					{
						"id": "451229",
						"pid": 4512,
						"deep": 2,
						"name": "大化",
						"pinyin": "da hua",
						"pinyin_prefix": "d",
						"ext_id": "451229000000",
						"ext_name": "大化瑶族自治县"
					}
				]
			},
			{
				"id": "4513",
				"pid": 45,
				"deep": 1,
				"name": "来宾",
				"pinyin": "lai bin",
				"pinyin_prefix": "l",
				"ext_id": "451300000000",
				"ext_name": "来宾市",
				"childs": [
					{
						"id": "451302",
						"pid": 4513,
						"deep": 2,
						"name": "兴宾",
						"pinyin": "xing bin",
						"pinyin_prefix": "x",
						"ext_id": "451302000000",
						"ext_name": "兴宾区"
					},
					{
						"id": "451321",
						"pid": 4513,
						"deep": 2,
						"name": "忻城",
						"pinyin": "xin cheng",
						"pinyin_prefix": "x",
						"ext_id": "451321000000",
						"ext_name": "忻城县"
					},
					{
						"id": "451322",
						"pid": 4513,
						"deep": 2,
						"name": "象州",
						"pinyin": "xiang zhou",
						"pinyin_prefix": "x",
						"ext_id": "451322000000",
						"ext_name": "象州县"
					},
					{
						"id": "451323",
						"pid": 4513,
						"deep": 2,
						"name": "武宣",
						"pinyin": "wu xuan",
						"pinyin_prefix": "w",
						"ext_id": "451323000000",
						"ext_name": "武宣县"
					},
					{
						"id": "451324",
						"pid": 4513,
						"deep": 2,
						"name": "金秀",
						"pinyin": "jin xiu",
						"pinyin_prefix": "j",
						"ext_id": "451324000000",
						"ext_name": "金秀瑶族自治县"
					},
					{
						"id": "451381",
						"pid": 4513,
						"deep": 2,
						"name": "合山",
						"pinyin": "he shan",
						"pinyin_prefix": "h",
						"ext_id": "451381000000",
						"ext_name": "合山市"
					}
				]
			},
			{
				"id": "4514",
				"pid": 45,
				"deep": 1,
				"name": "崇左",
				"pinyin": "chong zuo",
				"pinyin_prefix": "c",
				"ext_id": "451400000000",
				"ext_name": "崇左市",
				"childs": [
					{
						"id": "451402",
						"pid": 4514,
						"deep": 2,
						"name": "江州",
						"pinyin": "jiang zhou",
						"pinyin_prefix": "j",
						"ext_id": "451402000000",
						"ext_name": "江州区"
					},
					{
						"id": "451421",
						"pid": 4514,
						"deep": 2,
						"name": "扶绥",
						"pinyin": "fu sui",
						"pinyin_prefix": "f",
						"ext_id": "451421000000",
						"ext_name": "扶绥县"
					},
					{
						"id": "451422",
						"pid": 4514,
						"deep": 2,
						"name": "宁明",
						"pinyin": "ning ming",
						"pinyin_prefix": "n",
						"ext_id": "451422000000",
						"ext_name": "宁明县"
					},
					{
						"id": "451423",
						"pid": 4514,
						"deep": 2,
						"name": "龙州",
						"pinyin": "long zhou",
						"pinyin_prefix": "l",
						"ext_id": "451423000000",
						"ext_name": "龙州县"
					},
					{
						"id": "451424",
						"pid": 4514,
						"deep": 2,
						"name": "大新",
						"pinyin": "da xin",
						"pinyin_prefix": "d",
						"ext_id": "451424000000",
						"ext_name": "大新县"
					},
					{
						"id": "451425",
						"pid": 4514,
						"deep": 2,
						"name": "天等",
						"pinyin": "tian deng",
						"pinyin_prefix": "t",
						"ext_id": "451425000000",
						"ext_name": "天等县"
					},
					{
						"id": "451481",
						"pid": 4514,
						"deep": 2,
						"name": "凭祥",
						"pinyin": "ping xiang",
						"pinyin_prefix": "p",
						"ext_id": "451481000000",
						"ext_name": "凭祥市"
					}
				]
			}
		]
	},
	{
		"id": "46",
		"pid": 0,
		"deep": 0,
		"name": "海南",
		"pinyin": "hai nan",
		"pinyin_prefix": "h",
		"ext_id": "460000000000",
		"ext_name": "海南省",
		"childs": [
			{
				"id": "4601",
				"pid": 46,
				"deep": 1,
				"name": "海口",
				"pinyin": "hai kou",
				"pinyin_prefix": "h",
				"ext_id": "460100000000",
				"ext_name": "海口市",
				"childs": [
					{
						"id": "460105",
						"pid": 4601,
						"deep": 2,
						"name": "秀英",
						"pinyin": "xiu ying",
						"pinyin_prefix": "x",
						"ext_id": "460105000000",
						"ext_name": "秀英区"
					},
					{
						"id": "460106",
						"pid": 4601,
						"deep": 2,
						"name": "龙华",
						"pinyin": "long hua",
						"pinyin_prefix": "l",
						"ext_id": "460106000000",
						"ext_name": "龙华区"
					},
					{
						"id": "460107",
						"pid": 4601,
						"deep": 2,
						"name": "琼山",
						"pinyin": "qiong shan",
						"pinyin_prefix": "q",
						"ext_id": "460107000000",
						"ext_name": "琼山区"
					},
					{
						"id": "460108",
						"pid": 4601,
						"deep": 2,
						"name": "美兰",
						"pinyin": "mei lan",
						"pinyin_prefix": "m",
						"ext_id": "460108000000",
						"ext_name": "美兰区"
					}
				]
			},
			{
				"id": "4602",
				"pid": 46,
				"deep": 1,
				"name": "三亚",
				"pinyin": "san ya",
				"pinyin_prefix": "s",
				"ext_id": "460200000000",
				"ext_name": "三亚市",
				"childs": [
					{
						"id": "460202",
						"pid": 4602,
						"deep": 2,
						"name": "海棠",
						"pinyin": "hai tang",
						"pinyin_prefix": "h",
						"ext_id": "460202000000",
						"ext_name": "海棠区"
					},
					{
						"id": "460203",
						"pid": 4602,
						"deep": 2,
						"name": "吉阳",
						"pinyin": "ji yang",
						"pinyin_prefix": "j",
						"ext_id": "460203000000",
						"ext_name": "吉阳区"
					},
					{
						"id": "460204",
						"pid": 4602,
						"deep": 2,
						"name": "天涯",
						"pinyin": "tian ya",
						"pinyin_prefix": "t",
						"ext_id": "460204000000",
						"ext_name": "天涯区"
					},
					{
						"id": "460205",
						"pid": 4602,
						"deep": 2,
						"name": "崖州",
						"pinyin": "ya zhou",
						"pinyin_prefix": "y",
						"ext_id": "460205000000",
						"ext_name": "崖州区"
					}
				]
			},
			{
				"id": "4603",
				"pid": 46,
				"deep": 1,
				"name": "三沙",
				"pinyin": "san sha",
				"pinyin_prefix": "s",
				"ext_id": "460300000000",
				"ext_name": "三沙市",
				"childs": [
					{
						"id": "460301",
						"pid": 4603,
						"deep": 2,
						"name": "西沙",
						"pinyin": "xi sha",
						"pinyin_prefix": "x",
						"ext_id": "460301000000",
						"ext_name": "西沙区"
					},
					{
						"id": "460302",
						"pid": 4603,
						"deep": 2,
						"name": "南沙",
						"pinyin": "nan sha",
						"pinyin_prefix": "n",
						"ext_id": "460302000000",
						"ext_name": "南沙区"
					}
				]
			},
			{
				"id": "4604",
				"pid": 46,
				"deep": 1,
				"name": "儋州",
				"pinyin": "dan zhou",
				"pinyin_prefix": "d",
				"ext_id": "460400000000",
				"ext_name": "儋州市",
				"childs": [
					{
						"id": "460400",
						"pid": 4604,
						"deep": 2,
						"name": "儋州",
						"pinyin": "dan zhou",
						"pinyin_prefix": "d",
						"ext_id": "460400000000",
						"ext_name": "儋州市"
					}
				]
			},
			{
				"id": "469001",
				"pid": 46,
				"deep": 1,
				"name": "五指山",
				"pinyin": "wu zhi shan",
				"pinyin_prefix": "w",
				"ext_id": "469001000000",
				"ext_name": "五指山市",
				"childs": [
					{
						"id": "469001000",
						"pid": 469001,
						"deep": 2,
						"name": "五指山",
						"pinyin": "wu zhi shan",
						"pinyin_prefix": "w",
						"ext_id": "469001000000",
						"ext_name": "五指山市"
					}
				]
			},
			{
				"id": "469002",
				"pid": 46,
				"deep": 1,
				"name": "琼海",
				"pinyin": "qiong hai",
				"pinyin_prefix": "q",
				"ext_id": "469002000000",
				"ext_name": "琼海市",
				"childs": [
					{
						"id": "469002000",
						"pid": 469002,
						"deep": 2,
						"name": "琼海",
						"pinyin": "qiong hai",
						"pinyin_prefix": "q",
						"ext_id": "469002000000",
						"ext_name": "琼海市"
					}
				]
			},
			{
				"id": "469005",
				"pid": 46,
				"deep": 1,
				"name": "文昌",
				"pinyin": "wen chang",
				"pinyin_prefix": "w",
				"ext_id": "469005000000",
				"ext_name": "文昌市",
				"childs": [
					{
						"id": "469005000",
						"pid": 469005,
						"deep": 2,
						"name": "文昌",
						"pinyin": "wen chang",
						"pinyin_prefix": "w",
						"ext_id": "469005000000",
						"ext_name": "文昌市"
					}
				]
			},
			{
				"id": "469006",
				"pid": 46,
				"deep": 1,
				"name": "万宁",
				"pinyin": "wan ning",
				"pinyin_prefix": "w",
				"ext_id": "469006000000",
				"ext_name": "万宁市",
				"childs": [
					{
						"id": "469006000",
						"pid": 469006,
						"deep": 2,
						"name": "万宁",
						"pinyin": "wan ning",
						"pinyin_prefix": "w",
						"ext_id": "469006000000",
						"ext_name": "万宁市"
					}
				]
			},
			{
				"id": "469007",
				"pid": 46,
				"deep": 1,
				"name": "东方",
				"pinyin": "dong fang",
				"pinyin_prefix": "d",
				"ext_id": "469007000000",
				"ext_name": "东方市",
				"childs": [
					{
						"id": "469007000",
						"pid": 469007,
						"deep": 2,
						"name": "东方",
						"pinyin": "dong fang",
						"pinyin_prefix": "d",
						"ext_id": "469007000000",
						"ext_name": "东方市"
					}
				]
			},
			{
				"id": "469021",
				"pid": 46,
				"deep": 1,
				"name": "定安",
				"pinyin": "ding an",
				"pinyin_prefix": "d",
				"ext_id": "469021000000",
				"ext_name": "定安县",
				"childs": [
					{
						"id": "469021000",
						"pid": 469021,
						"deep": 2,
						"name": "定安",
						"pinyin": "ding an",
						"pinyin_prefix": "d",
						"ext_id": "469021000000",
						"ext_name": "定安县"
					}
				]
			},
			{
				"id": "469022",
				"pid": 46,
				"deep": 1,
				"name": "屯昌",
				"pinyin": "tun chang",
				"pinyin_prefix": "t",
				"ext_id": "469022000000",
				"ext_name": "屯昌县",
				"childs": [
					{
						"id": "469022000",
						"pid": 469022,
						"deep": 2,
						"name": "屯昌",
						"pinyin": "tun chang",
						"pinyin_prefix": "t",
						"ext_id": "469022000000",
						"ext_name": "屯昌县"
					}
				]
			},
			{
				"id": "469023",
				"pid": 46,
				"deep": 1,
				"name": "澄迈",
				"pinyin": "cheng mai",
				"pinyin_prefix": "c",
				"ext_id": "469023000000",
				"ext_name": "澄迈县",
				"childs": [
					{
						"id": "469023000",
						"pid": 469023,
						"deep": 2,
						"name": "澄迈",
						"pinyin": "cheng mai",
						"pinyin_prefix": "c",
						"ext_id": "469023000000",
						"ext_name": "澄迈县"
					}
				]
			},
			{
				"id": "469024",
				"pid": 46,
				"deep": 1,
				"name": "临高",
				"pinyin": "lin gao",
				"pinyin_prefix": "l",
				"ext_id": "469024000000",
				"ext_name": "临高县",
				"childs": [
					{
						"id": "469024000",
						"pid": 469024,
						"deep": 2,
						"name": "临高",
						"pinyin": "lin gao",
						"pinyin_prefix": "l",
						"ext_id": "469024000000",
						"ext_name": "临高县"
					}
				]
			},
			{
				"id": "469025",
				"pid": 46,
				"deep": 1,
				"name": "白沙",
				"pinyin": "bai sha",
				"pinyin_prefix": "b",
				"ext_id": "469025000000",
				"ext_name": "白沙黎族自治县",
				"childs": [
					{
						"id": "469025000",
						"pid": 469025,
						"deep": 2,
						"name": "白沙",
						"pinyin": "bai sha",
						"pinyin_prefix": "b",
						"ext_id": "469025000000",
						"ext_name": "白沙黎族自治县"
					}
				]
			},
			{
				"id": "469026",
				"pid": 46,
				"deep": 1,
				"name": "昌江",
				"pinyin": "chang jiang",
				"pinyin_prefix": "c",
				"ext_id": "469026000000",
				"ext_name": "昌江黎族自治县",
				"childs": [
					{
						"id": "469026000",
						"pid": 469026,
						"deep": 2,
						"name": "昌江",
						"pinyin": "chang jiang",
						"pinyin_prefix": "c",
						"ext_id": "469026000000",
						"ext_name": "昌江黎族自治县"
					}
				]
			},
			{
				"id": "469027",
				"pid": 46,
				"deep": 1,
				"name": "乐东",
				"pinyin": "le dong",
				"pinyin_prefix": "l",
				"ext_id": "469027000000",
				"ext_name": "乐东黎族自治县",
				"childs": [
					{
						"id": "469027000",
						"pid": 469027,
						"deep": 2,
						"name": "乐东",
						"pinyin": "le dong",
						"pinyin_prefix": "l",
						"ext_id": "469027000000",
						"ext_name": "乐东黎族自治县"
					}
				]
			},
			{
				"id": "469028",
				"pid": 46,
				"deep": 1,
				"name": "陵水",
				"pinyin": "ling shui",
				"pinyin_prefix": "l",
				"ext_id": "469028000000",
				"ext_name": "陵水黎族自治县",
				"childs": [
					{
						"id": "469028000",
						"pid": 469028,
						"deep": 2,
						"name": "陵水",
						"pinyin": "ling shui",
						"pinyin_prefix": "l",
						"ext_id": "469028000000",
						"ext_name": "陵水黎族自治县"
					}
				]
			},
			{
				"id": "469029",
				"pid": 46,
				"deep": 1,
				"name": "保亭",
				"pinyin": "bao ting",
				"pinyin_prefix": "b",
				"ext_id": "469029000000",
				"ext_name": "保亭黎族苗族自治县",
				"childs": [
					{
						"id": "469029000",
						"pid": 469029,
						"deep": 2,
						"name": "保亭",
						"pinyin": "bao ting",
						"pinyin_prefix": "b",
						"ext_id": "469029000000",
						"ext_name": "保亭黎族苗族自治县"
					}
				]
			},
			{
				"id": "469030",
				"pid": 46,
				"deep": 1,
				"name": "琼中",
				"pinyin": "qiong zhong",
				"pinyin_prefix": "q",
				"ext_id": "469030000000",
				"ext_name": "琼中黎族苗族自治县",
				"childs": [
					{
						"id": "469030000",
						"pid": 469030,
						"deep": 2,
						"name": "琼中",
						"pinyin": "qiong zhong",
						"pinyin_prefix": "q",
						"ext_id": "469030000000",
						"ext_name": "琼中黎族苗族自治县"
					}
				]
			}
		]
	},
	{
		"id": "50",
		"pid": 0,
		"deep": 0,
		"name": "重庆",
		"pinyin": "chong qing",
		"pinyin_prefix": "c",
		"ext_id": "500000000000",
		"ext_name": "重庆市",
		"childs": [
			{
				"id": "5001",
				"pid": 50,
				"deep": 1,
				"name": "重庆城区",
				"pinyin": "chong qing cheng qu",
				"pinyin_prefix": "c",
				"ext_id": "500100000000",
				"ext_name": "重庆城区",
				"childs": [
					{
						"id": "500101",
						"pid": 5001,
						"deep": 2,
						"name": "万州",
						"pinyin": "wan zhou",
						"pinyin_prefix": "w",
						"ext_id": "500101000000",
						"ext_name": "万州区"
					},
					{
						"id": "500102",
						"pid": 5001,
						"deep": 2,
						"name": "涪陵",
						"pinyin": "fu ling",
						"pinyin_prefix": "f",
						"ext_id": "500102000000",
						"ext_name": "涪陵区"
					},
					{
						"id": "500103",
						"pid": 5001,
						"deep": 2,
						"name": "渝中",
						"pinyin": "yu zhong",
						"pinyin_prefix": "y",
						"ext_id": "500103000000",
						"ext_name": "渝中区"
					},
					{
						"id": "500104",
						"pid": 5001,
						"deep": 2,
						"name": "大渡口",
						"pinyin": "da du kou",
						"pinyin_prefix": "d",
						"ext_id": "500104000000",
						"ext_name": "大渡口区"
					},
					{
						"id": "500105",
						"pid": 5001,
						"deep": 2,
						"name": "江北",
						"pinyin": "jiang bei",
						"pinyin_prefix": "j",
						"ext_id": "500105000000",
						"ext_name": "江北区"
					},
					{
						"id": "500106",
						"pid": 5001,
						"deep": 2,
						"name": "沙坪坝",
						"pinyin": "sha ping ba",
						"pinyin_prefix": "s",
						"ext_id": "500106000000",
						"ext_name": "沙坪坝区"
					},
					{
						"id": "500107",
						"pid": 5001,
						"deep": 2,
						"name": "九龙坡",
						"pinyin": "jiu long po",
						"pinyin_prefix": "j",
						"ext_id": "500107000000",
						"ext_name": "九龙坡区"
					},
					{
						"id": "500108",
						"pid": 5001,
						"deep": 2,
						"name": "南岸",
						"pinyin": "nan an",
						"pinyin_prefix": "n",
						"ext_id": "500108000000",
						"ext_name": "南岸区"
					},
					{
						"id": "500109",
						"pid": 5001,
						"deep": 2,
						"name": "北碚",
						"pinyin": "bei bei",
						"pinyin_prefix": "b",
						"ext_id": "500109000000",
						"ext_name": "北碚区"
					},
					{
						"id": "500110",
						"pid": 5001,
						"deep": 2,
						"name": "綦江",
						"pinyin": "qi jiang",
						"pinyin_prefix": "q",
						"ext_id": "500110000000",
						"ext_name": "綦江区"
					},
					{
						"id": "500111",
						"pid": 5001,
						"deep": 2,
						"name": "大足",
						"pinyin": "da zu",
						"pinyin_prefix": "d",
						"ext_id": "500111000000",
						"ext_name": "大足区"
					},
					{
						"id": "500112",
						"pid": 5001,
						"deep": 2,
						"name": "渝北",
						"pinyin": "yu bei",
						"pinyin_prefix": "y",
						"ext_id": "500112000000",
						"ext_name": "渝北区"
					},
					{
						"id": "500113",
						"pid": 5001,
						"deep": 2,
						"name": "巴南",
						"pinyin": "ba nan",
						"pinyin_prefix": "b",
						"ext_id": "500113000000",
						"ext_name": "巴南区"
					},
					{
						"id": "500114",
						"pid": 5001,
						"deep": 2,
						"name": "黔江",
						"pinyin": "qian jiang",
						"pinyin_prefix": "q",
						"ext_id": "500114000000",
						"ext_name": "黔江区"
					},
					{
						"id": "500115",
						"pid": 5001,
						"deep": 2,
						"name": "长寿",
						"pinyin": "chang shou",
						"pinyin_prefix": "c",
						"ext_id": "500115000000",
						"ext_name": "长寿区"
					},
					{
						"id": "500116",
						"pid": 5001,
						"deep": 2,
						"name": "江津",
						"pinyin": "jiang jin",
						"pinyin_prefix": "j",
						"ext_id": "500116000000",
						"ext_name": "江津区"
					},
					{
						"id": "500117",
						"pid": 5001,
						"deep": 2,
						"name": "合川",
						"pinyin": "he chuan",
						"pinyin_prefix": "h",
						"ext_id": "500117000000",
						"ext_name": "合川区"
					},
					{
						"id": "500118",
						"pid": 5001,
						"deep": 2,
						"name": "永川",
						"pinyin": "yong chuan",
						"pinyin_prefix": "y",
						"ext_id": "500118000000",
						"ext_name": "永川区"
					},
					{
						"id": "500119",
						"pid": 5001,
						"deep": 2,
						"name": "南川",
						"pinyin": "nan chuan",
						"pinyin_prefix": "n",
						"ext_id": "500119000000",
						"ext_name": "南川区"
					},
					{
						"id": "500120",
						"pid": 5001,
						"deep": 2,
						"name": "璧山",
						"pinyin": "bi shan",
						"pinyin_prefix": "b",
						"ext_id": "500120000000",
						"ext_name": "璧山区"
					},
					{
						"id": "500151",
						"pid": 5001,
						"deep": 2,
						"name": "铜梁",
						"pinyin": "tong liang",
						"pinyin_prefix": "t",
						"ext_id": "500151000000",
						"ext_name": "铜梁区"
					},
					{
						"id": "500152",
						"pid": 5001,
						"deep": 2,
						"name": "潼南",
						"pinyin": "tong nan",
						"pinyin_prefix": "t",
						"ext_id": "500152000000",
						"ext_name": "潼南区"
					},
					{
						"id": "500153",
						"pid": 5001,
						"deep": 2,
						"name": "荣昌",
						"pinyin": "rong chang",
						"pinyin_prefix": "r",
						"ext_id": "500153000000",
						"ext_name": "荣昌区"
					},
					{
						"id": "500154",
						"pid": 5001,
						"deep": 2,
						"name": "开州",
						"pinyin": "kai zhou",
						"pinyin_prefix": "k",
						"ext_id": "500154000000",
						"ext_name": "开州区"
					},
					{
						"id": "500155",
						"pid": 5001,
						"deep": 2,
						"name": "梁平",
						"pinyin": "liang ping",
						"pinyin_prefix": "l",
						"ext_id": "500155000000",
						"ext_name": "梁平区"
					},
					{
						"id": "500156",
						"pid": 5001,
						"deep": 2,
						"name": "武隆",
						"pinyin": "wu long",
						"pinyin_prefix": "w",
						"ext_id": "500156000000",
						"ext_name": "武隆区"
					}
				]
			},
			{
				"id": "5002",
				"pid": 50,
				"deep": 1,
				"name": "重庆郊县",
				"pinyin": "chong qing jiao xian",
				"pinyin_prefix": "c",
				"ext_id": "500200000000",
				"ext_name": "重庆郊县",
				"childs": [
					{
						"id": "500229",
						"pid": 5002,
						"deep": 2,
						"name": "城口",
						"pinyin": "cheng kou",
						"pinyin_prefix": "c",
						"ext_id": "500229000000",
						"ext_name": "城口县"
					},
					{
						"id": "500230",
						"pid": 5002,
						"deep": 2,
						"name": "丰都",
						"pinyin": "feng du",
						"pinyin_prefix": "f",
						"ext_id": "500230000000",
						"ext_name": "丰都县"
					},
					{
						"id": "500231",
						"pid": 5002,
						"deep": 2,
						"name": "垫江",
						"pinyin": "dian jiang",
						"pinyin_prefix": "d",
						"ext_id": "500231000000",
						"ext_name": "垫江县"
					},
					{
						"id": "500233",
						"pid": 5002,
						"deep": 2,
						"name": "忠县",
						"pinyin": "zhong xian",
						"pinyin_prefix": "z",
						"ext_id": "500233000000",
						"ext_name": "忠县"
					},
					{
						"id": "500235",
						"pid": 5002,
						"deep": 2,
						"name": "云阳",
						"pinyin": "yun yang",
						"pinyin_prefix": "y",
						"ext_id": "500235000000",
						"ext_name": "云阳县"
					},
					{
						"id": "500236",
						"pid": 5002,
						"deep": 2,
						"name": "奉节",
						"pinyin": "feng jie",
						"pinyin_prefix": "f",
						"ext_id": "500236000000",
						"ext_name": "奉节县"
					},
					{
						"id": "500237",
						"pid": 5002,
						"deep": 2,
						"name": "巫山",
						"pinyin": "wu shan",
						"pinyin_prefix": "w",
						"ext_id": "500237000000",
						"ext_name": "巫山县"
					},
					{
						"id": "500238",
						"pid": 5002,
						"deep": 2,
						"name": "巫溪",
						"pinyin": "wu xi",
						"pinyin_prefix": "w",
						"ext_id": "500238000000",
						"ext_name": "巫溪县"
					},
					{
						"id": "500240",
						"pid": 5002,
						"deep": 2,
						"name": "石柱",
						"pinyin": "shi zhu",
						"pinyin_prefix": "s",
						"ext_id": "500240000000",
						"ext_name": "石柱土家族自治县"
					},
					{
						"id": "500241",
						"pid": 5002,
						"deep": 2,
						"name": "秀山",
						"pinyin": "xiu shan",
						"pinyin_prefix": "x",
						"ext_id": "500241000000",
						"ext_name": "秀山土家族苗族自治县"
					},
					{
						"id": "500242",
						"pid": 5002,
						"deep": 2,
						"name": "酉阳",
						"pinyin": "you yang",
						"pinyin_prefix": "y",
						"ext_id": "500242000000",
						"ext_name": "酉阳土家族苗族自治县"
					},
					{
						"id": "500243",
						"pid": 5002,
						"deep": 2,
						"name": "彭水",
						"pinyin": "peng shui",
						"pinyin_prefix": "p",
						"ext_id": "500243000000",
						"ext_name": "彭水苗族土家族自治县"
					}
				]
			}
		]
	},
	{
		"id": "51",
		"pid": 0,
		"deep": 0,
		"name": "四川",
		"pinyin": "si chuan",
		"pinyin_prefix": "s",
		"ext_id": "510000000000",
		"ext_name": "四川省",
		"childs": [
			{
				"id": "5101",
				"pid": 51,
				"deep": 1,
				"name": "成都",
				"pinyin": "cheng du",
				"pinyin_prefix": "c",
				"ext_id": "510100000000",
				"ext_name": "成都市",
				"childs": [
					{
						"id": "510104",
						"pid": 5101,
						"deep": 2,
						"name": "锦江",
						"pinyin": "jin jiang",
						"pinyin_prefix": "j",
						"ext_id": "510104000000",
						"ext_name": "锦江区"
					},
					{
						"id": "510105",
						"pid": 5101,
						"deep": 2,
						"name": "青羊",
						"pinyin": "qing yang",
						"pinyin_prefix": "q",
						"ext_id": "510105000000",
						"ext_name": "青羊区"
					},
					{
						"id": "510106",
						"pid": 5101,
						"deep": 2,
						"name": "金牛",
						"pinyin": "jin niu",
						"pinyin_prefix": "j",
						"ext_id": "510106000000",
						"ext_name": "金牛区"
					},
					{
						"id": "510107",
						"pid": 5101,
						"deep": 2,
						"name": "武侯",
						"pinyin": "wu hou",
						"pinyin_prefix": "w",
						"ext_id": "510107000000",
						"ext_name": "武侯区"
					},
					{
						"id": "510108",
						"pid": 5101,
						"deep": 2,
						"name": "成华",
						"pinyin": "cheng hua",
						"pinyin_prefix": "c",
						"ext_id": "510108000000",
						"ext_name": "成华区"
					},
					{
						"id": "510112",
						"pid": 5101,
						"deep": 2,
						"name": "龙泉驿",
						"pinyin": "long quan yi",
						"pinyin_prefix": "l",
						"ext_id": "510112000000",
						"ext_name": "龙泉驿区"
					},
					{
						"id": "510113",
						"pid": 5101,
						"deep": 2,
						"name": "青白江",
						"pinyin": "qing bai jiang",
						"pinyin_prefix": "q",
						"ext_id": "510113000000",
						"ext_name": "青白江区"
					},
					{
						"id": "510114",
						"pid": 5101,
						"deep": 2,
						"name": "新都",
						"pinyin": "xin du",
						"pinyin_prefix": "x",
						"ext_id": "510114000000",
						"ext_name": "新都区"
					},
					{
						"id": "510115",
						"pid": 5101,
						"deep": 2,
						"name": "温江",
						"pinyin": "wen jiang",
						"pinyin_prefix": "w",
						"ext_id": "510115000000",
						"ext_name": "温江区"
					},
					{
						"id": "510116",
						"pid": 5101,
						"deep": 2,
						"name": "双流",
						"pinyin": "shuang liu",
						"pinyin_prefix": "s",
						"ext_id": "510116000000",
						"ext_name": "双流区"
					},
					{
						"id": "510117",
						"pid": 5101,
						"deep": 2,
						"name": "郫都",
						"pinyin": "pi du",
						"pinyin_prefix": "p",
						"ext_id": "510117000000",
						"ext_name": "郫都区"
					},
					{
						"id": "510118",
						"pid": 5101,
						"deep": 2,
						"name": "新津",
						"pinyin": "xin jin",
						"pinyin_prefix": "x",
						"ext_id": "510118000000",
						"ext_name": "新津区"
					},
					{
						"id": "510121",
						"pid": 5101,
						"deep": 2,
						"name": "金堂",
						"pinyin": "jin tang",
						"pinyin_prefix": "j",
						"ext_id": "510121000000",
						"ext_name": "金堂县"
					},
					{
						"id": "510129",
						"pid": 5101,
						"deep": 2,
						"name": "大邑",
						"pinyin": "da yi",
						"pinyin_prefix": "d",
						"ext_id": "510129000000",
						"ext_name": "大邑县"
					},
					{
						"id": "510131",
						"pid": 5101,
						"deep": 2,
						"name": "蒲江",
						"pinyin": "pu jiang",
						"pinyin_prefix": "p",
						"ext_id": "510131000000",
						"ext_name": "蒲江县"
					},
					{
						"id": "510181",
						"pid": 5101,
						"deep": 2,
						"name": "都江堰",
						"pinyin": "du jiang yan",
						"pinyin_prefix": "d",
						"ext_id": "510181000000",
						"ext_name": "都江堰市"
					},
					{
						"id": "510182",
						"pid": 5101,
						"deep": 2,
						"name": "彭州",
						"pinyin": "peng zhou",
						"pinyin_prefix": "p",
						"ext_id": "510182000000",
						"ext_name": "彭州市"
					},
					{
						"id": "510183",
						"pid": 5101,
						"deep": 2,
						"name": "邛崃",
						"pinyin": "qiong lai",
						"pinyin_prefix": "q",
						"ext_id": "510183000000",
						"ext_name": "邛崃市"
					},
					{
						"id": "510184",
						"pid": 5101,
						"deep": 2,
						"name": "崇州",
						"pinyin": "chong zhou",
						"pinyin_prefix": "c",
						"ext_id": "510184000000",
						"ext_name": "崇州市"
					},
					{
						"id": "510185",
						"pid": 5101,
						"deep": 2,
						"name": "简阳",
						"pinyin": "jian yang",
						"pinyin_prefix": "j",
						"ext_id": "510185000000",
						"ext_name": "简阳市"
					}
				]
			},
			{
				"id": "5103",
				"pid": 51,
				"deep": 1,
				"name": "自贡",
				"pinyin": "zi gong",
				"pinyin_prefix": "z",
				"ext_id": "510300000000",
				"ext_name": "自贡市",
				"childs": [
					{
						"id": "510302",
						"pid": 5103,
						"deep": 2,
						"name": "自流井",
						"pinyin": "zi liu jing",
						"pinyin_prefix": "z",
						"ext_id": "510302000000",
						"ext_name": "自流井区"
					},
					{
						"id": "510303",
						"pid": 5103,
						"deep": 2,
						"name": "贡井",
						"pinyin": "gong jing",
						"pinyin_prefix": "g",
						"ext_id": "510303000000",
						"ext_name": "贡井区"
					},
					{
						"id": "510304",
						"pid": 5103,
						"deep": 2,
						"name": "大安",
						"pinyin": "da an",
						"pinyin_prefix": "d",
						"ext_id": "510304000000",
						"ext_name": "大安区"
					},
					{
						"id": "510311",
						"pid": 5103,
						"deep": 2,
						"name": "沿滩",
						"pinyin": "yan tan",
						"pinyin_prefix": "y",
						"ext_id": "510311000000",
						"ext_name": "沿滩区"
					},
					{
						"id": "510321",
						"pid": 5103,
						"deep": 2,
						"name": "荣县",
						"pinyin": "rong xian",
						"pinyin_prefix": "r",
						"ext_id": "510321000000",
						"ext_name": "荣县"
					},
					{
						"id": "510322",
						"pid": 5103,
						"deep": 2,
						"name": "富顺",
						"pinyin": "fu shun",
						"pinyin_prefix": "f",
						"ext_id": "510322000000",
						"ext_name": "富顺县"
					}
				]
			},
			{
				"id": "5104",
				"pid": 51,
				"deep": 1,
				"name": "攀枝花",
				"pinyin": "pan zhi hua",
				"pinyin_prefix": "p",
				"ext_id": "510400000000",
				"ext_name": "攀枝花市",
				"childs": [
					{
						"id": "510402",
						"pid": 5104,
						"deep": 2,
						"name": "东区",
						"pinyin": "dong qu",
						"pinyin_prefix": "d",
						"ext_id": "510402000000",
						"ext_name": "东区"
					},
					{
						"id": "510403",
						"pid": 5104,
						"deep": 2,
						"name": "西区",
						"pinyin": "xi qu",
						"pinyin_prefix": "x",
						"ext_id": "510403000000",
						"ext_name": "西区"
					},
					{
						"id": "510411",
						"pid": 5104,
						"deep": 2,
						"name": "仁和",
						"pinyin": "ren he",
						"pinyin_prefix": "r",
						"ext_id": "510411000000",
						"ext_name": "仁和区"
					},
					{
						"id": "510421",
						"pid": 5104,
						"deep": 2,
						"name": "米易",
						"pinyin": "mi yi",
						"pinyin_prefix": "m",
						"ext_id": "510421000000",
						"ext_name": "米易县"
					},
					{
						"id": "510422",
						"pid": 5104,
						"deep": 2,
						"name": "盐边",
						"pinyin": "yan bian",
						"pinyin_prefix": "y",
						"ext_id": "510422000000",
						"ext_name": "盐边县"
					}
				]
			},
			{
				"id": "5105",
				"pid": 51,
				"deep": 1,
				"name": "泸州",
				"pinyin": "lu zhou",
				"pinyin_prefix": "l",
				"ext_id": "510500000000",
				"ext_name": "泸州市",
				"childs": [
					{
						"id": "510502",
						"pid": 5105,
						"deep": 2,
						"name": "江阳",
						"pinyin": "jiang yang",
						"pinyin_prefix": "j",
						"ext_id": "510502000000",
						"ext_name": "江阳区"
					},
					{
						"id": "510503",
						"pid": 5105,
						"deep": 2,
						"name": "纳溪",
						"pinyin": "na xi",
						"pinyin_prefix": "n",
						"ext_id": "510503000000",
						"ext_name": "纳溪区"
					},
					{
						"id": "510504",
						"pid": 5105,
						"deep": 2,
						"name": "龙马潭",
						"pinyin": "long ma tan",
						"pinyin_prefix": "l",
						"ext_id": "510504000000",
						"ext_name": "龙马潭区"
					},
					{
						"id": "510521",
						"pid": 5105,
						"deep": 2,
						"name": "泸县",
						"pinyin": "lu xian",
						"pinyin_prefix": "l",
						"ext_id": "510521000000",
						"ext_name": "泸县"
					},
					{
						"id": "510522",
						"pid": 5105,
						"deep": 2,
						"name": "合江",
						"pinyin": "he jiang",
						"pinyin_prefix": "h",
						"ext_id": "510522000000",
						"ext_name": "合江县"
					},
					{
						"id": "510524",
						"pid": 5105,
						"deep": 2,
						"name": "叙永",
						"pinyin": "xu yong",
						"pinyin_prefix": "x",
						"ext_id": "510524000000",
						"ext_name": "叙永县"
					},
					{
						"id": "510525",
						"pid": 5105,
						"deep": 2,
						"name": "古蔺",
						"pinyin": "gu lin",
						"pinyin_prefix": "g",
						"ext_id": "510525000000",
						"ext_name": "古蔺县"
					}
				]
			},
			{
				"id": "5106",
				"pid": 51,
				"deep": 1,
				"name": "德阳",
				"pinyin": "de yang",
				"pinyin_prefix": "d",
				"ext_id": "510600000000",
				"ext_name": "德阳市",
				"childs": [
					{
						"id": "510603",
						"pid": 5106,
						"deep": 2,
						"name": "旌阳",
						"pinyin": "jing yang",
						"pinyin_prefix": "j",
						"ext_id": "510603000000",
						"ext_name": "旌阳区"
					},
					{
						"id": "510604",
						"pid": 5106,
						"deep": 2,
						"name": "罗江",
						"pinyin": "luo jiang",
						"pinyin_prefix": "l",
						"ext_id": "510604000000",
						"ext_name": "罗江区"
					},
					{
						"id": "510623",
						"pid": 5106,
						"deep": 2,
						"name": "中江",
						"pinyin": "zhong jiang",
						"pinyin_prefix": "z",
						"ext_id": "510623000000",
						"ext_name": "中江县"
					},
					{
						"id": "510681",
						"pid": 5106,
						"deep": 2,
						"name": "广汉",
						"pinyin": "guang han",
						"pinyin_prefix": "g",
						"ext_id": "510681000000",
						"ext_name": "广汉市"
					},
					{
						"id": "510682",
						"pid": 5106,
						"deep": 2,
						"name": "什邡",
						"pinyin": "shi fang",
						"pinyin_prefix": "s",
						"ext_id": "510682000000",
						"ext_name": "什邡市"
					},
					{
						"id": "510683",
						"pid": 5106,
						"deep": 2,
						"name": "绵竹",
						"pinyin": "mian zhu",
						"pinyin_prefix": "m",
						"ext_id": "510683000000",
						"ext_name": "绵竹市"
					}
				]
			},
			{
				"id": "5107",
				"pid": 51,
				"deep": 1,
				"name": "绵阳",
				"pinyin": "mian yang",
				"pinyin_prefix": "m",
				"ext_id": "510700000000",
				"ext_name": "绵阳市",
				"childs": [
					{
						"id": "510703",
						"pid": 5107,
						"deep": 2,
						"name": "涪城",
						"pinyin": "fu cheng",
						"pinyin_prefix": "f",
						"ext_id": "510703000000",
						"ext_name": "涪城区"
					},
					{
						"id": "510704",
						"pid": 5107,
						"deep": 2,
						"name": "游仙",
						"pinyin": "you xian",
						"pinyin_prefix": "y",
						"ext_id": "510704000000",
						"ext_name": "游仙区"
					},
					{
						"id": "510705",
						"pid": 5107,
						"deep": 2,
						"name": "安州",
						"pinyin": "an zhou",
						"pinyin_prefix": "a",
						"ext_id": "510705000000",
						"ext_name": "安州区"
					},
					{
						"id": "510722",
						"pid": 5107,
						"deep": 2,
						"name": "三台",
						"pinyin": "san tai",
						"pinyin_prefix": "s",
						"ext_id": "510722000000",
						"ext_name": "三台县"
					},
					{
						"id": "510723",
						"pid": 5107,
						"deep": 2,
						"name": "盐亭",
						"pinyin": "yan ting",
						"pinyin_prefix": "y",
						"ext_id": "510723000000",
						"ext_name": "盐亭县"
					},
					{
						"id": "510725",
						"pid": 5107,
						"deep": 2,
						"name": "梓潼",
						"pinyin": "zi tong",
						"pinyin_prefix": "z",
						"ext_id": "510725000000",
						"ext_name": "梓潼县"
					},
					{
						"id": "510726",
						"pid": 5107,
						"deep": 2,
						"name": "北川",
						"pinyin": "bei chuan",
						"pinyin_prefix": "b",
						"ext_id": "510726000000",
						"ext_name": "北川羌族自治县"
					},
					{
						"id": "510727",
						"pid": 5107,
						"deep": 2,
						"name": "平武",
						"pinyin": "ping wu",
						"pinyin_prefix": "p",
						"ext_id": "510727000000",
						"ext_name": "平武县"
					},
					{
						"id": "510781",
						"pid": 5107,
						"deep": 2,
						"name": "江油",
						"pinyin": "jiang you",
						"pinyin_prefix": "j",
						"ext_id": "510781000000",
						"ext_name": "江油市"
					}
				]
			},
			{
				"id": "5108",
				"pid": 51,
				"deep": 1,
				"name": "广元",
				"pinyin": "guang yuan",
				"pinyin_prefix": "g",
				"ext_id": "510800000000",
				"ext_name": "广元市",
				"childs": [
					{
						"id": "510802",
						"pid": 5108,
						"deep": 2,
						"name": "利州",
						"pinyin": "li zhou",
						"pinyin_prefix": "l",
						"ext_id": "510802000000",
						"ext_name": "利州区"
					},
					{
						"id": "510811",
						"pid": 5108,
						"deep": 2,
						"name": "昭化",
						"pinyin": "zhao hua",
						"pinyin_prefix": "z",
						"ext_id": "510811000000",
						"ext_name": "昭化区"
					},
					{
						"id": "510812",
						"pid": 5108,
						"deep": 2,
						"name": "朝天",
						"pinyin": "chao tian",
						"pinyin_prefix": "c",
						"ext_id": "510812000000",
						"ext_name": "朝天区"
					},
					{
						"id": "510821",
						"pid": 5108,
						"deep": 2,
						"name": "旺苍",
						"pinyin": "wang cang",
						"pinyin_prefix": "w",
						"ext_id": "510821000000",
						"ext_name": "旺苍县"
					},
					{
						"id": "510822",
						"pid": 5108,
						"deep": 2,
						"name": "青川",
						"pinyin": "qing chuan",
						"pinyin_prefix": "q",
						"ext_id": "510822000000",
						"ext_name": "青川县"
					},
					{
						"id": "510823",
						"pid": 5108,
						"deep": 2,
						"name": "剑阁",
						"pinyin": "jian ge",
						"pinyin_prefix": "j",
						"ext_id": "510823000000",
						"ext_name": "剑阁县"
					},
					{
						"id": "510824",
						"pid": 5108,
						"deep": 2,
						"name": "苍溪",
						"pinyin": "cang xi",
						"pinyin_prefix": "c",
						"ext_id": "510824000000",
						"ext_name": "苍溪县"
					}
				]
			},
			{
				"id": "5109",
				"pid": 51,
				"deep": 1,
				"name": "遂宁",
				"pinyin": "sui ning",
				"pinyin_prefix": "s",
				"ext_id": "510900000000",
				"ext_name": "遂宁市",
				"childs": [
					{
						"id": "510903",
						"pid": 5109,
						"deep": 2,
						"name": "船山",
						"pinyin": "chuan shan",
						"pinyin_prefix": "c",
						"ext_id": "510903000000",
						"ext_name": "船山区"
					},
					{
						"id": "510904",
						"pid": 5109,
						"deep": 2,
						"name": "安居",
						"pinyin": "an ju",
						"pinyin_prefix": "a",
						"ext_id": "510904000000",
						"ext_name": "安居区"
					},
					{
						"id": "510921",
						"pid": 5109,
						"deep": 2,
						"name": "蓬溪",
						"pinyin": "peng xi",
						"pinyin_prefix": "p",
						"ext_id": "510921000000",
						"ext_name": "蓬溪县"
					},
					{
						"id": "510923",
						"pid": 5109,
						"deep": 2,
						"name": "大英",
						"pinyin": "da ying",
						"pinyin_prefix": "d",
						"ext_id": "510923000000",
						"ext_name": "大英县"
					},
					{
						"id": "510981",
						"pid": 5109,
						"deep": 2,
						"name": "射洪",
						"pinyin": "she hong",
						"pinyin_prefix": "s",
						"ext_id": "510981000000",
						"ext_name": "射洪市"
					}
				]
			},
			{
				"id": "5110",
				"pid": 51,
				"deep": 1,
				"name": "内江",
				"pinyin": "nei jiang",
				"pinyin_prefix": "n",
				"ext_id": "511000000000",
				"ext_name": "内江市",
				"childs": [
					{
						"id": "511002",
						"pid": 5110,
						"deep": 2,
						"name": "市中",
						"pinyin": "shi zhong",
						"pinyin_prefix": "s",
						"ext_id": "511002000000",
						"ext_name": "市中区"
					},
					{
						"id": "511011",
						"pid": 5110,
						"deep": 2,
						"name": "东兴",
						"pinyin": "dong xing",
						"pinyin_prefix": "d",
						"ext_id": "511011000000",
						"ext_name": "东兴区"
					},
					{
						"id": "511024",
						"pid": 5110,
						"deep": 2,
						"name": "威远",
						"pinyin": "wei yuan",
						"pinyin_prefix": "w",
						"ext_id": "511024000000",
						"ext_name": "威远县"
					},
					{
						"id": "511025",
						"pid": 5110,
						"deep": 2,
						"name": "资中",
						"pinyin": "zi zhong",
						"pinyin_prefix": "z",
						"ext_id": "511025000000",
						"ext_name": "资中县"
					},
					{
						"id": "511083",
						"pid": 5110,
						"deep": 2,
						"name": "隆昌",
						"pinyin": "long chang",
						"pinyin_prefix": "l",
						"ext_id": "511083000000",
						"ext_name": "隆昌市"
					}
				]
			},
			{
				"id": "5111",
				"pid": 51,
				"deep": 1,
				"name": "乐山",
				"pinyin": "le shan",
				"pinyin_prefix": "l",
				"ext_id": "511100000000",
				"ext_name": "乐山市",
				"childs": [
					{
						"id": "511102",
						"pid": 5111,
						"deep": 2,
						"name": "市中",
						"pinyin": "shi zhong",
						"pinyin_prefix": "s",
						"ext_id": "511102000000",
						"ext_name": "市中区"
					},
					{
						"id": "511111",
						"pid": 5111,
						"deep": 2,
						"name": "沙湾",
						"pinyin": "sha wan",
						"pinyin_prefix": "s",
						"ext_id": "511111000000",
						"ext_name": "沙湾区"
					},
					{
						"id": "511112",
						"pid": 5111,
						"deep": 2,
						"name": "五通桥",
						"pinyin": "wu tong qiao",
						"pinyin_prefix": "w",
						"ext_id": "511112000000",
						"ext_name": "五通桥区"
					},
					{
						"id": "511113",
						"pid": 5111,
						"deep": 2,
						"name": "金口河",
						"pinyin": "jin kou he",
						"pinyin_prefix": "j",
						"ext_id": "511113000000",
						"ext_name": "金口河区"
					},
					{
						"id": "511123",
						"pid": 5111,
						"deep": 2,
						"name": "犍为",
						"pinyin": "qian wei",
						"pinyin_prefix": "q",
						"ext_id": "511123000000",
						"ext_name": "犍为县"
					},
					{
						"id": "511124",
						"pid": 5111,
						"deep": 2,
						"name": "井研",
						"pinyin": "jing yan",
						"pinyin_prefix": "j",
						"ext_id": "511124000000",
						"ext_name": "井研县"
					},
					{
						"id": "511126",
						"pid": 5111,
						"deep": 2,
						"name": "夹江",
						"pinyin": "jia jiang",
						"pinyin_prefix": "j",
						"ext_id": "511126000000",
						"ext_name": "夹江县"
					},
					{
						"id": "511129",
						"pid": 5111,
						"deep": 2,
						"name": "沐川",
						"pinyin": "mu chuan",
						"pinyin_prefix": "m",
						"ext_id": "511129000000",
						"ext_name": "沐川县"
					},
					{
						"id": "511132",
						"pid": 5111,
						"deep": 2,
						"name": "峨边",
						"pinyin": "e bian",
						"pinyin_prefix": "e",
						"ext_id": "511132000000",
						"ext_name": "峨边彝族自治县"
					},
					{
						"id": "511133",
						"pid": 5111,
						"deep": 2,
						"name": "马边",
						"pinyin": "ma bian",
						"pinyin_prefix": "m",
						"ext_id": "511133000000",
						"ext_name": "马边彝族自治县"
					},
					{
						"id": "511181",
						"pid": 5111,
						"deep": 2,
						"name": "峨眉山",
						"pinyin": "e mei shan",
						"pinyin_prefix": "e",
						"ext_id": "511181000000",
						"ext_name": "峨眉山市"
					}
				]
			},
			{
				"id": "5113",
				"pid": 51,
				"deep": 1,
				"name": "南充",
				"pinyin": "nan chong",
				"pinyin_prefix": "n",
				"ext_id": "511300000000",
				"ext_name": "南充市",
				"childs": [
					{
						"id": "511302",
						"pid": 5113,
						"deep": 2,
						"name": "顺庆",
						"pinyin": "shun qing",
						"pinyin_prefix": "s",
						"ext_id": "511302000000",
						"ext_name": "顺庆区"
					},
					{
						"id": "511303",
						"pid": 5113,
						"deep": 2,
						"name": "高坪",
						"pinyin": "gao ping",
						"pinyin_prefix": "g",
						"ext_id": "511303000000",
						"ext_name": "高坪区"
					},
					{
						"id": "511304",
						"pid": 5113,
						"deep": 2,
						"name": "嘉陵",
						"pinyin": "jia ling",
						"pinyin_prefix": "j",
						"ext_id": "511304000000",
						"ext_name": "嘉陵区"
					},
					{
						"id": "511321",
						"pid": 5113,
						"deep": 2,
						"name": "南部",
						"pinyin": "nan bu",
						"pinyin_prefix": "n",
						"ext_id": "511321000000",
						"ext_name": "南部县"
					},
					{
						"id": "511322",
						"pid": 5113,
						"deep": 2,
						"name": "营山",
						"pinyin": "ying shan",
						"pinyin_prefix": "y",
						"ext_id": "511322000000",
						"ext_name": "营山县"
					},
					{
						"id": "511323",
						"pid": 5113,
						"deep": 2,
						"name": "蓬安",
						"pinyin": "peng an",
						"pinyin_prefix": "p",
						"ext_id": "511323000000",
						"ext_name": "蓬安县"
					},
					{
						"id": "511324",
						"pid": 5113,
						"deep": 2,
						"name": "仪陇",
						"pinyin": "yi long",
						"pinyin_prefix": "y",
						"ext_id": "511324000000",
						"ext_name": "仪陇县"
					},
					{
						"id": "511325",
						"pid": 5113,
						"deep": 2,
						"name": "西充",
						"pinyin": "xi chong",
						"pinyin_prefix": "x",
						"ext_id": "511325000000",
						"ext_name": "西充县"
					},
					{
						"id": "511381",
						"pid": 5113,
						"deep": 2,
						"name": "阆中",
						"pinyin": "lang zhong",
						"pinyin_prefix": "l",
						"ext_id": "511381000000",
						"ext_name": "阆中市"
					}
				]
			},
			{
				"id": "5114",
				"pid": 51,
				"deep": 1,
				"name": "眉山",
				"pinyin": "mei shan",
				"pinyin_prefix": "m",
				"ext_id": "511400000000",
				"ext_name": "眉山市",
				"childs": [
					{
						"id": "511402",
						"pid": 5114,
						"deep": 2,
						"name": "东坡",
						"pinyin": "dong po",
						"pinyin_prefix": "d",
						"ext_id": "511402000000",
						"ext_name": "东坡区"
					},
					{
						"id": "511403",
						"pid": 5114,
						"deep": 2,
						"name": "彭山",
						"pinyin": "peng shan",
						"pinyin_prefix": "p",
						"ext_id": "511403000000",
						"ext_name": "彭山区"
					},
					{
						"id": "511421",
						"pid": 5114,
						"deep": 2,
						"name": "仁寿",
						"pinyin": "ren shou",
						"pinyin_prefix": "r",
						"ext_id": "511421000000",
						"ext_name": "仁寿县"
					},
					{
						"id": "511423",
						"pid": 5114,
						"deep": 2,
						"name": "洪雅",
						"pinyin": "hong ya",
						"pinyin_prefix": "h",
						"ext_id": "511423000000",
						"ext_name": "洪雅县"
					},
					{
						"id": "511424",
						"pid": 5114,
						"deep": 2,
						"name": "丹棱",
						"pinyin": "dan ling",
						"pinyin_prefix": "d",
						"ext_id": "511424000000",
						"ext_name": "丹棱县"
					},
					{
						"id": "511425",
						"pid": 5114,
						"deep": 2,
						"name": "青神",
						"pinyin": "qing shen",
						"pinyin_prefix": "q",
						"ext_id": "511425000000",
						"ext_name": "青神县"
					}
				]
			},
			{
				"id": "5115",
				"pid": 51,
				"deep": 1,
				"name": "宜宾",
				"pinyin": "yi bin",
				"pinyin_prefix": "y",
				"ext_id": "511500000000",
				"ext_name": "宜宾市",
				"childs": [
					{
						"id": "511502",
						"pid": 5115,
						"deep": 2,
						"name": "翠屏",
						"pinyin": "cui ping",
						"pinyin_prefix": "c",
						"ext_id": "511502000000",
						"ext_name": "翠屏区"
					},
					{
						"id": "511503",
						"pid": 5115,
						"deep": 2,
						"name": "南溪",
						"pinyin": "nan xi",
						"pinyin_prefix": "n",
						"ext_id": "511503000000",
						"ext_name": "南溪区"
					},
					{
						"id": "511504",
						"pid": 5115,
						"deep": 2,
						"name": "叙州",
						"pinyin": "xu zhou",
						"pinyin_prefix": "x",
						"ext_id": "511504000000",
						"ext_name": "叙州区"
					},
					{
						"id": "511523",
						"pid": 5115,
						"deep": 2,
						"name": "江安",
						"pinyin": "jiang an",
						"pinyin_prefix": "j",
						"ext_id": "511523000000",
						"ext_name": "江安县"
					},
					{
						"id": "511524",
						"pid": 5115,
						"deep": 2,
						"name": "长宁",
						"pinyin": "chang ning",
						"pinyin_prefix": "c",
						"ext_id": "511524000000",
						"ext_name": "长宁县"
					},
					{
						"id": "511525",
						"pid": 5115,
						"deep": 2,
						"name": "高县",
						"pinyin": "gao xian",
						"pinyin_prefix": "g",
						"ext_id": "511525000000",
						"ext_name": "高县"
					},
					{
						"id": "511526",
						"pid": 5115,
						"deep": 2,
						"name": "珙县",
						"pinyin": "gong xian",
						"pinyin_prefix": "g",
						"ext_id": "511526000000",
						"ext_name": "珙县"
					},
					{
						"id": "511527",
						"pid": 5115,
						"deep": 2,
						"name": "筠连",
						"pinyin": "jun lian",
						"pinyin_prefix": "j",
						"ext_id": "511527000000",
						"ext_name": "筠连县"
					},
					{
						"id": "511528",
						"pid": 5115,
						"deep": 2,
						"name": "兴文",
						"pinyin": "xing wen",
						"pinyin_prefix": "x",
						"ext_id": "511528000000",
						"ext_name": "兴文县"
					},
					{
						"id": "511529",
						"pid": 5115,
						"deep": 2,
						"name": "屏山",
						"pinyin": "ping shan",
						"pinyin_prefix": "p",
						"ext_id": "511529000000",
						"ext_name": "屏山县"
					}
				]
			},
			{
				"id": "5116",
				"pid": 51,
				"deep": 1,
				"name": "广安",
				"pinyin": "guang an",
				"pinyin_prefix": "g",
				"ext_id": "511600000000",
				"ext_name": "广安市",
				"childs": [
					{
						"id": "511602",
						"pid": 5116,
						"deep": 2,
						"name": "广安区",
						"pinyin": "guang an qu",
						"pinyin_prefix": "g",
						"ext_id": "511602000000",
						"ext_name": "广安区"
					},
					{
						"id": "511603",
						"pid": 5116,
						"deep": 2,
						"name": "前锋",
						"pinyin": "qian feng",
						"pinyin_prefix": "q",
						"ext_id": "511603000000",
						"ext_name": "前锋区"
					},
					{
						"id": "511621",
						"pid": 5116,
						"deep": 2,
						"name": "岳池",
						"pinyin": "yue chi",
						"pinyin_prefix": "y",
						"ext_id": "511621000000",
						"ext_name": "岳池县"
					},
					{
						"id": "511622",
						"pid": 5116,
						"deep": 2,
						"name": "武胜",
						"pinyin": "wu sheng",
						"pinyin_prefix": "w",
						"ext_id": "511622000000",
						"ext_name": "武胜县"
					},
					{
						"id": "511623",
						"pid": 5116,
						"deep": 2,
						"name": "邻水",
						"pinyin": "lin shui",
						"pinyin_prefix": "l",
						"ext_id": "511623000000",
						"ext_name": "邻水县"
					},
					{
						"id": "511681",
						"pid": 5116,
						"deep": 2,
						"name": "华蓥",
						"pinyin": "hua ying",
						"pinyin_prefix": "h",
						"ext_id": "511681000000",
						"ext_name": "华蓥市"
					}
				]
			},
			{
				"id": "5117",
				"pid": 51,
				"deep": 1,
				"name": "达州",
				"pinyin": "da zhou",
				"pinyin_prefix": "d",
				"ext_id": "511700000000",
				"ext_name": "达州市",
				"childs": [
					{
						"id": "511702",
						"pid": 5117,
						"deep": 2,
						"name": "通川",
						"pinyin": "tong chuan",
						"pinyin_prefix": "t",
						"ext_id": "511702000000",
						"ext_name": "通川区"
					},
					{
						"id": "511703",
						"pid": 5117,
						"deep": 2,
						"name": "达川",
						"pinyin": "da chuan",
						"pinyin_prefix": "d",
						"ext_id": "511703000000",
						"ext_name": "达川区"
					},
					{
						"id": "511722",
						"pid": 5117,
						"deep": 2,
						"name": "宣汉",
						"pinyin": "xuan han",
						"pinyin_prefix": "x",
						"ext_id": "511722000000",
						"ext_name": "宣汉县"
					},
					{
						"id": "511723",
						"pid": 5117,
						"deep": 2,
						"name": "开江",
						"pinyin": "kai jiang",
						"pinyin_prefix": "k",
						"ext_id": "511723000000",
						"ext_name": "开江县"
					},
					{
						"id": "511724",
						"pid": 5117,
						"deep": 2,
						"name": "大竹",
						"pinyin": "da zhu",
						"pinyin_prefix": "d",
						"ext_id": "511724000000",
						"ext_name": "大竹县"
					},
					{
						"id": "511725",
						"pid": 5117,
						"deep": 2,
						"name": "渠县",
						"pinyin": "qu xian",
						"pinyin_prefix": "q",
						"ext_id": "511725000000",
						"ext_name": "渠县"
					},
					{
						"id": "511781",
						"pid": 5117,
						"deep": 2,
						"name": "万源",
						"pinyin": "wan yuan",
						"pinyin_prefix": "w",
						"ext_id": "511781000000",
						"ext_name": "万源市"
					}
				]
			},
			{
				"id": "5118",
				"pid": 51,
				"deep": 1,
				"name": "雅安",
				"pinyin": "ya an",
				"pinyin_prefix": "y",
				"ext_id": "511800000000",
				"ext_name": "雅安市",
				"childs": [
					{
						"id": "511802",
						"pid": 5118,
						"deep": 2,
						"name": "雨城",
						"pinyin": "yu cheng",
						"pinyin_prefix": "y",
						"ext_id": "511802000000",
						"ext_name": "雨城区"
					},
					{
						"id": "511803",
						"pid": 5118,
						"deep": 2,
						"name": "名山",
						"pinyin": "ming shan",
						"pinyin_prefix": "m",
						"ext_id": "511803000000",
						"ext_name": "名山区"
					},
					{
						"id": "511822",
						"pid": 5118,
						"deep": 2,
						"name": "荥经",
						"pinyin": "ying jing",
						"pinyin_prefix": "y",
						"ext_id": "511822000000",
						"ext_name": "荥经县"
					},
					{
						"id": "511823",
						"pid": 5118,
						"deep": 2,
						"name": "汉源",
						"pinyin": "han yuan",
						"pinyin_prefix": "h",
						"ext_id": "511823000000",
						"ext_name": "汉源县"
					},
					{
						"id": "511824",
						"pid": 5118,
						"deep": 2,
						"name": "石棉",
						"pinyin": "shi mian",
						"pinyin_prefix": "s",
						"ext_id": "511824000000",
						"ext_name": "石棉县"
					},
					{
						"id": "511825",
						"pid": 5118,
						"deep": 2,
						"name": "天全",
						"pinyin": "tian quan",
						"pinyin_prefix": "t",
						"ext_id": "511825000000",
						"ext_name": "天全县"
					},
					{
						"id": "511826",
						"pid": 5118,
						"deep": 2,
						"name": "芦山",
						"pinyin": "lu shan",
						"pinyin_prefix": "l",
						"ext_id": "511826000000",
						"ext_name": "芦山县"
					},
					{
						"id": "511827",
						"pid": 5118,
						"deep": 2,
						"name": "宝兴",
						"pinyin": "bao xing",
						"pinyin_prefix": "b",
						"ext_id": "511827000000",
						"ext_name": "宝兴县"
					}
				]
			},
			{
				"id": "5119",
				"pid": 51,
				"deep": 1,
				"name": "巴中",
				"pinyin": "ba zhong",
				"pinyin_prefix": "b",
				"ext_id": "511900000000",
				"ext_name": "巴中市",
				"childs": [
					{
						"id": "511902",
						"pid": 5119,
						"deep": 2,
						"name": "巴州",
						"pinyin": "ba zhou",
						"pinyin_prefix": "b",
						"ext_id": "511902000000",
						"ext_name": "巴州区"
					},
					{
						"id": "511903",
						"pid": 5119,
						"deep": 2,
						"name": "恩阳",
						"pinyin": "en yang",
						"pinyin_prefix": "e",
						"ext_id": "511903000000",
						"ext_name": "恩阳区"
					},
					{
						"id": "511921",
						"pid": 5119,
						"deep": 2,
						"name": "通江",
						"pinyin": "tong jiang",
						"pinyin_prefix": "t",
						"ext_id": "511921000000",
						"ext_name": "通江县"
					},
					{
						"id": "511922",
						"pid": 5119,
						"deep": 2,
						"name": "南江",
						"pinyin": "nan jiang",
						"pinyin_prefix": "n",
						"ext_id": "511922000000",
						"ext_name": "南江县"
					},
					{
						"id": "511923",
						"pid": 5119,
						"deep": 2,
						"name": "平昌",
						"pinyin": "ping chang",
						"pinyin_prefix": "p",
						"ext_id": "511923000000",
						"ext_name": "平昌县"
					}
				]
			},
			{
				"id": "5120",
				"pid": 51,
				"deep": 1,
				"name": "资阳",
				"pinyin": "zi yang",
				"pinyin_prefix": "z",
				"ext_id": "512000000000",
				"ext_name": "资阳市",
				"childs": [
					{
						"id": "512002",
						"pid": 5120,
						"deep": 2,
						"name": "雁江",
						"pinyin": "yan jiang",
						"pinyin_prefix": "y",
						"ext_id": "512002000000",
						"ext_name": "雁江区"
					},
					{
						"id": "512021",
						"pid": 5120,
						"deep": 2,
						"name": "安岳",
						"pinyin": "an yue",
						"pinyin_prefix": "a",
						"ext_id": "512021000000",
						"ext_name": "安岳县"
					},
					{
						"id": "512022",
						"pid": 5120,
						"deep": 2,
						"name": "乐至",
						"pinyin": "le zhi",
						"pinyin_prefix": "l",
						"ext_id": "512022000000",
						"ext_name": "乐至县"
					}
				]
			},
			{
				"id": "5132",
				"pid": 51,
				"deep": 1,
				"name": "阿坝",
				"pinyin": "a ba",
				"pinyin_prefix": "a",
				"ext_id": "513200000000",
				"ext_name": "阿坝藏族羌族自治州",
				"childs": [
					{
						"id": "513201",
						"pid": 5132,
						"deep": 2,
						"name": "马尔康",
						"pinyin": "ma er kang",
						"pinyin_prefix": "m",
						"ext_id": "513201000000",
						"ext_name": "马尔康市"
					},
					{
						"id": "513221",
						"pid": 5132,
						"deep": 2,
						"name": "汶川",
						"pinyin": "wen chuan",
						"pinyin_prefix": "w",
						"ext_id": "513221000000",
						"ext_name": "汶川县"
					},
					{
						"id": "513222",
						"pid": 5132,
						"deep": 2,
						"name": "理县",
						"pinyin": "li xian",
						"pinyin_prefix": "l",
						"ext_id": "513222000000",
						"ext_name": "理县"
					},
					{
						"id": "513223",
						"pid": 5132,
						"deep": 2,
						"name": "茂县",
						"pinyin": "mao xian",
						"pinyin_prefix": "m",
						"ext_id": "513223000000",
						"ext_name": "茂县"
					},
					{
						"id": "513224",
						"pid": 5132,
						"deep": 2,
						"name": "松潘",
						"pinyin": "song pan",
						"pinyin_prefix": "s",
						"ext_id": "513224000000",
						"ext_name": "松潘县"
					},
					{
						"id": "513225",
						"pid": 5132,
						"deep": 2,
						"name": "九寨沟",
						"pinyin": "jiu zhai gou",
						"pinyin_prefix": "j",
						"ext_id": "513225000000",
						"ext_name": "九寨沟县"
					},
					{
						"id": "513226",
						"pid": 5132,
						"deep": 2,
						"name": "金川",
						"pinyin": "jin chuan",
						"pinyin_prefix": "j",
						"ext_id": "513226000000",
						"ext_name": "金川县"
					},
					{
						"id": "513227",
						"pid": 5132,
						"deep": 2,
						"name": "小金",
						"pinyin": "xiao jin",
						"pinyin_prefix": "x",
						"ext_id": "513227000000",
						"ext_name": "小金县"
					},
					{
						"id": "513228",
						"pid": 5132,
						"deep": 2,
						"name": "黑水",
						"pinyin": "hei shui",
						"pinyin_prefix": "h",
						"ext_id": "513228000000",
						"ext_name": "黑水县"
					},
					{
						"id": "513230",
						"pid": 5132,
						"deep": 2,
						"name": "壤塘",
						"pinyin": "rang tang",
						"pinyin_prefix": "r",
						"ext_id": "513230000000",
						"ext_name": "壤塘县"
					},
					{
						"id": "513231",
						"pid": 5132,
						"deep": 2,
						"name": "阿坝县",
						"pinyin": "a ba xian",
						"pinyin_prefix": "a",
						"ext_id": "513231000000",
						"ext_name": "阿坝县"
					},
					{
						"id": "513232",
						"pid": 5132,
						"deep": 2,
						"name": "若尔盖",
						"pinyin": "ruo er gai",
						"pinyin_prefix": "r",
						"ext_id": "513232000000",
						"ext_name": "若尔盖县"
					},
					{
						"id": "513233",
						"pid": 5132,
						"deep": 2,
						"name": "红原",
						"pinyin": "hong yuan",
						"pinyin_prefix": "h",
						"ext_id": "513233000000",
						"ext_name": "红原县"
					}
				]
			},
			{
				"id": "5133",
				"pid": 51,
				"deep": 1,
				"name": "甘孜",
				"pinyin": "gan zi",
				"pinyin_prefix": "g",
				"ext_id": "513300000000",
				"ext_name": "甘孜藏族自治州",
				"childs": [
					{
						"id": "513301",
						"pid": 5133,
						"deep": 2,
						"name": "康定",
						"pinyin": "kang ding",
						"pinyin_prefix": "k",
						"ext_id": "513301000000",
						"ext_name": "康定市"
					},
					{
						"id": "513322",
						"pid": 5133,
						"deep": 2,
						"name": "泸定",
						"pinyin": "lu ding",
						"pinyin_prefix": "l",
						"ext_id": "513322000000",
						"ext_name": "泸定县"
					},
					{
						"id": "513323",
						"pid": 5133,
						"deep": 2,
						"name": "丹巴",
						"pinyin": "dan ba",
						"pinyin_prefix": "d",
						"ext_id": "513323000000",
						"ext_name": "丹巴县"
					},
					{
						"id": "513324",
						"pid": 5133,
						"deep": 2,
						"name": "九龙",
						"pinyin": "jiu long",
						"pinyin_prefix": "j",
						"ext_id": "513324000000",
						"ext_name": "九龙县"
					},
					{
						"id": "513325",
						"pid": 5133,
						"deep": 2,
						"name": "雅江",
						"pinyin": "ya jiang",
						"pinyin_prefix": "y",
						"ext_id": "513325000000",
						"ext_name": "雅江县"
					},
					{
						"id": "513326",
						"pid": 5133,
						"deep": 2,
						"name": "道孚",
						"pinyin": "dao fu",
						"pinyin_prefix": "d",
						"ext_id": "513326000000",
						"ext_name": "道孚县"
					},
					{
						"id": "513327",
						"pid": 5133,
						"deep": 2,
						"name": "炉霍",
						"pinyin": "lu huo",
						"pinyin_prefix": "l",
						"ext_id": "513327000000",
						"ext_name": "炉霍县"
					},
					{
						"id": "513328",
						"pid": 5133,
						"deep": 2,
						"name": "甘孜县",
						"pinyin": "gan zi xian",
						"pinyin_prefix": "g",
						"ext_id": "513328000000",
						"ext_name": "甘孜县"
					},
					{
						"id": "513329",
						"pid": 5133,
						"deep": 2,
						"name": "新龙",
						"pinyin": "xin long",
						"pinyin_prefix": "x",
						"ext_id": "513329000000",
						"ext_name": "新龙县"
					},
					{
						"id": "513330",
						"pid": 5133,
						"deep": 2,
						"name": "德格",
						"pinyin": "de ge",
						"pinyin_prefix": "d",
						"ext_id": "513330000000",
						"ext_name": "德格县"
					},
					{
						"id": "513331",
						"pid": 5133,
						"deep": 2,
						"name": "白玉",
						"pinyin": "bai yu",
						"pinyin_prefix": "b",
						"ext_id": "513331000000",
						"ext_name": "白玉县"
					},
					{
						"id": "513332",
						"pid": 5133,
						"deep": 2,
						"name": "石渠",
						"pinyin": "shi qu",
						"pinyin_prefix": "s",
						"ext_id": "513332000000",
						"ext_name": "石渠县"
					},
					{
						"id": "513333",
						"pid": 5133,
						"deep": 2,
						"name": "色达",
						"pinyin": "se da",
						"pinyin_prefix": "s",
						"ext_id": "513333000000",
						"ext_name": "色达县"
					},
					{
						"id": "513334",
						"pid": 5133,
						"deep": 2,
						"name": "理塘",
						"pinyin": "li tang",
						"pinyin_prefix": "l",
						"ext_id": "513334000000",
						"ext_name": "理塘县"
					},
					{
						"id": "513335",
						"pid": 5133,
						"deep": 2,
						"name": "巴塘",
						"pinyin": "ba tang",
						"pinyin_prefix": "b",
						"ext_id": "513335000000",
						"ext_name": "巴塘县"
					},
					{
						"id": "513336",
						"pid": 5133,
						"deep": 2,
						"name": "乡城",
						"pinyin": "xiang cheng",
						"pinyin_prefix": "x",
						"ext_id": "513336000000",
						"ext_name": "乡城县"
					},
					{
						"id": "513337",
						"pid": 5133,
						"deep": 2,
						"name": "稻城",
						"pinyin": "dao cheng",
						"pinyin_prefix": "d",
						"ext_id": "513337000000",
						"ext_name": "稻城县"
					},
					{
						"id": "513338",
						"pid": 5133,
						"deep": 2,
						"name": "得荣",
						"pinyin": "de rong",
						"pinyin_prefix": "d",
						"ext_id": "513338000000",
						"ext_name": "得荣县"
					}
				]
			},
			{
				"id": "5134",
				"pid": 51,
				"deep": 1,
				"name": "凉山",
				"pinyin": "liang shan",
				"pinyin_prefix": "l",
				"ext_id": "513400000000",
				"ext_name": "凉山彝族自治州",
				"childs": [
					{
						"id": "513401",
						"pid": 5134,
						"deep": 2,
						"name": "西昌",
						"pinyin": "xi chang",
						"pinyin_prefix": "x",
						"ext_id": "513401000000",
						"ext_name": "西昌市"
					},
					{
						"id": "513402",
						"pid": 5134,
						"deep": 2,
						"name": "会理",
						"pinyin": "hui li",
						"pinyin_prefix": "h",
						"ext_id": "513402000000",
						"ext_name": "会理市"
					},
					{
						"id": "513422",
						"pid": 5134,
						"deep": 2,
						"name": "木里",
						"pinyin": "mu li",
						"pinyin_prefix": "m",
						"ext_id": "513422000000",
						"ext_name": "木里藏族自治县"
					},
					{
						"id": "513423",
						"pid": 5134,
						"deep": 2,
						"name": "盐源",
						"pinyin": "yan yuan",
						"pinyin_prefix": "y",
						"ext_id": "513423000000",
						"ext_name": "盐源县"
					},
					{
						"id": "513424",
						"pid": 5134,
						"deep": 2,
						"name": "德昌",
						"pinyin": "de chang",
						"pinyin_prefix": "d",
						"ext_id": "513424000000",
						"ext_name": "德昌县"
					},
					{
						"id": "513426",
						"pid": 5134,
						"deep": 2,
						"name": "会东",
						"pinyin": "hui dong",
						"pinyin_prefix": "h",
						"ext_id": "513426000000",
						"ext_name": "会东县"
					},
					{
						"id": "513427",
						"pid": 5134,
						"deep": 2,
						"name": "宁南",
						"pinyin": "ning nan",
						"pinyin_prefix": "n",
						"ext_id": "513427000000",
						"ext_name": "宁南县"
					},
					{
						"id": "513428",
						"pid": 5134,
						"deep": 2,
						"name": "普格",
						"pinyin": "pu ge",
						"pinyin_prefix": "p",
						"ext_id": "513428000000",
						"ext_name": "普格县"
					},
					{
						"id": "513429",
						"pid": 5134,
						"deep": 2,
						"name": "布拖",
						"pinyin": "bu tuo",
						"pinyin_prefix": "b",
						"ext_id": "513429000000",
						"ext_name": "布拖县"
					},
					{
						"id": "513430",
						"pid": 5134,
						"deep": 2,
						"name": "金阳",
						"pinyin": "jin yang",
						"pinyin_prefix": "j",
						"ext_id": "513430000000",
						"ext_name": "金阳县"
					},
					{
						"id": "513431",
						"pid": 5134,
						"deep": 2,
						"name": "昭觉",
						"pinyin": "zhao jue",
						"pinyin_prefix": "z",
						"ext_id": "513431000000",
						"ext_name": "昭觉县"
					},
					{
						"id": "513432",
						"pid": 5134,
						"deep": 2,
						"name": "喜德",
						"pinyin": "xi de",
						"pinyin_prefix": "x",
						"ext_id": "513432000000",
						"ext_name": "喜德县"
					},
					{
						"id": "513433",
						"pid": 5134,
						"deep": 2,
						"name": "冕宁",
						"pinyin": "mian ning",
						"pinyin_prefix": "m",
						"ext_id": "513433000000",
						"ext_name": "冕宁县"
					},
					{
						"id": "513434",
						"pid": 5134,
						"deep": 2,
						"name": "越西",
						"pinyin": "yue xi",
						"pinyin_prefix": "y",
						"ext_id": "513434000000",
						"ext_name": "越西县"
					},
					{
						"id": "513435",
						"pid": 5134,
						"deep": 2,
						"name": "甘洛",
						"pinyin": "gan luo",
						"pinyin_prefix": "g",
						"ext_id": "513435000000",
						"ext_name": "甘洛县"
					},
					{
						"id": "513436",
						"pid": 5134,
						"deep": 2,
						"name": "美姑",
						"pinyin": "mei gu",
						"pinyin_prefix": "m",
						"ext_id": "513436000000",
						"ext_name": "美姑县"
					},
					{
						"id": "513437",
						"pid": 5134,
						"deep": 2,
						"name": "雷波",
						"pinyin": "lei bo",
						"pinyin_prefix": "l",
						"ext_id": "513437000000",
						"ext_name": "雷波县"
					}
				]
			}
		]
	},
	{
		"id": "52",
		"pid": 0,
		"deep": 0,
		"name": "贵州",
		"pinyin": "gui zhou",
		"pinyin_prefix": "g",
		"ext_id": "520000000000",
		"ext_name": "贵州省",
		"childs": [
			{
				"id": "5201",
				"pid": 52,
				"deep": 1,
				"name": "贵阳",
				"pinyin": "gui yang",
				"pinyin_prefix": "g",
				"ext_id": "520100000000",
				"ext_name": "贵阳市",
				"childs": [
					{
						"id": "520102",
						"pid": 5201,
						"deep": 2,
						"name": "南明",
						"pinyin": "nan ming",
						"pinyin_prefix": "n",
						"ext_id": "520102000000",
						"ext_name": "南明区"
					},
					{
						"id": "520103",
						"pid": 5201,
						"deep": 2,
						"name": "云岩",
						"pinyin": "yun yan",
						"pinyin_prefix": "y",
						"ext_id": "520103000000",
						"ext_name": "云岩区"
					},
					{
						"id": "520111",
						"pid": 5201,
						"deep": 2,
						"name": "花溪",
						"pinyin": "hua xi",
						"pinyin_prefix": "h",
						"ext_id": "520111000000",
						"ext_name": "花溪区"
					},
					{
						"id": "520112",
						"pid": 5201,
						"deep": 2,
						"name": "乌当",
						"pinyin": "wu dang",
						"pinyin_prefix": "w",
						"ext_id": "520112000000",
						"ext_name": "乌当区"
					},
					{
						"id": "520113",
						"pid": 5201,
						"deep": 2,
						"name": "白云",
						"pinyin": "bai yun",
						"pinyin_prefix": "b",
						"ext_id": "520113000000",
						"ext_name": "白云区"
					},
					{
						"id": "520115",
						"pid": 5201,
						"deep": 2,
						"name": "观山湖",
						"pinyin": "guan shan hu",
						"pinyin_prefix": "g",
						"ext_id": "520115000000",
						"ext_name": "观山湖区"
					},
					{
						"id": "520121",
						"pid": 5201,
						"deep": 2,
						"name": "开阳",
						"pinyin": "kai yang",
						"pinyin_prefix": "k",
						"ext_id": "520121000000",
						"ext_name": "开阳县"
					},
					{
						"id": "520122",
						"pid": 5201,
						"deep": 2,
						"name": "息烽",
						"pinyin": "xi feng",
						"pinyin_prefix": "x",
						"ext_id": "520122000000",
						"ext_name": "息烽县"
					},
					{
						"id": "520123",
						"pid": 5201,
						"deep": 2,
						"name": "修文",
						"pinyin": "xiu wen",
						"pinyin_prefix": "x",
						"ext_id": "520123000000",
						"ext_name": "修文县"
					},
					{
						"id": "520181",
						"pid": 5201,
						"deep": 2,
						"name": "清镇",
						"pinyin": "qing zhen",
						"pinyin_prefix": "q",
						"ext_id": "520181000000",
						"ext_name": "清镇市"
					}
				]
			},
			{
				"id": "5202",
				"pid": 52,
				"deep": 1,
				"name": "六盘水",
				"pinyin": "liu pan shui",
				"pinyin_prefix": "l",
				"ext_id": "520200000000",
				"ext_name": "六盘水市",
				"childs": [
					{
						"id": "520201",
						"pid": 5202,
						"deep": 2,
						"name": "钟山",
						"pinyin": "zhong shan",
						"pinyin_prefix": "z",
						"ext_id": "520201000000",
						"ext_name": "钟山区"
					},
					{
						"id": "520203",
						"pid": 5202,
						"deep": 2,
						"name": "六枝特",
						"pinyin": "liu zhi te",
						"pinyin_prefix": "l",
						"ext_id": "520203000000",
						"ext_name": "六枝特区"
					},
					{
						"id": "520204",
						"pid": 5202,
						"deep": 2,
						"name": "水城",
						"pinyin": "shui cheng",
						"pinyin_prefix": "s",
						"ext_id": "520204000000",
						"ext_name": "水城区"
					},
					{
						"id": "520281",
						"pid": 5202,
						"deep": 2,
						"name": "盘州",
						"pinyin": "pan zhou",
						"pinyin_prefix": "p",
						"ext_id": "520281000000",
						"ext_name": "盘州市"
					}
				]
			},
			{
				"id": "5203",
				"pid": 52,
				"deep": 1,
				"name": "遵义",
				"pinyin": "zun yi",
				"pinyin_prefix": "z",
				"ext_id": "520300000000",
				"ext_name": "遵义市",
				"childs": [
					{
						"id": "520302",
						"pid": 5203,
						"deep": 2,
						"name": "红花岗",
						"pinyin": "hong hua gang",
						"pinyin_prefix": "h",
						"ext_id": "520302000000",
						"ext_name": "红花岗区"
					},
					{
						"id": "520303",
						"pid": 5203,
						"deep": 2,
						"name": "汇川",
						"pinyin": "hui chuan",
						"pinyin_prefix": "h",
						"ext_id": "520303000000",
						"ext_name": "汇川区"
					},
					{
						"id": "520304",
						"pid": 5203,
						"deep": 2,
						"name": "播州",
						"pinyin": "bo zhou",
						"pinyin_prefix": "b",
						"ext_id": "520304000000",
						"ext_name": "播州区"
					},
					{
						"id": "520322",
						"pid": 5203,
						"deep": 2,
						"name": "桐梓",
						"pinyin": "tong zi",
						"pinyin_prefix": "t",
						"ext_id": "520322000000",
						"ext_name": "桐梓县"
					},
					{
						"id": "520323",
						"pid": 5203,
						"deep": 2,
						"name": "绥阳",
						"pinyin": "sui yang",
						"pinyin_prefix": "s",
						"ext_id": "520323000000",
						"ext_name": "绥阳县"
					},
					{
						"id": "520324",
						"pid": 5203,
						"deep": 2,
						"name": "正安",
						"pinyin": "zheng an",
						"pinyin_prefix": "z",
						"ext_id": "520324000000",
						"ext_name": "正安县"
					},
					{
						"id": "520325",
						"pid": 5203,
						"deep": 2,
						"name": "道真",
						"pinyin": "dao zhen",
						"pinyin_prefix": "d",
						"ext_id": "520325000000",
						"ext_name": "道真仡佬族苗族自治县"
					},
					{
						"id": "520326",
						"pid": 5203,
						"deep": 2,
						"name": "务川",
						"pinyin": "wu chuan",
						"pinyin_prefix": "w",
						"ext_id": "520326000000",
						"ext_name": "务川仡佬族苗族自治县"
					},
					{
						"id": "520327",
						"pid": 5203,
						"deep": 2,
						"name": "凤冈",
						"pinyin": "feng gang",
						"pinyin_prefix": "f",
						"ext_id": "520327000000",
						"ext_name": "凤冈县"
					},
					{
						"id": "520328",
						"pid": 5203,
						"deep": 2,
						"name": "湄潭",
						"pinyin": "mei tan",
						"pinyin_prefix": "m",
						"ext_id": "520328000000",
						"ext_name": "湄潭县"
					},
					{
						"id": "520329",
						"pid": 5203,
						"deep": 2,
						"name": "余庆",
						"pinyin": "yu qing",
						"pinyin_prefix": "y",
						"ext_id": "520329000000",
						"ext_name": "余庆县"
					},
					{
						"id": "520330",
						"pid": 5203,
						"deep": 2,
						"name": "习水",
						"pinyin": "xi shui",
						"pinyin_prefix": "x",
						"ext_id": "520330000000",
						"ext_name": "习水县"
					},
					{
						"id": "520381",
						"pid": 5203,
						"deep": 2,
						"name": "赤水",
						"pinyin": "chi shui",
						"pinyin_prefix": "c",
						"ext_id": "520381000000",
						"ext_name": "赤水市"
					},
					{
						"id": "520382",
						"pid": 5203,
						"deep": 2,
						"name": "仁怀",
						"pinyin": "ren huai",
						"pinyin_prefix": "r",
						"ext_id": "520382000000",
						"ext_name": "仁怀市"
					}
				]
			},
			{
				"id": "5204",
				"pid": 52,
				"deep": 1,
				"name": "安顺",
				"pinyin": "an shun",
				"pinyin_prefix": "a",
				"ext_id": "520400000000",
				"ext_name": "安顺市",
				"childs": [
					{
						"id": "520402",
						"pid": 5204,
						"deep": 2,
						"name": "西秀",
						"pinyin": "xi xiu",
						"pinyin_prefix": "x",
						"ext_id": "520402000000",
						"ext_name": "西秀区"
					},
					{
						"id": "520403",
						"pid": 5204,
						"deep": 2,
						"name": "平坝",
						"pinyin": "ping ba",
						"pinyin_prefix": "p",
						"ext_id": "520403000000",
						"ext_name": "平坝区"
					},
					{
						"id": "520422",
						"pid": 5204,
						"deep": 2,
						"name": "普定",
						"pinyin": "pu ding",
						"pinyin_prefix": "p",
						"ext_id": "520422000000",
						"ext_name": "普定县"
					},
					{
						"id": "520423",
						"pid": 5204,
						"deep": 2,
						"name": "镇宁",
						"pinyin": "zhen ning",
						"pinyin_prefix": "z",
						"ext_id": "520423000000",
						"ext_name": "镇宁布依族苗族自治县"
					},
					{
						"id": "520424",
						"pid": 5204,
						"deep": 2,
						"name": "关岭",
						"pinyin": "guan ling",
						"pinyin_prefix": "g",
						"ext_id": "520424000000",
						"ext_name": "关岭布依族苗族自治县"
					},
					{
						"id": "520425",
						"pid": 5204,
						"deep": 2,
						"name": "紫云",
						"pinyin": "zi yun",
						"pinyin_prefix": "z",
						"ext_id": "520425000000",
						"ext_name": "紫云苗族布依族自治县"
					}
				]
			},
			{
				"id": "5205",
				"pid": 52,
				"deep": 1,
				"name": "毕节",
				"pinyin": "bi jie",
				"pinyin_prefix": "b",
				"ext_id": "520500000000",
				"ext_name": "毕节市",
				"childs": [
					{
						"id": "520502",
						"pid": 5205,
						"deep": 2,
						"name": "七星关",
						"pinyin": "qi xing guan",
						"pinyin_prefix": "q",
						"ext_id": "520502000000",
						"ext_name": "七星关区"
					},
					{
						"id": "520521",
						"pid": 5205,
						"deep": 2,
						"name": "大方",
						"pinyin": "da fang",
						"pinyin_prefix": "d",
						"ext_id": "520521000000",
						"ext_name": "大方县"
					},
					{
						"id": "520523",
						"pid": 5205,
						"deep": 2,
						"name": "金沙",
						"pinyin": "jin sha",
						"pinyin_prefix": "j",
						"ext_id": "520523000000",
						"ext_name": "金沙县"
					},
					{
						"id": "520524",
						"pid": 5205,
						"deep": 2,
						"name": "织金",
						"pinyin": "zhi jin",
						"pinyin_prefix": "z",
						"ext_id": "520524000000",
						"ext_name": "织金县"
					},
					{
						"id": "520525",
						"pid": 5205,
						"deep": 2,
						"name": "纳雍",
						"pinyin": "na yong",
						"pinyin_prefix": "n",
						"ext_id": "520525000000",
						"ext_name": "纳雍县"
					},
					{
						"id": "520526",
						"pid": 5205,
						"deep": 2,
						"name": "威宁",
						"pinyin": "wei ning",
						"pinyin_prefix": "w",
						"ext_id": "520526000000",
						"ext_name": "威宁彝族回族苗族自治县"
					},
					{
						"id": "520527",
						"pid": 5205,
						"deep": 2,
						"name": "赫章",
						"pinyin": "he zhang",
						"pinyin_prefix": "h",
						"ext_id": "520527000000",
						"ext_name": "赫章县"
					},
					{
						"id": "520581",
						"pid": 5205,
						"deep": 2,
						"name": "黔西",
						"pinyin": "qian xi",
						"pinyin_prefix": "q",
						"ext_id": "520581000000",
						"ext_name": "黔西市"
					}
				]
			},
			{
				"id": "5206",
				"pid": 52,
				"deep": 1,
				"name": "铜仁",
				"pinyin": "tong ren",
				"pinyin_prefix": "t",
				"ext_id": "520600000000",
				"ext_name": "铜仁市",
				"childs": [
					{
						"id": "520602",
						"pid": 5206,
						"deep": 2,
						"name": "碧江",
						"pinyin": "bi jiang",
						"pinyin_prefix": "b",
						"ext_id": "520602000000",
						"ext_name": "碧江区"
					},
					{
						"id": "520603",
						"pid": 5206,
						"deep": 2,
						"name": "万山",
						"pinyin": "wan shan",
						"pinyin_prefix": "w",
						"ext_id": "520603000000",
						"ext_name": "万山区"
					},
					{
						"id": "520621",
						"pid": 5206,
						"deep": 2,
						"name": "江口",
						"pinyin": "jiang kou",
						"pinyin_prefix": "j",
						"ext_id": "520621000000",
						"ext_name": "江口县"
					},
					{
						"id": "520622",
						"pid": 5206,
						"deep": 2,
						"name": "玉屏",
						"pinyin": "yu ping",
						"pinyin_prefix": "y",
						"ext_id": "520622000000",
						"ext_name": "玉屏侗族自治县"
					},
					{
						"id": "520623",
						"pid": 5206,
						"deep": 2,
						"name": "石阡",
						"pinyin": "shi qian",
						"pinyin_prefix": "s",
						"ext_id": "520623000000",
						"ext_name": "石阡县"
					},
					{
						"id": "520624",
						"pid": 5206,
						"deep": 2,
						"name": "思南",
						"pinyin": "si nan",
						"pinyin_prefix": "s",
						"ext_id": "520624000000",
						"ext_name": "思南县"
					},
					{
						"id": "520625",
						"pid": 5206,
						"deep": 2,
						"name": "印江",
						"pinyin": "yin jiang",
						"pinyin_prefix": "y",
						"ext_id": "520625000000",
						"ext_name": "印江土家族苗族自治县"
					},
					{
						"id": "520626",
						"pid": 5206,
						"deep": 2,
						"name": "德江",
						"pinyin": "de jiang",
						"pinyin_prefix": "d",
						"ext_id": "520626000000",
						"ext_name": "德江县"
					},
					{
						"id": "520627",
						"pid": 5206,
						"deep": 2,
						"name": "沿河",
						"pinyin": "yan he",
						"pinyin_prefix": "y",
						"ext_id": "520627000000",
						"ext_name": "沿河土家族自治县"
					},
					{
						"id": "520628",
						"pid": 5206,
						"deep": 2,
						"name": "松桃",
						"pinyin": "song tao",
						"pinyin_prefix": "s",
						"ext_id": "520628000000",
						"ext_name": "松桃苗族自治县"
					}
				]
			},
			{
				"id": "5223",
				"pid": 52,
				"deep": 1,
				"name": "黔西南",
				"pinyin": "qian xi nan",
				"pinyin_prefix": "q",
				"ext_id": "522300000000",
				"ext_name": "黔西南布依族苗族自治州",
				"childs": [
					{
						"id": "522301",
						"pid": 5223,
						"deep": 2,
						"name": "兴义",
						"pinyin": "xing yi",
						"pinyin_prefix": "x",
						"ext_id": "522301000000",
						"ext_name": "兴义市"
					},
					{
						"id": "522302",
						"pid": 5223,
						"deep": 2,
						"name": "兴仁",
						"pinyin": "xing ren",
						"pinyin_prefix": "x",
						"ext_id": "522302000000",
						"ext_name": "兴仁市"
					},
					{
						"id": "522323",
						"pid": 5223,
						"deep": 2,
						"name": "普安",
						"pinyin": "pu an",
						"pinyin_prefix": "p",
						"ext_id": "522323000000",
						"ext_name": "普安县"
					},
					{
						"id": "522324",
						"pid": 5223,
						"deep": 2,
						"name": "晴隆",
						"pinyin": "qing long",
						"pinyin_prefix": "q",
						"ext_id": "522324000000",
						"ext_name": "晴隆县"
					},
					{
						"id": "522325",
						"pid": 5223,
						"deep": 2,
						"name": "贞丰",
						"pinyin": "zhen feng",
						"pinyin_prefix": "z",
						"ext_id": "522325000000",
						"ext_name": "贞丰县"
					},
					{
						"id": "522326",
						"pid": 5223,
						"deep": 2,
						"name": "望谟",
						"pinyin": "wang mo",
						"pinyin_prefix": "w",
						"ext_id": "522326000000",
						"ext_name": "望谟县"
					},
					{
						"id": "522327",
						"pid": 5223,
						"deep": 2,
						"name": "册亨",
						"pinyin": "ce heng",
						"pinyin_prefix": "c",
						"ext_id": "522327000000",
						"ext_name": "册亨县"
					},
					{
						"id": "522328",
						"pid": 5223,
						"deep": 2,
						"name": "安龙",
						"pinyin": "an long",
						"pinyin_prefix": "a",
						"ext_id": "522328000000",
						"ext_name": "安龙县"
					}
				]
			},
			{
				"id": "5226",
				"pid": 52,
				"deep": 1,
				"name": "黔东南",
				"pinyin": "qian dong nan",
				"pinyin_prefix": "q",
				"ext_id": "522600000000",
				"ext_name": "黔东南苗族侗族自治州",
				"childs": [
					{
						"id": "522601",
						"pid": 5226,
						"deep": 2,
						"name": "凯里",
						"pinyin": "kai li",
						"pinyin_prefix": "k",
						"ext_id": "522601000000",
						"ext_name": "凯里市"
					},
					{
						"id": "522622",
						"pid": 5226,
						"deep": 2,
						"name": "黄平",
						"pinyin": "huang ping",
						"pinyin_prefix": "h",
						"ext_id": "522622000000",
						"ext_name": "黄平县"
					},
					{
						"id": "522623",
						"pid": 5226,
						"deep": 2,
						"name": "施秉",
						"pinyin": "shi bing",
						"pinyin_prefix": "s",
						"ext_id": "522623000000",
						"ext_name": "施秉县"
					},
					{
						"id": "522624",
						"pid": 5226,
						"deep": 2,
						"name": "三穗",
						"pinyin": "san sui",
						"pinyin_prefix": "s",
						"ext_id": "522624000000",
						"ext_name": "三穗县"
					},
					{
						"id": "522625",
						"pid": 5226,
						"deep": 2,
						"name": "镇远",
						"pinyin": "zhen yuan",
						"pinyin_prefix": "z",
						"ext_id": "522625000000",
						"ext_name": "镇远县"
					},
					{
						"id": "522626",
						"pid": 5226,
						"deep": 2,
						"name": "岑巩",
						"pinyin": "cen gong",
						"pinyin_prefix": "c",
						"ext_id": "522626000000",
						"ext_name": "岑巩县"
					},
					{
						"id": "522627",
						"pid": 5226,
						"deep": 2,
						"name": "天柱",
						"pinyin": "tian zhu",
						"pinyin_prefix": "t",
						"ext_id": "522627000000",
						"ext_name": "天柱县"
					},
					{
						"id": "522628",
						"pid": 5226,
						"deep": 2,
						"name": "锦屏",
						"pinyin": "jin ping",
						"pinyin_prefix": "j",
						"ext_id": "522628000000",
						"ext_name": "锦屏县"
					},
					{
						"id": "522629",
						"pid": 5226,
						"deep": 2,
						"name": "剑河",
						"pinyin": "jian he",
						"pinyin_prefix": "j",
						"ext_id": "522629000000",
						"ext_name": "剑河县"
					},
					{
						"id": "522630",
						"pid": 5226,
						"deep": 2,
						"name": "台江",
						"pinyin": "tai jiang",
						"pinyin_prefix": "t",
						"ext_id": "522630000000",
						"ext_name": "台江县"
					},
					{
						"id": "522631",
						"pid": 5226,
						"deep": 2,
						"name": "黎平",
						"pinyin": "li ping",
						"pinyin_prefix": "l",
						"ext_id": "522631000000",
						"ext_name": "黎平县"
					},
					{
						"id": "522632",
						"pid": 5226,
						"deep": 2,
						"name": "榕江",
						"pinyin": "rong jiang",
						"pinyin_prefix": "r",
						"ext_id": "522632000000",
						"ext_name": "榕江县"
					},
					{
						"id": "522633",
						"pid": 5226,
						"deep": 2,
						"name": "从江",
						"pinyin": "cong jiang",
						"pinyin_prefix": "c",
						"ext_id": "522633000000",
						"ext_name": "从江县"
					},
					{
						"id": "522634",
						"pid": 5226,
						"deep": 2,
						"name": "雷山",
						"pinyin": "lei shan",
						"pinyin_prefix": "l",
						"ext_id": "522634000000",
						"ext_name": "雷山县"
					},
					{
						"id": "522635",
						"pid": 5226,
						"deep": 2,
						"name": "麻江",
						"pinyin": "ma jiang",
						"pinyin_prefix": "m",
						"ext_id": "522635000000",
						"ext_name": "麻江县"
					},
					{
						"id": "522636",
						"pid": 5226,
						"deep": 2,
						"name": "丹寨",
						"pinyin": "dan zhai",
						"pinyin_prefix": "d",
						"ext_id": "522636000000",
						"ext_name": "丹寨县"
					}
				]
			},
			{
				"id": "5227",
				"pid": 52,
				"deep": 1,
				"name": "黔南",
				"pinyin": "qian nan",
				"pinyin_prefix": "q",
				"ext_id": "522700000000",
				"ext_name": "黔南布依族苗族自治州",
				"childs": [
					{
						"id": "522701",
						"pid": 5227,
						"deep": 2,
						"name": "都匀",
						"pinyin": "du yun",
						"pinyin_prefix": "d",
						"ext_id": "522701000000",
						"ext_name": "都匀市"
					},
					{
						"id": "522702",
						"pid": 5227,
						"deep": 2,
						"name": "福泉",
						"pinyin": "fu quan",
						"pinyin_prefix": "f",
						"ext_id": "522702000000",
						"ext_name": "福泉市"
					},
					{
						"id": "522722",
						"pid": 5227,
						"deep": 2,
						"name": "荔波",
						"pinyin": "li bo",
						"pinyin_prefix": "l",
						"ext_id": "522722000000",
						"ext_name": "荔波县"
					},
					{
						"id": "522723",
						"pid": 5227,
						"deep": 2,
						"name": "贵定",
						"pinyin": "gui ding",
						"pinyin_prefix": "g",
						"ext_id": "522723000000",
						"ext_name": "贵定县"
					},
					{
						"id": "522725",
						"pid": 5227,
						"deep": 2,
						"name": "瓮安",
						"pinyin": "weng an",
						"pinyin_prefix": "w",
						"ext_id": "522725000000",
						"ext_name": "瓮安县"
					},
					{
						"id": "522726",
						"pid": 5227,
						"deep": 2,
						"name": "独山",
						"pinyin": "du shan",
						"pinyin_prefix": "d",
						"ext_id": "522726000000",
						"ext_name": "独山县"
					},
					{
						"id": "522727",
						"pid": 5227,
						"deep": 2,
						"name": "平塘",
						"pinyin": "ping tang",
						"pinyin_prefix": "p",
						"ext_id": "522727000000",
						"ext_name": "平塘县"
					},
					{
						"id": "522728",
						"pid": 5227,
						"deep": 2,
						"name": "罗甸",
						"pinyin": "luo dian",
						"pinyin_prefix": "l",
						"ext_id": "522728000000",
						"ext_name": "罗甸县"
					},
					{
						"id": "522729",
						"pid": 5227,
						"deep": 2,
						"name": "长顺",
						"pinyin": "chang shun",
						"pinyin_prefix": "c",
						"ext_id": "522729000000",
						"ext_name": "长顺县"
					},
					{
						"id": "522730",
						"pid": 5227,
						"deep": 2,
						"name": "龙里",
						"pinyin": "long li",
						"pinyin_prefix": "l",
						"ext_id": "522730000000",
						"ext_name": "龙里县"
					},
					{
						"id": "522731",
						"pid": 5227,
						"deep": 2,
						"name": "惠水",
						"pinyin": "hui shui",
						"pinyin_prefix": "h",
						"ext_id": "522731000000",
						"ext_name": "惠水县"
					},
					{
						"id": "522732",
						"pid": 5227,
						"deep": 2,
						"name": "三都",
						"pinyin": "san du",
						"pinyin_prefix": "s",
						"ext_id": "522732000000",
						"ext_name": "三都水族自治县"
					}
				]
			}
		]
	},
	{
		"id": "53",
		"pid": 0,
		"deep": 0,
		"name": "云南",
		"pinyin": "yun nan",
		"pinyin_prefix": "y",
		"ext_id": "530000000000",
		"ext_name": "云南省",
		"childs": [
			{
				"id": "5301",
				"pid": 53,
				"deep": 1,
				"name": "昆明",
				"pinyin": "kun ming",
				"pinyin_prefix": "k",
				"ext_id": "530100000000",
				"ext_name": "昆明市",
				"childs": [
					{
						"id": "530102",
						"pid": 5301,
						"deep": 2,
						"name": "五华",
						"pinyin": "wu hua",
						"pinyin_prefix": "w",
						"ext_id": "530102000000",
						"ext_name": "五华区"
					},
					{
						"id": "530103",
						"pid": 5301,
						"deep": 2,
						"name": "盘龙",
						"pinyin": "pan long",
						"pinyin_prefix": "p",
						"ext_id": "530103000000",
						"ext_name": "盘龙区"
					},
					{
						"id": "530111",
						"pid": 5301,
						"deep": 2,
						"name": "官渡",
						"pinyin": "guan du",
						"pinyin_prefix": "g",
						"ext_id": "530111000000",
						"ext_name": "官渡区"
					},
					{
						"id": "530112",
						"pid": 5301,
						"deep": 2,
						"name": "西山",
						"pinyin": "xi shan",
						"pinyin_prefix": "x",
						"ext_id": "530112000000",
						"ext_name": "西山区"
					},
					{
						"id": "530113",
						"pid": 5301,
						"deep": 2,
						"name": "东川",
						"pinyin": "dong chuan",
						"pinyin_prefix": "d",
						"ext_id": "530113000000",
						"ext_name": "东川区"
					},
					{
						"id": "530114",
						"pid": 5301,
						"deep": 2,
						"name": "呈贡",
						"pinyin": "cheng gong",
						"pinyin_prefix": "c",
						"ext_id": "530114000000",
						"ext_name": "呈贡区"
					},
					{
						"id": "530115",
						"pid": 5301,
						"deep": 2,
						"name": "晋宁",
						"pinyin": "jin ning",
						"pinyin_prefix": "j",
						"ext_id": "530115000000",
						"ext_name": "晋宁区"
					},
					{
						"id": "530124",
						"pid": 5301,
						"deep": 2,
						"name": "富民",
						"pinyin": "fu min",
						"pinyin_prefix": "f",
						"ext_id": "530124000000",
						"ext_name": "富民县"
					},
					{
						"id": "530125",
						"pid": 5301,
						"deep": 2,
						"name": "宜良",
						"pinyin": "yi liang",
						"pinyin_prefix": "y",
						"ext_id": "530125000000",
						"ext_name": "宜良县"
					},
					{
						"id": "530126",
						"pid": 5301,
						"deep": 2,
						"name": "石林",
						"pinyin": "shi lin",
						"pinyin_prefix": "s",
						"ext_id": "530126000000",
						"ext_name": "石林彝族自治县"
					},
					{
						"id": "530127",
						"pid": 5301,
						"deep": 2,
						"name": "嵩明",
						"pinyin": "song ming",
						"pinyin_prefix": "s",
						"ext_id": "530127000000",
						"ext_name": "嵩明县"
					},
					{
						"id": "530128",
						"pid": 5301,
						"deep": 2,
						"name": "禄劝",
						"pinyin": "lu quan",
						"pinyin_prefix": "l",
						"ext_id": "530128000000",
						"ext_name": "禄劝彝族苗族自治县"
					},
					{
						"id": "530129",
						"pid": 5301,
						"deep": 2,
						"name": "寻甸",
						"pinyin": "xun dian",
						"pinyin_prefix": "x",
						"ext_id": "530129000000",
						"ext_name": "寻甸回族彝族自治县"
					},
					{
						"id": "530181",
						"pid": 5301,
						"deep": 2,
						"name": "安宁",
						"pinyin": "an ning",
						"pinyin_prefix": "a",
						"ext_id": "530181000000",
						"ext_name": "安宁市"
					}
				]
			},
			{
				"id": "5303",
				"pid": 53,
				"deep": 1,
				"name": "曲靖",
				"pinyin": "qu jing",
				"pinyin_prefix": "q",
				"ext_id": "530300000000",
				"ext_name": "曲靖市",
				"childs": [
					{
						"id": "530302",
						"pid": 5303,
						"deep": 2,
						"name": "麒麟",
						"pinyin": "qi lin",
						"pinyin_prefix": "q",
						"ext_id": "530302000000",
						"ext_name": "麒麟区"
					},
					{
						"id": "530303",
						"pid": 5303,
						"deep": 2,
						"name": "沾益",
						"pinyin": "zhan yi",
						"pinyin_prefix": "z",
						"ext_id": "530303000000",
						"ext_name": "沾益区"
					},
					{
						"id": "530304",
						"pid": 5303,
						"deep": 2,
						"name": "马龙",
						"pinyin": "ma long",
						"pinyin_prefix": "m",
						"ext_id": "530304000000",
						"ext_name": "马龙区"
					},
					{
						"id": "530322",
						"pid": 5303,
						"deep": 2,
						"name": "陆良",
						"pinyin": "lu liang",
						"pinyin_prefix": "l",
						"ext_id": "530322000000",
						"ext_name": "陆良县"
					},
					{
						"id": "530323",
						"pid": 5303,
						"deep": 2,
						"name": "师宗",
						"pinyin": "shi zong",
						"pinyin_prefix": "s",
						"ext_id": "530323000000",
						"ext_name": "师宗县"
					},
					{
						"id": "530324",
						"pid": 5303,
						"deep": 2,
						"name": "罗平",
						"pinyin": "luo ping",
						"pinyin_prefix": "l",
						"ext_id": "530324000000",
						"ext_name": "罗平县"
					},
					{
						"id": "530325",
						"pid": 5303,
						"deep": 2,
						"name": "富源",
						"pinyin": "fu yuan",
						"pinyin_prefix": "f",
						"ext_id": "530325000000",
						"ext_name": "富源县"
					},
					{
						"id": "530326",
						"pid": 5303,
						"deep": 2,
						"name": "会泽",
						"pinyin": "hui ze",
						"pinyin_prefix": "h",
						"ext_id": "530326000000",
						"ext_name": "会泽县"
					},
					{
						"id": "530381",
						"pid": 5303,
						"deep": 2,
						"name": "宣威",
						"pinyin": "xuan wei",
						"pinyin_prefix": "x",
						"ext_id": "530381000000",
						"ext_name": "宣威市"
					}
				]
			},
			{
				"id": "5304",
				"pid": 53,
				"deep": 1,
				"name": "玉溪",
				"pinyin": "yu xi",
				"pinyin_prefix": "y",
				"ext_id": "530400000000",
				"ext_name": "玉溪市",
				"childs": [
					{
						"id": "530402",
						"pid": 5304,
						"deep": 2,
						"name": "红塔",
						"pinyin": "hong ta",
						"pinyin_prefix": "h",
						"ext_id": "530402000000",
						"ext_name": "红塔区"
					},
					{
						"id": "530403",
						"pid": 5304,
						"deep": 2,
						"name": "江川",
						"pinyin": "jiang chuan",
						"pinyin_prefix": "j",
						"ext_id": "530403000000",
						"ext_name": "江川区"
					},
					{
						"id": "530423",
						"pid": 5304,
						"deep": 2,
						"name": "通海",
						"pinyin": "tong hai",
						"pinyin_prefix": "t",
						"ext_id": "530423000000",
						"ext_name": "通海县"
					},
					{
						"id": "530424",
						"pid": 5304,
						"deep": 2,
						"name": "华宁",
						"pinyin": "hua ning",
						"pinyin_prefix": "h",
						"ext_id": "530424000000",
						"ext_name": "华宁县"
					},
					{
						"id": "530425",
						"pid": 5304,
						"deep": 2,
						"name": "易门",
						"pinyin": "yi men",
						"pinyin_prefix": "y",
						"ext_id": "530425000000",
						"ext_name": "易门县"
					},
					{
						"id": "530426",
						"pid": 5304,
						"deep": 2,
						"name": "峨山",
						"pinyin": "e shan",
						"pinyin_prefix": "e",
						"ext_id": "530426000000",
						"ext_name": "峨山彝族自治县"
					},
					{
						"id": "530427",
						"pid": 5304,
						"deep": 2,
						"name": "新平",
						"pinyin": "xin ping",
						"pinyin_prefix": "x",
						"ext_id": "530427000000",
						"ext_name": "新平彝族傣族自治县"
					},
					{
						"id": "530428",
						"pid": 5304,
						"deep": 2,
						"name": "元江",
						"pinyin": "yuan jiang",
						"pinyin_prefix": "y",
						"ext_id": "530428000000",
						"ext_name": "元江哈尼族彝族傣族自治县"
					},
					{
						"id": "530481",
						"pid": 5304,
						"deep": 2,
						"name": "澄江",
						"pinyin": "cheng jiang",
						"pinyin_prefix": "c",
						"ext_id": "530481000000",
						"ext_name": "澄江市"
					}
				]
			},
			{
				"id": "5305",
				"pid": 53,
				"deep": 1,
				"name": "保山",
				"pinyin": "bao shan",
				"pinyin_prefix": "b",
				"ext_id": "530500000000",
				"ext_name": "保山市",
				"childs": [
					{
						"id": "530502",
						"pid": 5305,
						"deep": 2,
						"name": "隆阳",
						"pinyin": "long yang",
						"pinyin_prefix": "l",
						"ext_id": "530502000000",
						"ext_name": "隆阳区"
					},
					{
						"id": "530521",
						"pid": 5305,
						"deep": 2,
						"name": "施甸",
						"pinyin": "shi dian",
						"pinyin_prefix": "s",
						"ext_id": "530521000000",
						"ext_name": "施甸县"
					},
					{
						"id": "530523",
						"pid": 5305,
						"deep": 2,
						"name": "龙陵",
						"pinyin": "long ling",
						"pinyin_prefix": "l",
						"ext_id": "530523000000",
						"ext_name": "龙陵县"
					},
					{
						"id": "530524",
						"pid": 5305,
						"deep": 2,
						"name": "昌宁",
						"pinyin": "chang ning",
						"pinyin_prefix": "c",
						"ext_id": "530524000000",
						"ext_name": "昌宁县"
					},
					{
						"id": "530581",
						"pid": 5305,
						"deep": 2,
						"name": "腾冲",
						"pinyin": "teng chong",
						"pinyin_prefix": "t",
						"ext_id": "530581000000",
						"ext_name": "腾冲市"
					}
				]
			},
			{
				"id": "5306",
				"pid": 53,
				"deep": 1,
				"name": "昭通",
				"pinyin": "zhao tong",
				"pinyin_prefix": "z",
				"ext_id": "530600000000",
				"ext_name": "昭通市",
				"childs": [
					{
						"id": "530602",
						"pid": 5306,
						"deep": 2,
						"name": "昭阳",
						"pinyin": "zhao yang",
						"pinyin_prefix": "z",
						"ext_id": "530602000000",
						"ext_name": "昭阳区"
					},
					{
						"id": "530621",
						"pid": 5306,
						"deep": 2,
						"name": "鲁甸",
						"pinyin": "lu dian",
						"pinyin_prefix": "l",
						"ext_id": "530621000000",
						"ext_name": "鲁甸县"
					},
					{
						"id": "530622",
						"pid": 5306,
						"deep": 2,
						"name": "巧家",
						"pinyin": "qiao jia",
						"pinyin_prefix": "q",
						"ext_id": "530622000000",
						"ext_name": "巧家县"
					},
					{
						"id": "530623",
						"pid": 5306,
						"deep": 2,
						"name": "盐津",
						"pinyin": "yan jin",
						"pinyin_prefix": "y",
						"ext_id": "530623000000",
						"ext_name": "盐津县"
					},
					{
						"id": "530624",
						"pid": 5306,
						"deep": 2,
						"name": "大关",
						"pinyin": "da guan",
						"pinyin_prefix": "d",
						"ext_id": "530624000000",
						"ext_name": "大关县"
					},
					{
						"id": "530625",
						"pid": 5306,
						"deep": 2,
						"name": "永善",
						"pinyin": "yong shan",
						"pinyin_prefix": "y",
						"ext_id": "530625000000",
						"ext_name": "永善县"
					},
					{
						"id": "530626",
						"pid": 5306,
						"deep": 2,
						"name": "绥江",
						"pinyin": "sui jiang",
						"pinyin_prefix": "s",
						"ext_id": "530626000000",
						"ext_name": "绥江县"
					},
					{
						"id": "530627",
						"pid": 5306,
						"deep": 2,
						"name": "镇雄",
						"pinyin": "zhen xiong",
						"pinyin_prefix": "z",
						"ext_id": "530627000000",
						"ext_name": "镇雄县"
					},
					{
						"id": "530628",
						"pid": 5306,
						"deep": 2,
						"name": "彝良",
						"pinyin": "yi liang",
						"pinyin_prefix": "y",
						"ext_id": "530628000000",
						"ext_name": "彝良县"
					},
					{
						"id": "530629",
						"pid": 5306,
						"deep": 2,
						"name": "威信",
						"pinyin": "wei xin",
						"pinyin_prefix": "w",
						"ext_id": "530629000000",
						"ext_name": "威信县"
					},
					{
						"id": "530681",
						"pid": 5306,
						"deep": 2,
						"name": "水富",
						"pinyin": "shui fu",
						"pinyin_prefix": "s",
						"ext_id": "530681000000",
						"ext_name": "水富市"
					}
				]
			},
			{
				"id": "5307",
				"pid": 53,
				"deep": 1,
				"name": "丽江",
				"pinyin": "li jiang",
				"pinyin_prefix": "l",
				"ext_id": "530700000000",
				"ext_name": "丽江市",
				"childs": [
					{
						"id": "530702",
						"pid": 5307,
						"deep": 2,
						"name": "古城",
						"pinyin": "gu cheng",
						"pinyin_prefix": "g",
						"ext_id": "530702000000",
						"ext_name": "古城区"
					},
					{
						"id": "530721",
						"pid": 5307,
						"deep": 2,
						"name": "玉龙",
						"pinyin": "yu long",
						"pinyin_prefix": "y",
						"ext_id": "530721000000",
						"ext_name": "玉龙纳西族自治县"
					},
					{
						"id": "530722",
						"pid": 5307,
						"deep": 2,
						"name": "永胜",
						"pinyin": "yong sheng",
						"pinyin_prefix": "y",
						"ext_id": "530722000000",
						"ext_name": "永胜县"
					},
					{
						"id": "530723",
						"pid": 5307,
						"deep": 2,
						"name": "华坪",
						"pinyin": "hua ping",
						"pinyin_prefix": "h",
						"ext_id": "530723000000",
						"ext_name": "华坪县"
					},
					{
						"id": "530724",
						"pid": 5307,
						"deep": 2,
						"name": "宁蒗",
						"pinyin": "ning lang",
						"pinyin_prefix": "n",
						"ext_id": "530724000000",
						"ext_name": "宁蒗彝族自治县"
					}
				]
			},
			{
				"id": "5308",
				"pid": 53,
				"deep": 1,
				"name": "普洱",
				"pinyin": "pu er",
				"pinyin_prefix": "p",
				"ext_id": "530800000000",
				"ext_name": "普洱市",
				"childs": [
					{
						"id": "530802",
						"pid": 5308,
						"deep": 2,
						"name": "思茅",
						"pinyin": "si mao",
						"pinyin_prefix": "s",
						"ext_id": "530802000000",
						"ext_name": "思茅区"
					},
					{
						"id": "530821",
						"pid": 5308,
						"deep": 2,
						"name": "宁洱",
						"pinyin": "ning er",
						"pinyin_prefix": "n",
						"ext_id": "530821000000",
						"ext_name": "宁洱哈尼族彝族自治县"
					},
					{
						"id": "530822",
						"pid": 5308,
						"deep": 2,
						"name": "墨江",
						"pinyin": "mo jiang",
						"pinyin_prefix": "m",
						"ext_id": "530822000000",
						"ext_name": "墨江哈尼族自治县"
					},
					{
						"id": "530823",
						"pid": 5308,
						"deep": 2,
						"name": "景东",
						"pinyin": "jing dong",
						"pinyin_prefix": "j",
						"ext_id": "530823000000",
						"ext_name": "景东彝族自治县"
					},
					{
						"id": "530824",
						"pid": 5308,
						"deep": 2,
						"name": "景谷",
						"pinyin": "jing gu",
						"pinyin_prefix": "j",
						"ext_id": "530824000000",
						"ext_name": "景谷傣族彝族自治县"
					},
					{
						"id": "530825",
						"pid": 5308,
						"deep": 2,
						"name": "镇沅",
						"pinyin": "zhen yuan",
						"pinyin_prefix": "z",
						"ext_id": "530825000000",
						"ext_name": "镇沅彝族哈尼族拉祜族自治县"
					},
					{
						"id": "530826",
						"pid": 5308,
						"deep": 2,
						"name": "江城",
						"pinyin": "jiang cheng",
						"pinyin_prefix": "j",
						"ext_id": "530826000000",
						"ext_name": "江城哈尼族彝族自治县"
					},
					{
						"id": "530827",
						"pid": 5308,
						"deep": 2,
						"name": "孟连",
						"pinyin": "meng lian",
						"pinyin_prefix": "m",
						"ext_id": "530827000000",
						"ext_name": "孟连傣族拉祜族佤族自治县"
					},
					{
						"id": "530828",
						"pid": 5308,
						"deep": 2,
						"name": "澜沧",
						"pinyin": "lan cang",
						"pinyin_prefix": "l",
						"ext_id": "530828000000",
						"ext_name": "澜沧拉祜族自治县"
					},
					{
						"id": "530829",
						"pid": 5308,
						"deep": 2,
						"name": "西盟",
						"pinyin": "xi meng",
						"pinyin_prefix": "x",
						"ext_id": "530829000000",
						"ext_name": "西盟佤族自治县"
					}
				]
			},
			{
				"id": "5309",
				"pid": 53,
				"deep": 1,
				"name": "临沧",
				"pinyin": "lin cang",
				"pinyin_prefix": "l",
				"ext_id": "530900000000",
				"ext_name": "临沧市",
				"childs": [
					{
						"id": "530902",
						"pid": 5309,
						"deep": 2,
						"name": "临翔",
						"pinyin": "lin xiang",
						"pinyin_prefix": "l",
						"ext_id": "530902000000",
						"ext_name": "临翔区"
					},
					{
						"id": "530921",
						"pid": 5309,
						"deep": 2,
						"name": "凤庆",
						"pinyin": "feng qing",
						"pinyin_prefix": "f",
						"ext_id": "530921000000",
						"ext_name": "凤庆县"
					},
					{
						"id": "530922",
						"pid": 5309,
						"deep": 2,
						"name": "云县",
						"pinyin": "yun xian",
						"pinyin_prefix": "y",
						"ext_id": "530922000000",
						"ext_name": "云县"
					},
					{
						"id": "530923",
						"pid": 5309,
						"deep": 2,
						"name": "永德",
						"pinyin": "yong de",
						"pinyin_prefix": "y",
						"ext_id": "530923000000",
						"ext_name": "永德县"
					},
					{
						"id": "530924",
						"pid": 5309,
						"deep": 2,
						"name": "镇康",
						"pinyin": "zhen kang",
						"pinyin_prefix": "z",
						"ext_id": "530924000000",
						"ext_name": "镇康县"
					},
					{
						"id": "530925",
						"pid": 5309,
						"deep": 2,
						"name": "双江",
						"pinyin": "shuang jiang",
						"pinyin_prefix": "s",
						"ext_id": "530925000000",
						"ext_name": "双江拉祜族佤族布朗族傣族自治县"
					},
					{
						"id": "530926",
						"pid": 5309,
						"deep": 2,
						"name": "耿马",
						"pinyin": "geng ma",
						"pinyin_prefix": "g",
						"ext_id": "530926000000",
						"ext_name": "耿马傣族佤族自治县"
					},
					{
						"id": "530927",
						"pid": 5309,
						"deep": 2,
						"name": "沧源",
						"pinyin": "cang yuan",
						"pinyin_prefix": "c",
						"ext_id": "530927000000",
						"ext_name": "沧源佤族自治县"
					}
				]
			},
			{
				"id": "5323",
				"pid": 53,
				"deep": 1,
				"name": "楚雄",
				"pinyin": "chu xiong",
				"pinyin_prefix": "c",
				"ext_id": "532300000000",
				"ext_name": "楚雄彝族自治州",
				"childs": [
					{
						"id": "532301",
						"pid": 5323,
						"deep": 2,
						"name": "楚雄市",
						"pinyin": "chu xiong shi",
						"pinyin_prefix": "c",
						"ext_id": "532301000000",
						"ext_name": "楚雄市"
					},
					{
						"id": "532302",
						"pid": 5323,
						"deep": 2,
						"name": "禄丰",
						"pinyin": "lu feng",
						"pinyin_prefix": "l",
						"ext_id": "532302000000",
						"ext_name": "禄丰市"
					},
					{
						"id": "532322",
						"pid": 5323,
						"deep": 2,
						"name": "双柏",
						"pinyin": "shuang bai",
						"pinyin_prefix": "s",
						"ext_id": "532322000000",
						"ext_name": "双柏县"
					},
					{
						"id": "532323",
						"pid": 5323,
						"deep": 2,
						"name": "牟定",
						"pinyin": "mou ding",
						"pinyin_prefix": "m",
						"ext_id": "532323000000",
						"ext_name": "牟定县"
					},
					{
						"id": "532324",
						"pid": 5323,
						"deep": 2,
						"name": "南华",
						"pinyin": "nan hua",
						"pinyin_prefix": "n",
						"ext_id": "532324000000",
						"ext_name": "南华县"
					},
					{
						"id": "532325",
						"pid": 5323,
						"deep": 2,
						"name": "姚安",
						"pinyin": "yao an",
						"pinyin_prefix": "y",
						"ext_id": "532325000000",
						"ext_name": "姚安县"
					},
					{
						"id": "532326",
						"pid": 5323,
						"deep": 2,
						"name": "大姚",
						"pinyin": "da yao",
						"pinyin_prefix": "d",
						"ext_id": "532326000000",
						"ext_name": "大姚县"
					},
					{
						"id": "532327",
						"pid": 5323,
						"deep": 2,
						"name": "永仁",
						"pinyin": "yong ren",
						"pinyin_prefix": "y",
						"ext_id": "532327000000",
						"ext_name": "永仁县"
					},
					{
						"id": "532328",
						"pid": 5323,
						"deep": 2,
						"name": "元谋",
						"pinyin": "yuan mou",
						"pinyin_prefix": "y",
						"ext_id": "532328000000",
						"ext_name": "元谋县"
					},
					{
						"id": "532329",
						"pid": 5323,
						"deep": 2,
						"name": "武定",
						"pinyin": "wu ding",
						"pinyin_prefix": "w",
						"ext_id": "532329000000",
						"ext_name": "武定县"
					}
				]
			},
			{
				"id": "5325",
				"pid": 53,
				"deep": 1,
				"name": "红河",
				"pinyin": "hong he",
				"pinyin_prefix": "h",
				"ext_id": "532500000000",
				"ext_name": "红河哈尼族彝族自治州",
				"childs": [
					{
						"id": "532501",
						"pid": 5325,
						"deep": 2,
						"name": "个旧",
						"pinyin": "ge jiu",
						"pinyin_prefix": "g",
						"ext_id": "532501000000",
						"ext_name": "个旧市"
					},
					{
						"id": "532502",
						"pid": 5325,
						"deep": 2,
						"name": "开远",
						"pinyin": "kai yuan",
						"pinyin_prefix": "k",
						"ext_id": "532502000000",
						"ext_name": "开远市"
					},
					{
						"id": "532503",
						"pid": 5325,
						"deep": 2,
						"name": "蒙自",
						"pinyin": "meng zi",
						"pinyin_prefix": "m",
						"ext_id": "532503000000",
						"ext_name": "蒙自市"
					},
					{
						"id": "532504",
						"pid": 5325,
						"deep": 2,
						"name": "弥勒",
						"pinyin": "mi le",
						"pinyin_prefix": "m",
						"ext_id": "532504000000",
						"ext_name": "弥勒市"
					},
					{
						"id": "532523",
						"pid": 5325,
						"deep": 2,
						"name": "屏边",
						"pinyin": "ping bian",
						"pinyin_prefix": "p",
						"ext_id": "532523000000",
						"ext_name": "屏边苗族自治县"
					},
					{
						"id": "532524",
						"pid": 5325,
						"deep": 2,
						"name": "建水",
						"pinyin": "jian shui",
						"pinyin_prefix": "j",
						"ext_id": "532524000000",
						"ext_name": "建水县"
					},
					{
						"id": "532525",
						"pid": 5325,
						"deep": 2,
						"name": "石屏",
						"pinyin": "shi ping",
						"pinyin_prefix": "s",
						"ext_id": "532525000000",
						"ext_name": "石屏县"
					},
					{
						"id": "532527",
						"pid": 5325,
						"deep": 2,
						"name": "泸西",
						"pinyin": "lu xi",
						"pinyin_prefix": "l",
						"ext_id": "532527000000",
						"ext_name": "泸西县"
					},
					{
						"id": "532528",
						"pid": 5325,
						"deep": 2,
						"name": "元阳",
						"pinyin": "yuan yang",
						"pinyin_prefix": "y",
						"ext_id": "532528000000",
						"ext_name": "元阳县"
					},
					{
						"id": "532529",
						"pid": 5325,
						"deep": 2,
						"name": "红河县",
						"pinyin": "hong he xian",
						"pinyin_prefix": "h",
						"ext_id": "532529000000",
						"ext_name": "红河县"
					},
					{
						"id": "532530",
						"pid": 5325,
						"deep": 2,
						"name": "金平",
						"pinyin": "jin ping",
						"pinyin_prefix": "j",
						"ext_id": "532530000000",
						"ext_name": "金平苗族瑶族傣族自治县"
					},
					{
						"id": "532531",
						"pid": 5325,
						"deep": 2,
						"name": "绿春",
						"pinyin": "lv chun",
						"pinyin_prefix": "l",
						"ext_id": "532531000000",
						"ext_name": "绿春县"
					},
					{
						"id": "532532",
						"pid": 5325,
						"deep": 2,
						"name": "河口",
						"pinyin": "he kou",
						"pinyin_prefix": "h",
						"ext_id": "532532000000",
						"ext_name": "河口瑶族自治县"
					}
				]
			},
			{
				"id": "5326",
				"pid": 53,
				"deep": 1,
				"name": "文山",
				"pinyin": "wen shan",
				"pinyin_prefix": "w",
				"ext_id": "532600000000",
				"ext_name": "文山壮族苗族自治州",
				"childs": [
					{
						"id": "532601",
						"pid": 5326,
						"deep": 2,
						"name": "文山市",
						"pinyin": "wen shan shi",
						"pinyin_prefix": "w",
						"ext_id": "532601000000",
						"ext_name": "文山市"
					},
					{
						"id": "532622",
						"pid": 5326,
						"deep": 2,
						"name": "砚山",
						"pinyin": "yan shan",
						"pinyin_prefix": "y",
						"ext_id": "532622000000",
						"ext_name": "砚山县"
					},
					{
						"id": "532623",
						"pid": 5326,
						"deep": 2,
						"name": "西畴",
						"pinyin": "xi chou",
						"pinyin_prefix": "x",
						"ext_id": "532623000000",
						"ext_name": "西畴县"
					},
					{
						"id": "532624",
						"pid": 5326,
						"deep": 2,
						"name": "麻栗坡",
						"pinyin": "ma li po",
						"pinyin_prefix": "m",
						"ext_id": "532624000000",
						"ext_name": "麻栗坡县"
					},
					{
						"id": "532625",
						"pid": 5326,
						"deep": 2,
						"name": "马关",
						"pinyin": "ma guan",
						"pinyin_prefix": "m",
						"ext_id": "532625000000",
						"ext_name": "马关县"
					},
					{
						"id": "532626",
						"pid": 5326,
						"deep": 2,
						"name": "丘北",
						"pinyin": "qiu bei",
						"pinyin_prefix": "q",
						"ext_id": "532626000000",
						"ext_name": "丘北县"
					},
					{
						"id": "532627",
						"pid": 5326,
						"deep": 2,
						"name": "广南",
						"pinyin": "guang nan",
						"pinyin_prefix": "g",
						"ext_id": "532627000000",
						"ext_name": "广南县"
					},
					{
						"id": "532628",
						"pid": 5326,
						"deep": 2,
						"name": "富宁",
						"pinyin": "fu ning",
						"pinyin_prefix": "f",
						"ext_id": "532628000000",
						"ext_name": "富宁县"
					}
				]
			},
			{
				"id": "5328",
				"pid": 53,
				"deep": 1,
				"name": "西双版纳",
				"pinyin": "xi shuang ban na",
				"pinyin_prefix": "x",
				"ext_id": "532800000000",
				"ext_name": "西双版纳傣族自治州",
				"childs": [
					{
						"id": "532801",
						"pid": 5328,
						"deep": 2,
						"name": "景洪",
						"pinyin": "jing hong",
						"pinyin_prefix": "j",
						"ext_id": "532801000000",
						"ext_name": "景洪市"
					},
					{
						"id": "532822",
						"pid": 5328,
						"deep": 2,
						"name": "勐海",
						"pinyin": "meng hai",
						"pinyin_prefix": "m",
						"ext_id": "532822000000",
						"ext_name": "勐海县"
					},
					{
						"id": "532823",
						"pid": 5328,
						"deep": 2,
						"name": "勐腊",
						"pinyin": "meng la",
						"pinyin_prefix": "m",
						"ext_id": "532823000000",
						"ext_name": "勐腊县"
					}
				]
			},
			{
				"id": "5329",
				"pid": 53,
				"deep": 1,
				"name": "大理",
				"pinyin": "da li",
				"pinyin_prefix": "d",
				"ext_id": "532900000000",
				"ext_name": "大理白族自治州",
				"childs": [
					{
						"id": "532901",
						"pid": 5329,
						"deep": 2,
						"name": "大理市",
						"pinyin": "da li shi",
						"pinyin_prefix": "d",
						"ext_id": "532901000000",
						"ext_name": "大理市"
					},
					{
						"id": "532922",
						"pid": 5329,
						"deep": 2,
						"name": "漾濞",
						"pinyin": "yang bi",
						"pinyin_prefix": "y",
						"ext_id": "532922000000",
						"ext_name": "漾濞彝族自治县"
					},
					{
						"id": "532923",
						"pid": 5329,
						"deep": 2,
						"name": "祥云",
						"pinyin": "xiang yun",
						"pinyin_prefix": "x",
						"ext_id": "532923000000",
						"ext_name": "祥云县"
					},
					{
						"id": "532924",
						"pid": 5329,
						"deep": 2,
						"name": "宾川",
						"pinyin": "bin chuan",
						"pinyin_prefix": "b",
						"ext_id": "532924000000",
						"ext_name": "宾川县"
					},
					{
						"id": "532925",
						"pid": 5329,
						"deep": 2,
						"name": "弥渡",
						"pinyin": "mi du",
						"pinyin_prefix": "m",
						"ext_id": "532925000000",
						"ext_name": "弥渡县"
					},
					{
						"id": "532926",
						"pid": 5329,
						"deep": 2,
						"name": "南涧",
						"pinyin": "nan jian",
						"pinyin_prefix": "n",
						"ext_id": "532926000000",
						"ext_name": "南涧彝族自治县"
					},
					{
						"id": "532927",
						"pid": 5329,
						"deep": 2,
						"name": "巍山",
						"pinyin": "wei shan",
						"pinyin_prefix": "w",
						"ext_id": "532927000000",
						"ext_name": "巍山彝族回族自治县"
					},
					{
						"id": "532928",
						"pid": 5329,
						"deep": 2,
						"name": "永平",
						"pinyin": "yong ping",
						"pinyin_prefix": "y",
						"ext_id": "532928000000",
						"ext_name": "永平县"
					},
					{
						"id": "532929",
						"pid": 5329,
						"deep": 2,
						"name": "云龙",
						"pinyin": "yun long",
						"pinyin_prefix": "y",
						"ext_id": "532929000000",
						"ext_name": "云龙县"
					},
					{
						"id": "532930",
						"pid": 5329,
						"deep": 2,
						"name": "洱源",
						"pinyin": "er yuan",
						"pinyin_prefix": "e",
						"ext_id": "532930000000",
						"ext_name": "洱源县"
					},
					{
						"id": "532931",
						"pid": 5329,
						"deep": 2,
						"name": "剑川",
						"pinyin": "jian chuan",
						"pinyin_prefix": "j",
						"ext_id": "532931000000",
						"ext_name": "剑川县"
					},
					{
						"id": "532932",
						"pid": 5329,
						"deep": 2,
						"name": "鹤庆",
						"pinyin": "he qing",
						"pinyin_prefix": "h",
						"ext_id": "532932000000",
						"ext_name": "鹤庆县"
					}
				]
			},
			{
				"id": "5331",
				"pid": 53,
				"deep": 1,
				"name": "德宏",
				"pinyin": "de hong",
				"pinyin_prefix": "d",
				"ext_id": "533100000000",
				"ext_name": "德宏傣族景颇族自治州",
				"childs": [
					{
						"id": "533102",
						"pid": 5331,
						"deep": 2,
						"name": "瑞丽",
						"pinyin": "rui li",
						"pinyin_prefix": "r",
						"ext_id": "533102000000",
						"ext_name": "瑞丽市"
					},
					{
						"id": "533103",
						"pid": 5331,
						"deep": 2,
						"name": "芒市",
						"pinyin": "mang shi",
						"pinyin_prefix": "m",
						"ext_id": "533103000000",
						"ext_name": "芒市"
					},
					{
						"id": "533122",
						"pid": 5331,
						"deep": 2,
						"name": "梁河",
						"pinyin": "liang he",
						"pinyin_prefix": "l",
						"ext_id": "533122000000",
						"ext_name": "梁河县"
					},
					{
						"id": "533123",
						"pid": 5331,
						"deep": 2,
						"name": "盈江",
						"pinyin": "ying jiang",
						"pinyin_prefix": "y",
						"ext_id": "533123000000",
						"ext_name": "盈江县"
					},
					{
						"id": "533124",
						"pid": 5331,
						"deep": 2,
						"name": "陇川",
						"pinyin": "long chuan",
						"pinyin_prefix": "l",
						"ext_id": "533124000000",
						"ext_name": "陇川县"
					}
				]
			},
			{
				"id": "5333",
				"pid": 53,
				"deep": 1,
				"name": "怒江",
				"pinyin": "nu jiang",
				"pinyin_prefix": "n",
				"ext_id": "533300000000",
				"ext_name": "怒江傈僳族自治州",
				"childs": [
					{
						"id": "533301",
						"pid": 5333,
						"deep": 2,
						"name": "泸水",
						"pinyin": "lu shui",
						"pinyin_prefix": "l",
						"ext_id": "533301000000",
						"ext_name": "泸水市"
					},
					{
						"id": "533323",
						"pid": 5333,
						"deep": 2,
						"name": "福贡",
						"pinyin": "fu gong",
						"pinyin_prefix": "f",
						"ext_id": "533323000000",
						"ext_name": "福贡县"
					},
					{
						"id": "533324",
						"pid": 5333,
						"deep": 2,
						"name": "贡山",
						"pinyin": "gong shan",
						"pinyin_prefix": "g",
						"ext_id": "533324000000",
						"ext_name": "贡山独龙族怒族自治县"
					},
					{
						"id": "533325",
						"pid": 5333,
						"deep": 2,
						"name": "兰坪",
						"pinyin": "lan ping",
						"pinyin_prefix": "l",
						"ext_id": "533325000000",
						"ext_name": "兰坪白族普米族自治县"
					}
				]
			},
			{
				"id": "5334",
				"pid": 53,
				"deep": 1,
				"name": "迪庆",
				"pinyin": "di qing",
				"pinyin_prefix": "d",
				"ext_id": "533400000000",
				"ext_name": "迪庆藏族自治州",
				"childs": [
					{
						"id": "533401",
						"pid": 5334,
						"deep": 2,
						"name": "香格里拉",
						"pinyin": "xiang ge li la",
						"pinyin_prefix": "x",
						"ext_id": "533401000000",
						"ext_name": "香格里拉市"
					},
					{
						"id": "533422",
						"pid": 5334,
						"deep": 2,
						"name": "德钦",
						"pinyin": "de qin",
						"pinyin_prefix": "d",
						"ext_id": "533422000000",
						"ext_name": "德钦县"
					},
					{
						"id": "533423",
						"pid": 5334,
						"deep": 2,
						"name": "维西",
						"pinyin": "wei xi",
						"pinyin_prefix": "w",
						"ext_id": "533423000000",
						"ext_name": "维西傈僳族自治县"
					}
				]
			}
		]
	},
	{
		"id": "54",
		"pid": 0,
		"deep": 0,
		"name": "西藏",
		"pinyin": "xi zang",
		"pinyin_prefix": "x",
		"ext_id": "540000000000",
		"ext_name": "西藏自治区",
		"childs": [
			{
				"id": "5401",
				"pid": 54,
				"deep": 1,
				"name": "拉萨",
				"pinyin": "la sa",
				"pinyin_prefix": "l",
				"ext_id": "540100000000",
				"ext_name": "拉萨市",
				"childs": [
					{
						"id": "540102",
						"pid": 5401,
						"deep": 2,
						"name": "城关",
						"pinyin": "cheng guan",
						"pinyin_prefix": "c",
						"ext_id": "540102000000",
						"ext_name": "城关区"
					},
					{
						"id": "540103",
						"pid": 5401,
						"deep": 2,
						"name": "堆龙德庆区",
						"pinyin": "dui long de qing qu",
						"pinyin_prefix": "d",
						"ext_id": "540103000000",
						"ext_name": "堆龙德庆区"
					},
					{
						"id": "540104",
						"pid": 5401,
						"deep": 2,
						"name": "达孜",
						"pinyin": "da zi",
						"pinyin_prefix": "d",
						"ext_id": "540104000000",
						"ext_name": "达孜区"
					},
					{
						"id": "540121",
						"pid": 5401,
						"deep": 2,
						"name": "林周",
						"pinyin": "lin zhou",
						"pinyin_prefix": "l",
						"ext_id": "540121000000",
						"ext_name": "林周县"
					},
					{
						"id": "540122",
						"pid": 5401,
						"deep": 2,
						"name": "当雄",
						"pinyin": "dang xiong",
						"pinyin_prefix": "d",
						"ext_id": "540122000000",
						"ext_name": "当雄县"
					},
					{
						"id": "540123",
						"pid": 5401,
						"deep": 2,
						"name": "尼木",
						"pinyin": "ni mu",
						"pinyin_prefix": "n",
						"ext_id": "540123000000",
						"ext_name": "尼木县"
					},
					{
						"id": "540124",
						"pid": 5401,
						"deep": 2,
						"name": "曲水",
						"pinyin": "qu shui",
						"pinyin_prefix": "q",
						"ext_id": "540124000000",
						"ext_name": "曲水县"
					},
					{
						"id": "540127",
						"pid": 5401,
						"deep": 2,
						"name": "墨竹工卡",
						"pinyin": "mo zhu gong ka",
						"pinyin_prefix": "m",
						"ext_id": "540127000000",
						"ext_name": "墨竹工卡县"
					}
				]
			},
			{
				"id": "5402",
				"pid": 54,
				"deep": 1,
				"name": "日喀则",
				"pinyin": "ri ka ze",
				"pinyin_prefix": "r",
				"ext_id": "540200000000",
				"ext_name": "日喀则市",
				"childs": [
					{
						"id": "540202",
						"pid": 5402,
						"deep": 2,
						"name": "桑珠孜",
						"pinyin": "sang zhu zi",
						"pinyin_prefix": "s",
						"ext_id": "540202000000",
						"ext_name": "桑珠孜区"
					},
					{
						"id": "540221",
						"pid": 5402,
						"deep": 2,
						"name": "南木林",
						"pinyin": "nan mu lin",
						"pinyin_prefix": "n",
						"ext_id": "540221000000",
						"ext_name": "南木林县"
					},
					{
						"id": "540222",
						"pid": 5402,
						"deep": 2,
						"name": "江孜",
						"pinyin": "jiang zi",
						"pinyin_prefix": "j",
						"ext_id": "540222000000",
						"ext_name": "江孜县"
					},
					{
						"id": "540223",
						"pid": 5402,
						"deep": 2,
						"name": "定日",
						"pinyin": "ding ri",
						"pinyin_prefix": "d",
						"ext_id": "540223000000",
						"ext_name": "定日县"
					},
					{
						"id": "540224",
						"pid": 5402,
						"deep": 2,
						"name": "萨迦",
						"pinyin": "sa jia",
						"pinyin_prefix": "s",
						"ext_id": "540224000000",
						"ext_name": "萨迦县"
					},
					{
						"id": "540225",
						"pid": 5402,
						"deep": 2,
						"name": "拉孜",
						"pinyin": "la zi",
						"pinyin_prefix": "l",
						"ext_id": "540225000000",
						"ext_name": "拉孜县"
					},
					{
						"id": "540226",
						"pid": 5402,
						"deep": 2,
						"name": "昂仁",
						"pinyin": "ang ren",
						"pinyin_prefix": "a",
						"ext_id": "540226000000",
						"ext_name": "昂仁县"
					},
					{
						"id": "540227",
						"pid": 5402,
						"deep": 2,
						"name": "谢通门",
						"pinyin": "xie tong men",
						"pinyin_prefix": "x",
						"ext_id": "540227000000",
						"ext_name": "谢通门县"
					},
					{
						"id": "540228",
						"pid": 5402,
						"deep": 2,
						"name": "白朗",
						"pinyin": "bai lang",
						"pinyin_prefix": "b",
						"ext_id": "540228000000",
						"ext_name": "白朗县"
					},
					{
						"id": "540229",
						"pid": 5402,
						"deep": 2,
						"name": "仁布",
						"pinyin": "ren bu",
						"pinyin_prefix": "r",
						"ext_id": "540229000000",
						"ext_name": "仁布县"
					},
					{
						"id": "540230",
						"pid": 5402,
						"deep": 2,
						"name": "康马",
						"pinyin": "kang ma",
						"pinyin_prefix": "k",
						"ext_id": "540230000000",
						"ext_name": "康马县"
					},
					{
						"id": "540231",
						"pid": 5402,
						"deep": 2,
						"name": "定结",
						"pinyin": "ding jie",
						"pinyin_prefix": "d",
						"ext_id": "540231000000",
						"ext_name": "定结县"
					},
					{
						"id": "540232",
						"pid": 5402,
						"deep": 2,
						"name": "仲巴",
						"pinyin": "zhong ba",
						"pinyin_prefix": "z",
						"ext_id": "540232000000",
						"ext_name": "仲巴县"
					},
					{
						"id": "540233",
						"pid": 5402,
						"deep": 2,
						"name": "亚东",
						"pinyin": "ya dong",
						"pinyin_prefix": "y",
						"ext_id": "540233000000",
						"ext_name": "亚东县"
					},
					{
						"id": "540234",
						"pid": 5402,
						"deep": 2,
						"name": "吉隆",
						"pinyin": "ji long",
						"pinyin_prefix": "j",
						"ext_id": "540234000000",
						"ext_name": "吉隆县"
					},
					{
						"id": "540235",
						"pid": 5402,
						"deep": 2,
						"name": "聂拉木",
						"pinyin": "nie la mu",
						"pinyin_prefix": "n",
						"ext_id": "540235000000",
						"ext_name": "聂拉木县"
					},
					{
						"id": "540236",
						"pid": 5402,
						"deep": 2,
						"name": "萨嘎",
						"pinyin": "sa ga",
						"pinyin_prefix": "s",
						"ext_id": "540236000000",
						"ext_name": "萨嘎县"
					},
					{
						"id": "540237",
						"pid": 5402,
						"deep": 2,
						"name": "岗巴",
						"pinyin": "gang ba",
						"pinyin_prefix": "g",
						"ext_id": "540237000000",
						"ext_name": "岗巴县"
					}
				]
			},
			{
				"id": "5403",
				"pid": 54,
				"deep": 1,
				"name": "昌都",
				"pinyin": "chang du",
				"pinyin_prefix": "c",
				"ext_id": "540300000000",
				"ext_name": "昌都市",
				"childs": [
					{
						"id": "540302",
						"pid": 5403,
						"deep": 2,
						"name": "卡若",
						"pinyin": "ka ruo",
						"pinyin_prefix": "k",
						"ext_id": "540302000000",
						"ext_name": "卡若区"
					},
					{
						"id": "540321",
						"pid": 5403,
						"deep": 2,
						"name": "江达",
						"pinyin": "jiang da",
						"pinyin_prefix": "j",
						"ext_id": "540321000000",
						"ext_name": "江达县"
					},
					{
						"id": "540322",
						"pid": 5403,
						"deep": 2,
						"name": "贡觉",
						"pinyin": "gong jue",
						"pinyin_prefix": "g",
						"ext_id": "540322000000",
						"ext_name": "贡觉县"
					},
					{
						"id": "540323",
						"pid": 5403,
						"deep": 2,
						"name": "类乌齐",
						"pinyin": "lei wu qi",
						"pinyin_prefix": "l",
						"ext_id": "540323000000",
						"ext_name": "类乌齐县"
					},
					{
						"id": "540324",
						"pid": 5403,
						"deep": 2,
						"name": "丁青",
						"pinyin": "ding qing",
						"pinyin_prefix": "d",
						"ext_id": "540324000000",
						"ext_name": "丁青县"
					},
					{
						"id": "540325",
						"pid": 5403,
						"deep": 2,
						"name": "察雅",
						"pinyin": "cha ya",
						"pinyin_prefix": "c",
						"ext_id": "540325000000",
						"ext_name": "察雅县"
					},
					{
						"id": "540326",
						"pid": 5403,
						"deep": 2,
						"name": "八宿",
						"pinyin": "ba su",
						"pinyin_prefix": "b",
						"ext_id": "540326000000",
						"ext_name": "八宿县"
					},
					{
						"id": "540327",
						"pid": 5403,
						"deep": 2,
						"name": "左贡",
						"pinyin": "zuo gong",
						"pinyin_prefix": "z",
						"ext_id": "540327000000",
						"ext_name": "左贡县"
					},
					{
						"id": "540328",
						"pid": 5403,
						"deep": 2,
						"name": "芒康",
						"pinyin": "mang kang",
						"pinyin_prefix": "m",
						"ext_id": "540328000000",
						"ext_name": "芒康县"
					},
					{
						"id": "540329",
						"pid": 5403,
						"deep": 2,
						"name": "洛隆",
						"pinyin": "luo long",
						"pinyin_prefix": "l",
						"ext_id": "540329000000",
						"ext_name": "洛隆县"
					},
					{
						"id": "540330",
						"pid": 5403,
						"deep": 2,
						"name": "边坝",
						"pinyin": "bian ba",
						"pinyin_prefix": "b",
						"ext_id": "540330000000",
						"ext_name": "边坝县"
					}
				]
			},
			{
				"id": "5404",
				"pid": 54,
				"deep": 1,
				"name": "林芝",
				"pinyin": "lin zhi",
				"pinyin_prefix": "l",
				"ext_id": "540400000000",
				"ext_name": "林芝市",
				"childs": [
					{
						"id": "540402",
						"pid": 5404,
						"deep": 2,
						"name": "巴宜",
						"pinyin": "ba yi",
						"pinyin_prefix": "b",
						"ext_id": "540402000000",
						"ext_name": "巴宜区"
					},
					{
						"id": "540421",
						"pid": 5404,
						"deep": 2,
						"name": "工布江达",
						"pinyin": "gong bu jiang da",
						"pinyin_prefix": "g",
						"ext_id": "540421000000",
						"ext_name": "工布江达县"
					},
					{
						"id": "540422",
						"pid": 5404,
						"deep": 2,
						"name": "米林",
						"pinyin": "mi lin",
						"pinyin_prefix": "m",
						"ext_id": "540422000000",
						"ext_name": "米林市"
					},
					{
						"id": "540423",
						"pid": 5404,
						"deep": 2,
						"name": "墨脱",
						"pinyin": "mo tuo",
						"pinyin_prefix": "m",
						"ext_id": "540423000000",
						"ext_name": "墨脱县"
					},
					{
						"id": "540424",
						"pid": 5404,
						"deep": 2,
						"name": "波密",
						"pinyin": "bo mi",
						"pinyin_prefix": "b",
						"ext_id": "540424000000",
						"ext_name": "波密县"
					},
					{
						"id": "540425",
						"pid": 5404,
						"deep": 2,
						"name": "察隅",
						"pinyin": "cha yu",
						"pinyin_prefix": "c",
						"ext_id": "540425000000",
						"ext_name": "察隅县"
					},
					{
						"id": "540426",
						"pid": 5404,
						"deep": 2,
						"name": "朗县",
						"pinyin": "lang xian",
						"pinyin_prefix": "l",
						"ext_id": "540426000000",
						"ext_name": "朗县"
					}
				]
			},
			{
				"id": "5405",
				"pid": 54,
				"deep": 1,
				"name": "山南",
				"pinyin": "shan nan",
				"pinyin_prefix": "s",
				"ext_id": "540500000000",
				"ext_name": "山南市",
				"childs": [
					{
						"id": "540502",
						"pid": 5405,
						"deep": 2,
						"name": "乃东",
						"pinyin": "nai dong",
						"pinyin_prefix": "n",
						"ext_id": "540502000000",
						"ext_name": "乃东区"
					},
					{
						"id": "540521",
						"pid": 5405,
						"deep": 2,
						"name": "扎囊",
						"pinyin": "zha nang",
						"pinyin_prefix": "z",
						"ext_id": "540521000000",
						"ext_name": "扎囊县"
					},
					{
						"id": "540522",
						"pid": 5405,
						"deep": 2,
						"name": "贡嘎",
						"pinyin": "gong ga",
						"pinyin_prefix": "g",
						"ext_id": "540522000000",
						"ext_name": "贡嘎县"
					},
					{
						"id": "540523",
						"pid": 5405,
						"deep": 2,
						"name": "桑日",
						"pinyin": "sang ri",
						"pinyin_prefix": "s",
						"ext_id": "540523000000",
						"ext_name": "桑日县"
					},
					{
						"id": "540524",
						"pid": 5405,
						"deep": 2,
						"name": "琼结",
						"pinyin": "qiong jie",
						"pinyin_prefix": "q",
						"ext_id": "540524000000",
						"ext_name": "琼结县"
					},
					{
						"id": "540525",
						"pid": 5405,
						"deep": 2,
						"name": "曲松",
						"pinyin": "qu song",
						"pinyin_prefix": "q",
						"ext_id": "540525000000",
						"ext_name": "曲松县"
					},
					{
						"id": "540526",
						"pid": 5405,
						"deep": 2,
						"name": "措美",
						"pinyin": "cuo mei",
						"pinyin_prefix": "c",
						"ext_id": "540526000000",
						"ext_name": "措美县"
					},
					{
						"id": "540527",
						"pid": 5405,
						"deep": 2,
						"name": "洛扎",
						"pinyin": "luo zha",
						"pinyin_prefix": "l",
						"ext_id": "540527000000",
						"ext_name": "洛扎县"
					},
					{
						"id": "540528",
						"pid": 5405,
						"deep": 2,
						"name": "加查",
						"pinyin": "jia cha",
						"pinyin_prefix": "j",
						"ext_id": "540528000000",
						"ext_name": "加查县"
					},
					{
						"id": "540529",
						"pid": 5405,
						"deep": 2,
						"name": "隆子",
						"pinyin": "long zi",
						"pinyin_prefix": "l",
						"ext_id": "540529000000",
						"ext_name": "隆子县"
					},
					{
						"id": "540530",
						"pid": 5405,
						"deep": 2,
						"name": "错那",
						"pinyin": "cuo na",
						"pinyin_prefix": "c",
						"ext_id": "540530000000",
						"ext_name": "错那市"
					},
					{
						"id": "540531",
						"pid": 5405,
						"deep": 2,
						"name": "浪卡子",
						"pinyin": "lang ka zi",
						"pinyin_prefix": "l",
						"ext_id": "540531000000",
						"ext_name": "浪卡子县"
					}
				]
			},
			{
				"id": "5406",
				"pid": 54,
				"deep": 1,
				"name": "那曲",
				"pinyin": "na qu",
				"pinyin_prefix": "n",
				"ext_id": "540600000000",
				"ext_name": "那曲市",
				"childs": [
					{
						"id": "540602",
						"pid": 5406,
						"deep": 2,
						"name": "色尼",
						"pinyin": "se ni",
						"pinyin_prefix": "s",
						"ext_id": "540602000000",
						"ext_name": "色尼区"
					},
					{
						"id": "540621",
						"pid": 5406,
						"deep": 2,
						"name": "嘉黎",
						"pinyin": "jia li",
						"pinyin_prefix": "j",
						"ext_id": "540621000000",
						"ext_name": "嘉黎县"
					},
					{
						"id": "540622",
						"pid": 5406,
						"deep": 2,
						"name": "比如",
						"pinyin": "bi ru",
						"pinyin_prefix": "b",
						"ext_id": "540622000000",
						"ext_name": "比如县"
					},
					{
						"id": "540623",
						"pid": 5406,
						"deep": 2,
						"name": "聂荣",
						"pinyin": "nie rong",
						"pinyin_prefix": "n",
						"ext_id": "540623000000",
						"ext_name": "聂荣县"
					},
					{
						"id": "540624",
						"pid": 5406,
						"deep": 2,
						"name": "安多",
						"pinyin": "an duo",
						"pinyin_prefix": "a",
						"ext_id": "540624000000",
						"ext_name": "安多县"
					},
					{
						"id": "540625",
						"pid": 5406,
						"deep": 2,
						"name": "申扎",
						"pinyin": "shen zha",
						"pinyin_prefix": "s",
						"ext_id": "540625000000",
						"ext_name": "申扎县"
					},
					{
						"id": "540626",
						"pid": 5406,
						"deep": 2,
						"name": "索县",
						"pinyin": "suo xian",
						"pinyin_prefix": "s",
						"ext_id": "540626000000",
						"ext_name": "索县"
					},
					{
						"id": "540627",
						"pid": 5406,
						"deep": 2,
						"name": "班戈",
						"pinyin": "ban ge",
						"pinyin_prefix": "b",
						"ext_id": "540627000000",
						"ext_name": "班戈县"
					},
					{
						"id": "540628",
						"pid": 5406,
						"deep": 2,
						"name": "巴青",
						"pinyin": "ba qing",
						"pinyin_prefix": "b",
						"ext_id": "540628000000",
						"ext_name": "巴青县"
					},
					{
						"id": "540629",
						"pid": 5406,
						"deep": 2,
						"name": "尼玛",
						"pinyin": "ni ma",
						"pinyin_prefix": "n",
						"ext_id": "540629000000",
						"ext_name": "尼玛县"
					},
					{
						"id": "540630",
						"pid": 5406,
						"deep": 2,
						"name": "双湖",
						"pinyin": "shuang hu",
						"pinyin_prefix": "s",
						"ext_id": "540630000000",
						"ext_name": "双湖县"
					}
				]
			},
			{
				"id": "5425",
				"pid": 54,
				"deep": 1,
				"name": "阿里",
				"pinyin": "a li",
				"pinyin_prefix": "a",
				"ext_id": "542500000000",
				"ext_name": "阿里地区",
				"childs": [
					{
						"id": "542521",
						"pid": 5425,
						"deep": 2,
						"name": "普兰",
						"pinyin": "pu lan",
						"pinyin_prefix": "p",
						"ext_id": "542521000000",
						"ext_name": "普兰县"
					},
					{
						"id": "542522",
						"pid": 5425,
						"deep": 2,
						"name": "札达",
						"pinyin": "zha da",
						"pinyin_prefix": "z",
						"ext_id": "542522000000",
						"ext_name": "札达县"
					},
					{
						"id": "542523",
						"pid": 5425,
						"deep": 2,
						"name": "噶尔",
						"pinyin": "ga er",
						"pinyin_prefix": "g",
						"ext_id": "542523000000",
						"ext_name": "噶尔县"
					},
					{
						"id": "542524",
						"pid": 5425,
						"deep": 2,
						"name": "日土",
						"pinyin": "ri tu",
						"pinyin_prefix": "r",
						"ext_id": "542524000000",
						"ext_name": "日土县"
					},
					{
						"id": "542525",
						"pid": 5425,
						"deep": 2,
						"name": "革吉",
						"pinyin": "ge ji",
						"pinyin_prefix": "g",
						"ext_id": "542525000000",
						"ext_name": "革吉县"
					},
					{
						"id": "542526",
						"pid": 5425,
						"deep": 2,
						"name": "改则",
						"pinyin": "gai ze",
						"pinyin_prefix": "g",
						"ext_id": "542526000000",
						"ext_name": "改则县"
					},
					{
						"id": "542527",
						"pid": 5425,
						"deep": 2,
						"name": "措勤",
						"pinyin": "cuo qin",
						"pinyin_prefix": "c",
						"ext_id": "542527000000",
						"ext_name": "措勤县"
					}
				]
			}
		]
	},
	{
		"id": "61",
		"pid": 0,
		"deep": 0,
		"name": "陕西",
		"pinyin": "shan xi",
		"pinyin_prefix": "s",
		"ext_id": "610000000000",
		"ext_name": "陕西省",
		"childs": [
			{
				"id": "6101",
				"pid": 61,
				"deep": 1,
				"name": "西安",
				"pinyin": "xi an",
				"pinyin_prefix": "x",
				"ext_id": "610100000000",
				"ext_name": "西安市",
				"childs": [
					{
						"id": "610102",
						"pid": 6101,
						"deep": 2,
						"name": "新城",
						"pinyin": "xin cheng",
						"pinyin_prefix": "x",
						"ext_id": "610102000000",
						"ext_name": "新城区"
					},
					{
						"id": "610103",
						"pid": 6101,
						"deep": 2,
						"name": "碑林",
						"pinyin": "bei lin",
						"pinyin_prefix": "b",
						"ext_id": "610103000000",
						"ext_name": "碑林区"
					},
					{
						"id": "610104",
						"pid": 6101,
						"deep": 2,
						"name": "莲湖",
						"pinyin": "lian hu",
						"pinyin_prefix": "l",
						"ext_id": "610104000000",
						"ext_name": "莲湖区"
					},
					{
						"id": "610111",
						"pid": 6101,
						"deep": 2,
						"name": "灞桥",
						"pinyin": "ba qiao",
						"pinyin_prefix": "b",
						"ext_id": "610111000000",
						"ext_name": "灞桥区"
					},
					{
						"id": "610112",
						"pid": 6101,
						"deep": 2,
						"name": "未央",
						"pinyin": "wei yang",
						"pinyin_prefix": "w",
						"ext_id": "610112000000",
						"ext_name": "未央区"
					},
					{
						"id": "610113",
						"pid": 6101,
						"deep": 2,
						"name": "雁塔",
						"pinyin": "yan ta",
						"pinyin_prefix": "y",
						"ext_id": "610113000000",
						"ext_name": "雁塔区"
					},
					{
						"id": "610114",
						"pid": 6101,
						"deep": 2,
						"name": "阎良",
						"pinyin": "yan liang",
						"pinyin_prefix": "y",
						"ext_id": "610114000000",
						"ext_name": "阎良区"
					},
					{
						"id": "610115",
						"pid": 6101,
						"deep": 2,
						"name": "临潼",
						"pinyin": "lin tong",
						"pinyin_prefix": "l",
						"ext_id": "610115000000",
						"ext_name": "临潼区"
					},
					{
						"id": "610116",
						"pid": 6101,
						"deep": 2,
						"name": "长安",
						"pinyin": "chang an",
						"pinyin_prefix": "c",
						"ext_id": "610116000000",
						"ext_name": "长安区"
					},
					{
						"id": "610117",
						"pid": 6101,
						"deep": 2,
						"name": "高陵",
						"pinyin": "gao ling",
						"pinyin_prefix": "g",
						"ext_id": "610117000000",
						"ext_name": "高陵区"
					},
					{
						"id": "610118",
						"pid": 6101,
						"deep": 2,
						"name": "鄠邑",
						"pinyin": "hu yi",
						"pinyin_prefix": "h",
						"ext_id": "610118000000",
						"ext_name": "鄠邑区"
					},
					{
						"id": "610122",
						"pid": 6101,
						"deep": 2,
						"name": "蓝田",
						"pinyin": "lan tian",
						"pinyin_prefix": "l",
						"ext_id": "610122000000",
						"ext_name": "蓝田县"
					},
					{
						"id": "610124",
						"pid": 6101,
						"deep": 2,
						"name": "周至",
						"pinyin": "zhou zhi",
						"pinyin_prefix": "z",
						"ext_id": "610124000000",
						"ext_name": "周至县"
					}
				]
			},
			{
				"id": "6102",
				"pid": 61,
				"deep": 1,
				"name": "铜川",
				"pinyin": "tong chuan",
				"pinyin_prefix": "t",
				"ext_id": "610200000000",
				"ext_name": "铜川市",
				"childs": [
					{
						"id": "610202",
						"pid": 6102,
						"deep": 2,
						"name": "王益",
						"pinyin": "wang yi",
						"pinyin_prefix": "w",
						"ext_id": "610202000000",
						"ext_name": "王益区"
					},
					{
						"id": "610203",
						"pid": 6102,
						"deep": 2,
						"name": "印台",
						"pinyin": "yin tai",
						"pinyin_prefix": "y",
						"ext_id": "610203000000",
						"ext_name": "印台区"
					},
					{
						"id": "610204",
						"pid": 6102,
						"deep": 2,
						"name": "耀州",
						"pinyin": "yao zhou",
						"pinyin_prefix": "y",
						"ext_id": "610204000000",
						"ext_name": "耀州区"
					},
					{
						"id": "610222",
						"pid": 6102,
						"deep": 2,
						"name": "宜君",
						"pinyin": "yi jun",
						"pinyin_prefix": "y",
						"ext_id": "610222000000",
						"ext_name": "宜君县"
					}
				]
			},
			{
				"id": "6103",
				"pid": 61,
				"deep": 1,
				"name": "宝鸡",
				"pinyin": "bao ji",
				"pinyin_prefix": "b",
				"ext_id": "610300000000",
				"ext_name": "宝鸡市",
				"childs": [
					{
						"id": "610302",
						"pid": 6103,
						"deep": 2,
						"name": "渭滨",
						"pinyin": "wei bin",
						"pinyin_prefix": "w",
						"ext_id": "610302000000",
						"ext_name": "渭滨区"
					},
					{
						"id": "610303",
						"pid": 6103,
						"deep": 2,
						"name": "金台",
						"pinyin": "jin tai",
						"pinyin_prefix": "j",
						"ext_id": "610303000000",
						"ext_name": "金台区"
					},
					{
						"id": "610304",
						"pid": 6103,
						"deep": 2,
						"name": "陈仓",
						"pinyin": "chen cang",
						"pinyin_prefix": "c",
						"ext_id": "610304000000",
						"ext_name": "陈仓区"
					},
					{
						"id": "610305",
						"pid": 6103,
						"deep": 2,
						"name": "凤翔",
						"pinyin": "feng xiang",
						"pinyin_prefix": "f",
						"ext_id": "610305000000",
						"ext_name": "凤翔区"
					},
					{
						"id": "610323",
						"pid": 6103,
						"deep": 2,
						"name": "岐山",
						"pinyin": "qi shan",
						"pinyin_prefix": "q",
						"ext_id": "610323000000",
						"ext_name": "岐山县"
					},
					{
						"id": "610324",
						"pid": 6103,
						"deep": 2,
						"name": "扶风",
						"pinyin": "fu feng",
						"pinyin_prefix": "f",
						"ext_id": "610324000000",
						"ext_name": "扶风县"
					},
					{
						"id": "610326",
						"pid": 6103,
						"deep": 2,
						"name": "眉县",
						"pinyin": "mei xian",
						"pinyin_prefix": "m",
						"ext_id": "610326000000",
						"ext_name": "眉县"
					},
					{
						"id": "610327",
						"pid": 6103,
						"deep": 2,
						"name": "陇县",
						"pinyin": "long xian",
						"pinyin_prefix": "l",
						"ext_id": "610327000000",
						"ext_name": "陇县"
					},
					{
						"id": "610328",
						"pid": 6103,
						"deep": 2,
						"name": "千阳",
						"pinyin": "qian yang",
						"pinyin_prefix": "q",
						"ext_id": "610328000000",
						"ext_name": "千阳县"
					},
					{
						"id": "610329",
						"pid": 6103,
						"deep": 2,
						"name": "麟游",
						"pinyin": "lin you",
						"pinyin_prefix": "l",
						"ext_id": "610329000000",
						"ext_name": "麟游县"
					},
					{
						"id": "610330",
						"pid": 6103,
						"deep": 2,
						"name": "凤县",
						"pinyin": "feng xian",
						"pinyin_prefix": "f",
						"ext_id": "610330000000",
						"ext_name": "凤县"
					},
					{
						"id": "610331",
						"pid": 6103,
						"deep": 2,
						"name": "太白",
						"pinyin": "tai bai",
						"pinyin_prefix": "t",
						"ext_id": "610331000000",
						"ext_name": "太白县"
					}
				]
			},
			{
				"id": "6104",
				"pid": 61,
				"deep": 1,
				"name": "咸阳",
				"pinyin": "xian yang",
				"pinyin_prefix": "x",
				"ext_id": "610400000000",
				"ext_name": "咸阳市",
				"childs": [
					{
						"id": "610402",
						"pid": 6104,
						"deep": 2,
						"name": "秦都",
						"pinyin": "qin du",
						"pinyin_prefix": "q",
						"ext_id": "610402000000",
						"ext_name": "秦都区"
					},
					{
						"id": "610403",
						"pid": 6104,
						"deep": 2,
						"name": "杨陵",
						"pinyin": "yang ling",
						"pinyin_prefix": "y",
						"ext_id": "610403000000",
						"ext_name": "杨陵区"
					},
					{
						"id": "610404",
						"pid": 6104,
						"deep": 2,
						"name": "渭城",
						"pinyin": "wei cheng",
						"pinyin_prefix": "w",
						"ext_id": "610404000000",
						"ext_name": "渭城区"
					},
					{
						"id": "610422",
						"pid": 6104,
						"deep": 2,
						"name": "三原",
						"pinyin": "san yuan",
						"pinyin_prefix": "s",
						"ext_id": "610422000000",
						"ext_name": "三原县"
					},
					{
						"id": "610423",
						"pid": 6104,
						"deep": 2,
						"name": "泾阳",
						"pinyin": "jing yang",
						"pinyin_prefix": "j",
						"ext_id": "610423000000",
						"ext_name": "泾阳县"
					},
					{
						"id": "610424",
						"pid": 6104,
						"deep": 2,
						"name": "乾县",
						"pinyin": "qian xian",
						"pinyin_prefix": "q",
						"ext_id": "610424000000",
						"ext_name": "乾县"
					},
					{
						"id": "610425",
						"pid": 6104,
						"deep": 2,
						"name": "礼泉",
						"pinyin": "li quan",
						"pinyin_prefix": "l",
						"ext_id": "610425000000",
						"ext_name": "礼泉县"
					},
					{
						"id": "610426",
						"pid": 6104,
						"deep": 2,
						"name": "永寿",
						"pinyin": "yong shou",
						"pinyin_prefix": "y",
						"ext_id": "610426000000",
						"ext_name": "永寿县"
					},
					{
						"id": "610428",
						"pid": 6104,
						"deep": 2,
						"name": "长武",
						"pinyin": "chang wu",
						"pinyin_prefix": "c",
						"ext_id": "610428000000",
						"ext_name": "长武县"
					},
					{
						"id": "610429",
						"pid": 6104,
						"deep": 2,
						"name": "旬邑",
						"pinyin": "xun yi",
						"pinyin_prefix": "x",
						"ext_id": "610429000000",
						"ext_name": "旬邑县"
					},
					{
						"id": "610430",
						"pid": 6104,
						"deep": 2,
						"name": "淳化",
						"pinyin": "chun hua",
						"pinyin_prefix": "c",
						"ext_id": "610430000000",
						"ext_name": "淳化县"
					},
					{
						"id": "610431",
						"pid": 6104,
						"deep": 2,
						"name": "武功",
						"pinyin": "wu gong",
						"pinyin_prefix": "w",
						"ext_id": "610431000000",
						"ext_name": "武功县"
					},
					{
						"id": "610481",
						"pid": 6104,
						"deep": 2,
						"name": "兴平",
						"pinyin": "xing ping",
						"pinyin_prefix": "x",
						"ext_id": "610481000000",
						"ext_name": "兴平市"
					},
					{
						"id": "610482",
						"pid": 6104,
						"deep": 2,
						"name": "彬州",
						"pinyin": "bin zhou",
						"pinyin_prefix": "b",
						"ext_id": "610482000000",
						"ext_name": "彬州市"
					}
				]
			},
			{
				"id": "6105",
				"pid": 61,
				"deep": 1,
				"name": "渭南",
				"pinyin": "wei nan",
				"pinyin_prefix": "w",
				"ext_id": "610500000000",
				"ext_name": "渭南市",
				"childs": [
					{
						"id": "610502",
						"pid": 6105,
						"deep": 2,
						"name": "临渭",
						"pinyin": "lin wei",
						"pinyin_prefix": "l",
						"ext_id": "610502000000",
						"ext_name": "临渭区"
					},
					{
						"id": "610503",
						"pid": 6105,
						"deep": 2,
						"name": "华州",
						"pinyin": "hua zhou",
						"pinyin_prefix": "h",
						"ext_id": "610503000000",
						"ext_name": "华州区"
					},
					{
						"id": "610522",
						"pid": 6105,
						"deep": 2,
						"name": "潼关",
						"pinyin": "tong guan",
						"pinyin_prefix": "t",
						"ext_id": "610522000000",
						"ext_name": "潼关县"
					},
					{
						"id": "610523",
						"pid": 6105,
						"deep": 2,
						"name": "大荔",
						"pinyin": "da li",
						"pinyin_prefix": "d",
						"ext_id": "610523000000",
						"ext_name": "大荔县"
					},
					{
						"id": "610524",
						"pid": 6105,
						"deep": 2,
						"name": "合阳",
						"pinyin": "he yang",
						"pinyin_prefix": "h",
						"ext_id": "610524000000",
						"ext_name": "合阳县"
					},
					{
						"id": "610525",
						"pid": 6105,
						"deep": 2,
						"name": "澄城",
						"pinyin": "cheng cheng",
						"pinyin_prefix": "c",
						"ext_id": "610525000000",
						"ext_name": "澄城县"
					},
					{
						"id": "610526",
						"pid": 6105,
						"deep": 2,
						"name": "蒲城",
						"pinyin": "pu cheng",
						"pinyin_prefix": "p",
						"ext_id": "610526000000",
						"ext_name": "蒲城县"
					},
					{
						"id": "610527",
						"pid": 6105,
						"deep": 2,
						"name": "白水",
						"pinyin": "bai shui",
						"pinyin_prefix": "b",
						"ext_id": "610527000000",
						"ext_name": "白水县"
					},
					{
						"id": "610528",
						"pid": 6105,
						"deep": 2,
						"name": "富平",
						"pinyin": "fu ping",
						"pinyin_prefix": "f",
						"ext_id": "610528000000",
						"ext_name": "富平县"
					},
					{
						"id": "610581",
						"pid": 6105,
						"deep": 2,
						"name": "韩城",
						"pinyin": "han cheng",
						"pinyin_prefix": "h",
						"ext_id": "610581000000",
						"ext_name": "韩城市"
					},
					{
						"id": "610582",
						"pid": 6105,
						"deep": 2,
						"name": "华阴",
						"pinyin": "hua yin",
						"pinyin_prefix": "h",
						"ext_id": "610582000000",
						"ext_name": "华阴市"
					}
				]
			},
			{
				"id": "6106",
				"pid": 61,
				"deep": 1,
				"name": "延安",
				"pinyin": "yan an",
				"pinyin_prefix": "y",
				"ext_id": "610600000000",
				"ext_name": "延安市",
				"childs": [
					{
						"id": "610602",
						"pid": 6106,
						"deep": 2,
						"name": "宝塔",
						"pinyin": "bao ta",
						"pinyin_prefix": "b",
						"ext_id": "610602000000",
						"ext_name": "宝塔区"
					},
					{
						"id": "610603",
						"pid": 6106,
						"deep": 2,
						"name": "安塞",
						"pinyin": "an sai",
						"pinyin_prefix": "a",
						"ext_id": "610603000000",
						"ext_name": "安塞区"
					},
					{
						"id": "610621",
						"pid": 6106,
						"deep": 2,
						"name": "延长",
						"pinyin": "yan chang",
						"pinyin_prefix": "y",
						"ext_id": "610621000000",
						"ext_name": "延长县"
					},
					{
						"id": "610622",
						"pid": 6106,
						"deep": 2,
						"name": "延川",
						"pinyin": "yan chuan",
						"pinyin_prefix": "y",
						"ext_id": "610622000000",
						"ext_name": "延川县"
					},
					{
						"id": "610625",
						"pid": 6106,
						"deep": 2,
						"name": "志丹",
						"pinyin": "zhi dan",
						"pinyin_prefix": "z",
						"ext_id": "610625000000",
						"ext_name": "志丹县"
					},
					{
						"id": "610626",
						"pid": 6106,
						"deep": 2,
						"name": "吴起",
						"pinyin": "wu qi",
						"pinyin_prefix": "w",
						"ext_id": "610626000000",
						"ext_name": "吴起县"
					},
					{
						"id": "610627",
						"pid": 6106,
						"deep": 2,
						"name": "甘泉",
						"pinyin": "gan quan",
						"pinyin_prefix": "g",
						"ext_id": "610627000000",
						"ext_name": "甘泉县"
					},
					{
						"id": "610628",
						"pid": 6106,
						"deep": 2,
						"name": "富县",
						"pinyin": "fu xian",
						"pinyin_prefix": "f",
						"ext_id": "610628000000",
						"ext_name": "富县"
					},
					{
						"id": "610629",
						"pid": 6106,
						"deep": 2,
						"name": "洛川",
						"pinyin": "luo chuan",
						"pinyin_prefix": "l",
						"ext_id": "610629000000",
						"ext_name": "洛川县"
					},
					{
						"id": "610630",
						"pid": 6106,
						"deep": 2,
						"name": "宜川",
						"pinyin": "yi chuan",
						"pinyin_prefix": "y",
						"ext_id": "610630000000",
						"ext_name": "宜川县"
					},
					{
						"id": "610631",
						"pid": 6106,
						"deep": 2,
						"name": "黄龙",
						"pinyin": "huang long",
						"pinyin_prefix": "h",
						"ext_id": "610631000000",
						"ext_name": "黄龙县"
					},
					{
						"id": "610632",
						"pid": 6106,
						"deep": 2,
						"name": "黄陵",
						"pinyin": "huang ling",
						"pinyin_prefix": "h",
						"ext_id": "610632000000",
						"ext_name": "黄陵县"
					},
					{
						"id": "610681",
						"pid": 6106,
						"deep": 2,
						"name": "子长",
						"pinyin": "zi chang",
						"pinyin_prefix": "z",
						"ext_id": "610681000000",
						"ext_name": "子长市"
					}
				]
			},
			{
				"id": "6107",
				"pid": 61,
				"deep": 1,
				"name": "汉中",
				"pinyin": "han zhong",
				"pinyin_prefix": "h",
				"ext_id": "610700000000",
				"ext_name": "汉中市",
				"childs": [
					{
						"id": "610702",
						"pid": 6107,
						"deep": 2,
						"name": "汉台",
						"pinyin": "han tai",
						"pinyin_prefix": "h",
						"ext_id": "610702000000",
						"ext_name": "汉台区"
					},
					{
						"id": "610703",
						"pid": 6107,
						"deep": 2,
						"name": "南郑",
						"pinyin": "nan zheng",
						"pinyin_prefix": "n",
						"ext_id": "610703000000",
						"ext_name": "南郑区"
					},
					{
						"id": "610722",
						"pid": 6107,
						"deep": 2,
						"name": "城固",
						"pinyin": "cheng gu",
						"pinyin_prefix": "c",
						"ext_id": "610722000000",
						"ext_name": "城固县"
					},
					{
						"id": "610723",
						"pid": 6107,
						"deep": 2,
						"name": "洋县",
						"pinyin": "yang xian",
						"pinyin_prefix": "y",
						"ext_id": "610723000000",
						"ext_name": "洋县"
					},
					{
						"id": "610724",
						"pid": 6107,
						"deep": 2,
						"name": "西乡",
						"pinyin": "xi xiang",
						"pinyin_prefix": "x",
						"ext_id": "610724000000",
						"ext_name": "西乡县"
					},
					{
						"id": "610725",
						"pid": 6107,
						"deep": 2,
						"name": "勉县",
						"pinyin": "mian xian",
						"pinyin_prefix": "m",
						"ext_id": "610725000000",
						"ext_name": "勉县"
					},
					{
						"id": "610726",
						"pid": 6107,
						"deep": 2,
						"name": "宁强",
						"pinyin": "ning qiang",
						"pinyin_prefix": "n",
						"ext_id": "610726000000",
						"ext_name": "宁强县"
					},
					{
						"id": "610727",
						"pid": 6107,
						"deep": 2,
						"name": "略阳",
						"pinyin": "lue yang",
						"pinyin_prefix": "l",
						"ext_id": "610727000000",
						"ext_name": "略阳县"
					},
					{
						"id": "610728",
						"pid": 6107,
						"deep": 2,
						"name": "镇巴",
						"pinyin": "zhen ba",
						"pinyin_prefix": "z",
						"ext_id": "610728000000",
						"ext_name": "镇巴县"
					},
					{
						"id": "610729",
						"pid": 6107,
						"deep": 2,
						"name": "留坝",
						"pinyin": "liu ba",
						"pinyin_prefix": "l",
						"ext_id": "610729000000",
						"ext_name": "留坝县"
					},
					{
						"id": "610730",
						"pid": 6107,
						"deep": 2,
						"name": "佛坪",
						"pinyin": "fo ping",
						"pinyin_prefix": "f",
						"ext_id": "610730000000",
						"ext_name": "佛坪县"
					}
				]
			},
			{
				"id": "6108",
				"pid": 61,
				"deep": 1,
				"name": "榆林",
				"pinyin": "yu lin",
				"pinyin_prefix": "y",
				"ext_id": "610800000000",
				"ext_name": "榆林市",
				"childs": [
					{
						"id": "610802",
						"pid": 6108,
						"deep": 2,
						"name": "榆阳",
						"pinyin": "yu yang",
						"pinyin_prefix": "y",
						"ext_id": "610802000000",
						"ext_name": "榆阳区"
					},
					{
						"id": "610803",
						"pid": 6108,
						"deep": 2,
						"name": "横山",
						"pinyin": "heng shan",
						"pinyin_prefix": "h",
						"ext_id": "610803000000",
						"ext_name": "横山区"
					},
					{
						"id": "610822",
						"pid": 6108,
						"deep": 2,
						"name": "府谷",
						"pinyin": "fu gu",
						"pinyin_prefix": "f",
						"ext_id": "610822000000",
						"ext_name": "府谷县"
					},
					{
						"id": "610824",
						"pid": 6108,
						"deep": 2,
						"name": "靖边",
						"pinyin": "jing bian",
						"pinyin_prefix": "j",
						"ext_id": "610824000000",
						"ext_name": "靖边县"
					},
					{
						"id": "610825",
						"pid": 6108,
						"deep": 2,
						"name": "定边",
						"pinyin": "ding bian",
						"pinyin_prefix": "d",
						"ext_id": "610825000000",
						"ext_name": "定边县"
					},
					{
						"id": "610826",
						"pid": 6108,
						"deep": 2,
						"name": "绥德",
						"pinyin": "sui de",
						"pinyin_prefix": "s",
						"ext_id": "610826000000",
						"ext_name": "绥德县"
					},
					{
						"id": "610827",
						"pid": 6108,
						"deep": 2,
						"name": "米脂",
						"pinyin": "mi zhi",
						"pinyin_prefix": "m",
						"ext_id": "610827000000",
						"ext_name": "米脂县"
					},
					{
						"id": "610828",
						"pid": 6108,
						"deep": 2,
						"name": "佳县",
						"pinyin": "jia xian",
						"pinyin_prefix": "j",
						"ext_id": "610828000000",
						"ext_name": "佳县"
					},
					{
						"id": "610829",
						"pid": 6108,
						"deep": 2,
						"name": "吴堡",
						"pinyin": "wu bu",
						"pinyin_prefix": "w",
						"ext_id": "610829000000",
						"ext_name": "吴堡县"
					},
					{
						"id": "610830",
						"pid": 6108,
						"deep": 2,
						"name": "清涧",
						"pinyin": "qing jian",
						"pinyin_prefix": "q",
						"ext_id": "610830000000",
						"ext_name": "清涧县"
					},
					{
						"id": "610831",
						"pid": 6108,
						"deep": 2,
						"name": "子洲",
						"pinyin": "zi zhou",
						"pinyin_prefix": "z",
						"ext_id": "610831000000",
						"ext_name": "子洲县"
					},
					{
						"id": "610881",
						"pid": 6108,
						"deep": 2,
						"name": "神木",
						"pinyin": "shen mu",
						"pinyin_prefix": "s",
						"ext_id": "610881000000",
						"ext_name": "神木市"
					}
				]
			},
			{
				"id": "6109",
				"pid": 61,
				"deep": 1,
				"name": "安康",
				"pinyin": "an kang",
				"pinyin_prefix": "a",
				"ext_id": "610900000000",
				"ext_name": "安康市",
				"childs": [
					{
						"id": "610902",
						"pid": 6109,
						"deep": 2,
						"name": "汉滨",
						"pinyin": "han bin",
						"pinyin_prefix": "h",
						"ext_id": "610902000000",
						"ext_name": "汉滨区"
					},
					{
						"id": "610921",
						"pid": 6109,
						"deep": 2,
						"name": "汉阴",
						"pinyin": "han yin",
						"pinyin_prefix": "h",
						"ext_id": "610921000000",
						"ext_name": "汉阴县"
					},
					{
						"id": "610922",
						"pid": 6109,
						"deep": 2,
						"name": "石泉",
						"pinyin": "shi quan",
						"pinyin_prefix": "s",
						"ext_id": "610922000000",
						"ext_name": "石泉县"
					},
					{
						"id": "610923",
						"pid": 6109,
						"deep": 2,
						"name": "宁陕",
						"pinyin": "ning shan",
						"pinyin_prefix": "n",
						"ext_id": "610923000000",
						"ext_name": "宁陕县"
					},
					{
						"id": "610924",
						"pid": 6109,
						"deep": 2,
						"name": "紫阳",
						"pinyin": "zi yang",
						"pinyin_prefix": "z",
						"ext_id": "610924000000",
						"ext_name": "紫阳县"
					},
					{
						"id": "610925",
						"pid": 6109,
						"deep": 2,
						"name": "岚皋",
						"pinyin": "lan gao",
						"pinyin_prefix": "l",
						"ext_id": "610925000000",
						"ext_name": "岚皋县"
					},
					{
						"id": "610926",
						"pid": 6109,
						"deep": 2,
						"name": "平利",
						"pinyin": "ping li",
						"pinyin_prefix": "p",
						"ext_id": "610926000000",
						"ext_name": "平利县"
					},
					{
						"id": "610927",
						"pid": 6109,
						"deep": 2,
						"name": "镇坪",
						"pinyin": "zhen ping",
						"pinyin_prefix": "z",
						"ext_id": "610927000000",
						"ext_name": "镇坪县"
					},
					{
						"id": "610929",
						"pid": 6109,
						"deep": 2,
						"name": "白河",
						"pinyin": "bai he",
						"pinyin_prefix": "b",
						"ext_id": "610929000000",
						"ext_name": "白河县"
					},
					{
						"id": "610981",
						"pid": 6109,
						"deep": 2,
						"name": "旬阳",
						"pinyin": "xun yang",
						"pinyin_prefix": "x",
						"ext_id": "610981000000",
						"ext_name": "旬阳市"
					}
				]
			},
			{
				"id": "6110",
				"pid": 61,
				"deep": 1,
				"name": "商洛",
				"pinyin": "shang luo",
				"pinyin_prefix": "s",
				"ext_id": "611000000000",
				"ext_name": "商洛市",
				"childs": [
					{
						"id": "611002",
						"pid": 6110,
						"deep": 2,
						"name": "商州",
						"pinyin": "shang zhou",
						"pinyin_prefix": "s",
						"ext_id": "611002000000",
						"ext_name": "商州区"
					},
					{
						"id": "611021",
						"pid": 6110,
						"deep": 2,
						"name": "洛南",
						"pinyin": "luo nan",
						"pinyin_prefix": "l",
						"ext_id": "611021000000",
						"ext_name": "洛南县"
					},
					{
						"id": "611022",
						"pid": 6110,
						"deep": 2,
						"name": "丹凤",
						"pinyin": "dan feng",
						"pinyin_prefix": "d",
						"ext_id": "611022000000",
						"ext_name": "丹凤县"
					},
					{
						"id": "611023",
						"pid": 6110,
						"deep": 2,
						"name": "商南",
						"pinyin": "shang nan",
						"pinyin_prefix": "s",
						"ext_id": "611023000000",
						"ext_name": "商南县"
					},
					{
						"id": "611024",
						"pid": 6110,
						"deep": 2,
						"name": "山阳",
						"pinyin": "shan yang",
						"pinyin_prefix": "s",
						"ext_id": "611024000000",
						"ext_name": "山阳县"
					},
					{
						"id": "611025",
						"pid": 6110,
						"deep": 2,
						"name": "镇安",
						"pinyin": "zhen an",
						"pinyin_prefix": "z",
						"ext_id": "611025000000",
						"ext_name": "镇安县"
					},
					{
						"id": "611026",
						"pid": 6110,
						"deep": 2,
						"name": "柞水",
						"pinyin": "zha shui",
						"pinyin_prefix": "z",
						"ext_id": "611026000000",
						"ext_name": "柞水县"
					}
				]
			}
		]
	},
	{
		"id": "62",
		"pid": 0,
		"deep": 0,
		"name": "甘肃",
		"pinyin": "gan su",
		"pinyin_prefix": "g",
		"ext_id": "620000000000",
		"ext_name": "甘肃省",
		"childs": [
			{
				"id": "6201",
				"pid": 62,
				"deep": 1,
				"name": "兰州",
				"pinyin": "lan zhou",
				"pinyin_prefix": "l",
				"ext_id": "620100000000",
				"ext_name": "兰州市",
				"childs": [
					{
						"id": "620102",
						"pid": 6201,
						"deep": 2,
						"name": "城关",
						"pinyin": "cheng guan",
						"pinyin_prefix": "c",
						"ext_id": "620102000000",
						"ext_name": "城关区"
					},
					{
						"id": "620103",
						"pid": 6201,
						"deep": 2,
						"name": "七里河",
						"pinyin": "qi li he",
						"pinyin_prefix": "q",
						"ext_id": "620103000000",
						"ext_name": "七里河区"
					},
					{
						"id": "620104",
						"pid": 6201,
						"deep": 2,
						"name": "西固",
						"pinyin": "xi gu",
						"pinyin_prefix": "x",
						"ext_id": "620104000000",
						"ext_name": "西固区"
					},
					{
						"id": "620105",
						"pid": 6201,
						"deep": 2,
						"name": "安宁",
						"pinyin": "an ning",
						"pinyin_prefix": "a",
						"ext_id": "620105000000",
						"ext_name": "安宁区"
					},
					{
						"id": "620111",
						"pid": 6201,
						"deep": 2,
						"name": "红古",
						"pinyin": "hong gu",
						"pinyin_prefix": "h",
						"ext_id": "620111000000",
						"ext_name": "红古区"
					},
					{
						"id": "620121",
						"pid": 6201,
						"deep": 2,
						"name": "永登",
						"pinyin": "yong deng",
						"pinyin_prefix": "y",
						"ext_id": "620121000000",
						"ext_name": "永登县"
					},
					{
						"id": "620122",
						"pid": 6201,
						"deep": 2,
						"name": "皋兰",
						"pinyin": "gao lan",
						"pinyin_prefix": "g",
						"ext_id": "620122000000",
						"ext_name": "皋兰县"
					},
					{
						"id": "620123",
						"pid": 6201,
						"deep": 2,
						"name": "榆中",
						"pinyin": "yu zhong",
						"pinyin_prefix": "y",
						"ext_id": "620123000000",
						"ext_name": "榆中县"
					}
				]
			},
			{
				"id": "6202",
				"pid": 62,
				"deep": 1,
				"name": "嘉峪关",
				"pinyin": "jia yu guan",
				"pinyin_prefix": "j",
				"ext_id": "620200000000",
				"ext_name": "嘉峪关市",
				"childs": [
					{
						"id": "620200",
						"pid": 6202,
						"deep": 2,
						"name": "嘉峪关",
						"pinyin": "jia yu guan",
						"pinyin_prefix": "j",
						"ext_id": "620200000000",
						"ext_name": "嘉峪关市"
					}
				]
			},
			{
				"id": "6203",
				"pid": 62,
				"deep": 1,
				"name": "金昌",
				"pinyin": "jin chang",
				"pinyin_prefix": "j",
				"ext_id": "620300000000",
				"ext_name": "金昌市",
				"childs": [
					{
						"id": "620302",
						"pid": 6203,
						"deep": 2,
						"name": "金川",
						"pinyin": "jin chuan",
						"pinyin_prefix": "j",
						"ext_id": "620302000000",
						"ext_name": "金川区"
					},
					{
						"id": "620321",
						"pid": 6203,
						"deep": 2,
						"name": "永昌",
						"pinyin": "yong chang",
						"pinyin_prefix": "y",
						"ext_id": "620321000000",
						"ext_name": "永昌县"
					}
				]
			},
			{
				"id": "6204",
				"pid": 62,
				"deep": 1,
				"name": "白银",
				"pinyin": "bai yin",
				"pinyin_prefix": "b",
				"ext_id": "620400000000",
				"ext_name": "白银市",
				"childs": [
					{
						"id": "620402",
						"pid": 6204,
						"deep": 2,
						"name": "白银区",
						"pinyin": "bai yin qu",
						"pinyin_prefix": "b",
						"ext_id": "620402000000",
						"ext_name": "白银区"
					},
					{
						"id": "620403",
						"pid": 6204,
						"deep": 2,
						"name": "平川",
						"pinyin": "ping chuan",
						"pinyin_prefix": "p",
						"ext_id": "620403000000",
						"ext_name": "平川区"
					},
					{
						"id": "620421",
						"pid": 6204,
						"deep": 2,
						"name": "靖远",
						"pinyin": "jing yuan",
						"pinyin_prefix": "j",
						"ext_id": "620421000000",
						"ext_name": "靖远县"
					},
					{
						"id": "620422",
						"pid": 6204,
						"deep": 2,
						"name": "会宁",
						"pinyin": "hui ning",
						"pinyin_prefix": "h",
						"ext_id": "620422000000",
						"ext_name": "会宁县"
					},
					{
						"id": "620423",
						"pid": 6204,
						"deep": 2,
						"name": "景泰",
						"pinyin": "jing tai",
						"pinyin_prefix": "j",
						"ext_id": "620423000000",
						"ext_name": "景泰县"
					}
				]
			},
			{
				"id": "6205",
				"pid": 62,
				"deep": 1,
				"name": "天水",
				"pinyin": "tian shui",
				"pinyin_prefix": "t",
				"ext_id": "620500000000",
				"ext_name": "天水市",
				"childs": [
					{
						"id": "620502",
						"pid": 6205,
						"deep": 2,
						"name": "秦州",
						"pinyin": "qin zhou",
						"pinyin_prefix": "q",
						"ext_id": "620502000000",
						"ext_name": "秦州区"
					},
					{
						"id": "620503",
						"pid": 6205,
						"deep": 2,
						"name": "麦积",
						"pinyin": "mai ji",
						"pinyin_prefix": "m",
						"ext_id": "620503000000",
						"ext_name": "麦积区"
					},
					{
						"id": "620521",
						"pid": 6205,
						"deep": 2,
						"name": "清水",
						"pinyin": "qing shui",
						"pinyin_prefix": "q",
						"ext_id": "620521000000",
						"ext_name": "清水县"
					},
					{
						"id": "620522",
						"pid": 6205,
						"deep": 2,
						"name": "秦安",
						"pinyin": "qin an",
						"pinyin_prefix": "q",
						"ext_id": "620522000000",
						"ext_name": "秦安县"
					},
					{
						"id": "620523",
						"pid": 6205,
						"deep": 2,
						"name": "甘谷",
						"pinyin": "gan gu",
						"pinyin_prefix": "g",
						"ext_id": "620523000000",
						"ext_name": "甘谷县"
					},
					{
						"id": "620524",
						"pid": 6205,
						"deep": 2,
						"name": "武山",
						"pinyin": "wu shan",
						"pinyin_prefix": "w",
						"ext_id": "620524000000",
						"ext_name": "武山县"
					},
					{
						"id": "620525",
						"pid": 6205,
						"deep": 2,
						"name": "张家川",
						"pinyin": "zhang jia chuan",
						"pinyin_prefix": "z",
						"ext_id": "620525000000",
						"ext_name": "张家川回族自治县"
					}
				]
			},
			{
				"id": "6206",
				"pid": 62,
				"deep": 1,
				"name": "武威",
				"pinyin": "wu wei",
				"pinyin_prefix": "w",
				"ext_id": "620600000000",
				"ext_name": "武威市",
				"childs": [
					{
						"id": "620602",
						"pid": 6206,
						"deep": 2,
						"name": "凉州",
						"pinyin": "liang zhou",
						"pinyin_prefix": "l",
						"ext_id": "620602000000",
						"ext_name": "凉州区"
					},
					{
						"id": "620621",
						"pid": 6206,
						"deep": 2,
						"name": "民勤",
						"pinyin": "min qin",
						"pinyin_prefix": "m",
						"ext_id": "620621000000",
						"ext_name": "民勤县"
					},
					{
						"id": "620622",
						"pid": 6206,
						"deep": 2,
						"name": "古浪",
						"pinyin": "gu lang",
						"pinyin_prefix": "g",
						"ext_id": "620622000000",
						"ext_name": "古浪县"
					},
					{
						"id": "620623",
						"pid": 6206,
						"deep": 2,
						"name": "天祝",
						"pinyin": "tian zhu",
						"pinyin_prefix": "t",
						"ext_id": "620623000000",
						"ext_name": "天祝藏族自治县"
					}
				]
			},
			{
				"id": "6207",
				"pid": 62,
				"deep": 1,
				"name": "张掖",
				"pinyin": "zhang ye",
				"pinyin_prefix": "z",
				"ext_id": "620700000000",
				"ext_name": "张掖市",
				"childs": [
					{
						"id": "620702",
						"pid": 6207,
						"deep": 2,
						"name": "甘州",
						"pinyin": "gan zhou",
						"pinyin_prefix": "g",
						"ext_id": "620702000000",
						"ext_name": "甘州区"
					},
					{
						"id": "620721",
						"pid": 6207,
						"deep": 2,
						"name": "肃南",
						"pinyin": "su nan",
						"pinyin_prefix": "s",
						"ext_id": "620721000000",
						"ext_name": "肃南裕固族自治县"
					},
					{
						"id": "620722",
						"pid": 6207,
						"deep": 2,
						"name": "民乐",
						"pinyin": "min le",
						"pinyin_prefix": "m",
						"ext_id": "620722000000",
						"ext_name": "民乐县"
					},
					{
						"id": "620723",
						"pid": 6207,
						"deep": 2,
						"name": "临泽",
						"pinyin": "lin ze",
						"pinyin_prefix": "l",
						"ext_id": "620723000000",
						"ext_name": "临泽县"
					},
					{
						"id": "620724",
						"pid": 6207,
						"deep": 2,
						"name": "高台",
						"pinyin": "gao tai",
						"pinyin_prefix": "g",
						"ext_id": "620724000000",
						"ext_name": "高台县"
					},
					{
						"id": "620725",
						"pid": 6207,
						"deep": 2,
						"name": "山丹",
						"pinyin": "shan dan",
						"pinyin_prefix": "s",
						"ext_id": "620725000000",
						"ext_name": "山丹县"
					}
				]
			},
			{
				"id": "6208",
				"pid": 62,
				"deep": 1,
				"name": "平凉",
				"pinyin": "ping liang",
				"pinyin_prefix": "p",
				"ext_id": "620800000000",
				"ext_name": "平凉市",
				"childs": [
					{
						"id": "620802",
						"pid": 6208,
						"deep": 2,
						"name": "崆峒",
						"pinyin": "kong tong",
						"pinyin_prefix": "k",
						"ext_id": "620802000000",
						"ext_name": "崆峒区"
					},
					{
						"id": "620821",
						"pid": 6208,
						"deep": 2,
						"name": "泾川",
						"pinyin": "jing chuan",
						"pinyin_prefix": "j",
						"ext_id": "620821000000",
						"ext_name": "泾川县"
					},
					{
						"id": "620822",
						"pid": 6208,
						"deep": 2,
						"name": "灵台",
						"pinyin": "ling tai",
						"pinyin_prefix": "l",
						"ext_id": "620822000000",
						"ext_name": "灵台县"
					},
					{
						"id": "620823",
						"pid": 6208,
						"deep": 2,
						"name": "崇信",
						"pinyin": "chong xin",
						"pinyin_prefix": "c",
						"ext_id": "620823000000",
						"ext_name": "崇信县"
					},
					{
						"id": "620825",
						"pid": 6208,
						"deep": 2,
						"name": "庄浪",
						"pinyin": "zhuang lang",
						"pinyin_prefix": "z",
						"ext_id": "620825000000",
						"ext_name": "庄浪县"
					},
					{
						"id": "620826",
						"pid": 6208,
						"deep": 2,
						"name": "静宁",
						"pinyin": "jing ning",
						"pinyin_prefix": "j",
						"ext_id": "620826000000",
						"ext_name": "静宁县"
					},
					{
						"id": "620881",
						"pid": 6208,
						"deep": 2,
						"name": "华亭",
						"pinyin": "hua ting",
						"pinyin_prefix": "h",
						"ext_id": "620881000000",
						"ext_name": "华亭市"
					}
				]
			},
			{
				"id": "6209",
				"pid": 62,
				"deep": 1,
				"name": "酒泉",
				"pinyin": "jiu quan",
				"pinyin_prefix": "j",
				"ext_id": "620900000000",
				"ext_name": "酒泉市",
				"childs": [
					{
						"id": "620902",
						"pid": 6209,
						"deep": 2,
						"name": "肃州",
						"pinyin": "su zhou",
						"pinyin_prefix": "s",
						"ext_id": "620902000000",
						"ext_name": "肃州区"
					},
					{
						"id": "620921",
						"pid": 6209,
						"deep": 2,
						"name": "金塔",
						"pinyin": "jin ta",
						"pinyin_prefix": "j",
						"ext_id": "620921000000",
						"ext_name": "金塔县"
					},
					{
						"id": "620922",
						"pid": 6209,
						"deep": 2,
						"name": "瓜州",
						"pinyin": "gua zhou",
						"pinyin_prefix": "g",
						"ext_id": "620922000000",
						"ext_name": "瓜州县"
					},
					{
						"id": "620923",
						"pid": 6209,
						"deep": 2,
						"name": "肃北",
						"pinyin": "su bei",
						"pinyin_prefix": "s",
						"ext_id": "620923000000",
						"ext_name": "肃北蒙古族自治县"
					},
					{
						"id": "620924",
						"pid": 6209,
						"deep": 2,
						"name": "阿克塞",
						"pinyin": "a ke sai",
						"pinyin_prefix": "a",
						"ext_id": "620924000000",
						"ext_name": "阿克塞哈萨克族自治县"
					},
					{
						"id": "620981",
						"pid": 6209,
						"deep": 2,
						"name": "玉门",
						"pinyin": "yu men",
						"pinyin_prefix": "y",
						"ext_id": "620981000000",
						"ext_name": "玉门市"
					},
					{
						"id": "620982",
						"pid": 6209,
						"deep": 2,
						"name": "敦煌",
						"pinyin": "dun huang",
						"pinyin_prefix": "d",
						"ext_id": "620982000000",
						"ext_name": "敦煌市"
					}
				]
			},
			{
				"id": "6210",
				"pid": 62,
				"deep": 1,
				"name": "庆阳",
				"pinyin": "qing yang",
				"pinyin_prefix": "q",
				"ext_id": "621000000000",
				"ext_name": "庆阳市",
				"childs": [
					{
						"id": "621002",
						"pid": 6210,
						"deep": 2,
						"name": "西峰",
						"pinyin": "xi feng",
						"pinyin_prefix": "x",
						"ext_id": "621002000000",
						"ext_name": "西峰区"
					},
					{
						"id": "621021",
						"pid": 6210,
						"deep": 2,
						"name": "庆城",
						"pinyin": "qing cheng",
						"pinyin_prefix": "q",
						"ext_id": "621021000000",
						"ext_name": "庆城县"
					},
					{
						"id": "621022",
						"pid": 6210,
						"deep": 2,
						"name": "环县",
						"pinyin": "huan xian",
						"pinyin_prefix": "h",
						"ext_id": "621022000000",
						"ext_name": "环县"
					},
					{
						"id": "621023",
						"pid": 6210,
						"deep": 2,
						"name": "华池",
						"pinyin": "hua chi",
						"pinyin_prefix": "h",
						"ext_id": "621023000000",
						"ext_name": "华池县"
					},
					{
						"id": "621024",
						"pid": 6210,
						"deep": 2,
						"name": "合水",
						"pinyin": "he shui",
						"pinyin_prefix": "h",
						"ext_id": "621024000000",
						"ext_name": "合水县"
					},
					{
						"id": "621025",
						"pid": 6210,
						"deep": 2,
						"name": "正宁",
						"pinyin": "zheng ning",
						"pinyin_prefix": "z",
						"ext_id": "621025000000",
						"ext_name": "正宁县"
					},
					{
						"id": "621026",
						"pid": 6210,
						"deep": 2,
						"name": "宁县",
						"pinyin": "ning xian",
						"pinyin_prefix": "n",
						"ext_id": "621026000000",
						"ext_name": "宁县"
					},
					{
						"id": "621027",
						"pid": 6210,
						"deep": 2,
						"name": "镇原",
						"pinyin": "zhen yuan",
						"pinyin_prefix": "z",
						"ext_id": "621027000000",
						"ext_name": "镇原县"
					}
				]
			},
			{
				"id": "6211",
				"pid": 62,
				"deep": 1,
				"name": "定西",
				"pinyin": "ding xi",
				"pinyin_prefix": "d",
				"ext_id": "621100000000",
				"ext_name": "定西市",
				"childs": [
					{
						"id": "621102",
						"pid": 6211,
						"deep": 2,
						"name": "安定",
						"pinyin": "an ding",
						"pinyin_prefix": "a",
						"ext_id": "621102000000",
						"ext_name": "安定区"
					},
					{
						"id": "621121",
						"pid": 6211,
						"deep": 2,
						"name": "通渭",
						"pinyin": "tong wei",
						"pinyin_prefix": "t",
						"ext_id": "621121000000",
						"ext_name": "通渭县"
					},
					{
						"id": "621122",
						"pid": 6211,
						"deep": 2,
						"name": "陇西",
						"pinyin": "long xi",
						"pinyin_prefix": "l",
						"ext_id": "621122000000",
						"ext_name": "陇西县"
					},
					{
						"id": "621123",
						"pid": 6211,
						"deep": 2,
						"name": "渭源",
						"pinyin": "wei yuan",
						"pinyin_prefix": "w",
						"ext_id": "621123000000",
						"ext_name": "渭源县"
					},
					{
						"id": "621124",
						"pid": 6211,
						"deep": 2,
						"name": "临洮",
						"pinyin": "lin tao",
						"pinyin_prefix": "l",
						"ext_id": "621124000000",
						"ext_name": "临洮县"
					},
					{
						"id": "621125",
						"pid": 6211,
						"deep": 2,
						"name": "漳县",
						"pinyin": "zhang xian",
						"pinyin_prefix": "z",
						"ext_id": "621125000000",
						"ext_name": "漳县"
					},
					{
						"id": "621126",
						"pid": 6211,
						"deep": 2,
						"name": "岷县",
						"pinyin": "min xian",
						"pinyin_prefix": "m",
						"ext_id": "621126000000",
						"ext_name": "岷县"
					}
				]
			},
			{
				"id": "6212",
				"pid": 62,
				"deep": 1,
				"name": "陇南",
				"pinyin": "long nan",
				"pinyin_prefix": "l",
				"ext_id": "621200000000",
				"ext_name": "陇南市",
				"childs": [
					{
						"id": "621202",
						"pid": 6212,
						"deep": 2,
						"name": "武都",
						"pinyin": "wu du",
						"pinyin_prefix": "w",
						"ext_id": "621202000000",
						"ext_name": "武都区"
					},
					{
						"id": "621221",
						"pid": 6212,
						"deep": 2,
						"name": "成县",
						"pinyin": "cheng xian",
						"pinyin_prefix": "c",
						"ext_id": "621221000000",
						"ext_name": "成县"
					},
					{
						"id": "621222",
						"pid": 6212,
						"deep": 2,
						"name": "文县",
						"pinyin": "wen xian",
						"pinyin_prefix": "w",
						"ext_id": "621222000000",
						"ext_name": "文县"
					},
					{
						"id": "621223",
						"pid": 6212,
						"deep": 2,
						"name": "宕昌",
						"pinyin": "tan chang",
						"pinyin_prefix": "t",
						"ext_id": "621223000000",
						"ext_name": "宕昌县"
					},
					{
						"id": "621224",
						"pid": 6212,
						"deep": 2,
						"name": "康县",
						"pinyin": "kang xian",
						"pinyin_prefix": "k",
						"ext_id": "621224000000",
						"ext_name": "康县"
					},
					{
						"id": "621225",
						"pid": 6212,
						"deep": 2,
						"name": "西和",
						"pinyin": "xi he",
						"pinyin_prefix": "x",
						"ext_id": "621225000000",
						"ext_name": "西和县"
					},
					{
						"id": "621226",
						"pid": 6212,
						"deep": 2,
						"name": "礼县",
						"pinyin": "li xian",
						"pinyin_prefix": "l",
						"ext_id": "621226000000",
						"ext_name": "礼县"
					},
					{
						"id": "621227",
						"pid": 6212,
						"deep": 2,
						"name": "徽县",
						"pinyin": "hui xian",
						"pinyin_prefix": "h",
						"ext_id": "621227000000",
						"ext_name": "徽县"
					},
					{
						"id": "621228",
						"pid": 6212,
						"deep": 2,
						"name": "两当",
						"pinyin": "liang dang",
						"pinyin_prefix": "l",
						"ext_id": "621228000000",
						"ext_name": "两当县"
					}
				]
			},
			{
				"id": "6229",
				"pid": 62,
				"deep": 1,
				"name": "临夏",
				"pinyin": "lin xia",
				"pinyin_prefix": "l",
				"ext_id": "622900000000",
				"ext_name": "临夏回族自治州",
				"childs": [
					{
						"id": "622901",
						"pid": 6229,
						"deep": 2,
						"name": "临夏市",
						"pinyin": "lin xia shi",
						"pinyin_prefix": "l",
						"ext_id": "622901000000",
						"ext_name": "临夏市"
					},
					{
						"id": "622921",
						"pid": 6229,
						"deep": 2,
						"name": "临夏县",
						"pinyin": "lin xia xian",
						"pinyin_prefix": "l",
						"ext_id": "622921000000",
						"ext_name": "临夏县"
					},
					{
						"id": "622922",
						"pid": 6229,
						"deep": 2,
						"name": "康乐",
						"pinyin": "kang le",
						"pinyin_prefix": "k",
						"ext_id": "622922000000",
						"ext_name": "康乐县"
					},
					{
						"id": "622923",
						"pid": 6229,
						"deep": 2,
						"name": "永靖",
						"pinyin": "yong jing",
						"pinyin_prefix": "y",
						"ext_id": "622923000000",
						"ext_name": "永靖县"
					},
					{
						"id": "622924",
						"pid": 6229,
						"deep": 2,
						"name": "广河",
						"pinyin": "guang he",
						"pinyin_prefix": "g",
						"ext_id": "622924000000",
						"ext_name": "广河县"
					},
					{
						"id": "622925",
						"pid": 6229,
						"deep": 2,
						"name": "和政",
						"pinyin": "he zheng",
						"pinyin_prefix": "h",
						"ext_id": "622925000000",
						"ext_name": "和政县"
					},
					{
						"id": "622926",
						"pid": 6229,
						"deep": 2,
						"name": "东乡族自治县",
						"pinyin": "dong xiang zu zi zhi xian",
						"pinyin_prefix": "d",
						"ext_id": "622926000000",
						"ext_name": "东乡族自治县"
					},
					{
						"id": "622927",
						"pid": 6229,
						"deep": 2,
						"name": "积石山",
						"pinyin": "ji shi shan",
						"pinyin_prefix": "j",
						"ext_id": "622927000000",
						"ext_name": "积石山保安族东乡族撒拉族自治县"
					}
				]
			},
			{
				"id": "6230",
				"pid": 62,
				"deep": 1,
				"name": "甘南",
				"pinyin": "gan nan",
				"pinyin_prefix": "g",
				"ext_id": "623000000000",
				"ext_name": "甘南藏族自治州",
				"childs": [
					{
						"id": "623001",
						"pid": 6230,
						"deep": 2,
						"name": "合作",
						"pinyin": "he zuo",
						"pinyin_prefix": "h",
						"ext_id": "623001000000",
						"ext_name": "合作市"
					},
					{
						"id": "623021",
						"pid": 6230,
						"deep": 2,
						"name": "临潭",
						"pinyin": "lin tan",
						"pinyin_prefix": "l",
						"ext_id": "623021000000",
						"ext_name": "临潭县"
					},
					{
						"id": "623022",
						"pid": 6230,
						"deep": 2,
						"name": "卓尼",
						"pinyin": "zhuo ni",
						"pinyin_prefix": "z",
						"ext_id": "623022000000",
						"ext_name": "卓尼县"
					},
					{
						"id": "623023",
						"pid": 6230,
						"deep": 2,
						"name": "舟曲",
						"pinyin": "zhou qu",
						"pinyin_prefix": "z",
						"ext_id": "623023000000",
						"ext_name": "舟曲县"
					},
					{
						"id": "623024",
						"pid": 6230,
						"deep": 2,
						"name": "迭部",
						"pinyin": "die bu",
						"pinyin_prefix": "d",
						"ext_id": "623024000000",
						"ext_name": "迭部县"
					},
					{
						"id": "623025",
						"pid": 6230,
						"deep": 2,
						"name": "玛曲",
						"pinyin": "ma qu",
						"pinyin_prefix": "m",
						"ext_id": "623025000000",
						"ext_name": "玛曲县"
					},
					{
						"id": "623026",
						"pid": 6230,
						"deep": 2,
						"name": "碌曲",
						"pinyin": "lu qu",
						"pinyin_prefix": "l",
						"ext_id": "623026000000",
						"ext_name": "碌曲县"
					},
					{
						"id": "623027",
						"pid": 6230,
						"deep": 2,
						"name": "夏河",
						"pinyin": "xia he",
						"pinyin_prefix": "x",
						"ext_id": "623027000000",
						"ext_name": "夏河县"
					}
				]
			}
		]
	},
	{
		"id": "63",
		"pid": 0,
		"deep": 0,
		"name": "青海",
		"pinyin": "qing hai",
		"pinyin_prefix": "q",
		"ext_id": "630000000000",
		"ext_name": "青海省",
		"childs": [
			{
				"id": "6301",
				"pid": 63,
				"deep": 1,
				"name": "西宁",
				"pinyin": "xi ning",
				"pinyin_prefix": "x",
				"ext_id": "630100000000",
				"ext_name": "西宁市",
				"childs": [
					{
						"id": "630102",
						"pid": 6301,
						"deep": 2,
						"name": "城东",
						"pinyin": "cheng dong",
						"pinyin_prefix": "c",
						"ext_id": "630102000000",
						"ext_name": "城东区"
					},
					{
						"id": "630103",
						"pid": 6301,
						"deep": 2,
						"name": "城中",
						"pinyin": "cheng zhong",
						"pinyin_prefix": "c",
						"ext_id": "630103000000",
						"ext_name": "城中区"
					},
					{
						"id": "630104",
						"pid": 6301,
						"deep": 2,
						"name": "城西",
						"pinyin": "cheng xi",
						"pinyin_prefix": "c",
						"ext_id": "630104000000",
						"ext_name": "城西区"
					},
					{
						"id": "630105",
						"pid": 6301,
						"deep": 2,
						"name": "城北",
						"pinyin": "cheng bei",
						"pinyin_prefix": "c",
						"ext_id": "630105000000",
						"ext_name": "城北区"
					},
					{
						"id": "630106",
						"pid": 6301,
						"deep": 2,
						"name": "湟中",
						"pinyin": "huang zhong",
						"pinyin_prefix": "h",
						"ext_id": "630106000000",
						"ext_name": "湟中区"
					},
					{
						"id": "630121",
						"pid": 6301,
						"deep": 2,
						"name": "大通",
						"pinyin": "da tong",
						"pinyin_prefix": "d",
						"ext_id": "630121000000",
						"ext_name": "大通回族土族自治县"
					},
					{
						"id": "630123",
						"pid": 6301,
						"deep": 2,
						"name": "湟源",
						"pinyin": "huang yuan",
						"pinyin_prefix": "h",
						"ext_id": "630123000000",
						"ext_name": "湟源县"
					}
				]
			},
			{
				"id": "6302",
				"pid": 63,
				"deep": 1,
				"name": "海东",
				"pinyin": "hai dong",
				"pinyin_prefix": "h",
				"ext_id": "630200000000",
				"ext_name": "海东市",
				"childs": [
					{
						"id": "630202",
						"pid": 6302,
						"deep": 2,
						"name": "乐都",
						"pinyin": "le du",
						"pinyin_prefix": "l",
						"ext_id": "630202000000",
						"ext_name": "乐都区"
					},
					{
						"id": "630203",
						"pid": 6302,
						"deep": 2,
						"name": "平安",
						"pinyin": "ping an",
						"pinyin_prefix": "p",
						"ext_id": "630203000000",
						"ext_name": "平安区"
					},
					{
						"id": "630222",
						"pid": 6302,
						"deep": 2,
						"name": "民和",
						"pinyin": "min he",
						"pinyin_prefix": "m",
						"ext_id": "630222000000",
						"ext_name": "民和回族土族自治县"
					},
					{
						"id": "630223",
						"pid": 6302,
						"deep": 2,
						"name": "互助",
						"pinyin": "hu zhu",
						"pinyin_prefix": "h",
						"ext_id": "630223000000",
						"ext_name": "互助土族自治县"
					},
					{
						"id": "630224",
						"pid": 6302,
						"deep": 2,
						"name": "化隆",
						"pinyin": "hua long",
						"pinyin_prefix": "h",
						"ext_id": "630224000000",
						"ext_name": "化隆回族自治县"
					},
					{
						"id": "630225",
						"pid": 6302,
						"deep": 2,
						"name": "循化",
						"pinyin": "xun hua",
						"pinyin_prefix": "x",
						"ext_id": "630225000000",
						"ext_name": "循化撒拉族自治县"
					}
				]
			},
			{
				"id": "6322",
				"pid": 63,
				"deep": 1,
				"name": "海北",
				"pinyin": "hai bei",
				"pinyin_prefix": "h",
				"ext_id": "632200000000",
				"ext_name": "海北藏族自治州",
				"childs": [
					{
						"id": "632221",
						"pid": 6322,
						"deep": 2,
						"name": "门源",
						"pinyin": "men yuan",
						"pinyin_prefix": "m",
						"ext_id": "632221000000",
						"ext_name": "门源回族自治县"
					},
					{
						"id": "632222",
						"pid": 6322,
						"deep": 2,
						"name": "祁连",
						"pinyin": "qi lian",
						"pinyin_prefix": "q",
						"ext_id": "632222000000",
						"ext_name": "祁连县"
					},
					{
						"id": "632223",
						"pid": 6322,
						"deep": 2,
						"name": "海晏",
						"pinyin": "hai yan",
						"pinyin_prefix": "h",
						"ext_id": "632223000000",
						"ext_name": "海晏县"
					},
					{
						"id": "632224",
						"pid": 6322,
						"deep": 2,
						"name": "刚察",
						"pinyin": "gang cha",
						"pinyin_prefix": "g",
						"ext_id": "632224000000",
						"ext_name": "刚察县"
					}
				]
			},
			{
				"id": "6323",
				"pid": 63,
				"deep": 1,
				"name": "黄南",
				"pinyin": "huang nan",
				"pinyin_prefix": "h",
				"ext_id": "632300000000",
				"ext_name": "黄南藏族自治州",
				"childs": [
					{
						"id": "632301",
						"pid": 6323,
						"deep": 2,
						"name": "同仁",
						"pinyin": "tong ren",
						"pinyin_prefix": "t",
						"ext_id": "632301000000",
						"ext_name": "同仁市"
					},
					{
						"id": "632322",
						"pid": 6323,
						"deep": 2,
						"name": "尖扎",
						"pinyin": "jian zha",
						"pinyin_prefix": "j",
						"ext_id": "632322000000",
						"ext_name": "尖扎县"
					},
					{
						"id": "632323",
						"pid": 6323,
						"deep": 2,
						"name": "泽库",
						"pinyin": "ze ku",
						"pinyin_prefix": "z",
						"ext_id": "632323000000",
						"ext_name": "泽库县"
					},
					{
						"id": "632324",
						"pid": 6323,
						"deep": 2,
						"name": "河南",
						"pinyin": "he nan",
						"pinyin_prefix": "h",
						"ext_id": "632324000000",
						"ext_name": "河南蒙古族自治县"
					}
				]
			},
			{
				"id": "6325",
				"pid": 63,
				"deep": 1,
				"name": "海南",
				"pinyin": "hai nan",
				"pinyin_prefix": "h",
				"ext_id": "632500000000",
				"ext_name": "海南藏族自治州",
				"childs": [
					{
						"id": "632521",
						"pid": 6325,
						"deep": 2,
						"name": "共和",
						"pinyin": "gong he",
						"pinyin_prefix": "g",
						"ext_id": "632521000000",
						"ext_name": "共和县"
					},
					{
						"id": "632522",
						"pid": 6325,
						"deep": 2,
						"name": "同德",
						"pinyin": "tong de",
						"pinyin_prefix": "t",
						"ext_id": "632522000000",
						"ext_name": "同德县"
					},
					{
						"id": "632523",
						"pid": 6325,
						"deep": 2,
						"name": "贵德",
						"pinyin": "gui de",
						"pinyin_prefix": "g",
						"ext_id": "632523000000",
						"ext_name": "贵德县"
					},
					{
						"id": "632524",
						"pid": 6325,
						"deep": 2,
						"name": "兴海",
						"pinyin": "xing hai",
						"pinyin_prefix": "x",
						"ext_id": "632524000000",
						"ext_name": "兴海县"
					},
					{
						"id": "632525",
						"pid": 6325,
						"deep": 2,
						"name": "贵南",
						"pinyin": "gui nan",
						"pinyin_prefix": "g",
						"ext_id": "632525000000",
						"ext_name": "贵南县"
					}
				]
			},
			{
				"id": "6326",
				"pid": 63,
				"deep": 1,
				"name": "果洛",
				"pinyin": "guo luo",
				"pinyin_prefix": "g",
				"ext_id": "632600000000",
				"ext_name": "果洛藏族自治州",
				"childs": [
					{
						"id": "632621",
						"pid": 6326,
						"deep": 2,
						"name": "玛沁",
						"pinyin": "ma qin",
						"pinyin_prefix": "m",
						"ext_id": "632621000000",
						"ext_name": "玛沁县"
					},
					{
						"id": "632622",
						"pid": 6326,
						"deep": 2,
						"name": "班玛",
						"pinyin": "ban ma",
						"pinyin_prefix": "b",
						"ext_id": "632622000000",
						"ext_name": "班玛县"
					},
					{
						"id": "632623",
						"pid": 6326,
						"deep": 2,
						"name": "甘德",
						"pinyin": "gan de",
						"pinyin_prefix": "g",
						"ext_id": "632623000000",
						"ext_name": "甘德县"
					},
					{
						"id": "632624",
						"pid": 6326,
						"deep": 2,
						"name": "达日",
						"pinyin": "da ri",
						"pinyin_prefix": "d",
						"ext_id": "632624000000",
						"ext_name": "达日县"
					},
					{
						"id": "632625",
						"pid": 6326,
						"deep": 2,
						"name": "久治",
						"pinyin": "jiu zhi",
						"pinyin_prefix": "j",
						"ext_id": "632625000000",
						"ext_name": "久治县"
					},
					{
						"id": "632626",
						"pid": 6326,
						"deep": 2,
						"name": "玛多",
						"pinyin": "ma duo",
						"pinyin_prefix": "m",
						"ext_id": "632626000000",
						"ext_name": "玛多县"
					}
				]
			},
			{
				"id": "6327",
				"pid": 63,
				"deep": 1,
				"name": "玉树",
				"pinyin": "yu shu",
				"pinyin_prefix": "y",
				"ext_id": "632700000000",
				"ext_name": "玉树藏族自治州",
				"childs": [
					{
						"id": "632701",
						"pid": 6327,
						"deep": 2,
						"name": "玉树市",
						"pinyin": "yu shu shi",
						"pinyin_prefix": "y",
						"ext_id": "632701000000",
						"ext_name": "玉树市"
					},
					{
						"id": "632722",
						"pid": 6327,
						"deep": 2,
						"name": "杂多",
						"pinyin": "za duo",
						"pinyin_prefix": "z",
						"ext_id": "632722000000",
						"ext_name": "杂多县"
					},
					{
						"id": "632723",
						"pid": 6327,
						"deep": 2,
						"name": "称多",
						"pinyin": "cheng duo",
						"pinyin_prefix": "c",
						"ext_id": "632723000000",
						"ext_name": "称多县"
					},
					{
						"id": "632724",
						"pid": 6327,
						"deep": 2,
						"name": "治多",
						"pinyin": "zhi duo",
						"pinyin_prefix": "z",
						"ext_id": "632724000000",
						"ext_name": "治多县"
					},
					{
						"id": "632725",
						"pid": 6327,
						"deep": 2,
						"name": "囊谦",
						"pinyin": "nang qian",
						"pinyin_prefix": "n",
						"ext_id": "632725000000",
						"ext_name": "囊谦县"
					},
					{
						"id": "632726",
						"pid": 6327,
						"deep": 2,
						"name": "曲麻莱",
						"pinyin": "qu ma lai",
						"pinyin_prefix": "q",
						"ext_id": "632726000000",
						"ext_name": "曲麻莱县"
					}
				]
			},
			{
				"id": "6328",
				"pid": 63,
				"deep": 1,
				"name": "海西",
				"pinyin": "hai xi",
				"pinyin_prefix": "h",
				"ext_id": "632800000000",
				"ext_name": "海西蒙古族藏族自治州",
				"childs": [
					{
						"id": "632801",
						"pid": 6328,
						"deep": 2,
						"name": "格尔木",
						"pinyin": "ge er mu",
						"pinyin_prefix": "g",
						"ext_id": "632801000000",
						"ext_name": "格尔木市"
					},
					{
						"id": "632802",
						"pid": 6328,
						"deep": 2,
						"name": "德令哈",
						"pinyin": "de ling ha",
						"pinyin_prefix": "d",
						"ext_id": "632802000000",
						"ext_name": "德令哈市"
					},
					{
						"id": "632803",
						"pid": 6328,
						"deep": 2,
						"name": "茫崖",
						"pinyin": "mang ya",
						"pinyin_prefix": "m",
						"ext_id": "632803000000",
						"ext_name": "茫崖市"
					},
					{
						"id": "632821",
						"pid": 6328,
						"deep": 2,
						"name": "乌兰",
						"pinyin": "wu lan",
						"pinyin_prefix": "w",
						"ext_id": "632821000000",
						"ext_name": "乌兰县"
					},
					{
						"id": "632822",
						"pid": 6328,
						"deep": 2,
						"name": "都兰",
						"pinyin": "du lan",
						"pinyin_prefix": "d",
						"ext_id": "632822000000",
						"ext_name": "都兰县"
					},
					{
						"id": "632823",
						"pid": 6328,
						"deep": 2,
						"name": "天峻",
						"pinyin": "tian jun",
						"pinyin_prefix": "t",
						"ext_id": "632823000000",
						"ext_name": "天峻县"
					},
					{
						"id": "632825",
						"pid": 6328,
						"deep": 2,
						"name": "大柴旦行政委员会",
						"pinyin": "da chai dan xing zheng wei yuan hui",
						"pinyin_prefix": "d",
						"ext_id": "632825000000",
						"ext_name": "大柴旦行政委员会"
					}
				]
			}
		]
	},
	{
		"id": "64",
		"pid": 0,
		"deep": 0,
		"name": "宁夏",
		"pinyin": "ning xia",
		"pinyin_prefix": "n",
		"ext_id": "640000000000",
		"ext_name": "宁夏回族自治区",
		"childs": [
			{
				"id": "6401",
				"pid": 64,
				"deep": 1,
				"name": "银川",
				"pinyin": "yin chuan",
				"pinyin_prefix": "y",
				"ext_id": "640100000000",
				"ext_name": "银川市",
				"childs": [
					{
						"id": "640104",
						"pid": 6401,
						"deep": 2,
						"name": "兴庆",
						"pinyin": "xing qing",
						"pinyin_prefix": "x",
						"ext_id": "640104000000",
						"ext_name": "兴庆区"
					},
					{
						"id": "640105",
						"pid": 6401,
						"deep": 2,
						"name": "西夏",
						"pinyin": "xi xia",
						"pinyin_prefix": "x",
						"ext_id": "640105000000",
						"ext_name": "西夏区"
					},
					{
						"id": "640106",
						"pid": 6401,
						"deep": 2,
						"name": "金凤",
						"pinyin": "jin feng",
						"pinyin_prefix": "j",
						"ext_id": "640106000000",
						"ext_name": "金凤区"
					},
					{
						"id": "640121",
						"pid": 6401,
						"deep": 2,
						"name": "永宁",
						"pinyin": "yong ning",
						"pinyin_prefix": "y",
						"ext_id": "640121000000",
						"ext_name": "永宁县"
					},
					{
						"id": "640122",
						"pid": 6401,
						"deep": 2,
						"name": "贺兰",
						"pinyin": "he lan",
						"pinyin_prefix": "h",
						"ext_id": "640122000000",
						"ext_name": "贺兰县"
					},
					{
						"id": "640181",
						"pid": 6401,
						"deep": 2,
						"name": "灵武",
						"pinyin": "ling wu",
						"pinyin_prefix": "l",
						"ext_id": "640181000000",
						"ext_name": "灵武市"
					}
				]
			},
			{
				"id": "6402",
				"pid": 64,
				"deep": 1,
				"name": "石嘴山",
				"pinyin": "shi zui shan",
				"pinyin_prefix": "s",
				"ext_id": "640200000000",
				"ext_name": "石嘴山市",
				"childs": [
					{
						"id": "640202",
						"pid": 6402,
						"deep": 2,
						"name": "大武口",
						"pinyin": "da wu kou",
						"pinyin_prefix": "d",
						"ext_id": "640202000000",
						"ext_name": "大武口区"
					},
					{
						"id": "640205",
						"pid": 6402,
						"deep": 2,
						"name": "惠农",
						"pinyin": "hui nong",
						"pinyin_prefix": "h",
						"ext_id": "640205000000",
						"ext_name": "惠农区"
					},
					{
						"id": "640221",
						"pid": 6402,
						"deep": 2,
						"name": "平罗",
						"pinyin": "ping luo",
						"pinyin_prefix": "p",
						"ext_id": "640221000000",
						"ext_name": "平罗县"
					}
				]
			},
			{
				"id": "6403",
				"pid": 64,
				"deep": 1,
				"name": "吴忠",
				"pinyin": "wu zhong",
				"pinyin_prefix": "w",
				"ext_id": "640300000000",
				"ext_name": "吴忠市",
				"childs": [
					{
						"id": "640302",
						"pid": 6403,
						"deep": 2,
						"name": "利通",
						"pinyin": "li tong",
						"pinyin_prefix": "l",
						"ext_id": "640302000000",
						"ext_name": "利通区"
					},
					{
						"id": "640303",
						"pid": 6403,
						"deep": 2,
						"name": "红寺堡",
						"pinyin": "hong si bu",
						"pinyin_prefix": "h",
						"ext_id": "640303000000",
						"ext_name": "红寺堡区"
					},
					{
						"id": "640323",
						"pid": 6403,
						"deep": 2,
						"name": "盐池",
						"pinyin": "yan chi",
						"pinyin_prefix": "y",
						"ext_id": "640323000000",
						"ext_name": "盐池县"
					},
					{
						"id": "640324",
						"pid": 6403,
						"deep": 2,
						"name": "同心",
						"pinyin": "tong xin",
						"pinyin_prefix": "t",
						"ext_id": "640324000000",
						"ext_name": "同心县"
					},
					{
						"id": "640381",
						"pid": 6403,
						"deep": 2,
						"name": "青铜峡",
						"pinyin": "qing tong xia",
						"pinyin_prefix": "q",
						"ext_id": "640381000000",
						"ext_name": "青铜峡市"
					}
				]
			},
			{
				"id": "6404",
				"pid": 64,
				"deep": 1,
				"name": "固原",
				"pinyin": "gu yuan",
				"pinyin_prefix": "g",
				"ext_id": "640400000000",
				"ext_name": "固原市",
				"childs": [
					{
						"id": "640402",
						"pid": 6404,
						"deep": 2,
						"name": "原州",
						"pinyin": "yuan zhou",
						"pinyin_prefix": "y",
						"ext_id": "640402000000",
						"ext_name": "原州区"
					},
					{
						"id": "640422",
						"pid": 6404,
						"deep": 2,
						"name": "西吉",
						"pinyin": "xi ji",
						"pinyin_prefix": "x",
						"ext_id": "640422000000",
						"ext_name": "西吉县"
					},
					{
						"id": "640423",
						"pid": 6404,
						"deep": 2,
						"name": "隆德",
						"pinyin": "long de",
						"pinyin_prefix": "l",
						"ext_id": "640423000000",
						"ext_name": "隆德县"
					},
					{
						"id": "640424",
						"pid": 6404,
						"deep": 2,
						"name": "泾源",
						"pinyin": "jing yuan",
						"pinyin_prefix": "j",
						"ext_id": "640424000000",
						"ext_name": "泾源县"
					},
					{
						"id": "640425",
						"pid": 6404,
						"deep": 2,
						"name": "彭阳",
						"pinyin": "peng yang",
						"pinyin_prefix": "p",
						"ext_id": "640425000000",
						"ext_name": "彭阳县"
					}
				]
			},
			{
				"id": "6405",
				"pid": 64,
				"deep": 1,
				"name": "中卫",
				"pinyin": "zhong wei",
				"pinyin_prefix": "z",
				"ext_id": "640500000000",
				"ext_name": "中卫市",
				"childs": [
					{
						"id": "640502",
						"pid": 6405,
						"deep": 2,
						"name": "沙坡头",
						"pinyin": "sha po tou",
						"pinyin_prefix": "s",
						"ext_id": "640502000000",
						"ext_name": "沙坡头区"
					},
					{
						"id": "640521",
						"pid": 6405,
						"deep": 2,
						"name": "中宁",
						"pinyin": "zhong ning",
						"pinyin_prefix": "z",
						"ext_id": "640521000000",
						"ext_name": "中宁县"
					},
					{
						"id": "640522",
						"pid": 6405,
						"deep": 2,
						"name": "海原",
						"pinyin": "hai yuan",
						"pinyin_prefix": "h",
						"ext_id": "640522000000",
						"ext_name": "海原县"
					}
				]
			}
		]
	},
	{
		"id": "65",
		"pid": 0,
		"deep": 0,
		"name": "新疆",
		"pinyin": "xin jiang",
		"pinyin_prefix": "x",
		"ext_id": "650000000000",
		"ext_name": "新疆维吾尔自治区",
		"childs": [
			{
				"id": "6501",
				"pid": 65,
				"deep": 1,
				"name": "乌鲁木齐",
				"pinyin": "wu lu mu qi",
				"pinyin_prefix": "w",
				"ext_id": "650100000000",
				"ext_name": "乌鲁木齐市",
				"childs": [
					{
						"id": "650102",
						"pid": 6501,
						"deep": 2,
						"name": "天山",
						"pinyin": "tian shan",
						"pinyin_prefix": "t",
						"ext_id": "650102000000",
						"ext_name": "天山区"
					},
					{
						"id": "650103",
						"pid": 6501,
						"deep": 2,
						"name": "沙依巴克区",
						"pinyin": "sha yi ba ke qu",
						"pinyin_prefix": "s",
						"ext_id": "650103000000",
						"ext_name": "沙依巴克区"
					},
					{
						"id": "650104",
						"pid": 6501,
						"deep": 2,
						"name": "新市",
						"pinyin": "xin shi",
						"pinyin_prefix": "x",
						"ext_id": "650104000000",
						"ext_name": "新市区"
					},
					{
						"id": "650105",
						"pid": 6501,
						"deep": 2,
						"name": "水磨沟",
						"pinyin": "shui mo gou",
						"pinyin_prefix": "s",
						"ext_id": "650105000000",
						"ext_name": "水磨沟区"
					},
					{
						"id": "650106",
						"pid": 6501,
						"deep": 2,
						"name": "头屯河",
						"pinyin": "tou tun he",
						"pinyin_prefix": "t",
						"ext_id": "650106000000",
						"ext_name": "头屯河区"
					},
					{
						"id": "650107",
						"pid": 6501,
						"deep": 2,
						"name": "达坂城",
						"pinyin": "da ban cheng",
						"pinyin_prefix": "d",
						"ext_id": "650107000000",
						"ext_name": "达坂城区"
					},
					{
						"id": "650109",
						"pid": 6501,
						"deep": 2,
						"name": "米东",
						"pinyin": "mi dong",
						"pinyin_prefix": "m",
						"ext_id": "650109000000",
						"ext_name": "米东区"
					},
					{
						"id": "650121",
						"pid": 6501,
						"deep": 2,
						"name": "乌鲁木齐县",
						"pinyin": "wu lu mu qi xian",
						"pinyin_prefix": "w",
						"ext_id": "650121000000",
						"ext_name": "乌鲁木齐县"
					}
				]
			},
			{
				"id": "6502",
				"pid": 65,
				"deep": 1,
				"name": "克拉玛依",
				"pinyin": "ke la ma yi",
				"pinyin_prefix": "k",
				"ext_id": "650200000000",
				"ext_name": "克拉玛依市",
				"childs": [
					{
						"id": "650202",
						"pid": 6502,
						"deep": 2,
						"name": "独山子",
						"pinyin": "du shan zi",
						"pinyin_prefix": "d",
						"ext_id": "650202000000",
						"ext_name": "独山子区"
					},
					{
						"id": "650203",
						"pid": 6502,
						"deep": 2,
						"name": "克拉玛依区",
						"pinyin": "ke la ma yi qu",
						"pinyin_prefix": "k",
						"ext_id": "650203000000",
						"ext_name": "克拉玛依区"
					},
					{
						"id": "650204",
						"pid": 6502,
						"deep": 2,
						"name": "白碱滩",
						"pinyin": "bai jian tan",
						"pinyin_prefix": "b",
						"ext_id": "650204000000",
						"ext_name": "白碱滩区"
					},
					{
						"id": "650205",
						"pid": 6502,
						"deep": 2,
						"name": "乌尔禾",
						"pinyin": "wu er he",
						"pinyin_prefix": "w",
						"ext_id": "650205000000",
						"ext_name": "乌尔禾区"
					}
				]
			},
			{
				"id": "6504",
				"pid": 65,
				"deep": 1,
				"name": "吐鲁番",
				"pinyin": "tu lu fan",
				"pinyin_prefix": "t",
				"ext_id": "650400000000",
				"ext_name": "吐鲁番市",
				"childs": [
					{
						"id": "650402",
						"pid": 6504,
						"deep": 2,
						"name": "高昌",
						"pinyin": "gao chang",
						"pinyin_prefix": "g",
						"ext_id": "650402000000",
						"ext_name": "高昌区"
					},
					{
						"id": "650421",
						"pid": 6504,
						"deep": 2,
						"name": "鄯善",
						"pinyin": "shan shan",
						"pinyin_prefix": "s",
						"ext_id": "650421000000",
						"ext_name": "鄯善县"
					},
					{
						"id": "650422",
						"pid": 6504,
						"deep": 2,
						"name": "托克逊",
						"pinyin": "tuo ke xun",
						"pinyin_prefix": "t",
						"ext_id": "650422000000",
						"ext_name": "托克逊县"
					}
				]
			},
			{
				"id": "6505",
				"pid": 65,
				"deep": 1,
				"name": "哈密",
				"pinyin": "ha mi",
				"pinyin_prefix": "h",
				"ext_id": "650500000000",
				"ext_name": "哈密市",
				"childs": [
					{
						"id": "650502",
						"pid": 6505,
						"deep": 2,
						"name": "伊州",
						"pinyin": "yi zhou",
						"pinyin_prefix": "y",
						"ext_id": "650502000000",
						"ext_name": "伊州区"
					},
					{
						"id": "650521",
						"pid": 6505,
						"deep": 2,
						"name": "巴里坤",
						"pinyin": "ba li kun",
						"pinyin_prefix": "b",
						"ext_id": "650521000000",
						"ext_name": "巴里坤哈萨克自治县"
					},
					{
						"id": "650522",
						"pid": 6505,
						"deep": 2,
						"name": "伊吾",
						"pinyin": "yi wu",
						"pinyin_prefix": "y",
						"ext_id": "650522000000",
						"ext_name": "伊吾县"
					}
				]
			},
			{
				"id": "6523",
				"pid": 65,
				"deep": 1,
				"name": "昌吉",
				"pinyin": "chang ji",
				"pinyin_prefix": "c",
				"ext_id": "652300000000",
				"ext_name": "昌吉回族自治州",
				"childs": [
					{
						"id": "652301",
						"pid": 6523,
						"deep": 2,
						"name": "昌吉市",
						"pinyin": "chang ji shi",
						"pinyin_prefix": "c",
						"ext_id": "652301000000",
						"ext_name": "昌吉市"
					},
					{
						"id": "652302",
						"pid": 6523,
						"deep": 2,
						"name": "阜康",
						"pinyin": "fu kang",
						"pinyin_prefix": "f",
						"ext_id": "652302000000",
						"ext_name": "阜康市"
					},
					{
						"id": "652323",
						"pid": 6523,
						"deep": 2,
						"name": "呼图壁",
						"pinyin": "hu tu bi",
						"pinyin_prefix": "h",
						"ext_id": "652323000000",
						"ext_name": "呼图壁县"
					},
					{
						"id": "652324",
						"pid": 6523,
						"deep": 2,
						"name": "玛纳斯",
						"pinyin": "ma na si",
						"pinyin_prefix": "m",
						"ext_id": "652324000000",
						"ext_name": "玛纳斯县"
					},
					{
						"id": "652325",
						"pid": 6523,
						"deep": 2,
						"name": "奇台",
						"pinyin": "qi tai",
						"pinyin_prefix": "q",
						"ext_id": "652325000000",
						"ext_name": "奇台县"
					},
					{
						"id": "652327",
						"pid": 6523,
						"deep": 2,
						"name": "吉木萨尔",
						"pinyin": "ji mu sa er",
						"pinyin_prefix": "j",
						"ext_id": "652327000000",
						"ext_name": "吉木萨尔县"
					},
					{
						"id": "652328",
						"pid": 6523,
						"deep": 2,
						"name": "木垒",
						"pinyin": "mu lei",
						"pinyin_prefix": "m",
						"ext_id": "652328000000",
						"ext_name": "木垒哈萨克自治县"
					}
				]
			},
			{
				"id": "6527",
				"pid": 65,
				"deep": 1,
				"name": "博尔塔拉",
				"pinyin": "bo er ta la",
				"pinyin_prefix": "b",
				"ext_id": "652700000000",
				"ext_name": "博尔塔拉蒙古自治州",
				"childs": [
					{
						"id": "652701",
						"pid": 6527,
						"deep": 2,
						"name": "博乐",
						"pinyin": "bo le",
						"pinyin_prefix": "b",
						"ext_id": "652701000000",
						"ext_name": "博乐市"
					},
					{
						"id": "652702",
						"pid": 6527,
						"deep": 2,
						"name": "阿拉山口",
						"pinyin": "a la shan kou",
						"pinyin_prefix": "a",
						"ext_id": "652702000000",
						"ext_name": "阿拉山口市"
					},
					{
						"id": "652722",
						"pid": 6527,
						"deep": 2,
						"name": "精河",
						"pinyin": "jing he",
						"pinyin_prefix": "j",
						"ext_id": "652722000000",
						"ext_name": "精河县"
					},
					{
						"id": "652723",
						"pid": 6527,
						"deep": 2,
						"name": "温泉",
						"pinyin": "wen quan",
						"pinyin_prefix": "w",
						"ext_id": "652723000000",
						"ext_name": "温泉县"
					}
				]
			},
			{
				"id": "6528",
				"pid": 65,
				"deep": 1,
				"name": "巴音郭楞",
				"pinyin": "ba yin guo leng",
				"pinyin_prefix": "b",
				"ext_id": "652800000000",
				"ext_name": "巴音郭楞蒙古自治州",
				"childs": [
					{
						"id": "652801",
						"pid": 6528,
						"deep": 2,
						"name": "库尔勒",
						"pinyin": "ku er le",
						"pinyin_prefix": "k",
						"ext_id": "652801000000",
						"ext_name": "库尔勒市"
					},
					{
						"id": "652822",
						"pid": 6528,
						"deep": 2,
						"name": "轮台",
						"pinyin": "lun tai",
						"pinyin_prefix": "l",
						"ext_id": "652822000000",
						"ext_name": "轮台县"
					},
					{
						"id": "652823",
						"pid": 6528,
						"deep": 2,
						"name": "尉犁",
						"pinyin": "yu li",
						"pinyin_prefix": "y",
						"ext_id": "652823000000",
						"ext_name": "尉犁县"
					},
					{
						"id": "652824",
						"pid": 6528,
						"deep": 2,
						"name": "若羌",
						"pinyin": "ruo qiang",
						"pinyin_prefix": "r",
						"ext_id": "652824000000",
						"ext_name": "若羌县"
					},
					{
						"id": "652825",
						"pid": 6528,
						"deep": 2,
						"name": "且末",
						"pinyin": "qie mo",
						"pinyin_prefix": "q",
						"ext_id": "652825000000",
						"ext_name": "且末县"
					},
					{
						"id": "652826",
						"pid": 6528,
						"deep": 2,
						"name": "焉耆",
						"pinyin": "yan qi",
						"pinyin_prefix": "y",
						"ext_id": "652826000000",
						"ext_name": "焉耆回族自治县"
					},
					{
						"id": "652827",
						"pid": 6528,
						"deep": 2,
						"name": "和静",
						"pinyin": "he jing",
						"pinyin_prefix": "h",
						"ext_id": "652827000000",
						"ext_name": "和静县"
					},
					{
						"id": "652828",
						"pid": 6528,
						"deep": 2,
						"name": "和硕",
						"pinyin": "he shuo",
						"pinyin_prefix": "h",
						"ext_id": "652828000000",
						"ext_name": "和硕县"
					},
					{
						"id": "652829",
						"pid": 6528,
						"deep": 2,
						"name": "博湖",
						"pinyin": "bo hu",
						"pinyin_prefix": "b",
						"ext_id": "652829000000",
						"ext_name": "博湖县"
					}
				]
			},
			{
				"id": "6529",
				"pid": 65,
				"deep": 1,
				"name": "阿克苏",
				"pinyin": "a ke su",
				"pinyin_prefix": "a",
				"ext_id": "652900000000",
				"ext_name": "阿克苏地区",
				"childs": [
					{
						"id": "652901",
						"pid": 6529,
						"deep": 2,
						"name": "阿克苏市",
						"pinyin": "a ke su shi",
						"pinyin_prefix": "a",
						"ext_id": "652901000000",
						"ext_name": "阿克苏市"
					},
					{
						"id": "652902",
						"pid": 6529,
						"deep": 2,
						"name": "库车",
						"pinyin": "ku che",
						"pinyin_prefix": "k",
						"ext_id": "652902000000",
						"ext_name": "库车市"
					},
					{
						"id": "652922",
						"pid": 6529,
						"deep": 2,
						"name": "温宿",
						"pinyin": "wen su",
						"pinyin_prefix": "w",
						"ext_id": "652922000000",
						"ext_name": "温宿县"
					},
					{
						"id": "652924",
						"pid": 6529,
						"deep": 2,
						"name": "沙雅",
						"pinyin": "sha ya",
						"pinyin_prefix": "s",
						"ext_id": "652924000000",
						"ext_name": "沙雅县"
					},
					{
						"id": "652925",
						"pid": 6529,
						"deep": 2,
						"name": "新和",
						"pinyin": "xin he",
						"pinyin_prefix": "x",
						"ext_id": "652925000000",
						"ext_name": "新和县"
					},
					{
						"id": "652926",
						"pid": 6529,
						"deep": 2,
						"name": "拜城",
						"pinyin": "bai cheng",
						"pinyin_prefix": "b",
						"ext_id": "652926000000",
						"ext_name": "拜城县"
					},
					{
						"id": "652927",
						"pid": 6529,
						"deep": 2,
						"name": "乌什",
						"pinyin": "wu shi",
						"pinyin_prefix": "w",
						"ext_id": "652927000000",
						"ext_name": "乌什县"
					},
					{
						"id": "652928",
						"pid": 6529,
						"deep": 2,
						"name": "阿瓦提",
						"pinyin": "a wa ti",
						"pinyin_prefix": "a",
						"ext_id": "652928000000",
						"ext_name": "阿瓦提县"
					},
					{
						"id": "652929",
						"pid": 6529,
						"deep": 2,
						"name": "柯坪",
						"pinyin": "ke ping",
						"pinyin_prefix": "k",
						"ext_id": "652929000000",
						"ext_name": "柯坪县"
					}
				]
			},
			{
				"id": "6530",
				"pid": 65,
				"deep": 1,
				"name": "克孜勒苏",
				"pinyin": "ke zi le su",
				"pinyin_prefix": "k",
				"ext_id": "653000000000",
				"ext_name": "克孜勒苏柯尔克孜自治州",
				"childs": [
					{
						"id": "653001",
						"pid": 6530,
						"deep": 2,
						"name": "阿图什",
						"pinyin": "a tu shi",
						"pinyin_prefix": "a",
						"ext_id": "653001000000",
						"ext_name": "阿图什市"
					},
					{
						"id": "653022",
						"pid": 6530,
						"deep": 2,
						"name": "阿克陶",
						"pinyin": "a ke tao",
						"pinyin_prefix": "a",
						"ext_id": "653022000000",
						"ext_name": "阿克陶县"
					},
					{
						"id": "653023",
						"pid": 6530,
						"deep": 2,
						"name": "阿合奇",
						"pinyin": "a he qi",
						"pinyin_prefix": "a",
						"ext_id": "653023000000",
						"ext_name": "阿合奇县"
					},
					{
						"id": "653024",
						"pid": 6530,
						"deep": 2,
						"name": "乌恰",
						"pinyin": "wu qia",
						"pinyin_prefix": "w",
						"ext_id": "653024000000",
						"ext_name": "乌恰县"
					}
				]
			},
			{
				"id": "6531",
				"pid": 65,
				"deep": 1,
				"name": "喀什",
				"pinyin": "ka shi",
				"pinyin_prefix": "k",
				"ext_id": "653100000000",
				"ext_name": "喀什地区",
				"childs": [
					{
						"id": "653101",
						"pid": 6531,
						"deep": 2,
						"name": "喀什市",
						"pinyin": "ka shi shi",
						"pinyin_prefix": "k",
						"ext_id": "653101000000",
						"ext_name": "喀什市"
					},
					{
						"id": "653121",
						"pid": 6531,
						"deep": 2,
						"name": "疏附",
						"pinyin": "shu fu",
						"pinyin_prefix": "s",
						"ext_id": "653121000000",
						"ext_name": "疏附县"
					},
					{
						"id": "653122",
						"pid": 6531,
						"deep": 2,
						"name": "疏勒",
						"pinyin": "shu le",
						"pinyin_prefix": "s",
						"ext_id": "653122000000",
						"ext_name": "疏勒县"
					},
					{
						"id": "653123",
						"pid": 6531,
						"deep": 2,
						"name": "英吉沙",
						"pinyin": "ying ji sha",
						"pinyin_prefix": "y",
						"ext_id": "653123000000",
						"ext_name": "英吉沙县"
					},
					{
						"id": "653124",
						"pid": 6531,
						"deep": 2,
						"name": "泽普",
						"pinyin": "ze pu",
						"pinyin_prefix": "z",
						"ext_id": "653124000000",
						"ext_name": "泽普县"
					},
					{
						"id": "653125",
						"pid": 6531,
						"deep": 2,
						"name": "莎车",
						"pinyin": "sha che",
						"pinyin_prefix": "s",
						"ext_id": "653125000000",
						"ext_name": "莎车县"
					},
					{
						"id": "653126",
						"pid": 6531,
						"deep": 2,
						"name": "叶城",
						"pinyin": "ye cheng",
						"pinyin_prefix": "y",
						"ext_id": "653126000000",
						"ext_name": "叶城县"
					},
					{
						"id": "653127",
						"pid": 6531,
						"deep": 2,
						"name": "麦盖提",
						"pinyin": "mai gai ti",
						"pinyin_prefix": "m",
						"ext_id": "653127000000",
						"ext_name": "麦盖提县"
					},
					{
						"id": "653128",
						"pid": 6531,
						"deep": 2,
						"name": "岳普湖",
						"pinyin": "yue pu hu",
						"pinyin_prefix": "y",
						"ext_id": "653128000000",
						"ext_name": "岳普湖县"
					},
					{
						"id": "653129",
						"pid": 6531,
						"deep": 2,
						"name": "伽师",
						"pinyin": "jia shi",
						"pinyin_prefix": "j",
						"ext_id": "653129000000",
						"ext_name": "伽师县"
					},
					{
						"id": "653130",
						"pid": 6531,
						"deep": 2,
						"name": "巴楚",
						"pinyin": "ba chu",
						"pinyin_prefix": "b",
						"ext_id": "653130000000",
						"ext_name": "巴楚县"
					},
					{
						"id": "653131",
						"pid": 6531,
						"deep": 2,
						"name": "塔什库尔干",
						"pinyin": "ta shi ku er gan",
						"pinyin_prefix": "t",
						"ext_id": "653131000000",
						"ext_name": "塔什库尔干塔吉克自治县"
					}
				]
			},
			{
				"id": "6532",
				"pid": 65,
				"deep": 1,
				"name": "和田",
				"pinyin": "he tian",
				"pinyin_prefix": "h",
				"ext_id": "653200000000",
				"ext_name": "和田地区",
				"childs": [
					{
						"id": "653201",
						"pid": 6532,
						"deep": 2,
						"name": "和田市",
						"pinyin": "he tian shi",
						"pinyin_prefix": "h",
						"ext_id": "653201000000",
						"ext_name": "和田市"
					},
					{
						"id": "653221",
						"pid": 6532,
						"deep": 2,
						"name": "和田县",
						"pinyin": "he tian xian",
						"pinyin_prefix": "h",
						"ext_id": "653221000000",
						"ext_name": "和田县"
					},
					{
						"id": "653222",
						"pid": 6532,
						"deep": 2,
						"name": "墨玉",
						"pinyin": "mo yu",
						"pinyin_prefix": "m",
						"ext_id": "653222000000",
						"ext_name": "墨玉县"
					},
					{
						"id": "653223",
						"pid": 6532,
						"deep": 2,
						"name": "皮山",
						"pinyin": "pi shan",
						"pinyin_prefix": "p",
						"ext_id": "653223000000",
						"ext_name": "皮山县"
					},
					{
						"id": "653224",
						"pid": 6532,
						"deep": 2,
						"name": "洛浦",
						"pinyin": "luo pu",
						"pinyin_prefix": "l",
						"ext_id": "653224000000",
						"ext_name": "洛浦县"
					},
					{
						"id": "653225",
						"pid": 6532,
						"deep": 2,
						"name": "策勒",
						"pinyin": "ce le",
						"pinyin_prefix": "c",
						"ext_id": "653225000000",
						"ext_name": "策勒县"
					},
					{
						"id": "653226",
						"pid": 6532,
						"deep": 2,
						"name": "于田",
						"pinyin": "yu tian",
						"pinyin_prefix": "y",
						"ext_id": "653226000000",
						"ext_name": "于田县"
					},
					{
						"id": "653227",
						"pid": 6532,
						"deep": 2,
						"name": "民丰",
						"pinyin": "min feng",
						"pinyin_prefix": "m",
						"ext_id": "653227000000",
						"ext_name": "民丰县"
					}
				]
			},
			{
				"id": "6540",
				"pid": 65,
				"deep": 1,
				"name": "伊犁",
				"pinyin": "yi li",
				"pinyin_prefix": "y",
				"ext_id": "654000000000",
				"ext_name": "伊犁哈萨克自治州",
				"childs": [
					{
						"id": "654002",
						"pid": 6540,
						"deep": 2,
						"name": "伊宁市",
						"pinyin": "yi ning shi",
						"pinyin_prefix": "y",
						"ext_id": "654002000000",
						"ext_name": "伊宁市"
					},
					{
						"id": "654003",
						"pid": 6540,
						"deep": 2,
						"name": "奎屯",
						"pinyin": "kui tun",
						"pinyin_prefix": "k",
						"ext_id": "654003000000",
						"ext_name": "奎屯市"
					},
					{
						"id": "654004",
						"pid": 6540,
						"deep": 2,
						"name": "霍尔果斯",
						"pinyin": "huo er guo si",
						"pinyin_prefix": "h",
						"ext_id": "654004000000",
						"ext_name": "霍尔果斯市"
					},
					{
						"id": "654021",
						"pid": 6540,
						"deep": 2,
						"name": "伊宁县",
						"pinyin": "yi ning xian",
						"pinyin_prefix": "y",
						"ext_id": "654021000000",
						"ext_name": "伊宁县"
					},
					{
						"id": "654022",
						"pid": 6540,
						"deep": 2,
						"name": "察布查尔",
						"pinyin": "cha bu cha er",
						"pinyin_prefix": "c",
						"ext_id": "654022000000",
						"ext_name": "察布查尔锡伯自治县"
					},
					{
						"id": "654023",
						"pid": 6540,
						"deep": 2,
						"name": "霍城",
						"pinyin": "huo cheng",
						"pinyin_prefix": "h",
						"ext_id": "654023000000",
						"ext_name": "霍城县"
					},
					{
						"id": "654024",
						"pid": 6540,
						"deep": 2,
						"name": "巩留",
						"pinyin": "gong liu",
						"pinyin_prefix": "g",
						"ext_id": "654024000000",
						"ext_name": "巩留县"
					},
					{
						"id": "654025",
						"pid": 6540,
						"deep": 2,
						"name": "新源",
						"pinyin": "xin yuan",
						"pinyin_prefix": "x",
						"ext_id": "654025000000",
						"ext_name": "新源县"
					},
					{
						"id": "654026",
						"pid": 6540,
						"deep": 2,
						"name": "昭苏",
						"pinyin": "zhao su",
						"pinyin_prefix": "z",
						"ext_id": "654026000000",
						"ext_name": "昭苏县"
					},
					{
						"id": "654027",
						"pid": 6540,
						"deep": 2,
						"name": "特克斯",
						"pinyin": "te ke si",
						"pinyin_prefix": "t",
						"ext_id": "654027000000",
						"ext_name": "特克斯县"
					},
					{
						"id": "654028",
						"pid": 6540,
						"deep": 2,
						"name": "尼勒克",
						"pinyin": "ni le ke",
						"pinyin_prefix": "n",
						"ext_id": "654028000000",
						"ext_name": "尼勒克县"
					}
				]
			},
			{
				"id": "6542",
				"pid": 65,
				"deep": 1,
				"name": "塔城",
				"pinyin": "ta cheng",
				"pinyin_prefix": "t",
				"ext_id": "654200000000",
				"ext_name": "塔城地区",
				"childs": [
					{
						"id": "654201",
						"pid": 6542,
						"deep": 2,
						"name": "塔城市",
						"pinyin": "ta cheng shi",
						"pinyin_prefix": "t",
						"ext_id": "654201000000",
						"ext_name": "塔城市"
					},
					{
						"id": "654202",
						"pid": 6542,
						"deep": 2,
						"name": "乌苏",
						"pinyin": "wu su",
						"pinyin_prefix": "w",
						"ext_id": "654202000000",
						"ext_name": "乌苏市"
					},
					{
						"id": "654203",
						"pid": 6542,
						"deep": 2,
						"name": "沙湾",
						"pinyin": "sha wan",
						"pinyin_prefix": "s",
						"ext_id": "654203000000",
						"ext_name": "沙湾市"
					},
					{
						"id": "654221",
						"pid": 6542,
						"deep": 2,
						"name": "额敏",
						"pinyin": "e min",
						"pinyin_prefix": "e",
						"ext_id": "654221000000",
						"ext_name": "额敏县"
					},
					{
						"id": "654224",
						"pid": 6542,
						"deep": 2,
						"name": "托里",
						"pinyin": "tuo li",
						"pinyin_prefix": "t",
						"ext_id": "654224000000",
						"ext_name": "托里县"
					},
					{
						"id": "654225",
						"pid": 6542,
						"deep": 2,
						"name": "裕民",
						"pinyin": "yu min",
						"pinyin_prefix": "y",
						"ext_id": "654225000000",
						"ext_name": "裕民县"
					},
					{
						"id": "654226",
						"pid": 6542,
						"deep": 2,
						"name": "和布克赛尔",
						"pinyin": "he bu ke sai er",
						"pinyin_prefix": "h",
						"ext_id": "654226000000",
						"ext_name": "和布克赛尔蒙古自治县"
					}
				]
			},
			{
				"id": "6543",
				"pid": 65,
				"deep": 1,
				"name": "阿勒泰",
				"pinyin": "a le tai",
				"pinyin_prefix": "a",
				"ext_id": "654300000000",
				"ext_name": "阿勒泰地区",
				"childs": [
					{
						"id": "654301",
						"pid": 6543,
						"deep": 2,
						"name": "阿勒泰市",
						"pinyin": "a le tai shi",
						"pinyin_prefix": "a",
						"ext_id": "654301000000",
						"ext_name": "阿勒泰市"
					},
					{
						"id": "654321",
						"pid": 6543,
						"deep": 2,
						"name": "布尔津",
						"pinyin": "bu er jin",
						"pinyin_prefix": "b",
						"ext_id": "654321000000",
						"ext_name": "布尔津县"
					},
					{
						"id": "654322",
						"pid": 6543,
						"deep": 2,
						"name": "富蕴",
						"pinyin": "fu yun",
						"pinyin_prefix": "f",
						"ext_id": "654322000000",
						"ext_name": "富蕴县"
					},
					{
						"id": "654323",
						"pid": 6543,
						"deep": 2,
						"name": "福海",
						"pinyin": "fu hai",
						"pinyin_prefix": "f",
						"ext_id": "654323000000",
						"ext_name": "福海县"
					},
					{
						"id": "654324",
						"pid": 6543,
						"deep": 2,
						"name": "哈巴河",
						"pinyin": "ha ba he",
						"pinyin_prefix": "h",
						"ext_id": "654324000000",
						"ext_name": "哈巴河县"
					},
					{
						"id": "654325",
						"pid": 6543,
						"deep": 2,
						"name": "青河",
						"pinyin": "qing he",
						"pinyin_prefix": "q",
						"ext_id": "654325000000",
						"ext_name": "青河县"
					},
					{
						"id": "654326",
						"pid": 6543,
						"deep": 2,
						"name": "吉木乃",
						"pinyin": "ji mu nai",
						"pinyin_prefix": "j",
						"ext_id": "654326000000",
						"ext_name": "吉木乃县"
					}
				]
			},
			{
				"id": "659001",
				"pid": 65,
				"deep": 1,
				"name": "石河子",
				"pinyin": "shi he zi",
				"pinyin_prefix": "s",
				"ext_id": "659001000000",
				"ext_name": "石河子市",
				"childs": [
					{
						"id": "659001000",
						"pid": 659001,
						"deep": 2,
						"name": "石河子",
						"pinyin": "shi he zi",
						"pinyin_prefix": "s",
						"ext_id": "659001000000",
						"ext_name": "石河子市"
					}
				]
			},
			{
				"id": "659002",
				"pid": 65,
				"deep": 1,
				"name": "阿拉尔",
				"pinyin": "a la er",
				"pinyin_prefix": "a",
				"ext_id": "659002000000",
				"ext_name": "阿拉尔市",
				"childs": [
					{
						"id": "659002000",
						"pid": 659002,
						"deep": 2,
						"name": "阿拉尔",
						"pinyin": "a la er",
						"pinyin_prefix": "a",
						"ext_id": "659002000000",
						"ext_name": "阿拉尔市"
					}
				]
			},
			{
				"id": "659003",
				"pid": 65,
				"deep": 1,
				"name": "图木舒克",
				"pinyin": "tu mu shu ke",
				"pinyin_prefix": "t",
				"ext_id": "659003000000",
				"ext_name": "图木舒克市",
				"childs": [
					{
						"id": "659003000",
						"pid": 659003,
						"deep": 2,
						"name": "图木舒克",
						"pinyin": "tu mu shu ke",
						"pinyin_prefix": "t",
						"ext_id": "659003000000",
						"ext_name": "图木舒克市"
					}
				]
			},
			{
				"id": "659004",
				"pid": 65,
				"deep": 1,
				"name": "五家渠",
				"pinyin": "wu jia qu",
				"pinyin_prefix": "w",
				"ext_id": "659004000000",
				"ext_name": "五家渠市",
				"childs": [
					{
						"id": "659004000",
						"pid": 659004,
						"deep": 2,
						"name": "五家渠",
						"pinyin": "wu jia qu",
						"pinyin_prefix": "w",
						"ext_id": "659004000000",
						"ext_name": "五家渠市"
					}
				]
			},
			{
				"id": "659005",
				"pid": 65,
				"deep": 1,
				"name": "北屯",
				"pinyin": "bei tun",
				"pinyin_prefix": "b",
				"ext_id": "659005000000",
				"ext_name": "北屯市",
				"childs": [
					{
						"id": "659005000",
						"pid": 659005,
						"deep": 2,
						"name": "北屯",
						"pinyin": "bei tun",
						"pinyin_prefix": "b",
						"ext_id": "659005000000",
						"ext_name": "北屯市"
					}
				]
			},
			{
				"id": "659006",
				"pid": 65,
				"deep": 1,
				"name": "铁门关",
				"pinyin": "tie men guan",
				"pinyin_prefix": "t",
				"ext_id": "659006000000",
				"ext_name": "铁门关市",
				"childs": [
					{
						"id": "659006000",
						"pid": 659006,
						"deep": 2,
						"name": "铁门关",
						"pinyin": "tie men guan",
						"pinyin_prefix": "t",
						"ext_id": "659006000000",
						"ext_name": "铁门关市"
					}
				]
			},
			{
				"id": "659007",
				"pid": 65,
				"deep": 1,
				"name": "双河",
				"pinyin": "shuang he",
				"pinyin_prefix": "s",
				"ext_id": "659007000000",
				"ext_name": "双河市",
				"childs": [
					{
						"id": "659007000",
						"pid": 659007,
						"deep": 2,
						"name": "双河",
						"pinyin": "shuang he",
						"pinyin_prefix": "s",
						"ext_id": "659007000000",
						"ext_name": "双河市"
					}
				]
			},
			{
				"id": "659008",
				"pid": 65,
				"deep": 1,
				"name": "可克达拉",
				"pinyin": "ke ke da la",
				"pinyin_prefix": "k",
				"ext_id": "659008000000",
				"ext_name": "可克达拉市",
				"childs": [
					{
						"id": "659008000",
						"pid": 659008,
						"deep": 2,
						"name": "可克达拉",
						"pinyin": "ke ke da la",
						"pinyin_prefix": "k",
						"ext_id": "659008000000",
						"ext_name": "可克达拉市"
					}
				]
			},
			{
				"id": "659009",
				"pid": 65,
				"deep": 1,
				"name": "昆玉",
				"pinyin": "kun yu",
				"pinyin_prefix": "k",
				"ext_id": "659009000000",
				"ext_name": "昆玉市",
				"childs": [
					{
						"id": "659009000",
						"pid": 659009,
						"deep": 2,
						"name": "昆玉",
						"pinyin": "kun yu",
						"pinyin_prefix": "k",
						"ext_id": "659009000000",
						"ext_name": "昆玉市"
					}
				]
			},
			{
				"id": "659010",
				"pid": 65,
				"deep": 1,
				"name": "胡杨河",
				"pinyin": "hu yang he",
				"pinyin_prefix": "h",
				"ext_id": "659010000000",
				"ext_name": "胡杨河市",
				"childs": [
					{
						"id": "659010000",
						"pid": 659010,
						"deep": 2,
						"name": "胡杨河",
						"pinyin": "hu yang he",
						"pinyin_prefix": "h",
						"ext_id": "659010000000",
						"ext_name": "胡杨河市"
					}
				]
			},
			{
				"id": "659011",
				"pid": 65,
				"deep": 1,
				"name": "新星",
				"pinyin": "xin xing",
				"pinyin_prefix": "x",
				"ext_id": "659011000000",
				"ext_name": "新星市",
				"childs": [
					{
						"id": "659011000",
						"pid": 659011,
						"deep": 2,
						"name": "新星",
						"pinyin": "xin xing",
						"pinyin_prefix": "x",
						"ext_id": "659011000000",
						"ext_name": "新星市"
					}
				]
			}
		]
	},
	{
		"id": "71",
		"pid": 0,
		"deep": 0,
		"name": "台湾",
		"pinyin": "tai wan",
		"pinyin_prefix": "~3",
		"ext_id": "710000000000",
		"ext_name": "台湾省",
		"childs": [
			{
				"id": "7101",
				"pid": 71,
				"deep": 1,
				"name": "台北",
				"pinyin": "tai bei",
				"pinyin_prefix": "t",
				"ext_id": "710100000000",
				"ext_name": "台北市",
				"childs": [
					{
						"id": "710101",
						"pid": 7101,
						"deep": 2,
						"name": "中正",
						"pinyin": "zhong zheng",
						"pinyin_prefix": "z",
						"ext_id": "710101000000",
						"ext_name": "中正区"
					},
					{
						"id": "710102",
						"pid": 7101,
						"deep": 2,
						"name": "大同",
						"pinyin": "da tong",
						"pinyin_prefix": "d",
						"ext_id": "710102000000",
						"ext_name": "大同区"
					},
					{
						"id": "710103",
						"pid": 7101,
						"deep": 2,
						"name": "中山",
						"pinyin": "zhong shan",
						"pinyin_prefix": "z",
						"ext_id": "710103000000",
						"ext_name": "中山区"
					},
					{
						"id": "710104",
						"pid": 7101,
						"deep": 2,
						"name": "松山",
						"pinyin": "song shan",
						"pinyin_prefix": "s",
						"ext_id": "710104000000",
						"ext_name": "松山区"
					},
					{
						"id": "710105",
						"pid": 7101,
						"deep": 2,
						"name": "大安",
						"pinyin": "da an",
						"pinyin_prefix": "d",
						"ext_id": "710105000000",
						"ext_name": "大安区"
					},
					{
						"id": "710106",
						"pid": 7101,
						"deep": 2,
						"name": "万华",
						"pinyin": "wan hua",
						"pinyin_prefix": "w",
						"ext_id": "710106000000",
						"ext_name": "万华区"
					},
					{
						"id": "710107",
						"pid": 7101,
						"deep": 2,
						"name": "信义",
						"pinyin": "xin yi",
						"pinyin_prefix": "x",
						"ext_id": "710107000000",
						"ext_name": "信义区"
					},
					{
						"id": "710108",
						"pid": 7101,
						"deep": 2,
						"name": "士林",
						"pinyin": "shi lin",
						"pinyin_prefix": "s",
						"ext_id": "710108000000",
						"ext_name": "士林区"
					},
					{
						"id": "710109",
						"pid": 7101,
						"deep": 2,
						"name": "北投",
						"pinyin": "bei tou",
						"pinyin_prefix": "b",
						"ext_id": "710109000000",
						"ext_name": "北投区"
					},
					{
						"id": "710110",
						"pid": 7101,
						"deep": 2,
						"name": "内湖",
						"pinyin": "nei hu",
						"pinyin_prefix": "n",
						"ext_id": "710110000000",
						"ext_name": "内湖区"
					},
					{
						"id": "710111",
						"pid": 7101,
						"deep": 2,
						"name": "南港",
						"pinyin": "nan gang",
						"pinyin_prefix": "n",
						"ext_id": "710111000000",
						"ext_name": "南港区"
					},
					{
						"id": "710112",
						"pid": 7101,
						"deep": 2,
						"name": "文山",
						"pinyin": "wen shan",
						"pinyin_prefix": "w",
						"ext_id": "710112000000",
						"ext_name": "文山区"
					}
				]
			},
			{
				"id": "7102",
				"pid": 71,
				"deep": 1,
				"name": "高雄",
				"pinyin": "gao xiong",
				"pinyin_prefix": "g",
				"ext_id": "710200000000",
				"ext_name": "高雄市",
				"childs": [
					{
						"id": "710201",
						"pid": 7102,
						"deep": 2,
						"name": "新兴",
						"pinyin": "xin xing",
						"pinyin_prefix": "x",
						"ext_id": "710201000000",
						"ext_name": "新兴区"
					},
					{
						"id": "710202",
						"pid": 7102,
						"deep": 2,
						"name": "前金",
						"pinyin": "qian jin",
						"pinyin_prefix": "q",
						"ext_id": "710202000000",
						"ext_name": "前金区"
					},
					{
						"id": "710203",
						"pid": 7102,
						"deep": 2,
						"name": "苓雅",
						"pinyin": "ling ya",
						"pinyin_prefix": "l",
						"ext_id": "710203000000",
						"ext_name": "苓雅区"
					},
					{
						"id": "710204",
						"pid": 7102,
						"deep": 2,
						"name": "盐埕",
						"pinyin": "yan cheng",
						"pinyin_prefix": "y",
						"ext_id": "710204000000",
						"ext_name": "盐埕区"
					},
					{
						"id": "710205",
						"pid": 7102,
						"deep": 2,
						"name": "鼓山",
						"pinyin": "gu shan",
						"pinyin_prefix": "g",
						"ext_id": "710205000000",
						"ext_name": "鼓山区"
					},
					{
						"id": "710206",
						"pid": 7102,
						"deep": 2,
						"name": "旗津",
						"pinyin": "qi jin",
						"pinyin_prefix": "q",
						"ext_id": "710206000000",
						"ext_name": "旗津区"
					},
					{
						"id": "710207",
						"pid": 7102,
						"deep": 2,
						"name": "前镇",
						"pinyin": "qian zhen",
						"pinyin_prefix": "q",
						"ext_id": "710207000000",
						"ext_name": "前镇区"
					},
					{
						"id": "710208",
						"pid": 7102,
						"deep": 2,
						"name": "三民",
						"pinyin": "san min",
						"pinyin_prefix": "s",
						"ext_id": "710208000000",
						"ext_name": "三民区"
					},
					{
						"id": "710209",
						"pid": 7102,
						"deep": 2,
						"name": "左营",
						"pinyin": "zuo ying",
						"pinyin_prefix": "z",
						"ext_id": "710209000000",
						"ext_name": "左营区"
					},
					{
						"id": "710210",
						"pid": 7102,
						"deep": 2,
						"name": "楠梓",
						"pinyin": "nan zi",
						"pinyin_prefix": "n",
						"ext_id": "710210000000",
						"ext_name": "楠梓区"
					},
					{
						"id": "710211",
						"pid": 7102,
						"deep": 2,
						"name": "小港",
						"pinyin": "xiao gang",
						"pinyin_prefix": "x",
						"ext_id": "710211000000",
						"ext_name": "小港区"
					},
					{
						"id": "710242",
						"pid": 7102,
						"deep": 2,
						"name": "仁武",
						"pinyin": "ren wu",
						"pinyin_prefix": "r",
						"ext_id": "710242000000",
						"ext_name": "仁武区"
					},
					{
						"id": "710243",
						"pid": 7102,
						"deep": 2,
						"name": "大社",
						"pinyin": "da she",
						"pinyin_prefix": "d",
						"ext_id": "710243000000",
						"ext_name": "大社区"
					},
					{
						"id": "710244",
						"pid": 7102,
						"deep": 2,
						"name": "冈山",
						"pinyin": "gang shan",
						"pinyin_prefix": "g",
						"ext_id": "710244000000",
						"ext_name": "冈山区"
					},
					{
						"id": "710245",
						"pid": 7102,
						"deep": 2,
						"name": "路竹",
						"pinyin": "lu zhu",
						"pinyin_prefix": "l",
						"ext_id": "710245000000",
						"ext_name": "路竹区"
					},
					{
						"id": "710246",
						"pid": 7102,
						"deep": 2,
						"name": "阿莲",
						"pinyin": "a lian",
						"pinyin_prefix": "a",
						"ext_id": "710246000000",
						"ext_name": "阿莲区"
					},
					{
						"id": "710247",
						"pid": 7102,
						"deep": 2,
						"name": "田寮",
						"pinyin": "tian liao",
						"pinyin_prefix": "t",
						"ext_id": "710247000000",
						"ext_name": "田寮区"
					},
					{
						"id": "710248",
						"pid": 7102,
						"deep": 2,
						"name": "燕巢",
						"pinyin": "yan chao",
						"pinyin_prefix": "y",
						"ext_id": "710248000000",
						"ext_name": "燕巢区"
					},
					{
						"id": "710249",
						"pid": 7102,
						"deep": 2,
						"name": "桥头",
						"pinyin": "qiao tou",
						"pinyin_prefix": "q",
						"ext_id": "710249000000",
						"ext_name": "桥头区"
					},
					{
						"id": "710250",
						"pid": 7102,
						"deep": 2,
						"name": "梓官",
						"pinyin": "zi guan",
						"pinyin_prefix": "z",
						"ext_id": "710250000000",
						"ext_name": "梓官区"
					},
					{
						"id": "710251",
						"pid": 7102,
						"deep": 2,
						"name": "弥陀",
						"pinyin": "mi tuo",
						"pinyin_prefix": "m",
						"ext_id": "710251000000",
						"ext_name": "弥陀区"
					},
					{
						"id": "710252",
						"pid": 7102,
						"deep": 2,
						"name": "永安",
						"pinyin": "yong an",
						"pinyin_prefix": "y",
						"ext_id": "710252000000",
						"ext_name": "永安区"
					},
					{
						"id": "710253",
						"pid": 7102,
						"deep": 2,
						"name": "湖内",
						"pinyin": "hu nei",
						"pinyin_prefix": "h",
						"ext_id": "710253000000",
						"ext_name": "湖内区"
					},
					{
						"id": "710254",
						"pid": 7102,
						"deep": 2,
						"name": "凤山",
						"pinyin": "feng shan",
						"pinyin_prefix": "f",
						"ext_id": "710254000000",
						"ext_name": "凤山区"
					},
					{
						"id": "710255",
						"pid": 7102,
						"deep": 2,
						"name": "大寮",
						"pinyin": "da liao",
						"pinyin_prefix": "d",
						"ext_id": "710255000000",
						"ext_name": "大寮区"
					},
					{
						"id": "710256",
						"pid": 7102,
						"deep": 2,
						"name": "林园",
						"pinyin": "lin yuan",
						"pinyin_prefix": "l",
						"ext_id": "710256000000",
						"ext_name": "林园区"
					},
					{
						"id": "710257",
						"pid": 7102,
						"deep": 2,
						"name": "鸟松",
						"pinyin": "niao song",
						"pinyin_prefix": "n",
						"ext_id": "710257000000",
						"ext_name": "鸟松区"
					},
					{
						"id": "710258",
						"pid": 7102,
						"deep": 2,
						"name": "大树",
						"pinyin": "da shu",
						"pinyin_prefix": "d",
						"ext_id": "710258000000",
						"ext_name": "大树区"
					},
					{
						"id": "710259",
						"pid": 7102,
						"deep": 2,
						"name": "旗山",
						"pinyin": "qi shan",
						"pinyin_prefix": "q",
						"ext_id": "710259000000",
						"ext_name": "旗山区"
					},
					{
						"id": "710260",
						"pid": 7102,
						"deep": 2,
						"name": "美浓",
						"pinyin": "mei nong",
						"pinyin_prefix": "m",
						"ext_id": "710260000000",
						"ext_name": "美浓区"
					},
					{
						"id": "710261",
						"pid": 7102,
						"deep": 2,
						"name": "六龟",
						"pinyin": "liu gui",
						"pinyin_prefix": "l",
						"ext_id": "710261000000",
						"ext_name": "六龟区"
					},
					{
						"id": "710262",
						"pid": 7102,
						"deep": 2,
						"name": "内门",
						"pinyin": "nei men",
						"pinyin_prefix": "n",
						"ext_id": "710262000000",
						"ext_name": "内门区"
					},
					{
						"id": "710263",
						"pid": 7102,
						"deep": 2,
						"name": "杉林",
						"pinyin": "shan lin",
						"pinyin_prefix": "s",
						"ext_id": "710263000000",
						"ext_name": "杉林区"
					},
					{
						"id": "710264",
						"pid": 7102,
						"deep": 2,
						"name": "甲仙",
						"pinyin": "jia xian",
						"pinyin_prefix": "j",
						"ext_id": "710264000000",
						"ext_name": "甲仙区"
					},
					{
						"id": "710265",
						"pid": 7102,
						"deep": 2,
						"name": "桃源",
						"pinyin": "tao yuan",
						"pinyin_prefix": "t",
						"ext_id": "710265000000",
						"ext_name": "桃源区"
					},
					{
						"id": "710266",
						"pid": 7102,
						"deep": 2,
						"name": "那玛夏",
						"pinyin": "na ma xia",
						"pinyin_prefix": "n",
						"ext_id": "710266000000",
						"ext_name": "那玛夏区"
					},
					{
						"id": "710267",
						"pid": 7102,
						"deep": 2,
						"name": "茂林",
						"pinyin": "mao lin",
						"pinyin_prefix": "m",
						"ext_id": "710267000000",
						"ext_name": "茂林区"
					},
					{
						"id": "710268",
						"pid": 7102,
						"deep": 2,
						"name": "茄萣",
						"pinyin": "qie ding",
						"pinyin_prefix": "q",
						"ext_id": "710268000000",
						"ext_name": "茄萣区"
					}
				]
			},
			{
				"id": "7103",
				"pid": 71,
				"deep": 1,
				"name": "台南",
				"pinyin": "tai nan",
				"pinyin_prefix": "t",
				"ext_id": "710300000000",
				"ext_name": "台南市",
				"childs": [
					{
						"id": "710301",
						"pid": 7103,
						"deep": 2,
						"name": "中西",
						"pinyin": "zhong xi",
						"pinyin_prefix": "z",
						"ext_id": "710301000000",
						"ext_name": "中西区"
					},
					{
						"id": "710302",
						"pid": 7103,
						"deep": 2,
						"name": "东区",
						"pinyin": "dong qu",
						"pinyin_prefix": "d",
						"ext_id": "710302000000",
						"ext_name": "东区"
					},
					{
						"id": "710303",
						"pid": 7103,
						"deep": 2,
						"name": "南区",
						"pinyin": "nan qu",
						"pinyin_prefix": "n",
						"ext_id": "710303000000",
						"ext_name": "南区"
					},
					{
						"id": "710304",
						"pid": 7103,
						"deep": 2,
						"name": "北区",
						"pinyin": "bei qu",
						"pinyin_prefix": "b",
						"ext_id": "710304000000",
						"ext_name": "北区"
					},
					{
						"id": "710305",
						"pid": 7103,
						"deep": 2,
						"name": "安平",
						"pinyin": "an ping",
						"pinyin_prefix": "a",
						"ext_id": "710305000000",
						"ext_name": "安平区"
					},
					{
						"id": "710306",
						"pid": 7103,
						"deep": 2,
						"name": "安南",
						"pinyin": "an nan",
						"pinyin_prefix": "a",
						"ext_id": "710306000000",
						"ext_name": "安南区"
					},
					{
						"id": "710339",
						"pid": 7103,
						"deep": 2,
						"name": "永康",
						"pinyin": "yong kang",
						"pinyin_prefix": "y",
						"ext_id": "710339000000",
						"ext_name": "永康区"
					},
					{
						"id": "710340",
						"pid": 7103,
						"deep": 2,
						"name": "归仁",
						"pinyin": "gui ren",
						"pinyin_prefix": "g",
						"ext_id": "710340000000",
						"ext_name": "归仁区"
					},
					{
						"id": "710341",
						"pid": 7103,
						"deep": 2,
						"name": "新化",
						"pinyin": "xin hua",
						"pinyin_prefix": "x",
						"ext_id": "710341000000",
						"ext_name": "新化区"
					},
					{
						"id": "710342",
						"pid": 7103,
						"deep": 2,
						"name": "左镇",
						"pinyin": "zuo zhen",
						"pinyin_prefix": "z",
						"ext_id": "710342000000",
						"ext_name": "左镇区"
					},
					{
						"id": "710343",
						"pid": 7103,
						"deep": 2,
						"name": "玉井",
						"pinyin": "yu jing",
						"pinyin_prefix": "y",
						"ext_id": "710343000000",
						"ext_name": "玉井区"
					},
					{
						"id": "710344",
						"pid": 7103,
						"deep": 2,
						"name": "楠西",
						"pinyin": "nan xi",
						"pinyin_prefix": "n",
						"ext_id": "710344000000",
						"ext_name": "楠西区"
					},
					{
						"id": "710345",
						"pid": 7103,
						"deep": 2,
						"name": "南化",
						"pinyin": "nan hua",
						"pinyin_prefix": "n",
						"ext_id": "710345000000",
						"ext_name": "南化区"
					},
					{
						"id": "710346",
						"pid": 7103,
						"deep": 2,
						"name": "仁德",
						"pinyin": "ren de",
						"pinyin_prefix": "r",
						"ext_id": "710346000000",
						"ext_name": "仁德区"
					},
					{
						"id": "710347",
						"pid": 7103,
						"deep": 2,
						"name": "关庙",
						"pinyin": "guan miao",
						"pinyin_prefix": "g",
						"ext_id": "710347000000",
						"ext_name": "关庙区"
					},
					{
						"id": "710348",
						"pid": 7103,
						"deep": 2,
						"name": "龙崎",
						"pinyin": "long qi",
						"pinyin_prefix": "l",
						"ext_id": "710348000000",
						"ext_name": "龙崎区"
					},
					{
						"id": "710349",
						"pid": 7103,
						"deep": 2,
						"name": "官田",
						"pinyin": "guan tian",
						"pinyin_prefix": "g",
						"ext_id": "710349000000",
						"ext_name": "官田区"
					},
					{
						"id": "710350",
						"pid": 7103,
						"deep": 2,
						"name": "麻豆",
						"pinyin": "ma dou",
						"pinyin_prefix": "m",
						"ext_id": "710350000000",
						"ext_name": "麻豆区"
					},
					{
						"id": "710351",
						"pid": 7103,
						"deep": 2,
						"name": "佳里",
						"pinyin": "jia li",
						"pinyin_prefix": "j",
						"ext_id": "710351000000",
						"ext_name": "佳里区"
					},
					{
						"id": "710352",
						"pid": 7103,
						"deep": 2,
						"name": "西港",
						"pinyin": "xi gang",
						"pinyin_prefix": "x",
						"ext_id": "710352000000",
						"ext_name": "西港区"
					},
					{
						"id": "710353",
						"pid": 7103,
						"deep": 2,
						"name": "七股",
						"pinyin": "qi gu",
						"pinyin_prefix": "q",
						"ext_id": "710353000000",
						"ext_name": "七股区"
					},
					{
						"id": "710354",
						"pid": 7103,
						"deep": 2,
						"name": "将军",
						"pinyin": "jiang jun",
						"pinyin_prefix": "j",
						"ext_id": "710354000000",
						"ext_name": "将军区"
					},
					{
						"id": "710355",
						"pid": 7103,
						"deep": 2,
						"name": "学甲",
						"pinyin": "xue jia",
						"pinyin_prefix": "x",
						"ext_id": "710355000000",
						"ext_name": "学甲区"
					},
					{
						"id": "710356",
						"pid": 7103,
						"deep": 2,
						"name": "北门",
						"pinyin": "bei men",
						"pinyin_prefix": "b",
						"ext_id": "710356000000",
						"ext_name": "北门区"
					},
					{
						"id": "710357",
						"pid": 7103,
						"deep": 2,
						"name": "新营",
						"pinyin": "xin ying",
						"pinyin_prefix": "x",
						"ext_id": "710357000000",
						"ext_name": "新营区"
					},
					{
						"id": "710358",
						"pid": 7103,
						"deep": 2,
						"name": "后壁",
						"pinyin": "hou bi",
						"pinyin_prefix": "h",
						"ext_id": "710358000000",
						"ext_name": "后壁区"
					},
					{
						"id": "710359",
						"pid": 7103,
						"deep": 2,
						"name": "白河",
						"pinyin": "bai he",
						"pinyin_prefix": "b",
						"ext_id": "710359000000",
						"ext_name": "白河区"
					},
					{
						"id": "710360",
						"pid": 7103,
						"deep": 2,
						"name": "东山",
						"pinyin": "dong shan",
						"pinyin_prefix": "d",
						"ext_id": "710360000000",
						"ext_name": "东山区"
					},
					{
						"id": "710361",
						"pid": 7103,
						"deep": 2,
						"name": "六甲",
						"pinyin": "liu jia",
						"pinyin_prefix": "l",
						"ext_id": "710361000000",
						"ext_name": "六甲区"
					},
					{
						"id": "710362",
						"pid": 7103,
						"deep": 2,
						"name": "下营",
						"pinyin": "xia ying",
						"pinyin_prefix": "x",
						"ext_id": "710362000000",
						"ext_name": "下营区"
					},
					{
						"id": "710363",
						"pid": 7103,
						"deep": 2,
						"name": "柳营",
						"pinyin": "liu ying",
						"pinyin_prefix": "l",
						"ext_id": "710363000000",
						"ext_name": "柳营区"
					},
					{
						"id": "710364",
						"pid": 7103,
						"deep": 2,
						"name": "盐水",
						"pinyin": "yan shui",
						"pinyin_prefix": "y",
						"ext_id": "710364000000",
						"ext_name": "盐水区"
					},
					{
						"id": "710365",
						"pid": 7103,
						"deep": 2,
						"name": "善化",
						"pinyin": "shan hua",
						"pinyin_prefix": "s",
						"ext_id": "710365000000",
						"ext_name": "善化区"
					},
					{
						"id": "710366",
						"pid": 7103,
						"deep": 2,
						"name": "大内",
						"pinyin": "da nei",
						"pinyin_prefix": "d",
						"ext_id": "710366000000",
						"ext_name": "大内区"
					},
					{
						"id": "710367",
						"pid": 7103,
						"deep": 2,
						"name": "山上",
						"pinyin": "shan shang",
						"pinyin_prefix": "s",
						"ext_id": "710367000000",
						"ext_name": "山上区"
					},
					{
						"id": "710368",
						"pid": 7103,
						"deep": 2,
						"name": "新市",
						"pinyin": "xin shi",
						"pinyin_prefix": "x",
						"ext_id": "710368000000",
						"ext_name": "新市区"
					},
					{
						"id": "710369",
						"pid": 7103,
						"deep": 2,
						"name": "安定",
						"pinyin": "an ding",
						"pinyin_prefix": "a",
						"ext_id": "710369000000",
						"ext_name": "安定区"
					}
				]
			},
			{
				"id": "7104",
				"pid": 71,
				"deep": 1,
				"name": "台中",
				"pinyin": "tai zhong",
				"pinyin_prefix": "t",
				"ext_id": "710400000000",
				"ext_name": "台中市",
				"childs": [
					{
						"id": "710401",
						"pid": 7104,
						"deep": 2,
						"name": "中区",
						"pinyin": "zhong qu",
						"pinyin_prefix": "z",
						"ext_id": "710401000000",
						"ext_name": "中区"
					},
					{
						"id": "710402",
						"pid": 7104,
						"deep": 2,
						"name": "东区",
						"pinyin": "dong qu",
						"pinyin_prefix": "d",
						"ext_id": "710402000000",
						"ext_name": "东区"
					},
					{
						"id": "710403",
						"pid": 7104,
						"deep": 2,
						"name": "南区",
						"pinyin": "nan qu",
						"pinyin_prefix": "n",
						"ext_id": "710403000000",
						"ext_name": "南区"
					},
					{
						"id": "710404",
						"pid": 7104,
						"deep": 2,
						"name": "西区",
						"pinyin": "xi qu",
						"pinyin_prefix": "x",
						"ext_id": "710404000000",
						"ext_name": "西区"
					},
					{
						"id": "710405",
						"pid": 7104,
						"deep": 2,
						"name": "北区",
						"pinyin": "bei qu",
						"pinyin_prefix": "b",
						"ext_id": "710405000000",
						"ext_name": "北区"
					},
					{
						"id": "710406",
						"pid": 7104,
						"deep": 2,
						"name": "北屯",
						"pinyin": "bei tun",
						"pinyin_prefix": "b",
						"ext_id": "710406000000",
						"ext_name": "北屯区"
					},
					{
						"id": "710407",
						"pid": 7104,
						"deep": 2,
						"name": "西屯",
						"pinyin": "xi tun",
						"pinyin_prefix": "x",
						"ext_id": "710407000000",
						"ext_name": "西屯区"
					},
					{
						"id": "710408",
						"pid": 7104,
						"deep": 2,
						"name": "南屯",
						"pinyin": "nan tun",
						"pinyin_prefix": "n",
						"ext_id": "710408000000",
						"ext_name": "南屯区"
					},
					{
						"id": "710431",
						"pid": 7104,
						"deep": 2,
						"name": "太平",
						"pinyin": "tai ping",
						"pinyin_prefix": "t",
						"ext_id": "710431000000",
						"ext_name": "太平区"
					},
					{
						"id": "710432",
						"pid": 7104,
						"deep": 2,
						"name": "大里",
						"pinyin": "da li",
						"pinyin_prefix": "d",
						"ext_id": "710432000000",
						"ext_name": "大里区"
					},
					{
						"id": "710433",
						"pid": 7104,
						"deep": 2,
						"name": "雾峰",
						"pinyin": "wu feng",
						"pinyin_prefix": "w",
						"ext_id": "710433000000",
						"ext_name": "雾峰区"
					},
					{
						"id": "710434",
						"pid": 7104,
						"deep": 2,
						"name": "乌日",
						"pinyin": "wu ri",
						"pinyin_prefix": "w",
						"ext_id": "710434000000",
						"ext_name": "乌日区"
					},
					{
						"id": "710435",
						"pid": 7104,
						"deep": 2,
						"name": "丰原",
						"pinyin": "feng yuan",
						"pinyin_prefix": "f",
						"ext_id": "710435000000",
						"ext_name": "丰原区"
					},
					{
						"id": "710436",
						"pid": 7104,
						"deep": 2,
						"name": "后里",
						"pinyin": "hou li",
						"pinyin_prefix": "h",
						"ext_id": "710436000000",
						"ext_name": "后里区"
					},
					{
						"id": "710437",
						"pid": 7104,
						"deep": 2,
						"name": "石冈",
						"pinyin": "shi gang",
						"pinyin_prefix": "s",
						"ext_id": "710437000000",
						"ext_name": "石冈区"
					},
					{
						"id": "710438",
						"pid": 7104,
						"deep": 2,
						"name": "东势",
						"pinyin": "dong shi",
						"pinyin_prefix": "d",
						"ext_id": "710438000000",
						"ext_name": "东势区"
					},
					{
						"id": "710439",
						"pid": 7104,
						"deep": 2,
						"name": "和平",
						"pinyin": "he ping",
						"pinyin_prefix": "h",
						"ext_id": "710439000000",
						"ext_name": "和平区"
					},
					{
						"id": "710440",
						"pid": 7104,
						"deep": 2,
						"name": "新社",
						"pinyin": "xin she",
						"pinyin_prefix": "x",
						"ext_id": "710440000000",
						"ext_name": "新社区"
					},
					{
						"id": "710441",
						"pid": 7104,
						"deep": 2,
						"name": "潭子",
						"pinyin": "tan zi",
						"pinyin_prefix": "t",
						"ext_id": "710441000000",
						"ext_name": "潭子区"
					},
					{
						"id": "710442",
						"pid": 7104,
						"deep": 2,
						"name": "大雅",
						"pinyin": "da ya",
						"pinyin_prefix": "d",
						"ext_id": "710442000000",
						"ext_name": "大雅区"
					},
					{
						"id": "710443",
						"pid": 7104,
						"deep": 2,
						"name": "神冈",
						"pinyin": "shen gang",
						"pinyin_prefix": "s",
						"ext_id": "710443000000",
						"ext_name": "神冈区"
					},
					{
						"id": "710444",
						"pid": 7104,
						"deep": 2,
						"name": "大肚",
						"pinyin": "da du",
						"pinyin_prefix": "d",
						"ext_id": "710444000000",
						"ext_name": "大肚区"
					},
					{
						"id": "710445",
						"pid": 7104,
						"deep": 2,
						"name": "沙鹿",
						"pinyin": "sha lu",
						"pinyin_prefix": "s",
						"ext_id": "710445000000",
						"ext_name": "沙鹿区"
					},
					{
						"id": "710446",
						"pid": 7104,
						"deep": 2,
						"name": "龙井",
						"pinyin": "long jing",
						"pinyin_prefix": "l",
						"ext_id": "710446000000",
						"ext_name": "龙井区"
					},
					{
						"id": "710447",
						"pid": 7104,
						"deep": 2,
						"name": "梧栖",
						"pinyin": "wu qi",
						"pinyin_prefix": "w",
						"ext_id": "710447000000",
						"ext_name": "梧栖区"
					},
					{
						"id": "710448",
						"pid": 7104,
						"deep": 2,
						"name": "清水",
						"pinyin": "qing shui",
						"pinyin_prefix": "q",
						"ext_id": "710448000000",
						"ext_name": "清水区"
					},
					{
						"id": "710449",
						"pid": 7104,
						"deep": 2,
						"name": "大甲",
						"pinyin": "da jia",
						"pinyin_prefix": "d",
						"ext_id": "710449000000",
						"ext_name": "大甲区"
					},
					{
						"id": "710450",
						"pid": 7104,
						"deep": 2,
						"name": "外埔",
						"pinyin": "wai bu",
						"pinyin_prefix": "w",
						"ext_id": "710450000000",
						"ext_name": "外埔区"
					},
					{
						"id": "710451",
						"pid": 7104,
						"deep": 2,
						"name": "大安",
						"pinyin": "da an",
						"pinyin_prefix": "d",
						"ext_id": "710451000000",
						"ext_name": "大安区"
					}
				]
			},
			{
				"id": "7106",
				"pid": 71,
				"deep": 1,
				"name": "南投",
				"pinyin": "nan tou",
				"pinyin_prefix": "n",
				"ext_id": "710600000000",
				"ext_name": "南投县",
				"childs": [
					{
						"id": "710614",
						"pid": 7106,
						"deep": 2,
						"name": "南投市",
						"pinyin": "nan tou shi",
						"pinyin_prefix": "n",
						"ext_id": "710614000000",
						"ext_name": "南投市"
					},
					{
						"id": "710615",
						"pid": 7106,
						"deep": 2,
						"name": "中寮",
						"pinyin": "zhong liao",
						"pinyin_prefix": "z",
						"ext_id": "710615000000",
						"ext_name": "中寮乡"
					},
					{
						"id": "710616",
						"pid": 7106,
						"deep": 2,
						"name": "草屯",
						"pinyin": "cao tun",
						"pinyin_prefix": "c",
						"ext_id": "710616000000",
						"ext_name": "草屯镇"
					},
					{
						"id": "710617",
						"pid": 7106,
						"deep": 2,
						"name": "国姓",
						"pinyin": "guo xing",
						"pinyin_prefix": "g",
						"ext_id": "710617000000",
						"ext_name": "国姓乡"
					},
					{
						"id": "710618",
						"pid": 7106,
						"deep": 2,
						"name": "埔里",
						"pinyin": "bu li",
						"pinyin_prefix": "b",
						"ext_id": "710618000000",
						"ext_name": "埔里镇"
					},
					{
						"id": "710619",
						"pid": 7106,
						"deep": 2,
						"name": "仁爱",
						"pinyin": "ren ai",
						"pinyin_prefix": "r",
						"ext_id": "710619000000",
						"ext_name": "仁爱乡"
					},
					{
						"id": "710620",
						"pid": 7106,
						"deep": 2,
						"name": "名间",
						"pinyin": "ming jian",
						"pinyin_prefix": "m",
						"ext_id": "710620000000",
						"ext_name": "名间乡"
					},
					{
						"id": "710621",
						"pid": 7106,
						"deep": 2,
						"name": "集集",
						"pinyin": "ji ji",
						"pinyin_prefix": "j",
						"ext_id": "710621000000",
						"ext_name": "集集镇"
					},
					{
						"id": "710622",
						"pid": 7106,
						"deep": 2,
						"name": "水里",
						"pinyin": "shui li",
						"pinyin_prefix": "s",
						"ext_id": "710622000000",
						"ext_name": "水里乡"
					},
					{
						"id": "710623",
						"pid": 7106,
						"deep": 2,
						"name": "鱼池",
						"pinyin": "yu chi",
						"pinyin_prefix": "y",
						"ext_id": "710623000000",
						"ext_name": "鱼池乡"
					},
					{
						"id": "710624",
						"pid": 7106,
						"deep": 2,
						"name": "信义",
						"pinyin": "xin yi",
						"pinyin_prefix": "x",
						"ext_id": "710624000000",
						"ext_name": "信义乡"
					},
					{
						"id": "710625",
						"pid": 7106,
						"deep": 2,
						"name": "竹山",
						"pinyin": "zhu shan",
						"pinyin_prefix": "z",
						"ext_id": "710625000000",
						"ext_name": "竹山镇"
					},
					{
						"id": "710626",
						"pid": 7106,
						"deep": 2,
						"name": "鹿谷",
						"pinyin": "lu gu",
						"pinyin_prefix": "l",
						"ext_id": "710626000000",
						"ext_name": "鹿谷乡"
					}
				]
			},
			{
				"id": "7107",
				"pid": 71,
				"deep": 1,
				"name": "基隆",
				"pinyin": "ji long",
				"pinyin_prefix": "j",
				"ext_id": "710700000000",
				"ext_name": "基隆市",
				"childs": [
					{
						"id": "710701",
						"pid": 7107,
						"deep": 2,
						"name": "仁爱",
						"pinyin": "ren ai",
						"pinyin_prefix": "r",
						"ext_id": "710701000000",
						"ext_name": "仁爱区"
					},
					{
						"id": "710702",
						"pid": 7107,
						"deep": 2,
						"name": "信义",
						"pinyin": "xin yi",
						"pinyin_prefix": "x",
						"ext_id": "710702000000",
						"ext_name": "信义区"
					},
					{
						"id": "710703",
						"pid": 7107,
						"deep": 2,
						"name": "中正",
						"pinyin": "zhong zheng",
						"pinyin_prefix": "z",
						"ext_id": "710703000000",
						"ext_name": "中正区"
					},
					{
						"id": "710704",
						"pid": 7107,
						"deep": 2,
						"name": "中山",
						"pinyin": "zhong shan",
						"pinyin_prefix": "z",
						"ext_id": "710704000000",
						"ext_name": "中山区"
					},
					{
						"id": "710705",
						"pid": 7107,
						"deep": 2,
						"name": "安乐",
						"pinyin": "an le",
						"pinyin_prefix": "a",
						"ext_id": "710705000000",
						"ext_name": "安乐区"
					},
					{
						"id": "710706",
						"pid": 7107,
						"deep": 2,
						"name": "暖暖",
						"pinyin": "nuan nuan",
						"pinyin_prefix": "n",
						"ext_id": "710706000000",
						"ext_name": "暖暖区"
					},
					{
						"id": "710707",
						"pid": 7107,
						"deep": 2,
						"name": "七堵",
						"pinyin": "qi du",
						"pinyin_prefix": "q",
						"ext_id": "710707000000",
						"ext_name": "七堵区"
					}
				]
			},
			{
				"id": "7108",
				"pid": 71,
				"deep": 1,
				"name": "新竹市",
				"pinyin": "xin zhu shi",
				"pinyin_prefix": "x",
				"ext_id": "710800000000",
				"ext_name": "新竹市",
				"childs": [
					{
						"id": "710801",
						"pid": 7108,
						"deep": 2,
						"name": "东区",
						"pinyin": "dong qu",
						"pinyin_prefix": "d",
						"ext_id": "710801000000",
						"ext_name": "东区"
					},
					{
						"id": "710802",
						"pid": 7108,
						"deep": 2,
						"name": "北区",
						"pinyin": "bei qu",
						"pinyin_prefix": "b",
						"ext_id": "710802000000",
						"ext_name": "北区"
					},
					{
						"id": "710803",
						"pid": 7108,
						"deep": 2,
						"name": "香山",
						"pinyin": "xiang shan",
						"pinyin_prefix": "x",
						"ext_id": "710803000000",
						"ext_name": "香山区"
					}
				]
			},
			{
				"id": "7109",
				"pid": 71,
				"deep": 1,
				"name": "嘉义市",
				"pinyin": "jia yi shi",
				"pinyin_prefix": "j",
				"ext_id": "710900000000",
				"ext_name": "嘉义市",
				"childs": [
					{
						"id": "710901",
						"pid": 7109,
						"deep": 2,
						"name": "东区",
						"pinyin": "dong qu",
						"pinyin_prefix": "d",
						"ext_id": "710901000000",
						"ext_name": "东区"
					},
					{
						"id": "710902",
						"pid": 7109,
						"deep": 2,
						"name": "西区",
						"pinyin": "xi qu",
						"pinyin_prefix": "x",
						"ext_id": "710902000000",
						"ext_name": "西区"
					}
				]
			},
			{
				"id": "7111",
				"pid": 71,
				"deep": 1,
				"name": "新北",
				"pinyin": "xin bei",
				"pinyin_prefix": "x",
				"ext_id": "711100000000",
				"ext_name": "新北市",
				"childs": [
					{
						"id": "711130",
						"pid": 7111,
						"deep": 2,
						"name": "万里",
						"pinyin": "wan li",
						"pinyin_prefix": "w",
						"ext_id": "711130000000",
						"ext_name": "万里区"
					},
					{
						"id": "711131",
						"pid": 7111,
						"deep": 2,
						"name": "金山",
						"pinyin": "jin shan",
						"pinyin_prefix": "j",
						"ext_id": "711131000000",
						"ext_name": "金山区"
					},
					{
						"id": "711132",
						"pid": 7111,
						"deep": 2,
						"name": "板桥",
						"pinyin": "ban qiao",
						"pinyin_prefix": "b",
						"ext_id": "711132000000",
						"ext_name": "板桥区"
					},
					{
						"id": "711133",
						"pid": 7111,
						"deep": 2,
						"name": "汐止",
						"pinyin": "xi zhi",
						"pinyin_prefix": "x",
						"ext_id": "711133000000",
						"ext_name": "汐止区"
					},
					{
						"id": "711134",
						"pid": 7111,
						"deep": 2,
						"name": "深坑",
						"pinyin": "shen keng",
						"pinyin_prefix": "s",
						"ext_id": "711134000000",
						"ext_name": "深坑区"
					},
					{
						"id": "711135",
						"pid": 7111,
						"deep": 2,
						"name": "石碇",
						"pinyin": "shi ding",
						"pinyin_prefix": "s",
						"ext_id": "711135000000",
						"ext_name": "石碇区"
					},
					{
						"id": "711136",
						"pid": 7111,
						"deep": 2,
						"name": "瑞芳",
						"pinyin": "rui fang",
						"pinyin_prefix": "r",
						"ext_id": "711136000000",
						"ext_name": "瑞芳区"
					},
					{
						"id": "711137",
						"pid": 7111,
						"deep": 2,
						"name": "平溪",
						"pinyin": "ping xi",
						"pinyin_prefix": "p",
						"ext_id": "711137000000",
						"ext_name": "平溪区"
					},
					{
						"id": "711138",
						"pid": 7111,
						"deep": 2,
						"name": "双溪",
						"pinyin": "shuang xi",
						"pinyin_prefix": "s",
						"ext_id": "711138000000",
						"ext_name": "双溪区"
					},
					{
						"id": "711139",
						"pid": 7111,
						"deep": 2,
						"name": "贡寮",
						"pinyin": "gong liao",
						"pinyin_prefix": "g",
						"ext_id": "711139000000",
						"ext_name": "贡寮区"
					},
					{
						"id": "711140",
						"pid": 7111,
						"deep": 2,
						"name": "新店",
						"pinyin": "xin dian",
						"pinyin_prefix": "x",
						"ext_id": "711140000000",
						"ext_name": "新店区"
					},
					{
						"id": "711141",
						"pid": 7111,
						"deep": 2,
						"name": "坪林",
						"pinyin": "ping lin",
						"pinyin_prefix": "p",
						"ext_id": "711141000000",
						"ext_name": "坪林区"
					},
					{
						"id": "711142",
						"pid": 7111,
						"deep": 2,
						"name": "乌来",
						"pinyin": "wu lai",
						"pinyin_prefix": "w",
						"ext_id": "711142000000",
						"ext_name": "乌来区"
					},
					{
						"id": "711143",
						"pid": 7111,
						"deep": 2,
						"name": "永和",
						"pinyin": "yong he",
						"pinyin_prefix": "y",
						"ext_id": "711143000000",
						"ext_name": "永和区"
					},
					{
						"id": "711144",
						"pid": 7111,
						"deep": 2,
						"name": "中和",
						"pinyin": "zhong he",
						"pinyin_prefix": "z",
						"ext_id": "711144000000",
						"ext_name": "中和区"
					},
					{
						"id": "711145",
						"pid": 7111,
						"deep": 2,
						"name": "土城",
						"pinyin": "tu cheng",
						"pinyin_prefix": "t",
						"ext_id": "711145000000",
						"ext_name": "土城区"
					},
					{
						"id": "711146",
						"pid": 7111,
						"deep": 2,
						"name": "三峡",
						"pinyin": "san xia",
						"pinyin_prefix": "s",
						"ext_id": "711146000000",
						"ext_name": "三峡区"
					},
					{
						"id": "711147",
						"pid": 7111,
						"deep": 2,
						"name": "树林",
						"pinyin": "shu lin",
						"pinyin_prefix": "s",
						"ext_id": "711147000000",
						"ext_name": "树林区"
					},
					{
						"id": "711148",
						"pid": 7111,
						"deep": 2,
						"name": "莺歌",
						"pinyin": "ying ge",
						"pinyin_prefix": "y",
						"ext_id": "711148000000",
						"ext_name": "莺歌区"
					},
					{
						"id": "711149",
						"pid": 7111,
						"deep": 2,
						"name": "三重",
						"pinyin": "san chong",
						"pinyin_prefix": "s",
						"ext_id": "711149000000",
						"ext_name": "三重区"
					},
					{
						"id": "711150",
						"pid": 7111,
						"deep": 2,
						"name": "新庄",
						"pinyin": "xin zhuang",
						"pinyin_prefix": "x",
						"ext_id": "711150000000",
						"ext_name": "新庄区"
					},
					{
						"id": "711151",
						"pid": 7111,
						"deep": 2,
						"name": "泰山",
						"pinyin": "tai shan",
						"pinyin_prefix": "t",
						"ext_id": "711151000000",
						"ext_name": "泰山区"
					},
					{
						"id": "711152",
						"pid": 7111,
						"deep": 2,
						"name": "林口",
						"pinyin": "lin kou",
						"pinyin_prefix": "l",
						"ext_id": "711152000000",
						"ext_name": "林口区"
					},
					{
						"id": "711153",
						"pid": 7111,
						"deep": 2,
						"name": "芦洲",
						"pinyin": "lu zhou",
						"pinyin_prefix": "l",
						"ext_id": "711153000000",
						"ext_name": "芦洲区"
					},
					{
						"id": "711154",
						"pid": 7111,
						"deep": 2,
						"name": "五股",
						"pinyin": "wu gu",
						"pinyin_prefix": "w",
						"ext_id": "711154000000",
						"ext_name": "五股区"
					},
					{
						"id": "711155",
						"pid": 7111,
						"deep": 2,
						"name": "八里",
						"pinyin": "ba li",
						"pinyin_prefix": "b",
						"ext_id": "711155000000",
						"ext_name": "八里区"
					},
					{
						"id": "711156",
						"pid": 7111,
						"deep": 2,
						"name": "淡水",
						"pinyin": "dan shui",
						"pinyin_prefix": "d",
						"ext_id": "711156000000",
						"ext_name": "淡水区"
					},
					{
						"id": "711157",
						"pid": 7111,
						"deep": 2,
						"name": "三芝",
						"pinyin": "san zhi",
						"pinyin_prefix": "s",
						"ext_id": "711157000000",
						"ext_name": "三芝区"
					},
					{
						"id": "711158",
						"pid": 7111,
						"deep": 2,
						"name": "石门",
						"pinyin": "shi men",
						"pinyin_prefix": "s",
						"ext_id": "711158000000",
						"ext_name": "石门区"
					}
				]
			},
			{
				"id": "7112",
				"pid": 71,
				"deep": 1,
				"name": "宜兰",
				"pinyin": "yi lan",
				"pinyin_prefix": "y",
				"ext_id": "711200000000",
				"ext_name": "宜兰县",
				"childs": [
					{
						"id": "711214",
						"pid": 7112,
						"deep": 2,
						"name": "宜兰市",
						"pinyin": "yi lan shi",
						"pinyin_prefix": "y",
						"ext_id": "711214000000",
						"ext_name": "宜兰市"
					},
					{
						"id": "711215",
						"pid": 7112,
						"deep": 2,
						"name": "头城",
						"pinyin": "tou cheng",
						"pinyin_prefix": "t",
						"ext_id": "711215000000",
						"ext_name": "头城镇"
					},
					{
						"id": "711216",
						"pid": 7112,
						"deep": 2,
						"name": "礁溪",
						"pinyin": "jiao xi",
						"pinyin_prefix": "j",
						"ext_id": "711216000000",
						"ext_name": "礁溪乡"
					},
					{
						"id": "711217",
						"pid": 7112,
						"deep": 2,
						"name": "壮围",
						"pinyin": "zhuang wei",
						"pinyin_prefix": "z",
						"ext_id": "711217000000",
						"ext_name": "壮围乡"
					},
					{
						"id": "711218",
						"pid": 7112,
						"deep": 2,
						"name": "员山",
						"pinyin": "yuan shan",
						"pinyin_prefix": "y",
						"ext_id": "711218000000",
						"ext_name": "员山乡"
					},
					{
						"id": "711219",
						"pid": 7112,
						"deep": 2,
						"name": "罗东",
						"pinyin": "luo dong",
						"pinyin_prefix": "l",
						"ext_id": "711219000000",
						"ext_name": "罗东镇"
					},
					{
						"id": "711220",
						"pid": 7112,
						"deep": 2,
						"name": "三星",
						"pinyin": "san xing",
						"pinyin_prefix": "s",
						"ext_id": "711220000000",
						"ext_name": "三星乡"
					},
					{
						"id": "711221",
						"pid": 7112,
						"deep": 2,
						"name": "大同",
						"pinyin": "da tong",
						"pinyin_prefix": "d",
						"ext_id": "711221000000",
						"ext_name": "大同乡"
					},
					{
						"id": "711222",
						"pid": 7112,
						"deep": 2,
						"name": "五结",
						"pinyin": "wu jie",
						"pinyin_prefix": "w",
						"ext_id": "711222000000",
						"ext_name": "五结乡"
					},
					{
						"id": "711223",
						"pid": 7112,
						"deep": 2,
						"name": "冬山",
						"pinyin": "dong shan",
						"pinyin_prefix": "d",
						"ext_id": "711223000000",
						"ext_name": "冬山乡"
					},
					{
						"id": "711224",
						"pid": 7112,
						"deep": 2,
						"name": "苏澳",
						"pinyin": "su ao",
						"pinyin_prefix": "s",
						"ext_id": "711224000000",
						"ext_name": "苏澳镇"
					},
					{
						"id": "711225",
						"pid": 7112,
						"deep": 2,
						"name": "南澳",
						"pinyin": "nan ao",
						"pinyin_prefix": "n",
						"ext_id": "711225000000",
						"ext_name": "南澳乡"
					}
				]
			},
			{
				"id": "7113",
				"pid": 71,
				"deep": 1,
				"name": "新竹县",
				"pinyin": "xin zhu xian",
				"pinyin_prefix": "x",
				"ext_id": "711300000000",
				"ext_name": "新竹县",
				"childs": [
					{
						"id": "711314",
						"pid": 7113,
						"deep": 2,
						"name": "竹北",
						"pinyin": "zhu bei",
						"pinyin_prefix": "z",
						"ext_id": "711314000000",
						"ext_name": "竹北市"
					},
					{
						"id": "711315",
						"pid": 7113,
						"deep": 2,
						"name": "湖口",
						"pinyin": "hu kou",
						"pinyin_prefix": "h",
						"ext_id": "711315000000",
						"ext_name": "湖口乡"
					},
					{
						"id": "711316",
						"pid": 7113,
						"deep": 2,
						"name": "新丰",
						"pinyin": "xin feng",
						"pinyin_prefix": "x",
						"ext_id": "711316000000",
						"ext_name": "新丰乡"
					},
					{
						"id": "711317",
						"pid": 7113,
						"deep": 2,
						"name": "新埔",
						"pinyin": "xin bu",
						"pinyin_prefix": "x",
						"ext_id": "711317000000",
						"ext_name": "新埔镇"
					},
					{
						"id": "711318",
						"pid": 7113,
						"deep": 2,
						"name": "关西",
						"pinyin": "guan xi",
						"pinyin_prefix": "g",
						"ext_id": "711318000000",
						"ext_name": "关西镇"
					},
					{
						"id": "711319",
						"pid": 7113,
						"deep": 2,
						"name": "芎林",
						"pinyin": "xiong lin",
						"pinyin_prefix": "x",
						"ext_id": "711319000000",
						"ext_name": "芎林乡"
					},
					{
						"id": "711320",
						"pid": 7113,
						"deep": 2,
						"name": "宝山",
						"pinyin": "bao shan",
						"pinyin_prefix": "b",
						"ext_id": "711320000000",
						"ext_name": "宝山乡"
					},
					{
						"id": "711321",
						"pid": 7113,
						"deep": 2,
						"name": "竹东",
						"pinyin": "zhu dong",
						"pinyin_prefix": "z",
						"ext_id": "711321000000",
						"ext_name": "竹东镇"
					},
					{
						"id": "711322",
						"pid": 7113,
						"deep": 2,
						"name": "五峰",
						"pinyin": "wu feng",
						"pinyin_prefix": "w",
						"ext_id": "711322000000",
						"ext_name": "五峰乡"
					},
					{
						"id": "711323",
						"pid": 7113,
						"deep": 2,
						"name": "横山",
						"pinyin": "heng shan",
						"pinyin_prefix": "h",
						"ext_id": "711323000000",
						"ext_name": "横山乡"
					},
					{
						"id": "711324",
						"pid": 7113,
						"deep": 2,
						"name": "尖石",
						"pinyin": "jian shi",
						"pinyin_prefix": "j",
						"ext_id": "711324000000",
						"ext_name": "尖石乡"
					},
					{
						"id": "711325",
						"pid": 7113,
						"deep": 2,
						"name": "北埔",
						"pinyin": "bei bu",
						"pinyin_prefix": "b",
						"ext_id": "711325000000",
						"ext_name": "北埔乡"
					},
					{
						"id": "711326",
						"pid": 7113,
						"deep": 2,
						"name": "峨眉",
						"pinyin": "e mei",
						"pinyin_prefix": "e",
						"ext_id": "711326000000",
						"ext_name": "峨眉乡"
					}
				]
			},
			{
				"id": "7114",
				"pid": 71,
				"deep": 1,
				"name": "桃园",
				"pinyin": "tao yuan",
				"pinyin_prefix": "t",
				"ext_id": "711400000000",
				"ext_name": "桃园市",
				"childs": [
					{
						"id": "711414",
						"pid": 7114,
						"deep": 2,
						"name": "中坜",
						"pinyin": "zhong li",
						"pinyin_prefix": "z",
						"ext_id": "711414000000",
						"ext_name": "中坜区"
					},
					{
						"id": "711415",
						"pid": 7114,
						"deep": 2,
						"name": "平镇",
						"pinyin": "ping zhen",
						"pinyin_prefix": "p",
						"ext_id": "711415000000",
						"ext_name": "平镇区"
					},
					{
						"id": "711416",
						"pid": 7114,
						"deep": 2,
						"name": "龙潭",
						"pinyin": "long tan",
						"pinyin_prefix": "l",
						"ext_id": "711416000000",
						"ext_name": "龙潭区"
					},
					{
						"id": "711417",
						"pid": 7114,
						"deep": 2,
						"name": "杨梅",
						"pinyin": "yang mei",
						"pinyin_prefix": "y",
						"ext_id": "711417000000",
						"ext_name": "杨梅区"
					},
					{
						"id": "711418",
						"pid": 7114,
						"deep": 2,
						"name": "新屋",
						"pinyin": "xin wu",
						"pinyin_prefix": "x",
						"ext_id": "711418000000",
						"ext_name": "新屋区"
					},
					{
						"id": "711419",
						"pid": 7114,
						"deep": 2,
						"name": "观音",
						"pinyin": "guan yin",
						"pinyin_prefix": "g",
						"ext_id": "711419000000",
						"ext_name": "观音区"
					},
					{
						"id": "711420",
						"pid": 7114,
						"deep": 2,
						"name": "桃园区",
						"pinyin": "tao yuan qu",
						"pinyin_prefix": "t",
						"ext_id": "711420000000",
						"ext_name": "桃园区"
					},
					{
						"id": "711421",
						"pid": 7114,
						"deep": 2,
						"name": "龟山",
						"pinyin": "gui shan",
						"pinyin_prefix": "g",
						"ext_id": "711421000000",
						"ext_name": "龟山区"
					},
					{
						"id": "711422",
						"pid": 7114,
						"deep": 2,
						"name": "八德",
						"pinyin": "ba de",
						"pinyin_prefix": "b",
						"ext_id": "711422000000",
						"ext_name": "八德区"
					},
					{
						"id": "711423",
						"pid": 7114,
						"deep": 2,
						"name": "大溪",
						"pinyin": "da xi",
						"pinyin_prefix": "d",
						"ext_id": "711423000000",
						"ext_name": "大溪区"
					},
					{
						"id": "711424",
						"pid": 7114,
						"deep": 2,
						"name": "复兴",
						"pinyin": "fu xing",
						"pinyin_prefix": "f",
						"ext_id": "711424000000",
						"ext_name": "复兴区"
					},
					{
						"id": "711425",
						"pid": 7114,
						"deep": 2,
						"name": "大园",
						"pinyin": "da yuan",
						"pinyin_prefix": "d",
						"ext_id": "711425000000",
						"ext_name": "大园区"
					},
					{
						"id": "711426",
						"pid": 7114,
						"deep": 2,
						"name": "芦竹",
						"pinyin": "lu zhu",
						"pinyin_prefix": "l",
						"ext_id": "711426000000",
						"ext_name": "芦竹区"
					}
				]
			},
			{
				"id": "7115",
				"pid": 71,
				"deep": 1,
				"name": "苗栗",
				"pinyin": "miao li",
				"pinyin_prefix": "m",
				"ext_id": "711500000000",
				"ext_name": "苗栗县",
				"childs": [
					{
						"id": "711519",
						"pid": 7115,
						"deep": 2,
						"name": "竹南",
						"pinyin": "zhu nan",
						"pinyin_prefix": "z",
						"ext_id": "711519000000",
						"ext_name": "竹南镇"
					},
					{
						"id": "711520",
						"pid": 7115,
						"deep": 2,
						"name": "头份",
						"pinyin": "tou fen",
						"pinyin_prefix": "t",
						"ext_id": "711520000000",
						"ext_name": "头份市"
					},
					{
						"id": "711521",
						"pid": 7115,
						"deep": 2,
						"name": "三湾",
						"pinyin": "san wan",
						"pinyin_prefix": "s",
						"ext_id": "711521000000",
						"ext_name": "三湾乡"
					},
					{
						"id": "711522",
						"pid": 7115,
						"deep": 2,
						"name": "南庄",
						"pinyin": "nan zhuang",
						"pinyin_prefix": "n",
						"ext_id": "711522000000",
						"ext_name": "南庄乡"
					},
					{
						"id": "711523",
						"pid": 7115,
						"deep": 2,
						"name": "狮潭",
						"pinyin": "shi tan",
						"pinyin_prefix": "s",
						"ext_id": "711523000000",
						"ext_name": "狮潭乡"
					},
					{
						"id": "711524",
						"pid": 7115,
						"deep": 2,
						"name": "后龙",
						"pinyin": "hou long",
						"pinyin_prefix": "h",
						"ext_id": "711524000000",
						"ext_name": "后龙镇"
					},
					{
						"id": "711525",
						"pid": 7115,
						"deep": 2,
						"name": "通霄",
						"pinyin": "tong xiao",
						"pinyin_prefix": "t",
						"ext_id": "711525000000",
						"ext_name": "通霄镇"
					},
					{
						"id": "711526",
						"pid": 7115,
						"deep": 2,
						"name": "苑里",
						"pinyin": "yuan li",
						"pinyin_prefix": "y",
						"ext_id": "711526000000",
						"ext_name": "苑里镇"
					},
					{
						"id": "711527",
						"pid": 7115,
						"deep": 2,
						"name": "苗栗市",
						"pinyin": "miao li shi",
						"pinyin_prefix": "m",
						"ext_id": "711527000000",
						"ext_name": "苗栗市"
					},
					{
						"id": "711528",
						"pid": 7115,
						"deep": 2,
						"name": "造桥",
						"pinyin": "zao qiao",
						"pinyin_prefix": "z",
						"ext_id": "711528000000",
						"ext_name": "造桥乡"
					},
					{
						"id": "711529",
						"pid": 7115,
						"deep": 2,
						"name": "头屋",
						"pinyin": "tou wu",
						"pinyin_prefix": "t",
						"ext_id": "711529000000",
						"ext_name": "头屋乡"
					},
					{
						"id": "711530",
						"pid": 7115,
						"deep": 2,
						"name": "公馆",
						"pinyin": "gong guan",
						"pinyin_prefix": "g",
						"ext_id": "711530000000",
						"ext_name": "公馆乡"
					},
					{
						"id": "711531",
						"pid": 7115,
						"deep": 2,
						"name": "大湖",
						"pinyin": "da hu",
						"pinyin_prefix": "d",
						"ext_id": "711531000000",
						"ext_name": "大湖乡"
					},
					{
						"id": "711532",
						"pid": 7115,
						"deep": 2,
						"name": "泰安",
						"pinyin": "tai an",
						"pinyin_prefix": "t",
						"ext_id": "711532000000",
						"ext_name": "泰安乡"
					},
					{
						"id": "711533",
						"pid": 7115,
						"deep": 2,
						"name": "铜锣",
						"pinyin": "tong luo",
						"pinyin_prefix": "t",
						"ext_id": "711533000000",
						"ext_name": "铜锣乡"
					},
					{
						"id": "711534",
						"pid": 7115,
						"deep": 2,
						"name": "三义",
						"pinyin": "san yi",
						"pinyin_prefix": "s",
						"ext_id": "711534000000",
						"ext_name": "三义乡"
					},
					{
						"id": "711535",
						"pid": 7115,
						"deep": 2,
						"name": "西湖",
						"pinyin": "xi hu",
						"pinyin_prefix": "x",
						"ext_id": "711535000000",
						"ext_name": "西湖乡"
					},
					{
						"id": "711536",
						"pid": 7115,
						"deep": 2,
						"name": "卓兰",
						"pinyin": "zhuo lan",
						"pinyin_prefix": "z",
						"ext_id": "711536000000",
						"ext_name": "卓兰镇"
					}
				]
			},
			{
				"id": "7117",
				"pid": 71,
				"deep": 1,
				"name": "彰化",
				"pinyin": "zhang hua",
				"pinyin_prefix": "z",
				"ext_id": "711700000000",
				"ext_name": "彰化县",
				"childs": [
					{
						"id": "711727",
						"pid": 7117,
						"deep": 2,
						"name": "彰化市",
						"pinyin": "zhang hua shi",
						"pinyin_prefix": "z",
						"ext_id": "711727000000",
						"ext_name": "彰化市"
					},
					{
						"id": "711728",
						"pid": 7117,
						"deep": 2,
						"name": "芬园",
						"pinyin": "fen yuan",
						"pinyin_prefix": "f",
						"ext_id": "711728000000",
						"ext_name": "芬园乡"
					},
					{
						"id": "711729",
						"pid": 7117,
						"deep": 2,
						"name": "花坛",
						"pinyin": "hua tan",
						"pinyin_prefix": "h",
						"ext_id": "711729000000",
						"ext_name": "花坛乡"
					},
					{
						"id": "711730",
						"pid": 7117,
						"deep": 2,
						"name": "秀水",
						"pinyin": "xiu shui",
						"pinyin_prefix": "x",
						"ext_id": "711730000000",
						"ext_name": "秀水乡"
					},
					{
						"id": "711731",
						"pid": 7117,
						"deep": 2,
						"name": "鹿港",
						"pinyin": "lu gang",
						"pinyin_prefix": "l",
						"ext_id": "711731000000",
						"ext_name": "鹿港镇"
					},
					{
						"id": "711732",
						"pid": 7117,
						"deep": 2,
						"name": "福兴",
						"pinyin": "fu xing",
						"pinyin_prefix": "f",
						"ext_id": "711732000000",
						"ext_name": "福兴乡"
					},
					{
						"id": "711733",
						"pid": 7117,
						"deep": 2,
						"name": "线西",
						"pinyin": "xian xi",
						"pinyin_prefix": "x",
						"ext_id": "711733000000",
						"ext_name": "线西乡"
					},
					{
						"id": "711734",
						"pid": 7117,
						"deep": 2,
						"name": "和美",
						"pinyin": "he mei",
						"pinyin_prefix": "h",
						"ext_id": "711734000000",
						"ext_name": "和美镇"
					},
					{
						"id": "711735",
						"pid": 7117,
						"deep": 2,
						"name": "伸港",
						"pinyin": "shen gang",
						"pinyin_prefix": "s",
						"ext_id": "711735000000",
						"ext_name": "伸港乡"
					},
					{
						"id": "711736",
						"pid": 7117,
						"deep": 2,
						"name": "员林",
						"pinyin": "yuan lin",
						"pinyin_prefix": "y",
						"ext_id": "711736000000",
						"ext_name": "员林市"
					},
					{
						"id": "711737",
						"pid": 7117,
						"deep": 2,
						"name": "社头",
						"pinyin": "she tou",
						"pinyin_prefix": "s",
						"ext_id": "711737000000",
						"ext_name": "社头乡"
					},
					{
						"id": "711738",
						"pid": 7117,
						"deep": 2,
						"name": "永靖",
						"pinyin": "yong jing",
						"pinyin_prefix": "y",
						"ext_id": "711738000000",
						"ext_name": "永靖乡"
					},
					{
						"id": "711739",
						"pid": 7117,
						"deep": 2,
						"name": "埔心",
						"pinyin": "bu xin",
						"pinyin_prefix": "b",
						"ext_id": "711739000000",
						"ext_name": "埔心乡"
					},
					{
						"id": "711740",
						"pid": 7117,
						"deep": 2,
						"name": "溪湖",
						"pinyin": "xi hu",
						"pinyin_prefix": "x",
						"ext_id": "711740000000",
						"ext_name": "溪湖镇"
					},
					{
						"id": "711741",
						"pid": 7117,
						"deep": 2,
						"name": "大村",
						"pinyin": "da cun",
						"pinyin_prefix": "d",
						"ext_id": "711741000000",
						"ext_name": "大村乡"
					},
					{
						"id": "711742",
						"pid": 7117,
						"deep": 2,
						"name": "埔盐",
						"pinyin": "bu yan",
						"pinyin_prefix": "b",
						"ext_id": "711742000000",
						"ext_name": "埔盐乡"
					},
					{
						"id": "711743",
						"pid": 7117,
						"deep": 2,
						"name": "田中",
						"pinyin": "tian zhong",
						"pinyin_prefix": "t",
						"ext_id": "711743000000",
						"ext_name": "田中镇"
					},
					{
						"id": "711744",
						"pid": 7117,
						"deep": 2,
						"name": "北斗",
						"pinyin": "bei dou",
						"pinyin_prefix": "b",
						"ext_id": "711744000000",
						"ext_name": "北斗镇"
					},
					{
						"id": "711745",
						"pid": 7117,
						"deep": 2,
						"name": "田尾",
						"pinyin": "tian wei",
						"pinyin_prefix": "t",
						"ext_id": "711745000000",
						"ext_name": "田尾乡"
					},
					{
						"id": "711746",
						"pid": 7117,
						"deep": 2,
						"name": "埤头",
						"pinyin": "pi tou",
						"pinyin_prefix": "p",
						"ext_id": "711746000000",
						"ext_name": "埤头乡"
					},
					{
						"id": "711747",
						"pid": 7117,
						"deep": 2,
						"name": "溪州",
						"pinyin": "xi zhou",
						"pinyin_prefix": "x",
						"ext_id": "711747000000",
						"ext_name": "溪州乡"
					},
					{
						"id": "711748",
						"pid": 7117,
						"deep": 2,
						"name": "竹塘",
						"pinyin": "zhu tang",
						"pinyin_prefix": "z",
						"ext_id": "711748000000",
						"ext_name": "竹塘乡"
					},
					{
						"id": "711749",
						"pid": 7117,
						"deep": 2,
						"name": "二林",
						"pinyin": "er lin",
						"pinyin_prefix": "e",
						"ext_id": "711749000000",
						"ext_name": "二林镇"
					},
					{
						"id": "711750",
						"pid": 7117,
						"deep": 2,
						"name": "大城",
						"pinyin": "da cheng",
						"pinyin_prefix": "d",
						"ext_id": "711750000000",
						"ext_name": "大城乡"
					},
					{
						"id": "711751",
						"pid": 7117,
						"deep": 2,
						"name": "芳苑",
						"pinyin": "fang yuan",
						"pinyin_prefix": "f",
						"ext_id": "711751000000",
						"ext_name": "芳苑乡"
					},
					{
						"id": "711752",
						"pid": 7117,
						"deep": 2,
						"name": "二水",
						"pinyin": "er shui",
						"pinyin_prefix": "e",
						"ext_id": "711752000000",
						"ext_name": "二水乡"
					}
				]
			},
			{
				"id": "7119",
				"pid": 71,
				"deep": 1,
				"name": "嘉义县",
				"pinyin": "jia yi xian",
				"pinyin_prefix": "j",
				"ext_id": "711900000000",
				"ext_name": "嘉义县",
				"childs": [
					{
						"id": "711919",
						"pid": 7119,
						"deep": 2,
						"name": "番路",
						"pinyin": "fan lu",
						"pinyin_prefix": "f",
						"ext_id": "711919000000",
						"ext_name": "番路乡"
					},
					{
						"id": "711920",
						"pid": 7119,
						"deep": 2,
						"name": "梅山",
						"pinyin": "mei shan",
						"pinyin_prefix": "m",
						"ext_id": "711920000000",
						"ext_name": "梅山乡"
					},
					{
						"id": "711921",
						"pid": 7119,
						"deep": 2,
						"name": "竹崎",
						"pinyin": "zhu qi",
						"pinyin_prefix": "z",
						"ext_id": "711921000000",
						"ext_name": "竹崎乡"
					},
					{
						"id": "711922",
						"pid": 7119,
						"deep": 2,
						"name": "阿里山",
						"pinyin": "a li shan",
						"pinyin_prefix": "a",
						"ext_id": "711922000000",
						"ext_name": "阿里山乡"
					},
					{
						"id": "711923",
						"pid": 7119,
						"deep": 2,
						"name": "中埔",
						"pinyin": "zhong bu",
						"pinyin_prefix": "z",
						"ext_id": "711923000000",
						"ext_name": "中埔乡"
					},
					{
						"id": "711924",
						"pid": 7119,
						"deep": 2,
						"name": "大埔",
						"pinyin": "da bu",
						"pinyin_prefix": "d",
						"ext_id": "711924000000",
						"ext_name": "大埔乡"
					},
					{
						"id": "711925",
						"pid": 7119,
						"deep": 2,
						"name": "水上",
						"pinyin": "shui shang",
						"pinyin_prefix": "s",
						"ext_id": "711925000000",
						"ext_name": "水上乡"
					},
					{
						"id": "711926",
						"pid": 7119,
						"deep": 2,
						"name": "鹿草",
						"pinyin": "lu cao",
						"pinyin_prefix": "l",
						"ext_id": "711926000000",
						"ext_name": "鹿草乡"
					},
					{
						"id": "711927",
						"pid": 7119,
						"deep": 2,
						"name": "太保",
						"pinyin": "tai bao",
						"pinyin_prefix": "t",
						"ext_id": "711927000000",
						"ext_name": "太保市"
					},
					{
						"id": "711928",
						"pid": 7119,
						"deep": 2,
						"name": "朴子",
						"pinyin": "piao zi",
						"pinyin_prefix": "p",
						"ext_id": "711928000000",
						"ext_name": "朴子市"
					},
					{
						"id": "711929",
						"pid": 7119,
						"deep": 2,
						"name": "东石",
						"pinyin": "dong shi",
						"pinyin_prefix": "d",
						"ext_id": "711929000000",
						"ext_name": "东石乡"
					},
					{
						"id": "711930",
						"pid": 7119,
						"deep": 2,
						"name": "六脚",
						"pinyin": "liu jiao",
						"pinyin_prefix": "l",
						"ext_id": "711930000000",
						"ext_name": "六脚乡"
					},
					{
						"id": "711931",
						"pid": 7119,
						"deep": 2,
						"name": "新港",
						"pinyin": "xin gang",
						"pinyin_prefix": "x",
						"ext_id": "711931000000",
						"ext_name": "新港乡"
					},
					{
						"id": "711932",
						"pid": 7119,
						"deep": 2,
						"name": "民雄",
						"pinyin": "min xiong",
						"pinyin_prefix": "m",
						"ext_id": "711932000000",
						"ext_name": "民雄乡"
					},
					{
						"id": "711933",
						"pid": 7119,
						"deep": 2,
						"name": "大林",
						"pinyin": "da lin",
						"pinyin_prefix": "d",
						"ext_id": "711933000000",
						"ext_name": "大林镇"
					},
					{
						"id": "711934",
						"pid": 7119,
						"deep": 2,
						"name": "溪口",
						"pinyin": "xi kou",
						"pinyin_prefix": "x",
						"ext_id": "711934000000",
						"ext_name": "溪口乡"
					},
					{
						"id": "711935",
						"pid": 7119,
						"deep": 2,
						"name": "义竹",
						"pinyin": "yi zhu",
						"pinyin_prefix": "y",
						"ext_id": "711935000000",
						"ext_name": "义竹乡"
					},
					{
						"id": "711936",
						"pid": 7119,
						"deep": 2,
						"name": "布袋",
						"pinyin": "bu dai",
						"pinyin_prefix": "b",
						"ext_id": "711936000000",
						"ext_name": "布袋镇"
					}
				]
			},
			{
				"id": "7121",
				"pid": 71,
				"deep": 1,
				"name": "云林",
				"pinyin": "yun lin",
				"pinyin_prefix": "y",
				"ext_id": "712100000000",
				"ext_name": "云林县",
				"childs": [
					{
						"id": "712121",
						"pid": 7121,
						"deep": 2,
						"name": "斗南",
						"pinyin": "dou nan",
						"pinyin_prefix": "d",
						"ext_id": "712121000000",
						"ext_name": "斗南镇"
					},
					{
						"id": "712122",
						"pid": 7121,
						"deep": 2,
						"name": "大埤",
						"pinyin": "da pi",
						"pinyin_prefix": "d",
						"ext_id": "712122000000",
						"ext_name": "大埤乡"
					},
					{
						"id": "712123",
						"pid": 7121,
						"deep": 2,
						"name": "虎尾",
						"pinyin": "hu wei",
						"pinyin_prefix": "h",
						"ext_id": "712123000000",
						"ext_name": "虎尾镇"
					},
					{
						"id": "712124",
						"pid": 7121,
						"deep": 2,
						"name": "土库",
						"pinyin": "tu ku",
						"pinyin_prefix": "t",
						"ext_id": "712124000000",
						"ext_name": "土库镇"
					},
					{
						"id": "712125",
						"pid": 7121,
						"deep": 2,
						"name": "褒忠",
						"pinyin": "bao zhong",
						"pinyin_prefix": "b",
						"ext_id": "712125000000",
						"ext_name": "褒忠乡"
					},
					{
						"id": "712126",
						"pid": 7121,
						"deep": 2,
						"name": "东势",
						"pinyin": "dong shi",
						"pinyin_prefix": "d",
						"ext_id": "712126000000",
						"ext_name": "东势乡"
					},
					{
						"id": "712127",
						"pid": 7121,
						"deep": 2,
						"name": "台西",
						"pinyin": "tai xi",
						"pinyin_prefix": "t",
						"ext_id": "712127000000",
						"ext_name": "台西乡"
					},
					{
						"id": "712128",
						"pid": 7121,
						"deep": 2,
						"name": "仑背",
						"pinyin": "lun bei",
						"pinyin_prefix": "l",
						"ext_id": "712128000000",
						"ext_name": "仑背乡"
					},
					{
						"id": "712129",
						"pid": 7121,
						"deep": 2,
						"name": "麦寮",
						"pinyin": "mai liao",
						"pinyin_prefix": "m",
						"ext_id": "712129000000",
						"ext_name": "麦寮乡"
					},
					{
						"id": "712130",
						"pid": 7121,
						"deep": 2,
						"name": "斗六",
						"pinyin": "dou liu",
						"pinyin_prefix": "d",
						"ext_id": "712130000000",
						"ext_name": "斗六市"
					},
					{
						"id": "712131",
						"pid": 7121,
						"deep": 2,
						"name": "林内",
						"pinyin": "lin nei",
						"pinyin_prefix": "l",
						"ext_id": "712131000000",
						"ext_name": "林内乡"
					},
					{
						"id": "712132",
						"pid": 7121,
						"deep": 2,
						"name": "古坑",
						"pinyin": "gu keng",
						"pinyin_prefix": "g",
						"ext_id": "712132000000",
						"ext_name": "古坑乡"
					},
					{
						"id": "712133",
						"pid": 7121,
						"deep": 2,
						"name": "莿桐",
						"pinyin": "ci tong",
						"pinyin_prefix": "c",
						"ext_id": "712133000000",
						"ext_name": "莿桐乡"
					},
					{
						"id": "712134",
						"pid": 7121,
						"deep": 2,
						"name": "西螺",
						"pinyin": "xi luo",
						"pinyin_prefix": "x",
						"ext_id": "712134000000",
						"ext_name": "西螺镇"
					},
					{
						"id": "712135",
						"pid": 7121,
						"deep": 2,
						"name": "二仑",
						"pinyin": "er lun",
						"pinyin_prefix": "e",
						"ext_id": "712135000000",
						"ext_name": "二仑乡"
					},
					{
						"id": "712136",
						"pid": 7121,
						"deep": 2,
						"name": "北港",
						"pinyin": "bei gang",
						"pinyin_prefix": "b",
						"ext_id": "712136000000",
						"ext_name": "北港镇"
					},
					{
						"id": "712137",
						"pid": 7121,
						"deep": 2,
						"name": "水林",
						"pinyin": "shui lin",
						"pinyin_prefix": "s",
						"ext_id": "712137000000",
						"ext_name": "水林乡"
					},
					{
						"id": "712138",
						"pid": 7121,
						"deep": 2,
						"name": "口湖",
						"pinyin": "kou hu",
						"pinyin_prefix": "k",
						"ext_id": "712138000000",
						"ext_name": "口湖乡"
					},
					{
						"id": "712139",
						"pid": 7121,
						"deep": 2,
						"name": "四湖",
						"pinyin": "si hu",
						"pinyin_prefix": "s",
						"ext_id": "712139000000",
						"ext_name": "四湖乡"
					},
					{
						"id": "712140",
						"pid": 7121,
						"deep": 2,
						"name": "元长",
						"pinyin": "yuan chang",
						"pinyin_prefix": "y",
						"ext_id": "712140000000",
						"ext_name": "元长乡"
					}
				]
			},
			{
				"id": "7124",
				"pid": 71,
				"deep": 1,
				"name": "屏东",
				"pinyin": "ping dong",
				"pinyin_prefix": "p",
				"ext_id": "712400000000",
				"ext_name": "屏东县",
				"childs": [
					{
						"id": "712434",
						"pid": 7124,
						"deep": 2,
						"name": "屏东市",
						"pinyin": "ping dong shi",
						"pinyin_prefix": "p",
						"ext_id": "712434000000",
						"ext_name": "屏东市"
					},
					{
						"id": "712435",
						"pid": 7124,
						"deep": 2,
						"name": "三地门",
						"pinyin": "san di men",
						"pinyin_prefix": "s",
						"ext_id": "712435000000",
						"ext_name": "三地门乡"
					},
					{
						"id": "712436",
						"pid": 7124,
						"deep": 2,
						"name": "雾台",
						"pinyin": "wu tai",
						"pinyin_prefix": "w",
						"ext_id": "712436000000",
						"ext_name": "雾台乡"
					},
					{
						"id": "712437",
						"pid": 7124,
						"deep": 2,
						"name": "玛家",
						"pinyin": "ma jia",
						"pinyin_prefix": "m",
						"ext_id": "712437000000",
						"ext_name": "玛家乡"
					},
					{
						"id": "712438",
						"pid": 7124,
						"deep": 2,
						"name": "九如",
						"pinyin": "jiu ru",
						"pinyin_prefix": "j",
						"ext_id": "712438000000",
						"ext_name": "九如乡"
					},
					{
						"id": "712439",
						"pid": 7124,
						"deep": 2,
						"name": "里港",
						"pinyin": "li gang",
						"pinyin_prefix": "l",
						"ext_id": "712439000000",
						"ext_name": "里港乡"
					},
					{
						"id": "712440",
						"pid": 7124,
						"deep": 2,
						"name": "高树",
						"pinyin": "gao shu",
						"pinyin_prefix": "g",
						"ext_id": "712440000000",
						"ext_name": "高树乡"
					},
					{
						"id": "712441",
						"pid": 7124,
						"deep": 2,
						"name": "盐埔",
						"pinyin": "yan bu",
						"pinyin_prefix": "y",
						"ext_id": "712441000000",
						"ext_name": "盐埔乡"
					},
					{
						"id": "712442",
						"pid": 7124,
						"deep": 2,
						"name": "长治",
						"pinyin": "chang zhi",
						"pinyin_prefix": "c",
						"ext_id": "712442000000",
						"ext_name": "长治乡"
					},
					{
						"id": "712443",
						"pid": 7124,
						"deep": 2,
						"name": "麟洛",
						"pinyin": "lin luo",
						"pinyin_prefix": "l",
						"ext_id": "712443000000",
						"ext_name": "麟洛乡"
					},
					{
						"id": "712444",
						"pid": 7124,
						"deep": 2,
						"name": "竹田",
						"pinyin": "zhu tian",
						"pinyin_prefix": "z",
						"ext_id": "712444000000",
						"ext_name": "竹田乡"
					},
					{
						"id": "712445",
						"pid": 7124,
						"deep": 2,
						"name": "内埔",
						"pinyin": "nei bu",
						"pinyin_prefix": "n",
						"ext_id": "712445000000",
						"ext_name": "内埔乡"
					},
					{
						"id": "712446",
						"pid": 7124,
						"deep": 2,
						"name": "万丹",
						"pinyin": "wan dan",
						"pinyin_prefix": "w",
						"ext_id": "712446000000",
						"ext_name": "万丹乡"
					},
					{
						"id": "712447",
						"pid": 7124,
						"deep": 2,
						"name": "潮州",
						"pinyin": "chao zhou",
						"pinyin_prefix": "c",
						"ext_id": "712447000000",
						"ext_name": "潮州镇"
					},
					{
						"id": "712448",
						"pid": 7124,
						"deep": 2,
						"name": "泰武",
						"pinyin": "tai wu",
						"pinyin_prefix": "t",
						"ext_id": "712448000000",
						"ext_name": "泰武乡"
					},
					{
						"id": "712449",
						"pid": 7124,
						"deep": 2,
						"name": "来义",
						"pinyin": "lai yi",
						"pinyin_prefix": "l",
						"ext_id": "712449000000",
						"ext_name": "来义乡"
					},
					{
						"id": "712450",
						"pid": 7124,
						"deep": 2,
						"name": "万峦",
						"pinyin": "wan luan",
						"pinyin_prefix": "w",
						"ext_id": "712450000000",
						"ext_name": "万峦乡"
					},
					{
						"id": "712451",
						"pid": 7124,
						"deep": 2,
						"name": "崁顶",
						"pinyin": "kan ding",
						"pinyin_prefix": "k",
						"ext_id": "712451000000",
						"ext_name": "崁顶乡"
					},
					{
						"id": "712452",
						"pid": 7124,
						"deep": 2,
						"name": "新埤",
						"pinyin": "xin pi",
						"pinyin_prefix": "x",
						"ext_id": "712452000000",
						"ext_name": "新埤乡"
					},
					{
						"id": "712453",
						"pid": 7124,
						"deep": 2,
						"name": "南州",
						"pinyin": "nan zhou",
						"pinyin_prefix": "n",
						"ext_id": "712453000000",
						"ext_name": "南州乡"
					},
					{
						"id": "712454",
						"pid": 7124,
						"deep": 2,
						"name": "林边",
						"pinyin": "lin bian",
						"pinyin_prefix": "l",
						"ext_id": "712454000000",
						"ext_name": "林边乡"
					},
					{
						"id": "712455",
						"pid": 7124,
						"deep": 2,
						"name": "东港",
						"pinyin": "dong gang",
						"pinyin_prefix": "d",
						"ext_id": "712455000000",
						"ext_name": "东港镇"
					},
					{
						"id": "712456",
						"pid": 7124,
						"deep": 2,
						"name": "琉球",
						"pinyin": "liu qiu",
						"pinyin_prefix": "l",
						"ext_id": "712456000000",
						"ext_name": "琉球乡"
					},
					{
						"id": "712457",
						"pid": 7124,
						"deep": 2,
						"name": "佳冬",
						"pinyin": "jia dong",
						"pinyin_prefix": "j",
						"ext_id": "712457000000",
						"ext_name": "佳冬乡"
					},
					{
						"id": "712458",
						"pid": 7124,
						"deep": 2,
						"name": "新园",
						"pinyin": "xin yuan",
						"pinyin_prefix": "x",
						"ext_id": "712458000000",
						"ext_name": "新园乡"
					},
					{
						"id": "712459",
						"pid": 7124,
						"deep": 2,
						"name": "枋寮",
						"pinyin": "fang liao",
						"pinyin_prefix": "f",
						"ext_id": "712459000000",
						"ext_name": "枋寮乡"
					},
					{
						"id": "712460",
						"pid": 7124,
						"deep": 2,
						"name": "枋山",
						"pinyin": "fang shan",
						"pinyin_prefix": "f",
						"ext_id": "712460000000",
						"ext_name": "枋山乡"
					},
					{
						"id": "712461",
						"pid": 7124,
						"deep": 2,
						"name": "春日",
						"pinyin": "chun ri",
						"pinyin_prefix": "c",
						"ext_id": "712461000000",
						"ext_name": "春日乡"
					},
					{
						"id": "712462",
						"pid": 7124,
						"deep": 2,
						"name": "狮子",
						"pinyin": "shi zi",
						"pinyin_prefix": "s",
						"ext_id": "712462000000",
						"ext_name": "狮子乡"
					},
					{
						"id": "712463",
						"pid": 7124,
						"deep": 2,
						"name": "车城",
						"pinyin": "che cheng",
						"pinyin_prefix": "c",
						"ext_id": "712463000000",
						"ext_name": "车城乡"
					},
					{
						"id": "712464",
						"pid": 7124,
						"deep": 2,
						"name": "牡丹",
						"pinyin": "mu dan",
						"pinyin_prefix": "m",
						"ext_id": "712464000000",
						"ext_name": "牡丹乡"
					},
					{
						"id": "712465",
						"pid": 7124,
						"deep": 2,
						"name": "恒春",
						"pinyin": "heng chun",
						"pinyin_prefix": "h",
						"ext_id": "712465000000",
						"ext_name": "恒春镇"
					},
					{
						"id": "712466",
						"pid": 7124,
						"deep": 2,
						"name": "满州",
						"pinyin": "man zhou",
						"pinyin_prefix": "m",
						"ext_id": "712466000000",
						"ext_name": "满州乡"
					}
				]
			},
			{
				"id": "7125",
				"pid": 71,
				"deep": 1,
				"name": "台东",
				"pinyin": "tai dong",
				"pinyin_prefix": "t",
				"ext_id": "712500000000",
				"ext_name": "台东县",
				"childs": [
					{
						"id": "712517",
						"pid": 7125,
						"deep": 2,
						"name": "台东市",
						"pinyin": "tai dong shi",
						"pinyin_prefix": "t",
						"ext_id": "712517000000",
						"ext_name": "台东市"
					},
					{
						"id": "712518",
						"pid": 7125,
						"deep": 2,
						"name": "绿岛",
						"pinyin": "lv dao",
						"pinyin_prefix": "l",
						"ext_id": "712518000000",
						"ext_name": "绿岛乡"
					},
					{
						"id": "712519",
						"pid": 7125,
						"deep": 2,
						"name": "兰屿",
						"pinyin": "lan yu",
						"pinyin_prefix": "l",
						"ext_id": "712519000000",
						"ext_name": "兰屿乡"
					},
					{
						"id": "712520",
						"pid": 7125,
						"deep": 2,
						"name": "延平",
						"pinyin": "yan ping",
						"pinyin_prefix": "y",
						"ext_id": "712520000000",
						"ext_name": "延平乡"
					},
					{
						"id": "712521",
						"pid": 7125,
						"deep": 2,
						"name": "卑南",
						"pinyin": "bei nan",
						"pinyin_prefix": "b",
						"ext_id": "712521000000",
						"ext_name": "卑南乡"
					},
					{
						"id": "712522",
						"pid": 7125,
						"deep": 2,
						"name": "鹿野",
						"pinyin": "lu ye",
						"pinyin_prefix": "l",
						"ext_id": "712522000000",
						"ext_name": "鹿野乡"
					},
					{
						"id": "712523",
						"pid": 7125,
						"deep": 2,
						"name": "关山",
						"pinyin": "guan shan",
						"pinyin_prefix": "g",
						"ext_id": "712523000000",
						"ext_name": "关山镇"
					},
					{
						"id": "712524",
						"pid": 7125,
						"deep": 2,
						"name": "海端",
						"pinyin": "hai duan",
						"pinyin_prefix": "h",
						"ext_id": "712524000000",
						"ext_name": "海端乡"
					},
					{
						"id": "712525",
						"pid": 7125,
						"deep": 2,
						"name": "池上",
						"pinyin": "chi shang",
						"pinyin_prefix": "c",
						"ext_id": "712525000000",
						"ext_name": "池上乡"
					},
					{
						"id": "712526",
						"pid": 7125,
						"deep": 2,
						"name": "东河",
						"pinyin": "dong he",
						"pinyin_prefix": "d",
						"ext_id": "712526000000",
						"ext_name": "东河乡"
					},
					{
						"id": "712527",
						"pid": 7125,
						"deep": 2,
						"name": "成功",
						"pinyin": "cheng gong",
						"pinyin_prefix": "c",
						"ext_id": "712527000000",
						"ext_name": "成功镇"
					},
					{
						"id": "712528",
						"pid": 7125,
						"deep": 2,
						"name": "长滨",
						"pinyin": "chang bin",
						"pinyin_prefix": "c",
						"ext_id": "712528000000",
						"ext_name": "长滨乡"
					},
					{
						"id": "712529",
						"pid": 7125,
						"deep": 2,
						"name": "金峰",
						"pinyin": "jin feng",
						"pinyin_prefix": "j",
						"ext_id": "712529000000",
						"ext_name": "金峰乡"
					},
					{
						"id": "712530",
						"pid": 7125,
						"deep": 2,
						"name": "大武",
						"pinyin": "da wu",
						"pinyin_prefix": "d",
						"ext_id": "712530000000",
						"ext_name": "大武乡"
					},
					{
						"id": "712531",
						"pid": 7125,
						"deep": 2,
						"name": "达仁",
						"pinyin": "da ren",
						"pinyin_prefix": "d",
						"ext_id": "712531000000",
						"ext_name": "达仁乡"
					},
					{
						"id": "712532",
						"pid": 7125,
						"deep": 2,
						"name": "太麻里",
						"pinyin": "tai ma li",
						"pinyin_prefix": "t",
						"ext_id": "712532000000",
						"ext_name": "太麻里乡"
					}
				]
			},
			{
				"id": "7126",
				"pid": 71,
				"deep": 1,
				"name": "花莲",
				"pinyin": "hua lian",
				"pinyin_prefix": "h",
				"ext_id": "712600000000",
				"ext_name": "花莲县",
				"childs": [
					{
						"id": "712615",
						"pid": 7126,
						"deep": 2,
						"name": "花莲市",
						"pinyin": "hua lian shi",
						"pinyin_prefix": "h",
						"ext_id": "712615000000",
						"ext_name": "花莲市"
					},
					{
						"id": "712616",
						"pid": 7126,
						"deep": 2,
						"name": "新城",
						"pinyin": "xin cheng",
						"pinyin_prefix": "x",
						"ext_id": "712616000000",
						"ext_name": "新城乡"
					},
					{
						"id": "712618",
						"pid": 7126,
						"deep": 2,
						"name": "秀林",
						"pinyin": "xiu lin",
						"pinyin_prefix": "x",
						"ext_id": "712618000000",
						"ext_name": "秀林乡"
					},
					{
						"id": "712619",
						"pid": 7126,
						"deep": 2,
						"name": "吉安",
						"pinyin": "ji an",
						"pinyin_prefix": "j",
						"ext_id": "712619000000",
						"ext_name": "吉安乡"
					},
					{
						"id": "712620",
						"pid": 7126,
						"deep": 2,
						"name": "寿丰",
						"pinyin": "shou feng",
						"pinyin_prefix": "s",
						"ext_id": "712620000000",
						"ext_name": "寿丰乡"
					},
					{
						"id": "712621",
						"pid": 7126,
						"deep": 2,
						"name": "凤林",
						"pinyin": "feng lin",
						"pinyin_prefix": "f",
						"ext_id": "712621000000",
						"ext_name": "凤林镇"
					},
					{
						"id": "712622",
						"pid": 7126,
						"deep": 2,
						"name": "光复",
						"pinyin": "guang fu",
						"pinyin_prefix": "g",
						"ext_id": "712622000000",
						"ext_name": "光复乡"
					},
					{
						"id": "712623",
						"pid": 7126,
						"deep": 2,
						"name": "丰滨",
						"pinyin": "feng bin",
						"pinyin_prefix": "f",
						"ext_id": "712623000000",
						"ext_name": "丰滨乡"
					},
					{
						"id": "712624",
						"pid": 7126,
						"deep": 2,
						"name": "瑞穗",
						"pinyin": "rui sui",
						"pinyin_prefix": "r",
						"ext_id": "712624000000",
						"ext_name": "瑞穗乡"
					},
					{
						"id": "712625",
						"pid": 7126,
						"deep": 2,
						"name": "万荣",
						"pinyin": "wan rong",
						"pinyin_prefix": "w",
						"ext_id": "712625000000",
						"ext_name": "万荣乡"
					},
					{
						"id": "712626",
						"pid": 7126,
						"deep": 2,
						"name": "玉里",
						"pinyin": "yu li",
						"pinyin_prefix": "y",
						"ext_id": "712626000000",
						"ext_name": "玉里镇"
					},
					{
						"id": "712627",
						"pid": 7126,
						"deep": 2,
						"name": "卓溪",
						"pinyin": "zhuo xi",
						"pinyin_prefix": "z",
						"ext_id": "712627000000",
						"ext_name": "卓溪乡"
					},
					{
						"id": "712628",
						"pid": 7126,
						"deep": 2,
						"name": "富里",
						"pinyin": "fu li",
						"pinyin_prefix": "f",
						"ext_id": "712628000000",
						"ext_name": "富里乡"
					}
				]
			},
			{
				"id": "7127",
				"pid": 71,
				"deep": 1,
				"name": "澎湖",
				"pinyin": "peng hu",
				"pinyin_prefix": "p",
				"ext_id": "712700000000",
				"ext_name": "澎湖县",
				"childs": [
					{
						"id": "712707",
						"pid": 7127,
						"deep": 2,
						"name": "马公",
						"pinyin": "ma gong",
						"pinyin_prefix": "m",
						"ext_id": "712707000000",
						"ext_name": "马公市"
					},
					{
						"id": "712708",
						"pid": 7127,
						"deep": 2,
						"name": "西屿",
						"pinyin": "xi yu",
						"pinyin_prefix": "x",
						"ext_id": "712708000000",
						"ext_name": "西屿乡"
					},
					{
						"id": "712709",
						"pid": 7127,
						"deep": 2,
						"name": "望安",
						"pinyin": "wang an",
						"pinyin_prefix": "w",
						"ext_id": "712709000000",
						"ext_name": "望安乡"
					},
					{
						"id": "712710",
						"pid": 7127,
						"deep": 2,
						"name": "七美",
						"pinyin": "qi mei",
						"pinyin_prefix": "q",
						"ext_id": "712710000000",
						"ext_name": "七美乡"
					},
					{
						"id": "712711",
						"pid": 7127,
						"deep": 2,
						"name": "白沙",
						"pinyin": "bai sha",
						"pinyin_prefix": "b",
						"ext_id": "712711000000",
						"ext_name": "白沙乡"
					},
					{
						"id": "712712",
						"pid": 7127,
						"deep": 2,
						"name": "湖西",
						"pinyin": "hu xi",
						"pinyin_prefix": "h",
						"ext_id": "712712000000",
						"ext_name": "湖西乡"
					}
				]
			}
		]
	},
	{
		"id": "81",
		"pid": 0,
		"deep": 0,
		"name": "香港",
		"pinyin": "xiang gang",
		"pinyin_prefix": "~1",
		"ext_id": "810000000000",
		"ext_name": "香港特别行政区",
		"childs": [
			{
				"id": "8100",
				"pid": 81,
				"deep": 1,
				"name": "香港",
				"pinyin": "xiang gang",
				"pinyin_prefix": "x",
				"ext_id": "810000000000",
				"ext_name": "香港特别行政区",
				"childs": [
					{
						"id": "810000",
						"pid": 8100,
						"deep": 2,
						"name": "香港",
						"pinyin": "xiang gang",
						"pinyin_prefix": "x",
						"ext_id": "810000000000",
						"ext_name": "香港特别行政区"
					}
				]
			}
		]
	},
	{
		"id": "82",
		"pid": 0,
		"deep": 0,
		"name": "澳门",
		"pinyin": "ao men",
		"pinyin_prefix": "~2",
		"ext_id": "820000000000",
		"ext_name": "澳门特别行政区",
		"childs": [
			{
				"id": "8200",
				"pid": 82,
				"deep": 1,
				"name": "澳门",
				"pinyin": "ao men",
				"pinyin_prefix": "a",
				"ext_id": "820000000000",
				"ext_name": "澳门特别行政区",
				"childs": [
					{
						"id": "820000",
						"pid": 8200,
						"deep": 2,
						"name": "澳门",
						"pinyin": "ao men",
						"pinyin_prefix": "a",
						"ext_id": "820000000000",
						"ext_name": "澳门特别行政区"
					}
				]
			}
		]
	},
	{
		"id": "91",
		"pid": 0,
		"deep": 0,
		"name": "国外",
		"pinyin": "guo wai",
		"pinyin_prefix": "~4",
		"ext_id": "0",
		"ext_name": "国外",
		"childs": [
			{
				"id": "9100",
				"pid": 91,
				"deep": 1,
				"name": "国外",
				"pinyin": "guo wai",
				"pinyin_prefix": "g",
				"ext_id": "0",
				"ext_name": "国外",
				"childs": [
					{
						"id": "910000",
						"pid": 9100,
						"deep": 2,
						"name": "国外",
						"pinyin": "guo wai",
						"pinyin_prefix": "g",
						"ext_id": "0",
						"ext_name": "国外"
					}
				]
			}
		]
	}
]


// ------------------------------------------------------------------------------ 数据处理 ------------------------------------------------------------------------------
const columns = reactive([ // -- 城市联动数据
	[], [], []
]);

// -- 初始化联动数据
	chinaArea.forEach((item,index) => { // -- 初始化三级城市联动的数据
		columns[0].push(item.ext_name)
		if(index == 0) { // -- 耦合
			item?.childs?.forEach((child,childIndex) => {
				columns[1].push(child.ext_name)
				if(childIndex == 0) {
					child?.childs?.forEach((subChild) => {
						columns[2].push(subChild.ext_name)
					})
				}
			})
		}
	})

	// -- 联动处理
	let oldIndes = [0,0,0]
	const changeHandler = (e: any) => { // -- 联动处理
		const { indexs } = e
		
		if(indexs[0] !== oldIndes[0]) { // -- 处理省改变
			const shi = []
			const xian = []
			chinaArea[indexs[0]]?.childs?.forEach((item,i) => { // -- 遍历省 → 改变市/区
				shi.push(item.ext_name)
				if(i === 0) {
					item?.childs?.forEach((chileItem) => {
						xian.push(chileItem.ext_name)
					})
				}
			})
			columns[1] = shi
			columns[2] = xian
		}else if(indexs[1] !== oldIndes[1]) { // -- 处理市改变
			const xian = []
			chinaArea[indexs[0]]?.childs?.forEach((item,i) => { // -- 遍历省 → 改变市/区
				if(indexs[1] === i) { // -- 
					item?.childs?.forEach((chileItem) => {
						xian.push(chileItem.ext_name)
					})
				}
			})
			columns[2] = xian
		}

		oldIndes = indexs
	}


export { // -- 处理后的数据与方法的导出 → 在对应页面中可以直接使用
	columns,
	changeHandler
}

// export default chinaArea


