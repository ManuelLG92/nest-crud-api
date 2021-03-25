"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.TaskController = void 0;
var common_1 = require("@nestjs/common");
var TaskController = /** @class */ (function () {
    function TaskController() {
    }
    TaskController.prototype.getTasks = function () {
        return "ok";
    };
    TaskController.prototype.getTask = function (id) {
        return id;
    };
    __decorate([
        common_1.Get()
    ], TaskController.prototype, "getTasks");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], TaskController.prototype, "getTask");
    TaskController = __decorate([
        common_1.Controller('task')
    ], TaskController);
    return TaskController;
}());
exports.TaskController = TaskController;
