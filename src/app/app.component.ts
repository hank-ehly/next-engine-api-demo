import { Component } from '@angular/core';

interface APIItem {
    requestURI?: string;
    title?: string;
}

@Component({
    selector: 'ne-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    sections: any = [
        {
            title: '受注伝票',
            items: [
                {title: '件数取得', requestURI: 'https://api.next-engine.org/api_v1_receiveorder_base/count'},
                {title: '検索', requestURI: 'https://api.next-engine.org/api_v1_receiveorder_base/search'},
                {title: '受注伝票更新', requestURI: 'https://api.next-engine.org/api_v1_receiveorder_base/update'},
                {title: 'アップロード', requestURI: 'https://api.next-engine.org/api_v1_receiveorder_base/upload'},
                {title: '納品書印刷済み', requestURI: 'https://api.next-engine.org/api_v1_receiveorder_base/receipted'},
                {title: '出荷確定処理', requestURI: 'https://api.next-engine.org/api_v1_receiveorder_base/shipped'},
                {title: '配送情報出力済み', requestURI: 'https://api.next-engine.org/api_v1_receiveorder_base/labelprinted'}
            ]
        },
        {
            title: '受注伝票オプション',
            items: [
                {title: '件数取得', requestURI: 'https://api.next-engine.org/api_v1_receiveorder_option/count'},
            ]
        }
    ];

    activeSection: any = this.sections[0];
    activeItem: APIItem = this.activeSection.items[0];

    onClickSectionTitle(i: number): void {
        this.activeSection = this.sections[i];
        this.activeItem = this.activeSection.items[0];
    }

    onClickListItem(i: number): void {
        this.activeItem = this.activeSection.items[i];
    }

}
