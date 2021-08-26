import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/views";
import { Alerts } from "../models/alerts";

export default class SpService {
  public async getNewsItems(listTitle: string, listViewTitle: string): Promise<Alerts[]> {
    // Get xml schema for the "Published News" view
    const list = sp.web.lists.getByTitle("news");
    const view = await list.views.getByTitle("Published News")();
    if (!view) return [];

    const items = await list.getItemsByCAMLQuery({ViewXml: view.ListViewXml});
    return items.map(item => (<Alerts>{
      title: item['Title'],
      content: item['Content'],
      publishDate: new Date(item['PublishDate']),
      alerttype: item['AlertType']
    
    }));
  }
}