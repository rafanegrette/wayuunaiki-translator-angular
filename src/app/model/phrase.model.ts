export class PhraseModel {
    public audioPath: string;
    public spa: string;
    public guc: string;

    constructor(audioPath: string, spa: string, guc: string) {
        this.audioPath =audioPath;
        this.spa = spa;
        this.guc = guc;
    }
}