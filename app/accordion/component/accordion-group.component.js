System.register(['angular2/core', './accordion.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, accordion_component_1;
    var AccordionGroup;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (accordion_component_1_1) {
                accordion_component_1 = accordion_component_1_1;
            }],
        execute: function() {
            AccordionGroup = (function () {
                function AccordionGroup(accordion) {
                    this.accordion = accordion;
                    this._isOpen = false;
                    this.accordion.addGroup(this);
                }
                Object.defineProperty(AccordionGroup.prototype, "isOpen", {
                    get: function () {
                        return this._isOpen;
                    },
                    set: function (value) {
                        this._isOpen = value;
                        if (value) {
                            this.accordion.closeOthers(this);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                AccordionGroup.prototype.ngOnDestroy = function () {
                    this.accordion.removeGroup(this);
                };
                AccordionGroup.prototype.toggleOpen = function (event) {
                    event.preventDefault();
                    this.isOpen = !this.isOpen;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AccordionGroup.prototype, "subject", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AccordionGroup.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AccordionGroup.prototype, "date", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AccordionGroup.prototype, "duration", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean), 
                    __metadata('design:paramtypes', [Boolean])
                ], AccordionGroup.prototype, "isOpen", null);
                AccordionGroup = __decorate([
                    core_1.Component({
                        selector: 'accordion-group',
                        templateUrl: 'app/accordion/component/accordion-group.component.html'
                    }), 
                    __metadata('design:paramtypes', [accordion_component_1.Accordion])
                ], AccordionGroup);
                return AccordionGroup;
            }());
            exports_1("AccordionGroup", AccordionGroup);
        }
    }
});
//# sourceMappingURL=accordion-group.component.js.map