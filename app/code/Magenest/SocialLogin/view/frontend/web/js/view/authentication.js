define(
    [
        'jquery',
        'ko',
        'Magento_Ui/js/form/form',
        'Magento_Customer/js/action/login',
        'Magento_Customer/js/model/customer',
        'Magenest_SocialLogin/js/sociallogin',
        'mage/validation',
        'Magento_Checkout/js/model/authentication-messages',
        'Magento_Checkout/js/model/full-screen-loader'
    ],
    function($, ko , Component, loginAction, customer, sociallogin,  validation, messageContainer, fullScreenLoader) {
        'use strict';
        var checkoutConfig = window.checkoutConfig;
        return Component.extend({
            isGuestCheckoutAllowed: checkoutConfig.isGuestCheckoutAllowed,
            isCustomerLoggedIn: checkoutConfig.isCustomerLoggedIn,
            registerUrl: checkoutConfig.registerUrl,
            forgotPasswordUrl: checkoutConfig.forgotPasswordUrl,
            createNewAccount: checkoutConfig.registerUrl,
            autocomplete: checkoutConfig.autocomplete,
            twitterUrl: window.modal_content.TwitterUrl,
            isTwitterEnabled: ko.observable(window.modal_content.isTwitterEnabled),
            facebookUrl : window.modal_content.FacebookUrl,
            isFacebookEnabled: ko.observable(window.modal_content.isFacebookEnabled),
            googleUrl : window.modal_content.GoogleUrl,
            isGoogleEnabled : ko.observable(window.modal_content.isGoogleEnabled),
            amazonUrl : window.modal_content.AmazonUrl,
            isAmazonEnabled : ko.observable(window.modal_content.isAmazonEnabled),
            lineUrl : window.modal_content.LineUrl,
            isLineEnabled : ko.observable(window.modal_content.isLineEnabled),
            instagramUrl : window.modal_content.InstagramUrl,
            isInstagramEnabled : ko.observable(window.modal_content.isInstagramEnabled),
            pinterestUrl : window.modal_content.PinterestUrl,
            isPinterestEnabled : ko.observable(window.modal_content.isPinterestEnabled),
            redditUrl : window.modal_content.RedditUrl,
            isRedditEnabled : ko.observable(window.modal_content.isRedditEnabled),
            linkedinUrl : window.modal_content.LinkedInUrl,
            isLinkedInEnabled : ko.observable(window.modal_content.isLinkedInEnabled),
            isButtonEnabledCheckout : ko.observable(window.modal_content.isButtonEnabledCheckout),
            defaults: {
                template: 'Magenest_SocialLogin/authentication'
            },
            /** Is login form enabled for current customer */
            isActive: function() {
                return !customer.isLoggedIn();
            },

            /** Provide login action */
            login: function(loginForm) {
                var loginData = {},
                    formDataArray = $(loginForm).serializeArray();

                formDataArray.forEach(function (entry) {
                    loginData[entry.name] = entry.value;
                });

                if($(loginForm).validation()
                    && $(loginForm).validation('isValid')
                ) {
                    fullScreenLoader.startLoader();
                    loginAction(loginData, checkoutConfig.checkoutUrl, undefined, messageContainer).always(function() {
                        fullScreenLoader.stopLoader();
                    });
                }
            },

            getTwitterUrl : function() {
                var self = this;
                sociallogin.display(self.twitterUrl,'Twitter',600,600);
                self.reLoadMiniCart();
            },

            getFacebookUrl : function () {
                var self = this;
                sociallogin.display(self.facebookUrl,'Facebook',600,600);
                self.reLoadMiniCart();
            },

            getGoogleUrl : function () {
                var self = this;
                sociallogin.display(self.googleUrl,'Google',600,600);
                self.reLoadMiniCart();
            },

            getAmazonUrl : function () {
                var self = this;
                sociallogin.display(self.amazonUrl,'Amazon',600,600);
                self.reLoadMiniCart();
            },

            getLineUrl : function () {
                var self = this;
                sociallogin.display(self.lineUrl,'Line',600,600);
                self.reLoadMiniCart();
            },

            getPinterestUrl : function () {
                var self = this;
                sociallogin.display(self.pinterestUrl,'Pinterest',600,600);
                self.reLoadMiniCart();
            },

            getInstagramUrl : function () {
                var self = this;
                sociallogin.display(self.instagramUrl,'Instagram',600,600);
                self.reLoadMiniCart();
            },

            getRedditUrl : function () {
                var self = this;
                sociallogin.display(self.redditUrl,'Reddit',600,600);
                self.reLoadMiniCart();
            },

            getLinkedInUrl : function () {
                var self = this;
                sociallogin.display(self.linkedinUrl,'LinkedIn',600,600);
                self.reLoadMiniCart();
            },

            reLoadMiniCart: function () {
                var sections = ['cart'];
                customerData.invalidate(sections);
                customerData.reload(sections, true);
            }
        });
    }
);

