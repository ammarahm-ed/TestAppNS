#-dontobfuscate
-dontwarn **
#-keepattributes *Annotation*, EnclosingMethod, Exceptions, InnerClasses
-keepattributes EnclosingMethod, InnerClasses

-keep,includedescriptorclasses        class     com.tns.** { *; }
-keep,includedescriptorclasses public interface com.tns.** { *; }

-keep,allowoptimization public class java.lang.** { public  *; }
-keep,allowoptimization public class java.lang.reflect.** { public  *; }
-keep,allowoptimization public class java.io.** { public  *; }
-keep,allowoptimization public class java.nio.** { public  *; }
-keep,allowoptimization public class java.util.** { public  *; }
-keep,allowoptimization public class com.tns.** { public protected *; }
-keep,allowoptimization public class org.nativescript.** { public protected *; }
-keep,allowoptimization public class android.content.** { public protected *; }
-keep,allowoptimization public class android.app.** { public protected *; }
-keep,allowoptimization public class android.os.** { public protected *; }
-keep,allowoptimization public class android.view.** { public protected *; }
-keep,allowoptimization public class android.net.** { public protected *; }
-keep,allowoptimization public class android.graphics.** { public protected *; }
-keep,allowoptimization public class android.util.** { public protected *; }
-keep,allowoptimization public class android.media.** { public protected *; }
-keep,allowoptimization public class android.widget.** { public protected *; }
-keep,allowoptimization public class android.animation.** { public protected *; }
-keep,allowoptimization public class android.provider.** { public protected *; }
-keep,allowoptimization public class android.text.** { public protected *; }
-keep,allowoptimization public class android.webkit.** { public protected *; }
-keep,allowoptimization public class androidx.appcompat.** { public protected *; }
-keep,allowoptimization public class androidx.core.** { public protected *; }
-keep,allowoptimization public class androidx.viewpager.widget.** { public protected *; }
-keep,allowoptimization public class androidx.fragment.** { public protected *; }
-keep,allowoptimization public class androidx.transition.** { public protected *; }
-keep,allowoptimization public class androidx.lifecycle.** { public protected *; }
-keep,allowoptimization public class android.inputmethodservice.** { public protected *; }
-keep,allowoptimization public class androidx.activity.ComponentActivity** { public  *; }
-keep,allowoptimization public class java.lang.Object** { public  *; }
-keep,allowoptimization public class java.lang.System** { public  *; }
-keep,allowoptimization public class java.util.Date** { public  *; }
