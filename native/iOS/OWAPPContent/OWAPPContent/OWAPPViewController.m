//
//  OWAPPViewController.m
//  OWAPPContent
//
//  Created by Albert Leal Gibert on 09/12/13.
//  Copyright (c) 2013 Albert Leal Gibert. All rights reserved.
//

#import "OWAPPViewController.h"

@interface OWAPPViewController ()

@end

@implementation OWAPPViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
    NSURL *url = [NSURL URLWithString:[NSString stringWithFormat:@"http://albertleal.com/apps/owapp/test/index.html"]];
    NSURLRequest *request = [NSURLRequest requestWithURL:url];
    self.webView.scrollView.bounces = NO;
    [self.webView loadRequest:request];
    
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
