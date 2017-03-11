/**
 * Kendo UI のヘルパー
 */
var Kendo = (function () {
    function Kendo() {
    }
    /**
     * KendoMenuを作成して返します
     * @param target 作成対象
     * @return KendoMenu
     */
    Kendo.CreateMenu = function (target) {
        return target.kendoMenu({
            dataSource: [
                { text: '概要', url: '' },
                {
                    text: '取り扱い商品',
                    url: '',
                    items: [
                        { text: '自転車' },
                        { text: 'パーツ' },
                        { text: 'メンテナンス用具' }
                    ]
                },
                { text: '講習会', url: '' },
                { text: '修理・メンテナンス', url: '' },
                { text: '店舗情報', url: '' }
            ]
        }).data('kendoMenu');
    };
    return Kendo;
}());
//# sourceMappingURL=kendo.js.map