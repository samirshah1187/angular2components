System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Accordion;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Accordion = (function () {
                function Accordion() {
                    this.pageTitle = "Accordion Example";
                    this.groups = [];
                }
                Accordion.prototype.addGroup = function (group) {
                    this.groups.push(group);
                };
                Accordion.prototype.closeOthers = function (openGroup) {
                    this.groups.forEach(function (group) {
                        if (group !== openGroup) {
                            group.isOpen = false;
                        }
                    });
                };
                Accordion.prototype.removeGroup = function (group) {
                    var index = this.groups.indexOf(group);
                    if (index !== -1) {
                        this.groups.splice(index, 1);
                    }
                };
                Accordion = __decorate([
                    core_1.Component({
                        selector: 'accordion',
                        templateUrl: 'app/accordion/component/accordion.component.html',
                        host: {
                            'class': 'panel-group'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], Accordion);
                return Accordion;
            }());
            exports_1("Accordion", Accordion);
        }
    }
});
//# sourceMappingURL=accordion.component.js.map