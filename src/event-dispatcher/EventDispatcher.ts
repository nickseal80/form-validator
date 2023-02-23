export type EventCallback = (event: ValidationEvent) => void;
export type Events = { [key: string]: EventCallback[]; }
export type EventData = { [key: string]: any }
export type ValidationEvent = { type: string, data: EventData }

let instance: EventDispatcher;

class EventDispatcher {
    protected events: Events = {};

    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    public on = (eventName: string, callback: EventCallback) => {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    public trigger = (eventName: string, data?: EventData) => {
        const handlers = this.events[eventName];

        if (! handlers || handlers.length < 1) {
            return;
        }

        const event = { type: eventName, data };
        Array.prototype.forEach.call(handlers, (handler) => {
            handler(event);
        })
    }
}

const eventDispatcher = new EventDispatcher();
export default eventDispatcher;