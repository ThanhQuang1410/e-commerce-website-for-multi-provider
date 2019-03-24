/*global define*/
define([
    'jquery',
    'ko',
    'Magento_Ui/js/form/form',
    'Magento_Customer/js/action/login',
    'Magento_Customer/js/customer-data',
    'Magento_Customer/js/model/authentication-popup',
    'mage/translate',
    'mage/url',
    'Magento_Ui/js/modal/alert',
    'Magenest_SocialLogin/js/sociallogin',
    'mage/validation'

], function ($, ko, Component, loginAction, customerData, authenticationPopup, $t, url, alert, sociallogin) {
    'use strict';
    return Component.extend({
        twitterUrl: window.modal_content.TwitterUrl,
        isTwitterEnabled: ko.observable(window.modal_content.isTwitterEnabled),
        facebookUrl: window.modal_content.FacebookUrl,
        isFacebookEnabled: ko.observable(window.modal_content.isFacebookEnabled),
        googleUrl: window.modal_content.GoogleUrl,
        isGoogleEnabled: ko.observable(window.modal_content.isGoogleEnabled),
        amazonUrl: window.modal_content.AmazonUrl,
        isAmazonEnabled: ko.observable(window.modal_content.isAmazonEnabled),
        lineUrl: window.modal_content.LineUrl,
        isLineEnabled: ko.observable(window.modal_content.isLineEnabled),
        instagramUrl: window.modal_content.InstagramUrl,
        isInstagramEnabled: ko.observable(window.modal_content.isInstagramEnabled),
        pinterestUrl: window.modal_content.PinterestUrl,
        isPinterestEnabled: ko.observable(window.modal_content.isPinterestEnabled),
        redditUrl: window.modal_content.RedditUrl,
        isRedditEnabled: ko.observable(window.modal_content.isRedditEnabled),
        linkedinUrl: window.modal_content.LinkedInUrl,
        isLinkedInEnabled: ko.observable(window.modal_content.isLinkedInEnabled),
        forgotPasswordUrl: window.authenticationPopup.customerForgotPasswordUrl,
        createNewAccount: window.authenticationPopup.customerRegisterUrl,
        autocomplete: window.checkout.autocomplete,
        modalWindow: null,

        messageLogin: ko.observable(""),

        isEnabledPopup: ko.observable(window.modal_content.isEnabledPopup),

        prefixElementHtml: 'social-login-popup' + '-',

        isLoading: ko.observable(false),
        defaults: {
            template: 'Magenest_SocialLogin/modal_content'
        },
        /**
         * Init
         */
        initialize: function () {
            var self = this;
            this._super();
            url.setBaseUrl(window.authenticationPopup.baseUrl);
            loginAction.registerLoginCallback(function () {
                self.isLoading(false);
            });
        },

        /** Init popup login window */
        setModalElement: function (element) {
            if (authenticationPopup.modalWindow == null) {
                authenticationPopup.createPopUp(element);
            }
        },

        /** Is login form enabled for current customer */
        isActive: function () {
            var customer = customerData.get('customer');

            return customer() == false;
        },

        /** Show login popup window */
        showModal: function () {
            if (this.modalWindow) {
                $(this.modalWindow).modal('openModal');
            } else {
                alert({
                    content: $t('Guest checkout is disabled.')
                });
            }
        },

        /** Provide login action */
        login: function (formUiElement, event) {
            var self = this;
            this.messageLogin("");
            var loginData = {},
                formElement = $(event.currentTarget),
                formDataArray = formElement.serializeArray();

            event.stopPropagation();
            formDataArray.forEach(function (entry) {
                loginData[entry.name] = entry.value;
            });

            if (formElement.validation() &&
                formElement.validation('isValid')
            ) {
                this.isLoading(true);
                loginAction(loginData, window.location.href).always(function(response) {
                    if(response.errors){
                        self.messageLogin(response.message);
                    }
                });
            }
            else {
                this.messageLogin("You did not sign in correctly or your account is temporarily disabled.");
            }
            return false;
        },

        isMessage: function () {
            if (this.messageLogin() != "") {
                return true;
            }
            else {
                return false;
            }
        },

        getTwitterUrl: function () {
            var self = this;
            sociallogin.display(self.twitterUrl, 'Twitter', 600, 600);
            self.reLoadMiniCart();
        },

        getFacebookUrl: function () {
            var self = this;
            sociallogin.display(self.facebookUrl, 'Facebook', 600, 600);
            self.reLoadMiniCart();
        },

        getGoogleUrl: function () {
            var self = this;
            sociallogin.display(self.googleUrl, 'Google', 600, 600);
            self.reLoadMiniCart();
        },

        getAmazonUrl: function () {
            var self = this;
            sociallogin.display(self.amazonUrl, 'Amazon', 600, 600);
            self.reLoadMiniCart();
        },

        getLineUrl: function () {
            var self = this;
            sociallogin.display(self.lineUrl, 'Line', 600, 600);
            self.reLoadMiniCart();
        },

        getPinterestUrl: function () {
            var self = this;
            sociallogin.display(self.pinterestUrl, 'Pinterest', 600, 600);
            self.reLoadMiniCart();
        },

        getInstagramUrl: function () {
            var self = this;
            sociallogin.display(self.instagramUrl, 'Instagram', 600, 600);
            self.reLoadMiniCart();
        },

        getRedditUrl: function () {
            var self = this;
            sociallogin.display(self.redditUrl, 'Reddit', 600, 600);
            self.reLoadMiniCart();
        },

        getLinkedInUrl: function () {
            var self = this;
            sociallogin.display(self.linkedinUrl, 'LinkedIn', 600, 600);
            self.reLoadMiniCart();
        },

        reLoadMiniCart: function () {
            var sections = ['cart'];
            customerData.invalidate(sections);
            customerData.reload(sections, true);
        }
    });
});