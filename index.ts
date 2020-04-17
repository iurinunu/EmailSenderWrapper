import { Injectable } from '@angular/core';

import { Plugin, Cordova} from "@ionic-native/core";

// @ts-ignore
// @ts-ignore
@Plugin({
    pluginName: "EmailSender",
    plugin: "cordova_plugin_emailSender",
    pluginRef: "EmailSender",
    repo: "https://github.com/iurinunu/EmailSenderWrapper.git",
    platforms: ['Android']
})
@Injectable()
export class EmailProvider {

    @Cordova()
    send(arg1: any): Promise<string>
    {
        return;
    }


}
