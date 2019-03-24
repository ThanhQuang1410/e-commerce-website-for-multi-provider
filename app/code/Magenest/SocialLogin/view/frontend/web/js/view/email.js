/**
 * Created by bao on 26/06/2017.
 */
define([
    'jquery',
    'uiComponent',
    'ko',
    'Magenest_SocialLogin/js/sociallogin',
    'Magenest_SocialLogin/js/view/modal',
    'Magento_Customer/js/model/customer',
    'Magento_Customer/js/action/check-email-availability',
    'Magento_Customer/js/action/login',
    'Magento_Checkout/js/model/quote',
    'Magento_Checkout/js/checkout-data',
    'Magento_Checkout/js/model/full-screen-loader',
    'mage/url',
    'mage/validation'
], function ($, Component, ko,sociallogin, modal, customer, checkEmailAvailability, loginAction, quote, checkoutData, fullScreenLoader,urlBuilder) {
    'use strict';

    var validatedEmail = checkoutData.getValidatedEmailValue();

    if (validatedEmail && !customer.isLoggedIn()) {
        quote.guestEmail = validatedEmail;
    }

    return Component.extend({
        defaults: {
            template: 'Magenest_SocialLogin/email',
            email: checkoutData.getInputFieldEmailValue(),
            emailFocused: false,
            isLoading: false,
            isPasswordVisible: false,
            isSocialNetworkUsed: false,
            isFacebookUsed : false,
            isGoogleUsed : false,
            isTwitterUsed : false,
            isAmazonUsed : false,
            isInstagramUsed : false,
            isPinterestUsed : false,
            isLineUsed : false,
            isRedditUsed : false,
            isLinkedInUsed: false,
            isButtonEnabledCheckout : window.modal_content.isButtonEnabledCheckout,
            listens: {
                email: 'emailHasChanged',
                emailFocused: 'validateEmail'
            }
        },
        checkDelay: 2000,
        checkRequest: null,
        isEmailCheckComplete: null,
        isCustomerLoggedIn: customer.isLoggedIn(),
        forgotPasswordUrl: window.checkoutConfig.forgotPasswordUrl,
        emailCheckTimeout: 0,
        twitterUrl : window.modal_content.TwitterUrl,
        googleUrl : window.modal_content.GoogleUrl,
        facebookUrl : window.modal_content.FacebookUrl,
        amazonUrl : window.modal_content.AmazonUrl,
        instagramUrl : window.modal_content.InstagramUrl,
        pinterestUrl : window.modal_content.PinterestUrl,
        lineUrl : window.modal_content.LineUrl,
        redditUrl : window.modal_content.RedditUrl,
        linkedinUrl : window.modal_content.LinkedInUrl,
        isTwitterEnabled: ko.observable(window.modal_content.isTwitterEnabled),
        isFacebookEnabled: ko.observable(window.modal_content.isFacebookEnabled),
        isGoogleEnabled : ko.observable(window.modal_content.isGoogleEnabled),
        isAmazonEnabled : ko.observable(window.modal_content.isAmazonEnabled),
        isLineEnabled : ko.observable(window.modal_content.isLineEnabled),
        isInstagramEnabled : ko.observable(window.modal_content.isInstagramEnabled),
        isPinterestEnabled : ko.observable(window.modal_content.isPinterestEnabled),
        isRedditEnabled : ko.observable(window.modal_content.isRedditEnabled),
        isLinkedInEnabled : ko.observable(window.modal_content.isLinkedInEnabled),

        /**
         * Initializes observable properties of instance
         *
         * @returns {Object} Chainable.
         */
        initObservable: function () {
            this._super()
                .observe(['email', 'emailFocused', 'isLoading','isButtonEnabledCheckout','isPasswordVisible','isSocialNetworkUsed','isLinkedInUsed','isLineUsed','isRedditUsed','isPinterestUsed','isTwitterUsed','isInstagramUsed','isFacebookUsed','isGoogleUsed','isAmazonUsed']);
            return this;
        },

        /**
         * Callback on changing email property
         */
        emailHasChanged: function () {
            var self = this;
            self.refreshSocialLogin();
            clearTimeout(this.emailCheckTimeout);

            if (self.validateEmail()) {
                quote.guestEmail = self.email();
                checkoutData.setValidatedEmailValue(self.email());
            }
            this.emailCheckTimeout = setTimeout(function () {
                if (self.validateEmail()) {
                    self.checkEmailAvailability();
                    if(self.isButtonEnabledCheckout() == 1){
                        self.checkSocialNetworkAvailability();
                    } else self.isSocialNetworkUsed(false);
                } else {
                    self.isPasswordVisible(false);
                    self.isSocialNetworkUsed(false);
                }
            }, self.checkDelay);

            checkoutData.setInputFieldEmailValue(self.email());
        },

        /**
         * Check email existing.
         */
        checkEmailAvailability: function () {
            var self = this;
            this.validateRequest();
            this.isEmailCheckComplete = $.Deferred();
            this.isLoading(true);
            this.checkRequest = checkEmailAvailability(this.isEmailCheckComplete, this.email());

            $.when(this.isEmailCheckComplete).done(function () {
                self.isPasswordVisible(false);
            }).fail(function () {
                self.isPasswordVisible(true);
            }).always(function () {
                self.isLoading(false);
            });
        },

        /**
         * If request has been sent -> abort it.
         * ReadyStates for request aborting:
         * 1 - The request has been set up
         * 2 - The request has been sent
         * 3 - The request is in process
         */
        validateRequest: function () {
            if (this.checkRequest != null && $.inArray(this.checkRequest.readyState, [1, 2, 3])) {
                this.checkRequest.abort();
                this.checkRequest = null;
            }
        },

        /**
         * Local email validation.
         *
         * @param {Boolean} focused - input focus.
         * @returns {Boolean} - validation result.
         */
        validateEmail: function (focused) {
            var loginFormSelector = 'form[data-role=email-with-possible-login]',
                usernameSelector = loginFormSelector + ' input[name=username]',
                loginForm = $(loginFormSelector),
                validator;

            loginForm.validation();

            if (focused === false && !!this.email()) {
                return !!$(usernameSelector).valid();
            }

            validator = loginForm.validate();

            return validator.check(usernameSelector);
        },

        checkSocialNetworkAvailability : function () {
            var self = this;
            var url = urlBuilder.build('sociallogin/ajaxgettype');
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                cache: false,
                showLoader: true,
                data: {
                    email: self.email()
                },
                success: function (response) {

                    if (response.type != null) {
                        self.isSocialNetworkUsed(true);
                        if (response.type == 'twitter') self.isTwitterUsed(true);
                        if (response.type == 'facebook') self.isFacebookUsed(true);
                        if (response.type == 'google') self.isGoogleUsed(true);
                        if (response.type == 'amazon') self.isAmazonUsed(true);
                        if (response.type == 'instagram') self.isInstagramUsed(true);
                        if (response.type == 'pinterest') self.isPinterestUsed(true);
                        if (response.type == 'line') self.isLineUsed(true);
                        if (response.type == 'linkedin') self.isLinkedInUsed(true);
                        if (response.type == 'reddit') self.isRedditUsed(true);


                    }
                    else {
                        self.isSocialNetworkUsed(false);
                    }
                }
            });
        },

        refreshSocialLogin: function(){
            var self = this;
            self.isTwitterUsed(false);
            self.isAmazonUsed(false);
            self.isFacebookUsed(false);
            self.isGoogleUsed(false);
            self.isInstagramUsed(false);
            self.isPinterestUsed(false);
            self.isRedditUsed(false);
            self.isLineUsed(false);
            self.isLinkedInUsed(false);
        },

        /**
         * Log in form submitting callback.
         *
         * @param {HTMLElement} loginForm - form element.
         */
        login: function (loginForm) {
            var loginData = {},
                formDataArray = $(loginForm).serializeArray();

            formDataArray.forEach(function (entry) {
                loginData[entry.name] = entry.value;
            });

            if (this.isPasswordVisible() && $(loginForm).validation() && $(loginForm).validation('isValid')) {
                fullScreenLoader.startLoader();
                loginAction(loginData).always(function() {
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
});

