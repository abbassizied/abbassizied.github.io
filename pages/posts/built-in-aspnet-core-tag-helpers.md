---
type: posts
title: Summary For Built-in ASP.NET Core Tag Helpers
date: 2023/12/28
tag: web development, Cheat Sheet
author: Abbassi Zied
---


# Built-in ASP.NET Core Tag Helpers

1. [Anchor Tag Helper](#id-anchor-tag-helper)
2. [Cache Tag Helper](#id-cache-tag-helper)
3. [The Form Tag Helper](#id-the-form-tag-helper)
4. [Partial Tag Helper](#id-partial-tag-helper)

## The difference between HTML Helpers and Tag Helpers
- Tag Helpers are a new feature in MVC that you can use for generating HTML. The syntax looks same like as HTML but its processed by Razor on the server. 
- Tag Helpers are in many ways an alternative syntax to Html Helper methods but they also provide some functionality that was either difficult or impossible to do with helper methods.
- Tag Helpers are attached to HTML elements inside your Razor views and can help you write markup that is both cleaner and easier to read than the traditional HTML Helpers.
- HTML Helpers are invoked as methods that are mixed with HTML inside your Razor views.
- Not every Html helper has an equivalent Tag helper. So use Tag helpers in favor of Html helpers if there is an equivalent. Otherwise, use Html helpers.


## <a name="id-anchor-tag-helper">Anchor Tag Helper</a>
- ==Add new attributes to the standard HTML anchor (<a ... ></a>) tag.==
- ==By convention==, the attribute names are prefixed with ==asp-==. 
- The ==asp-controller== attribute assigns the controller used for generating the URL.
- The ==asp-action== attribute value represents the controller action name included in the generated href attribute. 
- The ==asp-route-{value}== attribute enables a wildcard route prefix. Any value occupying the =={value}== placeholder is interpreted as a potential route parameter.
- The ==asp-route== attribute is used for creating a URL linking directly to a named route. 
- The ==asp-all-route-data== attribute supports the creation of a dictionary of key-value pairs. The key is the parameter name, and the value is the parameter value. 
```
// asp-controller && asp-action
<a asp-controller="Speaker"
   asp-action="Evaluations">Speaker Evaluations</a>

// asp-route-{value}
    <a asp-controller="Speaker"
       asp-action="Detail"
       asp-route-speakerid="@Model.SpeakerId">SpeakerId: @Model.SpeakerId</a>
    <a asp-controller="Speaker"
       asp-action="Detail" 
       asp-route-id="@Model.SpeakerId">SpeakerId: @Model.SpeakerId</a>

// asp-route
// In SpeakerController
[Route("/Speaker/Evaluations", Name = "speakerevals")]
// And, in the markup:	   
<a asp-route="speakerevals">Speaker Evaluations</a>	   

// asp-all-route-data
@{
var parms = new Dictionary<string, string>
            {
                { "speakerId", "11" },
                { "currentYear", "true" }
            };
}

<a asp-route="speakerevalscurrent"
   asp-all-route-data="parms">Speaker Evaluations</a>
```
 

## <a name="id-cache-tag-helper">Cache Tag Helper</a>
- The Cache Tag Helper provides the ability to improve the performance of your ASP.NET Core app by caching its content to the internal ASP.NET Core cache provider. 
- ==Additional attributes==: vary-by-header, vary-by-query, vary-by-route, vary-by-cookie, vary-by-user, priority 
```
// The following Razor markup caches the current date:
<cache>@DateTime.Now</cache>

// expires-on
<cache expires-on="@new DateTime(2025,1,29,17,02,0)">
    Current Time Inside Cache Tag Helper: @DateTime.Now
</cache>

// expires-after
<cache expires-after="@TimeSpan.FromSeconds(120)">
    Current Time Inside Cache Tag Helper: @DateTime.Now
</cache>
```

## <a name="id-the-form-tag-helper">The Form Tag Helper</a>
- ==Additional attributes==: Form Action, Input, Textarea, Label, Validation, Select Tag Helpers
- [Tag Helpers in forms in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/mvc/views/working-with-forms?view=aspnetcore-8.0#the-form-tag-helper)
```
// The Form Tag Helper
<form asp-controller="Demo" asp-action="Register" method="post">
    <!-- Input and Submit elements -->
</form>
// The Form Action Tag Helper
<!-- Submit to controller example -->
<form method="post">
    <button asp-controller="Home" asp-action="Index">Click Me</button>
    <input type="image" src="..." alt="Or Click Me" asp-controller="Home" asp-action="Index">
</form>
```

## <a name="id-partial-tag-helper">Partial Tag Helper</a>
- The Partial Tag Helper is used for rendering a partial view in Razor Pages and MVC apps. 
- Is an alternative to HTML Helper syntax.
- The name attribute is required. It indicates the name or the path of the partial view to be rendered.
- The for attribute assigns a ModelExpression to be evaluated against the current model. A ModelExpression infers the @Model.
- The model attribute assigns a model instance to pass to the partial view. The model attribute can't be used with the for attribute.
```
<partial name="Shared/_ProductPartial.cshtml" for="Product">
<partial name="_ProductPartial" model='new Product { Number = 1, Name = "Test product", Description = "This is a test" }'>
```
 